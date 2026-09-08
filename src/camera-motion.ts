/** Simulation heading is clockwise from north; Three's Y rotation has the opposite sign. */
export const modelRotation = (heading: number) => -heading;
export function followHeading(current: number, target: number, seconds: number): number {
  const difference = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  // Let Meg visibly lead a turn, but keep the camera in the rear hemisphere.
  const eased = difference * (1 - Math.exp(-Math.max(0, seconds) * 2.4));
  const remaining = difference - eased;
  return current + eased + Math.sign(remaining) * Math.max(0, Math.abs(remaining) - .65);
}
