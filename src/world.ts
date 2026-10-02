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

/** Harbor dock footprint size (m). */
export const DOCK_W = 24, DOCK_D = 8;

/** Harbor docks: [x, z] centers of 24x8 wooden piers reaching into the bay.
 *  West pier serves Harbor Cafe, east pier serves Marina Works. Each dock is
 *  ~75% over water with its inner end at the shore. The east pier's third dock
 *  sits at [60, 120] (x=60 to reach the shore at x=72) to clear the bridge
 *  span (deck z 96.5-103.5 at z=100). */
export const DOCKS: [number, number][] = [
  [-11, 50], [-6, 70], [1, 90],
  [49, 60], [50, 80], [60, 120],
];

/** Moored boat positions: [x, z] alongside each dock. The (1,90) dock's boat
 *  sits at z=82 (not z=98) to stay clear of the bridge deck. */
export const DOCK_BOATS: [number, number][] = [
  [-11, 58], [-6, 78], [1, 82],
  [50, 68], [50, 88], [60, 128],
];

/** Mansion Hill villa grounds: [x0, z0, x1, z1] formal walled gardens around
 *  each villa (SOLIDS[17], SOLIDS[18]). Part of the mansion footprint —
 *  infill lots are excluded, so the grounds read as the house's estate.
 *  The north edge includes the terraced platforms stepping to the loop road;
 *  the shared east/west boundary splits the gap between the villas. */
export const MANSION_GROUNDS: [number, number, number, number][] = [
  [-86.5, -191.5, -60, -163.5],   // Villa 1 grounds (3.5m road clearance)
  [-60, -191.5, -33.5, -163.5], // Villa 2 grounds (3.5m road clearance)
];

