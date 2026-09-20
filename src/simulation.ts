import type { FlightInput, GameState, Player, Stop, Vec3 } from './types';
import { interactHome, stepHome } from './home';
import { SOLIDS, STOPS, WORLD_LIMIT } from './world';

const RADIUS = 1;
const MIN_ALTITUDE = 3;
const MAX_ALTITUDE = 100;
const MAX_SPEED = 18;
const TURN_RATE = 2.2;
const THROTTLE_RATE = 7;
const ACCELERATION = 12;
const HOVER_BRAKE = 18;
const RUN_SECONDS = 480;
const LANDING_SPEED = 3.5;
/** How long a dropped parcel takes to reach the pad. The drop is committed
 * when the player presses interact; the run clock and flight input freeze
 * while the parcel lands, so pausing mid-drop simply pauses the animation. */
export const DROP_ANIM_SECONDS = 0.9;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const length = (v: Vec3) => Math.hypot(v.x, v.y, v.z);

export function createPlayer(position: Vec3 = STOPS[0].position): Player {
  return {
    position: { ...position }, yaw: 0, pitch: 0, speed: 9, throttle: 9,
    hover: false, velocity: { x: 0, y: 0, z: -9 },
  };
}

export function createState(): GameState {
  return {
    mode: 'title', player: createPlayer(),
    profile: { coins: 0, upgrades: { speed: 0, handling: 0, braking: 0 }, furniture: [], tutorialDone: false, runs: 0, deliveries: 0 },
    run: null, paused: false, pauseReason: '', message: '', tutorialStage: 0, drop: null,
    homePosition: { x: 0, z: 3 }, homeFacing: 0, homePanel: 'none', summary: null, revision: 0,
  };
}

export function startTutorial(state: GameState): void {
  state.mode = 'tutorial'; state.paused = false; state.pauseReason = '';
  state.player = createPlayer(); state.tutorialStage = 0; state.drop = null;
  state.message = 'Steer toward the glowing Harbor Cafe pad.'; state.revision++;
}

export function toggleHover(state: GameState): void {
  if (state.paused || (state.mode !== 'tutorial' && state.mode !== 'flight')) return;
  state.player.hover = !state.player.hover;
  if (state.mode === 'tutorial' && state.player.hover && state.tutorialStage === 1) {
    state.tutorialStage = 2;
    state.message = 'Hover confirmed. Land on Harbor Cafe and interact to deliver.';
  }
  state.revision++;
}

export function setPaused(state: GameState, paused: boolean, reason = ''): void {
  state.paused = paused; state.pauseReason = paused ? reason : ''; state.revision++;
}

export function nearestStop(state: GameState): Stop | undefined {
  const player = state.player;
  if (player.speed >= LANDING_SPEED) return undefined;
  return STOPS.find((stop) => {
    const dx = player.position.x - stop.position.x;
    const dz = player.position.z - stop.position.z;
    // The whole column above the pad is eligible: horizontal position is what
    // matters, not precise altitude. Column is column — no height bonus.
    return Math.hypot(dx, dz) <= 7 && player.position.y >= stop.position.y;
  });
}

export function interact(state: GameState): void {
  if (state.paused) return;
  if (state.mode === 'home') { interactHome(state); return; }
  if (state.drop) return;
  if (state.mode === 'tutorial') {
    if (state.tutorialStage !== 2 || nearestStop(state)?.id !== 'harbor-cafe') return;
    // The practice drop lands like a real one, then practice completes.
    state.drop = { stopId: 'harbor-cafe', t: 0, parcel: true };
    freezeForDrop(state);
    state.message = 'Parcel away!';
    state.revision++;
    return;
  }
  if (state.mode !== 'flight' || !state.run) return;
  if (state.run.elapsed >= RUN_SECONDS) { settleRun(state, false); return; }
  const stop = nearestStop(state);
  if (!stop) return;
  // The drop is committed here. The parcel lands during a short animation;
  // the delivery (or banking) resolves when it reaches the pad.
  state.drop = { stopId: stop.id, t: 0, parcel: stop.id !== 'home' };
  freezeForDrop(state);
  state.message = stop.id === 'home' ? 'Banking your earnings…' : 'Parcel away!';
  state.revision++;
}

