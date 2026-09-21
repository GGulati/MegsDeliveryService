import assert from 'node:assert/strict';
import test from 'node:test';
import { chooseJob, createState, glowColumnTarget, interact, returnHome, setPaused, startRun, startTutorial, step, toggleHover, HALO_FADE_SECONDS, ARRIVAL_RADIUS } from '../src/simulation';
import { STOPS } from '../src/world';

const idle = { turn: 0, climb: 0, throttle: 0 };
const CAFE = STOPS.find((stop) => stop.id === 'harbor-cafe')!;
const HOME = STOPS.find((stop) => stop.id === 'home')!;

type State = ReturnType<typeof createState>;

/** Hover in the column above a pad, at a given height over it. */
function above(state: State, id: string, height: number): void {
  const stop = STOPS.find((s) => s.id === id)!;
  state.player.position = { x: stop.position.x, y: stop.position.y + height, z: stop.position.z };
  state.player.speed = 0;
  state.player.hover = true;
  state.player.velocity = { x: 0, y: 0, z: 0 };
}

/** Place the drone north of a stop, heading straight at it. */
function approach(state: State, stop: { position: { x: number; z: number } }, distNorth: number, speed: number, y = 30): void {
  state.player.position = { x: stop.position.x, y, z: stop.position.z + distNorth };
  state.player.yaw = 0; // faces -z, toward the stop
  state.player.speed = speed;
  state.player.throttle = speed;
  state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: -speed };
}

function stepMany(state: State, seconds: number, input = idle): void {
  const n = Math.ceil(seconds * 60);
  for (let i = 0; i < n; i++) step(state, input, 1 / 60);
}

function horizontalTo(state: State, stop: { position: { x: number; z: number } }): number {
  return Math.hypot(state.player.position.x - stop.position.x, state.player.position.z - stop.position.z);
}

/** Steps until a committed drop's landing animation resolves. */
function finishDrop(state: State): void {
  for (let i = 0; i < 120 && state.drop; i++) step(state, idle, 1 / 60);
  assert.equal(state.drop, null, 'committed drop should resolve');
}

test('auto-brake slows the drone on approach to the active destination', () => {
  const state = createState(); startRun(state, 7);
  approach(state, CAFE, 25, 18);
  step(state, idle, 0.5);
  assert.ok(state.player.speed < 18, `brake should engage on approach, speed=${state.player.speed}`);
});

test('auto-brake brings the drone to rest inside the arrival zone', () => {
  const state = createState(); startRun(state, 7);
  approach(state, CAFE, 40, 18);
  stepMany(state, 10);
  assert.equal(state.player.speed, 0, 'drone should come to rest');
  assert.ok(horizontalTo(state, CAFE) <= 7, `should rest inside the column, dist=${horizontalTo(state, CAFE)}`);
});

test('stick input overrides the auto-brake', () => {
  const braked = createState(); startRun(braked, 7);
  approach(braked, CAFE, 15, 14);
  stepMany(braked, 1);
  const overridden = createState(); startRun(overridden, 7);
  approach(overridden, CAFE, 15, 14);
  stepMany(overridden, 1, { turn: 1, climb: 0, throttle: 0 });
  assert.ok(overridden.player.speed > braked.player.speed,
    `input must disengage the brake: overridden=${overridden.player.speed} braked=${braked.player.speed}`);
});

test('no auto-brake without an active destination', () => {
  const state = createState(); startRun(state, 7);
  state.run!.job = null; // no parcel, not returning: no active destination
  assert.equal(glowColumnTarget(state), undefined);
  approach(state, CAFE, 20, 14);
  stepMany(state, 1);
  assert.equal(state.player.speed, 14, 'speed must be untouched with no destination');
});

test('no auto-brake when flying away from the destination', () => {
  const state = createState(); startRun(state, 7);
  state.player.position = { x: CAFE.position.x, y: 30, z: CAFE.position.z + 20 };
  state.player.yaw = Math.PI; // faces +z, away from the pad
  state.player.speed = 14; state.player.throttle = 14; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 14 };
  stepMany(state, 1);
  assert.equal(state.player.speed, 14, 'departing flight must not be braked');
});

