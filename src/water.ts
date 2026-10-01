import * as THREE from 'three';
import { heightAt } from './terrain';

/**
 * Generates a tileable value-noise texture on a canvas.
 * Uses a permutation-free hash with lattice wrapping for tileability.
 */
export function makeTileableNoise(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(size, size);
  // Simple tileable value noise: random grid, bilinear interp, wrap lattice.
  const gridSize = 8;
  const grid: number[] = [];
  for (let i = 0; i < gridSize * gridSize; i++) grid.push(Math.random());
  const at = (x: number, y: number) => grid[((y % gridSize) * gridSize + (x % gridSize))];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const gx = (x / size) * gridSize;
      const gy = (y / size) * gridSize;
      const x0 = Math.floor(gx), y0 = Math.floor(gy);
      const fx = gx - x0, fy = gy - y0;
      const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
      const v = at(x0, y0) * (1 - sx) * (1 - sy)
              + at(x0 + 1, y0) * sx * (1 - sy)
              + at(x0, y0 + 1) * (1 - sx) * sy
              + at(x0 + 1, y0 + 1) * sx * sy;
      const idx = (y * size + x) * 4;
      const byte = Math.floor(v * 255);
      img.data[idx] = byte; img.data[idx + 1] = byte;
      img.data[idx + 2] = byte; img.data[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas;
}

// a custom shader: depth-gradient color, generous noise-gated foam, whitecaps.
// ---------------------------------------------------------------------------

/** Water surface Y: sea level (terrain.ts SEA_LEVEL). The +0.18 inlay offset
 *  is for the bay mesh only; the main water plane sits at sea level to avoid
 *  flooding the y=0 waterfront pad. */
export const WATER_Y = 0;
/** Max water depth for normalization: bay carved to -3.5, so ~3.7m max. */
export const MAX_DEPTH = 4.0;
/** Water plane size: matches the 440x440 terrain. */
export const WATER_SIZE = 440;

export const WATER_VERT = /* glsl */`
attribute float aDepth;
varying float vDepth; // depth in meters
varying vec3 vWorldPos;
varying vec2 vNoiseUv1;
varying vec2 vNoiseUv2;
uniform float uTime;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vDepth = aDepth;
  // Roystan mobile trick: pan noise UVs in the vertex shader (free).
  vec2 baseUv = wp.xz * 0.02;
  vNoiseUv1 = baseUv + vec2(uTime * 0.008, uTime * 0.005);
  vNoiseUv2 = baseUv * 2.3 - vec2(uTime * 0.006, -uTime * 0.004);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const WATER_FRAG = /* glsl */`
precision highp float;
varying float vDepth; // depth in meters
varying vec3 vWorldPos;
varying vec2 vNoiseUv1;
varying vec2 vNoiseUv2;
uniform float uTime;
uniform vec3 uShallow;   // tropical turquoise
uniform vec3 uMid;       // blue
uniform vec3 uDeep;      // navy
uniform vec3 uFoamColor; // near-white
uniform sampler2D uNoise;
uniform vec3 uCamPos;

void main() {
  // Hard discard where terrain is above water (matches pre-PR#36 behavior).
  // This avoids z-fighting/coplanar alpha-blend artifacts at the shoreline.
  if (vDepth < 0.02) discard;
  float d = clamp(vDepth / ${MAX_DEPTH}.0, 0.0, 1.0);
  // Depth gradient: turquoise -> blue -> navy, all smoothstep.
  vec3 col = mix(uShallow, uMid, smoothstep(0.0, 0.45, d));
  col = mix(col, uDeep, smoothstep(0.35, 1.0, d));

  // Foam: two noise samples, opposing scrolls (UVs pre-panned in vertex).
  float n1 = texture2D(uNoise, vNoiseUv1).r;
  float n2 = texture2D(uNoise, vNoiseUv2).r;
  float foamNoise = max(n1, n2);

  // Generous Wind Waker foam: wide band, depth-gated cutoff.
  float foamDist = 0.22; // foam band width in depth01 units
  float cutoff = (1.0 - smoothstep(0.0, foamDist, d)) * 0.55;
  float w = fwidth(foamNoise) * 1.5 + 1e-4;
  float foam = smoothstep(cutoff - w, cutoff + w, foamNoise);

  // Contact cap: thin breathing ring at the waterline.
  float capWidth = 0.03;
  float breathe = 0.75 + 0.25 * sin(uTime * 1.2);
  float cap = (1.0 - smoothstep(0.0, capWidth * breathe, d));
  foam = max(foam, cap);

  // Whitecaps in open water: sparse noise peaks where depth is high.
  float cap2 = smoothstep(0.75, 0.95, n1 * n2 * 2.0) * smoothstep(0.3, 0.7, d);
  float dist = distance(uCamPos, vWorldPos);
  float detailFade = 1.0 - smoothstep(40.0, 120.0, dist);
  cap2 *= detailFade;

  // Foam is matte: kill sun glint under foam (done below via foam mask).
  vec3 foamCol = uFoamColor * (0.92 + 0.08 * foamNoise);

  // Broad sun glint (not a tight lobe), faded with distance.
  vec3 nrm = vec3(0.0, 1.0, 0.0); // flat water normal; perturb slightly
  float pert = (n1 - 0.5) * 0.35 * detailFade;
  nrm = normalize(vec3(pert, 1.0, pert * 0.7));
  vec3 sunDir = normalize(vec3(0.4, 0.8, 0.3));
  float glint = pow(max(dot(nrm, sunDir), 0.0), 24.0) * 0.35 * detailFade;
  glint *= (1.0 - foam); // no glint under foam

  vec3 finalCol = mix(col, foamCol, clamp(foam + cap2, 0.0, 1.0));
  finalCol += vec3(1.0, 0.98, 0.9) * glint;

  gl_FragColor = vec4(finalCol, 1.0);
}
`;

export function createWaterMaterial(noiseTex: THREE.Texture): THREE.ShaderMaterial {
  const mat = new THREE.ShaderMaterial({
    vertexShader: WATER_VERT,
    fragmentShader: WATER_FRAG,
    uniforms: {
      uTime: { value: 0 },
      uShallow: { value: new THREE.Color(0x4fe3c1) }, // tropical turquoise
      uMid: { value: new THREE.Color(0x2a9fd8) },     // blue
      uDeep: { value: new THREE.Color(0x0f3a6e) },    // navy
      uFoamColor: { value: new THREE.Color(0xf4fbff) },
      uNoise: { value: noiseTex },
      uCamPos: { value: new THREE.Vector3() },
    },
    // Opaque with hard discard at shoreline (no alpha blending).
    // This matches the pre-PR#36 water behavior and avoids z-fighting.
  });
  // Note: fwidth() is core in WebGL2 (three r163+ dropped WebGL1), so no
  // GL_OES_standard_derivatives extension directive is needed.
  return mat;
}

export function createWater(): THREE.Mesh {
  const noiseCanvas = makeTileableNoise(256);
  const noiseTex = new THREE.CanvasTexture(noiseCanvas);
  noiseTex.wrapS = noiseTex.wrapT = THREE.RepeatWrapping;
  noiseTex.generateMipmaps = true;
  noiseTex.minFilter = THREE.LinearMipmapLinearFilter;
  const mat = createWaterMaterial(noiseTex);
  // Plane matching the terrain extent; per-vertex depth baked from heightAt.
  // Depth in meters (not normalized); shader normalizes by MAX_DEPTH.
  const geo = new THREE.PlaneGeometry(WATER_SIZE, WATER_SIZE, 100, 100);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const depths = new Float32Array(pos.count);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    // Depth = water Y minus terrain height; negative where terrain is above
    // water (shader discards depth < 0.02m).
    depths[i] = WATER_Y - heightAt(x, z);
  }
  geo.setAttribute('aDepth', new THREE.BufferAttribute(depths, 1));
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = WATER_Y;
  mesh.renderOrder = 1;
  // Store material ref for per-frame uTime/uCamPos updates (done by caller).
  mesh.userData.material = mat;
  mesh.userData.noiseTex = noiseTex;
  return mesh;
}

/** Per-frame uniform update for the shader water. Call from the render loop
 *  with the accumulated (non-paused) clock and the current camera position.
 *  Skipped under reducedMotion, which freezes uTime. */
export function updateWater(mesh: THREE.Mesh, time: number, camPos: THREE.Vector3): void {
  const mat = mesh.userData.material as THREE.ShaderMaterial | undefined;
  if (!mat || !mat.uniforms || !mat.uniforms.uTime) return;
  mat.uniforms.uTime.value = time;
  (mat.uniforms.uCamPos.value as THREE.Vector3).copy(camPos);
}
