import type { Screen } from './Screen';
import type { GameAudio } from '../audio';
import { createState } from '../simulation';

/** Loading screen: shown after menu selection, while heavy work runs.
 * Displays progress through stages. Dismissed when GameScreen is ready. */
export class LoadingScreen implements Screen {
  private root: HTMLElement;
  private el: HTMLElement | null = null;
  private label: HTMLElement | null = null;
  private audio: GameAudio;
  private menuState = createState();
  constructor(root: HTMLElement, audio: GameAudio) {
    this.root = root;
    this.audio = audio;
  }

  update(_dt: number): void {
    // Keep music playing during loading (no SFX — state is static)
    this.audio.update(this.menuState, false);
  }

  enter(): void {
    this.el = document.createElement('div');
    this.el.className = 'loading-screen';
    this.el.innerHTML = `
      <div class="loading-card">
        <div class="bl-spin"></div>
        <p class="loading-label">Loading…</p>
      </div>
    `;
    this.label = this.el.querySelector('.loading-label');
    this.root.appendChild(this.el);
  }

  /** Update the loading status text. Call between stages. */
  setStage(text: string): void {
    if (this.label) this.label.textContent = text;
  }

  exit(): void {
    this.el?.remove();
    this.el = null;
    this.label = null;
  }
}
