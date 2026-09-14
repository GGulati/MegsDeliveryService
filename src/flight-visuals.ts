import type { GameState } from './types';

/** Cosmetic offsets are absolute, never fed back into the player position. */
export function flightVisuals(state: GameState, clock: number, reducedMotion: boolean) {
  const flying = state.mode === 'flight' || state.mode === 'tutorial';
  const velocity = Math.hypot(state.player.velocity.x, state.player.velocity.y, state.player.velocity.z);
  const active = flying && !state.paused && !reducedMotion;
  return {
    bob: active && state.player.hover && velocity < .3 ? Math.sin(clock * 1.5) * .035 : 0,
    speed: active ? Math.min(1, Math.max(0, (velocity - 5) / 16.6)) : 0,
  };
}

/** Lightweight peripheral wind and blur; the central pilot and DOM HUD stay sharp. */
export class FlightEffects {
  private element = document.createElement('div');
  constructor(canvas: HTMLCanvasElement) {
    this.element.className = 'flight-effects';
    this.element.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 14; i++) {
      const streak = document.createElement('i');
      const angle = i * Math.PI * 2 / 14;
      streak.style.left = `${50 + Math.cos(angle) * 43}%`;
      streak.style.top = `${50 + Math.sin(angle) * 43}%`;
      streak.style.setProperty('--angle', `${angle}rad`);
      streak.style.animationDelay = `${-i * .17}s`;
      this.element.append(streak);
    }
    canvas.insertAdjacentElement('afterend', this.element);
  }
  update(speed: number, lowQuality: boolean) {
    this.element.hidden = speed <= 0;
    this.element.style.setProperty('--speed', speed.toFixed(3));
    this.element.classList.toggle('low-quality', lowQuality);
  }
  dispose() { this.element.remove(); }
}
