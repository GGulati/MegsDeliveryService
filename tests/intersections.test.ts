import test from 'node:test';
import assert from 'node:assert/strict';
import { ROAD_EDGES, nodeById, nodePos, type RoadEdge } from '../src/roads';
import {
  deckHeightAt, intersections, intersectionContains, intersectionHeight,
  intersectionMarkings, edgeClips, roadCurve, type Intersection,
} from '../src/road-deck';

// Clean-break redesign (2026-09-27): junction patches are gone. Each junction
// node gets one Intersection — a single flat asphalt mesh over the ribbon
// union, with road ribbons clipped to end exactly at its boundary (zero
// overlap by construction), plus painted stop lines, crosswalks, and sidewalk
// corner fillets as flat decals. Grade-separated nodes (e.g. switchback
// hairpins stacked vertically) are skipped — their ribbons can't meet in 3D.

type Pt = [number, number];
const W = (e: RoadEdge) => e.kind === 'switchback' ? 4.4 : 8.8;

function incident(id: string): RoadEdge[] {
  const landings = new Set(['bl-w', 'bl-e']);
  return ROAD_EDGES.filter(e =>
    (e.kind !== 'bridge' || landings.has(id)) && (e.a === id || e.b === id));
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

// Stub length: mirror of road-deck.ts.
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

// Mirror of the build decision: >=2 incident dirs (bridge edges count at
// landings), not a near-collinear 2-dir pair, not noIntersect, and the
// incident roads agree in height AT THE NODE (sloped approaches are fine —
// the mesh follows each leg's profile; only true grade-separated crossings
// are skipped).
function expectedIntersection(id: string): boolean {
  if (nodeById(id).noIntersect) return false;
  const dirs = dirsOf(id);
  if (dirs.length < 2) return false;
  if (dirs.length === 2) {
    const theta = pairAngle(dirs[0], dirs[1]);
    if (theta < 15 || theta > 165) return false;
  }
  const p = nodePos(nodeById(id));
  let lo = Infinity, hi = -Infinity;
  for (const d of dirs) {
    const h = deckNear(d, id, p.x, p.z);
    lo = Math.min(lo, h); hi = Math.max(hi, h);
  }
  return hi - lo <= 0.8;
}

// Every node gets an intersection exactly when the spec says so. Dead-ends,
// straight-throughs / duplicate-direction pairs, and grade-separated
// (steep) nodes get none.
test('intersections exist exactly where needed', () => {
  const ixs = intersections();
  assert.ok(ixs.length > 0, 'expected some intersections');
  const byNode = new Map(ixs.map(p => [p.nodeId, p]));
  const ids = new Set<string>();
  for (const e of ROAD_EDGES) {
    if (e.kind !== 'bridge') { ids.add(e.a); ids.add(e.b); }
  }
  ids.add('bl-w'); ids.add('bl-e'); // landings (bridge leg counts)
  for (const id of ids) {
    const want = expectedIntersection(id);
    const ix = byNode.get(id);
    if (want) {
      assert.ok(ix, `intersection ${id} missing`);
      assert.ok(ix!.ring.length >= 3, `zone at ${id} is degenerate`);
      assert.ok(ix!.tris.length >= 3, `zone at ${id} has no surface`);
      assert.ok(ix!.legs.length >= 2, `zone at ${id} has <2 legs`);
    } else {
      assert.ok(!ix, `node ${id} should not get an intersection`);
    }
  }
});

// Clip correctness: every leg's clip is positive and within the per-edge cap;
// the ribbon end (clip distance along the leg) sits on the zone boundary —
// just inside is in the zone.
test('clip distances are sane and ribbons meet the mesh boundary', () => {
  for (const ix of intersections()) {
    const p = nodePos(nodeById(ix.nodeId));
    const dirs = dirsOf(ix.nodeId);
    const stubLen = stubLenOf(dirs);
    for (const leg of ix.legs) {
      const d = dirs.find(x => x.e === leg.edge)!;
      assert.ok(leg.clip > 0, `non-positive clip at ${ix.nodeId}`);
      assert.ok(leg.clip <= Math.min(stubLen, d.len * 0.9) + 1e-6,
        `clip ${leg.clip.toFixed(2)} exceeds cap at ${ix.nodeId}`);
      // Just inside the clip along the leg centerline: inside the zone.
      const ixIn = p.x + leg.dx * (leg.clip - 0.3);
      const izIn = p.z + leg.dz * (leg.clip - 0.3);
      assert.ok(intersectionContains(ix, ixIn, izIn),
        `zone at ${ix.nodeId} does not reach its clip line`);
    }
  }
});

// Clips at both ends of one edge must not consume the whole ribbon: at
// least 0.5m of visible road remains (construction guarantees 1m; the
// reach can exceed stubLen slightly where stub widths dominate).
test('both-ends clips leave ribbon to render', () => {
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    const { a, b } = edgeClips(e);
    if (a && b) {
      const pa = nodePos(nodeById(e.a)), pb = nodePos(nodeById(e.b));
      const len = Math.hypot(pb.x - pa.x, pb.z - pa.z);
      assert.ok(a.dist + b.dist <= len - 0.5 + 1e-6,
        `clips eat edge ${e.a}->${e.b}: ${a.dist.toFixed(1)}+${b.dist.toFixed(1)} > ${len.toFixed(1)}-0.5`);
    }
  }
});

