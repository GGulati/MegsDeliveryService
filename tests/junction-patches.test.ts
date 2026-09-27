import test from 'node:test';
import assert from 'node:assert/strict';
import { ROAD_EDGES, nodeById, nodePos, type RoadEdge } from '../src/roads';
import { deckHeightAt, junctionPatches, patchContains, patchSurfaceHeight } from '../src/road-deck';

// Road ribbons used to overlap at intersections with slightly different deck
// heights, so they visibly clipped through each other (user report 2026-09-27).
// Every flat multi-edge node now gets a single convex junction patch: the hull
// of every pairwise ribbon overlap, tessellated as a polar grid and draped 5cm
// above the highest deck, so the intersection renders as one clean surface.
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

// Andrew monotone chain convex hull (separate code from road-deck.ts).
function convexHull(pts: Pt[]): Pt[] {
  const s = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o: Pt, a: Pt, b: Pt) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower: Pt[] = [], upper: Pt[] = [];
  for (const p of s) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
    lower.push(p);
  }
  for (let i = s.length - 1; i >= 0; i--) {
    const p = s[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
    upper.push(p);
  }
  lower.pop(); upper.pop();
  return lower.concat(upper);
}

// Independent re-derivation of the build decision, mirroring the impl rule
// exactly (any pair angle; hull area >= 2m^2; drape spread <= 0.8m, else
// grade-separated skip). Straight-through pairs die on the area rule.
function expectedPatch(id: string): boolean {
  const p = nodePos(nodeById(id));
  const dirs = dirsOf(id);
  const rect = (d: (typeof dirs)[number], len: number): Pt[] => {
    const px = -d.dz, pz = d.dx;
    const ex = p.x + d.dx * len, ez = p.z + d.dz * len;
    return [
      [p.x + px * d.hw, p.z + pz * d.hw],
      [p.x - px * d.hw, p.z - pz * d.hw],
      [ex - px * d.hw, ez - pz * d.hw],
      [ex + px * d.hw, ez + pz * d.hw],
    ];
  };
  const verts: Pt[] = [[p.x, p.z]];
  for (let i = 0; i < dirs.length; i++) for (let j = i + 1; j < dirs.length; j++) {
    const a = dirs[i], b = dirs[j];
    const theta = pairAngle(a, b) * Math.PI / 180;
    const clamped = Math.min(Math.PI, Math.max(Math.PI / 15, theta));
    const reach = (a.hw + b.hw) / Math.sin(clamped);
    for (const v of clipPoly(rect(a, Math.min(a.len, reach)), rect(b, Math.min(b.len, reach)))) verts.push(v);
  }
  const hull = convexHull(verts);
  if (hull.length < 3) return false;
  let area = 0;
  for (let i = 0; i < hull.length; i++) {
    const [x1, z1] = hull[i], [x2, z2] = hull[(i + 1) % hull.length];
    area += x1 * z2 - x2 * z1;
  }
  if (Math.abs(area) / 2 < 2) return false;
  let lo = Infinity, hi = -Infinity;
  for (const [x, z] of hull) {
    let deck = -Infinity;
    for (const d of dirs) deck = Math.max(deck, deckNear(d, id, x, z));
    lo = Math.min(lo, deck); hi = Math.max(hi, deck);
  }
  return hi - lo <= 0.8;
}

// Every node gets a patch exactly when the spec says so: sharp pair, hull
// area >= 2m^2, drape spread <= 0.8m. Dead-ends, straight-throughs, and
// grade-separated (steep) nodes get none.
test('intersection patches exist exactly where needed', () => {
  const patches = junctionPatches();
  const byNode = new Map(patches.map(p => [p.nodeId, p]));
  const ids = new Set<string>();
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    ids.add(e.a); ids.add(e.b);
  }
  for (const id of ids) {
    const inc = incident(id);
    if (inc.length < 2) {
      assert.ok(!byNode.has(id), `dead-end ${id} should not get a patch`);
      continue;
    }
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

// Self-contained Sutherland–Hodgman clip (mirrors road-deck.ts, separate code).
function clipPoly(subject: Pt[], clip: Pt[]): Pt[] {
  let out = subject;
  for (let i = 0; i < clip.length; i++) {
    const a = clip[i], b = clip[(i + 1) % clip.length];
    const inside = (p: Pt) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]) >= 0;
    const next: Pt[] = [];
    for (let j = 0; j < out.length; j++) {
      const cur = out[j], prev = out[(j + out.length - 1) % out.length];
      const ci = inside(cur), pi = inside(prev);
      const ix = (p1: Pt, p2: Pt): Pt => {
        const d1x = p2[0] - p1[0], d1y = p2[1] - p1[1];
        const d2x = b[0] - a[0], d2y = b[1] - a[1];
        const t = ((a[0] - p1[0]) * d2y - (a[1] - p1[1]) * d2x) / (d1x * d2y - d1y * d2x || 1e-9);
        return [p1[0] + d1x * t, p1[1] + d1y * t];
      };
      if (ci) { if (!pi) next.push(ix(prev, cur)); next.push(cur); }
      else if (pi) next.push(ix(prev, cur));
    }
    out = next;
    if (!out.length) break;
  }
  return out;
}

