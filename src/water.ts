import * as THREE from 'three';
import { heightAt } from './terrain';

/** Size of the baked heightmap texture (covers the 440x440 terrain). */
const HEIGHTMAP_SIZE = 512;
const WORLD_SIZE = 440;
/** Height range encoded in the byte texture: [-12, +8] meters. */
const H_MIN = -12, H_RANGE = 20;

/** Bakes heightAt into a byte texture so the water shader can discover depth.
 *  Uses UnsignedByteType (not FloatType): linear filtering on float textures
 *  requires OES_texture_float_linear, which is ~unsupported everywhere and
 *  silently falls back to nearest — the blocky-water bug. Bytes filter universally. */
function bakeHeightmap(): THREE.DataTexture {
  const data = new Uint8Array(HEIGHTMAP_SIZE * HEIGHTMAP_SIZE);
  for (let j = 0; j < HEIGHTMAP_SIZE; j++) {
    for (let i = 0; i < HEIGHTMAP_SIZE; i++) {
      const x = (i / (HEIGHTMAP_SIZE - 1) - 0.5) * WORLD_SIZE;
      const z = (j / (HEIGHTMAP_SIZE - 1) - 0.5) * WORLD_SIZE;
      const h = heightAt(x, z);
      const enc = Math.round(((h - H_MIN) / H_RANGE) * 255);
      data[j * HEIGHTMAP_SIZE + i] = Math.max(0, Math.min(255, enc));
    }
  }
  const tex = new THREE.DataTexture(data, HEIGHTMAP_SIZE, HEIGHTMAP_SIZE, THREE.RedFormat, THREE.UnsignedByteType);
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
  precision highp float;
  uniform sampler2D uHeightmap;
  uniform float uTime;
  varying vec2 vWorldXZ;

  void main() {
    vec2 uv = vWorldXZ / ${WORLD_SIZE}.0 + 0.5;
    float terrainH = texture2D(uHeightmap, uv).r * ${H_RANGE}.0 + (${H_MIN}.0);
    float depth = -terrainH; // water surface at y=0

    if (depth < 0.02) discard; // land at/above water — show terrain, not water

    // Depth ramp: pale turquoise shallows -> blue -> deep navy.
    vec3 shallow = vec3(0.55, 0.90, 0.85);
    vec3 mid     = vec3(0.25, 0.68, 0.78);
    vec3 deep    = vec3(0.10, 0.32, 0.55);
    vec3 col = depth < 2.5
      ? mix(shallow, mid, depth / 2.5)
      : mix(mid, deep, clamp((depth - 2.5) / 7.0, 0.0, 1.0));

    // Foam hugs the shoreline in smooth bands. Layered sine waves give an
    // organic edge without hash noise (which dithers in mediump precision).
    float foamBand = 1.0 - smoothstep(0.05, 0.5, depth);
    float w1 = sin(vWorldXZ.x * 0.55 + uTime * 0.9) * sin(vWorldXZ.y * 0.48 - uTime * 0.7);
    float w2 = sin((vWorldXZ.x + vWorldXZ.y) * 0.23 + uTime * 0.5);
    float foamEdge = smoothstep(0.15, 0.85, 0.5 + 0.32 * w1 + 0.18 * w2);
    float foam = foamBand * foamEdge;
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
