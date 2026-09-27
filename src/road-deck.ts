import * as THREE from 'three';
import { ROAD_EDGES, nodeById, nodePos, type RoadEdge } from './roads';
import { heightAt } from './terrain';

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
      const y = rawDeckY(e, t);
      nodeHeights.set(id, Math.max(nodeHeights.get(id) ?? -Infinity, y));
    }
  }
  return nodeHeights;
}

// Continuous deck height along an edge: the raw formula blended with the
// pinned node heights so there is no step where edges meet.
export function deckHeightAt(e: RoadEdge, t: number): number {
  const nodes = nodeDeckHeights();
  const yA = nodes.get(e.a) ?? rawDeckY(e, 0);
  const yB = nodes.get(e.b) ?? rawDeckY(e, 1);
  return Math.max(rawDeckY(e, t), yA + (yB - yA) * t);
}

// ---------------------------------------------------------------------------
// Junction patches. Where road ribbons meet, their decks overlap in plan at
// slightly different heights (different grades) and visibly clip through each
// other. Each multi-edge node gets a single convex "junction patch" — the hull
// of every pairwise ribbon overlap — draped 5cm above the highest deck, so the
// intersection renders as one clean asphalt surface (user feedback 2026-09-27).
// ---------------------------------------------------------------------------

export interface PatchVertex { x: number; z: number; h: number }
export interface JunctionPatch {
  nodeId: string;
  ring: PatchVertex[]; // convex hull boundary, CCW (used for the skirt + containment)
  tris: [PatchVertex, PatchVertex, PatchVertex][]; // draped surface triangulation
}

// Nodes where the draped heights spread too far are grade-separated crossings
// (e.g. switchback hairpins stacked vertically), not true intersections: the
// ribbons can't clip in 3D there, so no patch is built (pre-existing look kept).
// Note: adjacent nodes can yield overlapping hulls (long acute wedges); the
// overlap renders coplanar with identical color/material/normals, so it is
// invisible, and entity heights agree within ~5cm (first-hit-wins). Merging
// overlapping patches is a possible follow-up, not a correctness issue.
const PATCH_MAX_SPREAD = 0.8;

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

type Pt = [number, number];

// Sutherland–Hodgman convex polygon clip: intersect subject with clip polygon.
function clipPoly(subject: Pt[], clip: Pt[]): Pt[] {
  let out = subject;
  for (let i = 0; i < clip.length; i++) {
    const a = clip[i], b = clip[(i + 1) % clip.length];
    const inside = (p: Pt) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]) >= 0;
    const next: Pt[] = [];
    for (let j = 0; j < out.length; j++) {
      const cur = out[j], prev = out[(j + out.length - 1) % out.length];
      const ci = inside(cur), pi = inside(prev);
      if (ci) {
        if (!pi) next.push(segInt(prev, cur, a, b));
        next.push(cur);
      } else if (pi) {
        next.push(segInt(prev, cur, a, b));
      }
    }
    out = next;
    if (!out.length) break;
  }
  return out;
}

function segInt(p1: Pt, p2: Pt, a: Pt, b: Pt): Pt {
  const d1x = p2[0] - p1[0], d1y = p2[1] - p1[1];
  const d2x = b[0] - a[0], d2y = b[1] - a[1];
  const denom = d1x * d2y - d1y * d2x || 1e-9;
  const t = ((a[0] - p1[0]) * d2y - (a[1] - p1[1]) * d2x) / denom;
  return [p1[0] + d1x * t, p1[1] + d1y * t];
}

// Andrew monotone chain convex hull.
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

// Rectangle for a ribbon: from the node outward along dir, half-width hw.
function ribbonRect(p: { x: number; z: number }, d: EdgeDir, len: number): Pt[] {
  const px = -d.dz, pz = d.dx; // perpendicular
  const ex = p.x + d.dx * len, ez = p.z + d.dz * len;
  return [
    [p.x + px * d.hw, p.z + pz * d.hw],
    [p.x - px * d.hw, p.z - pz * d.hw],
    [ex - px * d.hw, ez - pz * d.hw],
    [ex + px * d.hw, ez + pz * d.hw],
  ];
}