// The pads are deliberately separated by broad streets: they are landmarks, not gates.
// Positions are the Harborlight layout: a crescent town around the harbor bay,
// the lighthouse on its headland, and Meg's cottage site on the north-west rise.
export const STOPS: Stop[] = [
  { id: 'home', name: 'Bakery Attic', subtitle: 'Home — borrowed attic', position: { x: -25, y: 30, z: -48 }, color: '#f9cf68' },
  // Old Town (clock tower district)
  { id: 'clocktower', name: 'Clocktower Spire', subtitle: 'Old town landmark', position: { x: -50, y: 40, z: -48 }, color: '#f4e5b8' },
  { id: 'cobblers', name: "Cobbler's Corner", subtitle: 'Old town shop', position: { x: -88, y: 33, z: -88 }, color: '#e88869' },
  { id: 'tinkers', name: "Tinker's Attic", subtitle: 'Old town rooftop', position: { x: -40, y: 27, z: -88 }, color: '#63c7dc' },
  { id: 'bellfounders', name: "Bellfounder's Yard", subtitle: 'Old town workshop', position: { x: 0, y: 27, z: -88 }, color: '#ad91d1' },
  { id: 'market', name: 'Sunset Market', subtitle: 'Old town market', position: { x: 40, y: 28, z: -88 }, color: '#e88869' },
  // Merchant Row
  { id: 'harbor-cafe', name: 'Harbor Cafe', subtitle: 'Merchant row cafe', position: { x: 5, y: 23, z: -48 }, color: '#63c7dc' },
  { id: 'chandlery', name: 'Chandlery Loft', subtitle: 'Merchant row shop', position: { x: 30, y: 23, z: -48 }, color: '#79b9a0' },
  // Harbor
  { id: 'dockmaster', name: "Dockmaster's Office", subtitle: 'Harbor docks', position: { x: -80, y: 18, z: 150 }, color: '#e88869' },
  { id: 'tavern', name: 'Net & Anchor Tavern', subtitle: 'Harbor waterfront', position: { x: 102, y: 20, z: 125 }, color: '#db92a7' },
  { id: 'ferry', name: 'Ferry Landing', subtitle: 'Harbor pier', position: { x: -55, y: 12, z: 98 }, color: '#63c7dc' },
  { id: 'marina', name: 'Marina Works', subtitle: 'Dockside roof', position: { x: 102, y: 12, z: 70 }, color: '#79b9a0' },
  { id: 'ropemakers', name: "Ropemaker's Wharf", subtitle: 'Harbor wharf', position: { x: 102, y: 14, z: 20 }, color: '#ad91d1' },
  // Bungalow Lanes
  { id: 'garden-gate', name: 'Garden Gate Cottage', subtitle: 'Bungalow lanes', position: { x: -115, y: 46, z: -178 }, color: '#79b9a0' },
  { id: 'willow-lane', name: 'Willow Lane Bungalow', subtitle: 'Bungalow lanes', position: { x: 50, y: 30, z: -178 }, color: '#f9cf68' },
  { id: 'cliffside', name: 'Cliffside Books', subtitle: 'Bungalow lanes', position: { x: 68, y: 29, z: -178 }, color: '#db92a7' },
  { id: 'hearthside', name: 'Hearthside Cottage', subtitle: 'Bungalow lanes', position: { x: -115, y: 29, z: -150 }, color: '#e88869' },
  // Mansion Hill
  { id: 'hilltop-manor', name: 'Hilltop Manor', subtitle: 'Mansion hill', position: { x: -70, y: 36, z: -178 }, color: '#f4e5b8' },
  { id: 'rosewood', name: 'Rosewood Villa', subtitle: 'Mansion hill', position: { x: -50, y: 36, z: -178 }, color: '#db92a7' },
  // Observatory Rise
  { id: 'observatory', name: 'Hill Observatory', subtitle: 'Observatory rise', position: { x: 130, y: 53, z: -55 }, color: '#ad91d1' },
  { id: 'starwatch', name: 'Starwatch Dome', subtitle: 'Observatory rise', position: { x: 140, y: 35, z: -90 }, color: '#63c7dc' },
  { id: 'beacon', name: 'Beacon House', subtitle: 'Observatory rise', position: { x: 122, y: 59, z: -63 }, color: '#f4e5b8' },
  // Lighthouse Headland
  { id: 'lighthouse', name: "Lighthouse Keeper's Cottage", subtitle: 'Headland', position: { x: 130, y: 15, z: 140 }, color: '#f9cf68' },
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

/** Staircase of AABBs approximating a sloped ramp from (x1,z1,y1) to
 *  (x2,z2,y2). Each step overlaps its neighbors vertically so there's no
 *  gap to slip through. (User feedback 2026-09-28: collide with ramps.) */
function rampColliders(
  x1: number, z1: number, y1: number,
  x2: number, z2: number, y2: number,
  width: number, steps: number,
): Solid[] {
  const out: Solid[] = [];
  const hw = width / 2;
  for (let i = 0; i < steps; i++) {
    const t0 = i / steps, t1 = (i + 1) / steps;
    const xa = x1 + (x2 - x1) * t0, xb = x1 + (x2 - x1) * t1;
    const za = z1 + (z2 - z1) * t0, zb = z1 + (z2 - z1) * t1;
    const ya = y1 + (y2 - y1) * t0, yb = y1 + (y2 - y1) * t1;
    out.push({
      min: { x: Math.min(xa, xb) - hw, y: Math.min(ya, yb) - 0.5, z: Math.min(za, zb) - hw },
      max: { x: Math.max(xa, xb) + hw, y: Math.max(ya, yb) + 0.5, z: Math.max(za, zb) + hw },
    });
  }
  return out;
}

/** Bridge and ramp collision: invisible, never rendered. The player collides
 *  with the bridge deck and onramps just like buildings — no flying through.
 *  (User feedback 2026-09-28.) */
export const INFRA_SOLIDS: Solid[] = [
  // Bridge deck (bl-w→bl-e): axis-aligned, x from -15 to 73 at z=100, deck at y=6.
  { min: { x: -15, y: 5.4, z: 100 - 4.4 }, max: { x: 73, y: 6.8, z: 100 + 4.4 } },
  // West onramp (wx2→bl-w): (-25, 70, 0) → (-15, 100, 6).
  ...rampColliders(-25, 70, 0, -15, 100, 6, 8.8, 6),
  // East onramp (bl-e→we3): (73, 100, 6) → (85, 85, 0).
  ...rampColliders(73, 100, 6, 85, 85, 0, 8.8, 4),
];
