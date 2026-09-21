import type { GameState, HomePanel, Mode } from './types';

// The touch layer (floating joystick) as a shared component, owned in one
// place and usable by every game screen. It owns its DOM and its visibility;
// Input owns the floating-stick behavior itself (spawn position under the
// finger, drag tracking, release-to-brake).

export type TouchControl = 'joystick';

// Per-screen configuration, as data. Every touch screen gets the floating
// stick; the stick is the only touch flight control (it steers, climbs, and
// drives — releasing it brakes), so there is nothing per-screen to vary
// beyond visibility, which touchControlsVisible owns.
const CONTROLS_BY_MODE: Record<Mode, readonly TouchControl[]> = {
  title: [],
  tutorial: ['joystick'],
  flight: ['joystick'],
  offers: [],
  home: ['joystick'],
  summary: [],
};
export function touchControlsFor(mode: Mode): readonly TouchControl[] { return CONTROLS_BY_MODE[mode]; }

// Single source of truth for touch-layer visibility. Pure, so it is covered
// by unit tests (tests/touch-controls.test.ts) instead of ad-hoc hidden
// writes scattered across render paths.
export function touchControlsVisible(mode: Mode, paused: boolean, homePanel: HomePanel): boolean {
  if (paused) return false;
  if (mode === 'flight' || mode === 'tutorial') return true;
  return mode === 'home' && homePanel === 'none';
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
    this.root.hidden = !touchControlsVisible(state.mode, state.paused, state.homePanel);
    // The joystick floats: Input shows it at the touch point while the stick
    // is held and hides it on release, so render() leaves its own visibility
    // alone and only gates the layer.
  }
}
