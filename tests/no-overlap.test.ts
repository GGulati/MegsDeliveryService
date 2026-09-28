import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { intersections, intersectionMarkings } from '../src/road-deck.js';
import { ROAD_EDGES, nodeById } from '../src/roads.js';
import { polysOverlap, quadsOverlap, type Poly2 } from '../src/poly2d.js';

describe('no-overlap: pavement ownership by construction', () => {
  it('intersection zones are pairwise disjoint at grade (merged, not stacked)', () => {
    const ixs = intersections();
    const vRange = (ix: (typeof ixs)[number]): [number, number] => {
      let lo = Infinity, hi = -Infinity;
      for (const v of ix.ring) { lo = Math.min(lo, v.h); hi = Math.max(hi, v.h); }
      return [lo, hi];
    };
    for (let i = 0; i < ixs.length; i++) {
      for (let j = i + 1; j < ixs.length; j++) {
        const a: Poly2 = ixs[i].ring.map(v => [v.x, v.z]);
        const b: Poly2 = ixs[j].ring.map(v => [v.x, v.z]);
        if (!polysOverlap(a, b)) continue;
        // Plan overlap is allowed only for grade-separated zones (overpass).
        const [aLo, aHi] = vRange(ixs[i]), [bLo, bHi] = vRange(ixs[j]);
        const separated = aHi < bLo - 1.0 || bHi < aLo - 1.0;
        assert.ok(
          separated,
          `Zones ${ixs[i].nodeId} and ${ixs[j].nodeId} overlap at grade — must be merged, not stacked`
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

  it('bridge ramps never sit on top of regular roads (8m clearance)', () => {
    // Ramps are the non-bridge edges touching a bridge landing (bl-w, bl-e).
    // They must keep 8m centerline clearance from every regular road they
    // don't share an endpoint with — otherwise the ramp deck lands on top
    // of another road's surface.
    const landings = new Set(['bl-w', 'bl-e']);
    const ramps = ROAD_EDGES.filter(e =>
      e.kind !== 'bridge' && (landings.has(e.a) || landings.has(e.b)));
    assert.ok(ramps.length > 0, 'no bridge ramps found');
    for (const r of ramps) {
      const ra = nodeById(r.a), rb = nodeById(r.b);
      for (const e of ROAD_EDGES) {
        if (e === r) continue;
        if (e.kind === 'bridge') continue;
        if (e.a === r.a || e.b === r.a || e.a === r.b || e.b === r.b) continue;
        const ea = nodeById(e.a), eb = nodeById(e.b);
        const d = segSegDistXZ(ra.x, ra.z, rb.x, rb.z, ea.x, ea.z, eb.x, eb.z);
        assert.ok(d >= 8,
          `ramp ${r.a}-${r.b} overlaps regular road ${e.a}-${e.b} (dist ${d.toFixed(1)}m)`);
      }
    }
  });
});

// Minimum distance between segments AB and CD in the XZ plane.
function segSegDistXZ(ax: number, az: number, bx: number, bz: number,
                      cx: number, cz: number, dx: number, dz: number): number {
  const rx = bx - ax, rz = bz - az, sx = dx - cx, sz = dz - cz;
  const r2 = rx * rx + rz * rz, s2 = sx * sx + sz * sz;
  if (r2 < 1e-9 || s2 < 1e-9) return Math.hypot(ax - cx, az - cz);
  const qx = cx - ax, qz = cz - az;
  const rxs = rx * sz - rz * sx;
  if (Math.abs(rxs) > 1e-9) {
    const t = (qx * sz - qz * sx) / rxs, u = (qx * rz - qz * rx) / rxs;
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) return 0;
  }
  const ptSeg = (px: number, pz: number, x1: number, z1: number, x2: number, z2: number) => {
    const ddx = x2 - x1, ddz = z2 - z1;
    const t = Math.max(0, Math.min(1, ((px - x1) * ddx + (pz - z1) * ddz) / (ddx * ddx + ddz * ddz)));
    return Math.hypot(px - (x1 + t * ddx), pz - (z1 + t * ddz));
  };
  return Math.min(
    ptSeg(ax, az, cx, cz, dx, dz), ptSeg(bx, bz, cx, cz, dx, dz),
    ptSeg(cx, cz, ax, az, bx, bz), ptSeg(dx, dz, ax, az, bx, bz));
}
