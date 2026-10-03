import type { Screen } from './Screen';

/** Loading screen: shown after menu selection, while heavy work runs.
 * Displays progress through stages. Dismissed when GameScreen is ready. */
export class LoadingScreen implements Screen {
  private root: HTMLElement;
  private el: HTMLElement | null = null;
  private label: HTMLElement | null = null;
  private onDone: () => void | Promise<void>;

  constructor(root: HTMLElement, onDone: () => void | Promise<void>) {
    this.root = root;
    this.onDone = onDone;
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
