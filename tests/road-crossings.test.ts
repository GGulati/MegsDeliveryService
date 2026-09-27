// tests/road-crossings.test.ts — no at-grade road crossings without a shared
// node (user feedback 2026-09-27). Bridge edges are excluded: the deck flies
// over roads by design (vertical separation).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ROAD_EDGES, nodeById, nodePos } from '../src/roads.js';

function segsCross(ax: number, az: number, bx: number, bz: number,
                   cx: number, cz: number, dx: number, dz: number): boolean {
  const d1x = bx - ax, d1z = bz - az, d2x = dx - cx, d2z = dz - cz;
  const denom = d1x * d2z - d1z * d2x;
  if (Math.abs(denom) < 1e-9) return false;
  const t = ((cx - ax) * d2z - (cz - az) * d2x) / denom;
  const u = ((cx - ax) * d1z - (cz - az) * d1x) / denom;
  return t > 0 && t < 1 && u > 0 && u < 1; // strict: shared endpoints are fine
}

/** True when collinear segments overlap over positive length. */
function collinearOverlap(ax: number, az: number, bx: number, bz: number,
                          cx: number, cz: number, dx: number, dz: number): boolean {
  const d1x = bx - ax, d1z = bz - az, d2x = dx - cx, d2z = dz - cz;
  const denom = d1x * d2z - d1z * d2x;
  if (Math.abs(denom) >= 1e-9) return false; // not parallel
  // Collinear only if c lies on line ab (not merely parallel).
  const len1 = Math.hypot(d1x, d1z);
  if (len1 < 1e-9) return false;
  const distC = Math.abs((cx - ax) * d1z - (cz - az) * d1x) / len1;
  if (distC > 1e-6) return false; // parallel but offset: distinct lines
  // Project onto the dominant axis of segment 1.
  const useX = Math.abs(d1x) >= Math.abs(d1z);
  const p1 = useX ? ax : az, p2 = useX ? bx : bz;
  const q1 = useX ? cx : cz, q2 = useX ? dx : dz;
  const lo1 = Math.min(p1, p2), hi1 = Math.max(p1, p2);
  const lo2 = Math.min(q1, q2), hi2 = Math.max(q1, q2);
  // Overlap over positive length (touching at a point is fine).
  return Math.min(hi1, hi2) - Math.max(lo1, lo2) > 1e-9;
}

describe('road crossings', () => {
  it('no two non-bridge edges cross at non-shared endpoints', () => {
    const edges = ROAD_EDGES.filter(e => e.kind !== 'bridge');
    const pts = edges.map(e => {
      const a = nodeById(e.a), b = nodeById(e.b);
      return { id: `${e.a}->${e.b}`, a, b };
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const e1 = pts[i], e2 = pts[j];
        const shared = e1.a.id === e2.a.id || e1.a.id === e2.b.id ||
                       e1.b.id === e2.a.id || e1.b.id === e2.b.id;
        if (shared) continue;
        const { a, b } = e1, { a: c, b: d } = e2;
        assert.ok(
          !segsCross(a.x, a.z, b.x, b.z, c.x, c.z, d.x, d.z),
          `roads cross at-grade: ${e1.id} X ${e2.id}`,
        );
        assert.ok(
          !collinearOverlap(a.x, a.z, b.x, b.z, c.x, c.z, d.x, d.z),
          `roads collinearly overlap: ${e1.id} X ${e2.id}`,
        );
      }
    }
  });

  it('bridge-over-road crossings have real vertical separation', () => {
    // Bridge edges are excluded from the at-grade check above on the claim
    // that the deck flies over roads. Verify that claim: wherever a bridge
    // edge crosses a non-bridge edge in plan view, the deck underside must
    // clear the road surface by at least 3m.
    const DECK_THICK = 1; // matches src/bridge.ts
    const MIN_CLEARANCE = 3;
    const bridges = ROAD_EDGES.filter(e => e.kind === 'bridge');
    const roads = ROAD_EDGES.filter(e => e.kind !== 'bridge');
    for (const b of bridges) {
      const ba = nodeById(b.a), bb = nodeById(b.b);
      const deckBottom = (b.deckY ?? 6) - DECK_THICK;
      for (const r of roads) {
        const shared = b.a === r.a || b.a === r.b || b.b === r.a || b.b === r.b;
        if (shared) continue;
        const ra = nodeById(r.a), rb = nodeById(r.b);
        // Plan-view crossing: solve for t along the road segment.
        const d1x = rb.x - ra.x, d1z = rb.z - ra.z;
        const d2x = bb.x - ba.x, d2z = bb.z - ba.z;
        const denom = d1x * d2z - d1z * d2x;
        if (Math.abs(denom) < 1e-9) continue;
        const t = ((ba.x - ra.x) * d2z - (ba.z - ra.z) * d2x) / denom;
        const u = ((ba.x - ra.x) * d1z - (ba.z - ra.z) * d1x) / denom;
        if (!(t > 0 && t < 1 && u > 0 && u < 1)) continue;
        const pay = nodePos(ra).y, pby = nodePos(rb).y;
        const roadY = pay + (pby - pay) * t + 0.18; // road tube rides above nodes
        assert.ok(
          deckBottom - roadY >= MIN_CLEARANCE,
          `bridge ${b.a}->${b.b} clears ${r.a}->${r.b} by only ` +
          `${(deckBottom - roadY).toFixed(2)}m (need ${MIN_CLEARANCE}m)`,
        );
      }
    }
  });
});
