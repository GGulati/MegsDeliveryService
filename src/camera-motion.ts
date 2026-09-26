/** Simulation heading is clockwise from north; Three's Y rotation has the opposite sign. */
export const modelRotation = (heading: number) => -heading;

import { ROOM_X, ROOM_Z } from './home';

/** Home-room camera keeps one fixed viewing angle; only the frame's center pans. */
export const HOME_CAM_OFFSET = { x: 13, y: 12, z: 18 } as const;
export const HOME_LOOK_Y = 2;
// Playable half-extents live in home.ts (the sim clamp is the source of truth).
const clampRoom = (v: number, half: number) => Math.max(-half, Math.min(half, v));

/** Pan the home frame so Meg stays on screen: look target tracks her (clamped
 *  to the room), camera keeps the established offset so the angle never changes. */
export function homeCameraFrame(megX: number, megZ: number): { cam: [number, number, number]; look: [number, number, number] } {
  const lx = clampRoom(megX, ROOM_X), lz = clampRoom(megZ, ROOM_Z);
  return {
    look: [lx, HOME_LOOK_Y, lz],
    cam: [lx + HOME_CAM_OFFSET.x, HOME_LOOK_Y + HOME_CAM_OFFSET.y, lz + HOME_CAM_OFFSET.z],
  };
}

/** Advance the home look target (x/z plane): snap on entering home or under
 *  reduced motion (the ease is decorative; framing is functional), freeze
 *  while paused, otherwise drift toward Meg with a cozy ease. */
export function homeLookStep(current: [number, number], desired: [number, number], entering: boolean, step: number, reducedMotion: boolean): [number, number] {
  if (entering || reducedMotion) return desired;
  if (step <= 0) return current;
  const k = 1 - Math.exp(-step * 5);
  return [current[0] + (desired[0] - current[0]) * k, current[1] + (desired[1] - current[1]) * k];
}

export function followHeading(current: number, target: number, seconds: number): number {
  if (seconds <= 0) return current;
  const difference = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  // Let Meg lead the turn; never allow the chase view to leave her rear hemisphere.
  const eased = difference * (1 - Math.exp(-seconds * 1.25));
  const remaining = difference - eased;
  return current + eased + Math.sign(remaining) * Math.max(0, Math.abs(remaining) - 1.35);
}
