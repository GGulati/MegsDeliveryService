import assert from 'node:assert/strict';
import test from 'node:test';
import { BAY_SHORE, STOPS, SOLIDS, WALLS, WORLD_LIMIT, isInBay, OBSERVATORY_DOME_SOLID_INDEX } from '../src/world';
import { TIERS } from '../src/terrain';
import { buildBayShape } from '../src/shore';
import * as THREE from 'three';

// Harborlight geography: the bay is water cutting into the island, every stop
// sits on land, and every pad sits above its building's roof.

/** Phase 1: the "hill line" is the edge of the tier pads — buildings must sit
 *  on flattened town land, not on wild hills. Checks containment in TIERS. */
function inTierPad(x: number, z: number): boolean {
  return TIERS.some(t => t.rects.some(([x0, z0, x1, z1]) => x >= x0 && x <= x1 && z >= z0 && z <= z1));
}

test('bay mouth reaches past the island edge to meet the sea', () => {
  // Island radius is 190; the shoreline must poke past it to join the ocean.
  assert.ok(BAY_SHORE.some(([, z]) => z > 189), 'mouth connects to the ocean');
});

test('the rendered bay shape agrees with isInBay (no mirrored shoreline)', () => {
  // Regression: ShapeGeometry is built in XY and rendered with rotation.x=-PI/2,
  // which maps shape-Y to world -Z. If the shape isn't z-negated, the visual bay
  // mirrors north-south and disagrees with the logic — water under houses.
  const outline = buildBayShape().getPoints();
  const inShape = (sx: number, sy: number): boolean => {
    let inside = false;
    for (let i = 0, j = outline.length - 1; i < outline.length; j = i++) {
      const xi = outline[i].x, yi = outline[i].y;
      const xj = outline[j].x, yj = outline[j].y;
      if (yi > sy !== yj > sy && sx < ((xj - xi) * (sy - yi)) / (yj - yi) + xi) {
        inside = !inside;
      }
    }
    return inside;
  };
  // Shape-space (x, -z) must match world (x, z) per isInBay.
  assert.equal(inShape(20, -100), isInBay(20, 100), 'mid-bay water agrees');
  assert.equal(inShape(20, 0), isInBay(20, 0), 'inner harbor agrees');
  assert.equal(inShape(-45, -65), isInBay(-45, 65), 'harbor cafe land agrees');
  assert.equal(inShape(80, -70), isInBay(80, 70), 'marina land agrees');
  assert.equal(inShape(88, -118), isInBay(88, 118), 'lighthouse land agrees');
});

test('the bay is a single simple polygon', () => {
  assert.ok(BAY_SHORE.length >= 12, 'enough points for an organic shoreline');
  // No duplicate consecutive points (would break triangulation).
  for (let i = 0; i < BAY_SHORE.length; i++) {
    const a = BAY_SHORE[i], b = BAY_SHORE[(i + 1) % BAY_SHORE.length];
    assert.ok(a[0] !== b[0] || a[1] !== b[1], `duplicate shore point at index ${i}`);
  }
});

test('every stop is on land (not in the bay)', () => {
  for (const s of STOPS) {
    assert.ok(!isInBay(s.position.x, s.position.z), `${s.id} is in the bay`);
  }
});

test('every building footprint is on land (corners included)', () => {
  for (const b of SOLIDS) {
    for (const [x, z] of [[b.min.x, b.min.z], [b.min.x, b.max.z], [b.max.x, b.min.z], [b.max.x, b.max.z]]) {
      assert.ok(!isInBay(x, z), `building corner (${x},${z}) is in the bay`);
    }
  }
});

test('the bay holds water where expected', () => {
  assert.ok(isInBay(20, 100), 'mid-bay is water');
  assert.ok(isInBay(20, 0), 'inner harbor is water');
  assert.ok(!isInBay(-45, 65), 'harbor cafe is on land');
  assert.ok(!isInBay(80, 70), 'marina is on land');
});

