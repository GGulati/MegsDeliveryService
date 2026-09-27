import type { Solid, Stop } from './types';

export const WORLD_LIMIT = 230;

/** Future park district rectangle: [minX, minZ, maxX, maxZ]. Procedural infill
 *  (Task 5) excludes this area; Task 8 builds the Golden Gate Park equivalent here. */
export const PARK_RECT: [number, number, number, number] = [-40, -195, 40, -155];

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
  { id: 'home', name: 'Bakery Attic', subtitle: 'Home — borrowed attic', position: { x: -25, y: 30, z: -48 }, color: '#f9cf68' },
  { id: 'harbor-cafe', name: 'Harbor Cafe', subtitle: 'Tutorial delivery', position: { x: -80, y: 18.12, z: 150 }, color: '#63c7dc' },
  { id: 'market', name: 'Sunset Market', subtitle: 'Fresh parcels', position: { x: -88, y: 33, z: -88 }, color: '#e88869' },
  { id: 'lighthouse', name: 'The Lighthouse', subtitle: 'Beacon House', position: { x: 130, y: 15, z: 140 }, color: '#f4e5b8' },
  { id: 'marina', name: 'Marina Works', subtitle: 'Dockside roof', position: { x: 102, y: 20, z: 125 }, color: '#79b9a0' },
  { id: 'observatory', name: 'Hill Observatory', subtitle: 'East hill pad', position: { x: 130, y: 53, z: -55 }, color: '#ad91d1' },
  { id: 'cliffside', name: 'Cliffside Books', subtitle: 'West avenue', position: { x: -115, y: 46, z: -177.5 }, color: '#db92a7' },
];

// These are the destination buildings only. Rendering may decorate the rest of the island
// freely, but collision and the visible rooftops share this small, intentional set.
// Positions are the Phase 1 streets-and-layout pass: heroes sit on the three town
// tiers (waterfront y=0, midtown y=10, upper y=20), fronting the road graph with
// 6m+ clearance. Footprints and heights are unchanged from the original town;
// only x/z moved and base y follows heightAt. The last entry is the lighthouse
// tower itself (south of the Beacon House cottage); its pad sits on the cottage roof.
export const SOLIDS: Solid[] = [
  { min: { x: -37, y: 10, z: -60 }, max: { x: -13, y: 28, z: -36 }, district: 'merchant-row' },
  { min: { x: -94, y: 0.12, z: 136 }, max: { x: -66, y: 16.12, z: 164 }, district: 'harbor' },
  { min: { x: -103, y: 10, z: -102 }, max: { x: -73, y: 31, z: -74 }, district: 'old-town' },
  { min: { x: 120, y: 0, z: 130 }, max: { x: 140, y: 13, z: 150 }, district: 'lighthouse-headland' },
  { min: { x: 87, y: 0, z: 110 }, max: { x: 117, y: 18, z: 140 }, district: 'harbor' },
  { min: { x: 115, y: 20, z: -70 }, max: { x: 145, y: 51, z: -40 }, district: 'observatory-rise' },
  { min: { x: -130, y: 20, z: -192.5 }, max: { x: -100, y: 44, z: -162.5 }, district: 'bungalow-lanes' },
  // Phase A district shells: clusters around the stop buildings.
  // Harbor warehouses (1-2 story, broad).
  { min: { x: -65, y: 0, z: 88 }, max: { x: -45, y: 10, z: 108 }, district: 'harbor' },
  { min: { x: -65, y: 0, z: 38 }, max: { x: -45, y: 12, z: 58 }, district: 'harbor' },
  { min: { x: 94, y: 0, z: 61 }, max: { x: 110, y: 10, z: 79 }, district: 'harbor' },
  { min: { x: 92, y: 0, z: 10 }, max: { x: 112, y: 12, z: 30 }, district: 'harbor' },
  // Old Town (3-4 story, dense).
  { min: { x: -50, y: 10, z: -98.5 }, max: { x: -30, y: 25, z: -78.5 }, district: 'old-town' },
  { min: { x: -10, y: 10, z: -98.5 }, max: { x: 10, y: 25, z: -78.5 }, district: 'old-town' },
  { min: { x: 30, y: 10, z: -98.5 }, max: { x: 50, y: 26, z: -78.5 }, district: 'old-town' },
  { min: { x: -50, y: 9.19, z: -130.5 }, max: { x: -30, y: 25.19, z: -113.5 }, district: 'old-town' },
  // Merchant Row shops (2 story).
  { min: { x: 22.5, y: 10, z: -55 }, max: { x: 37.5, y: 21, z: -41 }, district: 'merchant-row' },
  { min: { x: -2.5, y: 10, z: -55.5 }, max: { x: 12.5, y: 21, z: -40.5 }, district: 'merchant-row' },
  // Mansion Hill villas (2-3 story, detached).
  { min: { x: -80, y: 20, z: -187.5 }, max: { x: -60, y: 34, z: -167.5 }, district: 'mansion-hill' },
  { min: { x: -57.5, y: 20, z: -187.5 }, max: { x: -42.5, y: 34, z: -167.5 }, district: 'mansion-hill' },
  // Bungalow Lanes (1-1.5 story).
  { min: { x: 42.5, y: 20, z: -185 }, max: { x: 57.5, y: 28, z: -170 }, district: 'bungalow-lanes' },
  { min: { x: 60.5, y: 20, z: -185 }, max: { x: 75.5, y: 27, z: -170 }, district: 'bungalow-lanes' },
  { min: { x: -122.5, y: 19.28, z: -157 }, max: { x: -107.5, y: 27.28, z: -143 }, district: 'bungalow-lanes' },
  // Observatory Rise townhouses (2-3 story).
  { min: { x: 133.5, y: 19.26, z: -97.5 }, max: { x: 146.5, y: 33.26, z: -82.5 }, district: 'observatory-rise' },
  // Phase B landmarks (collision only; visuals drawn by dedicated scene methods).
  // APPEND NEW SOLIDS BEFORE THIS POINT — CLOCK_TOWER_SOLID_INDEX and
  // OBSERVATORY_DOME_SOLID_INDEX are computed from SOLIDS.length.
  // Clock tower: tallest in the town core, shorter than the lighthouse.
  { min: { x: -55, y: 10, z: -53 }, max: { x: -45, y: 38, z: -43 }, district: 'old-town' },
  // Observatory dome: sits on the Hill Observatory roof, offset from the pad.
  { min: { x: 117.5, y: 48.5, z: -67.5 }, max: { x: 126.5, y: 57, z: -58.5 }, district: 'observatory-rise' },
  { min: { x: 125, y: -0.22, z: 153 }, max: { x: 135, y: 28.78, z: 163 } },
];

