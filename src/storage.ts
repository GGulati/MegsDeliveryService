import type { GameState, Job, Mode, Player, Profile, Run, Vec3 } from './types';
import { STOPS } from './world';

/** Versioned localStorage records, one per save slot. */
export const SAVE_KEY_PREFIX = 'megs-delivery-save-v1-slot';
/** Legacy single-save key (migrates to slot 1). */
export const SAVE_KEY = 'megs-delivery-save-v1';
/** Last-played slot pointer. */
export const LAST_SLOT_KEY = 'megs-delivery-last-slot-v1';
/** Cooperative cross-tab lock: { tabId, timestamp }. Stale after LOCK_STALE_MS. */
const SAVE_LOCK_KEY = 'megs-delivery-save-lock-v1';
const LOCK_STALE_MS = 30000;

/** Metadata for a save slot, for menu display. */
export interface SlotInfo {
  slotId: number;
  exists: boolean;
  timestamp?: number;
  deliveries?: number;
  coins?: number;
}

/** Peek at a slot's metadata without loading the full state. */
export function peekSlot(slotId: number): SlotInfo {
  const key = `${SAVE_KEY_PREFIX}${slotId}`;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      if (slotId === 1) {
        const legacy = localStorage.getItem(SAVE_KEY);
        if (legacy) {
          const decoded = decodeSave(legacy);
          if (decoded) {
            return { slotId, exists: true,
              timestamp: Date.now(),
              deliveries: decoded.profile?.deliveries ?? 0,
              coins: decoded.profile?.coins ?? 0 };
          }
        }
      }
      return { slotId, exists: false };
    }
    const decoded = decodeSave(raw);
    if (!decoded) return { slotId, exists: false };
    return { slotId, exists: true,
      timestamp: Date.now(),
      deliveries: decoded.profile?.deliveries ?? 0,
      coins: decoded.profile?.coins ?? 0 };
  } catch {
    return { slotId, exists: false };
  }
}

export function getLastSlot(): number {
  try {
    const v = parseInt(localStorage.getItem(LAST_SLOT_KEY) ?? '1', 10);
    return v >= 1 && v <= 3 ? v : 1;
  } catch { return 1; }
}
export function setLastSlot(slotId: number): void {
  try { localStorage.setItem(LAST_SLOT_KEY, String(slotId)); } catch { /* ignore */ }
}
export function migrateLegacySave(): void {
  try {
    const legacy = localStorage.getItem(SAVE_KEY);
    const slot1 = localStorage.getItem(`${SAVE_KEY_PREFIX}1`);
    if (legacy && !slot1) localStorage.setItem(`${SAVE_KEY_PREFIX}1`, legacy);
  } catch { /* ignore */ }
}

export type SaveResultKind = 'ready' | 'readonly' | 'session' | 'invalid';
export type SaveResult = { kind: SaveResultKind; state?: GameState; message: string; seedMigrated?: boolean };
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
  if (!isRecord(value) || !integer(value.seed, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER) || !finite(value.elapsed, 0, 360) || !finite(value.earnings, 0) || !integer(value.deliveries) || typeof value.returning !== 'boolean' || !text(value.lastStop, 64) || !STOP_IDS.has(value.lastStop as string) || !Array.isArray(value.offers) || value.offers.length > 2) return undefined;
  const job = value.job === null ? null : readJob(value.job);
  const offers = value.offers.map(readJob);
  if ((value.job !== null && !job) || offers.some((offer) => !offer) || new Set(offers.map((offer) => offer!.to)).size !== offers.length) return undefined;
  const recentStops = Array.isArray(value.recentStops) ? (value.recentStops as string[]) : [];
  return { seed: value.seed as number, elapsed: value.elapsed as number, earnings: value.earnings as number, deliveries: value.deliveries as number, job, offers: offers as Job[], returning: value.returning, lastStop: value.lastStop as string, recentStops };
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
  const player: Player = { position: { ...value.player.position } as Vec3, yaw: value.player.yaw as number, pitch: value.player.pitch as number, speed: value.player.speed as number, throttle: value.player.throttle as number, hover: false, velocity: { ...value.player.velocity } as Vec3, brakeHold: value.player.brakeHold === true };
  // A drop-freeze hover pin must never survive a reload: it held the drone
  // still during the 0.9 s landing animation, and a save taken with it set
  // would otherwise restore a drone pinned at speed 0 with no way to move.
  const state = { mode, player, profile, run, paused: value.paused, pauseReason: value.pauseReason as string, message: value.message as string, tutorialStage: value.tutorialStage as number, homePosition: { x: value.homePosition.x as number, z: value.homePosition.z as number }, homeFacing: homeFacing as number, homePanel, summary, revision: value.revision as number,
    // General-purpose save seed (2026-09-30). Old saves predate it: mint one
    // on load so every save file has a deterministic RNG stream.
    seed: integer(value.seed, 0, 0x7fffffff) ? value.seed as number : Math.floor(Math.random() * 0x7fffffff) } as GameState;
  // A wall-clock gap must never advance a shift.  Resume interactive work explicitly.
  // A mid-drop save never resumes mid-animation: the drop was committed before
  // the save, so it simply restarts unfired on load.
  state.drop = null;
  state.descent = null;
  state.haloFade = 0;
  if (state.mode === 'tutorial' || state.mode === 'flight' || state.mode === 'offers') { state.paused = true; state.pauseReason = 'Welcome back'; }
  if (state.mode === 'title' || state.mode === 'home') { state.paused = false; state.pauseReason = ''; }
  return state;
}

