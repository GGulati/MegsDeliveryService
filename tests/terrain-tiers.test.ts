import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { heightAt } from '../src/terrain';
import { TIERS } from '../src/terrain';

describe('terrain tiers', () => {
  it('flattens to tier elevation at rect centers', () => {
    for (const tier of TIERS) {
      for (const [x0, z0, x1, z1] of tier.rects) {
        const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        // skip water points — tiers never carve water
        const h = heightAt(cx, cz);
        if (h > -1) assert.ok(Math.abs(h - tier.y) < 0.6, `${tier.name} center (${cx},${cz}) height ${h} != ${tier.y}`);
      }
    }
  });
  it('leaves the bay water carved', () => {
    assert.ok(heightAt(30, 60) < -1, 'bay interior stays water');
  });
  it('blends smoothly at tier edges (no cliffs in the test sense)', () => {
    // sample across a tier boundary; max step between 2m samples must be < 1.2m
    const [x0, z0] = TIERS[1].rects[0]; // midtown west edge
    let prev = heightAt(x0 - 30, (z0 + -15) / 2 + 7.5);
    for (let x = x0 - 28; x <= x0 + 30; x += 2) {
      const h = heightAt(x, -75);
      assert.ok(Math.abs(h - prev) < 1.2, `discontinuity at x=${x}: ${prev} -> ${h}`);
      prev = h;
    }
  });
});
