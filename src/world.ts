import type { Solid, Stop } from './types';

export const WORLD_LIMIT = 175;

/** Harbor bay: the union of these circles is water cutting into the island from
 *  the south. B1's mouth reaches past the island edge so the bay meets the sea.
 *  Rendering draws the inlay from these; tests use isInBay to keep stops and
 *  trees on land. */
export const BAY_CIRCLES = [
  { x: 20, z: 140, r: 55 },
  { x: 20, z: 70, r: 40 },
  { x: 20, z: 5, r: 30 },
];

/** True when (x, z) is bay water. */
export function isInBay(x: number, z: number): boolean {
  return BAY_CIRCLES.some((c) => Math.hypot(x - c.x, z - c.z) < c.r);
}

// The pads are deliberately separated by broad streets: they are landmarks, not gates.
// Positions are the Harborlight layout: a crescent town around the harbor bay,
// the lighthouse on its headland, and Meg's cottage site on the north-west rise.
export const STOPS: Stop[] = [
  { id: 'home', name: 'Bakery Attic', subtitle: 'Home — borrowed attic', position: { x: -70, y: 20, z: 40 }, color: '#f9cf68' },
  { id: 'harbor-cafe', name: 'Harbor Cafe', subtitle: 'Tutorial delivery', position: { x: -45, y: 18, z: 65 }, color: '#63c7dc' },
  { id: 'market', name: 'Sunset Market', subtitle: 'Fresh parcels', position: { x: -10, y: 23, z: -50 }, color: '#e88869' },
  { id: 'lighthouse', name: 'The Lighthouse', subtitle: 'Beacon House', position: { x: 64, y: 16, z: 104 }, color: '#f4e5b8' },
  { id: 'marina', name: 'Marina Works', subtitle: 'Dockside roof', position: { x: 80, y: 20, z: 70 }, color: '#79b9a0' },
  { id: 'observatory', name: 'Hill Observatory', subtitle: 'East hill pad', position: { x: 115, y: 33, z: -55 }, color: '#ad91d1' },
  { id: 'cliffside', name: 'Cliffside Books', subtitle: 'West avenue', position: { x: -125, y: 26, z: 30 }, color: '#db92a7' },
];

// These are the destination buildings only. Rendering may decorate the rest of the island
// freely, but collision and the visible rooftops share this small, intentional set.
// The last entry is the lighthouse tower itself (beside the Beacon House cottage);
// its pad sits on the cottage roof, clear of the tower's footprint.
export const SOLIDS: Solid[] = [
  { min: { x: -82, y: 3, z: 28 }, max: { x: -58, y: 18, z: 52 } },
  { min: { x: -59, y: 3, z: 51 }, max: { x: -31, y: 16, z: 79 } },
  { min: { x: -25, y: 3, z: -64 }, max: { x: 5, y: 21, z: -36 } },
  { min: { x: 54, y: 3, z: 94 }, max: { x: 74, y: 13, z: 114 } },
  { min: { x: 65, y: 3, z: 55 }, max: { x: 95, y: 18, z: 85 } },
  { min: { x: 100, y: 3, z: -70 }, max: { x: 130, y: 31, z: -40 } },
  { min: { x: -140, y: 3, z: 15 }, max: { x: -110, y: 24, z: 45 } },
  { min: { x: 79, y: 3, z: 111 }, max: { x: 89, y: 29, z: 121 } },
];
