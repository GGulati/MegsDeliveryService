import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ROAD_EDGES, nodeById, nodePos, roadGraph, type RoadEdge } from './roads';
import { roadCurve, roadGroundHeight } from './road-deck';
import { destinations, shortestPath } from './trips';
import { heightAt } from './terrain';
import { PARK_RECT, SOLIDS, MANSION_GROUNDS, isInBay } from './world';
import { mulberry32 } from './grain';
import { toon } from './materials';

// Phase 2: Ambient Life — cars driving the road graph and pedestrians on
// sidewalks/park. Purely ambient + reactive (speech bubbles); no gameplay
// interaction. See phase2-ambient-life-design.md.

export const CAR_COUNT = 16;
export const PED_COUNT = 44;

// Shared geometries (one per part type, reused by all entities).
let sharedGeos: {
  carBody: THREE.BoxGeometry; carCabin: THREE.BoxGeometry; wheel: THREE.CylinderGeometry;
  pedBody: THREE.CapsuleGeometry; pedHead: THREE.SphereGeometry; pedArm: THREE.CapsuleGeometry;
} | null = null;
function getSharedGeos() {
  if (sharedGeos) return sharedGeos;
  // Ped arm pivot at shoulder: translate once, share.
  const armGeo = new THREE.CapsuleGeometry(0.07, 0.4, 4, 8);
  armGeo.translate(0, -0.25, 0);
  sharedGeos = {
    carBody: new THREE.BoxGeometry(1.9, 0.9, 4.2),
    carCabin: new THREE.BoxGeometry(1.7, 0.65, 2.0),
    wheel: new THREE.CylinderGeometry(0.35, 0.35, 0.3, 10),
    pedBody: new THREE.CapsuleGeometry(0.22, 0.9, 4, 10), // torso + legs merged
    pedHead: new THREE.SphereGeometry(0.2, 12, 10),
    pedArm: armGeo,
  };
  return sharedGeos;
}

// Shared material palette (limited colors, reused).
let sharedMats: Record<string, THREE.MeshToonMaterial> | null = null;
function getSharedMats() {
  if (sharedMats) return sharedMats;
  const m = (c: number) => toon(c);
  sharedMats = {
    glass: m(0x1a2a3a), tire: m(0x222222),
    carRed: m(0xd42a2a), carBlue: m(0x3a6ea5), carGray: m(0x8b8b8b),
    carBlack: m(0x2a2a2a), carGreen: m(0x4a7c59), carBrown: m(0x8b5a2b),
    carCream: m(0xe8e0d0), carPink: m(0xff4da6), carYellow: m(0xffd94a),
    carPurple: m(0x9d4dff), carTeal: m(0x4dff88),
    skin1: m(0xffc6a3), skin2: m(0xe8a06a), skin3: m(0xc67a4a), skin4: m(0x8a5a3a),
    cloth1: m(0x3a6ea5), cloth2: m(0xd42a2a), cloth3: m(0x4a8b6b),
    cloth4: m(0x8b5a2b), cloth5: m(0x7a3a7a), cloth6: m(0xe8e0d0),
    pants: m(0x2a3a4a),
  };
  return sharedMats;
}

type CarVariant = 'sedan' | 'truck' | 'van' | 'beetle' | 'sports';

interface Car {
  edge: RoadEdge;
  t: number;
  dir: 1 | -1;
  speed: number;
  baseSpeed: number; // cruising speed (collision avoidance modulates `speed`)
  variant: CarVariant;
  group: THREE.Group;
  curve: THREE.CatmullRomCurve3;
  edgeLen: number;
  offX: number; // smoothed lateral offset (right-hand lane, no snap on turns)
  offZ: number;
  // Trip state: destination building's road node, remaining route edges, and
  // park-at-destination timer. destNode null = wandering (no route found yet).
  destNode: string | null;
  route: RoadEdge[];
  dwellT: number;
  dwellNode: string | null;
}

