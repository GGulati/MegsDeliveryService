/** A screen owns a full UI state: menu, loading, or game.
 * Each screen manages its own DOM, resources, and behavior.
 * The ScreenManager handles transitions between screens. */
export interface Screen {
  /** Called when the screen becomes active. May be async for loading work. */
  enter(): void | Promise<void>;
  /** Called when leaving the screen. Clean up DOM, listeners, resources. */
  exit(): void;
  /** Per-frame update (optional). */
  update?(dt: number): void;
  /** Per-frame render (optional). */
  render?(): void;
}