// Zone polygon is simple (non-self-intersecting): segment pairs that are not
// adjacent must not cross.
test('zone boundary is a simple polygon', () => {
  const segInt = (a: Pt, b: Pt, c: Pt, d: Pt): boolean => {
    const r: Pt = [b[0] - a[0], b[1] - a[1]];
    const s: Pt = [d[0] - c[0], d[1] - c[1]];
    const den = r[0] * s[1] - r[1] * s[0];
    if (Math.abs(den) < 1e-9) return false;
    const t = ((c[0] - a[0]) * s[1] - (c[1] - a[1]) * s[0]) / den;
    const u = ((c[0] - a[0]) * r[1] - (c[1] - a[1]) * r[0]) / den;
    return t > 1e-6 && t < 1 - 1e-6 && u > 1e-6 && u < 1 - 1e-6;
  };
  for (const ix of intersections()) {
    const r = ix.ring;
    const n = r.length;
    for (let i = 0; i < n; i++) {
      const a: Pt = [r[i].x, r[i].z], b: Pt = [r[(i + 1) % n].x, r[(i + 1) % n].z];
      for (let j = i + 2; j < n; j++) {
        if (i === 0 && j === n - 1) continue; // adjacent (wrap)
        const c: Pt = [r[j].x, r[j].z], d: Pt = [r[(j + 1) % n].x, r[(j + 1) % n].z];
        assert.ok(!segInt(a, b, c, d), `zone at ${ix.nodeId} self-intersects`);
      }
    }
  }
});

// Sloped zones: the mesh follows each leg's deck profile instead of being
// flat. Every ring vertex (minus the 2cm crown) stays within the legs'
// height range — no spikes, no pits.
test('sloped zone mesh stays within leg height range', () => {
  for (const ix of intersections()) {
    const p = nodePos(nodeById(ix.nodeId));
    let lo = Infinity, hi = -Infinity;
    for (const leg of ix.legs) {
      if (leg.edge.kind === 'bridge') continue; // deck height handled by bridge.ts
      const d = dirsOf(ix.nodeId).find(x => x.e === leg.edge)!;
      for (const s of [0, leg.clip]) {
        const h = deckNear(d, ix.nodeId, p.x + leg.dx * s, p.z + leg.dz * s);
        lo = Math.min(lo, h); hi = Math.max(hi, h);
      }
    }
    for (const v of ix.ring) {
      assert.ok(v.h - 0.02 >= lo - 0.5 && v.h - 0.02 <= hi + 0.5,
        `ring vertex out of leg height range at ${ix.nodeId}: ${v.h.toFixed(2)} vs [${lo.toFixed(2)},${hi.toFixed(2)}]`);
    }
  }
});

// The mesh meets each leg's deck at the clip line: clipHeight matches the
// leg's deck height there (ribbon ramps to clipHeight, so no step).
test('clipHeight matches leg deck height at clip lines', () => {
  for (const ix of intersections()) {
    const p = nodePos(nodeById(ix.nodeId));
    for (const leg of ix.legs) {
      if (leg.edge.kind === 'bridge') continue;
      const d = dirsOf(ix.nodeId).find(x => x.e === leg.edge)!;
      const cx = p.x + leg.dx * leg.clip, cz = p.z + leg.dz * leg.clip;
      const deckH = deckNear(d, ix.nodeId, cx, cz) + 0.02;
      assert.ok(Math.abs(leg.clipHeight - deckH) < 0.6,
        `clipHeight/deck mismatch at ${ix.nodeId}: ${leg.clipHeight.toFixed(2)} vs ${deckH.toFixed(2)}`);
    }
  }
});

