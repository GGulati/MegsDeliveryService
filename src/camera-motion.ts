/** Simulation heading is clockwise from north; Three's Y rotation has the opposite sign. */
export const modelRotation = (heading: number) => -heading;
export function followHeading(current: number, target: number, seconds: number): number {
  if (seconds <= 0) return current;
  const difference = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  // Let Meg lead the turn; never allow the chase view to leave her rear hemisphere.
  const eased = difference * (1 - Math.exp(-seconds * 1.25));
  const remaining = difference - eased;
  return current + eased + Math.sign(remaining) * Math.max(0, Math.abs(remaining) - 1.35);
}
