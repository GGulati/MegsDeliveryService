import assert from 'node:assert/strict';
import test from 'node:test';
import { GameAudio, type SfxName } from '../src/audio';
import { createState } from '../src/simulation';

class FakeParam { value = 0; setValueAtTime() {} exponentialRampToValueAtTime() {} cancelScheduledValues() {} setTargetAtTime() {} }
class FakeNode { gain = new FakeParam(); frequency = new FakeParam(); connections: unknown[] = []; connect(target: unknown) { this.connections.push(target); return target as FakeNode; } disconnect() { this.connections = []; } }
class FakeOscillator extends FakeNode { type: OscillatorType = 'sine'; onended: (() => void) | null = null; started = false; stopped = false; start() { this.started = true; } stop() { this.stopped = true; this.onended?.(); } }
class FakeBuffer extends FakeNode { data: Float32Array; constructor(size: number) { super(); this.data = new Float32Array(size); } getChannelData() { return this.data; } }
class FakeBufferSource extends FakeNode { buffer: FakeBuffer | null = null; onended: (() => void) | null = null; started = false; stopped = false; start() { this.started = true; } stop() { this.stopped = true; /* onended fires async in real API; test triggers manually if needed */ } }
class FakeBiquadFilter extends FakeNode { type: BiquadFilterType = 'lowpass'; }
class FakeContext {
  static instances: FakeContext[] = [];
  state: AudioContextState = 'suspended'; currentTime = 1; sampleRate = 44100; destination = new FakeNode(); oscillators: FakeOscillator[] = []; bufferSources: FakeBufferSource[] = [];
  resumeCalls = 0; suspendCalls = 0; closed = false; deferredResume?: () => void;
  constructor() { FakeContext.instances.push(this); }
  createGain() { return new FakeNode(); } createOscillator() { const oscillator = new FakeOscillator(); this.oscillators.push(oscillator); return oscillator; }
  createBuffer(_channels: number, size: number, _sampleRate: number) { return new FakeBuffer(size); }
  createBufferSource() { const source = new FakeBufferSource(); this.bufferSources.push(source); return source; }
  createBiquadFilter() { return new FakeBiquadFilter(); }
  resume() { this.resumeCalls++; return new Promise<void>(resolve => { this.deferredResume = () => { this.state = 'running'; resolve(); }; }); }
  suspend() { this.suspendCalls++; this.state = 'suspended'; return Promise.resolve(); }
  close() { this.closed = true; this.state = 'closed'; return Promise.resolve(); }
}

function install(): () => void {
  FakeContext.instances = [];
  const old = Object.getOwnPropertyDescriptor(globalThis, 'window');
  Object.defineProperty(globalThis, 'window', { configurable: true, value: { AudioContext: FakeContext as unknown as typeof AudioContext } });
  return () => { if (old) Object.defineProperty(globalThis, 'window', old); else delete (globalThis as { window?: unknown }).window; };
}
async function flush() { await Promise.resolve(); await Promise.resolve(); }

test('audio is initially muted and does not allocate a context', () => {
  const restore = install(); try { const audio = new GameAudio(); audio.update(createState(), false); assert.deepEqual(audio.debugState(), { context: 'unavailable', muted: true, activeTones: 0 }); } finally { restore(); }
});

test('unmute starts only after an active update, then pause and resume reconcile once', async () => {
  const restore = install(); try {
    const audio = new GameAudio(), state = createState(); audio.update(state, false); audio.setMuted(false);
    const context = FakeContext.instances[0]; assert.equal(context.resumeCalls, 1); context.deferredResume?.(); await flush(); assert.ok(context.oscillators.length >= 2);
    state.paused = true; audio.update(state, false); await flush(); assert.equal(context.suspendCalls, 1);
    state.paused = false; audio.update(state, false); assert.equal(context.resumeCalls, 2); context.deferredResume?.(); await flush();
    assert.equal(audio.debugState().context, 'running');
  } finally { restore(); }
});

test('unmute while paused stays suspended', () => {
  const restore = install(); try { const audio = new GameAudio(), state = createState(); state.paused = true; audio.update(state, false); audio.setMuted(false); assert.equal(FakeContext.instances[0].resumeCalls, 0); } finally { restore(); }
});

test('dispose closes context and stops tracked ambience', async () => {
  const restore = install(); try {
    const audio = new GameAudio(), state = createState(); audio.update(state, false); audio.setMuted(false); const context = FakeContext.instances[0]; context.deferredResume?.(); await flush(); audio.dispose();
    assert.equal(context.closed, true); assert.ok(context.oscillators.every(oscillator => oscillator.stopped)); assert.equal(audio.debugState().context, 'unavailable');
  } finally { restore(); }
});