interface Ped {
  // Peds walk the road graph like cars, at a 4m sidewalk offset (I1 fix).
  edge: RoadEdge;
  t: number;
  dir: 1 | -1;
  side: 1 | -1; // which side of the road
  sideOff: number; // smoothed lateral offset (glides across at intersections)
  offX: number; // smoothed 2D offset vector (no snap when the tangent turns)
  offZ: number;
  speed: number;
  baseSpeed: number; // cruising speed (collision avoidance modulates `speed`)
  inPark: boolean;
  parkTarget: THREE.Vector3; // for park wanderers
  pos: THREE.Vector3;
  group: THREE.Group;
  armR: THREE.Mesh;
  bubble: THREE.Sprite;
  greetCd: number;
  startleCd: number;
  bubbleT: number;
  hopT: number;
  waveT: number;
  stuckT: number; // time without progress (I5)
  lastPos: THREE.Vector3;
  curve: THREE.CatmullRomCurve3;
  edgeLen: number;
  // Trip state for sidewalk peds (park peds wander instead).
  destNode: string | null;
  route: RoadEdge[];
  dwellT: number;
  dwellNode: string | null;
}

// Bubble textures (pre-rendered once, shared singleton — never disposed).
let bubbleTexes: Record<string, THREE.Texture> | null = null;
function getBubbleTexes(): Record<string, THREE.Texture> {
  if (bubbleTexes) return bubbleTexes;
  const make = (text: string): THREE.Texture => {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 6;
    // Rounded bubble (with fallback for older browsers).
    const r = 24, x0 = 10, y0 = 10, w = 236, h = 80;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x0, y0, w, h, r);
    } else {
      ctx.moveTo(x0 + r, y0);
      ctx.arcTo(x0 + w, y0, x0 + w, y0 + h, r);
      ctx.arcTo(x0 + w, y0 + h, x0, y0 + h, r);
      ctx.arcTo(x0, y0 + h, x0, y0, r);
      ctx.arcTo(x0, y0, x0 + w, y0, r);
      ctx.closePath();
    }
    ctx.fill(); ctx.stroke();
    // Tail
    ctx.beginPath();
    ctx.moveTo(110, 88); ctx.lineTo(128, 118); ctx.lineTo(146, 88);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Text
    ctx.fillStyle = '#222';
    ctx.font = 'bold 44px sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 52);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  };
  bubbleTexes = { 'Hello!': make('Hello!'), 'Hi!': make('Hi!'), 'Ahhh!': make('Ahhh!') };
  return bubbleTexes;
}

// Build a car mesh (1960s style). 2 meshes: body (wheels merged in) + cabin.
// Wheels are merged into the body geometry since they don't spin (I2).
function buildCar(variant: CarVariant, seed: number): THREE.Group {
  const g = new THREE.Group();
  const rnd = mulberry32(seed);
  const geos = getSharedGeos();
  const mats = getSharedMats();

  let bodyMat: THREE.MeshToonMaterial;
  let bodyLen = 4.2, bodyH = 0.9;
  switch (variant) {
    case 'beetle':
      bodyMat = [mats.carPink, mats.carYellow, mats.carPurple, mats.carTeal][Math.floor(rnd() * 4)];
      bodyLen = 3.6; bodyH = 1.0;
      break;
    case 'sports':
      bodyMat = mats.carRed;
      bodyLen = 4.0; bodyH = 0.65;
      break;
    case 'truck':
      bodyMat = [mats.carGreen, mats.carBrown, mats.carBlue][Math.floor(rnd() * 3)];
      bodyLen = 4.8; bodyH = 1.1;
      break;
    case 'van':
      bodyMat = [mats.carCream, mats.carBlue, mats.carYellow][Math.floor(rnd() * 3)];
      bodyLen = 4.6; bodyH = 1.4;
      break;
    default:
      bodyMat = [mats.carBlue, mats.carGray, mats.carBlack, mats.carRed, mats.carGreen][Math.floor(rnd() * 5)];
  }

  // Body: box + 4 wheels merged into one geometry.
  const parts: THREE.BufferGeometry[] = [];
  const bodyGeo = new THREE.BoxGeometry(1.9, bodyH, bodyLen);
  bodyGeo.translate(0, 0.55 + bodyH / 2, 0);
  parts.push(bodyGeo);
  const wheelPositions: [number, number][] = [
    [-0.85, bodyLen * 0.32], [0.85, bodyLen * 0.32],
    [-0.85, -bodyLen * 0.32], [0.85, -bodyLen * 0.32],
  ];
  for (const [wx, wz] of wheelPositions) {
    const w = geos.wheel.clone();
    w.rotateZ(Math.PI / 2);
    w.translate(wx, 0.35, wz);
    parts.push(w);
  }
  const mergedBody = mergeGeometries(parts);
  parts.forEach(p => p.dispose());
  const body = new THREE.Mesh(mergedBody, bodyMat);
  body.castShadow = true;
  g.add(body);

  // Cabin.
  const cabin = new THREE.Mesh(geos.carCabin, mats.glass);
  cabin.position.set(0, 0.55 + bodyH + 0.3, variant === 'truck' ? bodyLen * 0.25 : 0);
  cabin.scale.z = bodyLen / 4.2; // match body length
  cabin.castShadow = true;
  g.add(cabin);

  // Beetle flower decals (both sides).
  if (variant === 'beetle') {
    const flowerGeo = new THREE.CircleGeometry(0.3, 12);
    const flowerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (const sx of [1, -1]) {
      const flower = new THREE.Mesh(flowerGeo, flowerMat);
      flower.position.set(sx * 0.97, 1.1, 0);
      flower.rotation.y = sx * Math.PI / 2;
      g.add(flower);
    }
  }

  return g;
}

