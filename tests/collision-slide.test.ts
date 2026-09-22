import assert from 'node:assert/strict';
import test from 'node:test';
import { createState, step } from '../src/simulation';

const idle = { turn: 0, climb: 0, throttle: 0 };

type State = ReturnType<typeof createState>;

/**
 * Brake-free flight near the harbor-cafe building
 * (x in [-14, 14], z in [41, 69], top y = 16; expanded by RADIUS = 1).
 */
function nearCafe(state: State, x: number, y: number, z: number, yaw: number, speed: number): void {
  state.mode = 'flight';
  state.player.position = { x, y, z };
  state.player.yaw = yaw;
  state.player.speed = speed;
  state.player.throttle = speed;
  state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 0 };
}

function stepMany(state: State, seconds: number, input = idle): void {
  const n = Math.ceil(seconds * 60);
  for (let i = 0; i < n; i++) step(state, input, 1 / 60);
}

test('a glancing hit slides along the wall instead of stopping dead', () => {
  const state = createState();
  nearCafe(state, -30, 10, 55, Math.PI / 2 - 0.3, 10);
  // Step until contact with the west face (expanded x = -15).
  for (let i = 0; i < 600 && state.player.position.x < -15.01; i++) step(state, idle, 1 / 60);
  assert.ok(state.player.position.x >= -15.01, `should reach the wall, x=${state.player.position.x}`);
  const zAtContact = state.player.position.z;
  stepMany(state, 1);
  const slid = zAtContact - state.player.position.z;
  assert.ok(slid > 2, `should slide along the wall after contact, slid=${slid.toFixed(2)}`);
  assert.ok(state.player.position.x >= -15.01, `should not penetrate the wall, x=${state.player.position.x}`);
});

test('turning while pinned against a wall produces motion instead of freezing', () => {
  const state = createState();
  nearCafe(state, -15.5, 10, 55, Math.PI / 2, 10);
  stepMany(state, 0.5); // pin against the west face
  assert.ok(state.player.position.x >= -15.01, `should be pinned, x=${state.player.position.x}`);
  const pinned = { ...state.player.position };
  // Turn ~30 degrees (still partly facing into the wall) while holding throttle.
  stepMany(state, 0.5, { turn: 0.5, climb: 0, throttle: 1 });
  const moved = Math.hypot(state.player.position.x - pinned.x, state.player.position.z - pinned.z);
  assert.ok(moved > 1, `turning while pinned should slide the drone, moved=${moved.toFixed(2)}`);
});

test('a head-on hit still stops at the wall without tunneling through', () => {
  const state = createState();
  nearCafe(state, -30, 10, 55, Math.PI / 2, 10);
  stepMany(state, 2);
  assert.ok(state.player.position.x >= -15.01 && state.player.position.x < -14,
    `should rest against the wall, x=${state.player.position.x}`);
});

test('sliding rounds the building corner instead of sticking to it', () => {
  const state = createState();
  // Aim at the west face slightly south of the corner so the slide runs +z past it.
  nearCafe(state, -30, 10, 45, Math.PI / 2 + 0.5, 10);
  stepMany(state, 8);
  assert.ok(state.player.position.z > 70, `should slide past the north edge, z=${state.player.position.z.toFixed(2)}`);
  assert.ok(state.player.position.x >= -15.01, `should not cut into the building, x=${state.player.position.x.toFixed(2)}`);
});

test('climbing while pinned against a wall slides upward', () => {
  const state = createState();
  nearCafe(state, -15.5, 10, 55, Math.PI / 2, 10);
  stepMany(state, 0.5); // pin against the west face
  const y0 = state.player.position.y;
  stepMany(state, 1, { turn: 0, climb: 1, throttle: 1 });
  assert.ok(state.player.position.y - y0 > 1, `should climb along the wall, rose=${(state.player.position.y - y0).toFixed(2)}`);
  assert.ok(state.player.position.x >= -15.01, `should not penetrate the wall, x=${state.player.position.x}`);
});

test('velocity reflects actual motion while pinned, not attempted motion', () => {
  const state = createState();
  nearCafe(state, -30, 10, 55, Math.PI / 2, 10);
  stepMany(state, 2);
  assert.ok(state.player.position.x >= -15.01, `should be pinned, x=${state.player.position.x}`);
  const speed = Math.hypot(state.player.velocity.x, state.player.velocity.y, state.player.velocity.z);
  assert.ok(speed < 0.5, `pinned velocity should read ~0, got ${speed.toFixed(2)}`);
});
