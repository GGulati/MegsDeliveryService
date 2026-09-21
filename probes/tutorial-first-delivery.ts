import { createState, startTutorial, step } from '../src/simulation';
import type { FlightInput } from '../src/types';

// Realistic tutorial first delivery: drone spawns at home cruising at 9 m/s
// toward Harbor Cafe (~55 m away, straight ahead). Player steers gently
// (touch joystick) to stay lined up, no throttle. Trace speed, distance,
// brakeHold, haloFade, drop, tutorialStage.
const state = createState();
startTutorial(state);

const idle: FlightInput = { turn: 0, climb: 0, throttle: 0 };
const dt = 1 / 60;
let dropCommittedAt = -1;
let fadeStartedAt = -1;
let minDist = Infinity;
let stoppedAt: number | null = null;

for (let i = 0; i < 60 * 60; i++) {
  // Gentle steering toward the cafe: compute yaw error and correct.
  const dx = 0 - state.player.position.x;
  const dz = 55 - state.player.position.z;
  const wantYaw = Math.atan2(dx, -dz);
  let err = wantYaw - state.player.yaw;
  while (err > Math.PI) err -= 2 * Math.PI;
  while (err < -Math.PI) err += 2 * Math.PI;
  const turn = Math.max(-0.4, Math.min(0.4, err * 2));
  const input: FlightInput = { turn, climb: 0, throttle: 0 };
  step(state, input, dt);
  const dist = Math.hypot(dx, dz);
  if (dist < minDist) minDist = dist;
  if (fadeStartedAt < 0 && state.haloFade > 0) fadeStartedAt = i;
  if (dropCommittedAt < 0 && state.drop) dropCommittedAt = i;
  if (stoppedAt === null && state.player.speed === 0 && dist < 10) stoppedAt = i;
  if (i % 60 === 0 || (dist < 12 && i % 10 === 0)) {
    console.log(
      `t=${(i / 60).toFixed(1)}s dist=${dist.toFixed(2)} speed=${state.player.speed.toFixed(2)} ` +
      `brakeHold=${state.player.brakeHold} fade=${state.haloFade.toFixed(2)} ` +
      `drop=${!!state.drop} stage=${state.tutorialStage} mode=${state.mode} thr=${state.player.throttle.toFixed(1)}`
    );
  }
  if (state.tutorialStage === 3) { console.log(`DONE at t=${(i/60).toFixed(1)}s`); break; }
}
console.log('---');
console.log(`minDist=${minDist.toFixed(2)} fadeStartedAt=${fadeStartedAt >= 0 ? (fadeStartedAt/60).toFixed(1)+'s' : 'never'} dropCommittedAt=${dropCommittedAt >= 0 ? (dropCommittedAt/60).toFixed(1)+'s' : 'never'} stoppedAt=${stoppedAt !== null ? (stoppedAt/60).toFixed(1)+'s' : 'never'} stage=${state.tutorialStage} mode=${state.mode}`);
