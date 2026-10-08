/** Coin pickup animation: coins fly from the delivery point to the HUD counter,
 * one by one at fast speed. Pure math + state machine; DOM rendering is in UI. */

export interface Vec2 { x: number; y: number; }

/** Ease-out cubic: fast start, gentle landing. Front-loaded for snappy feel. */
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/** Interpolated coin position with an upward arc (lift = 60px at midpoint). */
export function coinFlightPosition(start: Vec2, end: Vec2, t: number): Vec2 {
  if (t <= 0) return { x: start.x, y: start.y };
  if (t >= 1) return { x: end.x, y: end.y };
  const e = easeOutCubic(t);
  const lift = Math.sin(e * Math.PI) * 60; // arc upward
  return {
    x: start.x + (end.x - start.x) * e,
    y: start.y + (end.y - start.y) * e - lift,
  };
}

export const COIN_FLIGHT_MS = 500;
export const COIN_STAGGER_MS = 100;
export const COIN_MAX_SPRITES = 10;

interface Coin { start: Vec2; end: Vec2; delay: number; startTime: number; }

/** Tracks in-flight coins. Call update(now) each frame; returns coins completed. */
export class CoinAnim {
  private coins: Coin[] = [];

  get activeCount(): number { return this.coins.length; }

  /** Spawn up to COIN_MAX_SPRITES coins. Returns the remainder (payout - spawned). */
  spawn(from: Vec2, to: Vec2, count: number, now: number): number {
    const n = Math.min(count, COIN_MAX_SPRITES);
    for (let i = 0; i < n; i++) {
      this.coins.push({ start: from, end: to, delay: i * COIN_STAGGER_MS, startTime: now });
    }
    return count - n;
  }

  /** Advance the animation. Returns number of coins that arrived this frame. */
  update(now: number): number {
    let done = 0;
    this.coins = this.coins.filter(c => {
      const elapsed = now - c.startTime - c.delay;
      if (elapsed >= COIN_FLIGHT_MS) { done++; return false; }
      return true;
    });
    return done;
  }

  /** Current screen position of each active coin (for rendering). */
  positions(now: number): Vec2[] {
    return this.coins.map(c => {
      const elapsed = now - c.startTime - c.delay;
      const t = Math.max(0, Math.min(1, elapsed / COIN_FLIGHT_MS));
      return coinFlightPosition(c.start, c.end, t);
    });
  }

  /** Test hook: inspect coin delays. */
  debugCoins(): { delay: number }[] {
    return this.coins.map(c => ({ delay: c.delay }));
  }
}
