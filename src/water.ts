import * as THREE from 'three';
import { heightAt } from './terrain';

/**
 * Generates a tileable RGBA value-noise texture on a canvas.
 * Uses a permutation-free hash with lattice wrapping for tileability.
 * Channels: R = foam blotches, G = high-frequency sparkle noise,
 * B = flow/distortion field, A = cellular blotches.
 */
export function makeTileableNoise(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(size, size);
  // Independent lattice per channel; G/A run at higher cell counts so the
  // sparkle gate and detail read at a finer frequency than the foam.
  const cells = [8, 24, 8, 16];
  const grids: number[][] = cells.map((c) => {
    const g: number[] = [];
    for (let i = 0; i < c * c; i++) g.push(Math.random());
    return g;
  });
  const sample = (ch: number, x: number, y: number): number => {
    const c = cells[ch];
    const grid = grids[ch];
    const gx = (x / size) * c;
    const gy = (y / size) * c;
    const x0 = Math.floor(gx), y0 = Math.floor(gy);
    const fx = gx - x0, fy = gy - y0;
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const at = (ix: number, iy: number) =>
      grid[(((iy % c) + c) % c) * c + (((ix % c) + c) % c)];
    return at(x0, y0) * (1 - sx) * (1 - sy)
         + at(x0 + 1, y0) * sx * (1 - sy)
         + at(x0, y0 + 1) * (1 - sx) * sy
         + at(x0 + 1, y0 + 1) * sx * sy;
  };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      for (let ch = 0; ch < 4; ch++) img.data[idx + ch] = Math.floor(sample(ch, x, y) * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas;
}

// Idyllic Ghibli bay water: dreamy vertex swell pinned at the shoreline,
// lighting-driven color (SSS glow on peaks + sun side), marching foam bands,
// Wind Waker voronoi foam net, ebbing contact ring, sparkles, fresnel.
// ---------------------------------------------------------------------------

/** Water surface Y: below MIN_LAND_Y (-0.4) so lots/roads on the waterfront
 *  pad are never flooded. The bay (carved to -3.5) still has 3m of water.
 *  The 2cm anti-z-fighting offset is included in this value. */
export const WATER_Y = -0.5;
/** Max water depth for normalization: bay carved to -3.5, so ~3.7m max. */
export const MAX_DEPTH = 4.0;
/** Water plane size: matches the 440x440 terrain. */
export const WATER_SIZE = 440;
/** Depth band (m) over which vertex waves fade to zero at the shoreline,
 *  so the waterline never detaches from the beach. */
export const SHORE_PIN_BAND = 2.0;
/** Total vertex wave amplitude (m) — derived from the component amplitudes
 *  below so vWaveH normalization can never silently drift from the shader. */
export const WAVE_AMP_TOTAL = 0.10 + 0.05 + 0.022;

export const WATER_VERT = /* glsl */`
attribute float aDepth;
varying float vDepth;   // depth in meters (baked, static)
varying vec3 vWorldPos;
varying vec3 vWaveN;    // analytic wave normal, shore-pinned
varying float vWaveH;   // normalized wave height -1..1 (SSS peak mask)
varying vec2 vNoiseUv1; // vertex-panned (free interpolation)
varying vec2 vNoiseUv2;
uniform float uTime;
void main() {
  vec4 wp0 = modelMatrix * vec4(position, 1.0);
  vec2 p = wp0.xz;
  float t = uTime;
  // Three dreamy summed sines, vertical only. Slow phases for calm water.
  float h = 0.0;
  vec2 g = vec2(0.0);
  { // primary swell into the bay: A=0.10, wavelength 16m
    vec2 dir = normalize(vec2(0.15, 1.0));
    float k = 6.28318 / 16.0;
    float ph = dot(dir, p) * k + t * 0.9;
    h += 0.10 * sin(ph);
    g += dir * (0.10 * k * cos(ph));
  }
  { // secondary: A=0.05, wavelength 8m, ~40 degrees off
    vec2 dir = normalize(vec2(0.83, 0.55));
    float k = 6.28318 / 8.0;
    float ph = dot(dir, p) * k + t * 1.3;
    h += 0.05 * sin(ph);
    g += dir * (0.05 * k * cos(ph));
  }
  { // ripple: A=0.022, wavelength 3.5m, cross direction
    vec2 dir = normalize(vec2(-0.6, 0.8));
    float k = 6.28318 / 3.5;
    float ph = dot(dir, p) * k + t * 1.9;
    h += 0.022 * sin(ph);
    g += dir * (0.022 * k * cos(ph));
  }
  float shorePin = smoothstep(0.0, ${SHORE_PIN_BAND.toFixed(1)}, aDepth);
  vWaveH = clamp(h / ${WAVE_AMP_TOTAL.toFixed(3)}, -1.0, 1.0);
  vec3 waveN = normalize(vec3(-g.x, 1.0, -g.y));
  vWaveN = normalize(mix(vec3(0.0, 1.0, 0.0), waveN, shorePin));
  vec3 displaced = position;
  displaced.y += h * shorePin;
  vec4 wp = modelMatrix * vec4(displaced, 1.0);
  vWorldPos = wp.xyz;
  vDepth = aDepth;
  // Roystan mobile trick: pan noise UVs in the vertex shader (free).
  vec2 baseUv = wp0.xz * 0.02;
  vNoiseUv1 = baseUv + vec2(t * 0.008, t * 0.005);
  vNoiseUv2 = baseUv * 2.3 - vec2(t * 0.006, -t * 0.004);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const WATER_FRAG = /* glsl */`
precision highp float;
varying float vDepth;
varying vec3 vWorldPos;
varying vec3 vWaveN;
varying float vWaveH;
varying vec2 vNoiseUv1;
varying vec2 vNoiseUv2;
uniform float uTime;
uniform vec3 uShallow;   // tropical turquoise
uniform vec3 uMid;       // blue
uniform vec3 uDeep;      // navy
uniform vec3 uFoamColor; // near-white
uniform vec3 uSssColor;  // subsurface turquoise glow
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunI;     // day-cycle sun intensity
uniform vec3 uSkyColor;   // horizon color for fresnel
uniform sampler2D uNoise;
uniform vec3 uCamPos;

vec2 vhash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
// Single-octave voronoi, returns vec2(F1, F2) distances.
vec2 voro12(vec2 p) {
  vec2 ip = floor(p);
  vec2 fp = fract(p);
  float f1 = 8.0;
  float f2 = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = vhash22(ip + g);
      vec2 r = g + o - fp;
      float d = dot(r, r);
      if (d < f1) { f2 = f1; f1 = d; }
      else if (d < f2) { f2 = d; }
    }
  }
  return sqrt(vec2(f1, f2));
}

