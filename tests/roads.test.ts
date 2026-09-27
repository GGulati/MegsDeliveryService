import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ROAD_NODES, ROAD_EDGES, nodeById, roadGraph, nodePos } from '../src/roads.js';

describe('road graph', () => {
  it('every edge references existing nodes', () => {
    const ids = new Set(ROAD_NODES.map(n => n.id));
    for (const e of ROAD_EDGES) {
      assert.ok(ids.has(e.a), `edge ${e.a}-${e.b}: unknown node ${e.a}`);
      assert.ok(ids.has(e.b), `edge ${e.a}-${e.b}: unknown node ${e.b}`);
    }
  });
  it('is fully connected (BFS from the first node reaches all)', () => {
    const g = roadGraph();
    const seen = new Set<string>([ROAD_NODES[0].id]);
    const queue = [ROAD_NODES[0].id];
    while (queue.length) {
      const cur = queue.pop()!;
      for (const nb of g.get(cur) ?? []) if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }
    }
    assert.equal(seen.size, ROAD_NODES.length, `unreachable nodes: ${ROAD_NODES.map(n => n.id).filter(id => !seen.has(id))}`);
  });
  it('bridge edge has authored deck height above water', () => {
    const b = ROAD_EDGES.find(e => e.kind === 'bridge')!;
    assert.ok(b.deckY !== undefined && b.deckY > 2, 'bridge deck must clear boats');
    const pa = nodePos(nodeById(b.a)), pb = nodePos(nodeById(b.b));
    assert.ok(Math.abs(pa.y - b.deckY) < 0.01 && Math.abs(pb.y - b.deckY) < 0.01);
  });
  it('node ids are unique', () => {
    const ids = ROAD_NODES.map(n => n.id);
    assert.equal(new Set(ids).size, ids.length);
  });
});
