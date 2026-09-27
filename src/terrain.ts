/** Procedural terrain heightfield for the coastal mainland.
 *  heightAt(x, z) is the single source of truth: terrain mesh, water, scatter,
 *  and gameplay all read from it so they can never disagree.
 *
 *  Design: a mainland with the ocean to the south and a harbor bay carved into
 *  the coast — not an island. Authored base (flat town core, carved bay) +
 *  domain-warped noise detail. The coastline wobbles organically; gentle hills
 *  rise inland; the bay is carved below sea level.
 */

import { isInBay } from './world';

// --- Seeded PRNG (mulberry32) ---
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// --- 2D simplex noise (seeded, avoids axis-aligned artefacts) ---
const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;

class Simplex {
  private perm: Uint8Array;
  constructor(seed: number) {
    const rand = mulberry32(seed);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    this.perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }
  noise(xin: number, yin: number): number {
    const grad = [[1, 1], [-1, 1], [1, -1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
    let n0 = 0, n1 = 0, n2 = 0;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s), j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const x0 = xin - (i - t), y0 = yin - (j - t);
    let i1: number, j1: number;
    if (x0 > y0) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) { t0 *= t0; const g = grad[this.perm[ii + this.perm[jj]] & 7]; n0 = t0 * t0 * (g[0] * x0 + g[1] * y0); }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) { t1 *= t1; const g = grad[this.perm[ii + i1 + this.perm[jj + j1]] & 7]; n1 = t1 * t1 * (g[0] * x1 + g[1] * y1); }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) { t2 *= t2; const g = grad[this.perm[ii + 1 + this.perm[jj + 1]] & 7]; n2 = t2 * t2 * (g[0] * x2 + g[1] * y2); }
    return 70 * (n0 + n1 + n2);
  }
}

const TERRAIN_SEED = 1337;
const simplex = new Simplex(TERRAIN_SEED);
const warpSimplex = new Simplex(TERRAIN_SEED + 1);

/** Fractal Brownian motion: 5 octaves, persistence 0.5, lacunarity 2. */
function fbm(x: number, y: number, octaves = 5): number {
  let v = 0, amp = 0.5, freq = 1;
  for (let o = 0; o < octaves; o++) {
    v += amp * simplex.noise(x * freq, y * freq);
    amp *= 0.5; freq *= 2;
  }
  return v;
}

