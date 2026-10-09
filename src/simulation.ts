import type { FlightInput, GameState, Player, Stop, Vec3, Solid } from './types';
import { enterHome, interactHome, stepHome } from './home';
import { SOLIDS, STOPS, WALLS, INFRA_SOLIDS, WORLD_LIMIT } from './world';
import { heightAt } from './terrain';
import { generateLots, lotsToSolids } from './town-gen';

const RADIUS = 1;
const MIN_ALTITUDE = 3;
const MAX_ALTITUDE = 100;
const MAX_SPEED = 18;
const TURN_RATE = 2.2;
const THROTTLE_RATE = 7;
const ACCELERATION = 12;

/** Infill AABBs: the 204 seeded procedural buildings are visual-only in
 *  scene.ts; their solids join the collision set here so the player can't
 *  fly through them. Deterministic via TOWN_SEED; computed once at load. */
export const INFILL_SOLIDS: Solid[] = lotsToSolids(generateLots());

/** Full collision set: hero solids + infill solids + walls + bridge/ramp infra. */
export const COLLISION_SOLIDS: Solid[] = [...SOLIDS, ...INFILL_SOLIDS, ...WALLS, ...INFRA_SOLIDS];

/** Curved braking ("fade like a bike"): the manual decel rate scales with
 * speed — strong initial bite at full cruise that eases off as the drone
 * slows, like weight transfer under braking. */
const BRAKE_BASE_DECEL = 5;
const BRAKE_SPEED_FACTOR = 0.5;
export const RUN_SECONDS = 360;
const LANDING_SPEED = 3.5;
/** How long a dropped parcel takes to reach the pad. The drop is committed
 * when the player presses interact; the run clock and flight input freeze
 * while the parcel lands, so pausing mid-drop simply pauses the animation. */
export const DROP_ANIM_SECONDS = 0.9;
/** How long the glow column takes to fade out before an auto-committed drop.
 * The halo goes away first; only then does the parcel leave Meg's hands. */
export const HALO_FADE_SECONDS = 0.45;
/** Meg descends to this height (m) above the pad before the parcel drops the
 * last stretch. The parcel detaches 1.4 m below her, so the visible fall is
 * ~1.4 m — short, centered in frame, and unmistakably a drop-off. */
export const DESCENT_RELEASE_HEIGHT = 3.5;
/** Angular speed of the landing circling around the pad (radians/second). */
export const DESCENT_CIRCLE_OMEGA = 1.5;
/** Minimum circling radius so a near-center arrival still shows the orbit. */
export const DESCENT_CIRCLE_MIN_RADIUS = 3.0;
/** Seconds over which the circling ramps out to its full radius (no popping). */
export const DESCENT_CIRCLE_RAMP_SECONDS = 0.8;
/** Final fraction of the descent spent gliding from the orbit onto the pad. */
export const DESCENT_GLIDE_FRAC = 0.2;
/** Fastest Meg turns to face her direction of travel (radians/second): a
 * smooth, deliberate bank — never a snap, from any parked heading. */
export const DESCENT_YAW_RATE = 3.0;
/** Auto-descent vertical speed (m/s): fast when high, easing out near the pad. */
const DESCENT_SPEED_MAX = 8, DESCENT_SPEED_MIN = 2;
/** Arrival auto-brake profile (m/s^2): shapes the sqrt(2·a·d) speed-cap curve
 * on approach. The drone decelerates toward the cap at the curved braking
 * rate, so it rides under the curve and comes to rest at the destination
 * instead of overshooting it. */
const AUTO_BRAKE_DECEL = 6;

/** Braking decel rate (m/s^2) at a given speed: strong initial bite that
 * fades as the drone slows. Floored at AUTO_BRAKE_DECEL so the arrival
 * auto-brake's guaranteed pad stop can never regress; scaled by the
 * braking upgrade like the old flat rate was. */
export function brakeDecel(speed: number, brakingUpgrade: number): number {
  return Math.max(AUTO_BRAKE_DECEL, BRAKE_BASE_DECEL + BRAKE_SPEED_FACTOR * speed) * (1 + brakingUpgrade * 0.2);
}
/** Inside this horizontal distance (m) of the destination, the brake holds the
 * drone at rest: without it the drone can straddle the pad center, flip to
 * "flying away", and launch off at full throttle. */
const AUTO_BRAKE_HOLD_RADIUS = 2;
/** The sticky transit hold never extends past this distance (m) from the pad:
 * a too-fast transit always stops well inside it, so a stale hold can never
 * pin the drone far from its destination. */
const BRAKE_TRANSIT_RADIUS = 20;
/** Stick/throttle deflection below this counts as hands-off. */
const INPUT_DEADZONE = 0.05;
/** The drone must be at most this slow (m/s) for the auto-drop to fire. */
const AUTO_DROP_MAX_SPEED = 0.5;
/** The eligible drop zone is the full visible halo circle: the delivery
 * column's horizontal radius in meters. The glow column is rendered with
 * this same value as its widest point, so what the player sees as the
 * halo's width is exactly what the simulation accepts — the whole halo
 * circle counts, not just the thin beam, and not a wider invisible area. */