export function encodeSave(state: GameState): string {
  return JSON.stringify({ version: 1, state });
}

/** True when the stored save predates the general-purpose seed: decodeSave
 * will mint one on load, so the caller should persist promptly to keep the
 * seed (and the traffic layout it determines) stable across loads. */
export function seedMigrated(raw: string): boolean {
  try {
    const parsed = JSON.parse(raw) as { state?: { seed?: unknown } };
    const seed = parsed?.state?.seed;
    return !(typeof seed === 'number' && Number.isInteger(seed) && seed >= 0 && seed <= 0x7fffffff);
  } catch {
    return false;
  }
}

/** A cooperative, non-blocking single-writer store. Browser APIs are read only when used. */
export class SaveStore {
  private releaseLock?: () => void;
  private generation = 0;
  private writable = false;
  private status = '';
  private memory?: GameState;
  private tabId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  private slotId = 1;

  /** Set which save slot this store uses (1-3). */
  setSlot(slotId: number): void {
    this.slotId = Math.min(3, Math.max(1, slotId));
  }

  private saveKey(): string {
    return `${SAVE_KEY_PREFIX}${this.slotId}`;
  }

  get message(): string { return this.status; }
  get canSave(): boolean { return this.writable; }

  private writeLock(storage: Storage): void {
    try { storage.setItem(SAVE_LOCK_KEY, JSON.stringify({ tabId: this.tabId, timestamp: Date.now() })); } catch { /* lock write failed: save still works */ }
  }

  async acquire(): Promise<SaveResult> {
    this.release(); const generation = ++this.generation;
    const storage = this.storage();
    if (!storage) return this.session('Saved games are unavailable in this browser.');
    // Cooperative cross-tab lock via localStorage. A lock is stale if its
    // timestamp is older than LOCK_STALE_MS (crashed/killed tab). The lock is
    // refreshed on every save; acquisition is a synchronous read and can never hang.
    try {
      const rawLock = storage.getItem(SAVE_LOCK_KEY);
      if (rawLock !== null) {
        try {
          const lock = JSON.parse(rawLock) as { tabId?: unknown; timestamp?: unknown };
          const age = typeof lock.timestamp === 'number' ? Date.now() - lock.timestamp : Infinity;
          if (typeof lock.tabId === 'string' && lock.tabId !== this.tabId && age < LOCK_STALE_MS) {
            return { kind: 'readonly', message: 'Saved game is open in another tab. Retry after closing it.' };
          }
        } catch { /* corrupt lock: treat as stale and take over */ }
      }
      this.writeLock(storage);
      this.releaseLock = () => {
        this.releaseLock = undefined;
        try {
          const current = storage.getItem(SAVE_LOCK_KEY);
          if (current !== null) {
            const lock = JSON.parse(current) as { tabId?: unknown };
            if (lock.tabId === this.tabId) storage.removeItem(SAVE_LOCK_KEY);
          }
        } catch { /* lock cleanup failed: it goes stale on its own */ }
        this.writable = false;
      };
    } catch {
      return this.session('Saved games are unavailable in this browser.');
    }
    let raw: string | null;
    try { raw = storage.getItem(this.saveKey()); }
    catch { this.releaseLock?.(); return this.session('Saved games are unavailable in this browser.'); }
    const decoded = raw === null ? undefined : decodeSave(raw) ?? undefined;
    if (raw !== null && !decoded) {
      this.status = 'Saved game could not be read. It was left untouched.';
      return { kind: 'invalid', message: this.status };
    }
    this.writable = true; this.memory = decoded; this.status = 'Saved game ready.';
    return { kind: 'ready', state: decoded, message: this.status, seedMigrated: raw !== null && seedMigrated(raw) };
  }

  save(state: GameState): boolean {
    if (!this.writable) return false;
    const storage = this.storage(); if (!storage) { this.writable = false; this.status = 'Saving is unavailable in this browser.'; return false; }
    try { storage.setItem(this.saveKey(), encodeSave(state)); this.writeLock(storage); this.memory = state; this.status = 'Saved.'; return true; }
    catch { this.memory = state; this.writable = false; this.status = 'Could not save; progress remains in this tab.'; return false; }
  }

  release(): void { this.generation++; this.releaseLock?.(); this.writable = false; }
  continueSession(): void { this.release(); this.memory = undefined; this.status = 'Continuing with a fresh session.'; }
  /** Discards an unreadable save so a new game can start with saving on.
   * The key is re-read first: a save that now decodes (another tab may have
   * written one) is never deleted. Safe to call after an 'invalid' acquire. */
  discardUnreadable(): void {
    try {
      const storage = this.storage();
      const raw = storage?.getItem(this.saveKey());
      if (raw !== null && raw !== undefined && !decodeSave(raw)) storage?.removeItem(this.saveKey());
    } catch { /* a stale key is harmless; the next save overwrites it */ }
    this.writable = true; this.memory = undefined;
    this.status = 'Discarded the unreadable save.';
  }

  private storage(): Storage | undefined { try { return typeof localStorage === 'undefined' ? undefined : localStorage; } catch { return undefined; } }
  private session(message: string, state?: GameState): SaveResult { this.writable = false; this.memory = state; this.status = message; return { kind: 'session', state, message }; }
}

const MUTE_KEY = 'megs-delivery-service:muted';
export function getMuted(): boolean {
  try { return localStorage.getItem(MUTE_KEY) === '1'; } catch { return true; }
}
export function setMuted(muted: boolean): void {
  try { localStorage.setItem(MUTE_KEY, muted ? '1' : '0'); } catch { /* ignore */ }
}
