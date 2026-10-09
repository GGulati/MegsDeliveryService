import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createState, makeOffers, offerSlots, computeFlightStats,
  startRun, step, settleRun, chooseJob,
} from '../src/simulation';
import { buyUpgrade, buyCapstone } from '../src/home';
import { encodeSave, decodeSave } from '../src/storage';
import type { GameState } from '../src/types';

/** Helper: state in home mode with the brooms panel open and coins. */
function homeStateWithCoins(coins: number): GameState {
  const state = createState();
  state.mode = 'home';
  state.homePanel = 'brooms';
  state.profile.coins = coins;
  return state;
}

/** Helper: state with specific upgrades/capstones (bypasses purchase). */
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

// --- 1. Buy capacity → more offers ---

test('integration: buying capacity increases offer slots', () => {
  const state = homeStateWithCoins(1000);

  // Buy capacity level 1 (costs 60)
  assert.equal(buyUpgrade(state, 'capacity'), true);
  assert.equal(state.profile.upgrades.capacity, 1);
  assert.equal(offerSlots(state), 3);

  // makeOffers with the new slot count returns 3 offers
  const offers = makeOffers(42, 0, 'home', [], offerSlots(state));
  assert.equal(offers.length, 3);
});

test('integration: buying capacity twice gives 4 offer slots', () => {
  const state = homeStateWithCoins(1000);

  assert.equal(buyUpgrade(state, 'capacity'), true); // 60 coins
  assert.equal(buyUpgrade(state, 'capacity'), true); // 120 coins
  assert.equal(state.profile.upgrades.capacity, 2);
  assert.equal(offerSlots(state), 4);

  const offers = makeOffers(42, 0, 'home', [], offerSlots(state));
  assert.equal(offers.length, 4);
});

test('integration: deep-satchel capstone adds another offer slot', () => {
  const state = homeStateWithCoins(1000);

  buyUpgrade(state, 'capacity');
  buyUpgrade(state, 'capacity');
  assert.equal(buyCapstone(state, 'capacity', 'deep-satchel'), true);
  assert.equal(offerSlots(state), 5);

  const offers = makeOffers(42, 0, 'home', [], offerSlots(state));
  assert.equal(offers.length, 5);
});

// --- 2. Buy glide → faster turns ---

test('integration: buying glide increases turn rate via computeFlightStats', () => {
  const before = stateWithUpgrades({});
  const baseRate = computeFlightStats(before, 0).turnRate;

  const state = homeStateWithCoins(1000);
  buyUpgrade(state, 'glide');
  buyUpgrade(state, 'glide');

  // Need speed > 50% maxSpeed for the glide bonus to apply
  state.player.speed = 20;
  const afterRate = computeFlightStats(state, 0).turnRate;

  // 20% increase from 2 glide levels
  assert.ok(Math.abs(afterRate / baseRate - 1.2) < 0.01,
    `expected 20% increase, got ${afterRate} vs ${baseRate}`);
});

// --- 3. Choose tailwind → higher top speed ---

test('integration: tailwind capstone increases max speed', () => {
  const without = stateWithUpgrades({ speed: 2 });
  const baseSpeed = computeFlightStats(without, 0).maxSpeed;

  const state = homeStateWithCoins(1000);
  buyUpgrade(state, 'speed');
  buyUpgrade(state, 'speed');
  assert.equal(buyCapstone(state, 'speed', 'tailwind'), true);

  const withCapstone = computeFlightStats(state, 0).maxSpeed;
  assert.ok(Math.abs(withCapstone / baseSpeed - 1.15) < 0.01,
    `expected 15% increase, got ${withCapstone} vs ${baseSpeed}`);
});

// --- 4. Dive bomber applies on steep dive ---

test('integration: dive-bomber increases max speed on steep dive', () => {
  const state = homeStateWithCoins(1000);
  buyUpgrade(state, 'glide');
  buyUpgrade(state, 'glide');
  assert.equal(buyCapstone(state, 'glide', 'dive-bomber'), true);

  const levelSpeed = computeFlightStats(state, 0).maxSpeed;
  const diveSpeed = computeFlightStats(state, -10).maxSpeed;

  assert.ok(Math.abs(diveSpeed / levelSpeed - 1.3) < 0.01,
    `expected 30% increase on dive, got ${diveSpeed} vs ${levelSpeed}`);
});

test('integration: dive-bomber does not apply on shallow descent', () => {
  const state = stateWithUpgrades({ glide: 2 }, { glide: 'dive-bomber' });

  const levelSpeed = computeFlightStats(state, 0).maxSpeed;
  const shallowSpeed = computeFlightStats(state, -3).maxSpeed; // > -5, no bonus

  assert.equal(shallowSpeed, levelSpeed);
});

// --- 5. Bump penalty and feather-touch ---