export const ARRIVAL_RADIUS = 3.6;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
/** Smoothstep of a 0..1 input, clamped — eases a blend in and out. */
const smooth01 = (t: number) => { const u = clamp(t, 0, 1); return u * u * (3 - 2 * u); };
/** Width of the soft border band inside the world limit: outward motion bleeds
 *  off across this zone so the edge feels like a gentle current rather than a
 *  wall. The hard clamp further down stays as the absolute backstop. */
const SOFT_BORDER_MARGIN = 45;
/** Bleeds off the radially-outward part of a movement delta near the world
 *  edge, eased in with a smoothstep across the soft border band. Tangential
 *  motion is untouched, so flying along the border feels normal. Mutates delta. */
function softenBorder(position: Vec3, delta: { x: number; y: number; z: number }): void {
  const distC = Math.hypot(position.x, position.z);
  const softR = WORLD_LIMIT - RADIUS - SOFT_BORDER_MARGIN;
  if (distC <= softR) return;
  const t = smooth01((distC - softR) / SOFT_BORDER_MARGIN);
  const nx = position.x / distC, nz = position.z / distC;
  const outward = delta.x * nx + delta.z * nz;
  if (outward <= 0) return;
  const kept = outward * (1 - t);
  delta.x += nx * (kept - outward);
  delta.z += nz * (kept - outward);
}
const length = (v: Vec3) => Math.hypot(v.x, v.y, v.z);

export function createPlayer(position: Vec3 = STOPS[0].position): Player {
  return {
    position: { ...position }, yaw: 0, pitch: 0, speed: 9, throttle: 9,
    hover: false, velocity: { x: 0, y: 0, z: -9 }, brakeHold: false,
  };
}

export function createState(): GameState {
  return {
    mode: 'title', player: createPlayer(),
    profile: { coins: 0, upgrades: { speed: 0, handling: 0, braking: 0, capacity: 0, glide: 0, capstones: {} }, furniture: [], tutorialDone: false, runs: 0, deliveries: 0 },
    run: null, paused: false, pauseReason: '', message: '', tutorialStage: 0, drop: null, descent: null, haloFade: 0,
    homePosition: { x: 0, z: 3 }, homeFacing: 0, homePanel: 'none', homeSitting: false, petCount: 0, summary: null, revision: 0,
    // General-purpose save seed (2026-09-30): deterministic RNG for ambient
    // life and any future seeded systems. Generated once per save file.
    seed: Math.floor(Math.random() * 0x7fffffff),
    // Set once at boot by main.ts from matchMedia('(pointer: coarse)').
    // Lives on state (not read from window inside the simulation) so the
    // simulation stays pure and unit tests need no DOM stubs. Used for
    // device-specific tutorial copy.
    coarsePointer: false,
  };
}

export function startTutorial(state: GameState): void {
  state.mode = 'tutorial'; state.paused = false; state.pauseReason = '';
  state.player = createPlayer(); state.tutorialStage = 0; state.drop = null; state.descent = null; state.haloFade = 0;
  state.message = 'Steer toward the glowing Harbor Cafe pad.'; state.revision++;
}

export function toggleHover(state: GameState): void {
  if (state.paused || (state.mode !== 'tutorial' && state.mode !== 'flight')) return;
  state.player.hover = !state.player.hover;
  // Tutorial advancement is speed-based (see step()): holding still after
  // moving confirms the stop on both touch (release the stick) and desktop
  // (Space), so the hover button's removal needs no special-casing here.
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
    return Math.hypot(dx, dz) <= ARRIVAL_RADIUS && player.position.y >= stop.position.y;
  });
}

export function interact(state: GameState): void {
  if (state.paused) return;
  if (state.mode === 'home') { interactHome(state); return; }
  if (state.drop || state.descent || state.haloFade > 0) return;
  if (state.mode === 'tutorial') {
    if (nearestStop(state)?.id !== 'harbor-cafe') return;
    // The practice drop lands like a real one, then practice completes.
    beginDescent(state, STOPS.find((stop) => stop.id === 'harbor-cafe')!);
    return;
  }
  if (state.mode !== 'flight' || !state.run) return;
  if (state.run.elapsed >= RUN_SECONDS) { settleRun(state, false); return; }
  const stop = nearestStop(state);
  if (!stop) return;
  beginDescent(state, stop);
}

/** Commits the parcel drop once the descent reaches release height: the halo
 * hides the moment the drop commits; the parcel lands during the 0.9 s
 * animation and the delivery (or banking) resolves when it reaches the pad. */
function beginDrop(state: GameState, stop: Stop): void {
  // The approach is over once the drop commits: release the sticky brake hold
  // (flight physics freezes during the drop animation, so the step logic that
  // normally clears it will not run).
  state.player.brakeHold = false;
  // Reset fade state for safety. A manual press can't actually reach here
  // mid-fade — interact() returns early while haloFade > 0 — but the reset
  // is harmless if that ever changes.
  state.haloFade = 0;
  state.drop = { stopId: stop.id, t: 0, parcel: stop.id !== 'home' };
  freezeForDrop(state);
  state.message = stop.id === 'home' ? 'Banking your earnings…' : 'Parcel away!';
  state.revision++;
}

