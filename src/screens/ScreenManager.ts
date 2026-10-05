import type { Screen } from './Screen';

/** Manages screen transitions. Only one screen is active at a time.
 *
 * show() is synchronous: enter() is sync by contract (see Screen), so the
 * new screen is fully initialized before it becomes active. There is no
 * entering/active distinction and no race between the frame loop and
 * initialization. If enter() throws, the old screen is restored. */
export class ScreenManager {
  private current: Screen | null = null;

  /** Transition to a new screen. Enters the new first, then exits the old. */
  show(screen: Screen): void {
    const old = this.current;
    this.current = screen;
    try {
      this.current.enter();
    } catch (e) {
      this.current = old;
      throw e;
    }
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