test('integration: hard landing applies speed penalty', () => {
  const state = createState();
  // Set up a flight state with a run
  state.mode = 'flight';
  state.run = {
    seed: 1, elapsed: 0, earnings: 0, deliveries: 0,
    job: null, offers: [], returning: false, lastStop: 'home', recentStops: [],
  };
  // Position player below terrain so the floor clamp triggers a hard impact.
  // groundY is at least MIN_ALTITUDE (3m); put player at y=-10 to force a big impact.
  state.player.position = { x: 0, y: -10, z: 0 };
  state.player.speed = 20;
  state.player.velocity = { x: 0, y: -20, z: 0 };

  const speedBefore = state.player.speed;
  step(state, { turn: 0, climb: 0, throttle: 0 }, 0.016);

  // Landing impact > 8 m/s should cut speed to 60%
  assert.ok(state.player.speed < speedBefore,
    `expected speed penalty, got ${state.player.speed} vs ${speedBefore}`);
});

test('integration: feather-touch negates hard landing penalty', () => {
  const state = homeStateWithCoins(1000);
  buyUpgrade(state, 'braking');
  buyUpgrade(state, 'braking');
  assert.equal(buyCapstone(state, 'braking', 'feather-touch'), true);

  // Set up flight
  state.mode = 'flight';
  state.run = {
    seed: 1, elapsed: 0, earnings: 0, deliveries: 0,
    job: null, offers: [], returning: false, lastStop: 'home', recentStops: [],
  };
  state.player.position = { x: 0, y: -10, z: 0 };
  state.player.speed = 20;
  state.player.velocity = { x: 0, y: -20, z: 0 };

  const speedBefore = state.player.speed;
  step(state, { turn: 0, climb: 0, throttle: 0 }, 0.016);

  // Feather-touch should prevent the penalty (speed may change slightly from
  // physics, but not the 40% cut)
  assert.ok(state.player.speed > speedBefore * 0.8,
    `expected no penalty, got ${state.player.speed} vs ${speedBefore}`);
});

test('integration: careful-packer also negates hard landing penalty', () => {
  const state = homeStateWithCoins(1000);
  buyUpgrade(state, 'capacity');
  buyUpgrade(state, 'capacity');
  assert.equal(buyCapstone(state, 'capacity', 'careful-packer'), true);

  state.mode = 'flight';
  state.run = {
    seed: 1, elapsed: 0, earnings: 0, deliveries: 0,
    job: null, offers: [], returning: false, lastStop: 'home', recentStops: [],
  };
  state.player.position = { x: 0, y: -10, z: 0 };
  state.player.speed = 20;
  state.player.velocity = { x: 0, y: -20, z: 0 };

  const speedBefore = state.player.speed;
  step(state, { turn: 0, climb: 0, throttle: 0 }, 0.016);

  assert.ok(state.player.speed > speedBefore * 0.8,
    `expected no penalty, got ${state.player.speed} vs ${speedBefore}`);
});

// --- 6. Coin flow on delivery ---

test('integration: successful delivery banks earnings to profile coins', () => {
  const state = createState();
  state.mode = 'flight';
  const coinsBefore = state.profile.coins;
  state.run = {
    seed: 1, elapsed: 100, earnings: 85, deliveries: 2,
    job: null, offers: [], returning: false, lastStop: 'home', recentStops: [],
  };

  settleRun(state, true);

  assert.equal(state.profile.coins, coinsBefore + 85);
  assert.equal(state.mode, 'summary');
});

test('integration: failed run does not bank earnings', () => {
  const state = createState();
  state.mode = 'flight';
  const coinsBefore = state.profile.coins;
  state.run = {
    seed: 1, elapsed: 100, earnings: 85, deliveries: 2,
    job: null, offers: [], returning: false, lastStop: 'home', recentStops: [],
  };

  settleRun(state, false);

  assert.equal(state.profile.coins, coinsBefore);
});

// --- 7. Save/load preserves capstones ---

test('integration: save/load round-trips capacity, glide, and capstones', () => {
  const state = homeStateWithCoins(1000);
  buyUpgrade(state, 'capacity');
  buyUpgrade(state, 'capacity');
  buyUpgrade(state, 'glide');
  assert.equal(buyCapstone(state, 'capacity', 'deep-satchel'), true);

  const encoded = encodeSave(state);
  const loaded = decodeSave(encoded);

  assert.ok(loaded, 'decodeSave should succeed');
  assert.equal(loaded!.profile.upgrades.capacity, 2);
  assert.equal(loaded!.profile.upgrades.glide, 1);
  assert.equal(loaded!.profile.upgrades.capstones['capacity'], 'deep-satchel');
});

test('integration: old save without new fields migrates to defaults', () => {
  const state = createState();
  // Simulate an old save by encoding a profile without the new fields,
  // then decoding it (readProfile should apply defaults).
  const oldProfileJson = JSON.stringify({
    coins: 100,
    upgrades: { speed: 1, handling: 0, braking: 0 }, // no capacity/glide/capstones
    furniture: [], tutorialDone: false, runs: 0, deliveries: 0,
  });
  // Build a save envelope manually with the old profile shape
  const envelope = JSON.parse(encodeSave(state));
  envelope.state.profile = JSON.parse(oldProfileJson);
  const loaded = decodeSave(JSON.stringify(envelope));

  assert.ok(loaded, 'decodeSave should succeed');
  assert.equal(loaded!.profile.upgrades.capacity, 0);
  assert.equal(loaded!.profile.upgrades.glide, 0);
  assert.deepEqual(loaded!.profile.upgrades.capstones, {});
});
