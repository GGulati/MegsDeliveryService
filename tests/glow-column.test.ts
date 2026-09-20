import assert from 'node:assert/strict';
import test from 'node:test';
import { chooseJob, createState, glowColumnTarget, interact, returnHome, startRun, startTutorial, step } from '../src/simulation';
import { STOPS } from '../src/world';

const input = { turn: 0, climb: 0, throttle: 0 };

function land(state: ReturnType<typeof createState>, id: string): void {
  state.player.position = { ...STOPS.find((stop) => stop.id === id)!.position };
  state.player.speed = 0;
  state.player.hover = true;
}

/** Steps until a committed drop's landing animation resolves. */
function finishDrop(state: ReturnType<typeof createState>): void {
  for (let i = 0; i < 120 && state.drop; i++) step(state, input, 1 / 60);
  assert.equal(state.drop, null, 'committed drop should resolve');
}

test('no column on title with no delivery', () => {
  assert.equal(glowColumnTarget(createState()), undefined);
});

test('no column in home mode', () => {
  const state = createState();
  state.mode = 'home';
  assert.equal(glowColumnTarget(state), undefined);
});

test('tutorial marks Harbor Cafe from the start', () => {
  const state = createState();
  startTutorial(state);
  assert.equal(glowColumnTarget(state)?.id, 'harbor-cafe');
});

test('active flight job marks its stop', () => {
  const state = createState();
  startRun(state, 7);
  assert.equal(glowColumnTarget(state)?.id, 'harbor-cafe');
});

test('column follows a newly chosen job', () => {
  const state = createState();
  startRun(state, 7);
  land(state, 'harbor-cafe');
  interact(state);
  finishDrop(state);
  assert.equal(state.mode, 'offers');
  const to = state.run!.offers[0].to;
  chooseJob(state, 0);
  assert.equal(state.mode, 'flight');
  assert.equal(glowColumnTarget(state)?.id, to);
});

test('column marks home when returning to bank', () => {
  const state = createState();
  startRun(state, 7);
  land(state, 'harbor-cafe');
  interact(state);
  finishDrop(state);
  returnHome(state);
  assert.equal(glowColumnTarget(state)?.id, 'home');
});

test('column hides after the delivery completes', () => {
  const state = createState();
  startRun(state, 7);
  assert.ok(glowColumnTarget(state), 'column visible while carrying the parcel');
  land(state, 'harbor-cafe');
  interact(state);
  finishDrop(state);
  assert.equal(state.mode, 'offers');
  assert.equal(glowColumnTarget(state), undefined);
});

test('column hides in offers and summary modes', () => {
  const state = createState();
  startRun(state, 7);
  state.mode = 'offers';
  assert.equal(glowColumnTarget(state), undefined);
  state.mode = 'summary';
  assert.equal(glowColumnTarget(state), undefined);
});

test('flight with no run marks nothing', () => {
  const state = createState();
  state.mode = 'flight';
  assert.equal(glowColumnTarget(state), undefined);
});
