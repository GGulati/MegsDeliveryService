import type { GameState, Job, Mode, Player, Profile, Run, Vec3 } from './types';
import { STOPS } from './world';

/** The single, versioned localStorage record used by the game. */
export const SAVE_KEY = 'megs-delivery-save-v1';

type SaveResultKind = 'ready' | 'readonly' | 'session' | 'invalid';
type SaveResult = { kind: SaveResultKind; state?: GameState; message: string };
type UnknownRecord = Record<string, unknown>;

const MODES: readonly Mode[] = ['title', 'tutorial', 'flight', 'offers', 'home', 'summary'];
const PANELS = ['none', 'jobs', 'brooms', 'decor', 'cat'];
const STOP_IDS = new Set(STOPS.map((stop) => stop.id));
const FURNITURE = new Set(['rug', 'plant', 'shelf', 'lamp', 'cushion', 'cat-tree']);
const PAYOUTS = new Set([20, 35, 50]);
const MAX_SAVE_BYTES = 100_000;

const isRecord = (value: unknown): value is UnknownRecord => typeof value === 'object' && value !== null && !Array.isArray(value);
const finite = (value: unknown, min = -Infinity, max = Infinity) => typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
const integer = (value: unknown, min = 0, max = Number.MAX_SAFE_INTEGER) => Number.isInteger(value) && finite(value, min, max);
const text = (value: unknown, max = 160) => typeof value === 'string' && value.length <= max;
const vec3 = (value: unknown, limit = 500): value is Vec3 => isRecord(value) && finite(value.x, -limit, limit) && finite(value.y, -limit, limit) && finite(value.z, -limit, limit);

function readJob(value: unknown): Job | null {
  if (!isRecord(value) || !text(value.from, 64) || !text(value.to, 64) || !STOP_IDS.has(value.from as string) || !STOP_IDS.has(value.to as string) || value.from === value.to || !PAYOUTS.has(value.payout as number) || !text(value.label, 80) || !text(value.parcel, 100)) return null;
  return { from: value.from as string, to: value.to as string, payout: value.payout as number, label: value.label as string, parcel: value.parcel as string };
}

function readProfile(value: unknown): Profile | null {
  if (!isRecord(value) || !integer(value.coins) || !isRecord(value.upgrades) || !integer(value.upgrades.speed, 0, 2) || !integer(value.upgrades.handling, 0, 2) || !integer(value.upgrades.braking, 0, 2) || !Array.isArray(value.furniture) || value.furniture.length > FURNITURE.size || !value.furniture.every((item) => typeof item === 'string' && FURNITURE.has(item as string)) || new Set(value.furniture).size !== value.furniture.length || typeof value.tutorialDone !== 'boolean' || !integer(value.runs) || !integer(value.deliveries)) return null;
  return { coins: value.coins as number, upgrades: { speed: value.upgrades.speed as number, handling: value.upgrades.handling as number, braking: value.upgrades.braking as number }, furniture: [...value.furniture] as string[], tutorialDone: value.tutorialDone, runs: value.runs as number, deliveries: value.deliveries as number };
}

function readRun(value: unknown): Run | null | undefined {
  if (value === null) return null;
  if (!isRecord(value) || !integer(value.seed, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER) || !finite(value.elapsed, 0, 480) || !finite(value.earnings, 0) || !integer(value.deliveries) || typeof value.returning !== 'boolean' || !text(value.lastStop, 64) || !STOP_IDS.has(value.lastStop as string) || !Array.isArray(value.offers) || value.offers.length > 2) return undefined;
  const job = value.job === null ? null : readJob(value.job);
  const offers = value.offers.map(readJob);
  if ((value.job !== null && !job) || offers.some((offer) => !offer) || new Set(offers.map((offer) => offer!.to)).size !== offers.length) return undefined;
  return { seed: value.seed as number, elapsed: value.elapsed as number, earnings: value.earnings as number, deliveries: value.deliveries as number, job, offers: offers as Job[], returning: value.returning, lastStop: value.lastStop as string };
}

