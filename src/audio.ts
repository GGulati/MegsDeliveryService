import type { GameState } from './types';

type AudioContextConstructor = new () => AudioContext;
type Snapshot = { deliveries: number; coins: number; upgrades: string; furniture: string; homePanel: GameState['homePanel']; hasJob: boolean; speed: number; returning: boolean; hover: boolean; elapsed: number; dropActive: boolean };

export type SfxName =
  | 'ui_click' | 'takeoff' | 'landing' | 'parcel_pickup'
  | 'delivery_complete' | 'purchase' | 'hover_toggle'
  | 'nightfall_warning' | 'bump' | 'purr';

/** Procedural, gesture-unlocked Web Audio with an intentionally small graph. */
export class GameAudio {
  private context?: AudioContext; private master?: GainNode; private ambience?: GainNode;
  private ambienceSources: OscillatorNode[] = []; private tones = new Set<OscillatorNode>();
  private noiseSources = new Set<AudioBufferSourceNode>();
  private muted = true; private disposed = false; private snapshot?: Snapshot; private nextNote = 0;
  private duskAmount = 0; private musicSeed = 12345; private barIndex = 0;
  private musicFilter?: BiquadFilterNode;
  // Updated even while muted, preventing unmute while paused from using stale state.
  private lastActive = false; private operationPending = false;
  // SFX trigger state (snapshot-diff).
  private lastBumpTime = -10; private nightfallWarned = false;

  setMuted(muted: boolean): void {
    if (this.disposed) return;
    this.muted = muted;
    if (!muted && !this.ensureContext()) return;
    this.reconcile();
  }

  setDuskAmount(amount: number): void {
    this.duskAmount = Math.max(0, Math.min(1, amount));
  }

  /** Clear the snapshot so the next update() establishes a new baseline
   * without triggering SFX from diffing against a different screen's state.
   * Call on screen transitions when using a shared GameAudio instance. */
  resetSnapshot(): void {
    this.snapshot = undefined;
  }

  /** Silence output without touching the SFX-diff snapshot.
   * Use when a screen exits: ScreenManager enters the new screen (which
   * resets the snapshot) before exiting the old, so an exit-time update()
   * would repopulate the snapshot with the old screen's state and cause
   * spurious SFX on the new screen's first frame. */
  silence(): void {
    this.lastActive = false;
    if (this.muted || this.disposed || !this.context) return;
    this.reconcile();
  }

  update(state: GameState, inactive: boolean): void {
    const previous = this.snapshot, next = this.takeSnapshot(state); this.snapshot = next;
    this.lastActive = !(inactive || state.paused || (typeof document !== 'undefined' && document.hidden));
    if (this.muted || this.disposed || !this.context) return;
    this.reconcile();
    if (!this.canPlay() || this.context.state !== 'running') return;
    this.playAdaptiveMelody();
    if (!previous) return;
    if (next.deliveries > previous.deliveries) this.sfx('delivery_complete');
    if (next.coins < previous.coins && (next.upgrades !== previous.upgrades || next.furniture !== previous.furniture)) this.sfx('purchase');
    if (previous.homePanel !== 'cat' && next.homePanel === 'cat') this.sfx('purr');
    // Snapshot-diff SFX triggers.
    if (!previous.hasJob && next.hasJob) this.sfx('parcel_pickup');
    if (next.hasJob && next.speed > 5 && previous.speed <= 5) this.sfx('takeoff');
    if (!previous.returning && next.returning) this.sfx('landing');
    if (previous.hover !== next.hover && !previous.dropActive && !next.dropActive) this.sfx('hover_toggle');
    // Bump: sudden speed drop (>50%) while carrying a job, 1s cooldown.
    if (next.hasJob && previous.speed > 0 && next.speed < previous.speed * 0.5) {
      const now = this.context.currentTime;
      if (now - this.lastBumpTime > 1) {
        this.sfx('bump');
        this.lastBumpTime = now;
      }
    }
    // Nightfall warning: elapsed crosses 300s (60s remaining), once per run.
    // Reset when a new run starts (elapsed goes high -> low).
    if (next.elapsed < previous.elapsed) this.nightfallWarned = false;
    if (!this.nightfallWarned && previous.elapsed < 300 && next.elapsed >= 300) {
      this.sfx('nightfall_warning');
      this.nightfallWarned = true;
    }
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true; this.lastActive = false; this.clearAmbience();
    for (const tone of this.tones) { try { tone.stop(); } catch { /* stopped */ } tone.disconnect(); }
    this.tones.clear();
    for (const source of this.noiseSources) { try { source.stop(); } catch { /* stopped */ } source.disconnect(); }
    this.noiseSources.clear();
    this.musicFilter?.disconnect(); this.musicFilter = undefined;
    if (this.context && this.context.state !== 'closed') void this.context.close().catch(() => undefined);
    this.context = undefined; this.master = undefined;
  }

