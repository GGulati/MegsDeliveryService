// src/bridge.ts — Golden Gate-style suspension bridge for the `bridge` road edge.
// Static geometry only (built once in makeWorld); international orange throughout.
import * as THREE from 'three';
import { ROAD_EDGES, nodeById, nodePos } from './roads';

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
  const deckY = edge.deckY ?? 6;

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

  // Deck: box from landing to landing, top at deckY.
  const deck = new THREE.Mesh(new THREE.BoxGeometry(span, DECK_THICK, DECK_WIDTH), orange);
  deck.position.set((a.x + b.x) / 2, deckY - DECK_THICK / 2, (a.z + b.z) / 2);
  deck.rotation.y = yawFor('x');
  g.add(deck);

  // Two towers at 1/3 and 2/3 along the span.
  for (const t of [1 / 3, 2 / 3]) {
    for (const side of [-CABLE_OFFSET, CABLE_OFFSET]) {
      // Column: 1.5m × 14m × 1.5m, rising 12m above the deck (2m embedded below).
      const col = new THREE.Mesh(new THREE.BoxGeometry(1.5, 14, 1.5), orange);
      const p = at(t, side, deckY + 5);
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
  for (const curve of cableCurves) {
    const samples = curve.getPoints(400);
    for (let s = 6; s < span - 3; s += 6) {
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
  let lampSide = 1;
  for (let s = 6; s < span - 3; s += 12) {
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
