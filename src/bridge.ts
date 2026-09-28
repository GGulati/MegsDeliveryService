// src/bridge.ts — Golden Gate-style suspension bridge for the `bridge` road edge.
// Static geometry only (built once in makeWorld); international orange throughout.
import * as THREE from 'three';
import { ROAD_EDGES, nodeById, nodePos } from './roads';
import { edgeClips, deckHeightAt } from './road-deck';

const ORANGE = 0xc0362c; // international orange
const DECK_WIDTH = 7;
const DECK_THICK = 1;
const CABLE_OFFSET = 3.2; // lateral offset of main cables / tower columns
const TOWER_ABOVE_DECK = 12;

function orangeMat(): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({ color: ORANGE });
}

/** Build the suspension bridge for the single `bridge`-kind road edge. */
export function buildBridge(g: THREE.Group): void {
  const edge = ROAD_EDGES.find(e => e.kind === 'bridge');
  if (!edge) return;
  const a = nodePos(nodeById(edge.a));
  const b = nodePos(nodeById(edge.b));
  // Vertical datum: the riding surface is deckHeightAt (6.33), not edge.deckY
  // (6.0). deckY is the TOP of the orange deck box; the 0.1m asphalt sits on
  // it with its top at the riding height, meeting the landing zones (6.35
  // with 2cm crown) with no step. (Fixed 2026-09-28 per reviewer: the 0.30m
  // mismatch floated cars 0.28m above the bridge.)
  const deckY = deckHeightAt(edge, 0.5) - 0.1;

  const dir = new THREE.Vector3(b.x - a.x, 0, b.z - a.z);
  const span = dir.length();
  if (span < 1) return;
  dir.normalize();
  const lat = new THREE.Vector3(-dir.z, 0, dir.x); // lateral unit vector

  // Point at fraction t along the span, `lateral` meters to the side, at height y.
  const at = (t: number, lateral: number, y: number): THREE.Vector3 =>
    new THREE.Vector3(
      a.x + (b.x - a.x) * t + lat.x * lateral, y,
      a.z + (b.z - a.z) * t + lat.z * lateral,
    );
  // Yaw aligning a box's long axis: 'x' for deck-length boxes, 'z' for lateral boxes.
  const yawFor = (axis: 'x' | 'z'): number =>
    axis === 'x' ? Math.atan2(-dir.z, dir.x) : Math.atan2(lat.x, lat.z);

  const orange = orangeMat();
  const lampMat = new THREE.MeshToonMaterial({ color: 0xffd98a });

  // Deck: box between the landing intersection zones, top at deckY. The
  // landing zones own the ramp/bridge junction surface (sloped intersection
  // zones, 2026-09-28); the deck starts where the zone ends so the two
  // meet at a shared boundary with zero overlap.
  const clips = edgeClips(edge);
  const clipA = clips.a?.dist ?? 0;
  const clipB = clips.b?.dist ?? 0;
  const deckSpan = Math.max(span - clipA - clipB, 1);
  const dcx = a.x + dir.x * (clipA + deckSpan / 2);
  const dcz = a.z + dir.z * (clipA + deckSpan / 2);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(deckSpan, DECK_THICK, DECK_WIDTH), orange);
  deck.position.set(dcx, deckY - DECK_THICK / 2, dcz);
  deck.rotation.y = yawFor('x');
  g.add(deck);

  // Asphalt road surface on top of the deck (the road goes OVER the bridge).
  const roadMat = new THREE.MeshToonMaterial({ color: 0x3a3a3a });
  const road = new THREE.Mesh(new THREE.BoxGeometry(deckSpan, 0.1, DECK_WIDTH - 1), roadMat);
  road.position.set(dcx, deckY + 0.05, dcz);
  road.rotation.y = yawFor('x');
  g.add(road);

  // Two towers at 1/3 and 2/3 along the span.
  for (const t of [1 / 3, 2 / 3]) {
    for (const side of [-CABLE_OFFSET, CABLE_OFFSET]) {
      // Column: 1.5m × 20m × 1.5m, rising 12m above the deck and reaching the
      // waterline below (both towers stand in the bay).
      const col = new THREE.Mesh(new THREE.BoxGeometry(1.5, 20, 1.5), orange);
      const p = at(t, side, deckY + 2);
      col.position.copy(p);
      col.rotation.y = yawFor('x');
      g.add(col);
    }
    // Two horizontal cross-beams tying the columns together.
    for (const beamY of [deckY + 4, deckY + 10]) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(1, 1, CABLE_OFFSET * 2 + 1.5), orange);
      beam.position.copy(at(t, 0, beamY));
      beam.rotation.y = yawFor('z');
      g.add(beam);
    }
  }

  // Main cables: deck level at one landing, over both tower tops, down to deck
  // level at the other landing — one per side.
  const cableCurves: THREE.CatmullRomCurve3[] = [];
  for (const side of [-CABLE_OFFSET, CABLE_OFFSET]) {
    const curve = new THREE.CatmullRomCurve3([
      at(0, side, deckY + 0.2),
      at(0.15, side, deckY + 5),
      at(1 / 3, side, deckY + TOWER_ABOVE_DECK),
      at(0.5, side, deckY + 2.5),
      at(2 / 3, side, deckY + TOWER_ABOVE_DECK),
      at(0.85, side, deckY + 5),
      at(1, side, deckY + 0.2),
    ]);
    cableCurves.push(curve);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, 0.25, 8, false), orange));
  }

  // Suspenders: vertical thin cylinders every 6m from cable down to the deck.
  // Start after clipA: the deck begins where the landing zone ends.
  for (const curve of cableCurves) {
    const samples = curve.getPoints(400);
    for (let s = clipA + 3; s < span - clipB - 3; s += 6) {
      const t = s / span;
      const px = a.x + (b.x - a.x) * t;
      // Nearest cable sample by x (cable x is monotonic along the span).
      let best = samples[0], bestD = Infinity;
      for (const p of samples) {
        const d = Math.abs(p.x - px);
        if (d < bestD) { bestD = d; best = p; }
      }
      const h = best.y - deckY;
      if (h < 0.5) continue;
      const suspender = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, h, 6), orange);
      suspender.position.set(px, deckY + h / 2, best.z);
      g.add(suspender);
    }
  }

  // Lamp posts on the deck every 12m, alternating sides: simple pole + head.
  // Start after clipA: the deck begins where the landing zone ends.
  let lampSide = 1;
  for (let s = clipA + 6; s < span - clipB - 3; s += 12) {
    const t = s / span;
    const p = at(t, lampSide * (DECK_WIDTH / 2 - 0.7), deckY);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 4.2, 8), orange);
    pole.position.set(p.x, deckY + 2.1, p.z);
    g.add(pole);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), lampMat);
    head.position.set(p.x, deckY + 4.2, p.z);
    g.add(head);
    lampSide *= -1;
  }

}
