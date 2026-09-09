import type { GameState } from './types';

type AudioContextConstructor = new () => AudioContext;
type Snapshot = { deliveries: number; coins: number; upgrades: string; furniture: string; homePanel: GameState['homePanel'] };

/** Procedural, gesture-unlocked Web Audio with an intentionally small graph. */
export class GameAudio {
  private context?: AudioContext; private master?: GainNode; private ambience?: GainNode;
  private ambienceSources: OscillatorNode[] = []; private tones = new Set<OscillatorNode>();
  private muted = true; private disposed = false; private snapshot?: Snapshot; private nextNote = 0;
  // Updated even while muted, preventing unmute while paused from using stale state.
  private lastActive = false; private operationPending = false;

  setMuted(muted: boolean): void {
    if (this.disposed) return;
    this.muted = muted;
    if (!muted && !this.ensureContext()) return;
    this.reconcile();
  }

  update(state: GameState, inactive: boolean): void {
    const previous = this.snapshot, next = this.takeSnapshot(state); this.snapshot = next;
    this.lastActive = !(inactive || state.paused || (typeof document !== 'undefined' && document.hidden));
    if (this.muted || this.disposed || !this.context) return;
    this.reconcile();
    if (!this.canPlay() || this.context.state !== 'running') return;
    this.playMelody();
    if (!previous) return;
    if (next.deliveries > previous.deliveries) this.deliveryCue();
    if (next.coins < previous.coins && (next.upgrades !== previous.upgrades || next.furniture !== previous.furniture)) this.purchaseCue();
    if (previous.homePanel !== 'cat' && next.homePanel === 'cat') this.purrCue();
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true; this.lastActive = false; this.clearAmbience();
    for (const tone of this.tones) { try { tone.stop(); } catch { /* stopped */ } tone.disconnect(); }
    this.tones.clear();
    if (this.context && this.context.state !== 'closed') void this.context.close().catch(() => undefined);
    this.context = undefined; this.master = undefined;
  }

  debugState(): { context: string; muted: boolean } { return { context: this.context?.state ?? 'unavailable', muted: this.muted }; }

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
  private playMelody(): void { const context = this.context; if (!context || context.currentTime < this.nextNote) return; const notes = [261.63,329.63,392,523.25,440,329.63]; this.tone(notes[Math.floor((context.currentTime*1.7)%notes.length)],.11,.045,'sine'); this.nextNote = context.currentTime + 1.45; }
  private deliveryCue(): void { this.tone(659.25,.08,.09,'triangle'); this.tone(783.99,.19,.07,'triangle',.09); }
  private purchaseCue(): void { this.tone(523.25,.06,.08,'sine'); this.tone(783.99,.16,.075,'sine',.07); }
  private purrCue(): void { this.tone(110,.48,.055,'sine'); this.tone(164.81,.42,.035,'sine',.08); }
  private tone(frequency: number, duration: number, volume: number, type: OscillatorType, delay = 0): void {
    const context = this.context, master = this.master; if (!context || !master || context.state !== 'running' || !this.canPlay()) return;
    const start = context.currentTime + delay, oscillator = context.createOscillator(), gain = context.createGain(); oscillator.type = type; oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001,start); gain.gain.exponentialRampToValueAtTime(volume,start+.018); gain.gain.exponentialRampToValueAtTime(.0001,start+duration); oscillator.connect(gain).connect(master); this.tones.add(oscillator);
    oscillator.onended = () => { this.tones.delete(oscillator); oscillator.disconnect(); gain.disconnect(); }; oscillator.start(start); oscillator.stop(start + duration + .03);
  }
  private takeSnapshot(state: GameState): Snapshot { return { deliveries: Math.max(state.profile.deliveries,state.run?.deliveries??0), coins: state.profile.coins, upgrades: `${state.profile.upgrades.speed}:${state.profile.upgrades.handling}:${state.profile.upgrades.braking}`, furniture: state.profile.furniture.join('|'), homePanel: state.homePanel }; }
}