test('a stale async resume cannot revive muted audio', async () => {
  const restore = install(); try {
    const audio = new GameAudio(), state = createState(); audio.update(state, false); audio.setMuted(false); const context = FakeContext.instances[0]; audio.setMuted(true); context.deferredResume?.(); await flush();
    assert.equal(audio.debugState().muted, true); assert.equal(context.oscillators.length, 0); assert.equal(context.suspendCalls, 1);
  } finally { restore(); }
});

test('sfx ui_click creates an oscillator when unmuted', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    audio.update(createState(), false); // sets lastActive=true
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    const before = ctx.oscillators.length;
    audio.sfx('ui_click');
    assert.ok(ctx.oscillators.length > before, 'should create oscillator for ui_click');
  } finally { restore(); }
});

test('sfx is no-op when muted', async () => {
  const restore = install(); try {
    const audio = new GameAudio(); // muted by default
    audio.sfx('ui_click'); // should not throw
    assert.equal(FakeContext.instances.length, 0, 'no context when muted');
  } finally { restore(); }
});

test('sfx is no-op after dispose', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    audio.setMuted(false);
    await flush();
    audio.dispose();
    audio.sfx('ui_click'); // should not throw
  } finally { restore(); }
});

test('noiseSweep tracks sources for dispose cleanup', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    audio.update(createState(), false); // sets lastActive=true
    audio.setMuted(false);
    await flush();
    FakeContext.instances[0].state = 'running';
    audio.sfx('takeoff'); // uses noiseSweep
    // @ts-expect-error accessing private for test
    assert.ok(audio.noiseSources.size > 0, 'noise source tracked');
    audio.dispose();
    // @ts-expect-error accessing private for test
    assert.equal(audio.noiseSources.size, 0, 'noise sources cleared on dispose');
  } finally { restore(); }
});

const allCues: SfxName[] = ['ui_click', 'takeoff', 'landing', 'parcel_pickup', 'delivery_complete', 'purchase', 'hover_toggle', 'nightfall_warning', 'bump', 'purr'];
for (const cue of allCues) {
  test(`sfx ${cue} produces sound`, async () => {
    const restore = install(); try {
      const audio = new GameAudio();
      audio.update(createState(), false); // sets lastActive=true so tone() doesn't no-op
      audio.setMuted(false);
      await flush();
      const ctx = FakeContext.instances[0];
      ctx.state = 'running';
      const oscBefore = ctx.oscillators.length;
      const noiseBefore = ctx.bufferSources.length;
      audio.sfx(cue);
      const produced = ctx.oscillators.length > oscBefore || ctx.bufferSources.length > noiseBefore;
      assert.ok(produced, `${cue} should produce sound`);
    } finally { restore(); }
  });
}

test('debugState includes activeTones', () => {
  const restore = install(); try {
    const audio = new GameAudio();
    const state = audio.debugState();
    assert.ok('activeTones' in state, 'has activeTones');
    assert.ok(!('duskAmount' in state), 'duskAmount removed');
  } finally { restore(); }
});

test('game→menu transition does not fire spurious SFX (snapshot ordering)', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';

    // Spy on sfx: record every cue the diffing logic attempts to fire.
    const fired: SfxName[] = [];
    const origSfx = audio.sfx.bind(audio);
    audio.sfx = (name: SfxName) => { fired.push(name); origSfx(name); };

    // Game active: establish a game snapshot (coins earned, upgrade bought).
    const gameState = createState();
    gameState.profile.coins = 50;
    gameState.profile.upgrades = { speed: 1, handling: 0, braking: 0, capacity: 0, glide: 0, capstones: {} };
    audio.update(gameState, false);
    audio.update(gameState, false);
    fired.length = 0; // ignore anything during gameplay

    // ScreenManager.show(menu): new.enter() runs BEFORE old.exit().
    audio.resetSnapshot(); // MenuScreen.enter()
    audio.silence();       // GameScreen.exit() — must NOT repopulate the snapshot

    // First menu frame. In a real browser the suspend() from silence() is
    // async and may not have taken effect yet, so keep the context running
    // to cover that racy case deterministically.
    ctx.state = 'running';
    audio.update(createState(), false); // fresh menu state: 0 coins, base upgrades

    assert.deepEqual(fired, [], 'no SFX should fire on the first menu frame after a transition');
  } finally { restore(); }
});

test('silence() does not touch the SFX snapshot', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    audio.setMuted(false);
    await flush();
    FakeContext.instances[0].state = 'running';
    const state = createState();
    state.profile.coins = 42;
    audio.update(state, false);
    audio.silence();
    // @ts-expect-error accessing private for test
    assert.equal(audio.snapshot?.coins, 42, 'silence() must leave the snapshot intact');
    audio.resetSnapshot();
    // @ts-expect-error accessing private for test
    assert.equal(audio.snapshot, undefined, 'resetSnapshot() clears the snapshot');
  } finally { restore(); }
});