test('home arrival auto-brakes to a stop', () => {
  const state = createState(); startRun(state, 7);
  above(state, 'harbor-cafe', 40); interact(state); finishDrop(state);
  returnHome(state);
  assert.equal(glowColumnTarget(state)?.id, 'home');
  approach(state, HOME, 40, 18);
  stepMany(state, 10);
  assert.equal(state.player.speed, 0, 'drone should stop at home');
  assert.ok(horizontalTo(state, HOME) <= 7, `should rest at the home pad, dist=${horizontalTo(state, HOME)}`);
  assert.equal(state.drop, null, 'arriving home must not auto-drop anything');
  assert.equal(state.mode, 'flight', 'banking at home stays manual');
});

test('auto-drop fires when stopped in the column with a parcel', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  step(state, idle, 0.1);
  assert.ok(state.haloFade > 0, 'halo should start fading before the drop');
  assert.equal(state.drop, null, 'parcel must not drop while the halo is fading');
  stepMany(state, HALO_FADE_SECONDS + 0.2);
  assert.ok(state.drop, 'parcel auto-drops after the halo fades');
  finishDrop(state);
  assert.equal(state.run!.earnings, 20);
  assert.equal(state.mode, 'offers');
});

test('halo hides before the landing animation starts', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  stepMany(state, HALO_FADE_SECONDS + 0.2);
  assert.ok(state.drop, 'drop should be committed');
  assert.ok(state.drop!.t < 0.9, 'animation should still be in flight');
  assert.equal(glowColumnTarget(state), undefined, 'halo must be gone before the parcel lands');
});

test('no auto-drop on a fast flyover with the stick held', () => {
  const state = createState(); startRun(state, 5);
  state.player.position = { x: CAFE.position.x, y: CAFE.position.y + 40, z: CAFE.position.z + 30 };
  state.player.yaw = 0;
  state.player.speed = 12; state.player.throttle = 12; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: -12 };
  stepMany(state, 2, { turn: 0, climb: 0, throttle: 1 });
  assert.equal(state.haloFade, 0, 'no halo fade on a fast flyover');
  assert.equal(state.drop, null, 'no drop on a fast flyover');
  assert.equal(state.run!.earnings, 0);
});

test('no auto-drop when arriving home empty-handed', () => {
  const state = createState(); startRun(state, 7);
  above(state, 'harbor-cafe', 40); interact(state); finishDrop(state);
  returnHome(state);
  above(state, 'home', 40);
  stepMany(state, 2);
  assert.equal(state.haloFade, 0, 'no parcel: no halo fade');
  assert.equal(state.drop, null, 'no parcel: no auto-drop');
});

test('player input during the halo fade cancels the auto-drop', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  step(state, idle, 0.1);
  assert.ok(state.haloFade > 0, 'fade should be in progress');
  step(state, { turn: 1, climb: 0, throttle: 0 }, 0.1);
  assert.equal(state.haloFade, 0, 'stick input cancels the pending auto-drop');
  assert.equal(state.drop, null, 'cancelled fade must not commit a drop');
});

test('tutorial auto-drop does not wait for the hover lesson', () => {
  const state = createState(); startTutorial(state);
  state.tutorialStage = 1;
  above(state, 'harbor-cafe', 40);
  stepMany(state, 1);
  assert.ok(state.haloFade > 0 || state.drop, 'stage 1: auto-drop fires without pressing hover');
  finishDrop(state);
  assert.equal(state.tutorialStage, 3, 'practice completes');
  assert.equal(state.profile.tutorialDone, true);
});

test('tutorial manual deliver works before the hover lesson', () => {
  const state = createState(); startTutorial(state);
  state.tutorialStage = 1;
  above(state, 'harbor-cafe', 40);
  interact(state);
  assert.ok(state.drop, 'stage 1: manual deliver commits at the cafe');
});