// All painted markings (stop lines, crosswalk stripes, sidewalk fillets)
// lie strictly inside the zone — no paint floating over terrain.
test('markings lie strictly inside the zone', () => {
  for (const ix of intersections()) {
    const { white, walk } = intersectionMarkings(ix);
    // White may be empty if deconfliction dropped all (better than flicker).
    // If present, they must be quads inside the zone.
    for (const q of [...white, ...walk]) {
      assert.ok(q.length === 4, `marking is not a quad at ${ix.nodeId}`);
      for (const [x, z] of q) {
        assert.ok(intersectionContains(ix, x, z),
          `marking outside zone at ${ix.nodeId} (${x.toFixed(1)},${z.toFixed(1)})`);
      }
    }
  }
});

// Where two zones overlap in plan AT THE SAME GRADE, their meshes must be
// merged (not stacked/coplanar). Grade-separated zones (e.g. a bridge
// landing 6m above a street) may overlap in plan — that's an overpass, not
// a conflict.
test('overlapping zones are merged, not stacked', () => {
  const ixs = intersections();
  const overlap = (a: Intersection, b: Intersection): boolean => {
    for (const v of b.ring) if (intersectionContains(a, v.x, v.z)) return true;
    for (const v of a.ring) if (intersectionContains(b, v.x, v.z)) return true;
    return false;
  };
  const vRange = (ix: Intersection): [number, number] => {
    let lo = Infinity, hi = -Infinity;
    for (const v of ix.ring) { lo = Math.min(lo, v.h); hi = Math.max(hi, v.h); }
    return [lo, hi];
  };
  for (let i = 0; i < ixs.length; i++) {
    for (let j = i + 1; j < ixs.length; j++) {
      const a = ixs[i], b = ixs[j];
      if (!overlap(a, b)) continue;
      const [aLo, aHi] = vRange(a), [bLo, bHi] = vRange(b);
      const separated = aHi < bLo - 1.0 || bHi < aLo - 1.0;
      assert.ok(separated,
        `zones ${a.nodeId} and ${b.nodeId} overlap at grade — must be merged, not stacked`);
    }
  }
});

// intersectionContains agrees with the geometry: the node (star center) is
// inside, a far point is outside; intersectionHeight is non-null at the node
// and null far away.
test('intersectionContains matches zone geometry', () => {
  for (const ix of intersections()) {
    const p = nodePos(nodeById(ix.nodeId));
    assert.ok(intersectionContains(ix, p.x, p.z), `node outside own zone at ${ix.nodeId}`);
    const h = intersectionHeight(p.x, p.z);
    assert.ok(h !== null, `no surface at node of ${ix.nodeId}`);
    // Height range is validated by 'sloped zone mesh stays within leg height range'.
    const far = ix.ring[0];
    assert.ok(!intersectionContains(ix, p.x + (far.x - p.x) * 3, p.z + (far.z - p.z) * 3),
      `far point inside zone at ${ix.nodeId}`);
  }
  assert.ok(intersectionHeight(1e5, 1e5) === null, 'surface should be null far away');
});

// Ribbon ride height meets the mesh exactly at clip lines: ribbonHeightAt at
// the clip equals the intersection height (no step at the seam), and the
// mid-edge height is the plain deck.
test('ribbon height meets the mesh at clip lines', async () => {
  const { ribbonHeightAt } = await import('../src/road-deck');
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    const { a, b } = edgeClips(e);
    if (!a && !b) continue;
    const len = roadCurve(e).getLength();
    if (a) {
      const h = ribbonHeightAt(e, a.dist / len);
      assert.ok(Math.abs(h - a.height) < 1e-6,
        `ribbon end not flush at ${e.a}->${e.b} a-end: ${h} vs ${a.height}`);
    }
    if (b) {
      const h = ribbonHeightAt(e, 1 - b.dist / len);
      assert.ok(Math.abs(h - b.height) < 1e-6,
        `ribbon end not flush at ${e.a}->${e.b} b-end: ${h} vs ${b.height}`);
    }
    // Mid-edge (away from ramps): plain deck height.
    const tMid = 0.5;
    const sMidA = tMid * len, sMidB = (1 - tMid) * len;
    if ((!a || sMidA > a.dist + 3.5) && (!b || sMidB > b.dist + 3.5)) {
      assert.ok(Math.abs(ribbonHeightAt(e, tMid) - deckHeightAt(e, tMid)) < 1e-9,
        `mid-edge ribbon height differs from deck on ${e.a}->${e.b}`);
    }
  }
});