// Build a pedestrian: merged body (torso+legs+head+left arm) + right arm for waving.
function buildPed(seed: number): { group: THREE.Group; armR: THREE.Mesh } {
  const g = new THREE.Group();
  const rnd = mulberry32(seed);
  const geos = getSharedGeos();
  const mats = getSharedMats();
  const skin = [mats.skin1, mats.skin2, mats.skin3, mats.skin4][Math.floor(rnd() * 4)];
  const cloth = [mats.cloth1, mats.cloth2, mats.cloth3, mats.cloth4, mats.cloth5, mats.cloth6][Math.floor(rnd() * 6)];

  // For simplicity with shared geos: body capsule (cloth), head sphere (skin), right arm (cloth).
  // We use 3 meshes with shared geometries — colors via shared palette.
  const body = new THREE.Mesh(geos.pedBody, cloth);
  body.position.y = 0.85;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Mesh(geos.pedHead, skin);
  head.position.y = 1.55;
  head.castShadow = true;
  g.add(head);
  const armR = new THREE.Mesh(geos.pedArm, cloth);
  armR.position.set(0.32, 1.25, 0);
  armR.rotation.z = -0.15;
  g.add(armR);
  // Left arm (static, part of visual — use same shared geo, no wave).
  const armL = new THREE.Mesh(geos.pedArm, cloth);
  armL.position.set(-0.32, 1.25, 0);
  armL.rotation.z = 0.15;
  armL.scale.y = -1; // mirror (arm geo is translated for right side)
  g.add(armL);

  return { group: g, armR };
}

// Check if a point is clear for peds (not in building, mansion, water).
function pedClear(x: number, z: number): boolean {
  for (const s of SOLIDS) {
    if (x > s.min.x - 1 && x < s.max.x + 1 && z > s.min.z - 1 && z < s.max.z + 1) return false;
  }
  if (MANSION_GROUNDS.some(gr => x > gr[0] && x < gr[2] && z > gr[1] && z < gr[3])) return false;
  if (isInBay(x, z)) return false;
  return true;
}

export class Life {
  private cars: Car[] = [];
  private peds: Ped[] = [];
  private graph = roadGraph();
  private group = new THREE.Group();
  // Reused temps (no per-frame allocation).
  private tmpP = new THREE.Vector3();
  private tmpT = new THREE.Vector3();
  private tmpV = new THREE.Vector3();

  constructor(private scene: THREE.Group) {
    scene.add(this.group);
    this.spawnCars();
    this.spawnPeds();
  }

  private makeCurve(e: RoadEdge): THREE.CatmullRomCurve3 {
    return roadCurve(e);
  }

  private spawnCars(): void {
    const rnd = mulberry32(20260927);
    const coreEdges = ROAD_EDGES.filter(e => {
      if (e.kind === 'bridge' || e.kind === 'switchback') return false;
      const a = nodeById(e.a), b = nodeById(e.b);
      return Math.abs(a.x) < 120 && Math.abs(b.x) < 120 && Math.abs(a.z) < 120 && Math.abs(b.z) < 120;
    });
    const pool = coreEdges.length > 0 ? coreEdges : ROAD_EDGES.filter(e => e.kind !== 'bridge');

    const variants: CarVariant[] = ['beetle', 'sports'];
    const rest: CarVariant[] = ['sedan', 'sedan', 'sedan', 'sedan', 'sedan', 'sedan', 'truck', 'truck', 'truck', 'van', 'van', 'van', 'sedan', 'sedan'];
    for (let i = variants.length; i < CAR_COUNT; i++) {
      variants.push(rest[(i - variants.length) % rest.length]);
    }
    for (let i = variants.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [variants[i], variants[j]] = [variants[j], variants[i]];
    }

    for (let i = 0; i < CAR_COUNT; i++) {
      const edge = pool[Math.floor(rnd() * pool.length)];
      const curve = this.makeCurve(edge);
      const variant = variants[i];
      const group = buildCar(variant, 1000 + i);
      this.group.add(group);
      const speed = variant === 'sports' ? 12 : 8 + rnd() * 4;
      this.cars.push({
        edge, t: rnd(), dir: rnd() < 0.5 ? 1 : -1,
        speed, baseSpeed: speed, variant, group, curve, edgeLen: curve.getLength(),
        offX: 0, offZ: 0,
        destNode: null, route: [], dwellT: 0, dwellNode: null,
      });
    }
  }

