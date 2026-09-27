// tests/bridge.test.ts
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ROAD_EDGES, nodeById, nodePos } from '../src/roads.js';
import { buildBridge } from '../src/bridge.js';

describe('bridge', () => {
  it('exactly one bridge edge exists with a deck above water', () => {
    const bridges = ROAD_EDGES.filter(e => e.kind === 'bridge');
    assert.equal(bridges.length, 1);
    assert.ok(bridges[0].deckY! > 2);
  });

  it('buildBridge populates the group with deck, towers, cables, suspenders, lamps', () => {
    const g = new THREE.Group();
    buildBridge(g);
    // deck(1) + towers(2×(2 columns + 2 beams)=8) + cables(2) + suspenders(24) + lamps(~12)
    assert.ok(g.children.length > 30, `expected bridge parts, got ${g.children.length} children`);
  });

  it('bridge geometry spans the bridge edge with towers rising above the deck', () => {
    const g = new THREE.Group();
    buildBridge(g);
    const edge = ROAD_EDGES.find(e => e.kind === 'bridge')!;
    const a = nodePos(nodeById(edge.a)), b = nodePos(nodeById(edge.b));
    const box = new THREE.Box3().setFromObject(g);
    assert.ok(box.min.x <= Math.min(a.x, b.x) + 1, `deck should start at landing (min.x=${box.min.x})`);
    assert.ok(box.max.x >= Math.max(a.x, b.x) - 1, `deck should end at landing (max.x=${box.max.x})`);
    assert.ok(box.max.y >= edge.deckY! + 10, `towers should rise above the deck (max.y=${box.max.y})`);
    assert.ok(box.min.y <= edge.deckY!, `deck underside should be at/below deckY (min.y=${box.min.y})`);
  });
});
