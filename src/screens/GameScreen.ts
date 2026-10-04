import type { Screen } from './Screen';
import type { LoadingScreen } from './LoadingScreen';
import { createState, startTutorial, step, toggleHover, interact, setPaused, nearestStop, startRun, chooseJob, returnHome, getTarget, relativeBearing } from '../simulation';
import { STOPS } from '../world';
import { GameRenderer } from '../scene';
import { UI } from '../ui';
import { Input } from '../input';
import { HomeUI } from '../home-ui';
import { TouchControls, landingCommitted, touchControlsVisible } from '../touch-controls';
import { enterHome, closeHomePanel, buyUpgrade, buyFurniture, nearbyStation } from '../home';
import { SaveStore, setLastSlot } from '../storage';
import type { SaveResult } from '../storage';
import { GameAudio } from '../audio';
import type { GameState } from '../types';

/** GameScreen owns the renderer, game state, and all gameplay logic.
 * Created by LoadingScreen after the user selects a slot. */
export class GameScreen implements Screen {
  private root: HTMLElement;
  private canvas: HTMLCanvasElement;
  private loading: LoadingScreen;
  private slotId: number;
  private isNew: boolean;
  private onExitToMenu: () => void;

  private state: GameState;
  private renderer!: GameRenderer;
  private input!: Input;
  private ui!: UI;
  private homeUI!: HomeUI;
  private touchControls!: TouchControls;
  private store: SaveStore;
  private preacquired: SaveResult;
  private audio = new GameAudio();
  private saveBanner!: HTMLElement;

  private muted = true;
  private coarsePointer = false;
  private accumulator = 0;
  private lastFrame = 0;
  private contextLost = false;
  private bootReady = false;
  private saveKind = 'loading';
  private saveMessage = 'Opening your little world…';
  private saveFyi: string | null = null;
  private fyiTimer: ReturnType<typeof setTimeout> | undefined;
  private savePeriod = 0;
  private testing = false;
  private disposed = false;
  private bootTime = 0;
  private frameCount = 0;
  private diagEl: HTMLElement | null = null;

  constructor(
    root: HTMLElement,
    canvas: HTMLCanvasElement,
    loading: LoadingScreen,
    slotId: number,
    isNew: boolean,
    store: SaveStore,
    saveResult: SaveResult,
    onExitToMenu: () => void,
  ) {
    this.root = root;
    this.canvas = canvas;
    this.loading = loading;
    this.slotId = slotId;
    this.isNew = isNew;
    this.store = store;
    this.preacquired = saveResult;
    this.onExitToMenu = onExitToMenu;
    this.state = createState();
    this.coarsePointer = matchMedia('(pointer: coarse)').matches;
    this.state.coarsePointer = this.coarsePointer;
    this.testing = new URLSearchParams(location.search).get('test') === '1';
  }

  async enter(): Promise<void> {
    const L = this.loading;
    // Stage 1: Build world (heavy, synchronous)
    L.setStage('Building world…');
    await this.yieldToUI();
    try {
      this.renderer = new GameRenderer(this.canvas);
    } catch {
      this.root.innerHTML = '<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>';
      throw new Error('WebGL 2 is unavailable.');
    }

    // Stage 2: Set up input, UI
    L.setStage('Preparing…');
    await this.yieldToUI();
    this.setupInput();
    this.setupUI();

    // Stage 4: Load save
    L.setStage(this.isNew ? 'Starting new game…' : 'Loading save…');
    await this.yieldToUI();
    this.boot();

    // Done: mark slot as last played
    setLastSlot(this.slotId);
    this.diagEl = document.createElement('div');
    this.diagEl.style.cssText = 'position:fixed;left:4px;bottom:4px;z-index:99999;font:10px monospace;color:#fff;background:#000a;padding:2px 6px;border-radius:4px;pointer-events:none;';
    this.root.appendChild(this.diagEl);
  }

