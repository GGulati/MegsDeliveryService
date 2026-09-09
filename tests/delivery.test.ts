import assert from 'node:assert/strict';
import test from 'node:test';
import { chooseJob, createState, interact, returnHome, setPaused, settleRun, startRun, step } from '../src/simulation';
import { STOPS } from '../src/world';

const input = { turn: 0, climb: 0, throttle: 0 };

function land(state: ReturnType<typeof createState>, id: string): void {
  state.player.position = { ...STOPS.find((stop) => stop.id === id)!.position };
  state.player.speed = 0;
  state.player.hover = true;
}

test('same seed produces the same distinct non-home offers', () => {
  const a = createState(), b = createState(); startRun(a, 42); startRun(b, 42);
  land(a, 'harbor-cafe'); land(b, 'harbor-cafe'); interact(a); interact(b);
  assert.deepEqual(a.run!.offers, b.run!.offers);
  assert.equal(new Set(a.run!.offers.map((job) => job.to)).size, 2);
  assert.ok(a.run!.offers.every((job) => job.from === 'harbor-cafe' && job.to !== 'home'));
  assert.equal(a.run!.offers[0].label, 'Short hop');
  assert.equal(a.run!.offers[1].label, 'Long haul');
});

test('delivery pays the run, cannot be repeated, and does not bank before home', () => {
  const state = createState(); startRun(state, 5); land(state, 'harbor-cafe'); interact(state);
  assert.equal(state.run!.earnings, 20); assert.equal(state.profile.coins, 0); assert.equal(state.profile.deliveries, 1);
  interact(state);
  assert.equal(state.run!.earnings, 20); assert.equal(state.profile.deliveries, 1);
});

test('choosing an offer resumes flight with that job', () => {
  const state = createState(); startRun(state, 7); land(state, 'harbor-cafe'); interact(state);
  const picked = state.run!.offers[1]; chooseJob(state, 1);
  assert.equal(state.mode, 'flight'); assert.deepEqual(state.run!.job, picked); assert.equal(state.run!.returning, false);
});

test('offers advance clock while paused clock does not', () => {
  const state = createState(); startRun(state); land(state, 'harbor-cafe'); interact(state);
  step(state, input, 1); assert.equal(state.run!.elapsed, 1);
  setPaused(state, true, 'menu'); step(state, input, 10); assert.equal(state.run!.elapsed, 1);
});

test('deadline allows banking at 479.99 but rescues at 480', () => {
  const early = createState(); startRun(early); early.run!.earnings = 20; early.run!.elapsed = 479.99; land(early, 'home'); interact(early);
  assert.equal(early.summary?.success, true); assert.equal(early.profile.coins, 20);
  const late = createState(); startRun(late); late.profile.coins = 17; late.run!.earnings = 20; late.run!.elapsed = 480; land(late, 'home'); interact(late);
  assert.equal(late.summary?.success, false); assert.equal(late.profile.coins, 17);
});

test('settlement is idempotent and a return home banks once', () => {
  const state = createState(); startRun(state); state.run!.earnings = 35; state.mode = 'offers'; returnHome(state); land(state, 'home'); interact(state);
  settleRun(state, true);
  assert.equal(state.profile.coins, 35); assert.equal(state.profile.runs, 1); assert.equal(state.player.hover, true);
  assert.equal(state.player.speed, 0); assert.deepEqual(state.player.velocity, { x: 0, y: 0, z: 0 });
});