/** Holds Meg still while a committed drop lands. The throttle trim is a pilot
 * setting, not motion state, so the freeze leaves it alone through the
 * animation; completeDrop clears it when the delivery resolves so the next
 * leg starts parked. */
function freezeForDrop(state: GameState): void {
  state.player.speed = 0; state.player.hover = true;
  state.player.velocity = { x: 0, y: 0, z: 0 };
}

/** Resolves a committed drop once its landing animation finishes. Payout is
 * the job's flat payout: height never feeds the rating. */
function completeDrop(state: GameState, stopId: string): void {
  // The drop freeze is over the moment the parcel lands: release the hover
  // pin that held the drone still during the animation. Without this the
  // drone stays pinned at speed 0 after every delivery — the offers screen
  // reuses the same player, so chooseJob/returnHome would inherit a stuck
  // hover with no way to move. Touch players are hit hardest: there is no
  // hover button anymore, so nothing can clear it.
  state.player.hover = false;
  // The next leg starts parked: clear the throttle trim so the drone does
  // not auto-fly when the next job is chosen. Holding the stick (or keys)
  // afterwards builds speed back up normally.
  state.player.throttle = 0;
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
  // Home is always a safe place to bank what has already been earned. A
  // flown-home landing goes straight to the home room — no button presses:
  // the landing animation plays, earnings bank, and Meg is home.
  if (stop.id === 'home') {
    const earnings = run.earnings, deliveries = run.deliveries;
    settleRun(state, true);
    state.summary = null;
    enterHome(state);
    state.message = `Shift complete — banked ${earnings} coins after ${deliveries} ${deliveries === 1 ? 'delivery' : 'deliveries'}.`;
    return;
  }
  if (run.job?.to !== stop.id) return;
  run.earnings += run.job.payout;
  run.deliveries++;
  state.profile.deliveries++;
  run.job = null;
  run.lastStop = stop.id;
  run.recentStops = [...run.recentStops, stop.id].slice(-3);
  run.offers = makeOffers(run.seed, run.deliveries, stop.id, run.recentStops, offerSlots(state));
  run.returning = false;
  state.mode = 'offers';
  state.message = 'Delivered! Choose the next parcel or return home.';
  state.revision++;
}

/** Starts a fresh shift. A supplied seed makes its offers reproducible for tests/replays.
 * Leaving home opens the job picker (the same offers screen as after each
 * dropoff) instead of auto-assigning Harbor Cafe — the first delivery is the
 * player's choice. */
export function startRun(state: GameState, seed = Date.now()): void {
  if (state.paused || state.run || (state.mode !== 'title' && state.mode !== 'summary' && state.mode !== 'home')) return;
  const safeSeed = Number.isFinite(seed) ? Math.floor(seed) : Date.now();
  state.player = createPlayer();
  state.run = {
    seed: safeSeed, elapsed: 0, earnings: 0, deliveries: 0,
    job: null,
    offers: makeOffers(safeSeed, 0, 'home', [], offerSlots(state)),
    returning: false, lastStop: 'home', recentStops: [],
  };
  state.summary = null;
  state.homePanel = 'none';
  state.drop = null; state.descent = null;
  state.haloFade = 0;
  state.mode = 'offers';
  state.message = 'Choose your first delivery of the day.';
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
  if (state.paused || state.mode !== 'offers' || !state.run || state.run.deliveries === 0) return;
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
  state.drop = null; state.descent = null;
  state.haloFade = 0;
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

/** Bearing of `to` as seen from `from`, relative to facing `yaw`, in degrees.
 * 0 means straight ahead, positive is clockwise — the HUD compass convention. */
export function relativeBearing(from: { x: number; z: number }, to: { x: number; z: number }, yaw: number): number {
  return (Math.atan2(to.x - from.x, -(to.z - from.z)) - yaw) * 180 / Math.PI;
}

function stopName(id: string): string { return STOPS.find((stop) => stop.id === id)?.name ?? id; }

/** The active destination the glow column should mark: the live delivery's
 * drop target while a parcel is carried, or home when heading home.
 * Undefined whenever there is no active destination (title/home/summary/
 * offers modes, or a flight with no run), so the beacon renders only while
 * a destination is live. It follows job changes, and hides the moment a
 * delivery resolves because completeDrop clears the job or leaves flight mode.
 * It also hides the moment any drop commits, so the halo is gone before the
 * parcel's landing animation starts. */
export function glowColumnTarget(state: GameState): Stop | undefined {
  if (state.drop || state.descent) return undefined;
  if (state.mode !== 'tutorial' && state.mode !== 'flight') return undefined;
  return getTarget(state);
}

function hash(seed: number): number {
  let value = seed | 0;
  value = Math.imul(value ^ (value >>> 16), 0x45d9f3b);
  value = Math.imul(value ^ (value >>> 16), 0x45d9f3b);
  return (value ^ (value >>> 16)) >>> 0;
}

function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 0x5bd1e995);
    h ^= h >>> 13;
  }
  return h >>> 0;
}

