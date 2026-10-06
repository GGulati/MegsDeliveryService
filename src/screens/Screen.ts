/** A screen owns a full UI state: menu, loading, or game.
 * Each screen manages its own DOM, resources, and behavior.
 * The ScreenManager handles transitions between screens.
 *
 * enter() is synchronous by design: all heavy initialization happens during
 * the loading phase (see buildGameContext), before the screen is shown.
 * This makes it impossible for the frame loop to drive a half-initialized
 * screen — the race class that froze the game on mobile is unrepresentable. */
export interface Screen {
  /** Called when the screen becomes active. Must be fast and synchronous. */
  enter(): void;
  /** Called when leaving the screen. Clean up DOM, listeners, resources. */
  exit(): void;
  /** Per-frame update (optional). */
  update?(dt: number): void;
  /** Per-frame render (optional). */
  render?(): void;
}
