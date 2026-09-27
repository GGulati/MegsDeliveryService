// tests/park.test.ts
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { PARK_RECT } from '../src/world.js';
import { generateLots } from '../src/town-gen.js';
import { heightAt } from '../src/terrain.js';
import { PARK_TREES, PARK_PATHS, PARK_CONSERVATORY } from '../src/park.js';

describe('park', () => {
  it('PARK_RECT is defined and no infill lot lands inside it', () => {
    const [x0, z0, x1, z1] = PARK_RECT;
    for (const lot of generateLots()) {
      const inside = lot.x > x0 && lot.x < x1 && lot.z > z0 && lot.z < z1;
      assert.ok(!inside, `lot at (${lot.x},${lot.z}) inside the park`);
    }
  });

  it('park trees form two allees inside the rect on the tier', () => {
    const [x0, z0, x1, z1] = PARK_RECT;
    assert.ok(PARK_TREES.length > 0 && PARK_TREES.length <= 60,
      `expected 1-60 park trees, got ${PARK_TREES.length}`);
    const rows = new Set(PARK_TREES.map(t => t.z));
    assert.equal(rows.size, 2, `expected two tree allees, got rows at ${[...rows]}`);
    for (const t of PARK_TREES) {
      assert.ok(t.x > x0 && t.x < x1 && t.z > z0 && t.z < z1,
        `park tree at (${t.x},${t.z}) outside PARK_RECT`);
      assert.ok(Math.abs(heightAt(t.x, t.z) - 20) < 0.6,
        `park tree at (${t.x},${t.z}) not on the y=20 tier (h=${heightAt(t.x, t.z)})`);
    }
  });

  it('conservatory sits at the park center and paths cross there', () => {
    const [x0, z0, x1, z1] = PARK_RECT;
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    assert.equal(PARK_CONSERVATORY.x, cx);
    assert.equal(PARK_CONSERVATORY.z, cz);
    assert.equal(PARK_PATHS.length, 2);
    for (const p of PARK_PATHS) {
      // Each path spans the full rect along one axis and crosses the center.
      const spansX = p.x0 <= x0 && p.x1 >= x1;
      const spansZ = p.z0 <= z0 && p.z1 >= z1;
      assert.ok(spansX || spansZ, `path ${JSON.stringify(p)} does not span the park`);
      assert.ok(p.x0 < cx && p.x1 > cx && p.z0 < cz && p.z1 > cz,
        `path ${JSON.stringify(p)} does not cross the park center`);
    }
  });
});