export function makeOffers(seed: number, delivery: number, from: string, recentStops: string[], count = 2): import('./types').Job[] {
  let value = hash(seed ^ hash(delivery) ^ hashString(from));
  const origin = STOPS.find((item) => item.id === from)!;
  const excluded = new Set(['home', from, ...recentStops]);
  const candidates = STOPS.filter((stop) => !excluded.has(stop.id))
    .map((stop) => ({ stop, distance: Math.hypot(stop.position.x - origin.position.x, stop.position.z - origin.position.z) }));

  // Categorize by distance: short <130m, medium 130-260m, long >260m
  const short = candidates.filter((c) => c.distance < 130);
  const medium = candidates.filter((c) => c.distance >= 130 && c.distance <= 260);
  const long = candidates.filter((c) => c.distance > 260);
  const categories = [
    { name: 'Short hop', items: short },
    { name: 'Medium run', items: medium },
    { name: 'Long haul', items: long },
  ].filter((cat) => cat.items.length > 0);

  // Pick one stop from each category
  const pickFrom = (items: typeof candidates, salt: number): typeof candidates[0] => {
    value = hash(value + salt);
    return items[value % items.length];
  };

  // Original 2-offer path (preserves exact hash chain for backward compatibility
  // with tests that assert seed 1 offers harbor-cafe).
  // Pick 2 random categories (seeded)
  value = hash(value + 1);
  const catIndex1 = value % categories.length;
  let catIndex2 = catIndex1;
  if (categories.length > 1) {
    let attempts = 0;
    while (catIndex2 === catIndex1) {
      attempts++;
      value = hash(value + 2 + attempts);
      catIndex2 = value % categories.length;
    }
  }

  const first = pickFrom(categories[catIndex1].items, 10);
  // Edge case: if only one candidate exists total, return a single offer
  if (candidates.length === 1) {
    const payoutFor = (distance: number) => distance < 130 ? 20 : distance <= 260 ? 35 : 50;
    const category = first.distance < 130 ? 'Short hop' : first.distance <= 260 ? 'Medium run' : 'Long haul';
    return [{ from, to: first.stop.id, payout: payoutFor(first.distance), label: category, parcel: 'Delivery parcel' }];
  }
  let second = pickFrom(categories[catIndex2].items, 20);
  // Guarantee no duplicates
  if (second.stop.id === first.stop.id) {
    const alternatives = categories[catIndex2].items.filter((c) => c.stop.id !== first.stop.id);
    if (alternatives.length > 0) {
      second = pickFrom(alternatives, 30);
    } else {
      // Same category, single item: pick from a different category
      const otherCats = categories.filter((_, i) => i !== catIndex2 && _.items.length > 0);
      if (otherCats.length > 0) {
        second = pickFrom(otherCats[0].items, 30);
      }
      // If no alternatives exist (shouldn't happen with 22 stops), accept the duplicate
    }
  }

  const picked = [first, second];
  const usedStops = new Set(picked.map((p) => p.stop.id));
  const usedCatIndexes = new Set([catIndex1, catIndex2]);
  // For count > 2: pick additional categories and stops, no duplicates
  let extraGuard = 0;
  while (picked.length < count && extraGuard < count * 20) {
    extraGuard++;
    value = hash(value + 100 + extraGuard);
    const idx = value % categories.length;
    if (usedCatIndexes.has(idx) && usedCatIndexes.size < categories.length) continue;
    usedCatIndexes.add(idx);
    const catItems = categories[idx].items.filter((c) => !usedStops.has(c.stop.id));
    const pool = catItems.length > 0 ? catItems : candidates.filter((c) => !usedStops.has(c.stop.id));
    if (pool.length === 0) break;
    const choice = pickFrom(pool, 40 + extraGuard * 10);
    usedStops.add(choice.stop.id);
    picked.push(choice);
  }

  const payoutFor = (distance: number) => distance < 130 ? 20 : distance <= 260 ? 35 : 50;

  return picked
    .sort((a, b) => a.distance - b.distance)
    .map(({ stop, distance }) => {
      const category = distance < 130 ? 'Short hop' : distance <= 260 ? 'Medium run' : 'Long haul';
      return { from, to: stop.id, payout: payoutFor(distance), label: category, parcel: 'Delivery parcel' };
    });
}

/** Whether the profile has a specific capstone chosen for a track. */
export function hasCapstone(state: GameState, track: string, id: string): boolean {
  return state.profile.upgrades.capstones[track] === id;
}

/** Number of job offer slots: 2 base + capacity levels + deep-satchel capstone. */
export function offerSlots(state: GameState): number {
  const u = state.profile.upgrades;
  let slots = 2 + u.capacity;
  if (u.capstones['capacity'] === 'deep-satchel') slots += 1;
  return slots;
}

