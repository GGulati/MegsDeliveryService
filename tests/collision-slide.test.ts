import assert from 'node:assert/strict';
import test from 'node:test';
import { createState, step } from '../src/simulation';

const idle = { turn: 0, climb: 0, throttle: 0 };

type State = ReturnType<typeof createState>;

/**
 * Brake-free flight near the harbor-cafe building
 * (x in [-59, -31], z in [51, 79], top y = 16; expanded by RADIUS = 1).
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
  nearCafe(state, -75, 10, 65, Math.PI / 2 - 0.3, 10);
  // Step until contact with the west face (expanded x = -60).
  for (let i = 0; i < 600 && state.player.position.x < -60.01; i++) step(state, idle, 1 / 60);
  assert.ok(state.player.position.x >= -60.01, `should reach the wall, x=${state.player.position.x}`);
  const zAtContact = state.player.position.z;
  stepMany(state, 1);
  const slid = zAtContact - state.player.position.z;
  assert.ok(slid > 2, `should slide along the wall after contact, slid=${slid.toFixed(2)}`);
  assert.ok(state.player.position.x >= -60.01, `should not penetrate the wall, x=${state.player.position.x}`);
});

test('turning while pinned against a wall produces motion instead of freezing', () => {
  const state = createState();
  nearCafe(state, -60.5, 10, 65, Math.PI / 2, 10);
  stepMany(state, 0.5); // pin against the west face
  assert.ok(state.player.position.x >= -60.01, `should be pinned, x=${state.player.position.x}`);
  const pinned = { ...state.player.position };
  // Turn ~30 degrees (still partly facing into the wall) while holding throttle.
  stepMany(state, 0.5, { turn: 0.5, climb: 0, throttle: 1 });
  const moved = Math.hypot(state.player.position.x - pinned.x, state.player.position.z - pinned.z);
  assert.ok(moved > 1, `turning while pinned should slide the drone, moved=${moved.toFixed(2)}`);
});

test('a head-on hit still stops at the wall without tunneling through', () => {
  const state = createState();
  nearCafe(state, -75, 10, 65, Math.PI / 2, 10);
  stepMany(state, 2);
  assert.ok(state.player.position.x >= -60.01 && state.player.position.x < -59,
    `should rest against the wall, x=${state.player.position.x}`);
});

test('sliding rounds the building corner instead of sticking to it', () => {
  const state = createState();
  // Aim at the west face slightly south of the corner so the slide runs +z past it.
  nearCafe(state, -75, 10, 60, Math.PI / 2 + 0.5, 10);
  stepMany(state, 8);
  assert.ok(state.player.position.z > 80, `should slide past the north edge, z=${state.player.position.z.toFixed(2)}`);
  assert.ok(state.player.position.x >= -60.01, `should not cut into the building, x=${state.player.position.x.toFixed(2)}`);
});

test('climbing while pinned against a wall slides upward', () => {
  const state = createState();
  nearCafe(state, -60.5, 10, 65, Math.PI / 2, 10);
  stepMany(state, 0.5); // pin against the west face
  const y0 = state.player.position.y;
  stepMany(state, 1, { turn: 0, climb: 1, throttle: 1 });
  assert.ok(state.player.position.y - y0 > 1, `should climb along the wall, rose=${(state.player.position.y - y0).toFixed(2)}`);
  assert.ok(state.player.position.x >= -60.01, `should not penetrate the wall, x=${state.player.position.x}`);
});

test('velocity reflects actual motion while pinned, not attempted motion', () => {
  const state = createState();
  nearCafe(state, -75, 10, 65, Math.PI / 2, 10);
  stepMany(state, 2);
  assert.ok(state.player.position.x >= -60.01, `should be pinned, x=${state.player.position.x}`);
  const speed = Math.hypot(state.player.velocity.x, state.player.velocity.y, state.player.velocity.z);
  assert.ok(speed < 0.5, `pinned velocity should read ~0, got ${speed.toFixed(2)}`);
});

test('de-penetration pushes the player out when starting inside a solid', () => {
  const state = createState();
  // Place Meg inside the harbor-cafe building solid (x[-59,-31], y[3,16], z[51,79]).
  nearCafe(state, -45, 10, 65, 0, 0);
  step(state, idle, 0.016);
  const p = state.player.position;
  // Expanded by RADIUS=1: x[-60,-30], y[2,17], z[50,80]. Closest face from (-45,10,65)
  // is... all interior; must be pushed to a face.
  const insideX = p.x > -60 && p.x < -30;
  const insideY = p.y > 2 && p.y < 17;
  const insideZ = p.z > 50 && p.z < 80;
  assert.ok(!(insideX && insideY && insideZ), `still inside solid at (${p.x},${p.y},${p.z})`);
});

test('de-penetration resolves a narrow-gap wedge', () => {
  const state = createState();
  // Simulate a wedge: place Meg in the 3m corridor between two merchant-row
  // buildings and step — she must not remain intersecting.
  state.mode = 'flight';
  state.player.position = { x: -57.5, y: 8, z: 27.5 }; // between solid 0 and 16
  state.player.yaw = 0; state.player.speed = 0; state.player.throttle = 0;
  state.player.hover = false; state.player.velocity = { x: 0, y: 0, z: 0 };
  step(state, idle, 0.016);
  const p = state.player.position;
  // After de-penetration she must be out of both expanded boxes.
  const in0 = p.x > -83 && p.x < -57 && p.y > 2 && p.y < 19 && p.z > 27 && p.z < 53;
  const in16 = p.x > -56 && p.x < -39 && p.y > 2 && p.y < 12 && p.z > 19 && p.z < 36;
  assert.ok(!in0 && !in16, `stuck in gap at (${p.x},${p.y},${p.z})`);
});

test('iterated sweep slides through a narrow corridor without penetrating', () => {
  const state = createState();
  // Fly along the 3m merchant-row corridor (x ~ -57.5 between solid 0 and 16).
  // The corridor is 3m wide, player 2m — she should slide through, never
  // ending a frame inside either expanded box.
  state.mode = 'flight';
  state.player.position = { x: -57.5, y: 8, z: 10 };
  state.player.yaw = Math.PI; // facing +z? yaw 0 = -z; use yaw PI for +z
  state.player.yaw = 0;
  state.player.speed = 8; state.player.throttle = 8;
  state.player.hover = false; state.player.velocity = { x: 0, y: 0, z: 0 };
  // Step several frames moving in -z through the corridor region z 27..36.
  for (let i = 0; i < 30; i++) {
    step(state, idle, 0.016);
    const p = state.player.position;
    const in0 = p.x > -83 && p.x < -57 && p.y > 2 && p.y < 19 && p.z > 27 && p.z < 53;
    const in16 = p.x > -56 && p.x < -39 && p.y > 2 && p.y < 12 && p.z > 19 && p.z < 36;
    assert.ok(!in0 && !in16, `penetrated on frame ${i} at (${p.x.toFixed(2)},${p.y.toFixed(2)},${p.z.toFixed(2)})`);
  }
});
