import test from 'node:test';
import assert from 'node:assert/strict';
import { grainSpeckles, mulberry32, GRAIN_SEED, GRAIN_SPECKS, GRAIN_SIZE, GRAIN_MAX_ALPHA } from '../src/grain';

// The toon-material grain used to be sprinkled with Math.random(), so every
// page load produced a different speckle pattern. It is now generated from a
// seeded PRNG: same seed in, same speckles out, forever.

test('same seed produces identical speckles', () => {
  assert.deepEqual(grainSpeckles(GRAIN_SEED), grainSpeckles(GRAIN_SEED));
});

test('speckle generation never touches Math.random', () => {
  const before = grainSpeckles(GRAIN_SEED);
  const realRandom = Math.random;
  (Math as { random: () => number }).random = () => 0.999;
  try {
    assert.deepEqual(grainSpeckles(GRAIN_SEED), before);
  } finally {
    (Math as { random: () => number }).random = realRandom;
  }
});

test('different seeds produce different grain', () => {
  assert.notDeepEqual(grainSpeckles(GRAIN_SEED), grainSpeckles(GRAIN_SEED + 1));
});

test('speckles stay within the tile and alpha bounds', () => {
  const speckles = grainSpeckles(GRAIN_SEED);
  assert.equal(speckles.length, GRAIN_SPECKS);
  for (const s of speckles) {
    assert.ok(s.x >= 0 && s.x < GRAIN_SIZE, `x out of range: ${s.x}`);
    assert.ok(s.y >= 0 && s.y < GRAIN_SIZE, `y out of range: ${s.y}`);
    assert.ok(s.alpha >= 0 && s.alpha < GRAIN_MAX_ALPHA, `alpha out of range: ${s.alpha}`);
  }
});

test('mulberry32 is deterministic per seed', () => {
  const a = mulberry32(42), b = mulberry32(42);
  for (let i = 0; i < 10; i++) assert.equal(a(), b());
});
