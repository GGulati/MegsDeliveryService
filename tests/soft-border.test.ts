import assert from 'node:assert/strict';
import test from 'node:test';
import { createState, startTutorial, step } from '../src/simulation';
import { WORLD_LIMIT } from '../src/world';

// Soft border: outward motion bleeds off across a band inside the world limit
// (softR = WORLD_LIMIT - 1 - 45 = 129), so the edge feels like a gentle
// current rather than a wall. The hard clamp stays as the backstop.

/** Tutorial-mode state with the drone placed and aimed; speed pinned at cruise. */
function borderState(x: number, z: number, yaw: number) {
  const state = createState(); startTutorial(state);
  state.player.position = { x, y: 20, z };
  state.player.yaw = yaw;
  state.player.speed = 18; state.player.throttle = 18;
  return state;
}

const NEUTRAL = { turn: 0, climb: 0, throttle: 0 };

test('outward motion bleeds off inside the soft border band', () => {
  // (160, 0), aimed straight out (+x). Undamped cruise would cover 18m in 1s;
  // the soft border should cut that to well under half.
  const state = borderState(160, 0, Math.PI / 2);
  step(state, NEUTRAL, 1);
  const moved = state.player.position.x - 160;
  assert.ok(moved > 0, 'still makes outward progress (no wall)');
  assert.ok(moved < 9, `outward progress damped, moved ${moved.toFixed(2)}m`);
});

test('a full-speed outward run cannot cross the world limit', () => {
  const state = borderState(165, 0, Math.PI / 2);
  for (let i = 0; i < 20; i++) step(state, NEUTRAL, 0.5);
  assert.ok(state.player.position.x > 165, 'still drifts outward, never stuck');
  assert.ok(state.player.position.x <= WORLD_LIMIT - 1 + 0.01,
    `hard limit holds: x=${state.player.position.x.toFixed(2)}`);
});

test('tangential flight inside the soft band is untouched', () => {
  // (160, 0), aimed along +z — pure tangential, zero outward component.
  const state = borderState(160, 0, Math.PI);
  step(state, NEUTRAL, 1);
  assert.ok(Math.abs(state.player.position.x - 160) < 0.01, 'no radial drift');
  assert.ok(Math.abs(state.player.position.z - 18) < 0.5,
    `tangential cruise unaffected: z=${state.player.position.z.toFixed(2)}`);
});

test('flight deep inside town is unaffected by the border', () => {
  const state = borderState(0, 0, Math.PI / 2);
  step(state, NEUTRAL, 1);
  assert.ok(Math.abs(state.player.position.x - 18) < 0.5,
    `town-center cruise unaffected: x=${state.player.position.x.toFixed(2)}`);
});

test('inward flight inside the soft band is untouched', () => {
  // (160, 0), aimed back at town (-x): the border only resists outward motion.
  const state = borderState(160, 0, -Math.PI / 2);
  step(state, NEUTRAL, 1);
  assert.ok(Math.abs(state.player.position.x - 142) < 0.5,
    `inward cruise unaffected: x=${state.player.position.x.toFixed(2)}`);
});