test('pause freezes the halo fade', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  step(state, idle, 0.1);
  const fading = state.haloFade;
  assert.ok(fading > 0 && fading <= HALO_FADE_SECONDS);
  setPaused(state, true, 'menu');
  step(state, idle, 10);
  assert.equal(state.haloFade, fading, 'fade must not advance while paused');
  assert.equal(state.drop, null);
  setPaused(state, false);
  stepMany(state, HALO_FADE_SECONDS + 0.2);
  assert.ok(state.drop, 'fade resumes after unpausing');
});

test('pause freezes mid-brake', () => {
  const state = createState(); startRun(state, 7);
  approach(state, CAFE, 25, 18);
  step(state, idle, 0.5);
  const speed = state.player.speed;
  assert.ok(speed < 18, 'brake should be engaged');
  setPaused(state, true, 'menu');
  step(state, idle, 5);
  assert.equal(state.player.speed, speed, 'braking must not progress while paused');
});

test('manual drop button still commits immediately', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  state.player.throttle = 11;
  interact(state);
  assert.equal(state.player.throttle, 11, 'manual drop preserves the throttle trim');
  assert.equal(state.haloFade, 0, 'manual drop skips the fade');
  assert.ok(state.drop, 'manual drop commits at press');
  assert.equal(glowColumnTarget(state), undefined, 'halo hides as soon as the drop commits');
});

test('released throttle (touch slider) still glides hands-off into the column', () => {
  const state = createState(); startRun(state, 7);
  // Touch slider snaps back to 0 on release: throttle 0, still moving at the pad.
  approach(state, CAFE, 40, 14);
  state.player.throttle = 0;
  stepMany(state, 14);
  assert.ok(horizontalTo(state, CAFE) <= 7,
    `should glide into the column after release, dist=${horizontalTo(state, CAFE)}`);
  finishDrop(state);
  assert.equal(state.mode, 'offers', 'delivery should complete fully hands-off');
});

test('released throttle never accelerates the drone beyond its current speed', () => {
  const state = createState(); startRun(state, 7);
  approach(state, CAFE, 60, 10);
  state.player.throttle = 0;
  stepMany(state, 2);
  assert.ok(state.player.speed <= 10 + 1e-9, `must not speed up hands-off, speed=${state.player.speed}`);
});

test('parked drone does not auto-fly to the destination', () => {
  const state = createState(); startRun(state, 7);
  state.player.position = { x: CAFE.position.x, y: 40, z: CAFE.position.z + 40 };
  state.player.yaw = 0;
  state.player.speed = 0; state.player.throttle = 0; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 0 };
  const before = horizontalTo(state, CAFE);
  stepMany(state, 5);
  assert.ok(Math.abs(horizontalTo(state, CAFE) - before) < 0.01, 'parked drone must stay parked');
  assert.equal(state.drop, null, 'no drop without an arrival');
});

test('no auto-approach when flying away with throttle released', () => {
  const state = createState(); startRun(state, 7);
  state.player.position = { x: CAFE.position.x, y: 30, z: CAFE.position.z + 20 };
  state.player.yaw = Math.PI; // faces +z, away from the pad
  state.player.speed = 14; state.player.throttle = 0; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 14 };
  stepMany(state, 2);
  assert.ok(horizontalTo(state, CAFE) > 20, 'departing drone must not be pulled back to the pad');
});

test('second delivery auto-drops after choosing from offers', () => {
  const state = createState(); startRun(state, 7);
  above(state, 'harbor-cafe', 10);
  stepMany(state, 3);
  finishDrop(state);
  assert.equal(state.mode, 'offers', 'first delivery should complete');
  assert.ok(state.run!.offers.length > 0, 'offers should be generated');
  chooseJob(state, 0);
  const to = state.run!.job!.to;
  assert.equal(state.mode, 'flight');
  assert.equal(glowColumnTarget(state)?.id, to, 'halo should mark the second destination');
  // Touch-style: release the throttle while closing on the second pad.
  const stop = STOPS.find((s) => s.id === to)!;
  approach(state, stop, 40, 14);
  state.player.throttle = 0;
  stepMany(state, 14);
  finishDrop(state);
  assert.equal(state.run!.deliveries, 2, 'second delivery should complete hands-off');
});

