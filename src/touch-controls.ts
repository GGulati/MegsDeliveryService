import type { GameState, HomePanel, Mode } from './types';

// The touch layer (floating joystick) as a shared component, owned in one
// place and usable by every game screen. It owns its DOM and its visibility;
// Input owns the floating-stick behavior itself (spawn position under the
// finger, drag tracking, release-to-brake).

// Whether the floating stick exists on a given screen. The stick is the
// only touch flight control (it steers, climbs, and drives — releasing it
// brakes), so there is nothing per-screen to configure beyond this on/off;
// whether it is shown at a given moment (unpaused, no panel open) is owned
// by touchControlsVisible below.
export function touchJoystickEnabled(mode: Mode): boolean {
  return mode === 'tutorial' || mode === 'flight' || mode === 'home';
}

// Single source of truth for touch-layer visibility. Pure, so it is covered
// by unit tests (tests/touch-controls.test.ts) instead of ad-hoc hidden
// writes scattered across render paths.
export function touchControlsVisible(mode: Mode, paused: boolean, homePanel: HomePanel): boolean {
  if (paused) return false;
  if (mode === 'flight' || mode === 'tutorial') return true;
  return mode === 'home' && homePanel === 'none';
}

// Whether the landing sequence is committed: from the halo fade onward,
// control inputs are ignored until the drop resolves, so the stick must
// neither appear nor linger while it runs. Pure, covered by unit tests.
export function landingCommitted(state: GameState): boolean {
  return state.haloFade > 0 || state.descent != null || state.drop != null;
}

export class TouchControls {
  private root: HTMLElement;
  constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    this.root.className = 'touch-controls';
    this.root.id = 'touch-controls';
    this.root.innerHTML = '<div id="joystick" class="joystick" hidden><i></i></div>';
    // Structural stacking: construct this component after every screen panel
    // (see main.ts) so it is last in DOM order. The stick itself floats on
    // the canvas below the panels (see Input.bindTouch); this layer only
    // carries the stick visual.
    parent.append(this.root);
  }
  render(state: GameState): void {
    this.root.hidden = landingCommitted(state) || !touchControlsVisible(state.mode, state.paused, state.homePanel);
    // The joystick floats: Input shows it at the touch point while the stick
    // is held and hides it on release, so render() leaves its own visibility
    // alone and only gates the layer.
  }
}
