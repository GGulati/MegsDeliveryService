import './style.css';
import { ScreenManager } from './screens/ScreenManager';
import { MenuScreen } from './screens/MenuScreen';
import { LoadingScreen } from './screens/LoadingScreen';
import { SaveStore } from './storage';
import type { SaveResult } from './storage';
import { GameScreen } from './screens/GameScreen';

const canvas = document.querySelector<HTMLCanvasElement>('#game')!;
const root = document.querySelector<HTMLElement>('#app')!;

const manager = new ScreenManager(root);

// Global rAF loop drives the active screen.
let lastFrame = 0;
function frame(now: number): void {
  const dt = lastFrame ? Math.min(now - lastFrame, 100) : 0;
  lastFrame = now;
  const active = manager.active;
  // GameScreen has its own frame() for the accumulator pattern.
  if (active instanceof GameScreen) {
    active.frame(now);
  } else {
    manager.update(dt);
    manager.render();
  }
  requestAnimationFrame(frame);
}

/** Transition from menu to game via the loading screen. */
let starting = false;
async function startGame(slotId: number, isNew: boolean): Promise<void> {
  if (starting) return;
  starting = true;
  try {
  const loading = new LoadingScreen(root, () => {});
  await manager.show(loading);
  // Force the browser to paint the loading screen before any heavy work.
  // Double rAF ensures the DOM is actually rendered.
  await new Promise<void>(resolve => setTimeout(resolve, 100));
  // Acquire save during loading (not in GameScreen).
  loading.setStage('Opening save…');
  const store = new SaveStore();
  store.setSlot(slotId);
  let saveResult: SaveResult;
  try {
    saveResult = await store.acquire();
  } catch {
    saveResult = { kind: 'readonly', message: 'Save unavailable.' };
  }
  const game = new GameScreen(root, canvas, loading, slotId, isNew, store, saveResult, () => {
    void manager.show(new MenuScreen(root, startGame));
  });
  await manager.show(game);
  } finally {
    starting = false;
  }
}

// Boot: show menu immediately (no heavy work yet).
void manager.show(new MenuScreen(root, startGame));
requestAnimationFrame(frame);

// Remove the static boot loader once the menu is up.
document.getElementById('boot-loader')?.remove();
