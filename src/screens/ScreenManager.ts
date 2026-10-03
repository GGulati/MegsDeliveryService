import type { Screen } from './Screen';

/** Manages screen transitions. Only one screen is active at a time.
 * Handles async enter() so loading screens can do work before displaying. */
export class ScreenManager {
  private current: Screen | null = null;
  private root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  /** Transition to a new screen. Exits the current, enters the new. */
  async show(screen: Screen): Promise<void> {
    if (this.current) {
      this.current.exit();
    }
    this.current = screen;
    await this.current.enter();
  }

  /** Per-frame update for the active screen. */
  update(dt: number): void {
    this.current?.update?.(dt);
  }

  /** Per-frame render for the active screen. */
  render(): void {
    this.current?.render?.();
  }

  get active(): Screen | null {
    return this.current;
  }
}
