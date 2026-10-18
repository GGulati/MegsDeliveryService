import type { Screen } from './Screen';
import { startTutorial, step, toggleHover, interact, setPaused, nearestStop, startRun, chooseJob, returnHome, getTarget, relativeBearing, RUN_SECONDS } from '../simulation';
import { initGameState, type GameContext } from '../game-context';
import { STOPS } from '../world';
import { GameRenderer } from '../scene';
import { UI } from '../ui';
import { Input } from '../input';
import { HomeUI } from '../home-ui';
import { TouchControls, landingCommitted, touchControlsVisible } from '../touch-controls';
import { enterHome, closeHomePanel, buyUpgrade, buyCapstone, buyFurniture, nearbyStation } from '../home';
import { SaveStore, setLastSlot, getMuted, setMuted as setGlobalMuted } from '../storage';
import type { SaveResult } from '../storage';
import { GameAudio } from '../audio';
import type { GameState } from '../types';

/** GameScreen owns the renderer, game state, and all gameplay logic.
 * Constructed with a fully-built GameContext (see buildGameContext) after
 * the loading phase completes, so enter() is synchronous and trivial —
 * there is no async initialization left to race with the frame loop. */
export class GameScreen implements Screen {
  private root: HTMLElement;
  private canvas: HTMLCanvasElement;
  private slotId: number;
  private onExitToMenu: () => void;

  private state: GameState;
  private renderer: GameRenderer;
  private input!: Input;
  private ui!: UI;
  private homeUI!: HomeUI;
  private touchControls!: TouchControls;
  private store: SaveStore;
  private audio: GameAudio;
  private saveBanner!: HTMLElement;

  private muted = getMuted();
  private coarsePointer: boolean;
  private accumulator = 0;
  private lastFrame = 0;
  private contextLost = false;
  private bootReady: boolean;
  private saveKind: string;
  private saveMessage: string;
  private saveFyi: string | null;
  private fyiTimer: ReturnType<typeof setTimeout> | undefined;
  private savePeriod = 0;
  private testing = false;
  private disposed = false;
  private bootTime: number;

  constructor(
    root: HTMLElement,
    canvas: HTMLCanvasElement,
    slotId: number,
    store: SaveStore,
    context: GameContext,
    audio: GameAudio,
    onExitToMenu: () => void,
  ) {
    this.root = root;
    this.canvas = canvas;
    this.slotId = slotId;
    this.store = store;
    this.audio = audio;
    this.onExitToMenu = onExitToMenu;
    this.state = context.state;
    this.renderer = context.renderer;
    this.bootReady = context.bootReady;
    this.saveKind = context.saveKind;
    this.saveMessage = context.saveMessage;
    this.saveFyi = context.saveFyi;
    this.bootTime = context.bootTime;
    this.coarsePointer = context.coarsePointer;
    this.testing = new URLSearchParams(location.search).get('test') === '1';
    // Expose state for e2e testing (harmless in production).
    (window as unknown as { __gameState?: () => unknown }).__gameState = () => this.state;
  }

  /** Synchronous: all heavy work already happened in buildGameContext().
   * Only wires input, builds UI DOM, and draws the first frame.
   * setupUI() must run before setupInput(): UI's constructor sets
   * root.innerHTML, which would delete the TouchControls DOM if it
   * were created first. TouchControls appends after, so Input can
   * query the attached #joystick. */
  enter(): void {
    this.setupUI();
    this.setupInput();
    // Reset audio snapshot so game SFX don't trigger from diffing
    // against the menu's state.
    this.audio.resetSnapshot();
    if (this.saveFyi) this.flashSaveFyi(this.saveFyi);
    setLastSlot(this.slotId);
    this.draw(0);
  }

  exit(): void {
    this.disposed = true;
    // Silence without touching the SFX snapshot: the entering screen already
    // reset it (ScreenManager enters new before exiting old), and an
    // update() here would repopulate it with this screen's state, causing
    // spurious SFX on the new screen's first frame.
    this.audio.silence();
    this.store.release();
    clearTimeout(this.fyiTimer);
    this.input?.dispose?.();
    this.touchControls?.dispose?.();
    this.canvas.removeEventListener('webglcontextlost', this.onContextLost);
    this.canvas.removeEventListener('webglcontextrestored', this.onContextRestored);
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('visibilitychange', this.onVisibility);
    window.removeEventListener('blur', this.onBlur);
    window.removeEventListener('pagehide', this.onPageHide);
    // Remove game UI
    this.root.innerHTML = '';
  }

  update(ms: number): void {
    if (this.disposed) return;
    this.advance(ms);
  }

  render(): void {
    // Rendering happens in advance()/draw(); nothing extra here.
  }

