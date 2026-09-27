// src/roads.ts — hand-authored street graph. y resolves from heightAt unless authored.
import { heightAt } from './terrain';

export interface RoadNode { id: string; x: number; z: number; y?: number }
export interface RoadEdge { a: string; b: string; kind: 'street' | 'switchback' | 'bridge'; deckY?: number }

const N = (id: string, x: number, z: number, y?: number): RoadNode => ({ id, x, z, y });

export const ROAD_NODES: RoadNode[] = [
  N('ww1', -75, 10), N('ww2', -75, 70), N('ww3', -75, 130),
  N('ww1b', -35, 10), N('ww2b', -35, 70), N('ww3b', -35, 130),
  N('we1', 85, -10), N('we2', 85, 50), N('we3', 85, 110),
  N('we1b', 120, -10), N('we2b', 120, 50),
  N('bl-w', -8, 100, 6), N('bl-e', 68, 100, 6),
  N('sw1', -75, -8), N('sw2', -95, -25), N('sw3', -65, -42), N('sw4', -90, -58),
  N('se1', 85, -28), N('se2', 105, -45), N('se3', 75, -60), N('se4', 95, -75),
  N('m1', -60, -72), N('m2', -20, -72), N('m3', 20, -72), N('m4', 60, -72),
  N('m5', -60, -105), N('m6', -20, -105), N('m7', 20, -105), N('m8', 60, -105),
  N('uc1', 20, -120), N('uc2', -5, -135), N('uc3', 15, -150),
  N('u1', -90, -160), N('u2', -30, -160), N('u3', 30, -160), N('u4', 90, -160),
  N('u5', 90, -195), N('u6', 30, -195), N('u7', -30, -195), N('u8', -90, -195),
  N('ob1', 95, -100), N('ob2', 110, -70),
];

const E = (a: string, b: string, kind: RoadEdge['kind'] = 'street', deckY?: number): RoadEdge => ({ a, b, kind, deckY });

export const ROAD_EDGES: RoadEdge[] = [
  E('ww1', 'ww2'), E('ww2', 'ww3'), E('ww1b', 'ww2b'), E('ww2b', 'ww3b'),
  E('ww1', 'ww1b'), E('ww2', 'ww2b'), E('ww3', 'ww3b'),
  E('we1', 'we2'), E('we2', 'we3'), E('we1b', 'we2b'), E('we1', 'we1b'), E('we2', 'we2b'),
  E('ww3b', 'bl-w'), E('bl-w', 'bl-e', 'bridge', 6), E('bl-e', 'we3'),
  E('ww1', 'sw1', 'switchback'), E('sw1', 'sw2', 'switchback'), E('sw2', 'sw3', 'switchback'),
  E('sw3', 'sw4', 'switchback'), E('sw4', 'm1', 'switchback'),
  E('we1', 'se1', 'switchback'), E('se1', 'se2', 'switchback'), E('se2', 'se3', 'switchback'),
  E('se3', 'se4', 'switchback'), E('se4', 'm4', 'switchback'),
  E('m1', 'm2'), E('m2', 'm3'), E('m3', 'm4'),
  E('m5', 'm6'), E('m6', 'm7'), E('m7', 'm8'),
  E('m1', 'm5'), E('m2', 'm6'), E('m3', 'm7'), E('m4', 'm8'),
  E('m3', 'uc1', 'switchback'), E('uc1', 'uc2', 'switchback'), E('uc2', 'uc3', 'switchback'), E('uc3', 'u3', 'switchback'),
  E('u1', 'u2'), E('u2', 'u3'), E('u3', 'u4'), E('u4', 'u5'),
  E('u5', 'u6'), E('u6', 'u7'), E('u7', 'u8'), E('u8', 'u1'),
  E('se4', 'ob1'), E('ob1', 'ob2'),
];

/** Pairs of node ids forming bridge edges, for the bridge renderer. */
export const BRIDGE_EDGE_IDS: [string, string][] =
  ROAD_EDGES.filter(e => e.kind === 'bridge').map(e => [e.a, e.b]);

export function nodeById(id: string): RoadNode {
  const n = ROAD_NODES.find(n => n.id === id);
  if (!n) throw new Error(`unknown road node ${id}`);
  return n;
}

/** Resolved position: authored y wins, otherwise heightAt. */
export function nodePos(n: RoadNode): { x: number; y: number; z: number } {
  return { x: n.x, y: n.y ?? heightAt(n.x, n.z), z: n.z };
}

/** Undirected adjacency. */
export function roadGraph(): Map<string, string[]> {
  const g = new Map<string, string[]>();
  for (const n of ROAD_NODES) g.set(n.id, []);
  for (const e of ROAD_EDGES) { g.get(e.a)!.push(e.b); g.get(e.b)!.push(e.a); }
  return g;
}
