import test from 'node:test';
import assert from 'node:assert/strict';
import { homeCameraFrame, homeLookStep, HOME_CAM_OFFSET, HOME_LOOK_Y } from '../src/camera-motion';

// The home room previously used one fixed shot (camera at (13,14,18) looking
// at (0,2,0)), so Meg could walk off-screen. The camera now keeps that exact
// viewing angle but pans so she stays framed.

test('centered Meg reproduces the old fixed framing', () => {
  const f = homeCameraFrame(0, 0);
  assert.deepEqual(f.look, [0, HOME_LOOK_Y, 0]);
  assert.deepEqual(f.cam, [13, 14, 18]);
});

test('camera keeps its angle while tracking Meg to the room edges', () => {
  const f = homeCameraFrame(7.5, -5.5);
  assert.deepEqual(f.look, [7.5, HOME_LOOK_Y, -5.5]);
  assert.deepEqual(f.cam, [7.5 + HOME_CAM_OFFSET.x, HOME_LOOK_Y + HOME_CAM_OFFSET.y, -5.5 + HOME_CAM_OFFSET.z]);
});

test('look target clamps to the playable room so the frame never leaves it', () => {
  const f = homeCameraFrame(99, -99);
  assert.deepEqual(f.look, [7.5, HOME_LOOK_Y, -5.5]);
});

test('the viewing angle is identical for every Meg position', () => {
  for (const [x, z] of [[0, 0], [-7.5, 5.5], [3.2, -1.1], [99, 99]] as const) {
    const f = homeCameraFrame(x, z);
    assert.deepEqual(
      [f.cam[0] - f.look[0], f.cam[1] - f.look[1], f.cam[2] - f.look[2]],
      [HOME_CAM_OFFSET.x, HOME_CAM_OFFSET.y, HOME_CAM_OFFSET.z],
      `offset drifted at (${x}, ${z})`
    );
  }
});

test('look target snaps on entering home', () => {
  assert.deepEqual(homeLookStep([0, 0], [5, -3], true, 1 / 60, false), [5, -3]);
});

test('look target snaps under reduced motion instead of easing', () => {
  assert.deepEqual(homeLookStep([0, 0], [5, -3], false, 1 / 60, true), [5, -3]);
});

test('look target freezes while paused', () => {
  assert.deepEqual(homeLookStep([1, 2], [5, -3], false, 0, false), [1, 2]);
});

test('look target eases toward Meg without overshooting, then converges', () => {
  let cur: [number, number] = [0, 0];
  const step = homeLookStep(cur, [5, -3], false, 1 / 60, false);
  assert.ok(step[0] > 0 && step[0] < 5 && step[1] < 0 && step[1] > -3, `eased partway: ${step}`);
  cur = step;
  for (let i = 0; i < 300; i++) cur = homeLookStep(cur, [5, -3], false, 1 / 60, false);
  assert.ok(Math.abs(cur[0] - 5) < 1e-6 && Math.abs(cur[1] + 3) < 1e-6, `converged: ${cur}`);
});