  private setupInput(): void {
    // TouchControls must be constructed before Input: Input's constructor
    // queries for #joystick, which TouchControls creates.
    this.touchControls = new TouchControls(this.root);
    this.input = new Input(this.canvas, {
      hover: () => { if (!this.bootReady) return; toggleHover(this.state); this.persist(); this.draw(0); },
      interact: () => { if (!this.bootReady || this.state.mode !== 'home') return; interact(this.state); this.persist(); this.draw(0); },
      pause: () => {
        if (!this.bootReady) return;
        if (this.state.mode === 'home' && this.state.homePanel !== 'none') { closeHomePanel(this.state); this.persist(); this.draw(0); }
        else if (this.state.paused) this.resume();
        else this.pause();
      },
      fullscreen: () => this.fullscreen(),
    }, () => this.coarsePointer && !landingCommitted(this.state) && touchControlsVisible(this.state.mode, this.state.paused, this.state.homePanel));
  }

  private setupUI(): void {
    const root = this.root;
    const self = this;
    this.ui = new UI(root, {
      start() { if (!self.bootReady) return; self.audio.sfx('ui_click'); if (self.state.profile.tutorialDone) enterHome(self.state); else startTutorial(self.state); self.input?.clear(); (document.activeElement as HTMLElement)?.blur(); self.persist(); self.draw(0); },
      pause: () => { this.audio.sfx('ui_click'); this.pause(); },
      resume: () => { this.audio.sfx('ui_click'); this.resume(); },
      unstuck() {
        if (!self.bootReady) return;
        const p = self.state.player.position;
        let best = STOPS[0], bestD = Infinity;
        for (const s of STOPS) {
          const d = (s.position.x - p.x) ** 2 + (s.position.z - p.z) ** 2;
          if (d < bestD) { bestD = d; best = s; }
        }
        self.state.player.position = { x: best.position.x, y: best.position.y + 5, z: best.position.z };
        self.state.player.velocity = { x: 0, y: 0, z: 0 };
        self.state.player.speed = 0;
        self.state.player.throttle = 0;
        self.resume(); self.input?.clear(); self.persist(); self.draw(0);
      },
      mute() { self.audio.sfx('ui_click'); self.muted = !self.muted; setGlobalMuted(self.muted); self.audio.setMuted(self.muted); self.draw(0); },
      fullscreen: () => { this.audio.sfx('ui_click'); this.fullscreen(); },
      chooseJob(index) { if (!self.bootReady) return; self.audio.sfx('ui_click'); chooseJob(self.state, index); self.input.clear(); self.persist(); self.draw(0); },
      returnHome() { if (!self.bootReady) return; self.audio.sfx('ui_click'); returnHome(self.state); self.input.clear(); self.persist(); self.draw(0); },
      nextDay() { if (!self.bootReady) return; self.audio.sfx('ui_click'); enterHome(self.state); self.input.clear(); self.persist(); self.draw(0); },
    });
    this.homeUI = new HomeUI(root, {
      interact() { if (!self.bootReady) return; self.audio.sfx('ui_click'); interact(self.state); self.input.clear(); self.persist(); self.draw(0); },
      close() { if (!self.bootReady) return; self.audio.sfx('ui_click'); closeHomePanel(self.state); self.input.clear(); self.persist(); self.draw(0); },
      start() { if (!self.bootReady) return; self.audio.sfx('ui_click'); startRun(self.state, self.testing ? 42 : undefined); self.input.clear(); self.persist(); self.draw(0); },
      upgrade(track) { if (!self.bootReady) return; self.audio.sfx('ui_click'); buyUpgrade(self.state, track); self.persist(); self.draw(0); },
      capstone(track, id) { if (!self.bootReady) return; self.audio.sfx('ui_click'); buyCapstone(self.state, track, id); self.persist(); self.draw(0); },
      furnish(id) { if (!self.bootReady) return; self.audio.sfx('ui_click'); buyFurniture(self.state, id); self.persist(); self.draw(0); },
    });
    this.saveBanner = document.createElement('aside');
    this.saveBanner.className = 'save-status';
    this.saveBanner.setAttribute('aria-live', 'polite');
    root.append(this.saveBanner);
    this.saveBanner.addEventListener('click', event => {
      const button = (event.target as HTMLElement).closest('button');
      if (button?.dataset.save === 'retry') void this.reboot();
    });

    window.addEventListener('resize', this.onResize);
    document.addEventListener('visibilitychange', this.onVisibility);
    window.addEventListener('blur', this.onBlur);
    this.canvas.addEventListener('webglcontextlost', this.onContextLost);
    this.canvas.addEventListener('webglcontextrestored', this.onContextRestored);
    window.addEventListener('pagehide', this.onPageHide);
  }

  private onResize = (): void => { this.renderer.resize(); this.draw(0); };
  private onVisibility = (): void => { if (document.hidden && performance.now() - this.bootTime > 5000) this.pause('Welcome back. Ready to fly?'); };
  private onBlur = (): void => { this.input.clear(); if (this.state.mode !== 'title' && performance.now() - this.bootTime > 5000) this.pause(); };
  private onContextLost = (event: Event): void => { event.preventDefault(); this.pause('The sky is taking a moment.'); this.contextLost = true; };
  private onContextRestored = (): void => { this.contextLost = false; this.draw(0); };
  private onPageHide = (): void => { this.persist(); this.bootReady = false; this.audio.update(this.state, true); this.store.release(); };

