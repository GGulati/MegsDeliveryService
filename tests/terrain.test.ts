import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { heightAt, SEA_LEVEL } from '../src/terrain';
import { isInBay } from '../src/world';

test('heightAt is deterministic', () => {
  assert.equal(heightAt(50, 60), heightAt(50, 60));
  assert.equal(heightAt(-120, 80), heightAt(-120, 80));
});

test('town core is flat (all stops/buildings on level ground)', () => {
  // Farthest stop (Beacon House) is at ~134m; hills fade in past 145m.
  const spots: [number, number][] = [
    [-70, 40], [-45, 65], [-10, -50], [82, 106], [80, 70], [115, -55], [-125, 30],
    [0, 0], [50, -80], [-90, -60],
  ];
  for (const [x, z] of spots) {
    if (isInBay(x, z)) continue;
    assert.ok(Math.abs(heightAt(x, z)) < 0.5, `town ground not flat at (${x},${z}): ${heightAt(x, z)}`);
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
  // 6m beach ring sits under the sand inlay, so it's excluded too.
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
  // North of town (z=-160), away from the coast, height should vary.
  let min = Infinity, max = -Infinity;
  for (let x = -120; x <= 120; x += 20) {
    const h = heightAt(x, -170);
    min = Math.min(min, h); max = Math.max(max, h);
  }
  assert.ok(max - min > 2, `inland too flat: ${min} to ${max}`);
});
