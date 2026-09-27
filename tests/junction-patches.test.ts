import test from 'node:test';
import assert from 'node:assert/strict';
import { ROAD_EDGES, nodeById, nodePos, type RoadEdge } from '../src/roads';
import { deckHeightAt, junctionPatches, patchContains, patchSurfaceHeight } from '../src/road-deck';

// Road ribbons used to overlap at intersections with slightly different deck
// heights, so they visibly clipped through each other (user report 2026-09-27).
// Every flat multi-edge node now gets a single junction patch: the UNION of
// the incident ribbon stubs (not a convex hull — the hull filled wedges
// between acute roads with asphalt and overlapped neighboring roads),
// tessellated as a polar grid from the node and draped 5cm above the highest
// deck, so the intersection renders as one clean surface.
// Grade-separated nodes (e.g. switchback hairpins stacked vertically) are
// skipped — their ribbons can't clip in 3D.

type Pt = [number, number];
const W = (e: RoadEdge) => e.kind === 'switchback' ? 4.4 : 8.8;

function incident(id: string): RoadEdge[] {
  return ROAD_EDGES.filter(e => e.kind !== 'bridge' && (e.a === id || e.b === id));
}

function dirsOf(id: string) {
  const p = nodePos(nodeById(id));
  return incident(id).map(e => {
    const o = nodePos(nodeById(e.a === id ? e.b : e.a));
    const dx = o.x - p.x, dz = o.z - p.z, l = Math.hypot(dx, dz) || 1;
    return { e, dx: dx / l, dz: dz / l, hw: W(e) / 2, ox: o.x, oz: o.z, len: l };
  });
}

function pairAngle(a: { dx: number; dz: number }, b: { dx: number; dz: number }): number {
  const dot = Math.min(1, Math.max(-1, a.dx * b.dx + a.dz * b.dz));
  return Math.acos(dot) * 180 / Math.PI;
}

// Correctly-oriented deck height near (x,z): project onto the node->other
// segment (t from the node), then flip for incoming edges because
// deckHeightAt measures t from e.a.
function deckNear(d: ReturnType<typeof dirsOf>[number], id: string, x: number, z: number): number {
  const a = nodePos(nodeById(id));
  const abx = d.ox - a.x, abz = d.oz - a.z, l2 = abx * abx + abz * abz || 1;
  const t = Math.min(1, Math.max(0, ((x - a.x) * abx + (z - a.z) * abz) / l2));
  return deckHeightAt(d.e, d.e.a === id ? t : 1 - t);
}

const drapeOf = (id: string, dirs: ReturnType<typeof dirsOf>) =>
  (x: number, z: number): number => {
    let h = -Infinity;
    for (const d of dirs) h = Math.max(h, deckNear(d, id, x, z));
    return h + 0.05;
  };

// Stub length: mirror of road-deck.ts (covers the pairwise overlap zone).
function stubLenOf(dirs: ReturnType<typeof dirsOf>): number {
  let stubLen = 6;
  for (let i = 0; i < dirs.length; i++) {
    for (let j = i + 1; j < dirs.length; j++) {
      const a = dirs[i], b = dirs[j];
      const dot = Math.min(1, Math.max(-1, a.dx * b.dx + a.dz * b.dz));
      const theta = Math.acos(dot);
      const clamped = Math.min(Math.PI, Math.max(Math.PI / 15, theta));
      stubLen = Math.max(stubLen, (a.hw + b.hw) / Math.sin(clamped));
    }
  }
  let minLen = Infinity;
  for (const d of dirs) minLen = Math.min(minLen, d.len);
  return Math.min(stubLen, minLen * 0.9, 14);
}

// Mirror of the build decision: >=2 incident dirs, not a near-collinear
// 2-dir pair (straight-through or duplicate), and the incident roads stay
// within 0.8m height spread across the stub area (else grade-separated).
function expectedPatch(id: string): boolean {
  const dirs = dirsOf(id);
  if (dirs.length < 2) return false;
  if (dirs.length === 2) {
    const theta = pairAngle(dirs[0], dirs[1]);
    if (theta < 15 || theta > 165) return false;
  }
  const p = nodePos(nodeById(id));
  const stubLen = stubLenOf(dirs);
  let lo = Infinity, hi = -Infinity;
  for (const d of dirs) {
    for (const f of [0, 0.5, 1]) {
      const s = Math.min(stubLen, d.len * 0.9) * f;
      const h = deckNear(d, id, p.x + d.dx * s, p.z + d.dz * s);
      lo = Math.min(lo, h); hi = Math.max(hi, h);
    }
  }
  return hi - lo <= 0.8;
}

// Every node gets a patch exactly when the spec says so. Dead-ends,
// straight-throughs / duplicate-direction pairs, and grade-separated
// (steep) nodes get none.
test('intersection patches exist exactly where needed', () => {
  const patches = junctionPatches();
  const byNode = new Map(patches.map(p => [p.nodeId, p]));
  const ids = new Set<string>();
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    ids.add(e.a); ids.add(e.b);
  }
  for (const id of ids) {
    const want = expectedPatch(id);
    const p = byNode.get(id);
    if (want) {
      assert.ok(p, `intersection ${id} has no junction patch`);
      assert.ok(p!.ring.length >= 3, `patch at ${id} is degenerate`);
      assert.ok(p!.tris.length >= 3, `patch at ${id} has no surface`);
    } else {
      assert.ok(!p, `node ${id} should not get a patch`);
    }
  }
});

