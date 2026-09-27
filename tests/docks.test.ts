// tests/docks.test.ts — harbor dock placement (user feedback 2026-09-27).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DOCKS, DOCK_W, DOCK_D, DOCK_BOATS, isInBay } from '../src/world.js';
import { ROAD_EDGES, nodeById } from '../src/roads.js';

// Fraction of the dock footprint (24x8) over bay water, by grid sampling.
function waterFraction(cx: number, cz: number): number {
  let wet = 0, total = 0;
  for (let ix = 0; ix <= 12; ix++) {
    for (let iz = 0; iz <= 4; iz++) {
      const x = cx - DOCK_W / 2 + (ix / 12) * DOCK_W;
      const z = cz - DOCK_D / 2 + (iz / 4) * DOCK_D;
      total++;
      if (isInBay(x, z)) wet++;
    }
  }
  return wet / total;
}

// Bridge deck + tower footprints in XZ, derived from the road graph
// (mirrors src/bridge.ts: deck 7m wide, towers at 1/3 and 2/3 with
// columns 1.5m square at lateral +/-3.2).
function bridgeFootprints(): { x0: number; z0: number; x1: number; z1: number }[] {
  const edge = ROAD_EDGES.find(e => e.kind === 'bridge');
  assert.ok(edge, 'no bridge edge in road graph');
  const a = nodeById(edge.a), b = nodeById(edge.b);
  const out: { x0: number; z0: number; x1: number; z1: number }[] = [];
  // Deck: segment buffered by half deck width (3.5m).
  const dx = b.x - a.x, dz = b.z - a.z;
  const len = Math.hypot(dx, dz);
  const nx = -dz / len, nz = dx / len; // lateral unit
  const hw = 3.5;
  out.push({
    x0: Math.min(a.x, b.x) - Math.abs(nx) * hw,
    z0: Math.min(a.z, b.z) - Math.abs(nz) * hw,
    x1: Math.max(a.x, b.x) + Math.abs(nx) * hw,
    z1: Math.max(a.z, b.z) + Math.abs(nz) * hw,
  });
  // Towers: 1.5m columns at t=1/3, 2/3, lateral +/-3.2.
  for (const t of [1 / 3, 2 / 3]) {
    for (const side of [-3.2, 3.2]) {
      const px = a.x + dx * t + nx * side;
      const pz = a.z + dz * t + nz * side;
      out.push({ x0: px - 0.75, z0: pz - 0.75, x1: px + 0.75, z1: pz + 0.75 });
    }
  }
  return out;
}

const rectsOverlap = (
  a: { x0: number; z0: number; x1: number; z1: number },
  b: { x0: number; z0: number; x1: number; z1: number },
) => a.x0 < b.x1 && a.x1 > b.x0 && a.z0 < b.z1 && a.z1 > b.z0;

describe('docks', () => {
  it('every dock is at least 70% over water', () => {
    for (const [x, z] of DOCKS) {
      const f = waterFraction(x, z);
      assert.ok(f >= 0.7, `dock at (${x},${z}) is only ${(f * 100).toFixed(0)}% over water`);
    }
  });
  it('no dock intersects the bridge deck or towers', () => {
    const prints = bridgeFootprints();
    for (const [x, z] of DOCKS) {
      const dock = { x0: x - DOCK_W / 2, z0: z - DOCK_D / 2, x1: x + DOCK_W / 2, z1: z + DOCK_D / 2 };
      for (const p of prints)
        assert.ok(!rectsOverlap(dock, p), `dock at (${x},${z}) intersects the bridge`);
    }
  });
  it('every moored boat sits in bay water', () => {
    for (const [x, z] of DOCK_BOATS)
      assert.ok(isInBay(x, z), `boat at (${x},${z}) is not in the bay`);
  });
});
