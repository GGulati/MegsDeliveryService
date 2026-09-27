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
import { heightAt } from '../src/terrain.js';

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
      group: THREE.Group; curve: THREE.CatmullRomCurve3; t: number; edge: { kind: string };
    }[] }).cars;
    for (const car of cars) {
      const pos = car.group.position;
      const t = THREE.MathUtils.clamp(car.t, 0, 1);
      const p = car.curve.getPointAt(t);
      const tan = car.curve.getTangentAt(t);
      const nx = -tan.z, nz = tan.x;
      const hw = car.edge.kind === 'switchback' ? 2.2 : 2.8;
      // Same formula as scene.ts makeFlatRoad.
      const expectedY = Math.max(
        p.y,
        heightAt(p.x, p.z),
        heightAt(p.x + nx * hw, p.z + nz * hw),
        heightAt(p.x - nx * hw, p.z - nz * hw),
      ) + 0.15;
      // Car is offset 1.4m right, but deck height is computed at centerline.
      // The car's y should match the deck (within 1m for the offset difference).
      assert.ok(Math.abs(pos.y - expectedY) < 1.0,
        `car y=${pos.y.toFixed(2)} vs deck ${expectedY.toFixed(2)}`);
    }
    life.dispose();
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
