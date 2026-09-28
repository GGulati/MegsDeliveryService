// tests/bridge.test.ts
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ROAD_EDGES, nodeById, nodePos } from '../src/roads.js';
import { buildBridge } from '../src/bridge.js';
import { shortestPath } from '../src/trips.js';

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

  it('tower columns extend down to the waterline', () => {
    const g = new THREE.Group();
    buildBridge(g);
    const edge = ROAD_EDGES.find(e => e.kind === 'bridge')!;
    const deckY = edge.deckY ?? 6;
    // Tower columns are the 1.5m × 1.5m-footprint boxes; both towers stand in
    // bay water (surface y=0), so each column must reach the waterline.
    const columns = g.children.filter((c) => {
      const geo = (c as THREE.Mesh).geometry as THREE.BoxGeometry | undefined;
      const p = geo && (geo as THREE.BoxGeometry).parameters;
      return !!p && p.width === 1.5 && p.depth === 1.5 && p.height > 2;
    }) as THREE.Mesh[];
    assert.equal(columns.length, 4, `expected 4 tower columns, found ${columns.length}`);
    for (const col of columns) {
      const box = new THREE.Box3().setFromObject(col);
      assert.ok(box.min.y <= 0.5, `tower column should reach the waterline (min.y=${box.min.y})`);
      assert.ok(box.max.y >= deckY + 12 - 0.01, `tower top unchanged above deck (max.y=${box.max.y})`);
    }
  });

  it('bridge-enabled car routes use bl-w->bl-e; ped routes stay bridge-free', () => {
    // West to east: with the bridge allowed, the shortest path must cross it.
    const carRoute = shortestPath('wx2', 'we2', true);
    assert.ok(carRoute, 'car route wx2->we2 should exist with bridge allowed');
    const usesBridge = carRoute.some((e: any) => e.kind === 'bridge');
    assert.ok(usesBridge, 'bridge-enabled car route should include the bridge edge');
    // Without the bridge (peds), the route must avoid it entirely.
    const pedRoute = shortestPath('wx2', 'we2', false);
    if (pedRoute) {
      assert.ok(!pedRoute.some((e: any) => e.kind === 'bridge'), 'ped route must not use the bridge');
    }
  });
});