/** Decodes only complete, bounded v1 save records.  It has no browser side effects. */
export function decodeSave(raw: string): GameState | null {
  if (typeof raw !== 'string' || raw.length > MAX_SAVE_BYTES) return null;
  let envelope: unknown;
  try { envelope = JSON.parse(raw); } catch { return null; }
  if (!isRecord(envelope) || envelope.version !== 1 || !isRecord(envelope.state)) return null;
  const value = envelope.state;
  if (!MODES.includes(value.mode as Mode) || !isRecord(value.player) || !vec3(value.player.position) || !finite(value.player.yaw) || !finite(value.player.pitch, -Math.PI / 2, Math.PI / 2) || !finite(value.player.speed, 0, 30) || !finite(value.player.throttle, 0, 30) || typeof value.player.hover !== 'boolean' || !vec3(value.player.velocity, 50)) return null;
  const profile = readProfile(value.profile); const run = readRun(value.run);
  // homeFacing/homePanel were introduced after the first v1 builds; defaults keep
  // those otherwise valid records playable without weakening the remaining checks.
  const homeFacing = value.homeFacing === undefined ? 0 : value.homeFacing;
  const homePanel = value.homePanel === undefined ? 'none' : value.homePanel;
  if (!profile || run === undefined || typeof value.paused !== 'boolean' || !text(value.pauseReason) || !text(value.message, 500) || !integer(value.tutorialStage, 0, 10) || !isRecord(value.homePosition) || !finite(value.homePosition.x) || !finite(value.homePosition.z) || !finite(homeFacing, -10, 10) || !PANELS.includes(homePanel as string) || !integer(value.revision)) return null;
  let summary: GameState['summary'] = null;
  if (value.summary !== null) {
    if (!isRecord(value.summary) || typeof value.summary.success !== 'boolean' || !finite(value.summary.earnings, 0) || !integer(value.summary.deliveries)) return null;
    summary = { success: value.summary.success, earnings: value.summary.earnings as number, deliveries: value.summary.deliveries as number };
  }
  const mode = value.mode as Mode;
  if ((mode === 'title' || mode === 'tutorial' || mode === 'home' || mode === 'summary') && run !== null) return null;
  if (mode === 'flight' && (!run || (!run.job && !run.returning))) return null;
  if (mode === 'offers' && (!run || run.job !== null || run.returning || run.offers.length !== 2)) return null;
  if (mode === 'summary' && !summary) return null;
  if (mode !== 'summary' && summary) return null;
  if (mode === 'home' && (Math.abs(value.homePosition.x as number) > 8 || Math.abs(value.homePosition.z as number) > 6)) return null;
  const player: Player = { position: { ...value.player.position } as Vec3, yaw: value.player.yaw as number, pitch: value.player.pitch as number, speed: value.player.speed as number, throttle: value.player.throttle as number, hover: value.player.hover, velocity: { ...value.player.velocity } as Vec3, brakeHold: value.player.brakeHold === true };
  const state = { mode, player, profile, run, paused: value.paused, pauseReason: value.pauseReason as string, message: value.message as string, tutorialStage: value.tutorialStage as number, homePosition: { x: value.homePosition.x as number, z: value.homePosition.z as number }, homeFacing: homeFacing as number, homePanel, summary, revision: value.revision as number } as GameState;
  // A wall-clock gap must never advance a shift.  Resume interactive work explicitly.
  // A mid-drop save never resumes mid-animation: the drop was committed before
  // the save, so it simply restarts unfired on load.
  state.drop = null;
  state.haloFade = 0;
  if (state.mode === 'tutorial' || state.mode === 'flight' || state.mode === 'offers') { state.paused = true; state.pauseReason = 'Welcome back'; }
  if (state.mode === 'title' || state.mode === 'home') { state.paused = false; state.pauseReason = ''; }
  return state;
}

export function encodeSave(state: GameState): string {
  return JSON.stringify({ version: 1, state });
}

/** A cooperative, non-blocking single-writer store. Browser APIs are read only when used. */
export class SaveStore {
  private releaseLock?: () => void;
  private generation = 0;
  private writable = false;
  private status = '';
  private memory?: GameState;

  get message(): string { return this.status; }
  get canSave(): boolean { return this.writable; }

  async acquire(): Promise<SaveResult> {
    this.release(); const generation = ++this.generation;
    const storage = this.storage();
    if (!storage) return this.session('Saved games are unavailable in this browser.');
    const locks = typeof navigator === 'undefined' ? undefined : navigator.locks;
    if (!locks) {
      try { const raw = storage.getItem(SAVE_KEY);const decoded=raw===null?undefined:decodeSave(raw);if(raw!==null&&!decoded){this.status='Saved game could not be read. It was left untouched.';return {kind:'invalid',message:this.status};}return this.session('This browser cannot safely share saved games; playing in this tab only.',decoded??undefined); }
      catch { return this.session('Saved games are unavailable in this browser.'); }
    }
    return new Promise<SaveResult>((resolve) => {
      void locks.request('megs-delivery-save', { ifAvailable: true }, (lock) => {
        if (generation !== this.generation || !lock) { resolve({ kind: 'readonly', message: 'Saved game is open in another tab. Retry after closing it.' }); return; }
        let unlock!: () => void;
        const held = new Promise<void>((done) => { unlock = done; });
        this.releaseLock = () => { this.releaseLock = undefined; this.writable = false; unlock(); };
        let raw: string | null;
        try { raw = storage.getItem(SAVE_KEY); }
        catch { this.releaseLock?.(); resolve(this.session('Saved games are unavailable in this browser.')); return held; }
        const decoded = raw === null ? undefined : decodeSave(raw) ?? undefined;
        if (raw !== null && !decoded) {
          this.status = 'Saved game could not be read. It was left untouched.';
          resolve({ kind: 'invalid', message: this.status });
          return held;
        }
        this.writable = true; this.memory = decoded; this.status = 'Saved game ready.';
        resolve({ kind: 'ready', state: decoded, message: this.status });
        return held;
      }).catch(() => resolve(this.session('Saved games are unavailable in this browser.')));
    });
  }

  save(state: GameState): boolean {
    if (!this.writable) return false;
    const storage = this.storage(); if (!storage) { this.writable = false; this.status = 'Saving is unavailable in this browser.'; return false; }
    try { storage.setItem(SAVE_KEY, encodeSave(state)); this.memory = state; this.status = 'Saved.'; return true; }
    catch { this.memory = state; this.writable = false; this.status = 'Could not save; progress remains in this tab.'; return false; }
  }

  release(): void { this.generation++; this.releaseLock?.(); this.writable = false; }
  continueSession(): void { this.release(); this.memory = undefined; this.status = 'Continuing with a fresh session.'; }

  private storage(): Storage | undefined { try { return typeof localStorage === 'undefined' ? undefined : localStorage; } catch { return undefined; } }
  private session(message: string, state?: GameState): SaveResult { this.writable = false; this.memory = state; this.status = message; return { kind: 'session', state, message }; }
}
