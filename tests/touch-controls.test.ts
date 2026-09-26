import assert from 'node:assert/strict';
import test from 'node:test';
import { landingCommitted, touchJoystickEnabled, touchControlsVisible } from '../src/touch-controls';
import type { GameState, HomePanel, Mode } from '../src/types';

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

test('floating stick exists on the touch flight screens, nowhere else', () => {
  for (const mode of ['flight', 'tutorial', 'home'] as Mode[]) {
    assert.equal(touchJoystickEnabled(mode), true, mode);
  }
  for (const mode of ['title', 'offers', 'summary'] as Mode[]) {
    assert.equal(touchJoystickEnabled(mode), false, mode);
  }
});

test('landing is committed from the halo fade through the drop', () => {
  const idle = { haloFade: 0, descent: null, drop: null } as unknown as GameState;
  assert.equal(landingCommitted(idle), false, 'no landing in progress');
  assert.equal(landingCommitted({ ...idle, haloFade: 0.2 } as GameState), true, 'halo fade');
  assert.equal(landingCommitted({ ...idle, descent: { stopId: 'harbor-cafe' } } as unknown as GameState), true, 'descent');
  assert.equal(landingCommitted({ ...idle, drop: { stopId: 'harbor-cafe', t: 0 } } as unknown as GameState), true, 'drop');
  assert.equal(landingCommitted({ haloFade: 0, drop: null } as unknown as GameState), false,
    'a restored save (descent undefined, not null) is not a committed landing');
});
