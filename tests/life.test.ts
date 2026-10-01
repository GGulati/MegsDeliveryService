// tests/life.test.ts
import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

// Minimal DOM shim for canvas textures (Life pre-renders bubble sprites).
before(() => {
  const mockCtx = {
    fillStyle: '', strokeStyle: '', lineWidth: 0,
    font: '', textAlign: '', textBaseline: '',
    beginPath() {}, roundRect() {}, fill() {}, stroke() {},
    moveTo() {}, lineTo() {}, closePath() {}, fillText() {},
    fillRect() {},
  };
  (globalThis as Record<string, unknown>).document = {
    createElement: () => ({
      width: 0, height: 0,
      getContext: () => mockCtx,
    }),
  };
});

import { Life, CAR_COUNT, PED_COUNT } from '../src/life.js';
import { SOLIDS, MANSION_GROUNDS, isInBay } from '../src/world.js';
import { ROAD_EDGES, nodeById, nodePos, type RoadEdge } from '../src/roads.js';
import { deckHeightAt, roadWidth, roadGroundHeight } from '../src/road-deck.js';

/** Deterministic snapshot of the initial traffic layout (spawn state only). */
function snapshotLife(life: Life): { cars: unknown[][]; peds: unknown[][] } {
  const cars = (life as unknown as { cars: { variant: string; edge: RoadEdge; t: number; dir: number; speed: number; group: THREE.Group }[] }).cars;
  const peds = (life as unknown as { peds: { edge: RoadEdge | null; t: number; dir: number; side: number; speed: number; inPark: boolean; pos: THREE.Vector3 }[] }).peds;
  const r = (n: number) => n.toFixed(4);
  return {
    cars: cars.map(c => [c.variant, c.edge.a, c.edge.b, r(c.t), c.dir, r(c.speed), r(c.group.position.x), r(c.group.position.z)]),
    peds: peds.map(p => [p.inPark, p.edge ? p.edge.a : '', p.edge ? p.edge.b : '', r(p.t), p.dir, p.side, r(p.speed), r(p.pos.x), r(p.pos.y), r(p.pos.z)]),
  };
}

