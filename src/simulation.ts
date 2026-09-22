import type { FlightInput, GameState, Player, Stop, Vec3 } from './types';
import { enterHome, interactHome, stepHome } from './home';
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
/** How long the glow column takes to fade out before an auto-committed drop.
 * The halo goes away first; only then does the parcel leave Meg's hands. */
export const HALO_FADE_SECONDS = 0.45;
/** Meg descends to this height (m) above the pad before the parcel drops the
 * last stretch. The parcel detaches 1.4 m below her, so the visible fall is
 * ~1.4 m — short, centered in frame, and unmistakably a drop-off. */
export const DESCENT_RELEASE_HEIGHT = 3.5;
/** Auto-descent vertical speed (m/s): fast when high, easing out near the pad. */
const DESCENT_SPEED_MAX = 8, DESCENT_SPEED_MIN = 2;
/** Arrival auto-brake profile (m/s^2): shapes the sqrt(2·a·d) speed-cap curve
 * on approach. The drone decelerates toward the cap at the hover-brake rate,
 * so it rides under the curve and comes to rest at the destination instead
 * of overshooting it. */
const AUTO_BRAKE_DECEL = 6;
/** Inside this horizontal distance (m) of the destination, the brake holds the
 * drone at rest: without it the drone can straddle the pad center, flip to
 * "flying away", and launch off at full throttle. Suspended during the
 * wave-off window so a held throttle can power out of the column. */
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
    profile: { coins: 0, upgrades: { speed: 0, handling: 0, braking: 0 }, furniture: [], tutorialDone: false, runs: 0, deliveries: 0 },
    run: null, paused: false, pauseReason: '', message: '', tutorialStage: 0, drop: null, descent: null, haloFade: 0, fadeSnap: null, fadeCooldown: 0,
    homePosition: { x: 0, z: 3 }, homeFacing: 0, homePanel: 'none', summary: null, revision: 0,
    // Set once at boot by main.ts from matchMedia('(pointer: coarse)').
    // Lives on state (not read from window inside the simulation) so the
    // simulation stays pure and unit tests need no DOM stubs. Used for
    // device-specific tutorial copy.
    coarsePointer: false,
  };
}

