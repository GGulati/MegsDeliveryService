import assert from 'node:assert/strict';
import test from 'node:test';
import { createState, startTutorial, step, toggleHover } from '../src/simulation';
import type { FlightInput } from '../src/types';

const idle: FlightInput = { turn: 0, climb: 0, throttle: 0 };
const drive: FlightInput = { turn: 0, climb: 0, throttle: 1 };
const release: FlightInput = { turn: 0, climb: 0, throttle: 0, cutThrottle: true };
const DT = 1 / 60;

// Spawn faces Harbor Cafe, so driving straight ahead engages the arrival
// auto-brake and confounds stop-timing asserts. Face away (south) so the
// drone flies into open sky.
function faceAway(state: ReturnType<typeof createState>): void { state.player.yaw = Math.PI; }

function stepMany(state: ReturnType<typeof createState>, n: number, input: FlightInput): void {
  for (let i = 0; i < n; i++) step(state, input, DT);
}

test('driving the stick ramps the cruise trim up like holding E', () => {
  const state = createState(); startTutorial(state); faceAway(state);
  stepMany(state, 180, drive);
  assert.ok(state.player.throttle > 10, `trim should ramp while driving, trim=${state.player.throttle}`);
  assert.ok(state.player.speed > 10, `speed should follow the trim, speed=${state.player.speed}`);
});

test('releasing the stick collapses the trim and brakes to a stop', () => {
  const state = createState(); startTutorial(state); faceAway(state);
  stepMany(state, 180, drive);
  assert.ok(state.player.speed > 10, 'precondition: moving fast');
  step(state, release, DT);
  assert.equal(state.player.throttle, 0, 'cutThrottle zeroes the cruise trim');
  stepMany(state, 180, idle);
  assert.equal(state.player.speed, 0, 'drone brakes to a stop after release');
});

test('idle samples without cutThrottle preserve the keyboard cruise trim', () => {
  // Desktop behavior is unchanged: Q/E trim persists across samples that
  // carry no release signal, so plain idle frames must not brake.
  const state = createState(); startTutorial(state); faceAway(state);
  stepMany(state, 180, drive);
  const trim = state.player.throttle;
  stepMany(state, 60, idle);
  assert.equal(state.player.throttle, trim, 'trim survives idle samples without cutThrottle');
  assert.ok(state.player.speed > 5, 'and the drone keeps flying');
});

test('tutorial stage 0 needs real motion, not turning in place', () => {
  const state = createState(); startTutorial(state);
  // Park the drone mid-air: the turn-only clause is about stick wiggle at a
  // standstill, so the test needs a standstill first.
  state.player.speed = 0; state.player.throttle = 0; state.player.velocity = { x: 0, y: 0, z: 0 };
  stepMany(state, 120, { turn: 1, climb: 0, throttle: 0 });
  assert.equal(state.tutorialStage, 0, 'spinning in place must not advance the lesson');
  stepMany(state, 120, drive);
  assert.equal(state.tutorialStage, 1, 'real motion advances to the stopping lesson');
  assert.equal(state.message, 'Press Space to slow down and hover.');
});

test('tutorial stage 1 copy is device-specific: coarse pointers release the stick', () => {
  const state = createState(); startTutorial(state);
  state.coarsePointer = true;
  state.player.speed = 0; state.player.throttle = 0; state.player.velocity = { x: 0, y: 0, z: 0 };
  stepMany(state, 120, drive);
  assert.equal(state.tutorialStage, 1, 'real motion advances to the stopping lesson');
  assert.equal(state.message, 'Release the stick to slow down and hover.');
});

test('tutorial stage 1 completes when the drone holds still', () => {
  const state = createState(); startTutorial(state); faceAway(state);
  stepMany(state, 30, drive);
  assert.equal(state.tutorialStage, 1, 'precondition: at the stopping lesson');
  step(state, release, DT);
  stepMany(state, 240, idle);
  assert.equal(state.tutorialStage, 2, 'coming to a stop completes the lesson');
  assert.equal(state.message, 'Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself.');
});

test('hover no longer advances the tutorial on its own', () => {
  const state = createState(); startTutorial(state);
  state.tutorialStage = 1;
  toggleHover(state);
  assert.equal(state.tutorialStage, 1, 'toggling hover must not skip the stopping lesson');
  assert.equal(state.player.hover, true, 'but hover itself still toggles');
});
