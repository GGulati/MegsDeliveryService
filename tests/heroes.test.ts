import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { SOLIDS } from '../src/world.js';
import { heightAt } from '../src/terrain.js';
import { ROAD_EDGES, nodeById, nodePos } from '../src/roads.js';

const overlaps = (a: typeof SOLIDS[number], b: typeof SOLIDS[number]) =>
  a.min.x < b.max.x && a.max.x > b.min.x && a.min.z < b.max.z && a.max.z > b.min.z;

// Index pairs that intentionally share XZ footprint: the observatory dome
// (SOLIDS.length - 2) sits on the Hill Observatory roof (SOLIDS[5]).
const INTENTIONAL_OVERLAPS: [number, number][] = [[5, SOLIDS.length - 2]];
const isIntentional = (i: number, j: number) =>
  INTENTIONAL_OVERLAPS.some(([a, b]) => (i === a && j === b) || (i === b && j === a));

describe('hero buildings', () => {
  it('no two heroes overlap', () => {
    for (let i = 0; i < SOLIDS.length; i++)
      for (let j = i + 1; j < SOLIDS.length; j++)
        assert.ok(isIntentional(i, j) || !overlaps(SOLIDS[i], SOLIDS[j]), `heroes ${i} and ${j} overlap`);
  });
  it('heroes sit on the terrain (base within 1m of heightAt)', () => {
    // The observatory dome sits on the Hill Observatory roof, not the terrain.
    const domeIdx = SOLIDS.length - 2;
    SOLIDS.forEach((s, i) => {
      if (i === domeIdx) return;
      const cx = (s.min.x + s.max.x) / 2, cz = (s.min.z + s.max.z) / 2;
      const h = heightAt(cx, cz);
      assert.ok(Math.abs(s.min.y - h) < 1.0, `hero at (${cx},${cz}) floats: base ${s.min.y} vs terrain ${h}`);
    });
  });
  it('heroes keep 6m clear of road corridors', () => {
    for (const s of SOLIDS) {
      const cx = (s.min.x + s.max.x) / 2, cz = (s.min.z + s.max.z) / 2;
      for (const e of ROAD_EDGES) {
        if (e.kind === 'bridge') continue;
        const a = nodePos(nodeById(e.a)), b = nodePos(nodeById(e.b));
        // point-to-segment distance in xz
        const abx = b.x - a.x, abz = b.z - a.z;
        const t = Math.min(1, Math.max(0, ((cx - a.x) * abx + (cz - a.z) * abz) / (abx * abx + abz * abz)));
        const d = Math.hypot(cx - (a.x + abx * t), cz - (a.z + abz * t));
        const halfW = (Math.max(s.max.x - s.min.x, s.max.z - s.min.z) / 2);
        assert.ok(d > halfW + 6, `hero at (${cx},${cz}) intrudes on road ${e.a}-${e.b}`);
      }
    }
  });
});