export function startTutorial(state: GameState): void {
  state.mode = 'tutorial'; state.paused = false; state.pauseReason = '';
  state.player = createPlayer(); state.tutorialStage = 0; state.drop = null; state.descent = null; state.haloFade = 0; state.fadeSnap = null; state.fadeCooldown = 0;
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
  state.haloFade = 0; state.fadeSnap = null; state.fadeCooldown = 0;
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
  state.drop = null; state.descent = null;
  state.haloFade = 0; state.fadeSnap = null; state.fadeCooldown = 0;
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
  state.drop = null; state.descent = null;
  state.haloFade = 0; state.fadeSnap = null; state.fadeCooldown = 0;
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

/** True when the player is demanding speed on the throttle (beyond a small deadzone). */
function throttleHeld(input: FlightInput): boolean {
  return Math.abs(clamp(input.throttle, -1, 1)) > INPUT_DEADZONE;
}

/** A deliberate new maneuver during the halo fade aborts the pending drop.
 * Input that was already held when the fade started doesn't count — arriving
 * with the stick held is normal, and the drop should proceed automatically.
 * Only a fresh deflection (or a much stronger one) cancels; letting go never
 * does. Climb is never a cancel. */
/** Re-arm delay after the pilot aborts a pending auto-drop: the wave-off
 * has to mean something, so the fade can't restart on the very next frame
 * (the aborting jab would just become the new "steady held" baseline). */
const FADE_REARM_SECONDS = 2;

function freshManeuver(input: FlightInput, snap: { turn: number; throttle: number } | null): boolean {
  const s = snap ?? { turn: 0, throttle: 0 };
  const turn = clamp(input.turn, -1, 1), thr = clamp(input.throttle, -1, 1);
  return (Math.abs(turn) > INPUT_DEADZONE && Math.abs(turn - s.turn) > 0.35)
      || (Math.abs(thr) > INPUT_DEADZONE && Math.abs(thr - s.throttle) > 0.35);
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
 * destination's column with a parcel aboard — stick held or not. Arriving
 * with the stick held is the normal case, and the delivery should complete
 * automatically; only a fresh maneuver during the fade aborts it. Fast
 * flyovers never trigger it via the speed gate. */
function maybeAutoDrop(state: GameState, input: FlightInput): void {
  if (state.drop || state.descent || state.haloFade > 0 || state.fadeCooldown > 0) return;
  if (state.mode !== 'tutorial' && state.mode !== 'flight') return;
  if (Math.abs(state.player.speed) > AUTO_DROP_MAX_SPEED) return;
  const target = glowColumnTarget(state);
  const stop = target ? nearestStop(state) : undefined;
  if (!stop || stop.id !== target!.id || !autoDropEligible(state, stop)) return;
  state.haloFade = HALO_FADE_SECONDS;
  state.fadeSnap = { turn: clamp(input.turn, -1, 1), throttle: clamp(input.throttle, -1, 1) };
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

/** Starts the descent: Meg lowers herself to just above the pad, and only
 * then does the parcel drop the last stretch. Manual presses and the auto
 * path both land this way — every delivery shows the descent. The wave-off
 * window was the fade; once descending, the delivery is committed. */
function beginDescent(state: GameState, stop: Stop): void {
  state.descent = { stopId: stop.id };
  state.fadeCooldown = 0;
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
  if (state.fadeCooldown > 0) state.fadeCooldown = Math.max(0, state.fadeCooldown - seconds);
  // An auto-drop pending: the halo fades out first, and only then does the
  // parcel commit. The run clock and flight physics freeze mid-fade — pausing
  // freezes it too, since step returns early while paused — and only a fresh
  // maneuver cancels the pending drop (steady-held input and climb never do).
  // A cancel starts a short re-arm cooldown so the wave-off sticks.
  if (state.haloFade > 0) {
    state.haloFade = Math.max(0, state.haloFade - seconds);
    if (freshManeuver(input, state.fadeSnap)) {
      state.haloFade = 0; state.fadeSnap = null; state.fadeCooldown = FADE_REARM_SECONDS;
    }
    else if (state.haloFade === 0) { state.fadeSnap = null; commitAutoDescent(state); }
    state.revision++;
    if (state.haloFade > 0 || state.drop || state.descent) return;
  }
  // An auto-descent in progress: Meg lowers herself to just above the pad,
  // then the parcel drops the last stretch. The run clock and flight physics
  // freeze mid-descent — pausing freezes it too, since step returns early
  // while paused — and the descent can't be waved off: the fade was the
  // abort window.
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
        // Fast when high, gentle near the pad — no long ease-out tail.
        const vy = Math.min(DESCENT_SPEED_MAX, Math.max(DESCENT_SPEED_MIN, (state.player.position.y - targetY) * 1.5));
        state.player.position.y = Math.max(targetY, state.player.position.y - vy * seconds);
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
  const maxSpeed = MAX_SPEED * (1 + state.profile.upgrades.speed * 0.1);
  const turnRate = TURN_RATE * (1 + state.profile.upgrades.handling * 0.2);
  const hoverBrake = HOVER_BRAKE * (1 + state.profile.upgrades.braking * 0.2);
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
  // preserves the trim for the next leg. The single exception is the wave-off
  // window: for the 2 s after a fresh maneuver aborts a pending drop, a held
  // throttle suspends the hold-zone pin so the pilot can actually power out of
  // the column instead of being pinned to a drop they just cancelled.
  let brakeCap: number | undefined;
  let distH = Infinity;
  const brakeTarget = !player.hover ? glowColumnTarget(state) : undefined;
  const waveOff = state.fadeCooldown > 0 && throttleHeld(input);
  if (brakeTarget) {
    const dx = brakeTarget.position.x - player.position.x;
    const dz = brakeTarget.position.z - player.position.z;
    distH = Math.hypot(dx, dz);
    if (distH < AUTO_BRAKE_HOLD_RADIUS && !waveOff) {
      brakeCap = 0;
      player.brakeHold = true;
    } else if (!waveOff && player.brakeHold && distH < BRAKE_TRANSIT_RADIUS) {
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
  player.speed = clamp(player.speed + clamp(targetSpeed - player.speed, -hoverBrake * seconds, ACCELERATION * seconds), 0, maxSpeed);
  if (Math.abs(player.speed) < 0.01) player.speed = 0;
  if (player.brakeHold && player.speed === 0) {
    player.brakeHold = false;
    if (distH >= AUTO_BRAKE_HOLD_RADIUS) player.throttle = 0;
  }
  const horizontal = { x: Math.sin(player.yaw), z: -Math.cos(player.yaw) };
  const verticalSpeed = player.hover ? 0 : climb * Math.max(player.speed, 3) * 0.7;
  const delta = { x: horizontal.x * player.speed * seconds, y: verticalSpeed * seconds, z: horizontal.z * player.speed * seconds };
  const fromX = player.position.x, fromY = player.position.y, fromZ = player.position.z;
  // A hit used to discard the whole frame's motion, so every wall or
  // roof-edge contact was a dead stop — which also made turning feel frozen
  // while pinned against a building. Now the into-surface component stops at
  // the contact point but the tangential remainder still applies, so a
  // glancing hit slides along the surface. One sweep is enough: the slide
  // runs parallel to the hit face (it can't enter that box), and the boxes
  // are far enough apart that a single frame's remainder can't reach another.
  const hit = sweep(player.position, delta);
  if (hit && (hit.normal.x || hit.normal.y || hit.normal.z)) {
    const safeT = Math.max(0, hit.t - 0.0001);
    player.position.x += delta.x * safeT; player.position.y += delta.y * safeT; player.position.z += delta.z * safeT;
    const rest = 1 - safeT;
    if (!hit.normal.x) player.position.x += delta.x * rest;
    if (!hit.normal.y) player.position.y += delta.y * rest;
    if (!hit.normal.z) player.position.z += delta.z * rest;
  } else if (!hit) {
    player.position.x += delta.x; player.position.y += delta.y; player.position.z += delta.z;
  }
  // else: degenerate contact with no surface normal (already inside a box) —
  // hold still rather than guess a slide direction.
  player.position.x = clamp(player.position.x, -WORLD_LIMIT + RADIUS, WORLD_LIMIT - RADIUS);
  player.position.y = clamp(player.position.y, MIN_ALTITUDE, MAX_ALTITUDE);
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
  maybeAutoDrop(state, input);
  state.revision++;
}

function updateRunMessage(state: GameState, elapsedBefore: number): void {
  const remaining = RUN_SECONDS - state.run!.elapsed;
  const previous = RUN_SECONDS - elapsedBefore;
  if (previous > 30 && remaining <= 30) state.message = '30 seconds left — return home before nightfall!';
  else if (previous > 60 && remaining <= 60) state.message = 'One minute left — Meg needs to head home.';
  else if (previous > 120 && remaining <= 120) state.message = 'Two minutes left — finish up before nightfall.';
}
