import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { relativeBearing } from '../src/simulation.js';

// The destination card needs a compass arrow, not just "X m away".
// relativeBearing drives the destination card's compass arrow:
// yaw 0 faces -z, 0deg = straight ahead, positive = clockwise.
describe('relativeBearing', () => {
  test('target straight ahead reads 0 degrees', () => {
    assert.equal(relativeBearing({ x: 0, z: 0 }, { x: 0, z: -10 }, 0), 0);
  });

  test('target to the right reads +90 degrees', () => {
    assert.equal(relativeBearing({ x: 0, z: 0 }, { x: 10, z: 0 }, 0), 90);
  });

  test('target to the left reads -90 degrees', () => {
    assert.equal(relativeBearing({ x: 0, z: 0 }, { x: -10, z: 0 }, 0), -90);
  });

  test('target directly behind reads 180 degrees', () => {
    assert.equal(Math.abs(relativeBearing({ x: 0, z: 0 }, { x: 0, z: 10 }, 0)), 180);
  });

  test('facing the target zeroes the bearing', () => {
    const yaw = Math.atan2(10, 10); // target at (+10,-10)
    assert.ok(Math.abs(relativeBearing({ x: 0, z: 0 }, { x: 10, z: -10 }, yaw)) < 1e-9);
  });

  test('bearing follows yaw: turning right 90deg puts a right-side target ahead', () => {
    assert.ok(Math.abs(relativeBearing({ x: 0, z: 0 }, { x: 10, z: 0 }, Math.PI / 2)) < 1e-9);
  });
});