/** Flight stats with all broom upgrade and capstone effects applied.
 * Exported for testing; step() uses this for the per-frame values. */
export function computeFlightStats(state: GameState, verticalSpeed: number): {
  maxSpeed: number; turnRate: number; brakeRate: number; accel: number;
} {
  const u = state.profile.upgrades;
  const cap = (track: string, id: string) => u.capstones[track] === id;
  const player = state.player;

  let maxSpeed = MAX_SPEED * (1 + u.speed * 0.1);
  if (cap('speed', 'tailwind')) maxSpeed *= 1.15;
  if (cap('glide', 'dive-bomber') && verticalSpeed < -5) maxSpeed *= 1.3;

  let turnRate = TURN_RATE * (1 + u.handling * 0.2);
  if (player.speed > maxSpeed * 0.5) turnRate *= (1 + u.glide * 0.1);
  if (cap('handling', 'tight-turns')) turnRate *= 1.25;
  if (cap('glide', 'cloud-surfer') && player.position.y > 60) turnRate *= 1.25;

  let brakeRate = brakeDecel(player.speed, u.braking);
  if (cap('braking', 'quick-stop')) brakeRate *= 1.3;
  if (player.hover && cap('handling', 'stable-hover')) brakeRate *= 1.43; // 30% faster engage

  let accel = ACCELERATION;
  if (cap('speed', 'quickstart')) accel *= 1.3;

  return { maxSpeed, turnRate, brakeRate, accel };
}