// The patch footprint must equal the ribbon union: every point inside an
// incident ribbon stub is covered (no gaps), and points in the angular
// wedges between ribbons — beyond every ribbon's half-width — are NOT
// covered (no convex-hull asphalt fill). This is the user-visible fix for
// "road meetings are a mess for non-90 degree intersections".
test('patch footprint equals the ribbon union (no gaps, no wedges)', () => {
  for (const jp of junctionPatches()) {
    const p = nodePos(nodeById(jp.nodeId));
    const dirs = dirsOf(jp.nodeId);
    const stubLen = stubLenOf(dirs);
    // Inside every ribbon stub: sample along each dir at fractions of the
    // stub length and lateral offsets within the half-width.
    for (const d of dirs) {
      for (const f of [0.25, 0.5, 0.75]) {
        const s = stubLen * f;
        for (const w of [-0.85, 0, 0.85]) {
          const x = p.x + d.dx * s - d.dz * d.hw * w;
          const z = p.z + d.dz * s + d.dx * d.hw * w;
          assert.ok(patchContains(jp, x, z),
            `patch at ${jp.nodeId} has a gap inside ribbon at (${x.toFixed(1)},${z.toFixed(1)})`);
        }
      }
    }
    // Wedges between ribbons: for each angular gap between consecutive dirs
    // (sorted by angle), probe the bisector at a radius where it lies beyond
    // every ribbon's half-width. It must NOT be inside the patch.
    const angs = dirs.map(d => Math.atan2(d.dz, d.dx)).sort((a, b) => a - b);
    for (let i = 0; i < angs.length; i++) {
      const a0 = angs[i];
      let a1 = angs[(i + 1) % angs.length];
      if (a1 <= a0) a1 += Math.PI * 2;
      const mid = (a0 + a1) / 2;
      const gap = a1 - a0;
      // Radius just beyond the widest ribbon's reach across this wedge:
      // r * sin(gap/2) > maxHw  =>  outside every ribbon.
      const maxHw = Math.max(...dirs.map(d => d.hw));
      const r = maxHw / Math.max(Math.sin(gap / 2), 1e-6) + 1.0;
      if (r > 30) continue; // very narrow wedge: ribbons legitimately cover it
      const x = p.x + Math.cos(mid) * r, z = p.z + Math.sin(mid) * r;
      // Confirm the probe really is outside every ribbon stub.
      let inRibbon = false;
      for (const d of dirs) {
        const rx = x - p.x, rz = z - p.z;
        const s = rx * d.dx + rz * d.dz;
        const w = Math.abs(rx * -d.dz + rz * d.dx);
        if (s >= 0 && s <= 25 && w <= d.hw) { inRibbon = true; break; }
      }
      if (inRibbon) continue;
      assert.ok(!patchContains(jp, x, z),
        `patch at ${jp.nodeId} fills non-road wedge at (${x.toFixed(1)},${z.toFixed(1)})`);
    }
  }
});

// The RENDERED surface (patchSurfaceHeight, the same path the mesh uses) must
// ride above every incident deck everywhere inside the patch — dense 1m
// grid probe, not just center and ring.
test('rendered patch surface stays above all incident decks', () => {
  for (const jp of junctionPatches()) {
    const dirs = dirsOf(jp.nodeId);
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const v of jp.ring) {
      minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x);
      minZ = Math.min(minZ, v.z); maxZ = Math.max(maxZ, v.z);
    }
    let probed = 0;
    for (let x = minX; x <= maxX; x += 1.0) for (let z = minZ; z <= maxZ; z += 1.0) {
      if (!patchContains(jp, x, z)) continue;
      const h = patchSurfaceHeight(x, z);
      assert.ok(h !== null, `surface missing inside patch at ${jp.nodeId}`);
      let deck = -Infinity;
      for (const d of dirs) deck = Math.max(deck, deckNear(d, jp.nodeId, x, z));
      // 2cm margin: the drape lifts 8cm, interpolation can shave some.
      assert.ok(h! >= deck + 0.02,
        `deck pokes through patch at ${jp.nodeId} (${x.toFixed(1)},${z.toFixed(1)}): surface ${h!.toFixed(2)} vs deck ${deck.toFixed(2)}`);
      probed++;
    }
    assert.ok(probed >= 4, `too few interior probes at ${jp.nodeId}`);
  }
});

// patchContains agrees with the star-shaped geometry: the node (star center)
// is inside, a far point is outside; patchSurfaceHeight is non-null at the node.
test('patchContains matches patch geometry on all patches', () => {
  const patches = junctionPatches();
  assert.ok(patches.length > 0, 'expected some junction patches');
  for (const jp of patches) {
    const p = nodePos(nodeById(jp.nodeId));
    assert.ok(patchContains(jp, p.x, p.z), `node outside own patch at ${jp.nodeId}`);
    assert.ok(patchSurfaceHeight(p.x, p.z) !== null, `no surface at node of ${jp.nodeId}`);
    const far = jp.ring[0];
    assert.ok(!patchContains(jp, p.x + (far.x - p.x) * 3, p.z + (far.z - p.z) * 3),
      `far point inside patch at ${jp.nodeId}`);
  }
  assert.ok(patchSurfaceHeight(1e5, 1e5) === null, 'surface should be null far away');
});
