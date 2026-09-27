// tests/infill-blockers.test.ts
// Every infill lot must have a camera blocker with the same AABB as its
// collision solid, or the camera pull-in raycast can't see the buildings.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { generateLots, lotsToSolids } from '../src/town-gen.js';
import { INFILL_SOLIDS } from '../src/simulation.js';
import { solidBlocker } from '../src/scene.js';

describe('infill camera blockers', () => {
  it('produces exactly one camera blocker per infill lot', () => {
    const blockers = lotsToSolids(generateLots()).map(solidBlocker);
    assert.equal(blockers.length, generateLots().length, 'blocker count must match lot count');
  });

  it('each blocker AABB matches its collision solid exactly', () => {
    const blockers = lotsToSolids(generateLots()).map(solidBlocker);
    assert.equal(blockers.length, INFILL_SOLIDS.length, 'blocker count must match infill solid count');
    blockers.forEach((b, i) => {
      // Box3.setFromObject routes through float32 geometry, so allow 1e-4 of
      // pipeline noise around the float64 solid bounds.
      const box = new THREE.Box3().setFromObject(b);
      const s = INFILL_SOLIDS[i];
      for (const [got, want, label] of [
        [box.min.x, s.min.x, 'min.x'], [box.min.y, s.min.y, 'min.y'], [box.min.z, s.min.z, 'min.z'],
        [box.max.x, s.max.x, 'max.x'], [box.max.y, s.max.y, 'max.y'], [box.max.z, s.max.z, 'max.z'],
      ] as const) {
        assert.ok(Math.abs(got - want) < 1e-4, `blocker ${i} ${label} mismatch: ${got} vs ${want}`);
      }
    });
  });
});