function sweep(start: Vec3, delta: Vec3): { t: number; normal: Vec3 } | undefined {
  let hit: { t: number; normal: Vec3 } | undefined;
  for (const solid of COLLISION_SOLIDS) {
    const min = { x: solid.min.x - RADIUS, y: solid.min.y - RADIUS, z: solid.min.z - RADIUS };
    const max = { x: solid.max.x + RADIUS, y: solid.max.y + RADIUS, z: solid.max.z + RADIUS };
    // enter starts at a tiny negative so a ray beginning exactly on a face
    // (near == 0) still records that face's normal. Otherwise the 0 > 0
    // comparison fails, the normal stays zero, and a corner contact degrades
    // to "degenerate" — pinning the player instead of sliding.
    let enter = -1e-9, exit = 1;
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

/** Whether the drone should auto-drop/land at this stop right now, no button
 * needed: the practice parcel at Harbor Cafe (any tutorial stage — the hover
 * lesson is guidance, not a gate), a live job's destination, or a flown-home
 * return at the rooftop, which auto-lands and banks the earnings. */
function autoDropEligible(state: GameState, stop: Stop): boolean {
  if (state.mode === 'tutorial') return stop.id === 'harbor-cafe';
  if (state.mode !== 'flight' || !state.run) return false;
  if (stop.id === 'home') return state.run.returning && !state.run.job;
  return state.run.job?.to === stop.id;
}

/** Starts the pre-drop halo fade once the drone is slow inside the active
 * destination's column with a parcel aboard. The landing is committed from
 * here: control inputs are ignored until the drop resolves, so the animation
 * can't be broken out of by accident. Fast flyovers never trigger it via the
 * speed gate. */
function maybeAutoDrop(state: GameState): void {
  if (state.drop || state.descent || state.haloFade > 0) return;
  if (state.mode !== 'tutorial' && state.mode !== 'flight') return;
  if (Math.abs(state.player.speed) > AUTO_DROP_MAX_SPEED) return;
  const target = glowColumnTarget(state);
  const stop = target ? nearestStop(state) : undefined;
  if (!stop || stop.id !== target!.id || !autoDropEligible(state, stop)) return;
  state.haloFade = HALO_FADE_SECONDS;
}

/** Begins the descent for a pending auto-drop once the halo has faded,
 * re-verifying the drone is still eligible. */
function commitAutoDescent(state: GameState): void {
  const target = glowColumnTarget(state);
  const stop = target ? nearestStop(state) : undefined;
  if (!stop || stop.id !== target!.id || !autoDropEligible(state, stop)) return;
  if (Math.abs(state.player.speed) > AUTO_DROP_MAX_SPEED) return;
  beginDescent(state, stop);
}

/** Starts the descent: Meg circles the pad like a bird losing height, then
 * glides in to hover just above it, and only then does the parcel drop the
 * last stretch. Manual presses and the auto path both land this way — every
 * delivery shows the descent. The landing is committed from the fade onward:
 * control inputs are ignored until the drop resolves. */
function beginDescent(state: GameState, stop: Stop): void {
  const dx = state.player.position.x - stop.position.x;
  const dz = state.player.position.z - stop.position.z;
  const radius0 = Math.hypot(dx, dz);
  const angle0 = Math.atan2(dz, dx);
  // Circle whichever way lines up with the parked heading: the two orbit
  // tangents are exactly π apart, so the better one is always within π/2 of
  // where she faces — no spin-around to join the orbit, from any angle.
  const tangentCCW = Math.atan2(-Math.sin(angle0), -Math.cos(angle0));
  const diffCCW = Math.abs(Math.atan2(Math.sin(tangentCCW - state.player.yaw),
    Math.cos(tangentCCW - state.player.yaw)));
  state.descent = {
    stopId: stop.id,
    startY: state.player.position.y,
    angle: angle0,
    radius0,
    orbitR: Math.max(radius0, DESCENT_CIRCLE_MIN_RADIUS),
    dir: diffCCW <= Math.PI / 2 ? 1 : -1,
    t: 0,
  };
  // The approach is over: release the sticky brake hold and hold Meg still
  // while she descends (flight physics freezes through the descent, so the
  // step logic that normally clears it will not run).
  state.player.brakeHold = false;
  freezeForDrop(state);
  state.message = 'Descending…';
  state.revision++;
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
  // An auto-drop pending: the halo fades out first, and only then does the
  // parcel commit. The run clock and flight physics freeze mid-fade — pausing
  // freezes it too, since step returns early while paused — and the landing
  // is committed: control inputs are ignored until the drop resolves, so the
  // animation can't be broken out of by accident.
  if (state.haloFade > 0) {
    state.haloFade = Math.max(0, state.haloFade - seconds);
    if (state.haloFade === 0) commitAutoDescent(state);
    state.revision++;
    if (state.haloFade > 0 || state.drop || state.descent) return;
  }
  // A bird-like landing in progress: Meg circles the pad at a steady radius
  // while losing height, then glides in to hover just above the pad before
  // the parcel drops the last stretch. She faces her direction of travel
  // the whole way down. The run clock and flight physics freeze mid-descent
  // — pausing freezes it too, since step returns early while paused — and
  // control inputs are ignored until the drop resolves.
  if (state.descent) {
    const stop = STOPS.find((s) => s.id === state.descent!.stopId);
    if ((state.mode !== 'flight' && state.mode !== 'tutorial') || !stop) {
      // Defensive-only: unreachable in practice — the clock is frozen and
      // input ignored mid-descent, so the mode can't change here. Unpin the
      // hover freeze so Meg never hangs frozen mid-air.
      state.descent = null;
      state.player.hover = false;
    }
    else {
      const targetY = stop.position.y + DESCENT_RELEASE_HEIGHT;
      if (state.player.position.y - targetY <= 0.05) {
        state.descent = null;
        beginDrop(state, stop);
      } else {
        // Circle the pad, then glide in: the radius holds steady through most
        // of the descent and only shrinks over the last stretch, like a bird
        // lining up and flaring onto its perch. A near-center arrival eases
        // out to a visible orbit instead of popping.
        const d = state.descent!;
        const px = state.player.position.x, pz = state.player.position.z;
        const vy = Math.min(DESCENT_SPEED_MAX, Math.max(DESCENT_SPEED_MIN, (state.player.position.y - targetY) * 1.5));
        state.player.position.y = Math.max(targetY, state.player.position.y - vy * seconds);
        d.t += seconds;
        d.angle += d.dir * DESCENT_CIRCLE_OMEGA * seconds;
        const rBase = d.radius0 + (d.orbitR - d.radius0) * smooth01(d.t / DESCENT_CIRCLE_RAMP_SECONDS);
        const frac = Math.max(0, (state.player.position.y - targetY) / Math.max(0.001, d.startY - targetY));
        const glide = frac >= DESCENT_GLIDE_FRAC ? 1 : smooth01(frac / DESCENT_GLIDE_FRAC);
        const r = rBase * glide;
        const nx = stop.position.x + Math.cos(d.angle) * r;
        const nz = stop.position.z + Math.sin(d.angle) * r;
        // Face the direction of travel (heading is clockwise from north),
        // turning toward it at a capped bank rate: smooth from any parked
        // heading, and quick to settle since the orbit was chosen to match it.
        const dx = nx - px, dz = nz - pz;
        if (Math.hypot(dx, dz) > 0.75 * seconds) {
          const target = Math.atan2(dx, -dz);
          const diff = Math.atan2(Math.sin(target - state.player.yaw), Math.cos(target - state.player.yaw));
          const maxStep = DESCENT_YAW_RATE * seconds;
          state.player.yaw += Math.max(-maxStep, Math.min(maxStep, diff));
        }
        state.player.position.x = nx;
        state.player.position.z = nz;
        state.revision++;
      }
    }
    return;
  }
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
  // Preliminary vertical speed for the dive-bomber capstone (uses current
  // speed; the authoritative value is recomputed after the speed update).
  const prelimVertical = player.hover ? 0 : climb * Math.max(player.speed, 3) * 0.7;
  const { maxSpeed, turnRate, brakeRate, accel } = computeFlightStats(state, prelimVertical);
  player.yaw += turn * turnRate * seconds;
  player.pitch += (climb * 0.38 - player.pitch) * Math.min(1, 7 * seconds);
  // Release-to-brake (touch stick): releasing the stick collapses the cruise
  // trim it was driving, so the drone brakes to a stop instead of flying on
  // at the old trim. Keyboard trim (Q/E) never emits cutThrottle, so desktop
  // cruise behavior is unchanged.
  if (input.cutThrottle) player.throttle = 0;
  player.throttle = clamp(player.throttle + clamp(input.throttle, -1, 1) * THROTTLE_RATE * seconds, 0, maxSpeed);
  // Arrival auto-brake: whenever closing on a live destination, cap speed to
  // the braking profile v = sqrt(2·a·d) so the drone glides to rest at the pad
  // instead of overshooting it. The brake is authoritative: holding the
  // throttle is how you fly, so it only sets speed up to the cap — it can
  // never defeat the stop. Steering (turn/climb) never defeats it either. The
  // stop inside the column is therefore guaranteed no matter how the pilot
  // arrives, hands-off or flat-out. Once the drone enters the pad's hold zone
  // under braking, the hold is sticky: a too-fast transit keeps full braking
  // until the drone actually stops, instead of releasing it to a stale
  // throttle setting. A transit that carries past the pad kills the stale
  // throttle trim so the drone parks; a clean stop inside the hold zone
  // preserves the trim for the next leg.
  let brakeCap: number | undefined;
  let distH = Infinity;
  const brakeTarget = !player.hover ? glowColumnTarget(state) : undefined;
  if (brakeTarget) {
    const dx = brakeTarget.position.x - player.position.x;
    const dz = brakeTarget.position.z - player.position.z;
    distH = Math.hypot(dx, dz);
    if (distH < AUTO_BRAKE_HOLD_RADIUS) {
      brakeCap = 0;
      player.brakeHold = true;
    } else if (player.brakeHold && distH < BRAKE_TRANSIT_RADIUS) {
      brakeCap = 0;
    } else if (distH > 1e-6) {
      const closing = (player.velocity.x * dx + player.velocity.z * dz) / distH;
      if (closing > 0.5) brakeCap = Math.sqrt(2 * AUTO_BRAKE_DECEL * distH);
    }
    if (brakeCap === undefined) player.brakeHold = false;
  } else {
    player.brakeHold = false;
  }
  const held = player.throttle > INPUT_DEADZONE ? player.throttle : player.speed;
  const targetSpeed = player.hover ? 0 : brakeCap === undefined ? player.throttle : Math.min(brakeCap, held);
  player.speed = clamp(player.speed + clamp(targetSpeed - player.speed, -brakeRate * seconds, accel * seconds), 0, maxSpeed);
  if (Math.abs(player.speed) < 0.01) player.speed = 0;
  if (player.brakeHold && player.speed === 0) {
    player.brakeHold = false;
    if (distH >= AUTO_BRAKE_HOLD_RADIUS) player.throttle = 0;
  }
  const horizontal = { x: Math.sin(player.yaw), z: -Math.cos(player.yaw) };
  const verticalSpeed = player.hover ? 0 : climb * Math.max(player.speed, 3) * 0.7;
  const delta = { x: horizontal.x * player.speed * seconds, y: verticalSpeed * seconds, z: horizontal.z * player.speed * seconds };
  softenBorder(player.position, delta);
  const fromX = player.position.x, fromY = player.position.y, fromZ = player.position.z;
  // A hit used to discard the whole frame's motion, so every wall or
  // roof-edge contact was a dead stop — which also made turning feel frozen
  // while pinned against a building. Now the into-surface component stops at
  // the contact point but the tangential remainder still applies, so a
  // glancing hit slides along the surface. The sweep iterates (up to 3 hits
  // per frame): in a narrow corridor the slide remainder can reach the
  // opposite wall in the same frame, and a single sweep would let it
  // penetrate — the next iteration re-sweeps the remainder so Meg slides
  // through or stops cleanly instead of rattling between the walls.
  let remaining = { ...delta };
  // Hardest downward impact into the ground this frame (m/s), for the bumpy
  // landing penalty. Only ground hits (normal.y dominant), not wall slides.
  let landingImpact = 0;
  for (let sweepIter = 0; sweepIter < 3; sweepIter++) {
    const hit = sweep(player.position, remaining);
    if (!hit) {
      player.position.x += remaining.x; player.position.y += remaining.y; player.position.z += remaining.z;
      break;
    }
    if (!(hit.normal.x || hit.normal.y || hit.normal.z)) break; // degenerate: de-penetration handles it
    // Ground impact: normal points mostly up, and we're moving down into it.
    if (hit.normal.y > 0.7 && remaining.y < 0) {
      landingImpact = Math.max(landingImpact, -remaining.y / seconds);
    }
    const safeT = Math.max(0, hit.t - 0.0001);
    player.position.x += remaining.x * safeT; player.position.y += remaining.y * safeT; player.position.z += remaining.z * safeT;
    const rest = 1 - safeT;
    remaining = {
      x: hit.normal.x ? 0 : remaining.x * rest,
      y: hit.normal.y ? 0 : remaining.y * rest,
      z: hit.normal.z ? 0 : remaining.z * rest,
    };
    if (!remaining.x && !remaining.y && !remaining.z) break;
  }
  // else: degenerate contact with no surface normal (already inside a box) —
  // fall through to the de-penetration pass below, which pushes out along
  // the shortest exit instead of holding still.
  //
  // De-penetration: if the player sphere intersects any solid (from a discrete
  // step, a moved building, or a narrow gap), push out along the minimum
  // translation vector — the closest face. Iterates so a push out of one box
  // that lands in another still resolves. Meg can never be left stuck inside.
  for (let iter = 0; iter < 4; iter++) {
    let pushed = false;
    for (const solid of COLLISION_SOLIDS) {
      const minX = solid.min.x - RADIUS, maxX = solid.max.x + RADIUS;
      const minY = solid.min.y - RADIUS, maxY = solid.max.y + RADIUS;
      const minZ = solid.min.z - RADIUS, maxZ = solid.max.z + RADIUS;
      const p = player.position;
      if (p.x <= minX || p.x >= maxX || p.y <= minY || p.y >= maxY || p.z <= minZ || p.z >= maxZ) continue;
      // Penetration depth to each face; exit via the closest one.
      const dxMin = p.x - minX, dxMax = maxX - p.x;
      const dyMin = p.y - minY, dyMax = maxY - p.y;
      const dzMin = p.z - minZ, dzMax = maxZ - p.z;
      const m = Math.min(dxMin, dxMax, dyMin, dyMax, dzMin, dzMax);
      // Push 2cm past the face so floating-point doesn't leave us exactly on
      // the boundary (which the sweep reads as "inside" next frame).
      const skin = 0.02;
      if (m === dxMin) p.x = minX - skin; else if (m === dxMax) p.x = maxX + skin;
      else if (m === dyMin) p.y = minY - skin; else if (m === dyMax) p.y = maxY + skin;
      else if (m === dzMin) p.z = minZ - skin; else p.z = maxZ + skin;
      pushed = true;
    }
    if (!pushed) break;
  }
  player.position.x = clamp(player.position.x, -WORLD_LIMIT + RADIUS, WORLD_LIMIT - RADIUS);
  // Floor follows the terrain: 3m above ground (or water), so Meg can't clip hills.
  const groundY = Math.max(heightAt(player.position.x, player.position.z), 0) + MIN_ALTITUDE;
  const yBeforeClamp = player.position.y;
  player.position.y = clamp(player.position.y, groundY, MAX_ALTITUDE);
  // Hard landing into the terrain floor counts for the bumpy-landing penalty.
  if (yBeforeClamp < groundY) {
    landingImpact = Math.max(landingImpact, (groundY - yBeforeClamp) / seconds);
  }
  // Bumpy landing penalty: hard ground impacts bleed speed, unless
  // feather-touch or careful-packer negates it.
  const noBumpPenalty =
    state.profile.upgrades.capstones['braking'] === 'feather-touch' ||
    state.profile.upgrades.capstones['capacity'] === 'careful-packer';
  if (landingImpact > 8 && !noBumpPenalty) {
    player.speed *= 0.6;
    player.throttle = Math.min(player.throttle, player.speed);
  }
  player.position.z = clamp(player.position.z, -WORLD_LIMIT + RADIUS, WORLD_LIMIT - RADIUS);
  // Velocity is what actually happened, not what was attempted: pinned
  // against a wall it reads ~0 instead of the full into-wall delta.
  player.velocity = { x: (player.position.x - fromX) / seconds, y: (player.position.y - fromY) / seconds, z: (player.position.z - fromZ) / seconds };
  const moved = length({ x: player.position.x - fromX, y: player.position.y - fromY, z: player.position.z - fromZ });
  if (state.mode === 'tutorial' && state.tutorialStage === 0 && moved > 0.1) {
    // Stage 0 needs real motion, not turning in place: stage 1's lesson is
    // the stop, and its gate (speed near zero) must not fire on the same
    // frame the player first twitches the stick.
    state.tutorialStage = 1;
    // Touch players release the stick (release-to-brake); desktop players
    // use Space. Match the tutorial copy to the device so the "slow down"
    // lesson teaches the control the player actually has.
    state.message = state.coarsePointer
      ? 'Release the stick to slow down and hover.'
      : 'Press Space to slow down and hover.';
  } else if (state.mode === 'tutorial' && state.tutorialStage === 1 && Math.abs(player.speed) < 0.5) {
    // The stop itself is the lesson: touch players release the stick
    // (release-to-brake), desktop players press Space (hover). Either way
    // the drone is holding still, which is what stage 2 builds on.
    state.tutorialStage = 2;
    state.message = 'Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself.';
  }
  maybeAutoDrop(state);
  state.revision++;
}

function updateRunMessage(state: GameState, elapsedBefore: number): void {
  const remaining = RUN_SECONDS - state.run!.elapsed;
  const previous = RUN_SECONDS - elapsedBefore;
  if (previous > 30 && remaining <= 30) state.message = '30 seconds left — return home before nightfall!';
  else if (previous > 60 && remaining <= 60) state.message = 'One minute left — Meg needs to head home.';
  else if (previous > 120 && remaining <= 120) state.message = 'Two minutes left — finish up before nightfall.';
}
