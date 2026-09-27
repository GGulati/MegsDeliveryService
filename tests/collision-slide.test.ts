import assert from 'node:assert/strict';
import test from 'node:test';
import { createState, step } from '../src/simulation';

const idle = { turn: 0, climb: 0, throttle: 0 };

type State = ReturnType<typeof createState>;

/**
 * Brake-free flight near the harbor-cafe building
 * (x in [-94, -66], z in [136, 164], top y = 16.12; expanded by RADIUS = 1).
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
  nearCafe(state, -110, 10, 150, Math.PI / 2 - 0.3, 10);
  // Step until contact with the west face (expanded x = -60).
  for (let i = 0; i < 600 && state.player.position.x < -95.01; i++) step(state, idle, 1 / 60);
  assert.ok(state.player.position.x >= -95.01, `should reach the wall, x=${state.player.position.x}`);
  const zAtContact = state.player.position.z;
  stepMany(state, 1);
  const slid = zAtContact - state.player.position.z;
  assert.ok(slid > 2, `should slide along the wall after contact, slid=${slid.toFixed(2)}`);
  assert.ok(state.player.position.x >= -95.01, `should not penetrate the wall, x=${state.player.position.x}`);
});

test('turning while pinned against a wall produces motion instead of freezing', () => {
  const state = createState();
  nearCafe(state, -95.5, 10, 150, Math.PI / 2, 10);
  stepMany(state, 0.5); // pin against the west face
  assert.ok(state.player.position.x >= -95.01, `should be pinned, x=${state.player.position.x}`);
  const pinned = { ...state.player.position };
  // Turn ~30 degrees (still partly facing into the wall) while holding throttle.
  stepMany(state, 0.5, { turn: 0.5, climb: 0, throttle: 1 });
  const moved = Math.hypot(state.player.position.x - pinned.x, state.player.position.z - pinned.z);
  assert.ok(moved > 1, `turning while pinned should slide the drone, moved=${moved.toFixed(2)}`);
});

test('a head-on hit still stops at the wall without tunneling through', () => {
  const state = createState();
  nearCafe(state, -110, 10, 150, Math.PI / 2, 10);
  stepMany(state, 2);
  assert.ok(state.player.position.x >= -95.01 && state.player.position.x < -94,
    `should rest against the wall, x=${state.player.position.x}`);
});

test('sliding rounds the building corner instead of sticking to it', () => {
  const state = createState();
  // Aim at the west face slightly south of the corner so the slide runs +z past it.
  nearCafe(state, -110, 10, 145, Math.PI / 2 + 0.5, 10);
  stepMany(state, 8);
  assert.ok(state.player.position.z > 165, `should slide past the north edge, z=${state.player.position.z.toFixed(2)}`);
  assert.ok(state.player.position.x >= -95.01, `should not cut into the building, x=${state.player.position.x.toFixed(2)}`);
});

test('climbing while pinned against a wall slides upward', () => {
  const state = createState();
  nearCafe(state, -95.5, 10, 150, Math.PI / 2, 10);
  stepMany(state, 0.5); // pin against the west face
  const y0 = state.player.position.y;
  stepMany(state, 1, { turn: 0, climb: 1, throttle: 1 });
  assert.ok(state.player.position.y - y0 > 1, `should climb along the wall, rose=${(state.player.position.y - y0).toFixed(2)}`);
  assert.ok(state.player.position.x >= -95.01, `should not penetrate the wall, x=${state.player.position.x}`);
});

test('velocity reflects actual motion while pinned, not attempted motion', () => {
  const state = createState();
  nearCafe(state, -110, 10, 150, Math.PI / 2, 10);
  stepMany(state, 2);
  assert.ok(state.player.position.x >= -95.01, `should be pinned, x=${state.player.position.x}`);
  const speed = Math.hypot(state.player.velocity.x, state.player.velocity.y, state.player.velocity.z);
  assert.ok(speed < 0.5, `pinned velocity should read ~0, got ${speed.toFixed(2)}`);
});

test('de-penetration pushes the player out when starting inside a solid', () => {
  const state = createState();
  // Place Meg inside the harbor-cafe building solid (x[-94,-66], y[0.12,16.12], z[136,164]).
  nearCafe(state, -80, 10, 150, 0, 0);
  step(state, idle, 0.016);
  const p = state.player.position;
  // Expanded by RADIUS=1: x[-95,-65], y[-0.88,17.12], z[135,165]. Closest face from (-80,10,150)
  // is... all interior; must be pushed to a face.
  const insideX = p.x > -95 && p.x < -65;
  const insideY = p.y > -0.88 && p.y < 17.12;
  const insideZ = p.z > 135 && p.z < 165;
  assert.ok(!(insideX && insideY && insideZ), `still inside solid at (${p.x},${p.y},${p.z})`);
});

test('de-penetration resolves a narrow-gap wedge', () => {
  const state = createState();
  // Simulate a wedge: place Meg in the 3m corridor between two upper-tier
  // bungalows (solids 19 and 20) and step — she must not remain intersecting.
  state.mode = 'flight';
  state.player.position = { x: 59, y: 24, z: -177.5 }; // between solid 19 and 20
  state.player.yaw = 0; state.player.speed = 0; state.player.throttle = 0;
  state.player.hover = false; state.player.velocity = { x: 0, y: 0, z: 0 };
  step(state, idle, 0.016);
  const p = state.player.position;
  // After de-penetration she must be out of both expanded boxes.
  // Solid 19: x[42.5,57.5] y[20,28] z[-185,-170] → expanded x[41.5,58.5] y[19,29] z[-186,-169].
  // Solid 20: x[60.5,75.5] y[20,27] z[-185,-170] → expanded x[59.5,76.5] y[19,28] z[-186,-169].
  const in19 = p.x > 41.5 && p.x < 58.5 && p.y > 19 && p.y < 29 && p.z > -186 && p.z < -169;
  const in20 = p.x > 59.5 && p.x < 76.5 && p.y > 19 && p.y < 28 && p.z > -186 && p.z < -169;
  assert.ok(!in19 && !in20, `stuck in gap at (${p.x},${p.y},${p.z})`);
});

test('iterated sweep slides through a narrow corridor without penetrating', () => {
  const state = createState();
  // Fly along the 3m bungalow corridor (x ~ 59 between solid 19 and 20).
  // The corridor is 3m wide, player 2m — she should slide through, never
  // ending a frame inside either expanded box.
  state.mode = 'flight';
  state.player.position = { x: 59, y: 24, z: -160 };
  state.player.yaw = 0; // yaw 0 = facing -z
  state.player.speed = 8; state.player.throttle = 8;
  state.player.hover = false; state.player.velocity = { x: 0, y: 0, z: 0 };
  // Step several frames moving in -z through the corridor region z -170..-185.
  for (let i = 0; i < 30; i++) {
    step(state, idle, 0.016);
    const p = state.player.position;
    const in19 = p.x > 41.5 && p.x < 58.5 && p.y > 19 && p.y < 29 && p.z > -186 && p.z < -169;
    const in20 = p.x > 59.5 && p.x < 76.5 && p.y > 19 && p.y < 28 && p.z > -186 && p.z < -169;
    assert.ok(!in19 && !in20, `penetrated on frame ${i} at (${p.x.toFixed(2)},${p.y.toFixed(2)},${p.z.toFixed(2)})`);
  }
});
