import assert from 'node:assert/strict';
import test from 'node:test';
import { createPumpkin, updatePumpkin, pumpkinPosition, PUMPKIN_PERCHES } from '../src/pumpkin';

test('createPumpkin builds a named cat group', () => {
  const p = createPumpkin();
  assert.equal(p.group.name, 'Pumpkin');
  assert.ok(p.group.children.length >= 6, `expected body+head+ears+eyes+tail, got ${p.group.children.length}`);
});

test('pumpkin starts at the origin', () => {
  const p = createPumpkin();
  assert.deepEqual(pumpkinPosition(p), { x: 0, y: 0, z: 0 });
});

test('updatePumpkin moves toward the target at ~2 m/s', () => {
  const p = createPumpkin();
  updatePumpkin(p, 1.0, { x: 4, z: 0 });
  const pos = pumpkinPosition(p);
  assert.ok(Math.abs(pos.x - 2) < 1e-9, `expected x≈2 after 1s, got x=${pos.x}`);
  assert.ok(Math.abs(pos.z) < 1e-9, `expected z≈0, got z=${pos.z}`);
});

test('updatePumpkin never overshoots the target', () => {
  const p = createPumpkin();
  updatePumpkin(p, 10, { x: 1, z: 0 });
  const pos = pumpkinPosition(p);
  assert.ok(Math.abs(pos.x - 1) < 1e-9, `expected x=1 exactly, got x=${pos.x}`);
});

test('updatePumpkin idles with a subtle bob and no horizontal drift', () => {
  const p = createPumpkin();
  updatePumpkin(p, 1.0);
  const pos = pumpkinPosition(p);
  assert.ok(Math.abs(pos.x) < 1e-9 && Math.abs(pos.z) < 1e-9, 'no horizontal drift while idle');
  assert.ok(Math.abs(pos.y) <= 0.02, `subtle bob, got y=${pos.y}`);
});

test('pumpkin faces its movement direction', () => {
  const p = createPumpkin();
  updatePumpkin(p, 0.5, { x: 5, z: 0 });
  assert.ok(Math.abs(p.group.rotation.y - Math.PI / 2) < 1e-9, `faces +x, got ${p.group.rotation.y}`);
  const q = createPumpkin();
  updatePumpkin(q, 0.5, { x: 0, z: 5 });
  assert.ok(Math.abs(q.group.rotation.y) < 1e-9, `faces +z, got ${q.group.rotation.y}`);
});

test('setTarget(null) returns pumpkin to idle', () => {
  const p = createPumpkin();
  p.setTarget({ x: 5, z: 0 });
  updatePumpkin(p, 0.5);
  const before = pumpkinPosition(p);
  assert.ok(before.x > 0.5, 'should have moved while targeted');
  p.setTarget(null);
  updatePumpkin(p, 1.0);
  const after = pumpkinPosition(p);
  assert.equal(after.x, before.x, 'no horizontal movement once idle');
  assert.equal(after.z, before.z, 'no horizontal movement once idle');
});

test('PUMPKIN_PERCHES defines catTree, cushion, and floor spots', () => {
  assert.deepEqual([PUMPKIN_PERCHES.catTree.x, PUMPKIN_PERCHES.catTree.z], [7, 2.5]);
  assert.deepEqual([PUMPKIN_PERCHES.cushion.x, PUMPKIN_PERCHES.cushion.z], [1.4, 3.5]);
  assert.deepEqual([PUMPKIN_PERCHES.floor.x, PUMPKIN_PERCHES.floor.z], [4, 3]);
});
