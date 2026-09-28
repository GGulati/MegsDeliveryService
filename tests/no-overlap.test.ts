import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { intersections, intersectionMarkings } from '../src/road-deck.js';
import { polysOverlap, quadsOverlap, type Poly2 } from '../src/poly2d.js';

describe('no-overlap: pavement ownership by construction', () => {
  it('intersection zones are pairwise disjoint (merged, not stacked)', () => {
    const ixs = intersections();
    for (let i = 0; i < ixs.length; i++) {
      for (let j = i + 1; j < ixs.length; j++) {
        const a: Poly2 = ixs[i].ring.map(v => [v.x, v.z]);
        const b: Poly2 = ixs[j].ring.map(v => [v.x, v.z]);
        assert.ok(
          !polysOverlap(a, b),
          `Zones ${ixs[i].nodeId} and ${ixs[j].nodeId} overlap — must be merged, not stacked`
        );
      }
    }
  });

  it('markings within an intersection are pairwise disjoint', () => {
    const ixs = intersections();
    for (const ix of ixs) {
      const { white, walk } = intersectionMarkings(ix);
      const all: Poly2[] = [...white.map(q => q as Poly2), ...walk.map(q => q as Poly2)];
      for (let i = 0; i < all.length; i++) {
        for (let j = i + 1; j < all.length; j++) {
          assert.ok(
            !quadsOverlap(all[i], all[j]),
            `Markings ${i} and ${j} in ${ix.nodeId} overlap — deconfliction failed`
          );
        }
      }
    }
  });

  it('merged nodes have combined legs and valid clips', () => {
    const ixs = intersections();
    for (const ix of ixs) {
      if (ix.mergedIds) {
        // Merged node should have legs from all original nodes
        assert.ok(ix.legs.length > 0, `Merged ${ix.nodeId} has no legs`);
        // All clips should be positive
        for (const leg of ix.legs) {
          assert.ok(leg.clip > 0, `Leg clip <= 0 in merged ${ix.nodeId}`);
        }
      }
    }
  });
});
