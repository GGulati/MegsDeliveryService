// tests/town-gen.test.ts — seeded procedural town infill (Task 5).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { generateLots, lotsToSolids, TOWN_SEED } from '../src/town-gen.js';
import { SOLIDS } from '../src/world.js';

const overlapsXZ = (a: { min: { x: number; z: number }; max: { x: number; z: number } },
                    b: { min: { x: number; z: number }; max: { x: number; z: number } }) =>
  a.min.x < b.max.x && a.max.x > b.min.x && a.min.z < b.max.z && a.max.z > b.min.z;

describe('town-gen', () => {
  it('uses the specified town seed', () => {
    assert.equal(TOWN_SEED, 20260927);
  });
  it('is deterministic: same seed, same lots', () => {
    const a = generateLots(), b = generateLots();
    assert.equal(a.length, b.length);
    assert.deepEqual(a, b);
  });
  it('produces 200-300 lots', () => {
    const n = generateLots().length;
    assert.ok(n >= 200 && n <= 300, `got ${n} lots`);
  });
  it('no lot overlaps another lot or a hero', () => {
    const lots = generateLots();
    const solids = [...SOLIDS, ...lotsToSolids(lots)];
    // Intentional pre-existing overlap: the observatory dome (SOLIDS[24])
    // sits on the Hill Observatory roof (SOLIDS[5]). Same exemption as tests/heroes.test.ts.
    const isDomePair = (i: number, j: number) =>
      (i === 5 && j === SOLIDS.length - 2) || (i === SOLIDS.length - 2 && j === 5);
    for (let i = 0; i < solids.length; i++)
      for (let j = i + 1; j < solids.length; j++) {
        if (isDomePair(i, j)) continue;
        assert.ok(!overlapsXZ(solids[i], solids[j]), `solids ${i} and ${j} overlap`);
      }
  });
  it('lots sit on terrain', () => {
    for (const s of lotsToSolids(generateLots())) {
      assert.ok(s.min.y >= -0.5, `lot floats below terrain: ${s.min.y}`);
      assert.ok(s.max.y - s.min.y >= 3, 'lot has no height');
    }
  });
  it('no lot footprint intersects the future park rectangle', () => {
    // PARK_RECT = [-40, -195, 40, -155] (minX, minZ, maxX, maxZ); Task 8 builds the park here.
    const park = { min: { x: -40, z: -195 }, max: { x: 40, z: -155 } };
    for (const s of lotsToSolids(generateLots()))
      assert.ok(!overlapsXZ(s, park), `lot at (${s.min.x},${s.min.z}) intersects the park rect`);
  });
});
