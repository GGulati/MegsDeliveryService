// tests/money-ux.test.ts — Phase C: Money UX (TDD)
import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';

// Minimal DOM shim for UI tests.
before(() => {
  const makeEl = () => ({
    hidden: false, textContent: '', innerHTML: '',
    classList: { toggle() {}, add() {}, remove() {} },
    setAttribute() {}, getAttribute: () => null,
    style: {}, dataset: {},
    querySelector: () => makeEl(), querySelectorAll: () => [],
    appendChild() {}, addEventListener() {},
    onclick: null as unknown,
    getBoundingClientRect: () => ({ left: 100, top: 50, width: 80, height: 30, right: 180, bottom: 80 }),
  });
  (globalThis as Record<string, unknown>).document = {
    createElement: () => makeEl(),
  };
});

import { easeOutCubic, coinFlightPosition } from '../src/coin-anim.js';

describe('coin-anim math (pure)', () => {
  it('easeOutCubic(0) = 0, easeOutCubic(1) = 1', () => {
    assert.equal(easeOutCubic(0), 0);
    assert.equal(easeOutCubic(1), 1);
  });
  it('easeOutCubic is fast at start (front-loaded)', () => {
    // Ease-out: most progress happens early — "fast speed" per user.
    assert.ok(easeOutCubic(0.5) > 0.5, 'half time should be more than half distance');
  });
  it('coinFlightPosition interpolates start→end', () => {
    const start = { x: 0, y: 100 }, end = { x: 200, y: 0 };
    const p0 = coinFlightPosition(start, end, 0);
    assert.deepEqual(p0, { x: 0, y: 100 });
    const p1 = coinFlightPosition(start, end, 1);
    assert.deepEqual(p1, { x: 200, y: 0 });
  });
  it('coinFlightPosition arcs upward (adds lift)', () => {
    const start = { x: 0, y: 100 }, end = { x: 200, y: 100 };
    const mid = coinFlightPosition(start, end, 0.5);
    // Midpoint should be above the straight line (arc).
    assert.ok(mid.y < 100, `mid y=${mid.y} should arc upward`);
  });
});

describe('CoinAnim state machine', () => {
  it('spawns N coins with staggered delays', async () => {
    const { CoinAnim } = await import('../src/coin-anim.js');
    const anim = new CoinAnim();
    anim.spawn({ x: 0, y: 0 }, { x: 100, y: 100 }, 3, 1000);
    assert.equal(anim.activeCount, 3);
    // Stagger: 0.1s apart.
    const coins = anim.debugCoins();
    assert.equal(coins[0].delay, 0);
    assert.equal(coins[1].delay, 100);
    assert.equal(coins[2].delay, 200);
  });
  it('caps at 10 coins, returns remainder', async () => {
    const { CoinAnim } = await import('../src/coin-anim.js');
    const anim = new CoinAnim();
    const remainder = anim.spawn({ x: 0, y: 0 }, { x: 100, y: 100 }, 25, 1000);
    assert.equal(anim.activeCount, 10);
    assert.equal(remainder, 15);
  });
  it('coins complete after flight time + delay', async () => {
    const { CoinAnim } = await import('../src/coin-anim.js');
    const anim = new CoinAnim();
    anim.spawn({ x: 0, y: 0 }, { x: 100, y: 100 }, 2, 1000);
    // t=1000: first coin starts (delay 0), second waits (delay 100).
    let done = anim.update(1000);
    assert.equal(done, 0);
    // t=1500: first coin done (500ms flight), second still flying (400ms elapsed).
    done = anim.update(1500);
    assert.equal(done, 1);
    // t=1600: second coin done (100 delay + 500 flight).
    done = anim.update(1600);
    assert.equal(done, 1);
    assert.equal(anim.activeCount, 0);
  });
  it('update returns 0 when no coins active', async () => {
    const { CoinAnim } = await import('../src/coin-anim.js');
    const anim = new CoinAnim();
    assert.equal(anim.update(5000), 0);
  });
});
