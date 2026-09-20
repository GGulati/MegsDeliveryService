import assert from 'node:assert/strict';
import test from 'node:test';
import { touchControlsFor, touchControlsVisible } from '../src/touch-controls';
import type { HomePanel, Mode } from '../src/types';

const panels: HomePanel[] = ['none', 'jobs', 'brooms', 'decor', 'cat'];

test('touch layer shows in flight and tutorial whenever unpaused', () => {
  for (const mode of ['flight', 'tutorial'] as Mode[]) {
    for (const panel of panels) assert.equal(touchControlsVisible(mode, false, panel), true, `${mode}/${panel}`);
    assert.equal(touchControlsVisible(mode, true, 'none'), false, `${mode} paused`);
  }
});

test('touch layer shows in the home room only with no panel open', () => {
  assert.equal(touchControlsVisible('home', false, 'none'), true);
  assert.equal(touchControlsVisible('home', true, 'none'), false);
  for (const panel of ['jobs', 'brooms', 'decor', 'cat'] as HomePanel[]) {
    assert.equal(touchControlsVisible('home', false, panel), false, `home/${panel}`);
  }
});

test('touch layer hides on title, offers, and summary', () => {
  for (const mode of ['title', 'offers', 'summary'] as Mode[]) {
    for (const panel of panels) {
      assert.equal(touchControlsVisible(mode, false, panel), false, `${mode}/${panel} unpaused`);
      assert.equal(touchControlsVisible(mode, true, panel), false, `${mode}/${panel} paused`);
    }
  }
});

test('per-screen control sets: flight/tutorial get both, home gets joystick only', () => {
  assert.deepEqual([...touchControlsFor('flight')], ['joystick', 'throttle']);
  assert.deepEqual([...touchControlsFor('tutorial')], ['joystick', 'throttle']);
  assert.deepEqual([...touchControlsFor('home')], ['joystick']);
  for (const mode of ['title', 'offers', 'summary'] as Mode[]) {
    assert.deepEqual([...touchControlsFor(mode)], [], mode);
  }
});
