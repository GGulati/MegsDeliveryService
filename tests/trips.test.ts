// tests/trips.test.ts — trip goals for ambient traffic (user feedback 2026-09-27).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { destinations, shortestPath } from '../src/trips.js';

describe('trips', () => {
  it('every destination maps to a distinct nearby road node', () => {
    const dests = destinations();
    assert.ok(dests.length > 10, `want many destinations, got ${dests.length}`);
    const seen = new Set<string>();
    for (const d of dests) {
      assert.ok(d.nodeId, `destination ${d.name} has no node`);
      assert.ok(!seen.has(d.nodeId), `duplicate node ${d.nodeId}`);
      seen.add(d.nodeId);
    }
    const named = dests.filter(d => d.name !== 'house');
    // 7 stops; marina shares the lighthouse's node, so 6 distinct stop nodes.
    assert.ok(named.length >= 6, `want most stops as destinations, got ${named.length}`);
  });

  it('destinations are stable across calls (cached)', () => {
    assert.equal(destinations(), destinations());
  });

  it('shortestPath returns contiguous routes ending at the target', () => {
    const nodes = [...new Set(destinations().map(d => d.nodeId))].slice(0, 15);
    let checked = 0;
    for (const a of nodes) {
      for (const b of nodes) {
        if (a === b) continue;
        const path = shortestPath(a, b);
        assert.ok(path, `no route ${a} -> ${b} (graph should be connected)`);
        assert.ok(path!.length > 0, 'route to a different node is non-empty');
        let n = a;
        for (const e of path!) {
          assert.ok(e.a === n || e.b === n, `route discontinuity at ${n}`);
          n = e.a === n ? e.b : e.a;
        }
        assert.equal(n, b, 'route must end at the destination node');
        checked++;
      }
    }
    assert.ok(checked > 50, `checked ${checked} pairs`);
  });

  it('shortestPath to self is empty, and unknown nodes are unreachable', () => {
    assert.deepEqual(shortestPath('mn3', 'mn3'), []);
    assert.equal(shortestPath('mn3', 'no-such-node'), null);
  });
});
