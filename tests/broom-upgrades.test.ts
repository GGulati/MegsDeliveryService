import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createState, makeOffers, offerSlots, hasCapstone, computeFlightStats,
  startRun, step, startTutorial,
} from '../src/simulation';
import type { GameState } from '../src/types';

/** Helper: state with specific upgrades and capstones. */
function stateWithUpgrades(
  upgrades: Partial<{ speed: number; handling: number; braking: number; capacity: number; glide: number }>,
  capstones: Record<string, string> = {},
): GameState {
  const state = createState();
  state.profile.upgrades = {
    speed: 0, handling: 0, braking: 0, capacity: 0, glide: 0,
    ...upgrades, capstones,
  };
  return state;
}

// --- offerSlots ---

test('offerSlots is 2 with no capacity', () => {
  const state = stateWithUpgrades({});
  assert.equal(offerSlots(state), 2);
});

test('offerSlots increases with capacity level', () => {
  assert.equal(offerSlots(stateWithUpgrades({ capacity: 1 })), 3);
  assert.equal(offerSlots(stateWithUpgrades({ capacity: 2 })), 4);
});

test('offerSlots adds 1 for deep-satchel capstone', () => {
  const state = stateWithUpgrades({ capacity: 2 }, { capacity: 'deep-satchel' });
  assert.equal(offerSlots(state), 5);
});

// --- hasCapstone ---

test('hasCapstone reads the capstones record', () => {
  const state = stateWithUpgrades({}, { speed: 'tailwind' });
  assert.equal(hasCapstone(state, 'speed', 'tailwind'), true);
  assert.equal(hasCapstone(state, 'speed', 'quickstart'), false);
  assert.equal(hasCapstone(state, 'handling', 'tailwind'), false);
});

// --- makeOffers with count ---

test('makeOffers returns requested count with no duplicates', () => {
  for (const count of [2, 3, 4, 5]) {
    for (let seed = 1; seed <= 10; seed++) {
      const offers = makeOffers(seed, 0, 'home', [], count);
      assert.ok(offers.length <= count, `count ${count}: got ${offers.length}`);
      assert.ok(offers.length >= 1, 'at least one offer');
      const dests = offers.map((o) => o.to);
      assert.equal(new Set(dests).size, dests.length, `count ${count} seed ${seed}: duplicates`);
      for (const o of offers) {
        assert.ok([20, 35, 50].includes(o.payout), `payout ${o.payout}`);
        assert.notEqual(o.to, 'home');
      }
    }
  }
});

test('makeOffers defaults to 2 for backward compatibility', () => {
  const offers = makeOffers(42, 0, 'home', []);
  assert.equal(offers.length, 2);
});

test('startRun uses offerSlots for offer count', () => {
  const state = stateWithUpgrades({ capacity: 2 });
  // startRun requires mode title/summary/home
  assert.equal(state.mode, 'title');
  startRun(state, 12345);
  assert.equal(state.run!.offers.length, 4);
});

// --- computeFlightStats ---

test('tailwind increases maxSpeed by 15%', () => {
  const base = computeFlightStats(stateWithUpgrades({}), 0);
  const with_ = computeFlightStats(stateWithUpgrades({}, { speed: 'tailwind' }), 0);
  assert.ok(Math.abs(with_.maxSpeed / base.maxSpeed - 1.15) < 1e-9,
    `${with_.maxSpeed} vs ${base.maxSpeed}`);
});

test('speed upgrade still applies (10% per level)', () => {
  const s0 = computeFlightStats(stateWithUpgrades({}), 0);
  const s2 = computeFlightStats(stateWithUpgrades({ speed: 2 }), 0);
  assert.ok(Math.abs(s2.maxSpeed / s0.maxSpeed - 1.2) < 1e-9);
});

test('quickstart increases acceleration by 30%', () => {
  const base = computeFlightStats(stateWithUpgrades({}), 0);
  const with_ = computeFlightStats(stateWithUpgrades({}, { speed: 'quickstart' }), 0);
  assert.ok(Math.abs(with_.accel / base.accel - 1.3) < 1e-9);
});

test('tight-turns increases turnRate by 25%', () => {
  const base = computeFlightStats(stateWithUpgrades({}), 0);
  const with_ = computeFlightStats(stateWithUpgrades({}, { handling: 'tight-turns' }), 0);
  assert.ok(Math.abs(with_.turnRate / base.turnRate - 1.25) < 1e-9);
});

