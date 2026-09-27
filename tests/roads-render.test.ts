// tests/roads-render.test.ts
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ROAD_EDGES, nodeById, nodePos } from '../src/roads.js';

describe('road render data', () => {
  it('every non-bridge edge has two distinct resolved endpoints', () => {
    for (const e of ROAD_EDGES) {
      if (e.kind === 'bridge') continue;
      const a = nodePos(nodeById(e.a)), b = nodePos(nodeById(e.b));
      const d = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
      assert.ok(d > 5, `edge ${e.a}-${e.b} too short to render (${d})`);
      assert.ok(Number.isFinite(a.y) && Number.isFinite(b.y), `edge ${e.a}-${e.b} has non-finite y`);
    }
  });
});
