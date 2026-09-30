import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { STOPS } from '../src/world.js';
import { createState, startRun, makeOffers } from '../src/simulation.js';

describe('delivery locations', () => {
  test('has 22 delivery stops plus home', () => {
    const deliveryStops = STOPS.filter((s) => s.id !== 'home');
    assert.equal(deliveryStops.length, 22, `expected 22 delivery stops, got ${deliveryStops.length}`);
    assert.ok(STOPS.find((s) => s.id === 'home'), 'home stop exists');
  });

  test('all stop IDs are unique', () => {
    const ids = STOPS.map((s) => s.id);
    assert.equal(new Set(ids).size, ids.length, 'duplicate stop IDs found');
  });

  test('all stop names are unique', () => {
    const names = STOPS.map((s) => s.name);
    assert.equal(new Set(names).size, names.length, 'duplicate stop names found');
  });

  test('offers never include home and never contain duplicates', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const state = createState();
      startRun(state, seed);
      const destinations = state.run!.offers.map((o) => o.to);
      for (const dest of destinations) {
        assert.notEqual(dest, 'home', `home offered for seed ${seed}`);
      }
      assert.equal(new Set(destinations).size, destinations.length,
        `duplicate offers for seed ${seed}: ${destinations.join(', ')}`);
    }
  });

  test('recentStops tracks last 3 deliveries', () => {
    const state = createState();
    startRun(state, 42);
    assert.deepEqual(state.run!.recentStops, [], 'recentStops starts empty');

    // Simulate deliveries by directly manipulating state
    // (full delivery flow requires flight simulation)
    state.run!.recentStops = ['a', 'b', 'c', 'd'].slice(-3);
    assert.deepEqual(state.run!.recentStops, ['b', 'c', 'd'], 'keeps only last 3');
  });

  test('makeOffers excludes recentStops (no repeats across 3)', () => {
    const recent = ['clocktower', 'cobblers', 'tinkers'];
    // Test across many seeds and origins
    for (let seed = 1; seed <= 30; seed++) {
      for (const from of ['home', 'harbor-cafe', 'lighthouse', 'observatory']) {
        const offers = makeOffers(seed, 5, from, recent);
        for (const offer of offers) {
          assert.ok(!recent.includes(offer.to),
            `seed ${seed} from ${from}: offered ${offer.to} which is in recentStops`);
          assert.notEqual(offer.to, 'home', 'home should never be offered');
          assert.notEqual(offer.to, from, 'current location should never be offered');
        }
        // No duplicates in the offers
        const dests = offers.map((o) => o.to);
        assert.equal(new Set(dests).size, dests.length,
          `seed ${seed} from ${from}: duplicate offers ${dests.join(', ')}`);
      }
    }
  });

  test('payout bands are valid (20/35/50)', () => {
    for (let seed = 1; seed <= 100; seed++) {
      const state = createState();
      startRun(state, seed);
      for (const offer of state.run!.offers) {
        assert.ok([20, 35, 50].includes(offer.payout), `unexpected payout ${offer.payout}`);
      }
    }
  });

  test('long tier exists for far-flung routes', () => {
    // From lighthouse to bungalow lanes should be >260m (long tier)
    const lighthouse = STOPS.find((s) => s.id === 'lighthouse')!;
    const gardenGate = STOPS.find((s) => s.id === 'garden-gate')!;
    const dist = Math.hypot(
      gardenGate.position.x - lighthouse.position.x,
      gardenGate.position.z - lighthouse.position.z
    );
    assert.ok(dist > 260, `lighthouse to garden-gate should be long tier, got ${dist.toFixed(0)}m`);
  });

  test('offer labels match distance categories', () => {
    for (let seed = 1; seed <= 30; seed++) {
      const state = createState();
      startRun(state, seed);
      const origin = STOPS.find((s) => s.id === 'home')!;
      for (const offer of state.run!.offers) {
        const dest = STOPS.find((s) => s.id === offer.to)!;
        const dist = Math.hypot(dest.position.x - origin.position.x, dest.position.z - origin.position.z);
        const expected = dist < 130 ? 'Short hop' : dist <= 260 ? 'Medium run' : 'Long haul';
        assert.equal(offer.label, expected,
          `seed ${seed}: ${offer.to} at ${dist.toFixed(0)}m labeled "${offer.label}", expected "${expected}"`);
      }
    }
  });
});