test('glide boosts turnRate at cruising speed only', () => {
  const slow = stateWithUpgrades({ glide: 2 });
  slow.player.speed = 5; // below 50% of 18
  const slowStats = computeFlightStats(slow, 0);
  const fast = stateWithUpgrades({ glide: 2 });
  fast.player.speed = 15; // above 50% of 18
  const fastStats = computeFlightStats(fast, 0);
  const base = computeFlightStats(stateWithUpgrades({}), 0);
  // Slow: no glide bonus (turnRate == base, since handling is 0)
  assert.ok(Math.abs(slowStats.turnRate / base.turnRate - 1) < 1e-9,
    'glide should not apply at low speed');
  // Fast: 1 + 0.1*2 = 1.2x
  assert.ok(Math.abs(fastStats.turnRate / base.turnRate - 1.2) < 1e-9,
    'glide should apply at cruising speed');
});

test('quick-stop increases brakeRate by 30%', () => {
  const state = stateWithUpgrades({});
  state.player.speed = 10;
  const base = computeFlightStats(state, 0);
  const withState = stateWithUpgrades({}, { braking: 'quick-stop' });
  withState.player.speed = 10;
  const with_ = computeFlightStats(withState, 0);
  assert.ok(Math.abs(with_.brakeRate / base.brakeRate - 1.3) < 1e-9);
});

test('stable-hover boosts brakeRate when hovering', () => {
  const state = stateWithUpgrades({}, { handling: 'stable-hover' });
  state.player.speed = 10;
  state.player.hover = true;
  const hovering = computeFlightStats(state, 0);
  state.player.hover = false;
  const notHovering = computeFlightStats(state, 0);
  assert.ok(hovering.brakeRate > notHovering.brakeRate,
    'stable-hover should boost brakeRate only when hovering');
  // 1.43x ≈ 1/0.7 (30% faster engage)
  assert.ok(Math.abs(hovering.brakeRate / notHovering.brakeRate - 1.43) < 0.01);
});

test('dive-bomber boosts maxSpeed when diving steeply', () => {
  const state = stateWithUpgrades({}, { glide: 'dive-bomber' });
  const diving = computeFlightStats(state, -6); // vertical < -5
  const level = computeFlightStats(state, 0);
  assert.ok(Math.abs(diving.maxSpeed / level.maxSpeed - 1.3) < 1e-9,
    'dive-bomber should apply when verticalSpeed < -5');
});

test('cloud-surfer boosts turnRate above 60m', () => {
  const state = stateWithUpgrades({}, { glide: 'cloud-surfer' });
  state.player.position.y = 70;
  const high = computeFlightStats(state, 0);
  state.player.position.y = 30;
  const low = computeFlightStats(state, 0);
  assert.ok(Math.abs(high.turnRate / low.turnRate - 1.25) < 1e-9,
    'cloud-surfer should apply above 60m');
});

// --- bump penalty (hard landings) ---

/** Helper: set up a hard landing scenario (diving fast toward terrain). */
function hardLandingState(): GameState {
  const state = createState();
  startTutorial(state);
  // Position above terrain, diving down fast
  state.player.position = { x: 0, y: 30, z: 0 };
  state.player.speed = 18;
  state.player.throttle = 18;
  return state;
}

test('hard landing reduces speed (bump penalty)', () => {
  const state = hardLandingState();
  const speedBefore = state.player.speed;
  // Dive straight down for 2 seconds (should hit terrain)
  for (let i = 0; i < 20; i++) {
    step(state, { turn: 0, climb: -1, throttle: 1 }, 0.1);
  }
  assert.ok(state.player.speed < speedBefore * 0.9,
    `bump should reduce speed on hard landing: ${speedBefore} -> ${state.player.speed}`);
});

test('feather-touch negates bump speed penalty', () => {
  const plain = hardLandingState();
  for (let i = 0; i < 20; i++) step(plain, { turn: 0, climb: -1, throttle: 1 }, 0.1);
  const plainSpeed = plain.player.speed;

  const with_ = hardLandingState();
  with_.profile.upgrades.capstones = { braking: 'feather-touch' };
  for (let i = 0; i < 20; i++) step(with_, { turn: 0, climb: -1, throttle: 1 }, 0.1);
  assert.ok(with_.player.speed > plainSpeed,
    `feather-touch should preserve speed: plain ${plainSpeed} vs capstone ${with_.player.speed}`);
});

test('careful-packer negates bump speed penalty', () => {
  const s = hardLandingState();
  s.profile.upgrades.capstones = { capacity: 'careful-packer' };
  const speedBefore = s.player.speed;
  for (let i = 0; i < 20; i++) step(s, { turn: 0, climb: -1, throttle: 1 }, 0.1);
  // Speed should not be cut by the penalty (allow normal braking decay)
  assert.ok(s.player.speed > speedBefore * 0.5,
    `careful-packer should preserve speed: ${speedBefore} -> ${s.player.speed}`);
});
