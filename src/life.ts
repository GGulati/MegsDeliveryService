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
  cruiseSpeed: number; // spawn cruising speed; baseSpeed = cruiseSpeed × switchback factor
  variant: CarVariant;
  group: THREE.Group;
  curve: THREE.CatmullRomCurve3;
  edgeLen: number;
  offX: number; // smoothed lateral offset (right-hand lane, no snap on turns)
  offZ: number;
  turnSlowT: number; // seconds remaining of turn slowdown (0 = full speed)
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
  // Left arm (static — same shared geo, hangs down like the right arm).
  const armL = new THREE.Mesh(geos.pedArm, cloth);
  armL.position.set(-0.32, 1.25, 0);
  armL.rotation.z = 0.15;
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
  // Intersection yield geometry, shared by car/car and car/ped yielding.
  private static readonly YIELD_ZONE = 9; // meters: intersection zone radius
  private static readonly YIELD_STOP = 2.5; // meters: stop line distance from node center
  private cars: Car[] = [];
  private peds: Ped[] = [];
  private graph = roadGraph();
  private group = new THREE.Group();
  // Seeded RNG (2026-09-30): deterministic ambient life tied to the save
  // game's general-purpose seed. Replaces Math.random() for all runtime
  // decisions so tests are reproducible and each save has stable traffic.
  private rng: () => number;
  private seed: number;
  // Reused temps (no per-frame allocation).
  private tmpP = new THREE.Vector3();
  private tmpT = new THREE.Vector3();
  private tmpV = new THREE.Vector3();

  // Orient a group to the 3D road tangent: yaw from the horizontal projection,
  // pitch from the vertical component. Cars/peds tilt on slopes instead of
  // staying parallel to the XZ plane (2026-09-27). The tangent from
  // getTangentAt is normalized, so t.y = sin(pitch); forward is +Z, and a
  // negative X-rotation tilts +Z upward.
  private orientToTangent(group: THREE.Group, t: THREE.Vector3): void {
    group.rotation.order = 'YXZ';
    group.rotation.y = Math.atan2(t.x, t.z);
    group.rotation.x = -Math.asin(THREE.MathUtils.clamp(t.y, -1, 1));
  }

  constructor(private scene: THREE.Group, seed = Math.floor(Math.random() * 0x7fffffff)) {
    this.seed = seed;
    this.rng = mulberry32(seed);
    scene.add(this.group);
    this.spawnCars();
    this.spawnPeds();
  }

  private makeCurve(e: RoadEdge): THREE.CatmullRomCurve3 {
    return roadCurve(e);
  }

  private spawnCars(): void {
    // Spawn stream derives from the save seed: deterministic per save file,
    // independent of the runtime RNG stream (2026-09-30).
    const rnd = mulberry32((this.seed ^ 0x9e3779b9) >>> 0);
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
        speed, baseSpeed: speed, cruiseSpeed: speed, variant, group, curve, edgeLen: curve.getLength(),
        offX: 0, offZ: 0, turnSlowT: 0,
        destNode: null, route: [], dwellT: 0, dwellNode: null,
      });
    }
  }

  private spawnPeds(): void {
    // Spawn stream derives from the save seed: deterministic per save file,
    // independent of the runtime RNG stream (2026-09-30).
    const rnd = mulberry32((this.seed ^ 0x85ebca6b) >>> 0);
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
        // Choose a sidewalk side that isn't in water or inside a solid.
        // (Some roads run close to the bay; the 4m offset can land in water.)
        spawnSide = rnd() < 0.5 ? 1 : -1;
        const trySide = (s: 1 | -1): boolean => {
          const ox = (-this.tmpT.z) * 4 * s;
          const oz = (this.tmpT.x) * 4 * s;
          const px = this.tmpP.x + ox, pz = this.tmpP.z + oz;
          return !isInBay(px, pz) && pedClear(px, pz);
        };
        if (!trySide(spawnSide)) {
          const other: 1 | -1 = spawnSide === 1 ? -1 : 1;
          if (trySide(other)) spawnSide = other;
          // If both sides are bad, keep the original (test will catch it).
        }
        spawnOffX = (-this.tmpT.z) * 4 * spawnSide;
        spawnOffZ = (this.tmpT.x) * 4 * spawnSide;
        x = this.tmpP.x + spawnOffX;
        z = this.tmpP.z + spawnOffZ;
      }
      // Sidewalk peds stand on the deck (roadGroundHeight), not the terrain —
      // the deck can ride meters above the terrain on fills. Park peds use
      // terrain height. (2026-09-30: matches the Y-glide target in update.)
      const y = (!inPark && edge) ? roadGroundHeight(edge, spawnT, x, z) : heightAt(x, z);
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

  private nextEdge(current: RoadEdge, nodeId: string, allowBridge: boolean = false): { edge: RoadEdge; dir: 1 | -1; t: number } {
    const options = ROAD_EDGES.filter(e =>
      (allowBridge || e.kind !== 'bridge') && (e.a === nodeId || e.b === nodeId) &&
      !(e.a === current.a && e.b === current.b)
    );
    const next = options.length > 0
      ? options[Math.floor(this.rng() * options.length)]
      : current; // dead-end: U-turn
    if (next.a === nodeId) return { edge: next, dir: 1, t: 0 };
    return { edge: next, dir: -1, t: 1 }; // next is always incident to nodeId
  }

  /** Assign a trip: a destination building (not the current node) plus the
   * shortest-path route of road edges to it. Falls back to wandering when no
   * destination is reachable (e.g. bridge-isolated components). */
  private assignTrip(e: Car | Ped, fromNode: string): void {
    const dests = destinations();
    const allowBridge = 'variant' in e; // cars can use the bridge, peds cannot
    for (let tries = 0; tries < 8; tries++) {
      const d = dests[(this.rng() * dests.length) | 0];
      if (d.nodeId === fromNode) continue;
      const route = shortestPath(fromNode, d.nodeId, allowBridge);
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
    // Reset turn slowdown when the edge changes (cars).
    if ((e as Car).turnSlowT !== undefined) (e as Car).turnSlowT = 0;
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
      e.dwellT = 2 + this.rng() * 3; // pause at the destination building
      e.dwellNode = nodeId;
      // Clamp t to the node exactly — the car may have overshot slightly
      // (t=-0.003) before arriveNode was called. Without this, the dwell
      // position and the next edge's start can differ, causing a teleport.
      e.t = THREE.MathUtils.clamp(e.t, 0, 1);
      return 'dwell';
    }
    const isCar = 'variant' in e;
    // Assign a trip first, then mount the route's first edge — mounting a
    // random edge before assigning (the old order) desyncs the route from the
    // car's actual position, leaving a stale route that is dropped as stale
    // at the next arrival and the car never actually follows trips (2026-09-30).
    if (e.destNode === null) this.assignTrip(e, nodeId);
    if (e.route.length > 0) {
      const re = e.route.shift()!;
      this.mountEdge(e, re, nodeId);
      return 'route';
    }
    // No reachable destination: wander a random incident edge.
    const n = this.nextEdge(e.edge, nodeId, isCar);
    this.mountEdge(e, n.edge, nodeId, n.dir, n.t);
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
      const isCar = 'variant' in e;
      const n = this.nextEdge(e.edge, nodeId, isCar);
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

  /** Distance from a car to a node, whether approaching it or just departed.
   * Returns Infinity if the car is not on an edge touching the node. */
  private carDistToNode(car: Car, nodeId: string): number {
    if (car.dir === 1) {
      if (car.edge.b === nodeId) return (1 - car.t) * car.edgeLen; // approaching
      if (car.edge.a === nodeId) return car.t * car.edgeLen; // just departed
    } else {
      if (car.edge.a === nodeId) return car.t * car.edgeLen; // approaching
      if (car.edge.b === nodeId) return (1 - car.t) * car.edgeLen; // just departed
    }
    return Infinity;
  }

  /** Intersection yielding: only one car in an intersection zone at a time.
   * A car approaching a node yields (slows to a stop at the stop line) if
   * another car is already in the zone. Priority goes to the car already
   * in the intersection, then to the closer car, with a deterministic
   * tiebreaker to avoid deadlock. (User feedback 2026-09-27.) */
  private carIntersectionSpeed(car: Car): number {
    const ZONE = Life.YIELD_ZONE; // meters: intersection zone radius
    const STOP = Life.YIELD_STOP; // meters: stop line distance from node center
    const targetNode = car.dir === 1 ? car.edge.b : car.edge.a;
    const myDist = (car.dir === 1 ? 1 - car.t : car.t) * car.edgeLen;
    if (myDist > ZONE) return car.baseSpeed;

    const myIdx = this.cars.indexOf(car);
    for (const other of this.cars) {
      if (other === car || other.dwellT > 0) continue;
      const otherDist = this.carDistToNode(other, targetNode);
      if (otherDist > ZONE) continue;
      // Other car is in the intersection zone. Check priority.
      const otherDeparting =
        (other.dir === 1 && other.edge.a === targetNode) ||
        (other.dir === -1 && other.edge.b === targetNode);
      let yieldToOther = false;
      if (otherDeparting) {
        yieldToOther = true; // already in the intersection, let it clear
      } else if (otherDist < myDist - 0.5) {
        yieldToOther = true; // other is closer to the node
      } else if (Math.abs(otherDist - myDist) <= 0.5) {
        // Tie: deterministic priority by car index (avoids deadlock).
        yieldToOther = this.cars.indexOf(other) < myIdx;
      }
      if (yieldToOther) {
        if (myDist <= STOP) return 0; // hold at the stop line
        // Slow down on approach to the stop line.
        return car.baseSpeed * Math.max(0, (myDist - STOP) / (ZONE - STOP));
      }
    }
    return car.baseSpeed;
  }

  /** Pedestrian right-of-way: a car approaching a node yields (slows to a
   * stop at the stop line) if any pedestrian is inside the intersection
   * zone, and a car still inside its origin node's zone waits for the
   * crossing to clear before departing. Peds have right of way in
   * intersections — cars wait for crossing peds rather than driving through
   * them. (User feedback 2026-09-30.) Dwelling peds (paused at a
   * destination building) don't hold traffic. */
  private carPedYieldSpeed(car: Car): number {
    const ZONE = Life.YIELD_ZONE, STOP = Life.YIELD_STOP;
    const targetNode = car.dir === 1 ? car.edge.b : car.edge.a;
    const originNode = car.dir === 1 ? car.edge.a : car.edge.b;
    const myDist = (car.dir === 1 ? 1 - car.t : car.t) * car.edgeLen;
    // Departing: still inside the origin intersection zone — wait for any
    // crossing ped to clear instead of pulling away through them
    // (2026-10-01: review found departing cars ignored the origin node).
    const originDist = (car.dir === 1 ? car.t : 1 - car.t) * car.edgeLen;
    if (originDist <= ZONE && this.pedInNodeZone(originNode, ZONE)) return 0;
    if (myDist > ZONE) return car.baseSpeed;
    if (!this.pedInNodeZone(targetNode, ZONE)) return car.baseSpeed;
    if (myDist <= STOP) return 0; // hold at the stop line
    // Slow down on approach to the stop line.
    return car.baseSpeed * Math.max(0, (myDist - STOP) / (ZONE - STOP));
  }

  /** True when a non-park, non-dwelling ped is inside the node's zone. */
  private pedInNodeZone(nodeId: string, zone: number): boolean {
    const n = nodeById(nodeId);
    const r2 = zone * zone;
    for (const ped of this.peds) {
      if (ped.inPark || ped.dwellT > 0) continue;
      const dx = ped.pos.x - n.x, dz = ped.pos.z - n.z;
      if (dx * dx + dz * dz <= r2) return true;
    }
    return false;
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
        car.baseSpeed = car.cruiseSpeed * (car.edge.kind === 'switchback' ? 0.6 : 1);
        car.speed = car.baseSpeed;
      }
      return;
    }
    // Collision avoidance: don't tailgate the car ahead on the same edge.
    // (User feedback 2026-09-27: traffic should not collide.)
    car.speed = this.carFollowSpeed(car);
    // Intersection yielding: don't enter an intersection occupied by another car.
    // (User feedback 2026-09-27: cars passing through each other at intersections.)
    car.speed = Math.min(car.speed, this.carIntersectionSpeed(car));
    // Pedestrian right-of-way: wait if any ped is inside the intersection.
    // (User feedback 2026-09-30: peds have right of way in intersections.)
    car.speed = Math.min(car.speed, this.carPedYieldSpeed(car));
    // Turn slowdown: reduce speed for 1.5s after a sharp turn (user feedback
    // 2026-09-30: cars should slow down for turns, not maintain full speed).
    if (car.turnSlowT > 0) {
      car.turnSlowT -= dt;
      car.speed = Math.min(car.speed, car.baseSpeed * 0.5);
    }
    // Direction-vector movement (user feedback 2026-09-30): the car moves as
    // a single world-space vector (forward + lane-offset glide), total
    // magnitude <= car.speed. The old per-component 4 m/s clamp let the
    // offset glide diagonally at 5.66 m/s on top of forward speed after turns
    // (up to 1.9x measured) — the same acceleration bug peds had. The glide
    // direction is not always perpendicular to travel (the lane frame rotates
    // at nodes and curve endpoints), so the budget split is solved exactly
    // for |a*T + b*ehat| = speed*dt (2026-09-30).
    const tC = THREE.MathUtils.clamp(car.t, 0, 1);
    car.curve.getTangentAt(tC, this.tmpT);
    if (car.dir === -1) this.tmpT.negate();
    const wantX = (-this.tmpT.z) * 1.4, wantZ = (this.tmpT.x) * 1.4;
    const dX = wantX - car.offX, dZ = wantZ - car.offZ;
    const dist = Math.hypot(dX, dZ);
    const S = car.speed * dt;
    const bDes = Math.min(dist, S);
    let arcStep: number, latStep: number;
    // Pre-advance unit chase direction: the lateral step is applied along
    // this exact vector, so the applied displacement is the budgeted one
    // (2026-10-01: review noted the old post-advance recompute was only an
    // approximation of the solved budget).
    let eUX = 0, eUZ = 0;
    if (bDes > 1e-9) {
      eUX = dX / dist; eUZ = dZ / dist;
      const cosT = (dX * this.tmpT.x + dZ * this.tmpT.z) / dist;
      const sin2 = Math.max(0, 1 - cosT * cosT);
      latStep = bDes;
      arcStep = -latStep * cosT + Math.sqrt(Math.max(0, S * S - latStep * latStep * sin2));
      arcStep = Math.min(Math.max(0, arcStep), S);
    } else {
      latStep = 0;
      arcStep = S;
    }
    const prevT = car.t;
    car.t += (car.dir * arcStep) / car.edgeLen;
    // Arrival fires only when t CROSSES the node boundary this frame — not
    // when sitting exactly at 0/1. Collision avoidance can hold speed at 0
    // right after mounting (t=0/1), and the old >=/<= check then re-fired
    // arriveNode every frame at the WRONG node (dir=1, t=0 → edge.b),
    // teleporting cars across the edge (2026-09-27: 19m/35m jumps).
    let arrived = false;
    if ((car.dir === 1 && prevT < 1 && car.t >= 1) || (car.dir === -1 && prevT > 0 && car.t <= 0)) {
      // The node reached is determined by travel direction alone: dir=1 runs
      // t up to edge.b, dir=-1 runs t down to edge.a. (The old code keyed off
      // t>=1 vs t<=0 and sent dir=-1 arrivals to the wrong end — teleporting
      // cars to the opposite node. User feedback 2026-09-27.)
      const nodeId = car.dir === 1 ? car.edge.b : car.edge.a;
      // Capture travel direction for turn slowdown (user feedback 2026-09-30:
      // cars should slow down for turns, not maintain full speed).
      const tB = THREE.MathUtils.clamp(car.t, 0, 1);
      car.curve.getTangentAt(tB, this.tmpT);
      if (car.dir === -1) this.tmpT.negate();
      const beforeX = this.tmpT.x, beforeZ = this.tmpT.z;
      this.arriveNode(car, nodeId);
      const tA = THREE.MathUtils.clamp(car.t, 0, 1);
      car.curve.getTangentAt(tA, this.tmpT);
      if (car.dir === -1) this.tmpT.negate();
      const dot = beforeX * this.tmpT.x + beforeZ * this.tmpT.z;
      // Sharp turn (>35°): slow down for 1.5 seconds.
      if (dot < 0.819) car.turnSlowT = 1.5;
      // Switchbacks are slower (M5 fix: apply on transition, not just spawn).
      // Preserve the car's individual cruise speed — the old reset to a flat
      // 10/12 sped cars up at their first node (user feedback 2026-09-30).
      car.baseSpeed = car.cruiseSpeed * (car.edge.kind === 'switchback' ? 0.6 : 1);
      car.speed = car.baseSpeed;
      arrived = true;
    }
    const t = THREE.MathUtils.clamp(car.t, 0, 1);
    // Node-pinned deck height — continuous across edge transitions, so cars
    // never "skip" vertically at nodes (user feedback 2026-09-27).
    car.curve.getPointAt(t, this.tmpP);
    car.curve.getTangentAt(t, this.tmpT);
    if (car.dir === -1) this.tmpT.negate();
    // Apply the lateral component along the pre-advance chase direction as
    // a true vector step (magnitude = latStep <= dist, so the sidewalk
    // target can't overshoot). Skipped on the arrival frame: the car already
    // spent its budget reaching the node, and forward + lateral would sum
    // past car.speed.
    if (!arrived && latStep > 0) {
      car.offX += eUX * latStep;
      car.offZ += eUZ * latStep;
    }
    const px = this.tmpP.x + car.offX;
    const pz = this.tmpP.z + car.offZ;
    // Ride the intersection mesh surface inside intersections so wheels stay
    // on the rendered asphalt (roadGroundHeight returns the mesh top).
    const deckY = roadGroundHeight(car.edge, t, px, pz);
    car.group.position.set(px, deckY, pz);
    this.orientToTangent(car.group, this.tmpT);
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
    // Direction-vector movement (user feedback 2026-09-30): the ped moves
    // as a single world-space vector (forward + lateral) with total magnitude
    // <= ped.speed. The lateral chase direction is NOT always perpendicular
    // to travel — the sidewalk frame rotates at nodes and curve endpoints,
    // swinging the offset target along the tangent — so the budget split is
    // solved exactly for |a*T + b*ehat| = speed*dt (2026-09-30).
    const tC = THREE.MathUtils.clamp(ped.t, 0, 1);
    ped.curve.getTangentAt(tC, this.tmpT);
    if (ped.dir === -1) this.tmpT.negate();
    const nX = -this.tmpT.z, nZ = this.tmpT.x;
    const tgtX = nX * ped.side * 4, tgtZ = nZ * ped.side * 4;
    const dX = tgtX - ped.offX, dZ = tgtZ - ped.offZ;
    const dist = Math.hypot(dX, dZ);
    const S = ped.speed * dt;
    // Lateral desire: close the offset gap, up to the whole frame budget.
    let bDes = Math.min(dist, S);
    // Pre-advance unit chase direction and curve point: the lateral step is
    // applied along this exact vector, so the applied displacement is the
    // budgeted one (2026-10-01).
    let eUX = 0, eUZ = 0, prePX = 0, prePZ = 0;
    // Blocked-lateral probe: if the lateral step would land in water/solids,
    // walk forward instead of freezing mid-edge (2026-09-30).
    if (bDes > 1e-9) {
      ped.curve.getPointAt(tC, this.tmpP);
      const ux = dX / dist, uz = dZ / dist;
      const probeX = this.tmpP.x + ped.offX + ux * bDes;
      const probeZ = this.tmpP.z + ped.offZ + uz * bDes;
      if (pedClear(probeX, probeZ)) {
        eUX = ux; eUZ = uz; prePX = this.tmpP.x; prePZ = this.tmpP.z;
      } else {
        bDes = 0;
      }
    }
    // Exact budget split: given lateral spend b along ehat, the arc step a
    // solves |a*T + b*ehat| = S → a = -b*cosT + sqrt(S² - b²·sin²T).
    let arcStep: number, latStep: number;
    if (bDes > 1e-9) {
      const cosT = (dX * this.tmpT.x + dZ * this.tmpT.z) / dist;
      const sin2 = Math.max(0, 1 - cosT * cosT);
      latStep = bDes;
      arcStep = -latStep * cosT + Math.sqrt(Math.max(0, S * S - latStep * latStep * sin2));
      arcStep = Math.min(Math.max(0, arcStep), S);
    } else {
      latStep = 0;
      arcStep = S;
    }
    // Advance along the edge.
    const pedPrevT = ped.t;
    ped.t += (ped.dir * arcStep) / ped.edgeLen;
    // Arrival: only when t ACTUALLY crosses the boundary (not "will cross").
    // The old willArrive check triggered mid-edge, teleporting to the node.
    let arrived = false;
    if ((ped.dir === 1 && pedPrevT < 1 && ped.t >= 1) || (ped.dir === -1 && pedPrevT > 0 && ped.t <= 0)) {
      const nodeId = ped.dir === 1 ? ped.edge.b : ped.edge.a;
      const tB = THREE.MathUtils.clamp(ped.t, 0, 1);
      ped.curve.getTangentAt(tB, this.tmpT);
      if (ped.dir === -1) this.tmpT.negate();
      const beforeX = this.tmpT.x, beforeZ = this.tmpT.z;
      this.arriveNode(ped, nodeId);
      const tA = THREE.MathUtils.clamp(ped.t, 0, 1);
      ped.curve.getTangentAt(tA, this.tmpT);
      if (ped.dir === -1) this.tmpT.negate();
      const straightEnough = (beforeX * this.tmpT.x + beforeZ * this.tmpT.z) > 0.819; // cos(35°)
      // Occasionally switch sides at intersections (reads as using a crosswalk).
      // Skipped on sharp turns: combining a corner turn with a side flip swung
      // the offset ~9m diagonally (user-reported "warp across crosswalks when
      // turning", 2026-09-30) — peds either turn the corner OR cross, not both.
      // Only flip if the new side's sidewalk position is clear (not in water
      // or a building) — 2026-09-30.
      if (straightEnough && this.rng() < 0.15) {
        ped.curve.getPointAt(tA, this.tmpP);
        const flipSide = (ped.side * -1) as 1 | -1;
        const fx = this.tmpP.x + (-this.tmpT.z) * flipSide * 4;
        const fz = this.tmpP.z + (this.tmpT.x) * flipSide * 4;
        if (pedClear(fx, fz)) ped.side = flipSide;
      }
      arrived = true;
    }
    // Apply the lateral component along the pre-advance chase direction —
    // exactly the vector the budget was solved for (latStep <= dist, so the
    // target can't overshoot). Guard: never step the offset into
    // water/solids — the 4m sidewalk target can sit over the bay on
    // waterfront edges (2026-09-30).
    // Skipped on the arrival frame: the ped already spent its budget reaching
    // the node, and forward + lateral would sum past ped.speed (2026-09-30).
    if (!arrived && latStep > 0) {
      const candX = prePX + ped.offX + eUX * latStep;
      const candZ = prePZ + ped.offZ + eUZ * latStep;
      if (pedClear(candX, candZ)) {
        ped.offX += eUX * latStep;
        ped.offZ += eUZ * latStep;
      }
    }
    const t = THREE.MathUtils.clamp(ped.t, 0, 1);
    ped.curve.getPointAt(t, this.tmpP);
    ped.curve.getTangentAt(t, this.tmpT);
    if (ped.dir === -1) this.tmpT.negate();
    // (Offset already applied via the budgeted direction vector above.)
    const px = this.tmpP.x + ped.offX;
    const pz = this.tmpP.z + ped.offZ;
    // Peds stand ON the widened deck (sidewalk band), not on the terrain
    // under it — the deck can ride meters above the terrain on fills.
    // Inside intersections they stand on the intersection mesh surface.
    // Glide Y: the 4m sidewalk offset can shift (x,z) across a sloped
    // intersection mesh when the tangent turns at a node, causing a vertical
    // pop. Glide at a bounded rate like offX/offZ (2026-09-30).
    const targetY = roadGroundHeight(ped.edge, t, px, pz);
    const dy = targetY - ped.pos.y;
    ped.pos.set(px, ped.pos.y + THREE.MathUtils.clamp(dy, -4 * dt, 4 * dt), pz);
    ped.group.position.copy(ped.pos);
    this.orientToTangent(ped.group, this.tmpT);
    // Bob.
    ped.group.position.y += Math.abs(Math.sin(performance.now() * 0.008 + px)) * 0.05;

    // Stuck detection (I5): if no progress in 5s, resume from the nearest node.
    // Route-aware: a stuck ped rejoins its trip instead of jumping to a
    // random edge (no teleporting out of a trip). A ped stuck mid-edge with a
    // valid t stays put — its motion is deterministic along the curve, so it
    // will reach the node and follow the route; only a degenerate (NaN or
    // strictly out-of-range) t is forced to the arrival node.
    // (2026-09-30: fixed root cause of 10m teleport — the old <=0/>=1 check
    // fired for peds validly waiting at t=0/1, and the nodeId used dir instead
    // of t, teleporting a ped at node b to node a's edge.)
    if (ped.pos.distanceToSquared(ped.lastPos) < 0.01) {
      ped.stuckT += dt;
      if (ped.stuckT > 5) {
        if (!Number.isFinite(ped.t) || ped.t < 0 || ped.t > 1) {
          // Nearest node by t, not by dir: t<0 → a, t>1 → b, NaN → use dir.
          const nodeId = !Number.isFinite(ped.t)
            ? (ped.dir === 1 ? ped.edge.b : ped.edge.a)
            : (ped.t < 0.5 ? ped.edge.a : ped.edge.b);
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
      this.pickParkTarget(ped, this.rng);
    } else {
      this.tmpV.normalize();
      const nx = ped.pos.x + this.tmpV.x * ped.speed * dt;
      const nz = ped.pos.z + this.tmpV.z * ped.speed * dt;
      if (!pedClear(nx, nz)) {
        this.pickParkTarget(ped, this.rng);
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
