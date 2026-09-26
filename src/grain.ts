/** Deterministic cosmetic grain.
 *
 * The toon-material grain texture used to be sprinkled with Math.random(),
 * so every load produced a different speckle pattern. Gameplay is
 * deterministic; the grain should be too. This module generates the speckle
 * layout from a seeded PRNG, so the same seed always yields the same grain.
 */

/** Seed for the in-game grain texture. Fixed: the shipped look never changes. */
export const GRAIN_SEED = 0x6d795dd4;

/** Speckles per grain tile. */
export const GRAIN_SPECKS = 110;

/** Grain tile size in px. */
export const GRAIN_SIZE = 32;

/** Max speckle alpha (matches the old `Math.random() * .07` range). */
export const GRAIN_MAX_ALPHA = 0.07;

/** Mulberry32: tiny seeded PRNG, deterministic across runs and platforms. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface Speckle {
  x: number;
  y: number;
  alpha: number;
}

/** The 110 speckles for one grain tile, in draw order (alpha, x, y per speck,
 *  matching the original loop). Pure: same seed in, same speckles out. */
export function grainSpeckles(seed: number): Speckle[] {
  const rand = mulberry32(seed);
  const speckles: Speckle[] = [];
  for (let i = 0; i < GRAIN_SPECKS; i++) {
    const alpha = rand() * GRAIN_MAX_ALPHA;
    const x = rand() * GRAIN_SIZE;
    const y = rand() * GRAIN_SIZE;
    speckles.push({ x, y, alpha });
  }
  return speckles;
}
