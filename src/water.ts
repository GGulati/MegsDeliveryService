import * as THREE from 'three';
import { heightAt } from './terrain';

/** Water plane resolution matches the terrain mesh so depth interpolates smoothly. */
const WATER_SEGMENTS = 200;
const WORLD_SIZE = 440;

const waterVert = /* glsl */`
  precision highp float;
  attribute float aDepth;
  varying float vDepth;
  varying vec2 vWorldXZ;
  void main() {
    vDepth = aDepth;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldXZ = wp.xz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const waterFrag = /* glsl */`
  precision highp float;
  uniform float uTime;
  varying float vDepth;
  varying vec2 vWorldXZ;

  void main() {
    float depth = vDepth; // smoothly interpolated from per-vertex CPU depth
    if (depth < 0.02) discard;

    // Depth ramp: pale turquoise shallows -> blue -> deep navy.
    vec3 shallow = vec3(0.55, 0.90, 0.85);
    vec3 mid     = vec3(0.25, 0.68, 0.78);
    vec3 deep    = vec3(0.10, 0.32, 0.55);
    vec3 col = depth < 2.5
      ? mix(shallow, mid, depth / 2.5)
      : mix(mid, deep, clamp((depth - 2.5) / 7.0, 0.0, 1.0));

    // Foam hugs the shoreline in smooth sine-driven bands.
    float foamBand = 1.0 - smoothstep(0.05, 0.5, depth);
    float w1 = sin(vWorldXZ.x * 0.55 + uTime * 0.9) * sin(vWorldXZ.y * 0.48 - uTime * 0.7);
    float w2 = sin((vWorldXZ.x + vWorldXZ.y) * 0.23 + uTime * 0.5);
    float foam = foamBand * smoothstep(0.15, 0.85, 0.5 + 0.32 * w1 + 0.18 * w2);
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

/** One water plane for the whole world. Depth is computed per-vertex on the CPU
 *  from heightAt and interpolated — no heightmap texture, so there's nothing
 *  to mis-filter and no pixelation. The coastline follows the true terrain. */
export function buildWater(): WaterMesh {
  const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, WATER_SEGMENTS, WATER_SEGMENTS);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const depths = new Float32Array(pos.count);
  for (let i = 0; i < pos.count; i++) {
    depths[i] = -heightAt(pos.getX(i), pos.getZ(i)); // water surface at y=0
  }
  geo.setAttribute('aDepth', new THREE.BufferAttribute(depths, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: {
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