  private spawnPeds(): void {
    const rnd = mulberry32(20260928);
    const texes = getBubbleTexes();
    const pedEdges = ROAD_EDGES.filter(e => {
      if (e.kind === 'bridge' || e.kind === 'switchback') return false;
      const a = nodeById(e.a), b = nodeById(e.b);
      return Math.abs(a.x) < 130 && Math.abs(b.x) < 130 && Math.abs(a.z) < 130 && Math.abs(b.z) < 130;
    });
    for (let i = 0; i < PED_COUNT; i++) {
      const inPark = i >= 30;
      let edge: RoadEdge | null = null;
      let x = 0, z = 0;
      if (inPark) {
        let tries = 0;
        while (tries++ < 50) {
          x = PARK_RECT[0] + rnd() * (PARK_RECT[2] - PARK_RECT[0]);
          z = PARK_RECT[1] + rnd() * (PARK_RECT[3] - PARK_RECT[1]);
          if (pedClear(x, z)) break;
        }
        if (tries >= 50) { // fallback to park center (M8)
          x = (PARK_RECT[0] + PARK_RECT[2]) / 2;
          z = (PARK_RECT[1] + PARK_RECT[3]) / 2;
        }
      } else {
        edge = pedEdges[Math.floor(rnd() * pedEdges.length)];
      }
      const { group, armR } = buildPed(2000 + i);
      const curve = edge ? this.makeCurve(edge) : new THREE.CatmullRomCurve3([
        new THREE.Vector3(x, 0, z), new THREE.Vector3(x + 1, 0, z),
      ]);
      let spawnT = 0;
      let spawnSide: 1 | -1 = 1;
      let spawnOffX = 0, spawnOffZ = 0;
      if (!inPark && edge) {
        spawnT = rnd();
        curve.getPointAt(spawnT, this.tmpP);
        curve.getTangentAt(spawnT, this.tmpT);
        spawnSide = rnd() < 0.5 ? 1 : -1;
        spawnOffX = (-this.tmpT.z) * 4 * spawnSide;
        spawnOffZ = (this.tmpT.x) * 4 * spawnSide;
        x = this.tmpP.x + spawnOffX;
        z = this.tmpP.z + spawnOffZ;
      }
      const y = heightAt(x, z);
      group.position.set(x, y, z);
      this.group.add(group);
      const bubble = new THREE.Sprite(new THREE.SpriteMaterial({
        map: texes['Hello!'], transparent: true, opacity: 0, depthTest: false,
      }));
      bubble.scale.set(1.5, 0.75, 1); // ~1.5m per design (M9)
      bubble.position.set(x, y + 2.2, z); // 2.2m above head per design (M9)
      bubble.visible = false; // I3: hidden, not just transparent
      this.group.add(bubble);
      const pedSpeed = 1.2 + rnd() * 0.6;
      this.peds.push({
        edge: edge!, t: spawnT, dir: rnd() < 0.5 ? 1 : -1,
        side: spawnSide,
        sideOff: spawnSide * 4,
        offX: spawnOffX, offZ: spawnOffZ,
        speed: pedSpeed, baseSpeed: pedSpeed, inPark,
        parkTarget: new THREE.Vector3(x, 0, z),
        pos: new THREE.Vector3(x, y, z),
        group, armR, bubble,
        greetCd: 0, startleCd: 0, bubbleT: 0, hopT: 0, waveT: 0,
        stuckT: 0, lastPos: new THREE.Vector3(x, y, z),
        curve, edgeLen: curve.getLength(),
        destNode: null, route: [], dwellT: 0, dwellNode: null,
      });
      if (inPark) this.pickParkTarget(this.peds[this.peds.length - 1], rnd);
    }
  }

