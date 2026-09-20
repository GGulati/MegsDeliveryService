import assert from 'node:assert/strict';
import test from 'node:test';
import { chooseJob, createState, interact, nearestStop, returnHome, setPaused, settleRun, startRun, startTutorial, step } from '../src/simulation';
import { STOPS } from '../src/world';

const input = { turn: 0, climb: 0, throttle: 0 };

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

/** Steps until a committed drop's landing animation resolves. */
function finishDrop(state: ReturnType<typeof createState>): void {
  for (let i = 0; i < 120 && state.drop; i++) step(state, input, 1 / 60);
  assert.equal(state.drop, null, 'committed drop should resolve');
}

test('same seed produces the same distinct non-home offers', () => {
  const a = createState(), b = createState(); startRun(a, 42); startRun(b, 42);
  land(a, 'harbor-cafe'); land(b, 'harbor-cafe'); interact(a); interact(b); finishDrop(a); finishDrop(b);
  assert.deepEqual(a.run!.offers, b.run!.offers);
  assert.equal(new Set(a.run!.offers.map((job) => job.to)).size, 2);
  assert.ok(a.run!.offers.every((job) => job.from === 'harbor-cafe' && job.to !== 'home'));
  assert.equal(a.run!.offers[0].label, 'Short hop');
  assert.equal(a.run!.offers[1].label, 'Long haul');
});

test('delivery pays the run, cannot be repeated, and does not bank before home', () => {
  const state = createState(); startRun(state, 5); land(state, 'harbor-cafe'); interact(state); finishDrop(state);
  assert.equal(state.run!.earnings, 20); assert.equal(state.profile.coins, 0); assert.equal(state.profile.deliveries, 1);
  interact(state);
  assert.equal(state.run!.earnings, 20); assert.equal(state.profile.deliveries, 1);
});

test('choosing an offer resumes flight with that job', () => {
  const state = createState(); startRun(state, 7); land(state, 'harbor-cafe'); interact(state); finishDrop(state);
  const picked = state.run!.offers[1]; chooseJob(state, 1);
  assert.equal(state.mode, 'flight'); assert.deepEqual(state.run!.job, picked); assert.equal(state.run!.returning, false);
});

test('offers advance clock while paused clock does not', () => {
  const state = createState(); startRun(state); land(state, 'harbor-cafe'); interact(state); finishDrop(state);
  step(state, input, 1); assert.equal(state.run!.elapsed, 1);
  setPaused(state, true, 'menu'); step(state, input, 10); assert.equal(state.run!.elapsed, 1);
});

test('deadline allows banking at 479.99 but rescues at 480', () => {
  const early = createState(); startRun(early); early.run!.earnings = 20; early.run!.elapsed = 479.99; land(early, 'home'); interact(early); finishDrop(early);
  assert.equal(early.summary?.success, true); assert.equal(early.profile.coins, 20);
  const late = createState(); startRun(late); late.profile.coins = 17; late.run!.earnings = 20; late.run!.elapsed = 480; land(late, 'home'); interact(late);
  assert.equal(late.summary?.success, false); assert.equal(late.profile.coins, 17);
});

test('drop is eligible anywhere in the column above the pad', () => {
  const state = createState(); startRun(state, 5); above(state, 'harbor-cafe', 40);
  assert.equal(nearestStop(state)?.id, 'harbor-cafe');
  interact(state);
  assert.ok(state.drop, 'drop should commit high in the column');
  assert.equal(state.mode, 'flight', 'delivery resolves after the landing animation, not instantly');
  finishDrop(state);
  assert.equal(state.run!.earnings, 20); assert.equal(state.mode, 'offers');
  assert.equal(state.message, 'Delivered! Choose the next parcel or return home.');
});

test('drop is not eligible outside the column, below the pad, or at speed', () => {
  const state = createState(); startRun(state, 5);
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
  const low = createState(); startRun(low, 5); above(low, 'harbor-cafe', 3);
  const high = createState(); startRun(high, 5); above(high, 'harbor-cafe', 60);
  interact(low); interact(high); finishDrop(low); finishDrop(high);
  assert.equal(low.run!.earnings, 20); assert.equal(high.run!.earnings, 20);
});

test('interact during a drop is ignored', () => {
  const state = createState(); startRun(state, 5); above(state, 'harbor-cafe', 40);
  interact(state);
  const first = state.drop!;
  interact(state);
  assert.equal(state.drop, first, 'a second interact must not restart the drop');
  finishDrop(state);
  assert.equal(state.run!.deliveries, 1); assert.equal(state.run!.earnings, 20);
});

test('pausing freezes the drop animation', () => {
  const state = createState(); startRun(state, 5); above(state, 'harbor-cafe', 40);
  interact(state);
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
  assert.ok(state.drop, 'practice drop commits high in the column');
  assert.equal(state.profile.tutorialDone, false, 'practice completes when the parcel lands, not at press');
  finishDrop(state);
  assert.equal(state.profile.tutorialDone, true);
  assert.equal(state.mode, 'title'); assert.equal(state.tutorialStage, 3);
});

test('settlement is idempotent and a return home banks once', () => {
  const state = createState(); startRun(state); state.run!.earnings = 35; state.mode = 'offers'; returnHome(state); land(state, 'home'); interact(state);
  settleRun(state, true);
  assert.equal(state.profile.coins, 35); assert.equal(state.profile.runs, 1); assert.equal(state.player.hover, true);
  assert.equal(state.player.speed, 0); assert.deepEqual(state.player.velocity, { x: 0, y: 0, z: 0 });
});