// Approximate deck height of edge e near plan position (x,z): project onto
// the node->other straight segment for the curve parameter. NOTE: t is measured
// from the node here, while deckHeightAt measures from e.a — flip for incoming
// edges (reviewer caught this 2026-09-27: up to 17.7m drape error otherwise).
function deckHeightNear(d: EdgeDir, nodeId: string, x: number, z: number): number {
  const a = nodePos(nodeById(nodeId));
  const abx = d.ox - a.x, abz = d.oz - a.z;
  const l2 = abx * abx + abz * abz || 1;
  const t = Math.min(1, Math.max(0, ((x - a.x) * abx + (z - a.z) * abz) / l2));
  return deckHeightAt(d.e, d.e.a === nodeId ? t : 1 - t);
}

let patchCache: JunctionPatch[] | null = null;
export function junctionPatches(): JunctionPatch[] {
  if (patchCache) return patchCache;
  patchCache = [];
  const nodeIds = new Set<string>();
  for (const e of ROAD_EDGES) {
    if (e.kind === 'bridge') continue;
    nodeIds.add(e.a); nodeIds.add(e.b);
  }
  for (const id of nodeIds) {
    const dirs = incidentDirs(id);
    if (dirs.length < 2) continue;
    const p = nodePos(nodeById(id));
    const verts: Pt[] = [[p.x, p.z]];
    for (let i = 0; i < dirs.length; i++) {
      for (let j = i + 1; j < dirs.length; j++) {
        const a = dirs[i], b = dirs[j];
        const dot = Math.min(1, Math.max(-1, a.dx * b.dx + a.dz * b.dz));
        const theta = Math.acos(dot);
        // Clamp theta >= 12deg to bound patch size. Tradeoff (review 2026-09-27):
        // a true fork shallower than 12deg has overlap beyond the clamp reach
        // and would keep clipping past the patch edge; no current node has a
        // pair in (0deg, 12deg) (shallowest is 13.1deg), and exact-0deg pairs
        // are collinear (degenerate clip, no area overlap).
        const clamped = Math.min(Math.PI, Math.max(Math.PI / 15, theta));
        const reach = (a.hw + b.hw) / Math.sin(clamped);
        const ra = ribbonRect(p, a, Math.min(a.len, reach));
        const rb = ribbonRect(p, b, Math.min(b.len, reach));
        for (const v of clipPoly(ra, rb)) verts.push(v);
      }
    }
    const hull = convexHull(verts);
    if (hull.length < 3) continue;
    let area = 0;
    for (let i = 0; i < hull.length; i++) {
      const [x1, z1] = hull[i], [x2, z2] = hull[(i + 1) % hull.length];
      area += x1 * z2 - x2 * z1;
    }
    if (Math.abs(area) / 2 < 2) continue; // degenerate (straight-through etc.)
    const drape = (x: number, z: number): number => {
      let h = -Infinity;
      for (const d of dirs) h = Math.max(h, deckHeightNear(d, id, x, z));
      return h + 0.05;
    };
    const ring: PatchVertex[] = hull.map(([x, z]) => ({ x, z, h: drape(x, z) }));
    // Grade-separated check: if the drape spreads too far this is a stacked
    // crossing (hairpin), not a flat intersection — skip it.
    let hMin = Infinity, hMax = -Infinity;
    for (const v of ring) { hMin = Math.min(hMin, v.h); hMax = Math.max(hMax, v.h); }
    if (hMax - hMin > PATCH_MAX_SPREAD) continue;
    patchCache.push({ nodeId: id, ring, tris: tessellatePatch(ring, drape) });
  }
  return patchCache;
}