describe('ambient life', () => {
  it('spawns exactly 16 cars and 44 pedestrians', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    // Access via scene children: each car is a Group, each ped is a Group + Sprite.
    // We verify counts through the Life instance's group children.
    const cars = (life as unknown as { cars: unknown[] }).cars;
    const peds = (life as unknown as { peds: unknown[] }).peds;
    assert.equal(cars.length, CAR_COUNT);
    assert.equal(peds.length, PED_COUNT);
    assert.equal(CAR_COUNT, 16);
    assert.equal(PED_COUNT, 44);
    life.dispose();
  });

  it('car lineup has exactly one beetle and one sportscar', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const cars = (life as unknown as { cars: { variant: string }[] }).cars;
    const beetles = cars.filter(c => c.variant === 'beetle');
    const sports = cars.filter(c => c.variant === 'sports');
    assert.equal(beetles.length, 1, 'exactly one VW Beetle');
    assert.equal(sports.length, 1, 'exactly one sportscar');
    life.dispose();
  });

  it('cars stay on the road graph after simulated driving', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const playerPos = new THREE.Vector3(0, 50, 0);
    // Simulate 10 seconds of driving (600 frames at 60fps).
    for (let i = 0; i < 600; i++) {
      life.update(1 / 60, playerPos, 0, 0, i / 60);
    }
    const cars = (life as unknown as { cars: { group: THREE.Group }[] }).cars;
    for (const car of cars) {
      const pos = car.group.position;
      // Car must still be within the world bounds and at a sane height.
      assert.ok(Math.abs(pos.x) < 500 && Math.abs(pos.z) < 500,
        `car escaped world bounds at (${pos.x}, ${pos.z})`);
      assert.ok(pos.y > -50 && pos.y < 200, `car at impossible height ${pos.y}`);
    }
    life.dispose();
  });

  it('pedestrians stay out of buildings and water after wandering', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const playerPos = new THREE.Vector3(0, 50, 0);
    // Simulate 10 seconds of wandering.
    for (let i = 0; i < 600; i++) {
      life.update(1 / 60, playerPos, 0, 0, i / 60);
    }
    const peds = (life as unknown as { peds: { pos: THREE.Vector3 }[] }).peds;
    for (const ped of peds) {
      const { x, z } = ped.pos;
      for (const s of SOLIDS) {
        assert.ok(!(x > s.min.x && x < s.max.x && z > s.min.z && z < s.max.z),
          `ped inside building at (${x}, ${z})`);
      }
      for (const gr of MANSION_GROUNDS) {
        assert.ok(!(x > gr[0] && x < gr[2] && z > gr[1] && z < gr[3]),
          `ped inside mansion grounds at (${x}, ${z})`);
      }
      assert.ok(!isInBay(x, z), `ped in water at (${x}, ${z})`);
    }
    life.dispose();
  });

  it('greeting triggers when player flies by slowly nearby', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const peds = (life as unknown as { peds: {
      pos: THREE.Vector3; bubbleT: number; greetCd: number;
    }[] }).peds;
    // Place player 8m away horizontally, 5m above, moving slowly.
    const ped = peds[0];
    const playerPos = new THREE.Vector3(ped.pos.x + 8, ped.pos.y + 5, ped.pos.z);
    life.update(1 / 60, playerPos, 5, 0, 100);
    assert.ok(ped.bubbleT > 0, 'greeting bubble should trigger');
    assert.ok(ped.greetCd > 100, 'greeting cooldown should be set');
    life.dispose();
  });

  it('greeting does not trigger when player is too fast', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const peds = (life as unknown as { peds: {
      pos: THREE.Vector3; bubbleT: number;
    }[] }).peds;
    const ped = peds[0];
    const playerPos = new THREE.Vector3(ped.pos.x + 8, ped.pos.y + 5, ped.pos.z);
    life.update(1 / 60, playerPos, 20, 0, 100);
    assert.equal(ped.bubbleT, 0, 'no greeting when fast');
    life.dispose();
  });

  it('startle triggers when player buzzes fast and close', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const peds = (life as unknown as { peds: {
      pos: THREE.Vector3; bubbleT: number; startleCd: number; hopT: number;
    }[] }).peds;
    const ped = peds[0];
    const playerPos = new THREE.Vector3(ped.pos.x + 4, ped.pos.y + 3, ped.pos.z);
    life.update(1 / 60, playerPos, 20, 0, 100);
    assert.ok(ped.bubbleT > 0, 'startle bubble should trigger');
    assert.ok(ped.startleCd > 100, 'startle cooldown should be set');
    assert.ok(ped.hopT > 0, 'ped should hop when startled');
    life.dispose();
  });

  it('cars ride at the road deck height (not buried, not floating)', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const playerPos = new THREE.Vector3(0, 50, 0);
    // Simulate 5 seconds.
    for (let i = 0; i < 300; i++) {
      life.update(1 / 60, playerPos, 0, 0, i / 60);
    }
    const cars = (life as unknown as { cars: {
      group: THREE.Group; t: number; edge: RoadEdge;
    }[] }).cars;
    for (const car of cars) {
      const pos = car.group.position;
      const t = THREE.MathUtils.clamp(car.t, 0, 1);
      // Ground truth is the blended heightfield (roadGroundHeight).
      const expectedY = roadGroundHeight(car.edge, t, pos.x, pos.z);
      assert.ok(Math.abs(pos.y - expectedY) < 0.05,
        `car y=${pos.y.toFixed(2)} vs deck ${expectedY.toFixed(2)}`);
    }
    life.dispose();
  });

  it('sidewalk peds stand on the deck, not under it', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const playerPos = new THREE.Vector3(0, 50, 0);
    for (let i = 0; i < 300; i++) {
      life.update(1 / 60, playerPos, 0, 0, i / 60);
    }
    const peds = (life as unknown as { peds: {
      pos: THREE.Vector3; t: number; edge: RoadEdge; inPark: boolean;
    }[] }).peds;
    for (const ped of peds) {
      if (ped.inPark) continue;
      const t = THREE.MathUtils.clamp(ped.t, 0, 1);
      // Peds stand on the blended heightfield (roadGroundHeight).
      const expectedY = roadGroundHeight(ped.edge, t, ped.pos.x, ped.pos.z);
      assert.ok(Math.abs(ped.pos.y - expectedY) < 0.1,
        `ped y=${ped.pos.y.toFixed(2)} vs deck ${expectedY.toFixed(2)}`);
    }
    life.dispose();
  });

  it('deck height is continuous where edges meet (no car skipping)', () => {
    // Every shared node: all incident edges must agree on the deck height.
    const byNode = new Map<string, typeof ROAD_EDGES>();
    for (const e of ROAD_EDGES) {
      if (e.kind === 'bridge') continue;
      for (const n of [e.a, e.b]) {
        if (!byNode.has(n)) byNode.set(n, []);
        byNode.get(n)!.push(e);
      }
    }
    for (const [nodeId, edges] of byNode) {
      if (edges.length < 2) continue;
      const hs = edges.map(e => deckHeightAt(e, e.a === nodeId ? 0 : 1));
      const spread = Math.max(...hs) - Math.min(...hs);
      assert.ok(spread < 0.01, `node ${nodeId}: deck spread ${spread.toFixed(3)}m`);
    }
    // Road widths: town streets carry bike lanes + sidewalks.
    for (const e of ROAD_EDGES) {
      if (e.kind === 'bridge') continue;
      const w = roadWidth(e);
      assert.equal(w, e.kind === 'switchback' ? 4.4 : 8.8, `width for ${e.kind}`);
    }
  });

  it('cooldowns prevent bubble spam', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const peds = (life as unknown as { peds: {
      pos: THREE.Vector3; bubbleT: number;
    }[] }).peds;
    const ped = peds[0];
    const playerPos = new THREE.Vector3(ped.pos.x + 8, ped.pos.y + 5, ped.pos.z);
    // First trigger.
    life.update(1 / 60, playerPos, 5, 0, 100);
    assert.ok(ped.bubbleT > 0, 'first greeting triggers');
    // Immediately try again (within 8s cooldown).
    ped.bubbleT = 0; // bubble expired
    life.update(1 / 60, playerPos, 5, 0, 101);
    assert.equal(ped.bubbleT, 0, 'second greeting suppressed by cooldown');
    life.dispose();
  });

  it('same save seed produces the same initial traffic layout', () => {
    const a = new Life(new THREE.Group(), 777);
    const b = new Life(new THREE.Group(), 777);
    assert.deepEqual(snapshotLife(a), snapshotLife(b));
    a.dispose(); b.dispose();
  });

  it('different save seeds produce different traffic layouts', () => {
    const a = new Life(new THREE.Group(), 777);
    const b = new Life(new THREE.Group(), 778);
    assert.notDeepEqual(snapshotLife(a), snapshotLife(b));
    a.dispose(); b.dispose();
  });

  it('dispose + reconstruct with a new seed matches a fresh build (boot retry path)', () => {
    // GameRenderer.setSeed() disposes and rebuilds Life when boot() re-runs
    // (banner Retry). The rebuilt traffic must equal a fresh Life with the
    // new seed, and the old meshes must leave the scene.
    const scene = new THREE.Group();
    const a = new Life(scene, 999);
    assert.equal(scene.children.length, 1, 'spawned traffic group is in the scene');
    a.dispose();
    assert.equal(scene.children.length, 0, 'disposed Life group removed from the scene');
    const rebuilt = new Life(scene, 777);
    const fresh = new Life(new THREE.Group(), 777);
    assert.deepEqual(snapshotLife(rebuilt), snapshotLife(fresh));
    rebuilt.dispose(); fresh.dispose();
  });
});

