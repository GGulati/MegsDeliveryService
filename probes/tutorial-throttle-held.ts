import { createState, startTutorial, step } from '../src/simulation';
import type { FlightInput } from '../src/types';

// Real player on the first delivery: HOLDS the throttle (input.throttle = 1,
// like holding E or the touch throttle slider) all the way to Harbor Cafe,
// steering gently to stay lined up. Does braking engage? Does it stop? Drop?
const state = createState();
startTutorial(state);

const dt = 1 / 60;
let dropCommittedAt = -1;
let fadeStartedAt = -1;
let minDist = Infinity;
let maxSpeedSeen = 0;

for (let i = 0; i < 60 * 60; i++) {
  const dx = 0 - state.player.position.x;
  const dz = 55 - state.player.position.z;
  const wantYaw = Math.atan2(dx, -dz);
  let err = wantYaw - state.player.yaw;
  while (err > Math.PI) err -= 2 * Math.PI;
  while (err < -Math.PI) err += 2 * Math.PI;
  const turn = Math.max(-0.4, Math.min(0.4, err * 2));
  // Player holds full throttle the whole time, like a real flight to the pad.
  const input: FlightInput = { turn, climb: 0, throttle: 1 };
  step(state, input, dt);
  const dist = Math.hypot(dx, dz);
  if (dist < minDist) minDist = dist;
  if (state.player.speed > maxSpeedSeen) maxSpeedSeen = state.player.speed;
  if (fadeStartedAt < 0 && state.haloFade > 0) fadeStartedAt = i;
  if (dropCommittedAt < 0 && state.drop) dropCommittedAt = i;
  if (i % 60 === 0) {
    console.log(
      `t=${(i / 60).toFixed(1)}s dist=${dist.toFixed(2)} speed=${state.player.speed.toFixed(2)} ` +
      `fade=${state.haloFade.toFixed(2)} drop=${!!state.drop} stage=${state.tutorialStage} mode=${state.mode}`
    );
  }
  if (state.tutorialStage === 3) { console.log(`DELIVERED at t=${(i/60).toFixed(1)}s`); break; }
}
console.log('---');
console.log(`minDist=${minDist.toFixed(2)} maxSpeed=${maxSpeedSeen.toFixed(1)} fade=${fadeStartedAt >= 0 ? 'yes' : 'NEVER'} drop=${dropCommittedAt >= 0 ? 'yes' : 'NEVER'} stage=${state.tutorialStage} mode=${state.mode}`);
console.log(`final pos=(${state.player.position.x.toFixed(1)}, ${state.player.position.z.toFixed(1)}) speed=${state.player.speed.toFixed(1)}`);
