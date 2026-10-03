import type { Screen } from './Screen';

/** Manages screen transitions. Only one screen is active at a time.
 * Handles async enter() so loading screens can do work before displaying. */
export class ScreenManager {
  private current: Screen | null = null;
  private root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  /** Transition to a new screen. Enters the new first (so loading stays
   * visible during heavy work), then exits the old. */
  async show(screen: Screen): Promise<void> {
    const old = this.current;
    this.current = screen;
    await this.current.enter();
    if (old) old.exit();
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