/** Per-district building palettes: [body colors], [roof colors]. */
export const DISTRICT_PALETTES: Record<string, { bodies: number[]; roofs: number[] }> = {
  'harbor': {
    bodies: [0x4a5d6b, 0x6b7a82, 0x5c4a3a, 0xb8a078],
    roofs: [0x3a4a55, 0x2f3b45],
  },
  'old-town': {
    bodies: [0xd4a574, 0xe8d4b8, 0xc9b896],
    roofs: [0xb65c3f, 0x4a6b5c],
  },
  'merchant-row': {
    bodies: [0xa8d8c8, 0xf4e4a8, 0xe8a8b8, 0xf0d8b8],
    roofs: [0x8b5a3a, 0x6b4a2a],
  },
  'mansion-hill': {
    bodies: [0xf0f0e8, 0x9ab89a],
    roofs: [0x3a3f4a],
  },
  'bungalow-lanes': {
    bodies: [0x7a9a6b, 0x8b6b4a, 0xa85c4a],
    roofs: [0x5c4a3a, 0x4a3f35],
  },
  'observatory-rise': {
    bodies: [0x8a8a92],
    roofs: [0x5c8a7a, 0x2a3a5c],
  },
  'lighthouse-headland': {
    bodies: [0xe8f0e8],
    roofs: [0xd4d4d4],
  },
};

/** Index of the lighthouse tower solid: drawn as a cylinder by makeLighthouse,
 *  not as a generic box. Keep last so the tower-skip stays obvious. */
export const LIGHTHOUSE_TOWER_SOLID_INDEX = SOLIDS.length - 1;

/** Phase B landmark solids: drawn by dedicated scene methods, not as generic
 *  boxes. Indices are relative to the end (lighthouse tower is last). */
export const CLOCK_TOWER_SOLID_INDEX = SOLIDS.length - 3;
export const OBSERVATORY_DOME_SOLID_INDEX = SOLIDS.length - 2;

/** Invisible walls: collision only, never rendered. They close the bay mouth at
 *  the island edge so flight stays over the town — you can't fly out to sea. */
export const WALLS: Solid[] = [
  // Bay-mouth barrier: keeps Meg from flying out to sea. Sits at the coast
  // (z~170), inside WORLD_LIMIT, as the thematic edge before open water.
  { min: { x: 15, y: 0, z: 168 }, max: { x: 100, y: 100, z: 172 } },
];
