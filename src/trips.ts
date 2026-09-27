// src/trips.ts — trip goals for ambient traffic (user feedback 2026-09-27).
//
// Cars and sidewalk pedestrians travel between buildings: each entity gets a
// start and a destination, follows a shortest-path route along the road graph,
// and on arrival the destination becomes the new start for the next trip.
// (Previously they picked a random outgoing edge at every intersection, which
// read as teleporting between intersections.)
import { ROAD_EDGES, ROAD_NODES, nodeById, nodePos, type RoadEdge } from './roads';
import { STOPS } from './world';
import { generateLots } from './town-gen';

export interface Destination {
  name: string;
  x: number; z: number;
  /** Nearest road-graph node: where trips to this building end. */
  nodeId: string;
}

let destCache: Destination[] | null = null;

/** All trip endpoints: named stops + generated house lots, each mapped to its
 * nearest road node. Deduped by node so each endpoint is a distinct place. */
export function destinations(): Destination[] {
  if (destCache) return destCache;
  const pts: { name: string; x: number; z: number }[] = [];
  for (const s of STOPS) pts.push({ name: s.name, x: s.position.x, z: s.position.z });
  for (const lot of generateLots()) {
    pts.push({ name: 'house', x: lot.x + lot.w / 2, z: lot.z + lot.d / 2 });
  }
  const seen = new Set<string>();
  const out: Destination[] = [];
  for (const p of pts) {
    let best = '', bd = Infinity;
    for (const n of ROAD_NODES) {
      const dx = n.x - p.x, dz = n.z - p.z;
      const d = dx * dx + dz * dz;
      if (d < bd) { bd = d; best = n.id; }
    }
    // Skip buildings stranded far from the road network. 60m is generous:
    // houses sit a few meters off the nearest road, and no map building is
    // between the road grid and the 60m cutoff — the cutoff only drops truly
    // unreachable lots, not marginal ones.
    if (best && bd < 60 * 60 && !seen.has(best)) {
      seen.add(best);
      out.push({ ...p, nodeId: best });
    }
  }
  destCache = out;
  return out;
}

interface Adj { to: string; edge: RoadEdge; w: number }
let adjCache: Map<string, Adj[]> | null = null;

function adjacency(): Map<string, Adj[]> {
  if (adjCache) return adjCache;
  const m = new Map<string, Adj[]>();
  const add = (from: string, to: string, edge: RoadEdge) => {
    if (!m.has(from)) m.set(from, []);
    const a = nodePos(nodeById(from)), b = nodePos(nodeById(to));
    m.get(from)!.push({ to, edge, w: Math.hypot(a.x - b.x, a.z - b.z) });
  };
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue; // ambient traffic never used bridges
    add(e.a, e.b, e);
    add(e.b, e.a, e);
  }
  adjCache = m;
  return m;
}

/** Dijkstra shortest path: ordered edges from `from` to `to`, or null when the
 * destination is unreachable on the (bridge-free) ambient graph. */
export function shortestPath(from: string, to: string): RoadEdge[] | null {
  if (from === to) return [];
  const adj = adjacency();
  const dist = new Map<string, number>([[from, 0]]);
  const prev = new Map<string, { edge: RoadEdge; from: string }>();
  const done = new Set<string>();
  // Simple O(V^2) loop — the graph is small (~100 nodes) and this runs only
  // when a trip is (re)assigned, never per frame.
  for (;;) {
    let u: string | null = null, ud = Infinity;
    for (const [n, d] of dist) {
      if (!done.has(n) && d < ud) { ud = d; u = n; }
    }
    if (u === null) return null; // unreachable
    if (u === to) break;
    done.add(u);
    for (const a of adj.get(u) ?? []) {
      const nd = ud + a.w;
      if (nd < (dist.get(a.to) ?? Infinity)) {
        dist.set(a.to, nd);
        prev.set(a.to, { edge: a.edge, from: u });
      }
    }
  }
  const edges: RoadEdge[] = [];
  let cur = to;
  while (cur !== from) {
    const p = prev.get(cur);
    if (!p) return null;
    edges.unshift(p.edge);
    cur = p.from;
  }
  return edges;
}