test('auto-drop fires while descending through the pillar', () => {
  const state = createState(); startRun(state, 7);
  state.player.position = { x: CAFE.position.x, y: CAFE.position.y + 60, z: CAFE.position.z };
  state.player.speed = 0; state.player.throttle = 0; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 0 };
  stepMany(state, 3, { turn: 0, climb: -1, throttle: 0 });
  assert.equal(state.run!.deliveries, 1, 'descending through the pillar should drop the parcel');
});

test('auto-drop fires while ascending through the pillar', () => {
  const state = createState(); startRun(state, 7);
  state.player.position = { x: CAFE.position.x, y: CAFE.position.y + 20, z: CAFE.position.z };
  state.player.speed = 0; state.player.throttle = 0; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 0 };
  stepMany(state, 3, { turn: 0, climb: 1, throttle: 0 });
  assert.equal(state.run!.deliveries, 1, 'ascending through the pillar should drop the parcel');
});

test('stalled auto-drop fires with the stick held', () => {
  const state = createState(); startRun(state, 7);
  state.player.position = { x: CAFE.position.x, y: CAFE.position.y + 60, z: CAFE.position.z };
  state.player.speed = 0; state.player.throttle = 0; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 0 };
  stepMany(state, HALO_FADE_SECONDS + 0.3, { turn: 1, climb: 0, throttle: 0 });
  assert.ok(state.drop, 'holding turn while stalled should not block the auto-drop');
  finishDrop(state);
  assert.equal(state.mode, 'offers', 'delivery should complete');
});

test('steady throttle hold does not block the stalled auto-drop', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  state.player.hover = false; state.player.throttle = 0; state.player.speed = 0;
  stepMany(state, HALO_FADE_SECONDS + 0.5, { turn: 0, climb: 0, throttle: 1 });
  assert.ok(state.drop, 'holding throttle while stalled should not block the auto-drop');
  finishDrop(state);
  assert.equal(state.mode, 'offers', 'delivery should complete');
});

test('releasing the stick mid-fade does not cancel the drop', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  step(state, { turn: 1, climb: 0, throttle: 0 }, 0.1);
  assert.ok(state.haloFade > 0, 'fade should be in progress');
  stepMany(state, HALO_FADE_SECONDS + 0.3, idle);
  assert.ok(state.drop, 'letting go mid-fade should not cancel the pending drop');
  finishDrop(state);
  assert.equal(state.mode, 'offers', 'delivery should complete');
});

test('climb input does not cancel a pending drop', () => {
  const state = createState(); startRun(state, 7);
  state.player.position = { x: CAFE.position.x, y: CAFE.position.y + 60, z: CAFE.position.z };
  state.player.speed = 0; state.player.throttle = 0; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 0 };
  step(state, idle, 1 / 60);
  assert.ok(state.haloFade > 0, 'fade should start hands-off');
  stepMany(state, 2, { turn: 0, climb: -1, throttle: 0 });
  assert.equal(state.run!.deliveries, 1, 'holding descend should not cancel the pending drop');
});

test('throttle trim survives the drop and restores speed on resume', () => {
  const state = createState(); startRun(state, 7);
  approach(state, CAFE, 40, 14);
  stepMany(state, 12);
  for (let i = 0; i < 200 && (state.haloFade > 0 || state.drop); i++) step(state, idle, 1 / 60);
  assert.equal(state.run!.deliveries, 1, 'delivery should complete');
  assert.equal(state.player.throttle, 14, 'trim should survive the drop');
  chooseJob(state, 0);
  toggleHover(state); // resume flight
  stepMany(state, 3); // no throttle input held
  assert.ok(state.player.speed > 8, `speed should recover toward trim, got ${state.player.speed}`);
});

