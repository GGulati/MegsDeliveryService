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

// Slope-limited deck profile. rawDeckY takes the max over terrain samples
// across the road width; where a sample crosses a sharp terrain feature (tier
// blend, bay carve) the max steps vertically — up to 5.5m found on 2026-09-27
// — putting walls in the rendered road and popping cars/peds vertically
// ("teleporting", "skipping up hills"). We replace the raw profile with the
// smallest MAX_DECK_GRADE-Lipschitz function above the raw samples: the deck
// still clears the terrain everywhere, but can never cliff.
const SMOOTH_STATIONS = 64;
const MAX_DECK_GRADE = 0.4; // 40%: kills cliffs, keeps real hillside grades
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
// Junction patches. Where road ribbons meet, their decks overlap in plan at
// slightly different heights (different grades) and visibly clip through each
// other. Each multi-edge node gets a single convex "junction patch" — the hull
// of every pairwise ribbon overlap — draped 8cm above the highest deck, so the
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
    // Near-collinear pairs are not real junctions (straight-through or
    // duplicate overlapping roads): the ribbon itself is the surface.
    if (dirs.length === 2) {
      const dot = Math.min(1, Math.max(-1, dirs[0].dx * dirs[1].dx + dirs[0].dz * dirs[1].dz));
      const theta = Math.acos(dot);
      if (theta < Math.PI / 12 || theta > Math.PI - Math.PI / 12) continue;
    }
    const p = nodePos(nodeById(id));
    // Stub length: cover the pairwise ribbon-overlap zone so the patch spans
    // the full "mess" where ribbons intersect. Capped small: the overlap zone
    // for acute merges can be tens of meters long, but the visible clipping
    // is confined to the intersection core — a huge plain-asphalt patch reads
    // as a parking lot, not a clean junction (user feedback 2026-09-27).
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
    stubLen = Math.min(stubLen, minLen * 0.9, 14);
    // Grade-separated check: if the incident roads differ too much in height
    // across the patch area, this is not a flat intersection — skip it.
    // Samples each road along its stub; compares individual road heights
    // (not the max drape, which is uniform by construction).
    {
      let hMin = Infinity, hMax = -Infinity;
      for (const d of dirs) {
        for (const f of [0, 0.5, 1]) {
          const s = Math.min(stubLen, d.len * 0.9) * f;
          const x = p.x + d.dx * s, z = p.z + d.dz * s;
          const h = deckHeightNear(d, id, x, z);
          hMin = Math.min(hMin, h); hMax = Math.max(hMax, h);
        }
      }
      if (hMax - hMin > PATCH_MAX_SPREAD) continue;
    }
    const drape = (x: number, z: number): number => {
      let h = -Infinity;
      for (const d of dirs) h = Math.max(h, deckHeightNear(d, id, x, z));
      return h + 0.08; // 8cm lift: covers interpolation error across the patch
    };
    // Patch footprint = UNION of the incident ribbon stubs (not the convex
    // hull). The hull filled wedges between acute roads with asphalt and
    // overlapped neighboring roads; the union is exactly the road surface —
    // no wedges, no gaps. The union of stubs is star-shaped w.r.t. the node,
    // so a polar boundary from the node captures it exactly.
    const K = 72;
    const rhos = new Float64Array(K);
    for (let k = 0; k < K; k++) {
      const phi = (k / K) * Math.PI * 2;
      const ux = Math.cos(phi), uz = Math.sin(phi);
      let rMax = 0;
      for (const d of dirs) {
        const ud = ux * d.dx + uz * d.dz;
        const un = Math.abs(ux * -d.dz + uz * d.dx);
        let r: number;
        if (ud > 1e-6) {
          // Inside the strip: lateral |r*un| <= hw, along 0 <= r*ud <= stubLen.
          r = Math.min(d.hw / Math.max(un, 1e-6), stubLen / ud);
        } else {
          // Behind the ribbon start: the rounded cap around the node.
          r = d.hw;
        }
        if (r > rMax) rMax = r;
      }
      rhos[k] = Math.max(rMax, 0.5);
    }
    const ring: PatchVertex[] = [];
    for (let k = 0; k < K; k++) {
      const phi = (k / K) * Math.PI * 2;
      const x = p.x + Math.cos(phi) * rhos[k];
      const z = p.z + Math.sin(phi) * rhos[k];
      ring.push({ x, z, h: drape(x, z) });
    }
    patchCache.push({
      nodeId: id, ring,
      tris: tessellatePatch(p.x, p.z, rhos, drape),
    });
  }
  return patchCache;
}

// Tessellate the star-shaped patch interior as a polar grid from the node
// (the star center), so the draped surface tracks deck bulges between the
// center and the rim. rhos[k] is the boundary radius at angle 2πk/K.
function tessellatePatch(cx: number, cz: number, rhos: Float64Array,
    drape: (x: number, z: number) => number)
    : [PatchVertex, PatchVertex, PatchVertex][] {
  const K = rhos.length;
  const FRACS = [0.25, 0.5, 0.75, 1];
  const at = (k: number, f: number): PatchVertex => {
    const phi = (k / K) * Math.PI * 2;
    const x = cx + Math.cos(phi) * rhos[k] * f;
    const z = cz + Math.sin(phi) * rhos[k] * f;
    return { x, z, h: drape(x, z) };
  };
  const tris: [PatchVertex, PatchVertex, PatchVertex][] = [];
  const center: PatchVertex = { x: cx, z: cz, h: drape(cx, cz) };
  const grid: PatchVertex[][] = [];
  for (let k = 0; k < K; k++) grid.push(FRACS.map(f => at(k, f)));
  const kk = (k: number) => (k + 1) % K;
  for (let k = 0; k < K; k++) {
    tris.push([center, grid[k][0], grid[kk(k)][0]]);
    for (let i = 0; i < FRACS.length - 1; i++) {
      const a = grid[k][i], b = grid[k][i + 1], c = grid[kk(k)][i + 1], d = grid[kk(k)][i];
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

// Point-in-polygon (even-odd): rings are star-shaped but not convex, so the
// convex half-plane test no longer applies.
export function patchContains(patch: JunctionPatch, x: number, z: number): boolean {
  const r = patch.ring;
  let inside = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const xi = r[i].x, zi = r[i].z, xj = r[j].x, zj = r[j].z;
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi)
      inside = !inside;
  }
  return inside;
}
