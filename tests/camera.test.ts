import test from 'node:test';
import assert from 'node:assert/strict';
import { followHeading, modelRotation } from '../src/camera-motion';
test('rendered broom points along actual flight heading', () => {
  for (const heading of [0,.5,1.5,Math.PI,-2]) {
    const r = modelRotation(heading);
    assert.ok(Math.abs(-Math.sin(r)-Math.sin(heading))<1e-9);
    assert.ok(Math.abs(-Math.cos(r)+Math.cos(heading))<1e-9);
  }
});
const angleDifference = (target: number, current: number) =>
  Math.atan2(Math.sin(target - current), Math.cos(target - current));

test('camera lets the broom lead a short turn', () => {
  const target = .4;
  const camera = followHeading(0, target, 1 / 60);
  assert.ok(camera > 0 && camera < target);
  assert.ok(camera < .01);
});

test('camera converges after the broom stops turning', () => {
  let camera = 0;
  const target = 1.2;
  for (let frame = 0; frame < 360; frame++) camera = followHeading(camera, target, 1 / 60);
  assert.ok(Math.abs(angleDifference(target, camera)) < .001);
});

test('camera remains within the rear-hemisphere bound during sustained upgraded turns', () => {
  let camera = 0;
  let target = 0;
  const upgradedTurnRate = 3.08;
  const seconds = 1 / 60;
  for (let frame = 0; frame < 180; frame++) {
    target += upgradedTurnRate * seconds;
    camera = followHeading(camera, target, seconds);
    assert.ok(Math.abs(angleDifference(target, camera)) <= 1.350001);
  }
});

test('camera uses the short angle wrap and ignores zero-duration updates', () => {
  const current = Math.PI - .1;
  const target = -Math.PI + .1;
  const wrapped = followHeading(current, target, 1 / 60);
  assert.ok(wrapped > current && wrapped < Math.PI + .1);
  assert.equal(followHeading(current, target, 0), current);
});
