import assert from 'node:assert/strict';
import test from 'node:test';
import { chooseJob, createState, interact, nearestStop, returnHome, setPaused, settleRun, startRun, startTutorial, step } from '../src/simulation';
import { startCafeFlight } from './helpers';
import { STOPS } from '../src/world';

const input = { turn: 0, climb: 0, throttle: 0 };
const CAFE = STOPS.find((stop) => stop.id === 'harbor-cafe')!;

function land(state: ReturnType<typeof createState>, id: string): void {
  state.player.position = { ...STOPS.find((stop) => stop.id === id)!.position };
  state.player.speed = 0;
  state.player.hover = true;
}

/** Hover in the column above a pad, at a given height over it. */
function above(state: ReturnType<typeof createState>, id: string, height: number): void {
  const stop = STOPS.find((s) => s.id === id)!;
  state.player.position = { x: stop.position.x, y: stop.position.y + height, z: stop.position.z };
  state.player.speed = 0;
  state.player.hover = true;
}

/** Steps through a pending descent until the parcel drop commits. */
function finishDescent(state: ReturnType<typeof createState>): void {
  for (let i = 0; i < 3600 && state.descent && !state.drop; i++) step(state, input, 1 / 60);
  assert.ok(state.drop, 'descent should finish by committing the drop');
}

/** Steps through a pending descent (if any), then until a committed drop's
 * landing animation resolves. */
function finishDrop(state: ReturnType<typeof createState>): void {
  for (let i = 0; i < 3600 && state.descent && !state.drop; i++) step(state, input, 1 / 60);
  for (let i = 0; i < 120 && state.drop; i++) step(state, input, 1 / 60);
  assert.equal(state.drop, null, 'committed drop should resolve');
}

test('leaving home opens the job picker instead of auto-assigning Harbor Cafe', () => {
  const state = createState(); startRun(state, 7);
  assert.equal(state.mode, 'offers', 'a fresh run should start at the job picker');
  assert.equal(state.run!.job, null, 'no job should be pre-assigned');
  assert.equal(state.run!.offers.length, 2, 'two opening offers');
  assert.ok(state.run!.offers.every((job) => job.from === 'home' && job.to !== 'home'));
  assert.ok(new Set(state.run!.offers.map((job) => job.to)).size === 2, 'offers should be distinct');
});

test('opening offers are deterministic for a seed', () => {
  const a = createState(), b = createState(); startRun(a, 7); startRun(b, 7);
  assert.deepEqual(a.run!.offers, b.run!.offers);
});

test('choosing an opening offer takes off with that job', () => {
  const state = createState(); startRun(state, 7);
  const wanted = state.run!.offers[1].to;
  chooseJob(state, 1);
  assert.equal(state.mode, 'flight');
  assert.equal(state.run!.job!.to, wanted);
  assert.equal(state.run!.offers.length, 0, 'offers clear once a job is chosen');
});

test('return home is a no-op before the first delivery', () => {
  const state = createState(); startRun(state, 7);
  returnHome(state);
  assert.equal(state.mode, 'offers', 'still at the picker');
  assert.equal(state.run!.returning, false);
});

test('same seed produces the same distinct non-home offers', () => {
  const a = createState(), b = createState(); startCafeFlight(a, 1); startCafeFlight(b, 1);
  land(a, 'harbor-cafe'); land(b, 'harbor-cafe'); interact(a); interact(b); finishDrop(a); finishDrop(b);
  assert.deepEqual(a.run!.offers, b.run!.offers);
  assert.equal(new Set(a.run!.offers.map((job) => job.to)).size, 2);
  assert.ok(a.run!.offers.every((job) => job.from === 'harbor-cafe' && job.to !== 'home'));
  const validLabels = ['Short hop', 'Medium run', 'Long haul'];
  assert.ok(validLabels.includes(a.run!.offers[0].label), `invalid label ${a.run!.offers[0].label}`);
  assert.ok(validLabels.includes(a.run!.offers[1].label), `invalid label ${a.run!.offers[1].label}`);
});

test('delivery pays the run, cannot be repeated, and does not bank before home', () => {
  const state = createState(); startCafeFlight(state, 1); land(state, 'harbor-cafe'); interact(state); finishDrop(state);
  // harbor-cafe from home is 30m (short tier = 20 payout)
  assert.equal(state.run!.earnings, 20); assert.equal(state.profile.coins, 0); assert.equal(state.profile.deliveries, 1);
  interact(state);
  assert.equal(state.run!.earnings, 20); assert.equal(state.profile.deliveries, 1);
});

test('choosing an offer resumes flight with that job', () => {
  const state = createState(); startCafeFlight(state, 1); land(state, 'harbor-cafe'); interact(state); finishDrop(state);
  const picked = state.run!.offers[1]; chooseJob(state, 1);
  assert.equal(state.mode, 'flight'); assert.deepEqual(state.run!.job, picked); assert.equal(state.run!.returning, false);
});

test('offers advance clock while paused clock does not', () => {
  const state = createState(); startCafeFlight(state, 1); land(state, 'harbor-cafe'); interact(state); finishDrop(state);
  step(state, input, 1); assert.equal(state.run!.elapsed, 1);
  setPaused(state, true, 'menu'); step(state, input, 10); assert.equal(state.run!.elapsed, 1);
});