/** Helper: create a state with an active run. */
function stateWithRun(overrides: Record<string, unknown> = {}): import('../src/types').GameState {
  const s = createState();
  s.run = {
    seed: 1, elapsed: 0, earnings: 0, deliveries: 0,
    job: null, offers: [], returning: false,
    lastStop: 'home', recentStops: [],
    ...overrides,
  } as import('../src/types').Run;
  return s;
}

const testJob = { from: 'home', to: 'bakery', payout: 20, label: 'test', parcel: 'box' };
/** Suppress the adaptive melody so trigger tests count only SFX oscillators. */
function suppressMelody(audio: GameAudio, ctx: { currentTime: number }): void {
  // @ts-expect-error accessing private for test
  audio.lullabyNextNote = Infinity;
  // @ts-expect-error accessing private for test
  audio.fieldNextNote = Infinity;
}


test('parcel_pickup triggers when job becomes non-null', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    const s1 = createState(); // baseline: no run
    audio.update(s1, false); // muted, sets lastActive and snapshot
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    suppressMelody(audio, ctx);
    audio.update(s1, false); // warmup: starts ambience, same state = no SFX
    const s2 = stateWithRun({ job: testJob });
    const before = ctx.oscillators.length;
    audio.update(s2, false);
    assert.ok(ctx.oscillators.length > before, 'parcel_pickup should fire');
  } finally { restore(); }
});

test('takeoff triggers when speed exceeds 5 with a job', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    const s1 = stateWithRun({ job: testJob });
    s1.player.speed = 3;
    audio.update(s1, false); // muted baseline
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    suppressMelody(audio, ctx);
    audio.update(s1, false); // warmup: same state, starts ambience, no SFX
    const s2 = stateWithRun({ job: testJob });
    s2.player.speed = 8;
    const before = ctx.oscillators.length + ctx.bufferSources.length;
    audio.update(s2, false);
    const after = ctx.oscillators.length + ctx.bufferSources.length;
    assert.ok(after > before, 'takeoff should fire when speed crosses 5 with job');
  } finally { restore(); }
});

test('landing triggers when returning becomes true', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    const s1 = stateWithRun({ returning: false });
    audio.update(s1, false);
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    suppressMelody(audio, ctx);
    audio.update(s1, false); // warmup
    const before = ctx.oscillators.length + ctx.bufferSources.length;
    audio.update(stateWithRun({ returning: true }), false);
    const after = ctx.oscillators.length + ctx.bufferSources.length;
    assert.ok(after > before, 'landing should fire when returning becomes true');
  } finally { restore(); }
});

test('bump triggers on sudden speed drop with cooldown', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    const s1 = stateWithRun({ job: testJob });
    s1.player.speed = 10;
    audio.update(s1, false);
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    suppressMelody(audio, ctx);
    audio.update(s1, false); // warmup
    ctx.currentTime = 100;
    // First bump: speed 10 -> 4 (60% drop)
    const s2 = stateWithRun({ job: testJob });
    s2.player.speed = 4;
    const before1 = ctx.oscillators.length;
    audio.update(s2, false);
    assert.ok(ctx.oscillators.length > before1, 'bump should fire on 60% speed drop');
    // Second bump within cooldown: speed 4 -> 1 (75% drop) but only 0.5s later
    ctx.currentTime = 100.5;
    const s3 = stateWithRun({ job: testJob });
    s3.player.speed = 1;
    const before2 = ctx.oscillators.length;
    audio.update(s3, false);
    assert.equal(ctx.oscillators.length, before2, 'bump should NOT fire within 1s cooldown');
    // Third bump after cooldown: speed 1 -> 0.4, 1.5s later
    ctx.currentTime = 102;
    const s4 = stateWithRun({ job: testJob });
    s4.player.speed = 0.4;
    const before3 = ctx.oscillators.length;
    audio.update(s4, false);
    assert.ok(ctx.oscillators.length > before3, 'bump should fire after cooldown expires');
  } finally { restore(); }
});

test('hover_toggle triggers when hover changes', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    const s1 = createState();
    s1.player.hover = false;
    audio.update(s1, false);
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    suppressMelody(audio, ctx);
    audio.update(s1, false); // warmup
    const s2 = createState();
    s2.player.hover = true;
    const before = ctx.oscillators.length;
    audio.update(s2, false);
    assert.ok(ctx.oscillators.length > before, 'hover_toggle should fire when hover changes');
  } finally { restore(); }
});