// Tessellate the hull interior as a polar grid from the hull centroid so the
// draped surface tracks deck bulges between the center and the rim (a single
// fan lets the deck poke through by up to 0.3m on real terrain — review
// 2026-09-27). Cells are ~1.5-2m; deck curvature across a cell is negligible.
function tessellatePatch(ring: PatchVertex[], drape: (x: number, z: number) => number)
    : [PatchVertex, PatchVertex, PatchVertex][] {
  const n = ring.length;
  let cx = 0, cz = 0;
  for (const v of ring) { cx += v.x; cz += v.z; }
  cx /= n; cz /= n;
  // Angles of hull verts from centroid, sorted; subdivide each span 3x.
  const base = ring.map(v => Math.atan2(v.z - cz, v.x - cx)).sort((a, b) => a - b);
  const thetas: number[] = [];
  for (let i = 0; i < n; i++) {
    let a0 = base[i], a1 = base[(i + 1) % n];
    if (a1 <= a0) a1 += Math.PI * 2;
    for (let k = 0; k < 3; k++) thetas.push(a0 + (a1 - a0) * (k / 3));
  }
  const m = thetas.length;
  // Hull radius along each ray from the centroid (convex: exactly one hit).
  const rho = thetas.map(th => {
    const dx = Math.cos(th), dz = Math.sin(th);
    let best = Infinity;
    for (let i = 0; i < n; i++) {
      const a = ring[i], b = ring[(i + 1) % n];
      const ex = b.x - a.x, ez = b.z - a.z;
      const denom = dx * ez - dz * ex;
      if (Math.abs(denom) < 1e-9) continue;
      const t = ((a.x - cx) * ez - (a.z - cz) * ex) / denom;
      const u = ((a.x - cx) * dz - (a.z - cz) * dx) / denom;
      if (t > 1e-6 && u >= -1e-6 && u <= 1 + 1e-6 && t < best) best = t;
    }
    return best === Infinity ? 0 : best;
  });
  const FRACS = [0.25, 0.5, 0.75, 1];
  const at = (j: number, f: number): PatchVertex => {
    const x = cx + Math.cos(thetas[j]) * rho[j] * f;
    const z = cz + Math.sin(thetas[j]) * rho[j] * f;
    return { x, z, h: drape(x, z) };
  };
  const tris: [PatchVertex, PatchVertex, PatchVertex][] = [];
  const center: PatchVertex = { x: cx, z: cz, h: drape(cx, cz) };
  const grid: PatchVertex[][] = [];
  for (let j = 0; j < m; j++) grid.push(FRACS.map(f => at(j, f)));
  const jj = (j: number) => (j + 1) % m;
  for (let j = 0; j < m; j++) {
    tris.push([center, grid[j][0], grid[jj(j)][0]]);
    for (let i = 0; i < FRACS.length - 1; i++) {
      const a = grid[j][i], b = grid[j][i + 1], c = grid[jj(j)][i + 1], d = grid[jj(j)][i];
      tris.push([a, b, c], [a, c, d]);
    }
  }
  return tris;
}

// Visual surface height of the junction patch at (x,z), or null when outside
// every patch. Entities ride this (not the raw deck) so wheels/feet stay on
// the rendered asphalt at intersections (review 2026-09-27).
export function patchSurfaceHeight(x: number, z: number): number | null {
  for (const jp of junctionPatches()) {
    if (!patchContains(jp, x, z)) continue;
    for (const [a, b, c] of jp.tris) {
      const d = (b.z - c.z) * (a.x - c.x) + (c.x - b.x) * (a.z - c.z) || 1e-9;
      const u = ((b.z - c.z) * (x - c.x) + (c.x - b.x) * (z - c.z)) / d;
      const v = ((c.z - a.z) * (x - c.x) + (a.x - c.x) * (z - c.z)) / d;
      const w = 1 - u - v;
      if (u >= -1e-6 && v >= -1e-6 && w >= -1e-6)
        return u * a.h + v * b.h + w * c.h;
    }
  }
  return null;
}

// Ground truth for entity ride height: the junction patch surface inside
// intersections, otherwise the road deck.
export function roadGroundHeight(e: RoadEdge, t: number, x: number, z: number): number {
  return patchSurfaceHeight(x, z) ?? deckHeightAt(e, t);
}

// Point-in-convex-polygon (hull rings are CCW convex).
export function patchContains(patch: JunctionPatch, x: number, z: number): boolean {
  const r = patch.ring;
  for (let i = 0; i < r.length; i++) {
    const a = r[i], b = r[(i + 1) % r.length];
    if ((b.x - a.x) * (z - a.z) - (b.z - a.z) * (x - a.x) < 0) return false;
  }
  return true;
}