  private pickParkTarget(ped: Ped, rnd: () => number): void {
    let tries = 0;
    while (tries++ < 30) {
      const tx = PARK_RECT[0] + rnd() * (PARK_RECT[2] - PARK_RECT[0]);
      const tz = PARK_RECT[1] + rnd() * (PARK_RECT[3] - PARK_RECT[1]);
      if (pedClear(tx, tz)) {
        ped.parkTarget.set(tx, 0, tz);
        return;
      }
    }
    ped.parkTarget.copy(ped.pos);
  }

  update(dt: number, playerPos: THREE.Vector3, playerSpeed: number, playerVelY: number, time: number): void {
    for (const car of this.cars) this.updateCar(car, dt);
    for (const ped of this.peds) this.updatePed(ped, dt, playerPos, playerSpeed, playerVelY, time);
  }

  private nextEdge(current: RoadEdge, nodeId: string): { edge: RoadEdge; dir: 1 | -1; t: number } {
    const options = ROAD_EDGES.filter(e =>
      e.kind !== 'bridge' && (e.a === nodeId || e.b === nodeId) &&
      !(e.a === current.a && e.b === current.b)
    );
    const next = options.length > 0
      ? options[Math.floor(Math.random() * options.length)]
      : current; // dead-end: U-turn
    if (next.a === nodeId) return { edge: next, dir: 1, t: 0 };
    return { edge: next, dir: -1, t: 1 }; // next is always incident to nodeId
  }

  /** Assign a trip: a destination building (not the current node) plus the
   * shortest-path route of road edges to it. Falls back to wandering when no
   * destination is reachable (e.g. bridge-isolated components). */
  private assignTrip(e: Car | Ped, fromNode: string): void {
    const dests = destinations();
    for (let tries = 0; tries < 8; tries++) {
      const d = dests[(Math.random() * dests.length) | 0];
      if (d.nodeId === fromNode) continue;
      const route = shortestPath(fromNode, d.nodeId);
      if (route && route.length > 0) {
        e.destNode = d.nodeId;
        e.route = route;
        return;
      }
    }
    e.destNode = null;
    e.route = [];
  }

  /** Put the entity onto `edge` at `nodeId`, heading away from the node. */
  private mountEdge(e: Car | Ped, edge: RoadEdge, nodeId: string, dir?: 1 | -1, t?: number): void {
    e.edge = edge;
    if (dir !== undefined) { e.dir = dir; e.t = t!; }
    else if (edge.a === nodeId) { e.dir = 1; e.t = 0; }
    else { e.dir = -1; e.t = 1; }
    e.curve = this.makeCurve(edge);
    e.edgeLen = e.curve.getLength();
  }

  /**
   * Node arrival for trip-based entities. Follows the route edge-by-edge
   * (never a random turn mid-trip); on reaching the destination, parks there
   * briefly — the destination becomes the new start when the next trip is
   * chained. Returns 'route' | 'dwell' | 'wander'.
   */
  private arriveNode(e: Car | Ped, nodeId: string): 'route' | 'dwell' | 'wander' {
    if (e.route.length > 0) {
      const re = e.route[0];
      if (re.a === nodeId || re.b === nodeId) {
        e.route.shift();
        this.mountEdge(e, re, nodeId);
        return 'route';
      }
      e.route = []; e.destNode = null; // stale route — drop it, don't teleport
    }
    if (e.destNode !== null && nodeId === e.destNode) {
      e.dwellT = 2 + Math.random() * 3; // pause at the destination building
      e.dwellNode = nodeId;
      // Clamp t to the node exactly — the car may have overshot slightly
      // (t=-0.003) before arriveNode was called. Without this, the dwell
      // position and the next edge's start can differ, causing a teleport.
      e.t = THREE.MathUtils.clamp(e.t, 0, 1);
      return 'dwell';
    }
    const n = this.nextEdge(e.edge, nodeId);
    this.mountEdge(e, n.edge, nodeId, n.dir, n.t);
    if (e.destNode === null) this.assignTrip(e, nodeId);
    return 'wander';
  }