/** Holds Meg still while a committed drop lands. */
function freezeForDrop(state: GameState): void {
  state.player.speed = 0; state.player.throttle = 0; state.player.hover = true;
  state.player.velocity = { x: 0, y: 0, z: 0 };
}

/** Resolves a committed drop once its landing animation finishes. Payout is
 * the job's flat payout: height never feeds the rating. */
function completeDrop(state: GameState, stopId: string): void {
  if (state.mode === 'tutorial') {
    state.profile.tutorialDone = true;
    state.message = 'Practice complete';
    state.mode = 'title'; state.tutorialStage = 3; state.revision++;
    return;
  }
  const run = state.run;
  if (!run || run.elapsed >= RUN_SECONDS) { settleRun(state, false); return; }
  const stop = STOPS.find((item) => item.id === stopId);
  if (!stop) return;
  // Home is always a safe place to bank what has already been earned.
  if (stop.id === 'home') { settleRun(state, true); return; }
  if (run.job?.to !== stop.id) return;
  run.earnings += run.job.payout;
  run.deliveries++;
  state.profile.deliveries++;
  run.job = null;
  run.lastStop = stop.id;
  run.offers = makeOffers(run.seed, run.deliveries, stop.id);
  run.returning = false;
  state.mode = 'offers';
  state.message = 'Delivered! Choose the next parcel or return home.';
  state.revision++;
}

/** Starts a fresh shift. A supplied seed makes its offers reproducible for tests/replays. */
export function startRun(state: GameState, seed = Date.now()): void {
  if (state.paused || state.run || (state.mode !== 'title' && state.mode !== 'summary' && state.mode !== 'home')) return;
  const safeSeed = Number.isFinite(seed) ? Math.floor(seed) : Date.now();
  state.player = createPlayer();
  state.run = {
    seed: safeSeed, elapsed: 0, earnings: 0, deliveries: 0,
    job: { from: 'home', to: 'harbor-cafe', payout: 20, label: 'Short hop', parcel: 'Cafe parcel' },
    offers: [], returning: false, lastStop: 'home',
  };
  state.summary = null;
  state.homePanel = 'none';
  state.drop = null;
  state.mode = 'flight';
  state.message = 'First parcel: Harbor Cafe.';
  state.revision++;
}

export function chooseJob(state: GameState, index: number): void {
  if (state.paused || state.mode !== 'offers' || !state.run || !Number.isInteger(index)) return;
  const job = state.run.offers[index];
  if (!job) return;
  state.run.job = job;
  state.run.offers = [];
  state.run.returning = false;
  state.mode = 'flight';
  state.message = `Delivery: ${stopName(job.to)}.`;
  state.revision++;
}

export function returnHome(state: GameState): void {
  if (state.paused || state.mode !== 'offers' || !state.run) return;
  state.run.job = null;
  state.run.offers = [];
  state.run.returning = true;
  state.mode = 'flight';
  state.message = 'Return to Meg\'s Rooftop to bank your earnings.';
  state.revision++;
}

/** Resolves a run once. Failed rescues discard only this run's unbanked earnings. */
export function settleRun(state: GameState, success: boolean): void {
  const run = state.run;
  if (!run) return;
  state.drop = null;
  const earnings = success ? run.earnings : 0;
  state.summary = { success, earnings, deliveries: run.deliveries };
  if (success) state.profile.coins += earnings;
  state.profile.runs++;
  state.run = null;
  state.mode = 'summary';
  state.player.speed = 0;
  state.player.throttle = 0;
  state.player.hover = true;
  state.player.velocity = { x: 0, y: 0, z: 0 };
  state.message = success ? 'Shift complete. Earnings banked!' : 'Rescue called. Unbanked earnings were lost.';
  state.revision++;
}

