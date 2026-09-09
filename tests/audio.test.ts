import assert from 'node:assert/strict';
import test from 'node:test';
import { GameAudio } from '../src/audio';
import { createState } from '../src/simulation';

class FakeParam { value = 0; setValueAtTime() {} exponentialRampToValueAtTime() {} cancelScheduledValues() {} setTargetAtTime() {} }
class FakeNode { gain = new FakeParam(); frequency = new FakeParam(); connections: unknown[] = []; connect(target: unknown) { this.connections.push(target); return target as FakeNode; } disconnect() { this.connections = []; } }
class FakeOscillator extends FakeNode { type: OscillatorType = 'sine'; onended: (() => void) | null = null; started = false; stopped = false; start() { this.started = true; } stop() { this.stopped = true; this.onended?.(); } }
class FakeContext {
  static instances: FakeContext[] = [];
  state: AudioContextState = 'suspended'; currentTime = 1; destination = new FakeNode(); oscillators: FakeOscillator[] = [];
  resumeCalls = 0; suspendCalls = 0; closed = false; deferredResume?: () => void;
  constructor() { FakeContext.instances.push(this); }
  createGain() { return new FakeNode(); } createOscillator() { const oscillator = new FakeOscillator(); this.oscillators.push(oscillator); return oscillator; }
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
  const restore = install(); try { const audio = new GameAudio(); audio.update(createState(), false); assert.deepEqual(audio.debugState(), { context: 'unavailable', muted: true }); } finally { restore(); }
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