  private pause(reason = 'Take a little breather.'): void {
    setPaused(this.state, true, reason);
    this.input?.clear();
    this.accumulator = 0;
    this.persist();
    this.draw(0);
  }

  private resume(): void {
    if (!this.bootReady || this.contextLost) return;
    setPaused(this.state, false);
    this.input?.clear();
    this.accumulator = 0;
    this.lastFrame = performance.now();
    this.persist();
    this.draw(0);
  }

  private fullscreen(): void {
    if (document.fullscreenElement) void document.exitFullscreen?.();
    else void document.documentElement.requestFullscreen?.().catch(() => {});
  }

  private flashSaveFyi(message: string, ms = 8000): void {
    this.saveFyi = message;
    clearTimeout(this.fyiTimer);
    this.fyiTimer = setTimeout(() => { this.saveFyi = null; this.draw(0); }, ms);
  }

  private persist(): void {
    if (!this.bootReady || !this.store.canSave) return;
    if (!this.store.save(this.state)) { this.saveKind = 'session'; this.saveMessage = this.store.message; }
  }

  /** Re-acquire the save and re-init state (save banner "Retry" button).
   * Renderer and world are reused; only state init re-runs. */
  private async reboot(): Promise<void> {
    this.bootReady = false;
    this.saveKind = 'loading';
    this.saveMessage = 'Opening your little world…';
    this.draw(0);
    let result: SaveResult;
    try {
      result = await this.store.acquire();
    } catch {
      result = { kind: 'readonly', message: 'Save unavailable.' };
    }
    const booted = initGameState(false, this.store, result, this.renderer, this.coarsePointer);
    this.state = booted.state;
    this.bootReady = booted.bootReady;
    this.saveKind = booted.saveKind;
    this.saveMessage = booted.saveMessage;
    if (booted.saveFyi) this.flashSaveFyi(booted.saveFyi);
    this.input?.clear();
    this.accumulator = 0;
    this.draw(0);
  }

  private draw(dt: number): void {
    this.audio.update(this.state, !this.bootReady || this.contextLost);
    if (!this.renderer || this.contextLost) return;
    this.renderer.render(this.state, dt);
    const target = getTarget(this.state) ?? STOPS[0];
    this.ui.render(this.state, {
      muted: this.muted, targetName: target.name,
      targetDistance: Math.hypot(target.position.x - this.state.player.position.x, target.position.z - this.state.player.position.z),
      targetBearing: relativeBearing(this.state.player.position, target.position, this.state.player.yaw),
      speed: this.state.player.speed, status: '',
      timeRemaining: this.state.run ? Math.max(0, RUN_SECONDS - this.state.run.elapsed) : undefined,
    });
    this.homeUI.render(this.state);
    this.touchControls.render(this.state);
    if (!this.bootReady) { const hi = document.querySelector<HTMLElement>('.home-interface'); if (hi) hi.hidden = true; }
    if (this.state.mode === 'home') { const fh = document.querySelector<HTMLElement>('#flight-hud'); if (fh) fh.hidden = true; }
    { const sb = document.querySelector('#start-btn') as HTMLButtonElement | null; if (sb) sb.disabled = !this.bootReady; }
    if (this.state.profile.tutorialDone) { const sb2 = document.querySelector('#start-btn'); if (sb2) sb2.innerHTML = 'Come on in <span>→</span>'; }
    { const nb = document.querySelector('#next-day-btn'); if (nb) nb.innerHTML = 'Back to your room <span>→</span>'; }
    this.saveBanner.hidden = this.saveKind === 'ready' && this.saveFyi === null;
    const bannerKey = this.saveKind + this.saveMessage + (this.saveFyi ?? '');
    if (this.saveBanner.dataset.key !== bannerKey) {
      this.saveBanner.dataset.key = bannerKey;
      this.saveBanner.textContent = this.saveKind === 'ready' ? (this.saveFyi ?? '') : this.saveMessage;
      if (this.saveKind === 'readonly') this.saveBanner.insertAdjacentHTML('beforeend', '<br><button data-save="retry">Retry</button>');
    }
  }

  private advance(ms: number): void {
    if (!this.bootReady || this.state.paused || this.contextLost) {
      this.accumulator = 0;
      this.draw(0);
      return;
    }
    const oldMode = this.state.mode;
    this.accumulator += Math.max(0, ms) / 1000;
    while (this.accumulator + 1e-10 >= 1 / 60) {
      step(this.state, this.input.sample(), 1 / 60);
      this.accumulator -= 1 / 60;
    }
    this.savePeriod += ms;
    if (this.savePeriod >= 5000 || oldMode !== this.state.mode) { this.persist(); this.savePeriod = 0; }
    this.draw(Math.min(ms / 1000, .1));
  }

  /** Called by the ScreenManager's rAF loop. */
  frame(now: number): void {
    if (this.disposed) return;
    const dt = this.lastFrame ? Math.min(now - this.lastFrame, 100) : 0;
    this.lastFrame = now;
    this.advance(dt);
  }
}
