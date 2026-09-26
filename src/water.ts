import * as THREE from 'three';
import { heightAt } from './terrain';

/** Size of the baked heightmap texture (covers the 440x440 terrain). */
const HEIGHTMAP_SIZE = 256;
const WORLD_SIZE = 440;

/** Bakes heightAt into a float texture so the water shader can discover depth. */
function bakeHeightmap(): THREE.DataTexture {
  const data = new Float32Array(HEIGHTMAP_SIZE * HEIGHTMAP_SIZE);
  for (let j = 0; j < HEIGHTMAP_SIZE; j++) {
    for (let i = 0; i < HEIGHTMAP_SIZE; i++) {
      // Texture v=0 is at z=-220 (after rotateX, plane UVs map accordingly).
      const x = (i / (HEIGHTMAP_SIZE - 1) - 0.5) * WORLD_SIZE;
      const z = (j / (HEIGHTMAP_SIZE - 1) - 0.5) * WORLD_SIZE;
      data[j * HEIGHTMAP_SIZE + i] = heightAt(x, z);
    }
  }
  const tex = new THREE.DataTexture(data, HEIGHTMAP_SIZE, HEIGHTMAP_SIZE, THREE.RedFormat, THREE.FloatType);
  tex.needsUpdate = true;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}

const waterVert = /* glsl */`
  varying vec2 vWorldXZ;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldXZ = wp.xz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const waterFrag = /* glsl */`
  uniform sampler2D uHeightmap;
  uniform float uTime;
  varying vec2 vWorldXZ;

  // Cheap value noise for the foam edge.
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }

  void main() {
    vec2 uv = vWorldXZ / ${WORLD_SIZE}.0 + 0.5;
    float terrainH = texture2D(uHeightmap, uv).r;
    float depth = -terrainH; // water surface at y=0

    if (depth < 0.02) discard; // land at/above water — show terrain, not water

    // Depth ramp: pale turquoise shallows -> blue -> deep navy.
    vec3 shallow = vec3(0.55, 0.90, 0.85);
    vec3 mid     = vec3(0.25, 0.68, 0.78);
    vec3 deep    = vec3(0.10, 0.32, 0.55);
    vec3 col = depth < 2.5
      ? mix(shallow, mid, depth / 2.5)
      : mix(mid, deep, clamp((depth - 2.5) / 7.0, 0.0, 1.0));

    // Foam hugs the shoreline; the edge shimmers with noise + time.
    float foamBand = 1.0 - smoothstep(0.05, 0.45, depth);
    float fn = vnoise(vWorldXZ * 1.4 + vec2(uTime * 0.35, -uTime * 0.22));
    float foam = foamBand * smoothstep(0.35, 0.75, fn + foamBand * 0.35);
    col = mix(col, vec3(0.98, 0.99, 0.98), foam * 0.85);

    // Gentle stylized ripple light.
    float ripple = sin(vWorldXZ.x * 0.9 + uTime * 1.6) * sin(vWorldXZ.y * 0.8 - uTime * 1.1);
    col *= 1.0 + ripple * 0.035;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export interface WaterMesh {
  mesh: THREE.Mesh;
  update(time: number): void;
}

/** One water plane for the whole world. Depth is discovered from the heightfield,
 *  so the coastline never needs a separate polygon — sand, foam, and color all
 *  follow the true terrain. */
export function buildWater(): WaterMesh {
  const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uHeightmap: { value: bakeHeightmap() },
      uTime: { value: 0 },
    },
    vertexShader: waterVert,
    fragmentShader: waterFrag,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = 0;
  mesh.frustumCulled = false;
  return {
    mesh,
    update(time: number) {
      mat.uniforms.uTime.value = time;
    },
  };
}