  /** Dwell finished: chain the next trip starting from the arrival node. */
  private beginNextLeg(e: Car | Ped): void {
    const nodeId = e.dwellNode ?? (e.dir === 1 ? e.edge.b : e.edge.a);
    e.dwellNode = null;
    this.assignTrip(e, nodeId);
    if (e.route.length > 0) {
      const re = e.route.shift()!;
      this.mountEdge(e, re, nodeId);
    } else {
      const n = this.nextEdge(e.edge, nodeId);
      this.mountEdge(e, n.edge, nodeId, n.dir, n.t);
    }
  }

  /** Speed for a car considering the car ahead on the same edge/direction.
   * Maintains a safe following gap; stops if too close. (User feedback
   * 2026-09-27: traffic should not collide.) */
  private carFollowSpeed(car: Car): number {
    const SAFE_GAP = 7; // meters: desired following distance
    const MIN_GAP = 3.5; // meters: hard stop below this
    let speed = car.baseSpeed;
    for (const other of this.cars) {
      if (other === car || other.dwellT > 0) continue;
      if (other.edge !== car.edge || other.dir !== car.dir) continue;
      // Distance ahead along the direction of travel.
      const dist = (other.t - car.t) * car.dir * car.edgeLen;
      if (dist <= 0 || dist > SAFE_GAP) continue;
      if (dist < MIN_GAP) return 0; // too close: stop
      // Slow proportionally as the gap closes.
      speed = Math.min(speed, other.speed * (dist / SAFE_GAP));
    }
    return speed;
  }

  /** Speed for a sidewalk ped considering the ped ahead on the same edge,
   * direction, and side. Smaller gaps than cars. */
  private pedFollowSpeed(ped: Ped): number {
    const SAFE_GAP = 2.5; // meters
    const MIN_GAP = 1.2; // meters
    let speed = ped.baseSpeed;
    for (const other of this.peds) {
      if (other === ped || other.inPark || other.dwellT > 0) continue;
      if (other.edge !== ped.edge || other.dir !== ped.dir || other.side !== ped.side) continue;
      const dist = (other.t - ped.t) * ped.dir * ped.edgeLen;
      if (dist <= 0 || dist > SAFE_GAP) continue;
      if (dist < MIN_GAP) return 0;
      speed = Math.min(speed, other.speed * (dist / SAFE_GAP));
    }
    return speed;
  }

  private updateCar(car: Car, dt: number): void {
    // Parked at a destination: count down, then chain the next trip from here.
    if (car.dwellT > 0) {
      car.dwellT -= dt;
      if (car.dwellT <= 0) {
        this.beginNextLeg(car);
        car.baseSpeed = (car.variant === 'sports' ? 12 : 10) * (car.edge.kind === 'switchback' ? 0.6 : 1);
        car.speed = car.baseSpeed;
      }
      return;
    }
    // Collision avoidance: don't tailgate the car ahead on the same edge.
    // (User feedback 2026-09-27: traffic should not collide.)
    car.speed = this.carFollowSpeed(car);
    car.t += (car.dir * car.speed * dt) / car.edgeLen;
    if (car.t >= 1 || car.t <= 0) {
      // The node reached is determined by travel direction alone: dir=1 runs
      // t up to edge.b, dir=-1 runs t down to edge.a. (The old code keyed off
      // t>=1 vs t<=0 and sent dir=-1 arrivals to the wrong end — teleporting
      // cars to the opposite node. User feedback 2026-09-27.)
      const nodeId = car.dir === 1 ? car.edge.b : car.edge.a;
      this.arriveNode(car, nodeId);
      // Switchbacks are slower (M5 fix: apply on transition, not just spawn).
      car.baseSpeed = (car.variant === 'sports' ? 12 : 10) * (car.edge.kind === 'switchback' ? 0.6 : 1);
      car.speed = car.baseSpeed;
    }
    const t = THREE.MathUtils.clamp(car.t, 0, 1);
    // Node-pinned deck height — continuous across edge transitions, so cars
    // never "skip" vertically at nodes (user feedback 2026-09-27).
    car.curve.getPointAt(t, this.tmpP);
    car.curve.getTangentAt(t, this.tmpT);
    if (car.dir === -1) this.tmpT.negate();
    // Right-hand lane offset: when the road turns at a node the tangent normal
    // snaps, so glide the offset vector at a bounded rate instead of popping
    // laterally (user feedback 2026-09-27).
    const wantX = (-this.tmpT.z) * 1.4;
    const wantZ = (this.tmpT.x) * 1.4;
    car.offX += THREE.MathUtils.clamp(wantX - car.offX, -4 * dt, 4 * dt);
    car.offZ += THREE.MathUtils.clamp(wantZ - car.offZ, -4 * dt, 4 * dt);
    const px = this.tmpP.x + car.offX;
    const pz = this.tmpP.z + car.offZ;
    // Ride the junction patch surface inside intersections so wheels stay on
    // the rendered asphalt (the patch sits ~8cm above the deck).
    const deckY = roadGroundHeight(car.edge, t, px, pz);
    car.group.position.set(px, deckY, pz);
    car.group.rotation.y = Math.atan2(this.tmpT.x, this.tmpT.z);
  }

