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

test('island edge falls to seabed below the ocean', () => {
  assert.ok(heightAt(0, 250) < -10, 'far outside is seabed');
  assert.ok(heightAt(250, 0) < -10, 'far outside is seabed');
});

test('coastline wobbles (not a perfect circle)', () => {
  // Sample the radius where height crosses sea level at 16 angles; it should vary.
  const radii: number[] = [];
  for (let a = 0; a < 16; a++) {
    const ang = (a / 16) * Math.PI * 2;
    const dx = Math.cos(ang), dz = Math.sin(ang);
    // March outward to find the shoreline.
    let r = 150;
    for (; r < 260; r += 2) {
      if (heightAt(dx * r, dz * r) < SEA_LEVEL) break;
    }
    radii.push(r);
  }
  const min = Math.min(...radii), max = Math.max(...radii);
  assert.ok(max - min > 15, `coastline too circular: radii ${min}-${max}`);
});

test('outer island has hills', () => {
  // At r=160-180 (outside town, inside island), height should vary.
  let min = Infinity, max = -Infinity;
  for (let a = 0; a < 24; a++) {
    const ang = (a / 24) * Math.PI * 2;
    const h = heightAt(Math.cos(ang) * 170, Math.sin(ang) * 170);
    if (!isInBay(Math.cos(ang) * 170, Math.sin(ang) * 170)) {
      min = Math.min(min, h); max = Math.max(max, h);
    }
  }
  assert.ok(max - min > 2, `outer island too flat: ${min} to ${max}`);
});