test('deadline allows banking at 359.99 but rescues at 360', () => {
  const early = createState(); startCafeFlight(early, 1); land(early, 'harbor-cafe'); interact(early); finishDrop(early);
  returnHome(early); early.run!.elapsed = 359.99; land(early, 'home'); interact(early); finishDrop(early);
  assert.equal(early.mode, 'home', 'banking just before the deadline lands at home'); assert.equal(early.summary, null); assert.equal(early.profile.coins, 20);
  const late = createState(); startCafeFlight(late, 1); land(late, 'harbor-cafe'); interact(late); finishDrop(late);
  late.profile.coins = 17; returnHome(late); late.run!.elapsed = 360; land(late, 'home'); interact(late);
  assert.equal(late.summary?.success, false); assert.equal(late.profile.coins, 17);
});

test('drop is eligible anywhere in the column above the pad', () => {
  const state = createState(); startCafeFlight(state, 1); above(state, 'harbor-cafe', 40);
  assert.equal(nearestStop(state)?.id, 'harbor-cafe');
  interact(state);
  assert.ok(state.descent, 'manual press starts the descent high in the column');
  assert.equal(state.mode, 'flight', 'delivery resolves after the descent and landing animation, not instantly');
  finishDrop(state);
  assert.equal(state.run!.earnings, 20); assert.equal(state.mode, 'offers');
  assert.equal(state.message, 'Delivered! Choose the next parcel or return home.');
});

test('drop is not eligible outside the column, below the pad, or at speed', () => {
  const state = createState(); startCafeFlight(state, 1);
  const stop = STOPS.find((s) => s.id === 'harbor-cafe')!;
  state.player.position = { x: stop.position.x + 20, y: stop.position.y + 40, z: stop.position.z };
  state.player.speed = 0; state.player.hover = true;
  interact(state);
  assert.equal(state.drop, null, 'outside the column: no drop');
  state.player.position = { x: stop.position.x, y: stop.position.y - 2, z: stop.position.z };
  interact(state);
  assert.equal(state.drop, null, 'below the pad: no drop');
  above(state, 'harbor-cafe', 40); state.player.speed = 10; state.player.hover = false;
  interact(state);
  assert.equal(state.drop, null, 'moving too fast: no drop');
  assert.equal(state.run!.earnings, 0); assert.equal(state.mode, 'flight');
});

test('delivery payout is identical regardless of drop height', () => {
  const low = createState(); startCafeFlight(low, 1); above(low, 'harbor-cafe', 3);
  const high = createState(); startCafeFlight(high, 1); above(high, 'harbor-cafe', 60);
  interact(low); interact(high); finishDrop(low); finishDrop(high);
  assert.equal(low.run!.earnings, 20); assert.equal(high.run!.earnings, 20);
});

test('interact during a descent is ignored', () => {
  const state = createState(); startCafeFlight(state, 1); above(state, 'harbor-cafe', 40);
  interact(state);
  const first = state.descent!;
  interact(state);
  assert.equal(state.descent, first, 'a second interact must not restart the descent');
  finishDrop(state);
  assert.equal(state.run!.deliveries, 1); assert.equal(state.run!.earnings, 20);
});

test('pausing freezes the descent', () => {
  const state = createState(); startCafeFlight(state, 1); above(state, 'harbor-cafe', 40);
  interact(state);
  step(state, input, 0.5);
  assert.ok(state.descent, 'descent should be underway');
  const y = state.player.position.y;
  assert.ok(y < CAFE.position.y + 40, `descent should be lowering Meg, y=${y}`);
  setPaused(state, true, 'menu');
  step(state, input, 10);
  assert.equal(state.player.position.y, y, 'descent must not advance while paused');
  assert.ok(state.descent, 'descent must survive the pause');
  setPaused(state, false);
  finishDrop(state);
  assert.equal(state.mode, 'offers'); assert.equal(state.run!.earnings, 20);
});

test('pausing freezes the drop animation', () => {
  const state = createState(); startCafeFlight(state, 1); above(state, 'harbor-cafe', 3);
  interact(state);
  finishDescent(state);
  step(state, input, 0.5);
  const t = state.drop!.t;
  assert.ok(t > 0 && t < 0.9, `drop should be mid-animation, got t=${t}`);
  setPaused(state, true, 'menu');
  step(state, input, 10);
  assert.equal(state.drop!.t, t, 'drop timer must not advance while paused');
  assert.equal(state.mode, 'flight');
  setPaused(state, false);
  finishDrop(state);
  assert.equal(state.mode, 'offers'); assert.equal(state.run!.earnings, 20);
});

test('tutorial practice drop lands before practice completes', () => {
  const state = createState(); startTutorial(state);
  state.tutorialStage = 2;
  above(state, 'harbor-cafe', 40);
  interact(state);
  assert.ok(state.descent, 'practice descent starts high in the column');
  assert.equal(state.profile.tutorialDone, false, 'practice completes when the parcel lands, not at press');
  finishDrop(state);
  assert.equal(state.profile.tutorialDone, true);
  assert.equal(state.mode, 'title'); assert.equal(state.tutorialStage, 3);
});

test('settlement is idempotent and a return home banks once', () => {
  const state = createState(); startRun(state, 7); state.run!.earnings = 35; returnHome(state); land(state, 'home'); interact(state);
  settleRun(state, true);
  assert.equal(state.profile.coins, 35); assert.equal(state.profile.runs, 1); assert.equal(state.player.hover, true);
  assert.equal(state.player.speed, 0); assert.deepEqual(state.player.velocity, { x: 0, y: 0, z: 0 });
});