  private updatePed(ped: Ped, dt: number, playerPos: THREE.Vector3, playerSpeed: number, playerVelY: number, time: number): void {
    if (ped.inPark) {
      this.updateParkPed(ped, dt);
    } else {
      this.updateSidewalkPed(ped, dt);
    }

    // Player awareness.
    const dx = playerPos.x - ped.pos.x, dz = playerPos.z - ped.pos.z;
    const hDist = Math.hypot(dx, dz);
    const vDist = playerPos.y - ped.pos.y;
    const texes = getBubbleTexes();

    if (hDist < 6 && vDist < 10 && vDist > -2 && (playerSpeed > 15 || playerVelY < -8)) {
      if (time > ped.startleCd) {
        ped.startleCd = time + 12;
        (ped.bubble.material as THREE.SpriteMaterial).map = texes['Ahhh!'];
        ped.bubble.material.needsUpdate = true;
        ped.bubbleT = 2.0;
        ped.bubble.visible = true;
        ped.hopT = 0.4;
        ped.waveT = 0;
      }
    } else if (hDist < 12 && vDist > 0 && vDist < 8 && playerSpeed < 10) {
      if (time > ped.greetCd) {
        ped.greetCd = time + 8;
        (ped.bubble.material as THREE.SpriteMaterial).map = texes['Hello!'];
        ped.bubble.material.needsUpdate = true;
        ped.bubbleT = 2.0;
        ped.bubble.visible = true;
        ped.waveT = 2.0;
      }
    }

    // Bubble fade.
    if (ped.bubbleT > 0) {
      ped.bubbleT -= dt;
      const mat = ped.bubble.material as THREE.SpriteMaterial;
      mat.opacity = Math.min(1, ped.bubbleT / 0.3, (2.0 - ped.bubbleT) / 0.3);
      ped.bubble.position.set(ped.pos.x, ped.pos.y + 2.2, ped.pos.z);
      if (ped.bubbleT <= 0) ped.bubble.visible = false; // I3
    }

    // Hop (startle): 0.3m per design (M9).
    if (ped.hopT > 0) {
      ped.hopT -= dt;
      const k = 1 - ped.hopT / 0.4;
      ped.group.position.y = ped.pos.y + Math.sin(k * Math.PI) * 0.3;
    }

    // Wave (greeting).
    if (ped.waveT > 0) {
      ped.waveT -= dt;
      ped.armR.rotation.z = -2.2 + Math.sin(time * 12) * 0.3;
    } else {
      ped.armR.rotation.z = -0.15;
    }
  }

