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
