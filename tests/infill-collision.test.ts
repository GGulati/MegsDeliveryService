// tests/infill-collision.test.ts — Task 9: the 204 procedural infill buildings
// are visual-only in scene.ts; their AABBs must join the collision set in
// simulation.ts so the player cannot fly through them.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { COLLISION_SOLIDS, INFILL_SOLIDS } from '../src/simulation.js';
import { SOLIDS, WALLS, INFRA_SOLIDS } from '../src/world.js';
import { generateLots, lotsToSolids } from '../src/town-gen.js';

describe('infill collision', () => {
  it('every generated lot maps to an infill solid with matching footprint', () => {
    const expected = lotsToSolids(generateLots());
    assert.equal(INFILL_SOLIDS.length, expected.length, 'infill solid count must match lot count');
    for (let i = 0; i < expected.length; i++) {
      assert.deepEqual(INFILL_SOLIDS[i].min, expected[i].min, `infill solid ${i} min mismatch`);
      assert.deepEqual(INFILL_SOLIDS[i].max, expected[i].max, `infill solid ${i} max mismatch`);
    }
  });

  it('COLLISION_SOLIDS contains heroes, infill, walls, and infra', () => {
    assert.equal(
      COLLISION_SOLIDS.length,
      SOLIDS.length + INFILL_SOLIDS.length + WALLS.length + INFRA_SOLIDS.length,
      'collision set must be heroes + infill + walls + infra',
    );
    for (const s of INFILL_SOLIDS) assert.ok(COLLISION_SOLIDS.includes(s), 'infill solid missing from collision set');
    for (const s of SOLIDS) assert.ok(COLLISION_SOLIDS.includes(s), 'hero solid missing from collision set');
    for (const s of WALLS) assert.ok(COLLISION_SOLIDS.includes(s), 'wall missing from collision set');
    for (const s of INFRA_SOLIDS) assert.ok(COLLISION_SOLIDS.includes(s), 'infra solid missing from collision set');
  });
});
