// tests/money-ux.test.ts — Phase C: Money UX (TDD)
import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';

// Minimal DOM shim for canvas texture generation.
before(() => {
  (globalThis as Record<string, unknown>).document = {
    createElement: (tag: string) => {
      if (tag !== 'canvas') throw new Error(`unexpected ${tag}`);
      return {
        width: 0, height: 0,
        getContext: () => ({
          createRadialGradient: () => ({ addColorStop() {} }),
          fillStyle: '', strokeStyle: '', lineWidth: 0,
          beginPath() {}, arc() {}, fill() {}, stroke() {},
          font: '', textAlign: '', textBaseline: '',
          fillText() {},
        }),
      };
    },
  };
});

import * as THREE from 'three';
import { easeOutCubic, coinFlightPosition3D, COIN_MAX_SPRITES, COIN_FLIGHT_SECONDS } from '../src/coin-anim.js';

describe('coin-anim math (pure)', () => {
  it('easeOutCubic(0) = 0, easeOutCubic(1) = 1', () => {
    assert.equal(easeOutCubic(0), 0);
    assert.equal(easeOutCubic(1), 1);
  });
  it('easeOutCubic is fast at start (front-loaded)', () => {
    assert.ok(easeOutCubic(0.5) > 0.5, 'half time should be more than half distance');
  });
  it('coinFlightPosition3D interpolates start→end', () => {
    const start = new THREE.Vector3(0, 100, 0), end = new THREE.Vector3(200, 0, 50);
    const p0 = coinFlightPosition3D(start, end, 0);
    assert.ok(p0.equals(start));
    const p1 = coinFlightPosition3D(start, end, 1);
    assert.ok(p1.equals(end));
  });
  it('coinFlightPosition3D arcs upward (adds lift)', () => {
    const start = new THREE.Vector3(0, 100, 0), end = new THREE.Vector3(200, 100, 0);
    const mid = coinFlightPosition3D(start, end, 0.5);
    assert.ok(mid.y > 100, `mid y=${mid.y} should arc upward`);
  });
});

describe('CoinSprites', () => {
  // Minimal THREE.Scene stub — CoinSprites only calls add/remove.
  const makeScene = () => {
    const children: unknown[] = [];
    return {
      add: (o: unknown) => { children.push(o); },
      remove: (o: unknown) => { const i = children.indexOf(o); if (i >= 0) children.splice(i, 1); },
      childCount: () => children.length,
    } as unknown as THREE.Scene;
  };

  it('spawns N sprites with staggered delays', async () => {
    const { CoinSprites } = await import('../src/coin-anim.js');
    const sprites = new CoinSprites(makeScene());
    const remainder = sprites.spawn(new THREE.Vector3(0, 0, 0), new THREE.Vector3(10, 5, 0), 3);
    assert.equal(remainder, 0);
    assert.equal(sprites.activeCount, 3);
  });
  it('caps at 10 sprites, returns remainder', async () => {
    const { CoinSprites } = await import('../src/coin-anim.js');
    const sprites = new CoinSprites(makeScene());
    const remainder = sprites.spawn(new THREE.Vector3(0, 0, 0), new THREE.Vector3(10, 5, 0), 25);
    assert.equal(sprites.activeCount, COIN_MAX_SPRITES);
    assert.equal(remainder, 15);
  });
  it('sprites arrive and are removed after flight time', async () => {
    const { CoinSprites } = await import('../src/coin-anim.js');
    const scene = makeScene();
    const sprites = new CoinSprites(scene);
    sprites.spawn(new THREE.Vector3(0, 0, 0), new THREE.Vector3(10, 5, 0), 2);
    assert.equal((scene as unknown as { childCount(): number }).childCount(), 2);
    // Advance past stagger + flight for both coins.
    sprites.update(COIN_FLIGHT_SECONDS + 0.2);
    assert.equal(sprites.activeCount, 0);
    assert.equal((scene as unknown as { childCount(): number }).childCount(), 0);
  });
  it('clear removes all sprites', async () => {
    const { CoinSprites } = await import('../src/coin-anim.js');
    const scene = makeScene();
    const sprites = new CoinSprites(scene);
    sprites.spawn(new THREE.Vector3(0, 0, 0), new THREE.Vector3(10, 5, 0), 5);
    assert.equal(sprites.activeCount, 5);
    sprites.clear();
    assert.equal(sprites.activeCount, 0);
    assert.equal((scene as unknown as { childCount(): number }).childCount(), 0);
  });
});
