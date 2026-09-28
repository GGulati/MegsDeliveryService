import test from 'node:test';
import assert from 'node:assert/strict';
import { ROAD_EDGES, nodeById, nodePos } from '../src/roads';
import { roadCurve, edgeClips, clipT } from '../src/road-deck';

// Ribbon/mesh seam: the ribbon must end at plan-distance (clip - margin) from
// the node, strictly inside its own zone. Arc-distance clipping let curved
// ribbons overshoot up to 0.35m into the flat mesh at the same height —
// coplanar overlap that z-fights (flicker), fixed 2026-09-27.
test('ribbon ends strictly inside its zone (no mesh overlap)', () => {
  const MARGIN = 0.05;
  let worst = -Infinity;
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    const curve = roadCurve(e);
    const clips = edgeClips(e);
    for (const end of ['a', 'b'] as const) {
      const clip = end === 'a' ? clips.a : clips.b;
      if (!clip || clip.dist <= MARGIN) continue;
      const t = clipT(e, end, clip.dist - MARGIN);
      const p = curve.getPointAt(t);
      const n = nodePos(nodeById(end === 'a' ? e.a : e.b));
      const planDist = Math.hypot(p.x - n.x, p.z - n.z);
      const overshoot = planDist - (clip.dist - MARGIN);
      if (overshoot > worst) worst = overshoot;
      assert.ok(overshoot < 0.01,
        `${e.a}->${e.b}.${end}: ribbon overshoots ${(overshoot).toFixed(3)}m into mesh zone`);
    }
  }
  assert.ok(worst <= 0.01, `worst overshoot ${worst.toFixed(4)}m`);
});
