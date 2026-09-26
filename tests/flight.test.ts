import assert from 'node:assert/strict';
import test from 'node:test';
import { createState, interact, nearestStop, setPaused, startTutorial, step, toggleHover } from '../src/simulation';
import { STOPS } from '../src/world';

test('yaw zero heads north (negative z) and right turn heads positive x', () => {
  const state = createState(); startTutorial(state);
  const z = state.player.position.z; step(state, { turn: 0, climb: 0, throttle: 0 }, .1);
  assert.ok(state.player.position.z < z);
  step(state, { turn: 1, climb: 0, throttle: 0 }, .5);
  assert.ok(state.player.velocity.x > 0);
});

test('hover brakes to a stable hold', () => {
  const state = createState(); startTutorial(state); toggleHover(state);
  for (let i = 0; i < 10; i++) step(state, { turn: 0, climb: 0, throttle: 0 }, .1);
  const before = { ...state.player.position }; step(state, { turn: 0, climb: 0, throttle: 0 }, .1);
  assert.equal(state.player.speed, 0); assert.deepEqual(state.player.position, before);
});

test('paused flight does not move', () => {
  const state = createState(); startTutorial(state); setPaused(state, true, 'menu'); const before = { ...state.player.position };
  step(state, { turn: 1, climb: 1, throttle: 1 }, 1); assert.deepEqual(state.player.position, before);
});

test('paused hover and interaction do not mutate tutorial state', () => {
  const state = createState(); startTutorial(state);
  state.tutorialStage = 2; state.player.position = { ...STOPS[1].position }; state.player.speed = 0;
  setPaused(state, true, 'menu'); const revision = state.revision;
  toggleHover(state); interact(state);
  assert.equal(state.player.hover, false); assert.equal(state.profile.tutorialDone, false);
  assert.equal(state.mode, 'tutorial'); assert.equal(state.revision, revision);
});

test('swept collision cannot tunnel through a destination wall', () => {
  const state = createState(); startTutorial(state);
  // Harbor Cafe's south face is z=69 (expanded to 70 for the player sphere).
  state.player.position = { x: 0, y: 16, z: 72.5 }; state.player.speed = 18; state.player.throttle = 18;
  step(state, { turn: 0, climb: 0, throttle: 0 }, 1);
  assert.ok(state.player.position.z >= 69.99);
});

test('tutorial completes by interacting on the first destination', () => {
  const state = createState(); startTutorial(state); step(state, { turn: 0, climb: 0, throttle: 0 }, .1); toggleHover(state);
  state.player.position = { ...STOPS[1].position }; state.player.speed = 0;
  assert.equal(nearestStop(state)?.id, 'harbor-cafe'); interact(state);
  assert.ok(state.descent, 'practice descent starts, not applied instantly');
  for (let i = 0; i < 3600 && (state.descent || state.drop); i++) step(state, { turn: 0, climb: 0, throttle: 0 }, 1 / 60);
  assert.equal(state.profile.tutorialDone, true); assert.equal(state.message, 'Practice complete');
});
