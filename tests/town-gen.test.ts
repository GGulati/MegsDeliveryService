// tests/town-gen.test.ts — seeded procedural town infill (Task 5).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { generateLots, lotsToSolids, TOWN_SEED } from '../src/town-gen.js';
import { ROAD_EDGES, nodeById } from '../src/roads.js';
import { SOLIDS, isInBay } from '../src/world.js';

const overlapsXZ = (a: { min: { x: number; z: number }; max: { x: number; z: number } },
                    b: { min: { x: number; z: number }; max: { x: number; z: number } }) =>
  a.min.x < b.max.x && a.max.x > b.min.x && a.min.z < b.max.z && a.max.z > b.min.z;

// Squared distance from point P to segment AB.
function ptSegDist2(px: number, pz: number, ax: number, az: number, bx: number, bz: number): number {
  const dx = bx - ax, dz = bz - az;
  const len2 = dx * dx + dz * dz;
  let t = len2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / len2 : 0;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + t * dx, cz = az + t * dz;
  const ex = px - cx, ez = pz - cz;
  return ex * ex + ez * ez;
}

function segsCross(ax: number, az: number, bx: number, bz: number,
                   cx: number, cz: number, dx: number, dz: number): boolean {
  const d1x = bx - ax, d1z = bz - az, d2x = dx - cx, d2z = dz - cz;
  const denom = d1x * d2z - d1z * d2x;
  if (Math.abs(denom) < 1e-9) return false;
  const t = ((cx - ax) * d2z - (cz - az) * d2x) / denom;
  const u = ((cx - ax) * d1z - (cz - az) * d1x) / denom;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

/** Minimum Euclidean distance from segment AB to the axis-aligned rect (0 when touching). */
function segRectDist(ax: number, az: number, bx: number, bz: number,
                     x0: number, z0: number, x1: number, z1: number): number {
  const edges: [number, number, number, number][] = [
    [x0, z0, x1, z0], [x1, z0, x1, z1], [x1, z1, x0, z1], [x0, z1, x0, z0],
  ];
  if (ax >= x0 && ax <= x1 && az >= z0 && az <= z1) return 0;
  if (bx >= x0 && bx <= x1 && bz >= z0 && bz <= z1) return 0;
  for (const [cx, cz, dx, dz] of edges)
    if (segsCross(ax, az, bx, bz, cx, cz, dx, dz)) return 0;
  let m = Infinity;
  for (const [px, pz] of [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] as const)
    m = Math.min(m, ptSegDist2(px, pz, ax, az, bx, bz));
  for (const [cx, cz, dx, dz] of edges) {
    m = Math.min(m, ptSegDist2(ax, az, cx, cz, dx, dz));
    m = Math.min(m, ptSegDist2(bx, bz, cx, cz, dx, dz));
  }
  return Math.sqrt(m);
}

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
  it('lot footprints keep >= 2.8m from non-bridge road centerlines', () => {
    // Regression test: the generator clears the 2.8m road tube (with a 0.7m
    // implementation margin). This pins the 2.8m requirement itself, so a
    // future change (instancing, integration) that lets a lot touch a road
    // tube fails here. Bridge edges are excluded: the deck is at y=6 over
    // water, where lots cannot exist.
    const segs = ROAD_EDGES.filter(e => e.kind !== 'bridge').map(e => {
      const a = nodeById(e.a), b = nodeById(e.b);
      return { id: `${e.a}-${e.b}`, x0: a.x, z0: a.z, x1: b.x, z1: b.z };
    });
    for (const l of generateLots()) {
      const x0 = l.x, z0 = l.z, x1 = l.x + l.w, z1 = l.z + l.d;
      for (const s of segs) {
        const d = segRectDist(s.x0, s.z0, s.x1, s.z1, x0, z0, x1, z1);
        assert.ok(d >= 2.8, `lot at (${l.x.toFixed(1)},${l.z.toFixed(1)}) is ${d.toFixed(2)}m from road ${s.id} (< 2.8m)`);
      }
    }
  });
  it('every lot is within 15m of a road centerline (road frontage)', () => {
    // User feedback 2026-09-27: every house must front a road. The generator
    // places lots along road edges, so each lot's AABB is near a centerline.
    const segs = ROAD_EDGES.filter(e => e.kind !== 'bridge').map(e => {
      const a = nodeById(e.a), b = nodeById(e.b);
      return { x0: a.x, z0: a.z, x1: b.x, z1: b.z };
    });
    for (const l of generateLots()) {
      const x0 = l.x, z0 = l.z, x1 = l.x + l.w, z1 = l.z + l.d;
      let best = Infinity;
      for (const s of segs) best = Math.min(best, segRectDist(s.x0, s.z0, s.x1, s.z1, x0, z0, x1, z1));
      assert.ok(best <= 15, `lot at (${l.x.toFixed(1)},${l.z.toFixed(1)}) is ${best.toFixed(1)}m from the nearest road (> 15m)`);
    }
  });
  it('no lot intersects the lighthouse rock exclusion circle', () => {
    // The lighthouse rock (scene.ts makeLighthouse) is a cylinder radius 24
    // at the SOLIDS[3] center; lots must clear it with margin (radius 26).
    const c = SOLIDS[3];
    const hx = (c.min.x + c.max.x) / 2, hz = (c.min.z + c.max.z) / 2;
    const R = 26;
    for (const l of generateLots()) {
      const nx = Math.max(l.x, Math.min(hx, l.x + l.w));
      const nz = Math.max(l.z, Math.min(hz, l.z + l.d));
      const d2 = (hx - nx) * (hx - nx) + (hz - nz) * (hz - nz);
      assert.ok(d2 >= R * R, `lot at (${l.x.toFixed(1)},${l.z.toFixed(1)}) intersects the lighthouse rock circle`);
    }
  });
  it('no lot corner is in the bay water', () => {
    // User feedback 2026-09-27: the center-only isInBay check let corners hang
    // over the water. All four corners must be clear.
    for (const l of generateLots()) {
      const corners: [number, number][] = [
        [l.x, l.z], [l.x + l.w, l.z], [l.x, l.z + l.d], [l.x + l.w, l.z + l.d],
      ];
      for (const [x, z] of corners)
        assert.ok(!isInBay(x, z), `lot at (${l.x.toFixed(1)},${l.z.toFixed(1)}) has a corner in the bay`);
    }
  });
});
