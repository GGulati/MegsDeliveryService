import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { heightAt, surfaceColor, bakeTerrainTexture, canGrow, SEA_LEVEL, TIERS } from '../src/terrain';
import { isInBay } from '../src/world';

// True when (x, z) is inside a tier rect (with the 20m blend margin).
const inTier = (x: number, z: number) =>
  TIERS.some(t => t.rects.some(([x0, z0, x1, z1]) => x > x0 - 20 && x < x1 + 20 && z > z0 - 20 && z < z1 + 20));

test('heightAt is deterministic', () => {
  assert.equal(heightAt(50, 60), heightAt(50, 60));
  assert.equal(heightAt(-120, 80), heightAt(-120, 80));
});

test('town tiers are flat within each tier (all stops/buildings on level pads)', () => {
  // The town is carved into tiers at y=0/10/20; each pad is level.
  const spots: [number, number][] = [
    [-70, 40], [-45, 65], [-10, -50], [82, 106], [80, 70], [115, -55], [-125, 30],
    [0, 0], [50, -80], [-90, -60],
  ];
  for (const [x, z] of spots) {
    if (isInBay(x, z)) continue;
    const h = heightAt(x, z);
    const onTier = [0, 10, 20].some(y => Math.abs(h - y) < 0.6);
    assert.ok(onTier, `town ground not on a tier pad at (${x},${z}): ${h}`);
  }
});

test('bay is carved below sea level', () => {
  assert.ok(heightAt(20, 100) < SEA_LEVEL, 'mid-bay below sea level');
  assert.ok(heightAt(20, 0) < SEA_LEVEL, 'inner harbor below sea level');
  assert.ok(heightAt(20, 100) < -2, 'bay deep enough for the water inlay');
});

test('ocean is to the south, land is mainland to the north', () => {
  // Far south it's open sea (deep water); north it's mainland, not seabed.
  assert.ok(heightAt(0, 280) < -8, 'south is ocean');
  assert.ok(heightAt(-100, 280) < -8, 'southwest is ocean');
  assert.ok(heightAt(0, -150) > -1, 'north is mainland, not seabed');
  assert.ok(heightAt(-150, -100) > -1, 'northwest is mainland');
});

test('coastline wobbles (not a straight line)', () => {
  // March south from z=100 at several x positions to find where it drops below sea level.
  const coasts: number[] = [];
  for (let x = -120; x <= 120; x += 30) {
    let z = 100;
    for (; z < 280; z += 2) {
      if (heightAt(x, z) < SEA_LEVEL && !isInBay(x, z)) break;
    }
    coasts.push(z);
  }
  const min = Math.min(...coasts), max = Math.max(...coasts);
  assert.ok(max - min > 15, `coastline too straight: ${min}-${max}`);
});

test('inland terrain never dips below sea level (no lagoon holes)', () => {
  // The ocean plane sits at y=-0.25; any land below that shows water inland.
  // Sweep the inland mainland (well north of the coast and bay). The bay's
  // 6m beach ring is vertex-colored sand, so it's excluded too.
  const nearBay = (x: number, z: number) => {
    const s = 8;
    return isInBay(x, z) || isInBay(x + s, z) || isInBay(x - s, z) || isInBay(x, z + s) || isInBay(x, z - s);
  };
  for (let x = -170; x <= 170; x += 10) {
    for (let z = -170; z <= 100; z += 10) {
      if (nearBay(x, z)) continue;
      const h = heightAt(x, z);
      assert.ok(h > -0.25, `lagoon hole at (${x},${z}): height ${h}`);
    }
  }
});

test('inland has hills', () => {
  // Outside the tier pads, inland height should still vary.
  let min = Infinity, max = -Infinity, n = 0;
  for (let x = -170; x <= 170; x += 10) {
    for (let z = -220; z <= -140; z += 10) {
      if (inTier(x, z)) continue;
      const h = heightAt(x, z);
      if (h < -1) continue; // skip ocean
      min = Math.min(min, h); max = Math.max(max, h); n++;
    }
  }
  assert.ok(n > 10, 'no inland non-tier samples found');
  assert.ok(max - min > 2, `inland too flat: ${min} to ${max}`);
});