test('an invisible wall closes the bay mouth — you cannot fly out to sea', () => {
  assert.ok(WALLS.length > 0, 'wall exists');
  const wall = WALLS[0];
  // Wall spans the bay's width at the island edge and reaches max altitude.
  assert.ok(wall.min.x < 40 && wall.max.x > 70, 'wall spans the bay mouth');
  assert.ok(wall.max.y >= 100, 'wall cannot be flown over');
  // Wall must be inside the world limit to be reachable (not stranded outside).
  assert.ok(wall.max.z < WORLD_LIMIT, `wall at z=${wall.max.z} is outside WORLD_LIMIT=${WORLD_LIMIT}`);
});

test('every stop is inside the world limit', () => {
  for (const s of STOPS) {
    const r = Math.hypot(s.position.x, s.position.z);
    assert.ok(r < WORLD_LIMIT, `${s.id} is outside the world (r=${r.toFixed(1)})`);
  }
});

test('every pad sits above its building roof', () => {
  // Find the nearest solid for each stop (by XZ distance to center)
  STOPS.forEach((s) => {
    let best = null;
    let bestDist = Infinity;
    for (const b of SOLIDS) {
      const cx = (b.min.x + b.max.x) / 2, cz = (b.min.z + b.max.z) / 2;
      const d = Math.hypot(s.position.x - cx, s.position.z - cz);
      if (d < bestDist) {
        bestDist = d;
        best = b;
      }
    }
    assert.ok(bestDist < 12, `${s.id} pad is not over its building (nearest ${bestDist.toFixed(1)}m)`);
    assert.ok(s.position.y >= best!.max.y + 1 && s.position.y <= best!.max.y + 4,
      `${s.id} pad y=${s.position.y} vs roof ${best!.max.y}`);
  });
});

test('every building belongs to a district and sits on a tier pad', () => {
  const districts = new Set(['harbor', 'old-town', 'merchant-row', 'mansion-hill', 'bungalow-lanes', 'observatory-rise', 'lighthouse-headland']);
  SOLIDS.forEach((b, i) => {
    if (i === SOLIDS.length - 1) return; // lighthouse tower: no district
    assert.ok(b.district, `building ${i} has no district`);
    assert.ok(districts.has(b.district!), `building ${i} has unknown district ${b.district}`);
    const cx = (b.min.x + b.max.x) / 2, cz = (b.min.z + b.max.z) / 2;
    assert.ok(inTierPad(cx, cz), `building ${i} (${b.district}) at (${cx.toFixed(0)},${cz.toFixed(0)}) is off the tier pads (on wild hills)`);
  });
});

test('district buildings do not significantly overlap each other', () => {
  // Skip the lighthouse tower (last): its collision cylinder overlaps the
  // Beacon House lot by design.
  const n = SOLIDS.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = SOLIDS[i], b = SOLIDS[j];
      const ox = Math.min(a.max.x, b.max.x) - Math.max(a.min.x, b.min.x);
      const oy = Math.min(a.max.y, b.max.y) - Math.max(a.min.y, b.min.y);
      const oz = Math.min(a.max.z, b.max.z) - Math.max(a.min.z, b.min.z);
      // Attached buildings may touch by a metre; vertical stacking (dome on a
      // roof) is not an intersection. Flag only real 3D overlaps.
      // The observatory dome sits on its building's pyramid roof by design —
      // only that specific pair is exempt, so a genuine dome/neighbor overlap
      // still fails.
      const isDomeStack = (i === 5 && j === OBSERVATORY_DOME_SOLID_INDEX) ||
        (j === 5 && i === OBSERVATORY_DOME_SOLID_INDEX);
      const overlap3d = ox >= 2 && oy > 0 && oz >= 2 && !isDomeStack;
      assert.ok(!overlap3d, `buildings ${i} and ${j} overlap by ${ox.toFixed(1)}x${oy.toFixed(1)}x${oz.toFixed(1)}m`);
    }
  }
});

