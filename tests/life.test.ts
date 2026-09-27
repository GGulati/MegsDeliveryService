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
import { deckHeightAt, roadWidth, patchSurfaceHeight } from '../src/road-deck.js';

describe('ambient life', () => {
  it('spawns exactly 16 cars and 44 pedestrians', () => {
    const scene = new THREE.Group();
    const life = new Life(scene);
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
    const life = new Life(scene);
    const cars = (life as unknown as { cars: { variant: string }[] }).cars;
    const beetles = cars.filter(c => c.variant === 'beetle');
    const sports = cars.filter(c => c.variant === 'sports');
    assert.equal(beetles.length, 1, 'exactly one VW Beetle');
    assert.equal(sports.length, 1, 'exactly one sportscar');
    life.dispose();
  });

  it('cars stay on the road graph after simulated driving', () => {
    const scene = new THREE.Group();
    const life = new Life(scene);
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
    const life = new Life(scene);
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
    const life = new Life(scene);
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
    const life = new Life(scene);
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
    const life = new Life(scene);
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
    const life = new Life(scene);
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
      // Ground truth is the same height the renderer uses for the road ribbon
      // (slope-limited deck), or the junction patch surface inside
      // intersections (~5cm above the deck).
      const expectedY = patchSurfaceHeight(pos.x, pos.z) ?? deckHeightAt(car.edge, t);
      assert.ok(Math.abs(pos.y - expectedY) < 0.05,
        `car y=${pos.y.toFixed(2)} vs deck ${expectedY.toFixed(2)}`);
    }
    life.dispose();
  });

  it('sidewalk peds stand on the deck, not under it', () => {
    const scene = new THREE.Group();
    const life = new Life(scene);
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
      // Inside intersections peds stand on the junction patch surface.
      const expectedY = patchSurfaceHeight(ped.pos.x, ped.pos.z) ?? deckHeightAt(ped.edge, t);
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
    const life = new Life(scene);
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
});

describe('trip-based traffic (user feedback 2026-09-27)', () => {
  it('cars follow their route edge-by-edge with no random turns', () => {
    const scene = new THREE.Group();
    const life = new Life(scene);
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
    const life = new Life(scene);
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
    const life = new Life(scene);
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

  it('simulated traffic acquires trips and reaches destinations', () => {
    const scene = new THREE.Group();
    const life = new Life(scene);
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