test('nightfall_warning fires once when elapsed crosses 300', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    // Disable theme system for SFX test: no signal, no melody notes, no theme entry.
    // @ts-expect-error accessing private for test
    audio.playSignal = () => {};
    // @ts-expect-error accessing private for test
    audio.enterLullaby = () => {};
    // @ts-expect-error accessing private for test
    audio.enterField = () => {};
    // @ts-expect-error accessing private for test
    audio.playLullaby = () => {};
    // @ts-expect-error accessing private for test
    audio.playField = () => {};
    const s1 = stateWithRun({ elapsed: 299 });
    audio.update(s1, false);
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    suppressMelody(audio, ctx);
    audio.update(s1, false); // warmup
    ctx.currentTime = 100;
    // Cross 300: should fire
    const before1 = ctx.oscillators.length;
    audio.update(stateWithRun({ elapsed: 301 }), false);
    assert.ok(ctx.oscillators.length > before1, 'nightfall_warning should fire when crossing 300');
    // Already warned: should NOT fire again
    ctx.currentTime = 200;
    const before2 = ctx.oscillators.length;
    audio.update(stateWithRun({ elapsed: 302 }), false);
    assert.equal(ctx.oscillators.length, before2, 'nightfall_warning should fire only once');
  } finally { restore(); }
});

test('nightfall_warning resets when a new run starts', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    // Disable theme system for SFX test.
    // @ts-expect-error accessing private for test
    audio.playSignal = () => {};
    // @ts-expect-error accessing private for test
    audio.enterLullaby = () => {};
    // @ts-expect-error accessing private for test
    audio.enterField = () => {};
    // @ts-expect-error accessing private for test
    audio.playLullaby = () => {};
    // @ts-expect-error accessing private for test
    audio.playField = () => {};
    const s1 = stateWithRun({ elapsed: 299 });
    audio.update(s1, false);
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    suppressMelody(audio, ctx);
    audio.update(s1, false); // warmup
    ctx.currentTime = 100;
    audio.update(stateWithRun({ elapsed: 350 }), false); // fires, sets warned=true
    // New run: elapsed goes 350 -> 0 (high to low), resets the flag
    ctx.currentTime = 200;
    audio.update(stateWithRun({ elapsed: 10 }), false);
    // Cross 300 again in the new run: should fire
    ctx.currentTime = 300;
    const before = ctx.oscillators.length;
    audio.update(stateWithRun({ elapsed: 301 }), false);
    assert.ok(ctx.oscillators.length > before, 'nightfall_warning should fire again in new run');
  } finally { restore(); }
});

test('RUN_SECONDS is exported as 360', async () => {
  const { RUN_SECONDS } = await import('../src/simulation');
  assert.equal(RUN_SECONDS, 360);
});

test('hover_toggle does not fire during active delivery drop', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    suppressMelody(audio, ctx);
    const s1 = createState();
    s1.player.hover = false;
    s1.drop = { stopId: 'test', t: 0, parcel: true };
    audio.update(s1, false); // warmup with drop active
    const s2 = createState();
    s2.player.hover = true; // hover changes...
    s2.drop = { stopId: 'test', t: 0.5, parcel: true }; // ...but drop still active
    const before = ctx.oscillators.length;
    audio.update(s2, false);
    assert.equal(ctx.oscillators.length, before, 'hover_toggle should NOT fire during drop');
  } finally { restore(); }
});

test('hover_toggle does not fire when drop ends and hover clears together', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    suppressMelody(audio, ctx);
    const s1 = createState();
    s1.player.hover = true;
    s1.drop = { stopId: 'test', t: 0.9, parcel: true };
    audio.update(s1, false); // warmup: drop active, hover true
    const s2 = createState();
    s2.player.hover = false; // completeDrop clears hover...
    s2.drop = null; // ...after nulling drop
    const before = ctx.oscillators.length;
    audio.update(s2, false);
    assert.equal(ctx.oscillators.length, before, 'hover_toggle should NOT fire when drop ends');
  } finally { restore(); }
});

test('pad tones route through musicFilter', async () => {
  const restore = install(); try {
    const audio = new GameAudio();
    audio.setMuted(false);
    await flush();
    const ctx = FakeContext.instances[0];
    ctx.state = 'running';
    // Spy on tone() to capture the destination param for each call
    const destinations: unknown[] = [];
    // @ts-expect-error accessing private for test
    const origTone = audio.tone.bind(audio);
    // @ts-expect-error assigning to private for test
    audio.tone = (freq: number, dur: number, vol: number, type: OscillatorType, delay = 0, dest?: AudioNode) => {
      destinations.push(dest ?? 'master-default');
      return origTone(freq, dur, vol, type, delay, dest);
    };
    const state = createState();
    audio.update(state, false);
    // @ts-expect-error accessing private for test
    const filter = audio.musicFilter;
    assert.ok(filter, 'musicFilter should be created');
    const viaFilter = destinations.filter(d => d === filter).length;
    assert.ok(viaFilter >= 3, `at least 3 pad tones via filter, got ${viaFilter}`);
  } finally { restore(); }
});
