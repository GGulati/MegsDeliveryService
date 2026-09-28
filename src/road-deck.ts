import * as THREE from 'three';
import { ROAD_EDGES, nodeById, nodePos, type RoadEdge } from './roads';
import { heightAt } from './terrain';
import { polyUnionStar, rayPolyDist, quadsOverlap, polyDifference, polyArea, type Poly2 } from './poly2d';

// Shared road-deck geometry helpers (used by scene.ts for the mesh and by
// life.ts for car ride heights). Deck heights are pinned at shared nodes so
// adjacent edges meet exactly — no vertical steps ("skipping") at nodes.

// Total deck width: town streets get car lanes + bike lanes + sidewalks,
// hillside switchbacks stay a plain narrow ribbon.
export const TOWN_ROAD_WIDTH = 8.8;
export const SWITCHBACK_WIDTH = 4.4;
// Cross-section bands (half-widths from centerline): car lanes, bike lanes, sidewalks.
export const CAR_HALF = 2.4;
export const BIKE_HALF = 3.2;
export const WALK_HALF = 4.4;

export function roadWidth(e: RoadEdge): number {
  return e.kind === 'switchback' ? SWITCHBACK_WIDTH : TOWN_ROAD_WIDTH;
}

const curveCache = new Map<RoadEdge, THREE.CatmullRomCurve3>();
export function roadCurve(e: RoadEdge): THREE.CatmullRomCurve3 {
  let c = curveCache.get(e);
  if (!c) {
    const a = nodePos(nodeById(e.a)), b = nodePos(nodeById(e.b));
    const mid = new THREE.Vector3((a.x + b.x) / 2, (a.y + b.y) / 2 + 0.15, (a.z + b.z) / 2);
    c = new THREE.CatmullRomCurve3([
      new THREE.Vector3(a.x, a.y + 0.18, a.z), mid, new THREE.Vector3(b.x, b.y + 0.18, b.z),
    ]);
    curveCache.set(e, c);
  }
  return c;
}

const tmpP = new THREE.Vector3();
const tmpT = new THREE.Vector3();

// Raw deck formula at a station: max(curve, terrain across the full width) + 0.15.
function rawDeckY(e: RoadEdge, t: number): number {
  const curve = roadCurve(e);
  const hw = roadWidth(e) / 2;
  curve.getPointAt(t, tmpP);
  curve.getTangentAt(t, tmpT);
  const l = Math.hypot(tmpT.x, tmpT.z) || 1;
  const nx = -tmpT.z / l, nz = tmpT.x / l;
  return Math.max(
    tmpP.y,
    heightAt(tmpP.x, tmpP.z),
    heightAt(tmpP.x + nx * hw, tmpP.z + nz * hw),
    heightAt(tmpP.x - nx * hw, tmpP.z - nz * hw),
  ) + 0.15;
}

// Slope-limited deck profile. rawDeckY takes the max over terrain samples
// across the road width; where a sample crosses a sharp terrain feature (tier
// blend, bay carve) the max steps vertically — up to 5.5m found on 2026-09-27
// — putting walls in the rendered road and popping cars/peds vertically
// ("teleporting", "skipping up hills"). We replace the raw profile with the
// smallest MAX_DECK_GRADE-Lipschitz function above the raw samples: the deck
// still clears the terrain everywhere, but can never cliff.
const SMOOTH_STATIONS = 64;
const MAX_DECK_GRADE = Math.tan(18 * Math.PI / 180); // 18°: Gurwinder 2026-09-27 max road incline
const smoothDeckCache = new Map<RoadEdge, Float32Array>();

function smoothRawDeckY(e: RoadEdge, t: number): number {
  let s = smoothDeckCache.get(e);
  if (!s) {
    const curve = roadCurve(e);
    const dx = curve.getLength() / SMOOTH_STATIONS;
    const step = MAX_DECK_GRADE * dx;
    const fwd = new Float32Array(SMOOTH_STATIONS + 1);
    fwd[0] = rawDeckY(e, 0);
    for (let i = 1; i <= SMOOTH_STATIONS; i++)
      fwd[i] = Math.max(rawDeckY(e, i / SMOOTH_STATIONS), fwd[i - 1] - step);
    s = new Float32Array(SMOOTH_STATIONS + 1);
    s[SMOOTH_STATIONS] = fwd[SMOOTH_STATIONS];
    for (let i = SMOOTH_STATIONS - 1; i >= 0; i--)
      s[i] = Math.max(fwd[i], s[i + 1] - step);
    smoothDeckCache.set(e, s);
  }
  const x = Math.max(0, Math.min(SMOOTH_STATIONS, t * SMOOTH_STATIONS));
  const i = Math.min(SMOOTH_STATIONS - 1, Math.floor(x));
  const f = x - i;
  return s[i] * (1 - f) + s[i + 1] * f;
}