test('no auto-drop on a fast flyover with only climb held', () => {
  const state = createState(); startRun(state, 5);
  state.player.position = { x: CAFE.position.x, y: CAFE.position.y + 40, z: CAFE.position.z + 30 };
  state.player.yaw = 0;
  state.player.speed = 12; state.player.throttle = 12; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: -12 };
  stepMany(state, 2, { turn: 0, climb: 1, throttle: 0 });
  assert.equal(state.haloFade, 0, 'no halo fade on a fast flyover');
  assert.equal(state.drop, null, 'no drop on a fast flyover');
  assert.equal(state.run!.earnings, 0);
});

test('reversing a held stick mid-fade aborts the pending drop', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  step(state, { turn: 1, climb: 0, throttle: 0 }, 0.1);
  assert.ok(state.haloFade > 0, 'fade should start with turn held');
  step(state, { turn: -1, climb: 0, throttle: 0 }, 0.1);
  assert.equal(state.haloFade, 0, 'reversing the held stick should cancel the fade');
  assert.equal(state.drop, null, 'cancelled fade must not commit a drop');
});

test('throttle input during the halo fade cancels the auto-drop', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  step(state, idle, 0.1);
  assert.ok(state.haloFade > 0, 'fade should be in progress');
  step(state, { turn: 0, climb: 0, throttle: 1 }, 0.1);
  assert.equal(state.haloFade, 0, 'throttle input cancels the pending auto-drop');
  assert.equal(state.drop, null, 'cancelled fade must not commit a drop');
});

test('auto-drop fires near the visible halo edge at high altitude', () => {
  const state = createState(); startRun(state, 5);
  state.player.position = { x: CAFE.position.x + (ARRIVAL_RADIUS - 0.2), y: CAFE.position.y + 80, z: CAFE.position.z };
  state.player.speed = 0; state.player.throttle = 0; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 0 };
  stepMany(state, HALO_FADE_SECONDS + 0.5);
  assert.ok(state.drop, 'just inside the halo circle should auto-drop even at high altitude');
  finishDrop(state);
  assert.equal(state.run!.deliveries, 1, 'delivery should complete');
});

test('no auto-drop just outside the visible halo circle', () => {
  const state = createState(); startRun(state, 5);
  state.player.position = { x: CAFE.position.x + (ARRIVAL_RADIUS + 0.2), y: CAFE.position.y + 40, z: CAFE.position.z };
  state.player.speed = 0; state.player.throttle = 0; state.player.hover = false;
  state.player.velocity = { x: 0, y: 0, z: 0 };
  stepMany(state, 3);
  assert.equal(state.haloFade, 0, 'no halo fade just outside the halo circle');
  assert.equal(state.drop, null, 'no drop just outside the halo circle');
});

test('payout is the same at any altitude', () => {
  for (const height of [30, 80]) {
    const state = createState(); startRun(state, 5);
    above(state, 'harbor-cafe', height);
    state.player.hover = false; state.player.throttle = 0;
    const payout = state.run!.job!.payout;
    stepMany(state, HALO_FADE_SECONDS + 2);
    finishDrop(state);
    assert.equal(state.run!.deliveries, 1, `delivery at ${height}m should complete`);
    assert.equal(state.run!.earnings, payout, `earnings at ${height}m should equal the flat payout`);
  }
});

test('aborting the fade buys a re-arm delay before it can restart', () => {
  const state = createState(); startRun(state, 5);
  above(state, 'harbor-cafe', 40);
  step(state, idle, 0.1);
  assert.ok(state.haloFade > 0, 'fade should be in progress');
  step(state, { turn: 1, climb: 0, throttle: 0 }, 0.1);
  assert.equal(state.haloFade, 0, 'a fresh jab cancels the fade');
  stepMany(state, 1, { turn: 1, climb: 0, throttle: 0 });
  assert.equal(state.haloFade, 0, 'fade must not restart during the re-arm window');
  stepMany(state, 2.5, { turn: 1, climb: 0, throttle: 0 });
  assert.equal(state.mode, 'offers', 'steady-held stick re-arms the drop after the window');
  assert.equal(state.run!.deliveries, 1, 'delivery should complete');
});
