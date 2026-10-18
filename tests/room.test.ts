import assert from 'node:assert/strict';
import test from 'node:test';
import {
  plantSway, plantProximity, isOnRug, rugDipScale, rugDampening,
  shelfParcelCount, lampFlicker, mothOpacity,
} from '../src/room';

test('plantProximity is 1 at the plant and 0 beyond 2m', () => {
  assert.equal(plantProximity(-7, 4.6), 1);
  const mid = plantProximity(-7, 5.6);
  assert.ok(mid > 0.4 && mid < 0.6, `half strength at 1m, got ${mid}`);
  assert.equal(plantProximity(-7, 6.6), 0);
  assert.equal(plantProximity(-7, 9.6), 0);
});

test('plantSway is silent with no proximity and oscillates otherwise', () => {
  assert.equal(plantSway(10, 1.7, 0), 0);
  assert.ok(Math.abs(plantSway(0, Math.PI / 2, 1) - 1) < 1e-9, 'peaks at phase π/2');
  assert.ok(Math.abs(plantSway(5, 0.3, 0.5)) <= 0.5, 'bounded by proximity');
  assert.ok(plantSway(1, 0, 1) !== plantSway(2, 0, 1), 'varies with time');
});

test('isOnRug detects the rug disc at (0, -0.2) r=2.1', () => {
  assert.equal(isOnRug(0, -0.2), true);
  assert.equal(isOnRug(1, -0.2), true);
  assert.equal(isOnRug(0, 1.5), true);
  assert.equal(isOnRug(2.5, -0.2), false);
  assert.equal(isOnRug(5, 5), false);
});

test('rugDipScale dips to 0.95 on the rug', () => {
  assert.equal(rugDipScale(true), 0.95);
  assert.equal(rugDipScale(false), 1);
});

test('rugDampening halves footstep volume on the rug', () => {
  assert.equal(rugDampening(true), 0.5);
  assert.equal(rugDampening(false), 1);
});

test('shelfParcelCount caps at 10 and floors at 0', () => {
  assert.equal(shelfParcelCount(0), 0);
  assert.equal(shelfParcelCount(3), 3);
  assert.equal(shelfParcelCount(10), 10);
  assert.equal(shelfParcelCount(25), 10);
  assert.equal(shelfParcelCount(-2), 0);
  assert.equal(shelfParcelCount(4.7), 4);
});

test('lampFlicker hovers near 1', () => {
  assert.equal(lampFlicker(0), 1);
  for (const t of [0.3, 1.7, 5.2, 12.9]) {
    const f = lampFlicker(t);
    assert.ok(f > 0.9 && f < 1.1, `flicker ${f} at t=${t} should stay subtle`);
  }
});

test('mothOpacity is 0 in daylight and ramps with dusk', () => {
  assert.equal(mothOpacity(0), 0);
  assert.equal(mothOpacity(0.1), 0);
  assert.ok(mothOpacity(0.25) > 0, 'visible at home-morning duskFactor');
  assert.ok(mothOpacity(0.6) >= mothOpacity(0.25), 'monotonic with dusk');
  assert.ok(mothOpacity(10) <= 1, 'capped at 1');
});

test('heartOpacity is full then fades over 2s', async () => {
  const { heartOpacity } = await import('../src/room');
  assert.equal(heartOpacity(-1), 0);
  assert.equal(heartOpacity(0), 1);
  assert.equal(heartOpacity(1.19), 1);
  assert.ok(heartOpacity(1.6) > 0 && heartOpacity(1.6) < 1, 'fading');
  assert.equal(heartOpacity(2), 0);
  assert.equal(heartOpacity(5), 0);
});