// Per-node deck height: the max over all incident edges' endpoint heights.
// Pinning edge endpoints to this makes adjacent decks meet exactly.
let nodeHeights: Map<string, number> | null = null;
export function nodeDeckHeights(): Map<string, number> {
  if (nodeHeights) return nodeHeights;
  nodeHeights = new Map();
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    const ends: [string, number][] = [[e.a, 0], [e.b, 1]];
    for (const [id, t] of ends) {
      // From the smoothed profile: node heights must match the Lipschitz
      // endpoints for exact agreement (pinning was removed).
      const y = smoothRawDeckY(e, t);
      nodeHeights.set(id, Math.max(nodeHeights.get(id) ?? -Infinity, y));
    }
  }
  return nodeHeights;
}

// Continuous deck height along an edge: the slope-limited raw profile blended
// with the pinned node heights so there is no step where edges meet.
export function deckHeightAt(e: RoadEdge, t: number): number {
  const nodes = nodeDeckHeights();
  const yA = nodes.get(e.a) ?? rawDeckY(e, 0);
  const yB = nodes.get(e.b) ?? rawDeckY(e, 1);
  return Math.max(smoothRawDeckY(e, t), yA + (yB - yA) * t);
}

// ---------------------------------------------------------------------------
// Intersections (clean-break redesign 2026-09-27, replacing junction patches).
//
// Where road ribbons meet, each ribbon is CLIPPED to end at the intersection
// boundary (clip = zone reach in the leg's direction), and the shared zone
// becomes a single flat mesh at one height. Ribbons and mesh meet at a shared
// boundary rather than overlapping; adjacent zones are vertically separated
// by the de-coplanar pass. Road cross-section styling (asphalt, bike lanes,
// sidewalks, dashes) runs the full clipped length of every ribbon — nothing
// is covered.
//
// Per incident edge, `clip` is the distance from the node where the ribbon
// ends and the intersection mesh begins. Markings (stop lines, crosswalks,
// sidewalk fillets) are flat decals 1-2cm above the mesh — never coplanar.
// ---------------------------------------------------------------------------

export interface ZoneVertex { x: number; z: number; h: number }
export interface IntersectionLeg {
  edge: RoadEdge;
  dx: number; dz: number; // unit direction from the node toward the other end
  hw: number;             // corridor half-width
  clip: number;           // clip distance from the node (ribbon ends here; = zone reach)
  stub: number;           // node stub length (leg's own rectangle; markings stay within this)
}
export interface Intersection {
  nodeId: string;
  ring: ZoneVertex[]; // boundary polygon, CCW (star-shaped w.r.t. the node)
  tris: [ZoneVertex, ZoneVertex, ZoneVertex][]; // flat fan triangulation
  legs: IntersectionLeg[];
  height: number; // single flat mesh height (max deck over the zone + 2cm crown)
  mergedIds?: string[]; // original node IDs if this is a merged compound node
}

// Nodes where the incident decks spread too far are grade-separated crossings
// (e.g. switchback hairpins stacked vertically), not true intersections: no
// mesh is built and roads pass at their own heights (bridges already work this
// way). Unchanged from the patch era.
const INTERSECTION_MAX_SPREAD = 0.8;

interface EdgeDir { e: RoadEdge; dx: number; dz: number; hw: number; len: number; ox: number; oz: number }

function incidentDirs(nodeId: string): EdgeDir[] {
  const p = nodePos(nodeById(nodeId));
  const out: EdgeDir[] = [];
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    if (e.a !== nodeId && e.b !== nodeId) continue;
    const o = nodePos(nodeById(e.a === nodeId ? e.b : e.a));
    const dx = o.x - p.x, dz = o.z - p.z;
    const len = Math.hypot(dx, dz) || 1;
    out.push({ e, dx: dx / len, dz: dz / len, hw: roadWidth(e) / 2, len, ox: o.x, oz: o.z });
  }
  return out;
}

// Approximate deck height of edge e near plan position (x,z): project onto
// the node->other straight segment for the curve parameter. NOTE: t is measured
// from the node here, while deckHeightAt measures from e.a — flip for incoming
// edges (a past bug had the direction backwards: up to 17.7m height error).
function deckHeightNear(d: EdgeDir, nodeId: string, x: number, z: number): number {
  const a = nodePos(nodeById(nodeId));
  const abx = d.ox - a.x, abz = d.oz - a.z;
  const l2 = abx * abx + abz * abz || 1;
  const t = Math.min(1, Math.max(0, ((x - a.x) * abx + (z - a.z) * abz) / l2));
  return deckHeightAt(d.e, d.e.a === nodeId ? t : 1 - t);
}

