import assert from 'node:assert/strict';
import test from 'node:test';
import { BAY_CIRCLES, STOPS, SOLIDS, WORLD_LIMIT, isInBay } from '../src/world';

// Harborlight geography: the bay is water cutting into the island, every stop
// sits on land, and every pad sits above its building's roof.

test('bay mouth reaches past the island edge to meet the sea', () => {
  const mouth = BAY_CIRCLES[0];
  // Island radius is 190; at the mouth's x the island edge is ~189.
  assert.ok(mouth.z + mouth.r > 189, 'mouth connects to the ocean');
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

test('the bay is one continuous inlet', () => {
  for (let i = 0; i < BAY_CIRCLES.length - 1; i++) {
    const a = BAY_CIRCLES[i], b = BAY_CIRCLES[i + 1];
    const d = Math.hypot(a.x - b.x, a.z - b.z);
    assert.ok(d < a.r + b.r, `bay circles ${i} and ${i + 1} do not overlap`);
  }
});

test('every stop is inside the world limit', () => {
  for (const s of STOPS) {
    const r = Math.hypot(s.position.x, s.position.z);
    assert.ok(r < WORLD_LIMIT, `${s.id} is outside the world (r=${r.toFixed(1)})`);
  }
});

test('every pad sits above its building roof', () => {
  // SOLIDS[0..6] align with STOPS[0..6]; last solid is the lighthouse tower.
  assert.equal(SOLIDS.length, STOPS.length + 1);
  STOPS.forEach((s, i) => {
    const b = SOLIDS[i];
    const cx = (b.min.x + b.max.x) / 2, cz = (b.min.z + b.max.z) / 2;
    assert.ok(Math.hypot(s.position.x - cx, s.position.z - cz) < 12,
      `${s.id} pad is not over its building`);
    assert.ok(s.position.y >= b.max.y + 1 && s.position.y <= b.max.y + 4,
      `${s.id} pad y=${s.position.y} vs roof ${b.max.y}`);
  });
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