test('surfaceColor: seabed under the bay water', () => {
  // Inside the bay (underwater) should read as muted seabed sand.
  const [r, g, b] = surfaceColor(20, 60);
  assert.ok(r > 0.6 && r < 0.8 && g > 0.6 && b < 0.6, `expected seabed, got ${r},${g},${b}`);
});

test('surfaceColor: grass on the flat town core', () => {
  const [r, g, b] = surfaceColor(0, -50); // town center, flat, h~0.2..? actually lowland
  // Grass is green-dominant.
  assert.ok(g > r && g > b, `expected grass green-dominant, got ${r},${g},${b}`);
});

test('surfaceColor: rock on high hilltops', () => {
  // Find a high inland point outside the tier pads and check it trends
  // rocky (low saturation).
  let best: [number, number, number] | null = null, bestH = -Infinity, bestX = 0, bestZ = 0;
  for (let x = -170; x <= 170; x += 10) {
    for (let z = -220; z <= -140; z += 10) {
      if (inTier(x, z)) continue;
      const h = heightAt(x, z);
      if (h > bestH) { bestH = h; bestX = x; bestZ = z; best = surfaceColor(x, z); }
    }
  }
  assert.ok(bestH > 3, `no high hill found outside tiers (best ${bestH})`);
  const [r, g, b] = best!;
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  assert.ok(sat < 0.12, `expected muted rock at (${bestX},${bestZ}), got ${r},${g},${b} (sat ${sat})`);
});

test('surfaceColor is deterministic', () => {
  const a = surfaceColor(37, -42), b = surfaceColor(37, -42);
  assert.deepStrictEqual(a, b);
});

test('bakeTerrainTexture matches surfaceColor', () => {
  // Pin the two color-math copies together (stencil ≈ 1.5m smoothing).
  // The K=1 stencil at 256 (1.7m) vs old 1.5m can flip the rock threshold
  // on steep hills; allow a handful of such outliers (<0.5%).
  const TEX = 256;
  const baked = bakeTerrainTexture(TEX);
  let bad = 0, total = 0;
  for (let py = 4; py < TEX - 4; py += 2) {
    for (let px = 4; px < TEX - 4; px += 2) {
      total++;
      const x = (px / (TEX - 1) - 0.5) * 440;
      const z = (0.5 - py / (TEX - 1)) * 440;
      const [r, g, b] = surfaceColor(x, z);
      const o = (py * TEX + px) * 4;
      const dr = Math.abs(baked[o] - Math.round(r * 255));
      const dg = Math.abs(baked[o + 1] - Math.round(g * 255));
      const db = Math.abs(baked[o + 2] - Math.round(b * 255));
      if (Math.max(dr, dg, db) > 30) bad++;
    }
  }
  assert.ok(bad / total < 0.005, `${bad}/${total} texels differ by >30 from surfaceColor`);
});

test('canGrow: true on inland grass, false on beach/water/rock', () => {
  // Inland grass hillfoot should grow.
  let grew = 0;
  for (let x = -120; x <= 120; x += 20) {
    for (let z = -170; z <= -150; z += 10) {
      if (canGrow(x, z)) grew++;
    }
  }
  assert.ok(grew > 5, `expected growable inland spots, got ${grew}`);
  // In the bay: no.
  assert.ok(!canGrow(20, 60), 'bay water should not grow trees');
  // On a high hilltop outside the tiers: no (rock).
  let highX = 0, highZ = -160, highH = -Infinity;
  for (let x = -170; x <= 170; x += 10) {
    for (let z = -220; z <= -140; z += 10) {
      if (inTier(x, z)) continue;
      const h = heightAt(x, z);
      if (h > highH) { highH = h; highX = x; highZ = z; }
    }
  }
  if (highH > 4.5) assert.ok(!canGrow(highX, highZ), `rock hilltop at (${highX},${highZ}) should not grow trees`);
});
