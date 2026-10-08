import type { GameState } from './types';
import { RUN_SECONDS } from './simulation';

type AudioContextConstructor = new () => AudioContext;
type Snapshot = { deliveries: number; coins: number; upgrades: string; furniture: string; homePanel: GameState['homePanel']; hasJob: boolean; speed: number; returning: boolean; hover: boolean; elapsed: number; dropActive: boolean };

export type SfxName =
  | 'ui_click' | 'takeoff' | 'landing' | 'parcel_pickup'
  | 'delivery_complete' | 'purchase' | 'hover_toggle'
  | 'nightfall_warning' | 'bump' | 'purr';

/** Shared tuning for the OoT-inspired themes. Single source of truth for
 * volumes, tempos, and transition timing — tune here, not in the sequencers. */
export const OOT_TUNING = {
  master: 0.6,
  lullaby: { tempo: 80, melodyVol: 0.05, padVol: 0.03, bassVol: 0.02 },
  field: { tempo: 126, melodyVol: 0.06, padVol: 0.025, bassVol: 0.035, drumVol: 0.04 },
  signalVol: 0.05, // transition motif volume
} as const;

/** Last N seconds of the day use the field theme (hourglass shaking). */
export const FIELD_THEME_SECONDS = 60;

/** Lullaby progression: 8 bars of I–V–vi–IV in C major with added 9ths.
 * Pad voicings are close-position triads + 9th; bass roots sit an octave below. */
const LULLABY_CHORDS: { bass: number; pad: number[] }[] = [
  { bass: 36, pad: [60, 64, 67, 74] }, // Cmaj9
  { bass: 43, pad: [55, 59, 62, 69] }, // Gadd9
  { bass: 45, pad: [57, 60, 64, 71] }, // Am9
  { bass: 41, pad: [53, 57, 60, 67] }, // Fmaj9
  { bass: 36, pad: [60, 64, 67, 74] },
  { bass: 43, pad: [55, 59, 62, 69] },
  { bass: 45, pad: [57, 60, 64, 71] },
  { bass: 41, pad: [53, 57, 60, 67] },
];

/** C major, one octave C4–C5: the lullaby melody never leaves this range. */
const LULLABY_SCALE = [60, 62, 64, 65, 67, 69, 71, 72];

/** Field progression: 8 bars of I–V–vi–IV in C major, tighter voicings
 * (no 9ths) for rhythmic drive. Bass roots sit an octave below the pad. */
const FIELD_CHORDS: { bass: number; pad: number[] }[] = [
  { bass: 36, pad: [48, 52, 55] }, // C
  { bass: 43, pad: [55, 59, 62] }, // G
  { bass: 45, pad: [57, 60, 64] }, // Am
  { bass: 41, pad: [53, 57, 60] }, // F
  { bass: 36, pad: [48, 52, 55] }, // C
  { bass: 43, pad: [55, 59, 62] }, // G
  { bass: 41, pad: [53, 57, 60] }, // F
  { bass: 43, pad: [55, 59, 62] }, // G
];

/** C major, C4–C5. The field melody uses this plus the Dorian F# (66) for color. */
const FIELD_SCALE = [60, 62, 64, 65, 67, 69, 71, 72];
/** F#4: Dorian raised 6th color, used sparingly over vi (Am) bars. */
const DORIAN_FSHARP = 66;

/** Signal phrase notes (MIDI). Lullaby→field rises C4–E4–G4–C5;
 * field→lullaby falls G4–E4–C4–G3. One bar in the outgoing theme's meter. */
const SIGNAL_RISING = [60, 64, 67, 72];
const SIGNAL_FALLING = [67, 64, 60, 55];

/** Procedural, gesture-unlocked Web Audio with an intentionally small graph. */
export class GameAudio {
  private context?: AudioContext; private master?: GainNode; private ambience?: GainNode;
  private ambienceSources: OscillatorNode[] = []; private tones = new Set<OscillatorNode>();
  private noiseSources = new Set<AudioBufferSourceNode>();
  private muted = true; private disposed = false; private snapshot?: Snapshot;
  private musicFilter?: BiquadFilterNode;
  // OoT theme state. Per-theme scheduling + PRNG so the themes never interfere.
  currentTheme: 'lullaby' | 'field' = 'lullaby';
  private lullabyNextNote = 0; private lullabyBar = 0;
  private fieldNextNote = 0; private fieldBar = 0;
  private lullabySeed = 12345; private fieldSeed = 67890;
  // Melody position within LULLABY_SCALE (index). Persists across bars for
  // a continuous stepwise line; reset by enterLullaby().
  private lullabyDegree = 2;
  // Melody position within FIELD_SCALE (index). Persists across bars for
  // call-and-response phrasing; reset by enterField().
  private fieldDegree = 4;
  // Theme target from timeRemaining (Task 3). Task 6 consumes this for the transition.
  // Updated even while muted, like lastActive, so unmute mid-game uses fresh state.
  private targetTheme: 'lullaby' | 'field' = 'lullaby';
  // Task 6: signal-phrase transition state. While transitioning, neither
  // theme sequencer plays — only the 1-bar signal (never layer 3/4 over 6/8).
  private transitioning = false;
  private transitionEndTime = 0;
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

