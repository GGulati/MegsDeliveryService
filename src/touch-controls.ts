import type { GameState, HomePanel, Mode } from './types';

// The touch layer (joystick + throttle) as a shared component, owned in one
// place and usable by every game screen. It owns its DOM, its visibility, and
// which physical controls each screen gets. Input keeps sampling the same
// #joystick / #throttle elements, so its public API is unchanged.

export type TouchControl = 'joystick' | 'throttle';

// Per-screen configuration, as data. The home room is joystick-only: the
// throttle slider drives flight speed and does nothing while walking, so a
// visible-but-dead slider there would be worse than none.
const CONTROLS_BY_MODE: Record<Mode, readonly TouchControl[]> = {
  title: [],
  tutorial: ['joystick', 'throttle'],
  flight: ['joystick', 'throttle'],
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
  private joystick: HTMLElement;
  private throttleLabel: HTMLElement;
  constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    this.root.className = 'touch-controls';
    this.root.id = 'touch-controls';
    this.root.innerHTML = `<div id="joystick" class="joystick"><i></i><span>steer</span></div><label class="throttle-label" id="throttle-label">Speed <input id="throttle" type="range" min="-1" max="1" value="0" step=".05"></label>`;
    // Structural stacking: construct this component after every screen panel
    // (see main.ts) so it is last in DOM order, and it carries its own
    // z-index in style.css — no panel can sit on top of the joystick and
    // swallow its touches again.
    parent.append(this.root);
    this.joystick = this.root.querySelector<HTMLElement>('#joystick')!;
    this.throttleLabel = this.root.querySelector<HTMLElement>('#throttle-label')!;
  }
  render(state: GameState): void {
    this.root.hidden = !touchControlsVisible(state.mode, state.paused, state.homePanel);
    const set = touchControlsFor(state.mode);
    this.joystick.hidden = !set.includes('joystick');
    this.throttleLabel.hidden = !set.includes('throttle');
  }
}