void main() {
  // Hard discard where terrain is above water (matches pre-PR#36 behavior).
  // This avoids z-fighting/coplanar alpha-blend artifacts at the shoreline.
  if (vDepth < 0.02) discard;
  float d = clamp(vDepth / ${MAX_DEPTH}.0, 0.0, 1.0);
  vec3 V = normalize(uCamPos - vWorldPos);
  float dist = distance(uCamPos, vWorldPos);
  // Detail fade is REQUIRED: unfaded sparkle/noise twinkles sub-pixel and no
  // AA can fix it (documented shipped-engine postmortem).
  float detailFade = 1.0 - smoothstep(40.0, 120.0, dist);
  // uSunI ranges ~1.6-2.4 over the day cycle; normalize so mix factors and
  // multipliers stay in [0,1] instead of extrapolating past target colors.
  float sunN = clamp(uSunI / 2.4, 0.0, 1.0);

  // --- Base color: 3-stop depth ramp, lighting-driven (never gradient-fill) ---
  vec3 col = mix(uShallow, uMid, smoothstep(0.0, 0.45, d));
  col = mix(col, uDeep, smoothstep(0.35, 1.0, d));

  // Subsurface fake (Sea of Thieves): peaks are thinner so light travels a
  // shorter path — wave crests and the sun side glow turquoise.
  float peakMask = smoothstep(0.15, 0.9, vWaveH);
  float sunSide = pow(max(dot(V, uSunDir), 0.0), 2.0);
  float deepMask = smoothstep(0.35, 0.9, d);
  col = mix(col, uSssColor * (0.55 + 0.45 * sunSide),
            peakMask * 0.55 * sunN * (1.0 - deepMask));
  // Constant luminous lift in the shallows.
  col = mix(col, uSssColor, (1.0 - smoothstep(0.0, 0.35, d)) * 0.25 * sunN);

  // --- Normals: analytic wave normal + noise perturbation (free channels) ---
  vec4 nz1 = texture2D(uNoise, vNoiseUv1);
  vec4 nz2 = texture2D(uNoise, vNoiseUv2);
  vec2 flow = texture2D(uNoise, vWorldPos.xz * 0.008).bg * 2.0 - 1.0;
  vec3 N = normalize(vWaveN + vec3((nz1.r - 0.5) * 0.55, 0.0, (nz2.r - 0.5) * 0.55) * detailFade);

  // --- Foam layer 1: marching bands (Alisavakis) — 4 lines flowing shoreward ---
  float foamDiff = clamp(vDepth / 1.6, 0.0, 1.0); // 0 at shoreline
  float march = sin((foamDiff + uTime * 0.10) * 25.1327); // 8PI: 4 lines
  float lineMask = clamp(march, 0.0, 1.0) * (1.0 - foamDiff); // kills deep banding
  float foamTex = nz1.r;
  float thresh = foamDiff - lineMask * 0.45;
  float foamMarch = smoothstep(thresh - 0.04, thresh + 0.04,
                               foamTex * (1.0 - foamDiff * 0.35) + lineMask * 0.18);

  // --- Foam layer 2: Wind Waker voronoi "fishing net", flow-distorted ---
  vec2 wuv1 = vWorldPos.xz * 0.10 + flow * 0.6 + vec2(uTime * 0.010, uTime * 0.006);
  vec2 wuv2 = vWorldPos.xz * 0.21 + flow * 0.4 + vec2(-uTime * 0.008, uTime * 0.011);
  // slight rotation on the second grid kills visible tiling
  wuv2 = mat2(0.94, -0.34, 0.34, 0.94) * wuv2;
  vec2 f12a = voro12(wuv1);
  vec2 f12b = voro12(wuv2);
  float net1 = 1.0 - smoothstep(0.0, 0.16, f12a.y - f12a.x);
  float net2 = 1.0 - smoothstep(0.0, 0.16, f12b.y - f12b.x);
  float netMask = smoothstep(0.05, 0.30, d) * (1.0 - smoothstep(0.60, 1.0, d)) * detailFade;
  float foamNet = max(net1, net2 * 0.8) * netMask;
  // Dark blue underlayer gives the net painterly depth.
  float netDark = max(1.0 - smoothstep(0.0, 0.34, f12a.y - f12a.x),
                      1.0 - smoothstep(0.0, 0.34, f12b.y - f12b.x)) * netMask;
  col = mix(col, uDeep * 0.55 + uFoamColor * 0.12, netDark * 0.5);

  // --- Foam layer 3: ebbing contact ring at the waterline ---
  float ebb = 0.5 + 0.5 * sin(uTime * 0.8);
  float ringD = 0.10 + ebb * 0.10;
  float foamRing = (1.0 - smoothstep(0.0, ringD, vDepth))
                 * smoothstep(0.0, 0.015, vDepth)
                 * (0.55 + 0.45 * foamTex);

  // --- Fresnel to sky at grazing angles (stronger in deep water) ---
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  col = mix(col, uSkyColor, clamp(fres * 0.6, 0.0, 1.0) * smoothstep(0.05, 0.7, d));

  // --- Composite white foam ---
  float foamAll = clamp(foamMarch + foamNet + foamRing, 0.0, 1.0);
  vec3 foamCol = uFoamColor * (0.92 + 0.08 * foamTex);
  col = mix(col, foamCol, foamAll);

  // --- Sparkles: tight sun glint gated by high-freq noise, distance-faded ---
  vec3 Hv = normalize(uSunDir + V);
  float ndh = max(dot(N, Hv), 0.0);
  float sparkleGate = smoothstep(0.90, 0.995, nz2.g);
  float sparkle = pow(ndh, 700.0) * sparkleGate * detailFade * sunN;
  float glint = pow(ndh, 120.0) * 0.22 * detailFade * sunN;
  // Foam is matte: no glint under foam. Sparkles dance over everything.
  col += uSunColor * (sparkle * 2.5 + glint * (1.0 - foamAll));

  gl_FragColor = vec4(col, 1.0);
}
`;

export interface WaterLight {
  sunDir: THREE.Vector3;
  sunColor: THREE.Color;
  sunIntensity: number;
  skyColor: THREE.Color;
}

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
      uSssColor: { value: new THREE.Color(0x8ff5d8) }, // subsurface glow
      uSunDir: { value: new THREE.Vector3(0.4, 0.8, 0.3).normalize() },
      uSunColor: { value: new THREE.Color(0xfff2d9) },
      uSunI: { value: 1.0 },
      uSkyColor: { value: new THREE.Color(0xaed9e8) },
      uNoise: { value: noiseTex },
      uCamPos: { value: new THREE.Vector3() },
    },
    // Opaque with hard discard at shoreline (no alpha blending).
    // This matches the pre-PR#36 water behavior and avoids z-fighting.
  });
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
  // 200 segments matches the terrain mesh resolution for a clean shoreline.
  const geo = new THREE.PlaneGeometry(WATER_SIZE, WATER_SIZE, 200, 200);
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
 *  The water always animates (no reduced-motion freeze). */
export function updateWater(
  mesh: THREE.Mesh,
  time: number,
  camPos: THREE.Vector3,
  light?: WaterLight,
): void {
  const mat = mesh.userData.material as THREE.ShaderMaterial | undefined;
  if (mat && mat.uniforms && mat.uniforms.uTime) {
    mat.uniforms.uTime.value = time;
    (mat.uniforms.uCamPos.value as THREE.Vector3).copy(camPos);
    if (light) {
      (mat.uniforms.uSunDir.value as THREE.Vector3).copy(light.sunDir);
      (mat.uniforms.uSunColor.value as THREE.Color).copy(light.sunColor);
      mat.uniforms.uSunI.value = light.sunIntensity;
      (mat.uniforms.uSkyColor.value as THREE.Color).copy(light.skyColor);
    }
  }
  const sp = mesh.userData.sparkles as THREE.Points | undefined;
  const sm = sp?.material as THREE.ShaderMaterial | undefined;
  if (sm && sm.uniforms && sm.uniforms.uTime) {
    sm.uniforms.uTime.value = time;
    if (light) {
      (sm.uniforms.uSunColor.value as THREE.Color).copy(light.sunColor);
      sm.uniforms.uSunI.value = light.sunIntensity;
    }
  }
}

// Anime star sparkles floating above the sun-side water (cortiz2894 recipe):
// procedural 4-pointed stars via gl_PointCoord, no textures, sine lifetime.
// ---------------------------------------------------------------------------

export const SPARKLE_VERT = /* glsl */`
attribute float aPhase;
attribute float aScale;
attribute float aDepth;
varying float vTw;
varying float vFade;
uniform float uTime;
void main() {
  vec3 p = position;
  p.x += sin(uTime * 0.12 + aPhase) * 1.5;
  p.z += cos(uTime * 0.10 + aPhase * 1.7) * 1.5;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float tw = 0.5 + 0.5 * sin(uTime * (1.2 + fract(aPhase) * 2.0) + aPhase * 7.0);
  vTw = tw;
  float dist = max(1.0, -mv.z);
  vFade = (1.0 - smoothstep(60.0, 160.0, dist)) * smoothstep(0.4, 0.8, aDepth);
  gl_PointSize = aScale * 130.0 / dist * (0.6 + 0.4 * tw);
  gl_Position = projectionMatrix * mv;
}
`;

export const SPARKLE_FRAG = /* glsl */`
precision highp float;
varying float vTw;
varying float vFade;
uniform vec3 uSunColor;
uniform float uSunI;
void main() {
  if (vFade <= 0.001) discard;
  vec2 pc = abs(gl_PointCoord - 0.5);
  float barX = (1.0 - smoothstep(0.0, 0.05, pc.y)) * (1.0 - smoothstep(0.0, 0.5, pc.x));
  float barY = (1.0 - smoothstep(0.0, 0.05, pc.x)) * (1.0 - smoothstep(0.0, 0.5, pc.y));
  float core = 1.0 - smoothstep(0.0, 0.16, length(pc));
  float star = clamp(barX * 0.7 + barY * 0.7 + core, 0.0, 1.0);
  float sunN = clamp(uSunI / 2.4, 0.0, 1.0);
  float a = star * smoothstep(0.25, 0.85, vTw) * vFade * sunN;
  if (a <= 0.003) discard;
  gl_FragColor = vec4(uSunColor * 1.2, a);
}
`;

/** Scattered star sparkles over open bay water. Add as a child of the water
 *  mesh (or set mesh.userData.sparkles) so updateWater drives its uTime. */
export function createSparkles(count = 140): THREE.Points {
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const scales = new Float32Array(count);
  const depths = new Float32Array(count);
  let placed = 0;
  let attempts = 0;
  while (placed < count && attempts < 6000) {
    attempts++;
    const x = (Math.random() * 2 - 1) * 150;
    const z = (Math.random() * 2 - 1) * 150;
    const depth = WATER_Y - heightAt(x, z);
    if (depth < 0.5 || depth > 3.2) continue;
    positions[placed * 3] = x;
    positions[placed * 3 + 1] = 0.3;
    positions[placed * 3 + 2] = z;
    phases[placed] = Math.random() * Math.PI * 2;
    scales[placed] = 0.5 + Math.random() * 0.8;
    depths[placed] = depth;
    placed++;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  geo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
  geo.setAttribute('aDepth', new THREE.BufferAttribute(depths, 1));
  const mat = new THREE.ShaderMaterial({
    vertexShader: SPARKLE_VERT,
    fragmentShader: SPARKLE_FRAG,
    uniforms: {
      uTime: { value: 0 },
      uSunColor: { value: new THREE.Color(0xfff2d9) },
      uSunI: { value: 1.0 },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  points.renderOrder = 2;
  return points;
}

// Caustic light webs on submerged terrain (shallow sand). Injected into the
// ground's toon material via onBeforeCompile — modifies diffuseColor BEFORE
// lighting, so caustics in shadow/darkness naturally vanish (caustics are
// refocused light; caustics in darkness make no sense).
// ---------------------------------------------------------------------------

/**
 * Adds animated caustic webs to submerged terrain on the given material.
 * Call once at material creation; drive per-frame via
 * `(mat.userData.causticShader as { uniforms: ... })`.
 */
export function applyCausticsToGround(mat: THREE.Material): void {
  const m = mat as THREE.Material & {
    userData: Record<string, unknown>;
    onBeforeCompile: (shader: {
      uniforms: Record<string, { value: number }>;
      vertexShader: string;
      fragmentShader: string;
    }) => void;
    customProgramCacheKey: () => string;
  };
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uCausticTime = { value: 0 };
    shader.uniforms.uCausticSun = { value: 1 };
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        '#include <common>\nvarying vec2 vCausticXZ;\nvarying float vCausticDepth;',
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>\nvCausticXZ = position.xz;\nvCausticDepth = (${WATER_Y.toFixed(2)}) - position.y;`,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
uniform float uCausticTime;
uniform float uCausticSun;
varying vec2 vCausticXZ;
varying float vCausticDepth;
vec2 chash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float cf1(vec2 p) {
  vec2 ip = floor(p);
  vec2 fp = fract(p);
  float f1 = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 r = g + chash22(ip + g) - fp;
      f1 = min(f1, dot(r, r));
    }
  }
  return sqrt(f1);
}`,
      )
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
{
  float cd = vCausticDepth;
  float cmask = (1.0 - smoothstep(0.0, 1.6, cd)) * smoothstep(0.0, 0.06, cd);
  if (cmask > 0.002) {
    vec2 cuv1 = vCausticXZ * 0.33 + vec2(uCausticTime * 0.030, uCausticTime * 0.017);
    vec2 cuv2 = vCausticXZ * 0.29 - vec2(uCausticTime * 0.022, -uCausticTime * 0.025);
    float ca = 1.0 - clamp(abs(cf1(cuv1) - cf1(cuv2)) * 2.4, 0.0, 1.0);
    ca = ca * ca * ca;
    diffuseColor.rgb += vec3(0.55, 0.9, 0.85) * ca * cmask * 0.4 * uCausticSun;
  }
}`,
      );
    m.userData.causticShader = shader;
  };
  // The injected chunks change the program; key the cache so the base toon
  // material used elsewhere is unaffected.
  m.customProgramCacheKey = () => 'ground-caustics-v1';
}
