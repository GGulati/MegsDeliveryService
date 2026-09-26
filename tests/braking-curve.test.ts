import assert from 'node:assert/strict';
import test from 'node:test';
import { brakeDecel, createState, startTutorial, step } from '../src/simulation';

// The drone under test: parked far north of Harbor Cafe, facing further
// north, so the arrival auto-brake never engages and we measure only the
// manual braking curve.
function brakingState(speed: number) {
  const state = createState();
  startTutorial(state);
  state.player.position = { x: 0, y: 60, z: -150 };
  state.player.yaw = 0;
  state.player.speed = speed;
  state.player.throttle = 0;
  state.player.hover = false;
  return state;
}
const IDLE = { turn: 0, climb: 0, throttle: 0 };

test('braking bites harder at speed and eases off as the drone slows', () => {
  // Pure curve shape: the decel rate itself must fall with speed.
  assert.ok(brakeDecel(18, 0) > brakeDecel(9, 0), 'more bite at full speed than mid speed');
  assert.ok(brakeDecel(9, 0) > brakeDecel(1, 0), 'more bite at mid speed than crawling');
});

test('one step sheds more speed from full speed than from mid speed', () => {
  const fast = brakingState(18); step(fast, IDLE, 1 / 60);
  const mid = brakingState(9); step(mid, IDLE, 1 / 60);
  const shedFast = 18 - fast.player.speed, shedMid = 9 - mid.player.speed;
  assert.ok(shedFast > shedMid, `fast shed ${shedFast} vs mid shed ${shedMid}`);
});

test('a stop from full speed takes time and always completes', () => {
  const state = brakingState(18);
  let t = 0;
  while (state.player.speed > 0 && t < 10) { step(state, IDLE, 1 / 60); t += 1 / 60; }
  assert.equal(state.player.speed, 0, 'comes to a complete rest, no asymptotic creep');
  assert.ok(t > 1.5, `stop takes time (took ${t.toFixed(2)}s; the old wall-stop took 1.0s)`);
  assert.ok(t < 4, `stop still completes promptly (took ${t.toFixed(2)}s)`);
});

test('the braking upgrade still strengthens the curve', () => {
  assert.ok(brakeDecel(12, 2) > brakeDecel(12, 0), 'upgrades scale the curve');
});

test('acceleration is untouched by the braking curve', () => {
  // Full throttle builds the cruise trim at THROTTLE_RATE (7/s); speed chases
  // it upward at ACCELERATION. After 1s both should sit at ~7 — the braking
  // change must not have altered the positive side of the chase.
  const state = brakingState(0);
  for (let i = 0; i < 60; i++) step(state, { turn: 0, climb: 0, throttle: 1 }, 1 / 60);
  assert.ok(Math.abs(state.player.speed - 7) < 0.6, `speed tracks trim up, got ${state.player.speed}`);
});