  sfx(name: SfxName): void {
    if (this.muted || this.disposed || !this.context) return;
    if (this.context.state !== 'running') return;
    switch (name) {
      case 'ui_click': this.tone(800, 0.05, 0.06, 'square'); break;
      case 'takeoff': this.noiseSweep(400, 1200, 0.4); break;
      case 'landing':
        this.tone(120, 0.25, 0.12, 'sine');
        this.noiseSweep(200, 100, 0.2); // soft noise thud
        break;
      case 'parcel_pickup':
        this.tone(659.25, 0.08, 0.07, 'triangle');
        this.tone(880, 0.12, 0.06, 'triangle', 0.06);
        break;
      case 'delivery_complete':
        this.tone(523.25, 0.12, 0.08, 'triangle');
        this.tone(659.25, 0.12, 0.08, 'triangle', 0.1);
        this.tone(783.99, 0.12, 0.08, 'triangle', 0.2);
        this.tone(1046.5, 0.3, 0.07, 'triangle', 0.3);
        break;
      case 'purchase':
        this.tone(987.77, 0.08, 0.06, 'sine');
        this.tone(1318.5, 0.18, 0.05, 'sine', 0.07);
        break;
      case 'hover_toggle':
        this.tone(500, 0.06, 0.05, 'sine');
        break;
      case 'nightfall_warning':
        // 1.2s decay per design spec
        this.tone(880, 1.2, 0.06, 'sine');
        this.tone(1320, 1.0, 0.03, 'sine', 0.05);
        break;
      case 'bump':
        this.tone(90, 0.18, 0.1, 'sine');
        break;
      case 'purr':
        this.tone(110, 0.48, 0.055, 'sine');
        this.tone(164.81, 0.42, 0.035, 'sine', 0.08);
        break;
      default: break;
    }
  }

  debugState(): { context: string; muted: boolean; duskAmount: number; activeTones: number } {
    return {
      context: this.context?.state ?? 'unavailable',
      muted: this.muted,
      duskAmount: this.duskAmount,
      activeTones: this.tones.size + this.noiseSources.size,
    };
  }

  private ensureContext(): AudioContext | undefined {
    if (this.context) return this.context;
    const Constructor = typeof window === 'undefined' ? undefined : (window.AudioContext || (window as Window & { webkitAudioContext?: AudioContextConstructor }).webkitAudioContext);
    if (!Constructor) return undefined;
    try { const context = new Constructor(), master = context.createGain(); master.gain.value = .0001; master.connect(context.destination); this.context = context; this.master = master; return context; } catch { return undefined; }
  }
  private canPlay(): boolean { return !this.disposed && !this.muted && this.lastActive; }

  private reconcile(): void {
    const context = this.context;
    if (!context || context.state === 'closed') return;
    const play = this.canPlay();
    if (play && context.state === 'running') { this.startAmbience(); return; }
    if (!play && this.master) { const now = context.currentTime; this.master.gain.cancelScheduledValues(now); this.master.gain.setTargetAtTime(.0001, now, .025); }
    if (this.operationPending || (play ? context.state !== 'suspended' : context.state !== 'running')) return;
    this.operationPending = true;
    const operation = play ? context.resume.bind(context) : context.suspend.bind(context);
    void operation().catch(() => undefined).then(() => {
      this.operationPending = false;
      // Intent can change while a Web Audio operation is pending.
      if (this.canPlay() && context.state === 'running') this.startAmbience();
      this.reconcile();
    });
  }