  /** Select the music theme from the time remaining in the day.
   * The field theme takes over for the last FIELD_THEME_SECONDS (hourglass shaking). */
  selectTheme(timeRemaining: number | undefined): 'lullaby' | 'field' {
    return timeRemaining !== undefined && timeRemaining <= FIELD_THEME_SECONDS ? 'field' : 'lullaby';
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
    // Wire timeRemaining → theme target (Task 3). Menu/loading pass run: null → lullaby.
    const elapsed = state.run?.elapsed;
    this.targetTheme = this.selectTheme(elapsed !== undefined ? RUN_SECONDS - elapsed : undefined);
    if (this.muted || this.disposed || !this.context) return;
    this.reconcile();
    if (!this.canPlay() || this.context.state !== 'running') return;
    const context = this.context;
    // Task 6: signal-phrase transition. When the target theme changes, play a
    // 1-bar signal in the outgoing theme's meter, then hard-cut on the downbeat.
    // The sequencers stay silent during the signal — never layer 3/4 over 6/8.
    if (!this.transitioning && this.targetTheme !== this.currentTheme) {
      this.transitioning = true;
      this.playSignal(this.currentTheme);
      this.transitionEndTime = context.currentTime + this.barDuration(this.currentTheme);
    }
    if (this.transitioning && context.currentTime >= this.transitionEndTime) {
      this.currentTheme = this.targetTheme;
      if (this.currentTheme === 'lullaby') this.enterLullaby();
      else this.enterField();
      this.transitioning = false;
    }
    if (!this.transitioning) {
      if (this.currentTheme === 'lullaby') this.playLullaby();
      if (this.currentTheme === 'field') this.playField();
    }
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
    // Nightfall warning: elapsed crosses RUN_SECONDS - FIELD_THEME_SECONDS (60s remaining), once per run.
    // Reset when a new run starts (elapsed goes high -> low).
    if (next.elapsed < previous.elapsed) this.nightfallWarned = false;
    const warnAt = RUN_SECONDS - FIELD_THEME_SECONDS;
    if (!this.nightfallWarned && previous.elapsed < warnAt && next.elapsed >= warnAt) {
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

  debugState(): { context: string; muted: boolean; activeTones: number } {
    return {
      context: this.context?.state ?? 'unavailable',
      muted: this.muted,
      activeTones: this.tones.size + this.noiseSources.size,
    };
  }

  /** Reset the lullaby sequencer for a fresh theme entry: bar 0, melody
   * home, scheduled from now. Task 6 calls this on the transition downbeat. */
  enterLullaby(): void {
    this.lullabyBar = 0;
    this.lullabyDegree = 2;
    if (this.context) this.lullabyNextNote = this.context.currentTime;
  }

  /** Reset the field sequencer for a fresh theme entry: bar 0, melody home,
   * PRNG reseeded for a deterministic opening phrase, scheduled from now.
   * Task 6 calls this on the transition downbeat. */
  enterField(): void {
    this.fieldBar = 0;
    this.fieldDegree = 4;
    this.fieldSeed = 67890;
    if (this.context) this.fieldNextNote = this.context.currentTime;
  }

  /** One bar in seconds for a theme: lullaby 3/4 at 80 BPM = 2.25s,
   * field 6/8 at 126 BPM ≈ 2.857s. */
  private barDuration(theme: 'lullaby' | 'field'): number {
    return theme === 'lullaby'
      ? (60 / OOT_TUNING.lullaby.tempo) * 3
      : (60 / OOT_TUNING.field.tempo) * 6;
  }

  /** Signal phrase: 4-note motif over one bar of the outgoing theme's meter.
   * Rising for lullaby→field, falling for field→lullaby. Scheduled immediately
   * at OOT_TUNING.signalVol; the sequencers stay silent while it plays. */
  private playSignal(outgoing: 'lullaby' | 'field'): void {
    if (!this.context) return;
    const notes = outgoing === 'lullaby' ? SIGNAL_RISING : SIGNAL_FALLING;
    const barDur = this.barDuration(outgoing);
    const spacing = barDur / notes.length;
    for (let i = 0; i < notes.length; i++) {
      this.tone(this.freq(notes[i]), spacing * 0.9, OOT_TUNING.signalVol, 'sine', i * spacing);
    }
  }

  /** Lullaby theme: 3/4 at OOT_TUNING.lullaby.tempo, I–V–vi–IV with 9ths.
   * Schedules one bar when due, using the lullaby's own scheduling state
   * and PRNG stream so it never interferes with the field theme. */
  private playLullaby(): void {
    const context = this.context;
    if (!context || context.currentTime < this.lullabyNextNote) return;
    const t = OOT_TUNING.lullaby;
    const beat = 60 / t.tempo; // 0.75s at 80 BPM
    const barDur = beat * 3;   // 2.25s, 3/4
    const start = Math.max(this.lullabyNextNote, context.currentTime);
    const delay = start - context.currentTime;
    const chord = LULLABY_CHORDS[this.lullabyBar % LULLABY_CHORDS.length];
    const filter = this.ensureFilter();
    // Pad: triad + 9th, whole bar, through the music lowpass.
    for (const midi of chord.pad) this.tone(this.freq(midi), barDur, t.padVol, 'sine', delay, filter);
    // Bass: root on beat 1.
    this.tone(this.freq(chord.bass), beat * 2.5, t.bassVol, 'sine', delay);
    // Melody: stepwise PRNG walk, one note per beat, C4–C5.
    // Every 4th bar the line returns home, giving a lullaby-like AABA lilt.
    if (this.lullabyBar % 4 === 0) this.lullabyDegree = 2;
    for (let b = 0; b < 3; b++) {
      const r = this.nextLullabyRandom();
      const step = r < 0.3 ? 0 : r < 0.55 ? 1 : r < 0.75 ? -1 : r < 0.9 ? 2 : -2;
      this.lullabyDegree = Math.min(LULLABY_SCALE.length - 1, Math.max(0, this.lullabyDegree + step));
      this.tone(this.freq(LULLABY_SCALE[this.lullabyDegree]), beat * 0.9, t.melodyVol, 'sine', delay + b * beat);
    }
    this.lullabyBar++;
    this.lullabyNextNote = start + barDur;
  }

  /** Mulberry32 step on the lullaby seed. Own stream, never shared with field. */
  private nextLullabyRandom(): number {
    const seed = (this.lullabySeed + 0x6D2B79F5) | 0;
    this.lullabySeed = seed;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /** Field theme: 6/8 at OOT_TUNING.field.tempo, I–V–vi–IV with Dorian color.
   * Hyrule Field-inspired drive — adventurous but still cozy. Schedules one
   * bar when due, using the field's own scheduling state and PRNG stream so
   * it never interferes with the lullaby theme. */
  private playField(): void {
    const context = this.context;
    if (!context || context.currentTime < this.fieldNextNote) return;
    const t = OOT_TUNING.field;
    const eighth = 60 / t.tempo; // 0.476s at 126 BPM
    const barDur = eighth * 6;   // ≈2.86s, 6/8
    const start = Math.max(this.fieldNextNote, context.currentTime);
    const delay = start - context.currentTime;
    const chord = FIELD_CHORDS[this.fieldBar % FIELD_CHORDS.length];
    const filter = this.ensureFilter();
    // Pad: tight triad, half-bar, through the music lowpass.
    for (const midi of chord.pad) this.tone(this.freq(midi), barDur / 2, t.padVol, 'sine', delay, filter);
    // Bass: driving 8ths — root pulse, fifth on the back half.
    const bassSteps = [1, 1, 1.5, 1, 1, 1.5];
    for (let i = 0; i < 6; i++) {
      this.tone(this.freq(chord.bass) * bassSteps[i], eighth * 0.9, t.bassVol, 'triangle', delay + i * eighth);
    }
    // Percussion: low tom on beats 1 & 4, soft hats on the off-eighths.
    this.tone(82, 0.18, t.drumVol, 'sine', delay);
    this.tone(82, 0.18, t.drumVol, 'sine', delay + 3 * eighth);
    for (const off of [1, 2, 4, 5]) {
      this.noiseSweep(7000, 7000, 0.04, t.drumVol, delay + off * eighth);
    }
    // Melody: rhythmic PRNG line with 4th/5th leaps, call-and-response.
    // Bars 0–3 call (ascending energy), bars 4–7 respond (resolve home).
    // Every 4th bar the line returns home for phrasing.
    if (this.fieldBar % 4 === 0) this.fieldDegree = 4;
    const positions = [0, 1, 3, 4]; // syncopated 6/8 lilt
    for (const pos of positions) {
      const r = this.nextFieldRandom();
      // Leap of 4th/5th (35%), step (45%), repeat (20%) — more leapy than lullaby.
      const step = r < 0.2 ? 0 : r < 0.4 ? 3 : r < 0.55 ? 4 : r < 0.75 ? 1 : r < 0.9 ? -1 : 2;
      this.fieldDegree = Math.min(FIELD_SCALE.length - 1, Math.max(0, this.fieldDegree + step));
      let midi = FIELD_SCALE[this.fieldDegree];
      // Dorian color: on the first Am (vi) bar, the second melody note lifts
      // to F# — a composed Hyrule-style inflection, not a random event.
      const bar = this.fieldBar % 8;
      if (bar === 2 && pos === 1) midi = DORIAN_FSHARP;
      this.tone(this.freq(midi), eighth * 1.8, t.melodyVol, 'sine', delay + pos * eighth);
    }
    this.fieldBar++;
    this.fieldNextNote = start + barDur;
  }

  /** Mulberry32 step on the field seed. Own stream, never shared with lullaby. */
  private nextFieldRandom(): number {
    const seed = (this.fieldSeed + 0x6D2B79F5) | 0;
    this.fieldSeed = seed;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  private freq(midi: number): number { return 440 * Math.pow(2, (midi - 69) / 12); }

  /** Lazily create the shared music lowpass (fixed 1800Hz per Task 2). */
  private ensureFilter(): BiquadFilterNode | undefined {
    const context = this.context, master = this.master;
    if (!context || !master) return undefined;
    if (!this.musicFilter) {
      const filter = context.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1800;
      filter.connect(master);
      this.musicFilter = filter;
    }
    return this.musicFilter;
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
    const now = context.currentTime; master.gain.cancelScheduledValues(now); master.gain.setTargetAtTime(OOT_TUNING.master, now, .08);
    if (this.ambience) return;
    const ambience = context.createGain(), wind = context.createOscillator(), drift = context.createOscillator(), driftGain = context.createGain();
    ambience.gain.value = .035; ambience.connect(master); wind.type = 'sine'; wind.frequency.value = 82; drift.type = 'sine'; drift.frequency.value = .09; driftGain.gain.value = 11;
    drift.connect(driftGain).connect(wind.frequency); wind.connect(ambience); wind.start(); drift.start();
    this.ambience = ambience; this.ambienceSources = [wind, drift];
  }
  private clearAmbience(): void { for (const source of this.ambienceSources) { try { source.stop(); } catch { /* stopped */ } source.disconnect(); } this.ambienceSources = []; this.ambience?.disconnect(); this.ambience = undefined; }
  private tone(frequency: number, duration: number, volume: number, type: OscillatorType, delay = 0, destination?: AudioNode): void {
    const context = this.context, master = this.master; if (!context || !master || context.state !== 'running' || !this.canPlay()) return;
    const start = context.currentTime + delay, oscillator = context.createOscillator(), gain = context.createGain(); oscillator.type = type; oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001,start); gain.gain.exponentialRampToValueAtTime(volume,start+.018); gain.gain.exponentialRampToValueAtTime(.0001,start+duration); oscillator.connect(gain).connect(destination ?? master); this.tones.add(oscillator);
    oscillator.onended = () => { this.tones.delete(oscillator); oscillator.disconnect(); gain.disconnect(); }; oscillator.start(start); oscillator.stop(start + duration + .03);
  }
  private noiseSweep(fromFreq: number, toFreq: number, duration: number, volume = 0.08, delay = 0): void {
    const context = this.context, master = this.master;
    if (!context || !master || context.state !== 'running' || !this.canPlay()) return;
    const start = context.currentTime + delay;
    const bufferSize = Math.floor(context.sampleRate * duration);
    const buffer = context.createBuffer(1, bufferSize, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const source = context.createBufferSource();
    source.buffer = buffer;
    const filter = context.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(fromFreq, start);
    filter.frequency.exponentialRampToValueAtTime(toFreq, start + duration);
    const gain = context.createGain();
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .05);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    source.connect(filter).connect(gain).connect(master);
    this.noiseSources.add(source);
    source.onended = () => { this.noiseSources.delete(source); source.disconnect(); filter.disconnect(); gain.disconnect(); };
    source.start(start);
    source.stop(start + duration + .05);
  }
  private takeSnapshot(state: GameState): Snapshot { return { deliveries: Math.max(state.profile.deliveries,state.run?.deliveries??0), coins: state.profile.coins, upgrades: `${state.profile.upgrades.speed}:${state.profile.upgrades.handling}:${state.profile.upgrades.braking}`, furniture: state.profile.furniture.join('|'), homePanel: state.homePanel, hasJob: !!state.run?.job, speed: state.player.speed, returning: !!state.run?.returning, hover: state.player.hover, elapsed: state.run?.elapsed ?? 0, dropActive: !!state.drop }; }
}