export function getTarget(state: GameState): Stop | undefined {
  if (state.mode === 'tutorial') return STOPS.find((stop) => stop.id === 'harbor-cafe');
  if (!state.run) return undefined;
  return STOPS.find((stop) => stop.id === (state.run!.returning ? 'home' : state.run!.job?.to));
}

function stopName(id: string): string { return STOPS.find((stop) => stop.id === id)?.name ?? id; }

function hash(seed: number): number {
  let value = seed | 0;
  value = Math.imul(value ^ (value >>> 16), 0x45d9f3b);
  value = Math.imul(value ^ (value >>> 16), 0x45d9f3b);
  return (value ^ (value >>> 16)) >>> 0;
}

function makeOffers(seed: number, delivery: number, from: string): import('./types').Job[] {
  let value = hash(seed ^ hash(delivery) ^ hash(from.length));
  const origin = STOPS.find((item) => item.id === from)!;
  const candidates = STOPS.filter((stop) => stop.id !== 'home' && stop.id !== from)
    .map((stop) => ({ stop, distance: Math.hypot(stop.position.x - origin.position.x, stop.position.z - origin.position.z) }))
    .sort((a, b) => a.distance - b.distance);
  // One nearby and one distant choice makes the short/long decision legible, not cosmetic.
  value = hash(value + 1);
  const short = candidates[value % Math.min(2, candidates.length)];
  const distant = candidates.slice(-Math.min(2, candidates.length));
  value = hash(value + 2);
  const long = distant[value % distant.length];
  return [short, long].sort((a, b) => a.distance - b.distance).map(({ stop, distance }, index) => {
    const payout = distance < 100 ? 20 : distance < 180 ? 35 : 50;
    return { from, to: stop.id, payout, label: index === 0 ? 'Short hop' : 'Long haul', parcel: 'Delivery parcel' };
  });
}

function sweep(start: Vec3, delta: Vec3): { t: number; normal: Vec3 } | undefined {
  let hit: { t: number; normal: Vec3 } | undefined;
  for (const solid of SOLIDS) {
    const min = { x: solid.min.x - RADIUS, y: solid.min.y - RADIUS, z: solid.min.z - RADIUS };
    const max = { x: solid.max.x + RADIUS, y: solid.max.y + RADIUS, z: solid.max.z + RADIUS };
    let enter = 0, exit = 1;
    let normal: Vec3 = { x: 0, y: 0, z: 0 };
    for (const axis of ['x', 'y', 'z'] as const) {
      const p = start[axis], d = delta[axis];
      if (Math.abs(d) < 1e-9) { if (p < min[axis] || p > max[axis]) { enter = 2; break; } continue; }
      const a = (min[axis] - p) / d, b = (max[axis] - p) / d;
      const near = Math.min(a, b), far = Math.max(a, b);
      if (near > enter) { enter = near; normal = { x: 0, y: 0, z: 0 }; normal[axis] = a < b ? -1 : 1; }
      exit = Math.min(exit, far);
      if (enter > exit) break;
    }
    if (enter >= 0 && enter <= 1 && enter <= exit && (!hit || enter < hit.t)) hit = { t: enter, normal };
  }
  return hit;
}