test('lighthouse pad is clear of the tower footprint', () => {
  const pad = STOPS.find(s => s.id === 'lighthouse')!.position;
  const tower = SOLIDS[SOLIDS.length - 1];
  const inside = pad.x > tower.min.x && pad.x < tower.max.x &&
    pad.z > tower.min.z && pad.z < tower.max.z &&
    pad.y > tower.min.y && pad.y < tower.max.y;
  assert.ok(!inside, 'pad would be inside the tower collision');
});

test('home is the bakery attic on the merchant row', () => {
  const home = STOPS[0];
  assert.equal(home.id, 'home');
  assert.ok(home.name.toLowerCase().includes('bakery'), 'home is the bakery');
});

test('Phase B landmarks sit on land on a tier pad', () => {
  // Clock tower and observatory dome solids (lighthouse tower is last).
  const landmarks = [SOLIDS[SOLIDS.length - 3], SOLIDS[SOLIDS.length - 2]];
  for (const b of landmarks) {
    const cx = (b.min.x + b.max.x) / 2, cz = (b.min.z + b.max.z) / 2;
    assert.ok(!isInBay(cx, cz), `landmark at (${cx},${cz}) is in the bay`);
    assert.ok(inTierPad(cx, cz), `landmark at (${cx.toFixed(0)},${cz.toFixed(0)}) is off the tier pads`);
  }
});

test('clock tower is tallest in town core but shorter than lighthouse', () => {
  const clock = SOLIDS[SOLIDS.length - 3];
  const lighthouse = SOLIDS[SOLIDS.length - 1];
  const clockH = clock.max.y - clock.min.y;
  const lightH = lighthouse.max.y - lighthouse.min.y;
  assert.ok(clockH < lightH, `clock tower ${clockH}m not shorter than lighthouse ${lightH}m`);
  // Taller than the market hall (tallest non-landmark in the core).
  const market = SOLIDS[2];
  assert.ok(clockH > market.max.y - market.min.y, 'clock tower not tallest in town core');
  assert.equal(clock.district, 'old-town');
});

test('observatory dome sits on its building roof, clear of the pad', () => {
  const dome = SOLIDS[SOLIDS.length - 2];
  const base = SOLIDS[5]; // Hill Observatory building
  const pad = STOPS.find(s => s.id === 'observatory')!.position;
  // Dome base sits on the pyramid roof surface at its (x,z), not the apex.
  // The pyramid is built by makeBuildings: roofHeight = min(4.2, sy*.28),
  // sloping from (base.min.y + sy - roofHeight) at the eaves to base.max.y
  // at the apex over the half-extents — all derived from the solids, never
  // hardcoded coordinates.
  const dcx = (dome.min.x + dome.max.x) / 2, dcz = (dome.min.z + dome.max.z) / 2;
  const cx = (base.min.x + base.max.x) / 2, cz = (base.min.z + base.max.z) / 2;
  const hx = (base.max.x - base.min.x) / 2, hz = (base.max.z - base.min.z) / 2;
  const sy = base.max.y - base.min.y;
  const roofHeight = Math.min(4.2, sy * .28);
  const eavesY = base.min.y + sy - roofHeight, apexY = base.max.y;
  const dx = Math.abs(dcx - cx) / hx, dz = Math.abs(dcz - cz) / hz;
  const roofSurface = eavesY + (apexY - eavesY) * (1 - Math.max(dx, dz));
  assert.ok(Math.abs(dome.min.y - roofSurface) < 0.5, `dome not on the roof surface (dome ${dome.min.y}, surface ${roofSurface.toFixed(2)})`);
  // Dome footprint is inside the building footprint.
  assert.ok(dome.min.x >= base.min.x && dome.max.x <= base.max.x, 'dome x outside building');
  assert.ok(dome.min.z >= base.min.z && dome.max.z <= base.max.z, 'dome z outside building');
  // Pad is clear of the dome collision.
  const inside = pad.x > dome.min.x && pad.x < dome.max.x &&
    pad.z > dome.min.z && pad.z < dome.max.z &&
    pad.y > dome.min.y && pad.y < dome.max.y;
  assert.ok(!inside, 'observatory pad would be inside the dome collision');
  assert.equal(dome.district, 'observatory-rise');
});
