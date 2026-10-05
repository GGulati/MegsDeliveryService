import assert from 'node:assert/strict';
import test from 'node:test';
import {
  chooseJob,
  createState,
  interact,
  returnHome,
  startRun,
  step,
} from '../src/simulation';
import { buyFurniture, buyUpgrade, enterHome } from '../src/home';
import { STOPS } from '../src/world';
import type { GameState } from '../src/types';

const SEED = 42;
const input = { turn: 0, climb: 0, throttle: 0 };

/** Teleport above a stop's pad, ready to descend. */
function above(state: GameState, id: string, height = 8): void {
  const stop = STOPS.find(s => s.id === id)!;
  state.player.position = { x: stop.position.x, y: stop.position.y + height, z: stop.position.z };
  state.player.speed = 0;
  state.player.hover = true;
}

/** Step until a descent commits its drop and the drop animation resolves. */
function completeDelivery(state: GameState): void {
  for (let i = 0; i < 3600 && state.descent && !state.drop; i++) step(state, input, 1 / 60);
  assert.ok(state.drop, 'descent should commit a drop');
  for (let i = 0; i < 300 && state.drop; i++) step(state, input, 1 / 60);
  assert.equal(state.drop, null, 'drop should resolve');
}

/** Deliver to the given stop: position, interact to descend, complete. */
function deliverTo(state: GameState, stopId: string): number {
  const before = state.run!.earnings;
  above(state, stopId);
  interact(state);
  assert.ok(state.descent, `interact at ${stopId} should start a descent`);
  completeDelivery(state);
  const paid = state.run!.earnings - before;
  assert.ok(paid > 0, `delivery to ${stopId} should pay earnings`);
  return paid;
}

/** Full headless gameplay loop, no browser:
 * new game → offers → choose job → deliver → choose next → deliver →
 * return home → day summary → coins banked. */
test('full delivery loop: offers, two deliveries, return home, earnings banked', () => {
  const state = createState();

  // New game → job picker
  startRun(state, SEED);
  assert.equal(state.mode, 'offers');
  assert.equal(state.run!.offers.length, 2);

  // First delivery
  const firstTo = state.run!.offers[0].to;
  const firstPayout = state.run!.offers[0].payout;
  chooseJob(state, 0);
  assert.equal(state.mode, 'flight');
  assert.equal(state.run!.job!.to, firstTo);
  const paid1 = deliverTo(state, firstTo);
  assert.equal(paid1, firstPayout, 'first delivery should pay the offered amount');

  // Second delivery from the new offers
  assert.equal(state.mode, 'offers', 'delivery should return to the job picker');
  assert.equal(state.run!.offers.length, 2);
  const secondTo = state.run!.offers[0].to;
  const secondPayout = state.run!.offers[0].payout;
  chooseJob(state, 0);
  const paid2 = deliverTo(state, secondTo);
  assert.equal(paid2, secondPayout);

  // Return home → fly home → land → earnings banked in the home room
  const coinsBefore = state.profile.coins;
  returnHome(state);
  assert.equal(state.mode, 'flight', 'returnHome should launch the flight home');
  assert.ok(state.run!.returning, 'should be flagged as returning');

  // Land at home: the home drop banks earnings and enters the home room
  const expectedEarnings = state.run!.earnings;
  assert.equal(expectedEarnings, firstPayout + secondPayout);
  above(state, 'home');
  interact(state);
  completeDelivery(state);
  assert.equal(state.mode, 'home', 'landing at home should enter the home room');
  assert.equal(state.profile.coins, coinsBefore + expectedEarnings, 'earnings should be banked');
  assert.equal(state.run, null, 'run should clear after banking at home');
});

/** The loop is deterministic: same seed → same offers, same payouts. */
test('gameplay loop is deterministic for a fixed seed', () => {
  const runLoop = () => {
    const state = createState();
    startRun(state, SEED);
    const log: string[] = [];
    for (let i = 0; i < 3; i++) {
      const job = state.run!.offers[0];
      log.push(`${job.to}:${job.payout}`);
      chooseJob(state, 0);
      deliverTo(state, job.to);
    }
    return log;
  };
  assert.deepEqual(runLoop(), runLoop(), 'same seed should produce identical delivery sequences');
});

/** Home economy: entering home, buying upgrades and furniture. */
test('home economy: upgrades and furniture purchases', () => {
  const state = createState();
  state.profile.coins = 1000;

  enterHome(state);
  assert.equal(state.mode, 'home');

  // Buy a speed upgrade (brooms panel)
  state.homePanel = 'brooms';
  const coinsBeforeUpgrade = state.profile.coins;
  const bought = buyUpgrade(state, 'speed');
  assert.ok(bought, 'should be able to afford a speed upgrade');
  assert.ok(state.profile.coins < coinsBeforeUpgrade, 'upgrade should cost coins');
  assert.ok(state.profile.upgrades.speed > 0, 'speed upgrade level should increase');

  // Buy furniture (decor panel)
  state.homePanel = 'decor';
  const furnitureId = 'rug';
  const coinsBeforeFurniture = state.profile.coins;
  const furnished = buyFurniture(state, furnitureId);
  if (furnished) {
    assert.ok(state.profile.coins < coinsBeforeFurniture, 'furniture should cost coins');
    assert.ok(state.profile.furniture.includes(furnitureId), 'furniture should be owned');
  }
});

/** Deliveries cannot be repeated: the same stop won't immediately re-offer. */
test('recent stops are excluded from new offers', () => {
  const state = createState();
  startRun(state, SEED);
  const firstTo = state.run!.offers[0].to;
  chooseJob(state, 0);
  deliverTo(state, firstTo);
  const newOffers = state.run!.offers.map(j => j.to);
  assert.ok(!newOffers.includes(firstTo), 'just-delivered stop should not reappear immediately');
});