  exit(): void {
    this.disposed = true;
    this.diagEl?.remove();
    this.diagEl = null;
    this.audio.update(this.state, true);
    this.store.release();
    clearTimeout(this.fyiTimer);
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

  private yieldToUI(): Promise<void> {
    return new Promise(r => setTimeout(r, 0));
  }

  private setupInput(): void {
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
      start() { if (!self.bootReady) return; if (self.state.profile.tutorialDone) enterHome(self.state); else startTutorial(self.state); self.input?.clear(); (document.activeElement as HTMLElement)?.blur(); self.persist(); self.draw(0); },
      pause: () => this.pause(),
      resume: () => this.resume(),
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
      mute() { self.muted = !self.muted; self.audio.setMuted(self.muted); self.draw(0); },
      fullscreen: () => this.fullscreen(),
      chooseJob(index) { if (!self.bootReady) return; chooseJob(self.state, index); self.input.clear(); self.persist(); self.draw(0); },
      returnHome() { if (!self.bootReady) return; returnHome(self.state); self.input.clear(); self.persist(); self.draw(0); },
      nextDay() { if (!self.bootReady) return; enterHome(self.state); self.input.clear(); self.persist(); self.draw(0); },
    });
    this.homeUI = new HomeUI(root, {
      interact() { if (!self.bootReady) return; interact(self.state); self.input.clear(); self.persist(); self.draw(0); },
      close() { if (!self.bootReady) return; closeHomePanel(self.state); self.input.clear(); self.persist(); self.draw(0); },
      start() { if (!self.bootReady) return; startRun(self.state, self.testing ? 42 : undefined); self.input.clear(); self.persist(); self.draw(0); },
      upgrade(track) { if (!self.bootReady) return; buyUpgrade(self.state, track); self.persist(); self.draw(0); },
      furnish(id) { if (!self.bootReady) return; buyFurniture(self.state, id); self.persist(); self.draw(0); },
    });
    this.touchControls = new TouchControls(root);
    this.saveBanner = document.createElement('aside');
    this.saveBanner.className = 'save-status';
    this.saveBanner.setAttribute('aria-live', 'polite');
    root.append(this.saveBanner);
    this.saveBanner.addEventListener('click', event => {
      const button = (event.target as HTMLElement).closest('button');
      if (button?.dataset.save === 'retry') void this.boot();
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

  private boot(): void {
    this.bootReady = false;
    this.saveKind = 'loading';
    this.saveMessage = 'Opening your little world…';
    this.draw(0);
    if (this.isNew) {
      this.state = createState();
      this.state.coarsePointer = this.coarsePointer;
      this.renderer.setSeed(this.state.seed);
      this.bootReady = true;
      this.bootTime = performance.now();
      this.saveKind = 'ready';
      this.saveMessage = '';
      this.persist();
      this.input?.clear();
      this.accumulator = 0;
      this.draw(0);
      return;
    }
    const result = this.preacquired;
    if (result.kind === 'invalid') {
      this.store.discardUnreadable();
      this.state = createState();
      this.state.coarsePointer = this.coarsePointer;
      this.renderer.setSeed(this.state.seed);
      this.bootReady = true;
      this.saveKind = 'ready';
      this.saveMessage = '';
      this.persist();
      this.flashSaveFyi('Your saved game could not be read, so it was discarded and a new game was started.');
      this.input?.clear();
      this.accumulator = 0;
      this.draw(0);
      return;
    }
    this.saveKind = result.kind;
    this.saveMessage = result.message;
    if (result.state) this.state = result.state;
    this.renderer.setSeed(this.state.seed);
    if (result.kind === 'ready' && result.seedMigrated && this.store.canSave) this.store.save(this.state);
    this.bootReady = result.kind === 'ready' || result.kind === 'session' || result.kind === 'readonly';
    this.bootTime = performance.now();
    // Continue means play, not paused. Clear paused from restored save.
    if (this.bootReady) setPaused(this.state, false);
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
      timeRemaining: this.state.run ? Math.max(0, 360 - this.state.run.elapsed) : undefined,
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
    this.frameCount++;
    if (this.disposed) { this.updateDiag('disposed'); return; }
    const dt = this.lastFrame ? Math.min(now - this.lastFrame, 100) : 0;
    this.lastFrame = now;
    this.advance(dt);
    this.updateDiag('');
  }
  private updateDiag(note: string): void {
    if (!this.diagEl) return;
    this.diagEl.textContent = `f:${this.frameCount} boot:${this.bootReady?1:0} paused:${this.state.paused?1:0} ctxLost:${this.contextLost?1:0} ${note}`;
  }
}
