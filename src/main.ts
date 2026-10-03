import './style.css';
import { ScreenManager } from './screens/ScreenManager';
import { MenuScreen } from './screens/MenuScreen';
import { LoadingScreen } from './screens/LoadingScreen';
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
async function startGame(slotId: number, isNew: boolean): Promise<void> {
  const loading = new LoadingScreen(root, () => {});
  await manager.show(loading);
  const game = new GameScreen(root, canvas, loading, slotId, isNew, () => {
    // Exit to menu (e.g., from pause menu "quit to title")
    void manager.show(new MenuScreen(root, startGame));
  });
  // GameScreen.enter() does the heavy loading work with progress updates.
  await manager.show(game);
  // Loading screen is replaced by game screen; nothing else to do.
}

// Boot: show menu immediately (no heavy work yet).
void manager.show(new MenuScreen(root, startGame));
requestAnimationFrame(frame);

// Remove the static boot loader once the menu is up.
document.getElementById('boot-loader')?.remove();
