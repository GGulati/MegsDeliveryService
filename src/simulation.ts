import type { FlightInput, GameState, Player, Stop, Vec3 } from './types';
import { SOLIDS, STOPS, WORLD_LIMIT } from './world';

const RADIUS = 1;
const MIN_ALTITUDE = 3;
const MAX_ALTITUDE = 100;
const MAX_SPEED = 18;
const TURN_RATE = 2.2;
const THROTTLE_RATE = 7;
const ACCELERATION = 12;
const HOVER_BRAKE = 18;

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
    run: null, paused: false, pauseReason: '', message: '', tutorialStage: 0,
    homePosition: { x: STOPS[0].position.x, z: STOPS[0].position.z }, summary: null, revision: 0,
  };
}

export function startTutorial(state: GameState): void {
  state.mode = 'tutorial'; state.paused = false; state.pauseReason = '';
  state.player = createPlayer(); state.tutorialStage = 0;
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
  if (player.speed >= 3.5) return undefined;
  return STOPS.find((stop) => {
    const dx = player.position.x - stop.position.x;
    const dz = player.position.z - stop.position.z;
    return Math.hypot(dx, dz) <= 7 && Math.abs(player.position.y - stop.position.y) <= 4;
  });
}

export function interact(state: GameState): void {
  if (state.paused || state.mode !== 'tutorial' || state.tutorialStage !== 2 || nearestStop(state)?.id !== 'harbor-cafe') return;
  state.profile.tutorialDone = true;
  state.message = 'Practice complete';
  state.mode = 'title'; state.tutorialStage = 3; state.revision++;
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
  if (state.paused || (state.mode !== 'tutorial' && state.mode !== 'flight') || dt <= 0) return;
  const player = state.player;
  const seconds = dt;
  const turn = clamp(input.turn, -1, 1);
  const climb = clamp(input.climb, -1, 1);
  player.yaw += turn * TURN_RATE * seconds;
  player.pitch += (climb * 0.38 - player.pitch) * Math.min(1, 7 * seconds);
  player.throttle = clamp(player.throttle + clamp(input.throttle, -1, 1) * THROTTLE_RATE * seconds, 0, MAX_SPEED);
  const targetSpeed = player.hover ? 0 : player.throttle;
  player.speed = clamp(player.speed + clamp(targetSpeed - player.speed, -HOVER_BRAKE * seconds, ACCELERATION * seconds), 0, MAX_SPEED);
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
