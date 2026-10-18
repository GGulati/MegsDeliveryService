/** Coin pickup animation: 3D sprites fly from the delivery point to Meg.
 * Uses THREE.Sprite (auto-faces camera) with a canvas-generated coin texture.
 * Pure 3D world-space animation — no DOM overlay. */

import * as THREE from 'three';

/** Ease-out cubic: fast start, gentle landing. Front-loaded for snappy feel. */
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/** Interpolated 3D coin position with an upward arc (lift in meters at midpoint). */
export function coinFlightPosition3D(
  start: THREE.Vector3,
  end: THREE.Vector3,
  t: number,
  lift = 3,
): THREE.Vector3 {
  if (t <= 0) return start.clone();
  if (t >= 1) return end.clone();
  const e = easeOutCubic(t);
  const arc = Math.sin(e * Math.PI) * lift;
  return new THREE.Vector3(
    start.x + (end.x - start.x) * e,
    start.y + (end.y - start.y) * e + arc,
    start.z + (end.z - start.z) * e,
  );
}

export const COIN_FLIGHT_SECONDS = 0.6;
export const COIN_STAGGER_SECONDS = 0.08;
export const COIN_MAX_SPRITES = 10;
export const COIN_SPRITE_SCALE = 0.7; // meters

interface Coin {
  sprite: THREE.Sprite;
  start: THREE.Vector3;
  end: THREE.Vector3;
  delay: number;
  elapsed: number;
}

/** Generates a gold coin texture via canvas (no asset file needed). */
function makeCoinTexture(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  // Gold disc
  const grad = ctx.createRadialGradient(size / 2, size / 2, 4, size / 2, size / 2, size / 2);
  grad.addColorStop(0, '#ffe9a8');
  grad.addColorStop(0.6, '#e8b64c');
  grad.addColorStop(1, '#c98a2e');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
  ctx.fill();
  // Inner ring
  ctx.strokeStyle = '#a86f1f';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 7, 0, Math.PI * 2);
  ctx.stroke();
  // ● center mark
  ctx.fillStyle = '#a86f1f';
  ctx.font = `bold ${size * 0.4}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('●', size / 2, size / 2 + 1);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Shared texture (one per page load).
let sharedTexture: THREE.CanvasTexture | null = null;
function coinTexture(): THREE.CanvasTexture {
  if (!sharedTexture) sharedTexture = makeCoinTexture();
  return sharedTexture;
}

/** Manages 3D coin sprites flying from delivery point to Meg. */
export class CoinSprites {
  private coins: Coin[] = [];
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  get activeCount(): number {
    return this.coins.length;
  }

  /** Spawn up to COIN_MAX_SPRITES coins. Returns the remainder (payout - spawned). */
  spawn(from: THREE.Vector3, to: THREE.Vector3, count: number): number {
    const n = Math.min(Math.max(0, Math.floor(count)), COIN_MAX_SPRITES);
    const tex = coinTexture();
    for (let i = 0; i < n; i++) {
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.setScalar(COIN_SPRITE_SCALE);
      sprite.position.copy(from);
      // Render on top (no depth test) so coins are always visible.
      sprite.renderOrder = 999;
      this.scene.add(sprite);
      this.coins.push({
        sprite,
        start: from.clone(),
        end: to.clone(),
        delay: i * COIN_STAGGER_SECONDS,
        elapsed: 0,
      });
    }
    return count - n;
  }

  /** Advance the animation by dt seconds. Removes arrived sprites. */
  update(dt: number): void {
    const done: Coin[] = [];
    for (const c of this.coins) {
      c.elapsed += dt;
      const t = (c.elapsed - c.delay) / COIN_FLIGHT_SECONDS;
      if (t >= 1) {
        done.push(c);
      } else if (t > 0) {
        c.sprite.position.copy(coinFlightPosition3D(c.start, c.end, t));
      }
      // t <= 0: still waiting for stagger delay, stays at start.
    }
    for (const c of done) {
      this.scene.remove(c.sprite);
      (c.sprite.material as THREE.Material).dispose();
      const idx = this.coins.indexOf(c);
      if (idx >= 0) this.coins.splice(idx, 1);
    }
  }

  /** Remove all active coins (e.g., on run end). */
  clear(): void {
    for (const c of this.coins) {
      this.scene.remove(c.sprite);
      (c.sprite.material as THREE.Material).dispose();
    }
    this.coins = [];
  }
}
