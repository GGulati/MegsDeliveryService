import { createState, setPaused } from './simulation';
import { GameRenderer } from './scene';
import { SaveStore } from './storage';
import type { SaveResult } from './storage';
import type { GameState } from './types';

/** Everything GameScreen needs that is expensive to build.
 * Produced by buildGameContext() during the loading phase, so that
 * GameScreen.enter() is synchronous and trivial — there is no async
 * initialization left to race with the frame loop. */
export interface GameContext {
  renderer: GameRenderer;
  state: GameState;
  bootReady: boolean;
  saveKind: string;
  saveMessage: string;
  saveFyi: string | null;
  bootTime: number;
  coarsePointer: boolean;
}

/** Synchronous state initialization from a save result.
 * Shared by buildGameContext() and GameScreen's save-retry path. */
export function initGameState(
  isNew: boolean,
  store: SaveStore,
  result: SaveResult,
  renderer: GameRenderer,
  coarsePointer: boolean,
): Omit<GameContext, 'renderer' | 'coarsePointer'> {
  let state: GameState;
  let saveKind: string;
  let saveMessage: string;
  let saveFyi: string | null = null;
  let bootReady: boolean;

  if (isNew) {
    state = createState();
    saveKind = 'ready';
    saveMessage = '';
    bootReady = true;
    if (store.canSave) store.save(state);
  } else if (result.kind === 'invalid') {
    store.discardUnreadable();
    state = createState();
    saveKind = 'ready';
    saveMessage = '';
    bootReady = true;
    saveFyi = 'Your saved game could not be read, so it was discarded and a new game was started.';
  } else {
    saveKind = result.kind;
    saveMessage = result.message;
    state = result.state ?? createState();
    if (result.kind === 'ready' && result.seedMigrated && store.canSave) store.save(state);
    bootReady = result.kind === 'ready' || result.kind === 'session' || result.kind === 'readonly';
  }

  state.coarsePointer = coarsePointer;
  renderer.setSeed(state.seed);
  // Continue means play, not paused. Clear paused from restored save.
  if (bootReady) setPaused(state, false);

  return { state, bootReady, saveKind, saveMessage, saveFyi, bootTime: performance.now() };
}

const yieldToUI = (): Promise<void> =>
  new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

/** Heavy game construction: renderer, world, and save state.
 * Runs during the loading phase with progress callbacks. Throws if WebGL 2
 * is unavailable — the caller shows the compatibility message. */
export async function buildGameContext(
  canvas: HTMLCanvasElement,
  isNew: boolean,
  store: SaveStore,
  preacquired: SaveResult,
  onStage: (text: string) => void,
): Promise<GameContext> {
  const coarsePointer = matchMedia('(pointer: coarse)').matches;

  // Stage 1: renderer + world (heavy, synchronous). Yields let the loading
  // screen paint before and after.
  onStage('Building world…');
  await yieldToUI();
  const renderer = new GameRenderer(canvas);

  // Stage 2: state from save.
  onStage(isNew ? 'Starting new game…' : 'Loading save…');
  await yieldToUI();
  const booted = initGameState(isNew, store, preacquired, renderer, coarsePointer);

  return { renderer, coarsePointer, ...booted };
}
