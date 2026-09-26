/** Procedural terrain heightfield for the island.
 *  heightAt(x, z) is the single source of truth: terrain mesh, water, scatter,
 *  and gameplay all read from it so they can never disagree.
 *
 *  Design: authored base (flat town core, carved bay) + domain-warped noise detail.
 *  The island edge wobbles via warped radius (kills the disc silhouette); gentle
 *  hills rise outside the town core; the bay is carved below sea level.
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

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

/** Sea level. The bay water inlay sits just above this. */
export const SEA_LEVEL = 0;

/** Base island radius before the domain-warped wobble. */
const ISLAND_RADIUS = 190;

/**
 * Height of the terrain at (x, z). Pure function — the single source of truth.
 *
 * - Coastline: radial falloff with domain-warped edge (±22m wobble kills the disc).
 * - Hills: warped fBm, ±5m, fading to flat in the town core (all stops/buildings).
 * - Bay: carved to -3.5 below sea level (water inlay sits at +0.18).
 * - Seabed: continues down to -12 past the island edge (dips under the ocean disc).
 */
export function heightAt(x: number, z: number): number {
  // Domain-warped coastline radius.
  const [wx, wz] = warp(x, z, 0.008, 26);
  const warpedR = Math.hypot(wx, wz);
  const edge = ISLAND_RADIUS + warpSimplex.noise(x * 0.008, z * 0.008) * 22;

  // Island mask: 1 deep inside, 0 past the warped edge. Stays at 1 until 30m
  // from the edge, then falls smoothly (so the town center is solid ground).
  const distToEdge = edge - warpedR;
  const t = Math.min(1, Math.max(0, distToEdge / 30));
  const mask = t * t * (3 - 2 * t);

  // Gentle hills from warped fBm.
  const [hx, hz] = warp(x, z, 0.015, 18);
  const hills = fbm(hx * 0.02, hz * 0.02) * 5;

  // Town core stays flat: fade hills to 0 within 145m of center (covers all stops;
  // the farthest, Beacon House, is at ~134m). Hills live in the outer island ring.
  const townDist = Math.hypot(x, z);
  const hillMask = smoothstep(145, 175, townDist);

  // Bay carve: smooth depression to -3.5 where isInBay, with a soft shoreline blend.
  // Sample isInBay in a small neighborhood for an approximate distance-to-shore.
  let bayT = 0;
  if (isInBay(x, z)) {
    bayT = 1;
  } else {
    // Near-shore blend: check 4 samples 6m away; if any is water, we're at the beach.
    const s = 6;
    if (isInBay(x + s, z) || isInBay(x - s, z) || isInBay(x, z + s) || isInBay(x, z - s)) {
      bayT = 0.45; // beach ramp
    }
  }
  const bayDepth = -3.5 * bayT;

  // Combine: land height inside the mask, seabed (-12) outside, smooth blend.
  const landH = hills * hillMask * (1 - bayT) + bayDepth;
  const seabedH = -12;
  return landH * mask + seabedH * (1 - mask);
}