  private startAmbience(): void {
    const context = this.context, master = this.master;
    if (!context || !master || context.state !== 'running' || !this.canPlay()) return;
    const now = context.currentTime; master.gain.cancelScheduledValues(now); master.gain.setTargetAtTime(.14, now, .08);
    if (this.ambience) return;
    const ambience = context.createGain(), wind = context.createOscillator(), drift = context.createOscillator(), driftGain = context.createGain();
    ambience.gain.value = .035; ambience.connect(master); wind.type = 'sine'; wind.frequency.value = 82; drift.type = 'sine'; drift.frequency.value = .09; driftGain.gain.value = 11;
    drift.connect(driftGain).connect(wind.frequency); wind.connect(ambience); wind.start(); drift.start();
    this.ambience = ambience; this.ambienceSources = [wind, drift];
  }
  private clearAmbience(): void { for (const source of this.ambienceSources) { try { source.stop(); } catch { /* stopped */ } source.disconnect(); } this.ambienceSources = []; this.ambience?.disconnect(); this.ambience = undefined; }
  /** Deterministic PRNG; advances this.musicSeed. */
  private nextRandom(): number {
    let s = this.musicSeed | 0;
    s = (s + 0x6D2B79F5) | 0;
    this.musicSeed = s; // PERSIST the updated seed (critical fix)
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  private playAdaptiveMelody(): void {
    const context = this.context, master = this.master;
    if (!context || !master || context.currentTime < this.nextNote) return;
    const dusk = this.duskAmount;

    // 8-bar chord loop: C - G - Am - F - C - G - F - G
    const bar = this.barIndex % 8;
    const roots = [130.81, 98, 110, 87.31, 130.81, 98, 87.31, 98]; // C3 G2 A2 F2 C3 G2 F2 G2
    const root = roots[bar];

    // Third: major (1.2599) at day → minor (1.1892) at night
    const thirdRatio = 1.2599 - dusk * 0.0707;

    // Filter cutoff: 2000Hz day → 800Hz night, smoothed with 2s time constant
    if (!this.musicFilter) {
      this.musicFilter = context.createBiquadFilter();
      this.musicFilter.type = 'lowpass';
      this.musicFilter.frequency.value = 2000;
      this.musicFilter.connect(master);
    }
    const targetCutoff = 2000 - dusk * 1200;
    this.musicFilter.frequency.setTargetAtTime(targetCutoff, context.currentTime, 2.0);

    // Pad chord through the filter (lower volume); melody bypasses the filter
    const padDest = this.musicFilter ?? master;
    this.tone(root, 2.0, 0.025, 'sine', 0, padDest);
    this.tone(root * 1.5, 2.0, 0.02, 'sine', 0, padDest);
    this.tone(root * thirdRatio * 2, 1.8, 0.018, 'triangle', 0, padDest);

    // Melody: pentatonic (sine + triangle blend), sparser at night
    const scale = [261.63, 293.66, 329.63, 392, 440, 523.25];
    const rand = this.nextRandom();
    if (rand > dusk * 0.4) {
      const note = scale[Math.floor(this.nextRandom() * scale.length)];
      const duration = 0.4 + dusk * 0.6;
      const vol = 0.035 - dusk * 0.01;
      this.tone(note, duration, vol, 'sine');
      this.tone(note * 2, duration * 0.7, vol * 0.4, 'triangle'); // blend
    }

    // Nightfall shimmer: gentle high sine, only when dusk > 0.5
    if (dusk > 0.5) {
      const shimmerVol = (dusk - 0.5) * 0.02;
      this.tone(2093, 1.5, shimmerVol, 'sine'); // C7
    }

    const tempo = 1.45 + dusk * 0.5;
    this.nextNote = context.currentTime + tempo;
    this.barIndex++;
  }
  private tone(frequency: number, duration: number, volume: number, type: OscillatorType, delay = 0, destination?: AudioNode): void {
    const context = this.context, master = this.master; if (!context || !master || context.state !== 'running' || !this.canPlay()) return;
    const start = context.currentTime + delay, oscillator = context.createOscillator(), gain = context.createGain(); oscillator.type = type; oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001,start); gain.gain.exponentialRampToValueAtTime(volume,start+.018); gain.gain.exponentialRampToValueAtTime(.0001,start+duration); oscillator.connect(gain).connect(destination ?? master); this.tones.add(oscillator);
    oscillator.onended = () => { this.tones.delete(oscillator); oscillator.disconnect(); gain.disconnect(); }; oscillator.start(start); oscillator.stop(start + duration + .03);
  }
  private noiseSweep(fromFreq: number, toFreq: number, duration: number): void {
    const context = this.context, master = this.master;
    if (!context || !master || context.state !== 'running' || !this.canPlay()) return;
    const bufferSize = Math.floor(context.sampleRate * duration);
    const buffer = context.createBuffer(1, bufferSize, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const source = context.createBufferSource();
    source.buffer = buffer;
    const filter = context.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(fromFreq, context.currentTime);
    filter.frequency.exponentialRampToValueAtTime(toFreq, context.currentTime + duration);
    const gain = context.createGain();
    gain.gain.setValueAtTime(.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.08, context.currentTime + .05);
    gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + duration);
    source.connect(filter).connect(gain).connect(master);
    this.noiseSources.add(source);
    source.onended = () => { this.noiseSources.delete(source); source.disconnect(); filter.disconnect(); gain.disconnect(); };
    source.start();
    source.stop(context.currentTime + duration + .05);
  }
  private takeSnapshot(state: GameState): Snapshot { return { deliveries: Math.max(state.profile.deliveries,state.run?.deliveries??0), coins: state.profile.coins, upgrades: `${state.profile.upgrades.speed}:${state.profile.upgrades.handling}:${state.profile.upgrades.braking}`, furniture: state.profile.furniture.join('|'), homePanel: state.homePanel, hasJob: !!state.run?.job, speed: state.player.speed, returning: !!state.run?.returning, hover: state.player.hover, elapsed: state.run?.elapsed ?? 0, dropActive: !!state.drop }; }
}