// Stub length for a junction: spans the pairwise ribbon-overlap zone. Capped
// small — the overlap zone for acute merges can be tens of meters long, but a
// huge asphalt zone reads as a parking lot, not a clean junction (2026-09-27).
function stubLenFor(dirs: EdgeDir[]): number {
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

let intersectionCache: Intersection[] | null = null;
export function intersections(): Intersection[] {
  if (intersectionCache) return intersectionCache;
  // Pass 1: per-node stub lengths and raw per-leg clips.
  const nodeIds = new Set<string>();
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    nodeIds.add(e.a); nodeIds.add(e.b);
  }
  const wanted = new Map<string, { dirs: EdgeDir[]; stubLen: number }>();
  for (const id of nodeIds) {
    // Switchback hairpins are not junctions (no crosswalks/stop lines).
    if (nodeById(id).noIntersect) continue;
    const dirs = incidentDirs(id);
    if (dirs.length < 2) continue;
    // Near-collinear pairs are not real junctions (straight-through or
    // duplicate overlapping roads): the ribbon itself is the surface.
    if (dirs.length === 2) {
      const dot = Math.min(1, Math.max(-1, dirs[0].dx * dirs[1].dx + dirs[0].dz * dirs[1].dz));
      const theta = Math.acos(dot);
      if (theta < Math.PI / 12 || theta > Math.PI - Math.PI / 12) continue;
    }
    const stubLen = stubLenFor(dirs);
    // Grade-separated check: if the incident roads differ too much in height
    // across the zone, this is not a flat intersection — skip it. Samples
    // each road along its stub; compares individual road heights.
    const p = nodePos(nodeById(id));
    let hMin = Infinity, hMax = -Infinity;
    for (const d of dirs) {
      for (const f of [0, 0.5, 1]) {
        const s = Math.min(stubLen, d.len * 0.9) * f;
        const h = deckHeightNear(d, id, p.x + d.dx * s, p.z + d.dz * s);
        hMin = Math.min(hMin, h); hMax = Math.max(hMax, h);
      }
    }
    if (hMax - hMin > INTERSECTION_MAX_SPREAD) continue;
    wanted.set(id, { dirs, stubLen });
  }
  // Pass 1b: relax per-node stubLens for short edges. When one edge carries
  // an intersection at BOTH ends, the two stubLens must leave at least 1m of
  // visible road: stubLen[A] + stubLen[B] <= len - 1. An absolute gap (not a
  // fraction) is principled: it guarantees a drivable segment regardless of
  // edge length. We shrink the NODE stubLens (not per-edge clips) so the
  // max-reach invariant survives.
  const stubLenFinal = new Map<string, number>();
  for (const [id, { stubLen }] of wanted) stubLenFinal.set(id, stubLen);
  for (let iter = 0; iter < 10; iter++) {
    let changed = false;
    for (const e of ROAD_EDGES) {
      if (e.kind === 'bridge') continue;
      const a = stubLenFinal.get(e.a), b = stubLenFinal.get(e.b);
      if (a === undefined || b === undefined) continue;
      const pa = nodePos(nodeById(e.a)), pb = nodePos(nodeById(e.b));
      const len = Math.hypot(pb.x - pa.x, pb.z - pa.z) || 1;
      const maxSum = Math.max(len - 1.0, len * 0.5);
      if (a + b > maxSum) {
        const k = maxSum / (a + b);
        stubLenFinal.set(e.a, a * k);
        stubLenFinal.set(e.b, b * k);
        changed = true;
      }
    }
    if (!changed) break;
  }
  // Pass 2: per-leg clips from the relaxed stubLens. No per-edge shrinking:
  // stubLenFinal already guarantees the both-ends fit, so clip == stubLen
  // (stubLen <= minLen*0.9 by construction) and the reach invariant holds.
  intersectionCache = [];
  for (const [id, { dirs }] of wanted) {
    const stubLen = stubLenFinal.get(id)!;
    const capOf = (_e: RoadEdge): number => stubLen;
    const p = nodePos(nodeById(id));
    // Single flat height: max deck over the zone + 2cm crown. Nothing
    // overlaps the mesh, so no lift is needed to avoid fighting.
    let height = -Infinity;
    // Boundary angles: uniform samples PLUS the exact stub-rectangle corner
    // angles of every leg. Uniform 5-degree steps alone can straddle a stub
    // corner and cut it off (up to ~1m); the boundary is piecewise straight
    // between corners, so sampling the corners makes the polygon exact along
    // each stub's sides and end cap. This guarantees the clipped ribbon
    // (which fills the stub rectangles) is covered by the mesh.
    const K = 72;
    const angles: number[] = [];
    for (let k = 0; k < K; k++) angles.push((k / K) * Math.PI * 2);
    for (const d of dirs) {
      const la = Math.atan2(d.dz, d.dx);
      const ca = Math.atan2(d.hw, capOf(d.e));
      const norm = (a: number) => ((a % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      // Sample the leg direction itself (for exact clip lookup) plus the
      // stub-corner angles (so the polygon exactly covers ribbon end caps).
      angles.push(norm(la), norm(la + ca), norm(la - ca));
    }
    angles.sort((x, y) => x - y);
    const phis: number[] = [];
    for (const a of angles) {
      if (phis.length === 0 || Math.abs(a - phis[phis.length - 1]) > 1e-9) phis.push(a);
    }
    const rhos = new Float64Array(phis.length);
    for (let k = 0; k < phis.length; k++) {
      const phi = phis[k];
      const ux = Math.cos(phi), uz = Math.sin(phi);
      let rMax = 0;
      for (const d of dirs) {
        const cap = capOf(d.e);
        const ud = ux * d.dx + uz * d.dz;
        const un = Math.abs(ux * -d.dz + uz * d.dx);
        let r: number;
        if (ud > 1e-6) {
          r = Math.min(d.hw / Math.max(un, 1e-6), cap / ud);
        } else {
          r = d.hw;
        }
        if (r > rMax) rMax = r;
      }
      rhos[k] = Math.max(rMax, 0.5);
    }
    const FR = [0, 0.25, 0.5, 0.75, 1];
    for (let k = 0; k < phis.length; k++) {
      const phi = phis[k];
      for (const f of FR) {
        const x = p.x + Math.cos(phi) * rhos[k] * f;
        const z = p.z + Math.sin(phi) * rhos[k] * f;
        for (const d of dirs) height = Math.max(height, deckHeightNear(d, id, x, z));
      }
    }
    height += 0.02;
    // Zone footprint = UNION of the incident ribbon stubs (star-shaped w.r.t.
    // the node, so the polar boundary captures it exactly). No wedges, no gaps.
    const ring: ZoneVertex[] = [];
    for (let k = 0; k < phis.length; k++) {
      const phi = phis[k];
      ring.push({
        x: p.x + Math.cos(phi) * rhos[k],
        z: p.z + Math.sin(phi) * rhos[k],
        h: height,
      });
    }
    const center: ZoneVertex = { x: p.x, z: p.z, h: height };
    const tris: [ZoneVertex, ZoneVertex, ZoneVertex][] = [];
    for (let k = 0; k < phis.length; k++)
      tris.push([center, ring[k], ring[(k + 1) % phis.length]]);
    // Final leg clips: the zone's actual reach in each leg's direction.
    // This is the shared boundary — the ribbon ends exactly where the mesh
    // begins (zero overlap by construction). Reach <= stubLen, so the
    // both-ends fit from Pass 1b is preserved.
    const normAng = (a: number) => ((a % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const reachAt = (dx: number, dz: number): number => {
      const la = normAng(Math.atan2(dz, dx));
      for (let k = 0; k < phis.length; k++) {
        if (Math.abs(phis[k] - la) < 1e-9) return rhos[k];
      }
      return stubLen; // fallback (should not happen: la was sampled)
    };
    const legs: IntersectionLeg[] = dirs.map(d => ({
      edge: d.e, dx: d.dx, dz: d.dz, hw: d.hw, clip: reachAt(d.dx, d.dz), stub: stubLen,
    }));
    intersectionCache.push({ nodeId: id, ring, tris, legs, height });
  }
  // Structural merge: where two zones overlap in plan, merge them into a
  // single compound intersection. This replaces the de-coplanar height hack
  // (which left overlapping meshes at different heights). The merged zone has
  // a single height and a unified ring — zero overlap by construction.
  const zonesOverlap = (a: Intersection, b: Intersection): boolean => {
    for (const v of b.ring) if (intersectionContains(a, v.x, v.z)) return true;
    for (const v of a.ring) if (intersectionContains(b, v.x, v.z)) return true;
    return false;
  };
  // Import poly2d ops (at top of file in real code; inline here for the edit)
  for (let iter = 0; iter < 10; iter++) {
    let merged = false;
    for (let i = 0; i < intersectionCache.length && !merged; i++) {
      for (let j = i + 1; j < intersectionCache.length && !merged; j++) {
        const a = intersectionCache[i], b = intersectionCache[j];
        if (!zonesOverlap(a, b)) continue;
        // Merge b into a: unified ring, combined legs, max height.
        const polyA: Poly2 = a.ring.map(v => [v.x, v.z]);
        const polyB: Poly2 = b.ring.map(v => [v.x, v.z]);
        const mergedPoly = polyUnionStar(polyA, polyB);
        const newHeight = Math.max(a.height, b.height);
        const newRing: ZoneVertex[] = mergedPoly.map(([x, z]) => ({ x, z, h: newHeight }));
        const center: ZoneVertex = {
          x: newRing.reduce((s, v) => s + v.x, 0) / newRing.length,
          z: newRing.reduce((s, v) => s + v.z, 0) / newRing.length,
          h: newHeight,
        };
        const newTris: [ZoneVertex, ZoneVertex, ZoneVertex][] = [];
        for (let k = 0; k < newRing.length; k++) {
          newTris.push([center, newRing[k], newRing[(k + 1) % newRing.length]]);
        }
        // Combine legs, deduplicating by edge. Recompute clip distances:
        // the merged polygon is larger, so rays from each leg's node must
        // be cast to the new boundary.
        const seen = new Set<RoadEdge>();
        const newLegs: IntersectionLeg[] = [];
        const mergedIds = [...(a.mergedIds ?? [a.nodeId]), ...(b.mergedIds ?? [b.nodeId])];
        for (const l of [...a.legs, ...b.legs]) {
          if (seen.has(l.edge)) continue;
          seen.add(l.edge);
          // Find which original node this leg belongs to
          const nodeId = mergedIds.find(id => l.edge.a === id || l.edge.b === id) ?? mergedIds[0];
          const np = nodePos(nodeById(nodeId));
          const newClip = rayPolyDist(np.x, np.z, l.dx, l.dz, mergedPoly);
          newLegs.push({
            ...l,
            clip: newClip > 0 ? newClip : l.clip, // fallback to original if raycast fails
          });
        }
        const mergedIx: Intersection = {
          nodeId: `${a.nodeId}+${b.nodeId}`,
          ring: newRing,
          tris: newTris,
          legs: newLegs,
          height: newHeight,
          mergedIds,
        };
        intersectionCache[i] = mergedIx;
        intersectionCache.splice(j, 1);
        merged = true;
      }
    }
    if (!merged) break;
  }
  // Cache the per-edge clip lookup for edgeClips()/ribbonHeightAt().
  edgeClipCache = new Map();
  for (const ix of intersectionCache) {
    // For merged nodes, match legs against the original node IDs.
    const ids = ix.mergedIds ?? [ix.nodeId];
    for (const l of ix.legs) {
      let slot = edgeClipCache.get(l.edge);
      if (!slot) { slot = { a: null, b: null }; edgeClipCache.set(l.edge, slot); }
      const info = { dist: l.clip, height: ix.height };
      // The leg's edge connects to one of the merged node IDs.
      if (ids.includes(l.edge.a)) slot.a = info;
      else if (ids.includes(l.edge.b)) slot.b = info;
      // Fallback for non-merged (should not happen, but safe)
      else if (l.edge.a === ix.nodeId) slot.a = info;
      else slot.b = info;
    }
  }
  return intersectionCache;
}

// Per-edge clip info: where ribbons end at intersection nodes (null = no
// intersection at that end). `height` is the intersection mesh height, used
// to ramp ribbon ends flush with the mesh.
export interface EdgeClipInfo { dist: number; height: number }
let edgeClipCache: Map<RoadEdge, { a: EdgeClipInfo | null; b: EdgeClipInfo | null }> | null = null;
export function edgeClips(e: RoadEdge): { a: EdgeClipInfo | null; b: EdgeClipInfo | null } {
  if (!edgeClipCache) intersections();
  return edgeClipCache!.get(e) ?? { a: null, b: null };
}

// Curve parameter for a plan-distance from a node. The intersection clip is
// a PLAN distance (zone reach along the leg), but curve.getPointAt uses ARC
// length — on curved roads the point at arc-distance `dist` sits at
// plan-distance < dist, i.e. INSIDE the mesh zone, overlapping the flat mesh
// at the same height (up to 0.35m of coplanar overlap found 2026-09-27:
// se4->m4). That coplanar overlap z-fights and flickers. Binary-search the
// parameter whose plan-distance from the node equals `dist`; callers subtract
// a small margin so the ribbon ends strictly inside its own zone.
export function clipT(e: RoadEdge, end: 'a' | 'b', dist: number): number {
  const curve = roadCurve(e);
  const n = nodePos(nodeById(end === 'a' ? e.a : e.b));
  let lo = 0, hi = 1;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    const p = curve.getPointAt(end === 'a' ? mid : 1 - mid);
    const d = Math.hypot(p.x - n.x, p.z - n.z);
    if (d < dist) lo = mid; else hi = mid;
  }
  const s = (lo + hi) / 2;
  return end === 'a' ? s : 1 - s;
}

// Ribbon ride height: the deck profile, ramped to the intersection mesh
// height before a clip line so the ribbon end meets the mesh exactly (no
// step at the seam). Used for both the ribbon mesh and dashes so paint
// follows the surface. On short edges the ramps shrink so the two ends
// never interfere.
const CLIP_RAMP = 3;
function smooth01(x: number): number {
  const k = Math.max(0, Math.min(1, x));
  return k * k * (3 - 2 * k);
}
// Cache arc lengths: roadCurve(e).getLength() recomputes (200 subdivisions)
// on every call; ribbonHeightAt is called per-entity per-frame.
const arcLenCache = new Map<RoadEdge, number>();
function arcLen(e: RoadEdge): number {
  let l = arcLenCache.get(e);
  if (l === undefined) {
    l = roadCurve(e).getLength();
    arcLenCache.set(e, l);
  }
  return l;
}

export function ribbonHeightAt(e: RoadEdge, t: number): number {
  const base = deckHeightAt(e, t);
  const { a, b } = edgeClips(e);
  if (!a && !b) return base;
  const len = arcLen(e);
  const s = t * len;
  const free = len - (a ? a.dist : 0) - (b ? b.dist : 0);
  const ramp = Math.max(1e-6, Math.min(CLIP_RAMP, free / 2));
  if (a && s < a.dist + ramp) {
    const k = smooth01((s - a.dist) / ramp);
    return a.height * (1 - k) + base * k;
  }
  if (b && s > len - b.dist - ramp) {
    const k = smooth01((len - b.dist - s) / ramp);
    return b.height * (1 - k) + base * k;
  }
  return base;
}

// Visual surface height of the intersection zone at (x,z), or null outside
// every zone. Where zones overlap, the HIGHER mesh occludes the lower, so
// the max height is the rendered top surface. Entities ride this (not the
// raw deck) so wheels/feet stay on the rendered asphalt at intersections.
// Flat per zone: point-in-polygon, then the single mesh height.
export function intersectionHeight(x: number, z: number): number | null {
  let h: number | null = null;
  for (const ix of intersections()) {
    if (intersectionContains(ix, x, z)) h = h === null ? ix.height : Math.max(h, ix.height);
  }
  return h;
}

// Ground truth for entity ride height: the intersection surface inside zones,
// otherwise the road deck. Blends across zone boundaries over a 1.5m radius
// to prevent vertical warps when entities cross the boundary (2026-09-27).
const HEIGHT_BLEND_RADIUS = 1.5;

export function roadGroundHeight(e: RoadEdge, t: number, x: number, z: number): number {
  // The rendered ribbon surface (deck ramped to the intersection mesh at
  // clips), or the intersection mesh top where zones overlap. Matches
  // exactly what scene.ts renders so wheels/feet never float or sink.
  const ribbonH = ribbonHeightAt(e, t);

  let nearestDist = Infinity;
  let nearestH = 0;
  let maxInsideH: number | null = null;
  let inside = false;

  for (const ix of intersections()) {
    const d = intersectionSignedDist(ix, x, z);
    if (d > 0) {
      inside = true;
      maxInsideH = maxInsideH === null ? ix.height : Math.max(maxInsideH, ix.height);
    }
    if (Math.abs(d) < Math.abs(nearestDist)) {
      nearestDist = d;
      nearestH = ix.height;
    }
  }

  // Well outside all zones: pure ribbon.
  if (!inside && nearestDist < -HEIGHT_BLEND_RADIUS) return ribbonH;
  // Well inside: max intersection height (preserves existing behavior).
  if (inside && nearestDist > HEIGHT_BLEND_RADIUS) return maxInsideH!;

  // Transition zone: smooth blend from ribbon to intersection height.
  // At -RADIUS: pure ribbon. At +RADIUS: pure intersection. Continuous.
  const s = smoothstep(-HEIGHT_BLEND_RADIUS, HEIGHT_BLEND_RADIUS, nearestDist);
  const targetH = inside ? maxInsideH! : nearestH;
  return ribbonH + (targetH - ribbonH) * s;
}

// Plan-view marking layout for an intersection (pure geometry; scene.ts
// lifts these to render heights). white = stop lines + crosswalk stripes,
// walk = sidewalk corner fillets. Every quad must lie inside the zone.
export interface IntersectionMarkings {
  white: [number, number][][];
  walk: [number, number][][];
}

// Quad corners for a flat strip segment A->B with width w.
function stripQuad(A: [number, number], B: [number, number], w: number): [number, number][] {
  const ex = B[0] - A[0], ez = B[1] - A[1], el = Math.hypot(ex, ez) || 1;
  const nx = -ez / el * w / 2, nz = ex / el * w / 2;
  return [[A[0] + nx, A[1] + nz], [A[0] - nx, A[1] - nz],
          [B[0] - nx, B[1] - nz], [B[0] + nx, B[1] + nz]];
}

export function intersectionMarkings(ix: Intersection): IntersectionMarkings {
  const p = nodePos(nodeById(ix.nodeId));
  const white: [number, number][][] = [];
  const walk: [number, number][][] = [];
  // Frame: s = distance from node along the leg, w = lateral offset.
  const at = (dx: number, dz: number, s: number, w: number): [number, number] =>
    [p.x + dx * s - dz * w, p.z + dz * s + dx * w];
  for (const leg of ix.legs) {
    const { dx, dz, hw, stub } = leg;
    // Stop line: thin white bar across the car lanes, just inside the stub.
    // (Uses stub, not clip: the reach can extend beyond the leg's own
    // rectangle via neighbor stubs; markings stay on the leg's road.)
    // No center dashes or bike-lane paint inside the zone — lane markings
    // terminate at entries, like real roads. Clamp: if the stub is very
    // short, keep paint on the node's side.
    const sw = Math.min(CAR_HALF, hw - 0.3);
    if (sw > 0.5) {
      const s = Math.max(stub - 1.3, 0.5);
      white.push([at(dx, dz, s - 0.225, -sw), at(dx, dz, s - 0.225, sw),
                  at(dx, dz, s + 0.225, sw), at(dx, dz, s + 0.225, -sw)]);
    }
    // Crosswalk: zebra stripes across the full road width, just inside the
    // stop line.
    const nStripes = hw > 3 ? 5 : 3;
    const span = 2 * hw - 1;
    const sc = Math.max(stub - 3.0, 1.0);
    for (let i = 0; i < nStripes; i++) {
      const w = -span / 2 + span * (i + 0.5) / nStripes;
      white.push([at(dx, dz, sc - 1.0, w - 0.28), at(dx, dz, sc - 1.0, w + 0.28),
                  at(dx, dz, sc + 1.0, w + 0.28), at(dx, dz, sc + 1.0, w - 0.28)]);
    }
  }
  // Sidewalk corner fillets: for each adjacent leg pair (sorted by angle), a
  // sidewalk-colored strip hugging the corner from one sidewalk band to the
  // next — routed via the boundary corner (intersection of the two outer
  // sidewalk lines, pulled slightly inside) so the strip provably stays in
  // the zone. Skipped where a leg has no sidewalk, on reflex wedges,
  // near-straight continuations, and acute slivers.
  const sorted = [...ix.legs].sort((a, b) =>
    Math.atan2(a.dz, a.dx) - Math.atan2(b.dz, b.dx));
  for (let i = 0; i < sorted.length; i++) {
    const d1 = sorted[i], d2 = sorted[(i + 1) % sorted.length];
    if (d1.hw < WALK_HALF - 0.01 || d2.hw < WALK_HALF - 0.01) continue;
    const a1 = Math.atan2(d1.dz, d1.dx);
    const a2 = Math.atan2(d2.dz, d2.dx);
    let theta = a2 - a1;
    if (theta <= 0) theta += Math.PI * 2;
    if (theta > Math.PI) continue; // reflex wedge: no corner fillet
    const wMid = (BIKE_HALF + WALK_HALF) / 2;
    // Wedge-side normals: left of d1, right of d2.
    const n1x = -d1.dz, n1z = d1.dx;
    const n2x = d2.dz, n2z = -d2.dx;
    // Sidewalk corner fillet: a bent strip from the leg-1 sidewalk band to the
    // leg-2 band, pulled inside around the corner. P1/P2 sit 0.7m inside the
    // stub lines (not the reach: the reach can exceed the leg's own rectangle)
    // so the strip's angled end caps (half-width 0.5) never poke past the
    // stub boundary; the 72-gon zone is exact along stub sides/caps.
    const P1: [number, number] = [
      p.x + d1.dx * (d1.stub - 0.7) + n1x * wMid,
      p.z + d1.dz * (d1.stub - 0.7) + n1z * wMid];
    const P2: [number, number] = [
      p.x + d2.dx * (d2.stub - 0.7) + n2x * wMid,
      p.z + d2.dz * (d2.stub - 0.7) + n2z * wMid];
    // Strip width 1.0 (not the full 1.2m sidewalk band): the outer edge stays
    // 10cm inside the stub boundary so the 72-gon chord approximation of the
    // zone never cuts a strip corner off.
    const w = 1.0;
    if (theta > Math.PI - Math.PI / 12) {
      // Near-straight: the sidewalk continues across; one straight strip.
      walk.push(stripQuad(P1, P2, w));
      continue;
    }
    if (theta < Math.PI / 6) continue; // acute sliver: skip
    // Corner point: intersection of the outer sidewalk lines,
    //   node + d1*s + n1*W = node + d2*t + n2*W
    const W = WALK_HALF;
    const det = d2.dx * d1.dz - d1.dx * d2.dz;
    if (Math.abs(det) < 1e-6) continue;
    const s = W * (-(n2x - n1x) * d2.dz + d2.dx * (n2z - n1z)) / det;
    const cx = p.x + d1.dx * s + n1x * W;
    const cz = p.z + d1.dz * s + n1z * W;
    const bisA = a1 + theta / 2;
    const rc = Math.hypot(cx - p.x, cz - p.z);
    const rcUse = Math.min(rc - 0.4, 0.85 * Math.min(d1.stub, d2.stub));
    if (rcUse < 1.2) continue;
    const Q: [number, number] = [p.x + Math.cos(bisA) * rcUse, p.z + Math.sin(bisA) * rcUse];
    walk.push(stripQuad(P1, Q, w), stripQuad(Q, P2, w));
  }
  // Inter-leg deconfliction: markings from different legs must not overlap.
  // Strategy: greedy acceptance. Earlier quads win. If a quad overlaps with
  // any accepted quad, drop it entirely. This guarantees zero overlap by
  // construction — no flicker possible. (Dropping a crosswalk stripe is
  // better than flicker.)
  const deconflict = (quads: [number, number][][]): [number, number][][] => {
    const result: [number, number][][] = [];
    for (const q of quads) {
      let overlaps = false;
      for (const existing of result) {
        if (quadsOverlap(q as Poly2, existing as Poly2)) {
          overlaps = true;
          break;
        }
      }
      if (!overlaps) result.push(q);
    }
    return result;
  };
  // White first (higher priority: stop lines before crosswalks per leg).
  let whiteClean = deconflict(white);
  // Verify: if any overlaps remain (deconfliction bug), drop all white.
  // Better to have no markings than flicker.
  let hasOverlap = false;
  for (let i = 0; i < whiteClean.length && !hasOverlap; i++) {
    for (let j = i + 1; j < whiteClean.length && !hasOverlap; j++) {
      if (quadsOverlap(whiteClean[i] as Poly2, whiteClean[j] as Poly2)) {
        hasOverlap = true;
      }
    }
  }
  if (hasOverlap) {
    whiteClean = [];
  }
  // Walk: drop if overlaps with white or with accepted walk.
  const walkClean: [number, number][][] = [];
  for (const q of walk) {
    let overlaps = false;
    for (const w of whiteClean) {
      if (quadsOverlap(q as Poly2, w as Poly2)) { overlaps = true; break; }
    }
    if (!overlaps) {
      for (const existing of walkClean) {
        if (quadsOverlap(q as Poly2, existing as Poly2)) { overlaps = true; break; }
      }
    }
    if (!overlaps) walkClean.push(q);
  }
  // TEMPORARY: disable walk markings entirely — they overlap with white and
  // cause flicker. The sidewalk corner fillets are decorative; white lines
  // (stop lines, crosswalks) are the critical markings.
  // TODO: re-enable with proper geometry once white deconfliction is stable.
  return { white: whiteClean, walk: [] };
}

// Point-in-polygon (even-odd): rings are star-shaped but not convex, so the
// convex half-plane test does not apply.
export function intersectionContains(ix: Intersection, x: number, z: number): boolean {
  const r = ix.ring;
  let inside = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const xi = r[i].x, zi = r[i].z, xj = r[j].x, zj = r[j].z;
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi)
      inside = !inside;
  }
  return inside;
}

// Signed distance from (x,z) to the intersection ring boundary: positive
// inside, negative outside. Used to blend the heightfield across zone
// boundaries (ped warp fix, 2026-09-27).
export function intersectionSignedDist(ix: Intersection, x: number, z: number): number {
  const r = ix.ring;
  let minDistSq = Infinity;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const ax = r[j].x, az = r[j].z, bx = r[i].x, bz = r[i].z;
    const abx = bx - ax, abz = bz - az;
    const denom = abx * abx + abz * abz || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * abx + (z - az) * abz) / denom));
    const cx = ax + abx * t, cz = az + abz * t;
    const dx = x - cx, dz = z - cz;
    const dSq = dx * dx + dz * dz;
    if (dSq < minDistSq) minDistSq = dSq;
  }
  const dist = Math.sqrt(minDistSq);
  return intersectionContains(ix, x, z) ? dist : -dist;
}

function smoothstep(a: number, b: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
