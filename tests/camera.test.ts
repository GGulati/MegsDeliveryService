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
test('camera follows a turn gradually without crossing ahead or taking long angle wrap', () => {
  const result=followHeading(0,.4,1/60);assert.ok(result>0&&result<.4);
  assert.ok(Math.abs(2-followHeading(0,2,1/60))<=.650001);
  const wrapped=followHeading(Math.PI-.1,-Math.PI+.1,1/60);assert.ok(wrapped>Math.PI-.1&&wrapped<Math.PI+.1);
});