// The patch hull must cover the FULL pairwise ribbon overlap: every overlap
// polygon vertex and edge midpoint lies inside the hull.
test('patch hull covers every pairwise ribbon overlap', () => {
  for (const jp of junctionPatches()) {
    const p = nodePos(nodeById(jp.nodeId));
    const dirs = dirsOf(jp.nodeId);
    const rect = (d: (typeof dirs)[number], len: number): Pt[] => {
      const px = -d.dz, pz = d.dx;
      const ex = p.x + d.dx * len, ez = p.z + d.dz * len;
      return [
        [p.x + px * d.hw, p.z + pz * d.hw],
        [p.x - px * d.hw, p.z - pz * d.hw],
        [ex - px * d.hw, ez - pz * d.hw],
        [ex + px * d.hw, ez + pz * d.hw],
      ];
    };
    for (let i = 0; i < dirs.length; i++) for (let j = i + 1; j < dirs.length; j++) {
      const a = dirs[i], b = dirs[j];
      const theta = pairAngle(a, b) * Math.PI / 180;
      if (theta < 15 * Math.PI / 180 || theta > 165 * Math.PI / 180) continue;
      const clamped = Math.min(Math.PI, Math.max(Math.PI / 15, theta));
      const reach = (a.hw + b.hw) / Math.sin(clamped);
      const ov = clipPoly(rect(a, Math.min(a.len, reach)), rect(b, Math.min(b.len, reach)));
      assert.ok(ov.length >= 3, `no overlap polygon for sharp pair at ${jp.nodeId}`);
      // Probe overlap verts and edge midpoints, inset 2% toward the centroid:
      // points exactly on the hull edge are float-fragile by construction.
      let ocx = 0, ocz = 0;
      for (const [x, z] of ov) { ocx += x; ocz += z; }
      ocx /= ov.length; ocz /= ov.length;
      const probes: Pt[] = [...ov];
      for (let k = 0; k < ov.length; k++)
        probes.push([(ov[k][0] + ov[(k + 1) % ov.length][0]) / 2, (ov[k][1] + ov[(k + 1) % ov.length][1]) / 2]);
      for (const [x, z] of probes) {
        const ix = x + (ocx - x) * 0.02, iz = z + (ocz - z) * 0.02;
        assert.ok(patchContains(jp, ix, iz),
          `patch at ${jp.nodeId} misses overlap of pair ${i},${j} at (${x.toFixed(1)},${z.toFixed(1)})`);
      }
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
      assert.ok(h! >= deck + 0.04,
        `deck pokes through patch at ${jp.nodeId} (${x.toFixed(1)},${z.toFixed(1)}): surface ${h!.toFixed(2)} vs deck ${deck.toFixed(2)}`);
      probed++;
    }
    assert.ok(probed >= 4, `too few interior probes at ${jp.nodeId}`);
  }
});

// patchContains agrees with the hull on every patch: centroid inside, a far
// point outside; patchSurfaceHeight is non-null at the centroid.
test('patchContains matches hull geometry on all patches', () => {
  const patches = junctionPatches();
  assert.ok(patches.length > 0, 'expected some junction patches');
  for (const jp of patches) {
    let cx = 0, cz = 0;
    for (const v of jp.ring) { cx += v.x; cz += v.z; }
    cx /= jp.ring.length; cz /= jp.ring.length;
    assert.ok(patchContains(jp, cx, cz), `centroid outside own patch at ${jp.nodeId}`);
    assert.ok(patchSurfaceHeight(cx, cz) !== null, `no surface at centroid of ${jp.nodeId}`);
    const far = jp.ring[0];
    assert.ok(!patchContains(jp, cx + (far.x - cx) * 3, cz + (far.z - cz) * 3),
      `far point inside patch at ${jp.nodeId}`);
  }
  assert.ok(patchSurfaceHeight(1e5, 1e5) === null, 'surface should be null far away');
});