export function step(state: GameState, input: FlightInput, dt: number): void {
  if (state.mode === 'home') { stepHome(state, input, dt); return; }
  if (state.paused || (state.mode !== 'tutorial' && state.mode !== 'flight' && state.mode !== 'offers') || !Number.isFinite(dt) || dt <= 0) return;
  // A committed drop: the run clock and flight input freeze while the parcel
  // lands. Pausing (or a hidden tab) freezes the animation too, so it can
  // never be interrupted into a stuck state.
  if (state.drop) {
    if (state.mode !== 'flight' && state.mode !== 'tutorial') state.drop = null;
    else {
      state.drop.t += Math.max(0, dt);
      if (state.drop.t >= DROP_ANIM_SECONDS) {
        const stopId = state.drop.stopId;
        state.drop = null;
        completeDrop(state, stopId);
      }
      state.revision++;
    }
    return;
  }
  const seconds = Math.max(0, dt);
  // The clock runs on the offer screen, but that screen intentionally freezes flight input.
  if (state.run && (state.mode === 'flight' || state.mode === 'offers')) {
    if (state.run.elapsed >= RUN_SECONDS - 1e-9) { state.run.elapsed = RUN_SECONDS; settleRun(state, false); return; }
    const elapsedBefore = state.run.elapsed;
    state.run.elapsed = Math.min(RUN_SECONDS, elapsedBefore + seconds);
    if (state.run.elapsed >= RUN_SECONDS - 1e-9) { state.run.elapsed = RUN_SECONDS; settleRun(state, false); return; }
    updateRunMessage(state, elapsedBefore);
    if (state.mode === 'offers') { state.revision++; return; }
  }
  const player = state.player;
  const turn = clamp(input.turn, -1, 1);
  const climb = clamp(input.climb, -1, 1);
  const maxSpeed = MAX_SPEED * (1 + state.profile.upgrades.speed * 0.1);
  const turnRate = TURN_RATE * (1 + state.profile.upgrades.handling * 0.2);
  const hoverBrake = HOVER_BRAKE * (1 + state.profile.upgrades.braking * 0.2);
  player.yaw += turn * turnRate * seconds;
  player.pitch += (climb * 0.38 - player.pitch) * Math.min(1, 7 * seconds);
  player.throttle = clamp(player.throttle + clamp(input.throttle, -1, 1) * THROTTLE_RATE * seconds, 0, maxSpeed);
  const targetSpeed = player.hover ? 0 : player.throttle;
  player.speed = clamp(player.speed + clamp(targetSpeed - player.speed, -hoverBrake * seconds, ACCELERATION * seconds), 0, maxSpeed);
  if (Math.abs(player.speed) < 0.01) player.speed = 0;
  const horizontal = { x: Math.sin(player.yaw), z: -Math.cos(player.yaw) };
  const verticalSpeed = player.hover ? 0 : climb * Math.max(player.speed, 3) * 0.7;
  const delta = { x: horizontal.x * player.speed * seconds, y: verticalSpeed * seconds, z: horizontal.z * player.speed * seconds };
  const hit = sweep(player.position, delta);
  if (hit) {
    const safeT = Math.max(0, hit.t - 0.0001);
    player.position.x += delta.x * safeT; player.position.y += delta.y * safeT; player.position.z += delta.z * safeT;
    if (hit.normal.x) delta.x = 0;
    if (hit.normal.y) delta.y = 0;
    if (hit.normal.z) delta.z = 0;
  } else {
    player.position.x += delta.x; player.position.y += delta.y; player.position.z += delta.z;
  }
  player.position.x = clamp(player.position.x, -WORLD_LIMIT + RADIUS, WORLD_LIMIT - RADIUS);
  player.position.y = clamp(player.position.y, MIN_ALTITUDE, MAX_ALTITUDE);
  player.position.z = clamp(player.position.z, -WORLD_LIMIT + RADIUS, WORLD_LIMIT - RADIUS);
  player.velocity = { x: delta.x / seconds, y: delta.y / seconds, z: delta.z / seconds };
  if (state.mode === 'tutorial' && state.tutorialStage === 0 && (Math.abs(turn) > 0.05 || length(delta) > 0.1)) {
    state.tutorialStage = 1; state.message = 'Press hover to slow and hold position.';
  }
  state.revision++;
}

function updateRunMessage(state: GameState, elapsedBefore: number): void {
  const remaining = RUN_SECONDS - state.run!.elapsed;
  const previous = RUN_SECONDS - elapsedBefore;
  if (previous > 30 && remaining <= 30) state.message = '30 seconds left — return home before nightfall!';
  else if (previous > 60 && remaining <= 60) state.message = 'One minute left — Meg needs to head home.';
  else if (previous > 120 && remaining <= 120) state.message = 'Two minutes left — finish up before nightfall.';
}
