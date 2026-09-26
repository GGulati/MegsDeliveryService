import type { Solid, Stop } from './types';

export const WORLD_LIMIT = 175;

/** Harbor bay shoreline: a hand-placed organic polygon of (x, z) points tracing
 *  the water's edge from the inner harbor, down the east shore, around the mouth
 *  (which opens past the island edge to meet the sea), and back up the west shore.
 *  Rendering draws the inlay from this; tests use isInBay to keep stops,
 *  buildings, and trees on land. */
export const BAY_SHORE: [number, number][] = [
  [20, -25], [30, -18], [40, -5], [46, 12], [50, 30], [54, 50], [56, 70],
  [60, 90], [63, 105], [66, 120], [70, 140], [76, 160], [82, 180], [88, 200], [95, 220],
  [45, 220],
  [40, 200], [34, 180], [26, 160], [16, 140], [6, 120], [-2, 100], [-8, 82],
  [-14, 65], [-18, 45], [-20, 25], [-16, 5], [-6, -12], [6, -22],
];

/** True when (x, z) is bay water (ray-cast point-in-polygon). */
export function isInBay(x: number, z: number): boolean {
  let inside = false;
  for (let i = 0, j = BAY_SHORE.length - 1; i < BAY_SHORE.length; j = i++) {
    const xi = BAY_SHORE[i][0], zi = BAY_SHORE[i][1];
    const xj = BAY_SHORE[j][0], zj = BAY_SHORE[j][1];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

// The pads are deliberately separated by broad streets: they are landmarks, not gates.
// Positions are the Harborlight layout: a crescent town around the harbor bay,
// the lighthouse on its headland, and Meg's cottage site on the north-west rise.
export const STOPS: Stop[] = [
  { id: 'home', name: 'Bakery Attic', subtitle: 'Home — borrowed attic', position: { x: -70, y: 20, z: 40 }, color: '#f9cf68' },
  { id: 'harbor-cafe', name: 'Harbor Cafe', subtitle: 'Tutorial delivery', position: { x: -45, y: 18, z: 65 }, color: '#63c7dc' },
  { id: 'market', name: 'Sunset Market', subtitle: 'Fresh parcels', position: { x: -10, y: 23, z: -50 }, color: '#e88869' },
  { id: 'lighthouse', name: 'The Lighthouse', subtitle: 'Beacon House', position: { x: 82, y: 16, z: 106 }, color: '#f4e5b8' },
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
  { min: { x: 72, y: 3, z: 96 }, max: { x: 92, y: 13, z: 116 } },
  { min: { x: 65, y: 3, z: 55 }, max: { x: 95, y: 18, z: 85 } },
  { min: { x: 100, y: 3, z: -70 }, max: { x: 130, y: 31, z: -40 } },
  { min: { x: -140, y: 3, z: 15 }, max: { x: -110, y: 24, z: 45 } },
  { min: { x: 83, y: 3, z: 113 }, max: { x: 93, y: 29, z: 123 } },
];

/** Index of the lighthouse tower solid: drawn as a cylinder by makeLighthouse,
 *  not as a generic box. Keep last so the tower-skip stays obvious. */
export const LIGHTHOUSE_TOWER_SOLID_INDEX = SOLIDS.length - 1;