describe('trip-based traffic (user feedback 2026-09-27)', () => {
  it('cars follow their route edge-by-edge with no random turns', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const anyLife = life as unknown as {
      cars: { edge: RoadEdge; dir: 1 | -1; destNode: string | null; route: RoadEdge[]; dwellT: number }[];
      assignTrip(e: unknown, from: string): void;
      arriveNode(e: unknown, node: string): string;
      beginNextLeg(e: unknown): void;
    };
    const car = anyLife.cars[0];
    const upcoming = car.dir === 1 ? car.edge.b : car.edge.a;
    anyLife.assignTrip(car, upcoming);
    assert.ok(car.destNode && car.destNode !== upcoming, 'trip has a distinct destination');
    assert.ok(car.route.length > 0, 'trip has a route');
    const route = [...car.route];
    const dest = car.destNode;
    // Walk the route node by node: every arrival must take the route edge.
    let node = upcoming;
    for (const expected of route) {
      const res = anyLife.arriveNode(car, node);
      assert.equal(res, 'route');
      assert.equal(car.edge, expected, 'car must take the route edge, not a random turn');
      node = car.dir === 1 ? car.edge.b : car.edge.a;
    }
    assert.equal(node, dest, 'route ends at the destination node');
    // Arrival dwells, then chains a new trip starting from the destination.
    assert.equal(anyLife.arriveNode(car, node), 'dwell');
    assert.ok(car.dwellT > 0, 'car pauses at the destination building');
    car.dwellT = 0.0001;
    anyLife.beginNextLeg(car);
    assert.ok(car.destNode && car.destNode !== dest, 'destination becomes the new start');
    assert.ok(car.route.length > 0, 'chained trip has a route');
    life.dispose();
  });

  it('sidewalk peds follow trips and chain them like cars', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const anyLife = life as unknown as {
      peds: { edge: RoadEdge; dir: 1 | -1; inPark: boolean; destNode: string | null; route: RoadEdge[]; dwellT: number }[];
      assignTrip(e: unknown, from: string): void;
      arriveNode(e: unknown, node: string): string;
      beginNextLeg(e: unknown): void;
    };
    const ped = anyLife.peds.find(p => !p.inPark)!;
    const upcoming = ped.dir === 1 ? ped.edge.b : ped.edge.a;
    anyLife.assignTrip(ped, upcoming);
    assert.ok(ped.destNode && ped.destNode !== upcoming);
    assert.ok(ped.route.length > 0);
    const dest = ped.destNode;
    let node = upcoming;
    for (const expected of [...ped.route]) {
      assert.equal(anyLife.arriveNode(ped, node), 'route');
      assert.equal(ped.edge, expected, 'ped must take the route edge');
      node = ped.dir === 1 ? ped.edge.b : ped.edge.a;
    }
    assert.equal(anyLife.arriveNode(ped, node), 'dwell');
    ped.dwellT = 0.0001;
    anyLife.beginNextLeg(ped);
    assert.ok(ped.destNode && ped.destNode !== dest, 'ped chains a new trip from the destination');
    life.dispose();
  });

  it('cars and peds never teleport between frames', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const playerPos = new THREE.Vector3(0, 50, 0);
    const cars = (life as unknown as { cars: { group: THREE.Group; speed: number }[] }).cars;
    const peds = (life as unknown as { peds: { group: THREE.Group; speed: number }[] }).peds;
    const dt = 1 / 60;
    life.update(dt, playerPos, 0, 0, 0); // warm-up: place entities from the origin
    const prevC = cars.map(c => c.group.position.clone());
    const prevP = peds.map(p => p.group.position.clone());
    // 15 seconds: trips get assigned, followed, dwelled, and chained.
    for (let i = 1; i <= 900; i++) {
      life.update(dt, playerPos, 0, 0, i * dt);
      for (let ci = 0; ci < cars.length; ci++) {
        const d = cars[ci].group.position.distanceTo(prevC[ci]);
        assert.ok(d <= cars[ci].speed * dt + 0.6,
          `car ${ci} jumped ${d.toFixed(2)}m in one frame`);
        prevC[ci].copy(cars[ci].group.position);
      }
      for (let pi = 0; pi < peds.length; pi++) {
        const d = peds[pi].group.position.distanceTo(prevP[pi]);
        assert.ok(d <= peds[pi].speed * dt + 0.6,
          `ped ${pi} jumped ${d.toFixed(2)}m in one frame`);
        prevP[pi].copy(peds[pi].group.position);
      }
    }
    life.dispose();
  });

  it('cars and peds never exceed their speed budget between frames', () => {
    // User feedback 2026-09-30: consistent world-space speeds — the exact
    // |a*T + b*ehat| = speed*dt budget split must hold every frame, including
    // node arrivals, curve endpoints, and edge transitions.
    // Two seeds widen the geometry sample (the bug lived in rare waterfront
    // turns and curve endpoints — 2026-10-01 review).
    for (const seed of [12345, 67890]) {
    const scene = new THREE.Group();
    const life = new Life(scene, seed);
    const playerPos = new THREE.Vector3(0, 50, 0);
    const cars = (life as unknown as { cars: {
      group: THREE.Group; speed: number; baseSpeed: number;
    }[] }).cars;
    const peds = (life as unknown as { peds: {
      pos: THREE.Vector3; speed: number;
    }[] }).peds;
    const dt = 1 / 60;
    // The speed used for a car's motion never exceeds its pre-frame baseSpeed
    // (carFollowSpeed starts at baseSpeed; arrival only raises speed after
    // the frame's motion). A ped's post-frame speed IS its motion speed.
    // Ped logical pos (not the group) is measured: the group carries a
    // cosmetic walk-bob that is not travel. XZ only: the budget governs
    // ground-plane travel; Y follows the deck via a separate vertical glide.
    life.update(dt, playerPos, 0, 0, 0); // warm-up: place entities from the origin
    for (let i = 1; i <= 3600; i++) {
      const preBase = cars.map(c => c.baseSpeed);
      const prevC = cars.map(c => ({ x: c.group.position.x, z: c.group.position.z }));
      const prevP = peds.map(p => ({ x: p.pos.x, z: p.pos.z }));
      life.update(dt, playerPos, 0, 0, i * dt);
      for (let ci = 0; ci < cars.length; ci++) {
        const dx = cars[ci].group.position.x - prevC[ci].x;
        const dz = cars[ci].group.position.z - prevC[ci].z;
        const d = Math.hypot(dx, dz);
        assert.ok(d <= preBase[ci] * dt + 1e-6,
          `seed ${seed} car ${ci} frame ${i}: moved ${d.toFixed(4)}m, budget ${(preBase[ci] * dt).toFixed(4)}m`);
      }
      for (let pi = 0; pi < peds.length; pi++) {
        const dx = peds[pi].pos.x - prevP[pi].x;
        const dz = peds[pi].pos.z - prevP[pi].z;
        const d = Math.hypot(dx, dz);
        assert.ok(d <= peds[pi].speed * dt + 1e-6,
          `seed ${seed} ped ${pi} frame ${i}: moved ${d.toFixed(4)}m, budget ${(peds[pi].speed * dt).toFixed(4)}m`);
      }
    }
    life.dispose();
    }
  });

  it('cars yield to pedestrians crossing at intersections', () => {
    // User feedback 2026-09-30: peds have right of way — cars wait if any
    // ped is inside the intersection zone.
    const scene = new THREE.Group();
    const life = new Life(scene, 4242);
    const playerPos = new THREE.Vector3(0, 50, 0);
    const dt = 1 / 60;
    const exposed = (life as unknown as {
      cars: { edge: RoadEdge; t: number; dir: 1 | -1; edgeLen: number;
        speed: number; baseSpeed: number; turnSlowT: number; dwellT: number;
        curve: THREE.CatmullRomCurve3; offX: number; offZ: number }[];
      peds: { pos: THREE.Vector3; inPark: boolean; dwellT: number }[];
      carPedYieldSpeed(car: unknown): number;
      update(dt: number, playerPos: THREE.Vector3, playerSpeed: number, playerVelY: number, time: number): void;
    });
    exposed.update(dt, playerPos, 0, 0, 0);
    const car = exposed.cars[0];
    car.dir = 1; car.turnSlowT = 0; car.dwellT = 0;
    const node = nodeById(car.edge.b);
    // Clear the zone: other simulated peds may genuinely be inside it.
    for (const p of exposed.peds) p.pos.set(9999, 0, 9999);
    const ped = exposed.peds.find(p => !p.inPark)!;
    ped.dwellT = 0;

    // Unit: 10m out (inside the 16m slowdown, outside the 7m stop line)
    // with a ped at the node → slowed; ped far away → full speed.
    car.t = 1 - 10 / car.edgeLen;
    ped.pos.set(node.x, 0, node.z);
    const slowed = exposed.carPedYieldSpeed(car);
    assert.ok(slowed < car.baseSpeed,
      `expected yield slowdown, got ${slowed.toFixed(2)} vs base ${car.baseSpeed.toFixed(2)}`);
    ped.pos.set(node.x + 50, 0, node.z + 50);
    assert.equal(exposed.carPedYieldSpeed(car), car.baseSpeed);

    // Unit (2026-10-01): a ped on the sidewalk near the node — outside the
    // car's forward route corridor, e.g. heading away from a crosswalk —
    // does NOT affect traffic (user feedback: peds only affect traffic
    // when they're on the car's route).
    {
      const tC = THREE.MathUtils.clamp(car.t, 0, 1);
      const tan = car.curve.getTangentAt(tC, new THREE.Vector3());
      const pt = car.curve.getPointAt(tC, new THREE.Vector3());
      const bx = pt.x + car.offX + tan.x * 2.4; // front bumper
      const bz = pt.z + car.offZ + tan.z * 2.4;
      const nx = -tan.z, nz = tan.x;
      // 10m ahead of the bumper (at the node), 5m to the side: on the
      // sidewalk, outside the 2m route corridor.
      ped.pos.set(bx + tan.x * 10 + nx * 5, 0, bz + tan.z * 10 + nz * 5);
      assert.equal(exposed.carPedYieldSpeed(car), car.baseSpeed,
        'car must not yield for a ped on the sidewalk outside its route');
    }

    // Unit: at the stop line with a ped in the zone → full stop.
    // The stop line (7m) keeps the car BEFORE the intersection: town roads
    // are 8.8m wide and cars 4.8m long, so the front bumper (at 4.6m from
    // the node) stays outside the asphalt (user feedback 2026-10-01: cars
    // were waiting literally inside the intersection).
    car.t = 1 - 5 / car.edgeLen;
    ped.pos.set(node.x, 0, node.z);
    assert.equal(exposed.carPedYieldSpeed(car), 0);

    // Unit (2026-10-01): a departing car clears the intersection — it stops
    // only for a ped literally in its forward path, not merely near the
    // node (user feedback: cars must wait before the intersection in their
    // lane, not drive to its center and wait there).
    car.t = 0.02;
    {
      const tC = THREE.MathUtils.clamp(car.t, 0, 1);
      const tan = car.curve.getTangentAt(tC, new THREE.Vector3());
      if ((car.dir as 1 | -1) === -1) tan.negate();
      const pt = car.curve.getPointAt(tC, new THREE.Vector3());
      const bx = pt.x + car.offX + tan.x * 2.4; // front bumper
      const bz = pt.z + car.offZ + tan.z * 2.4;
      // Ped 4m ahead of the bumper, centered in the lane → in the path.
      ped.pos.set(bx + tan.x * 4, 0, bz + tan.z * 4);
      assert.equal(exposed.carPedYieldSpeed(car), 0,
        'departing car must stop for a ped in its forward path');
      // Ped 4m ahead but 5m to the side (on the sidewalk) → not in the path:
      // the car clears the intersection instead of waiting at its center.
      const nx = -tan.z, nz = tan.x;
      ped.pos.set(bx + tan.x * 4 + nx * 5, 0, bz + tan.z * 4 + nz * 5);
      assert.equal(exposed.carPedYieldSpeed(car), car.baseSpeed,
        'departing car must clear the intersection for a ped not in its path');
    }

    // End-to-end: update() applies the yield. All other cars are parked in
    // dwell so car-following and car/car intersection yielding can't slow
    // the subject — the only active constraint is the ped yield, so the
    // post-update speed must equal the unit-computed value exactly
    // (2026-10-01 review: the old `< baseSpeed` assertion could pass
    // vacuously via car-following). At 5m the car is at the stop line:
    // it must hold BEFORE the intersection (user feedback 2026-10-01).
    for (const other of exposed.cars) if (other !== car) other.dwellT = 999;
    car.t = 1 - 5 / car.edgeLen;
    ped.pos.set(node.x, 0, node.z);
    const expected = exposed.carPedYieldSpeed(car);
    assert.equal(expected, 0, 'test setup: 5m is inside the 7m stop line');
    exposed.update(dt, playerPos, 0, 0, dt);
    assert.ok(Math.abs(car.speed - expected) < 1e-9,
      `update() did not apply the ped yield: speed ${car.speed.toFixed(4)} vs expected ${expected.toFixed(4)}`);
    life.dispose();
  });

  it('simulated traffic acquires trips and reaches destinations', () => {
    const scene = new THREE.Group();
    const life = new Life(scene, 12345);
    const playerPos = new THREE.Vector3(0, 50, 0);
    // 60 seconds of traffic.
    for (let i = 0; i < 3600; i++) {
      life.update(1 / 60, playerPos, 0, 0, i / 60);
    }
    const cars = (life as unknown as { cars: {
      destNode: string | null; route: RoadEdge[]; dwellT: number;
    }[] }).cars;
    let onTrip = 0, dwelling = 0;
    for (const car of cars) {
      if (car.dwellT > 0) dwelling++;
      else if (car.destNode) onTrip++;
    }
    // Every car is either mid-trip, dwelling at a destination, or wandering
    // while waiting for a route — but wandering must be rare/never since the
    // graph is connected.
    assert.ok(onTrip + dwelling === cars.length,
      `${onTrip} on trip, ${dwelling} dwelling, ${cars.length - onTrip - dwelling} wandering`);
    life.dispose();
  });
});