/** Domain warp: displace sample coords by another noise field for organic flow. */
function warp(x: number, y: number, scale: number, amplitude: number): [number, number] {
  const qx = warpSimplex.noise(x * scale + 5.2, y * scale + 1.3);
  const qy = warpSimplex.noise(x * scale + 1.7, y * scale + 9.1);
  return [x + qx * amplitude, y + qy * amplitude];
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/** Sea level. The bay water inlay sits just above this. */
export const SEA_LEVEL = 0;

/**
 * Town tiers: flat pads carved into the heightfield for the San Francisco-style
 * multi-level town. Rects are [x0, z0, x1, z1] with a 20m smooth blend at each
 * edge. Water is masked out — tiers never carve the bay or ocean.
 */
export const TIERS: { name: string; y: number; rects: [number, number, number, number][] }[] = [
  { name: 'waterfront', y: 0, rects: [
    [-95, -15, 5, 175],    // west shore of the bay
    [50, -35, 150, 175],   // east shore + lighthouse headland
  ]},
  { name: 'midtown', y: 10, rects: [
    [-115, -135, 75, -15], // old-town / merchant-row core
  ]},
  { name: 'upper', y: 20, rects: [
    [-135, -215, 135, -135], // mansion hill / park / bungalows band
    [55, -135, 155, -35],    // observatory rise
  ]},
];

/** Internal: heightfield components so color can key off water proximity too. */
function computeTerrain(x: number, z: number): { h: number; bayT: number; oceanT: number; tierCover: number } {
  // Southern coastline with organic wobble (domain-warped).
  const coastZ = 175 + warpSimplex.noise(x * 0.01 + 3.7, 8.2) * 35;

  // Ocean mask: 0 on land, 1 in the open sea (smooth beach transition).
  const oceanT = smoothstep(coastZ - 15, coastZ + 45, z);

  // Bay carve: 1 inside the harbor polygon, soft blend at the shoreline.
  // Past the coastline the bay mouth yields to the ocean depth.
  let bayT = 0;
  if (isInBay(x, z)) {
    bayT = z < coastZ + 25 ? 1 : 0;
  } else {
    const s = 6;
    if (isInBay(x + s, z) || isInBay(x - s, z) || isInBay(x, z + s) || isInBay(x, z - s)) {
      if (z < coastZ + 20) bayT = 0.45; // beach ramp at the bay shore
    }
  }

  // Gentle hills from warped fBm. Kept non-negative so inland terrain never dips
  // below sea level (which would let the ocean plane peek through as lagoons).
  const [hx, hz] = warp(x, z, 0.015, 18);
  const hills = (fbm(hx * 0.02, hz * 0.02) * 0.5 + 0.5) * 8;

  // Hills fade in beyond 145m of center. The tier pads (Task 1) own town
  // flatness now — hillMask only shapes the wild land outside the pads.
  // Hills live inland and up the coast.
  const townDist = Math.hypot(x, z);
  const hillMask = smoothstep(145, 175, townDist);

  // Land height (hills fade out where the bay is carved).
  const landH = hills * hillMask * (1 - bayT);

  // Tier carve: flatten town pads to their tier elevation (land only —
  // water is masked out so the bay and ocean are untouched).
  let tierY = 0, tierCover = 0;
  for (const tier of TIERS) {
    for (const [rx0, rz0, rx1, rz1] of tier.rects) {
      const bx = smoothstep(rx0 - 20, rx0 + 20, x) * (1 - smoothstep(rx1 - 20, rx1 + 20, x));
      const bz = smoothstep(rz0 - 20, rz0 + 20, z) * (1 - smoothstep(rz1 - 20, rz1 + 20, z));
      const cover = bx * bz;
      if (cover > tierCover) { tierCover = cover; tierY = tier.y; }
    }
  }
  const landMask = (bayT < 0.5 && oceanT < 0.5) ? 1 : 0;
  const flatLandH = tierY * tierCover + landH * (1 - tierCover);
  const finalLandH = landH * (1 - landMask) + flatLandH * landMask;

  // Water carve: bay (-3.5) or ocean (-12), whichever is deeper.
  const carve = Math.min(bayT * -3.5, oceanT * -12);

  return { h: finalLandH + carve, bayT, oceanT, tierCover };
}

/**
 * Height of the terrain at (x, z). Pure function — the single source of truth.
 *
 * - Coast: ocean to the south at z ≈ 175 (domain-warped ±35m); land is mainland
 *   extending north/east/west to the horizon — not an island.
 * - Town tiers: flat pads carved at y=0 (waterfront), y=10 (midtown), y=20 (upper),
 *   with 20m smooth blends at the edges; water is never carved.
 * - Hills: warped fBm, 0-8m, fading to flat in the town core (all stops/buildings).
 * - Bay: carved to -3.5 below sea level (water inlay sits at +0.18); the bay mouth
 *   opens past the coast to the ocean (-12).
 */
export function heightAt(x: number, z: number): number {
  return computeTerrain(x, z).h;
}

/** Palette for the terrain color ramps (linear-ish 0-1 RGB). */
const SAND = [0.918, 0.851, 0.659] as const;  // 0xead9a8 beach
const GRASS = [0.498, 0.682, 0.431] as const; // 0x7fae6e meadow
const ROCK = [0.541, 0.498, 0.447] as const;  // 0x8a7f72 stone
const SEABED = [0.72, 0.68, 0.52] as const;   // muted sand under water

function lerp3(a: readonly number[], b: readonly number[], t: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

/**
 * Whether vegetation can grow at (x, z). Masks by altitude (grass band),
 * water proximity (not on the beach), and slope (not on cliffs).
 * Pure function of the heightfield — scatter and color can never disagree.
 */
export function canGrow(x: number, z: number): boolean {
  const { h, bayT, oceanT, tierCover } = computeTerrain(x, z);
  if (h < 0.2) return false;
  // Grass band upper bound is lifted on town tiers (gardens and the park
  // sit at y=10/20); wild hills still stop at the hillfoot.
  if (h > 4.5 && tierCover < 0.5) return false;
  if (bayT > 0 || oceanT > 0.05) return false; // not on the beach
  const e = 1.5;
  const sx = (computeTerrain(x + e, z).h - computeTerrain(x - e, z).h) / (2 * e);
  const sz = (computeTerrain(x, z + e).h - computeTerrain(x, z - e).h) / (2 * e);
  if (Math.hypot(sx, sz) > 0.5) return false; // too steep
  return true;
}

/**
 * Bake the ground texture from a precomputed terrain grid. Runs computeTerrain
 * once per texel instead of 5x per texel (the slope finite differences reuse
 * the grid) — ~4x faster wall-clock. Startup-only.
 */
export function bakeTerrainTexture(TEX: number): Uint8ClampedArray {
  const hs = new Float32Array(TEX * TEX);
  const bays = new Float32Array(TEX * TEX);
  const oceans = new Float32Array(TEX * TEX);
  const tiers = new Float32Array(TEX * TEX);
  const step = 440 / (TEX - 1);
  for (let py = 0; py < TEX; py++) {
    for (let px = 0; px < TEX; px++) {
      const x = (px / (TEX - 1) - 0.5) * 440;
      const z = (0.5 - py / (TEX - 1)) * 440;
      const t = computeTerrain(x, z);
      const i = py * TEX + px;
      hs[i] = t.h; bays[i] = t.bayT; oceans[i] = t.oceanT; tiers[i] = t.tierCover;
    }
  }
  const data = new Uint8ClampedArray(TEX * TEX * 4);
  for (let py = 0; py < TEX; py++) {
    for (let px = 0; px < TEX; px++) {
      const i = py * TEX + px;
      const x = (px / (TEX - 1) - 0.5) * 440;
      const z = (0.5 - py / (TEX - 1)) * 440;
      // Slope from grid central differences. Stencil half-width ≈ 1.5m,
      // matching the smoothing the old per-pixel finite differences used —
      // keeps rock bands identical (narrower stencils turn beaches to rock).
      const K = Math.max(1, Math.round(1.5 / step));
      const xm = hs[py * TEX + Math.max(px - K, 0)], xp = hs[py * TEX + Math.min(px + K, TEX - 1)];
      const zm = hs[Math.max(py - K, 0) * TEX + px], zp = hs[Math.min(py + K, TEX - 1) * TEX + px];
      const slope = Math.hypot((xp - xm) / (2 * K * step), (zp - zm) / (2 * K * step));
      const [r, g, b] = shade(hs[i], bays[i], oceans[i], slope, x, z, tiers[i]);
      const o = i * 4;
      data[o] = r; data[o + 1] = g; data[o + 2] = b; data[o + 3] = 255;
    }
  }
  return data;
}

/** Shared color-ramp: height/water/slope → [r,g,b] 0-255. Used by both surfaceColor and bakeTerrainTexture. */
function shade(h: number, bayT: number, oceanT: number, slope: number, x: number, z: number, tierCover: number): [number, number, number] {
  const nearWater = Math.max(bayT, smoothstep(0.02, 0.25, oceanT));
  // Height-based rock is suppressed on town tier pads (flat inhabited ground
  // stays grass); steep slopes still read as rock via rockT below.
  let c = lerp3(GRASS, ROCK, smoothstep(3.0, 5.5, h) * (1 - tierCover));
  c = lerp3(c, SAND, nearWater * smoothstep(-1.5, -0.3, h));
  const seabedT = smoothstep(-0.8, -1.6, h);
  c = lerp3(c, SEABED, seabedT);
  const rockT = smoothstep(0.45, 0.75, slope);
  if (rockT > 0) c = lerp3(c, ROCK, rockT);
  const m = 1 + fbm(x * 0.08 + 11.3, z * 0.08 + 7.9, 3) * 0.07;
  return [Math.round(c[0] * m * 255), Math.round(c[1] * m * 255), Math.round(c[2] * m * 255)];
}

/**
 * Surface color at (x, z) as [r,g,b]. Height-and-slope ramps with mottling:
 * seabed sand under water, beach sand at the waterline (bay shore and open coast),
 * grass on the town lowland and gentle hills, rock on hilltops and steep slopes.
 * Pure function of the heightfield.
 */
export function surfaceColor(x: number, z: number): [number, number, number] {
  const { h, bayT, oceanT, tierCover } = computeTerrain(x, z);

  // Slope via finite differences of the heightfield.
  const e = 1.5;
  const sx = (computeTerrain(x + e, z).h - computeTerrain(x - e, z).h) / (2 * e);
  const sz = (computeTerrain(x, z + e).h - computeTerrain(x, z - e).h) / (2 * e);
  const slope = Math.hypot(sx, sz);

  // Water proximity: in/near the bay, or in the open-coast transition.
  const nearWater = Math.max(bayT, smoothstep(0.02, 0.25, oceanT));
  // Height-based rock is suppressed on town tier pads (flat inhabited ground
  // stays grass); steep slopes still read as rock via rockT below.
  let c = lerp3(GRASS, ROCK, smoothstep(3.0, 5.5, h) * (1 - tierCover));
  c = lerp3(c, SAND, nearWater * smoothstep(-1.5, -0.3, h));
  const seabedT = smoothstep(-0.8, -1.6, h);
  c = lerp3(c, SEABED, seabedT);
  const rockT = smoothstep(0.45, 0.75, slope);
  if (rockT > 0) c = lerp3(c, ROCK, rockT);
  const m = 1 + fbm(x * 0.08 + 11.3, z * 0.08 + 7.9, 3) * 0.07;
  return [c[0] * m, c[1] * m, c[2] * m];
}