  private updateSidewalkPed(ped: Ped, dt: number): void {
    // Paused at a destination: count down, then chain the next trip from here.
    if (ped.dwellT > 0) {
      ped.dwellT -= dt;
      if (ped.dwellT <= 0) this.beginNextLeg(ped);
      return;
    }
    // Collision avoidance: don't walk through the ped ahead on the same
    // sidewalk. (User feedback 2026-09-27: traffic should not collide.)
    ped.speed = this.pedFollowSpeed(ped);
    ped.t += (ped.dir * ped.speed * dt) / ped.edgeLen;
    if (ped.t >= 1 || ped.t <= 0) {
      // Same fix as cars: the node reached is determined by travel direction
      // alone (dir=1 → edge.b, dir=-1 → edge.a).
      const nodeId = ped.dir === 1 ? ped.edge.b : ped.edge.a;
      this.arriveNode(ped, nodeId);
      // Occasionally switch sides at intersections (reads as using a crosswalk).
      if (Math.random() < 0.15) ped.side *= -1;
    }
    const t = THREE.MathUtils.clamp(ped.t, 0, 1);
    ped.curve.getPointAt(t, this.tmpP);
    ped.curve.getTangentAt(t, this.tmpT);
    if (ped.dir === -1) this.tmpT.negate();
    // Sidewalk offset glides smoothly when the side flips at intersections —
    // no teleporting across the road (user feedback 2026-09-27).
    const targetOff = ped.side * 4;
    const dOff = targetOff - ped.sideOff;
    ped.sideOff += THREE.MathUtils.clamp(dOff, -3 * dt, 3 * dt);
    // Ease the 2D offset vector too: when the road turns at a node, the
    // tangent normal snaps, so glide the vector at a bounded rate instead of
    // popping laterally (user feedback 2026-09-27).
    const wantX = (-this.tmpT.z) * ped.sideOff;
    const wantZ = (this.tmpT.x) * ped.sideOff;
    ped.offX += THREE.MathUtils.clamp(wantX - ped.offX, -4 * dt, 4 * dt);
    ped.offZ += THREE.MathUtils.clamp(wantZ - ped.offZ, -4 * dt, 4 * dt);
    const px = this.tmpP.x + ped.offX;
    const pz = this.tmpP.z + ped.offZ;
    // Peds stand ON the widened deck (sidewalk band), not on the terrain
    // under it — the deck can ride meters above the terrain on fills.
    // Inside intersections they stand on the junction patch surface.
    ped.pos.set(px, roadGroundHeight(ped.edge, t, px, pz), pz);
    ped.group.position.copy(ped.pos);
    ped.group.rotation.y = Math.atan2(this.tmpT.x, this.tmpT.z);
    // Bob.
    ped.group.position.y += Math.abs(Math.sin(performance.now() * 0.008 + px)) * 0.05;

    // Stuck detection (I5): if no progress in 5s, resume from the nearest node.
    // Route-aware: a stuck ped rejoins its trip instead of jumping to a
    // random edge (no teleporting out of a trip). A ped stuck mid-edge with a
    // valid t stays put — its motion is deterministic along the curve, so it
    // will reach the node and follow the route; only a degenerate (NaN or
    // out-of-range) t is forced to the arrival node.
    if (ped.pos.distanceToSquared(ped.lastPos) < 0.01) {
      ped.stuckT += dt;
      if (ped.stuckT > 5) {
        const nodeId = ped.dir === 1 ? ped.edge.b : ped.edge.a;
        if (!Number.isFinite(ped.t) || ped.t <= 0 || ped.t >= 1) {
          this.arriveNode(ped, nodeId);
        }
        ped.stuckT = 0;
      }
    } else {
      ped.stuckT = 0;
    }
    ped.lastPos.copy(ped.pos);
  }

  private updateParkPed(ped: Ped, dt: number): void {
    this.tmpV.subVectors(ped.parkTarget, ped.pos);
    this.tmpV.y = 0;
    const dist = this.tmpV.length();
    if (dist < 1.0) {
      this.pickParkTarget(ped, Math.random);
    } else {
      this.tmpV.normalize();
      const nx = ped.pos.x + this.tmpV.x * ped.speed * dt;
      const nz = ped.pos.z + this.tmpV.z * ped.speed * dt;
      if (!pedClear(nx, nz)) {
        this.pickParkTarget(ped, Math.random);
      } else {
        ped.pos.set(nx, heightAt(nx, nz), nz);
      }
      ped.group.position.copy(ped.pos);
      ped.group.rotation.y = Math.atan2(this.tmpV.x, this.tmpV.z);
      ped.group.position.y += Math.abs(Math.sin(performance.now() * 0.008 + nx)) * 0.05;
    }
  }

  dispose(): void {
    // Dispose per-entity geometries/materials, but NOT shared singletons.
    this.group.traverse(obj => {
      if (obj instanceof THREE.Mesh) {
        const geo = obj.geometry;
        // Don't dispose shared geometries.
        if (sharedGeos && !Object.values(sharedGeos).includes(geo as never)) {
          geo.dispose();
        }
        const mat = obj.material as THREE.Material;
        // Don't dispose shared materials.
        if (sharedMats && !Object.values(sharedMats).includes(mat as never)) {
          mat.dispose();
        }
      } else if (obj instanceof THREE.Sprite) {
        const mat = obj.material as THREE.SpriteMaterial;
        mat.dispose(); // sprite materials are per-ped (map is shared, not disposed)
      }
    });
    this.scene.remove(this.group);
    this.cars = [];
    this.peds = [];
  }
}
