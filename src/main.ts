import './style.css';
import { ScreenManager } from './screens/ScreenManager';
import { MenuScreen } from './screens/MenuScreen';
import { LoadingScreen } from './screens/LoadingScreen';
import { SaveStore } from './storage';
import type { SaveResult } from './storage';
import { GameScreen } from './screens/GameScreen';
import { buildGameContext } from './game-context';
import { GameAudio } from './audio';

const canvas = document.querySelector<HTMLCanvasElement>('#game')!;
const root = document.querySelector<HTMLElement>('#app')!;

const manager = new ScreenManager();

// Shared audio instance: created once, survives screen transitions.
// Disposed only on pagehide, never on screen exit.
const audio = new GameAudio();

// Expose for e2e testing (harmless in production).
(window as unknown as { __audio?: GameAudio }).__audio = audio;
window.addEventListener('pagehide', () => audio.dispose());

// Global rAF loop drives the active screen.
let lastFrame = 0;
function frame(now: number): void {
  requestAnimationFrame(frame);
  try {
    const dt = lastFrame ? Math.min(now - lastFrame, 100) : 0;
    lastFrame = now;
    const active = manager.active;
    if (active instanceof GameScreen) {
      active.frame(now);
    } else {
      manager.update(dt);
      manager.render();
    }
  } catch (e) {
    console.error('Frame error:', e);
  }
}

/** Paint wait: double rAF ensures the loading DOM is actually rendered
 * before heavy work begins. Not an arbitrary sleep — it resolves as soon
 * as the browser has painted. */
const paint = (): Promise<void> =>
  new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

const COMPAT_HTML = '<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>';

/** Transition from menu to game via the loading screen.
 * All heavy work (save acquire, renderer/world build) happens here, during
 * the loading phase — GameScreen.enter() itself is synchronous, so the
 * frame loop can never observe a half-initialized game. */
let starting = false;
async function startGame(slotId: number, isNew: boolean): Promise<void> {
  if (starting) return;
  starting = true;
  try {
    const loading = new LoadingScreen(root);
    manager.show(loading);
    await paint();

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

    // Build renderer, world, and state during loading, with progress.
    // Throws if WebGL 2 is unavailable.
    let context;
    try {
      context = await buildGameContext(canvas, isNew, store, saveResult, s => loading.setStage(s));
    } catch {
      root.innerHTML = COMPAT_HTML;
      return;
    }

    const game = new GameScreen(root, canvas, slotId, store, context, audio, () =>
      manager.show(new MenuScreen(root, startGame, audio)));
    manager.show(game);
  } finally {
    starting = false;
  }
}

// Boot: show menu immediately (no heavy work yet).
manager.show(new MenuScreen(root, startGame, audio));
requestAnimationFrame(frame);
