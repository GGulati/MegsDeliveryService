import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ROAD_EDGES } from '../src/roads';
import { roadCurve, deckHeightAt } from '../src/road-deck';

// Grade limit: Gurwinder 2026-09-27 — roads at most 15–20° incline.
// Target 18° (MAX_DECK_GRADE). The se1-se2 cliff edge (32.7° direct) was
// removed 2026-09-27 (dead-end; highland stays connected via m4). The
// uc2-uc3 cliff (29.5° direct, only north-south link) got a Z-switchback
// (uc2sb1/uc2sb2, noIntersect hairpins). Measures the DECK (what cars drive),
// not the curve centerline.
test('all road deck grades at most 19 degrees', () => {
  const p1 = new THREE.Vector3(), p2 = new THREE.Vector3();
  let worst = 0;
  let worstEdge = '';
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    const curve = roadCurve(e);
    let edgeWorst = 0;
    const N = 200;
    for (let i = 0; i < N; i++) {
      const t0 = i / N, t1 = (i + 1) / N;
      curve.getPointAt(t0, p1); curve.getPointAt(t1, p2);
      const h0 = deckHeightAt(e, t0), h1 = deckHeightAt(e, t1);
      const plan = Math.hypot(p2.x - p1.x, p2.z - p1.z);
      if (plan < 0.01) continue;
      const deg = Math.atan(Math.abs(h1 - h0) / plan) * 180 / Math.PI;
      if (deg > edgeWorst) edgeWorst = deg;
    }
    if (edgeWorst > worst) { worst = edgeWorst; worstEdge = `${e.a}->${e.b}`; }
    assert.ok(edgeWorst <= 19,
      `${e.a}->${e.b}: deck grade ${edgeWorst.toFixed(1)}° exceeds 19°`);
  }
  assert.ok(worst <= 19, `worst deck grade ${worst.toFixed(1)}° on ${worstEdge}`);
});
