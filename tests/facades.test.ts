// tests/facades.test.ts — instanced facades (Task 6).
//
// Guards: (1) scene.ts renders repeated facade elements with InstancedMesh
// (>=5 usages — the picket fence already had 2), (2) the infill lots from
// generateLots are actually rendered, (3) the pure facade collector
// (src/facades.ts) emits the exact layout the old per-mesh code produced.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  collectFacades, emptyFacades, mergeFacades, LOT_SEED_BASE, type FacadeSpec,
} from '../src/facades.js';

const spec = (over: Partial<FacadeSpec> = {}): FacadeSpec => ({
  sx: 10, sy: 10, sz: 8, minY: 0, cx: 0, cz: 0,
  district: 'old-town', seedBase: 3, colorIdx: 3, bayWindow: false,
  ...over,
});

describe('instanced facades', () => {
  it('scene.ts uses InstancedMesh for repeated facade elements', () => {
    const src = readFileSync('src/scene.ts', 'utf8');
    const instanced = (src.match(/new THREE\.InstancedMesh/g) || []).length;
    assert.ok(instanced >= 5, `expected >=5 InstancedMesh usages, found ${instanced}`);
  });

  it('scene.ts renders infill lots from generateLots', () => {
    const src = readFileSync('src/scene.ts', 'utf8');
    assert.ok(src.includes('generateLots'), 'makeBuildings should consume generateLots for infill');
  });

  it('collectFacades is deterministic for the same spec', () => {
    const a = collectFacades(spec());
    const b = collectFacades(spec());
    assert.deepEqual(a, b);
  });

  it('emits the expected window/door/sill counts for a 2-story building', () => {
    // sy=10 → roofHeight=min(4.2, 2.8)=2.8, bodyH=7.2, stories=round(7.2/3.4)=2.
    // Per side: ground winRow (2 windows) + 1 upper winRow (2 windows) + 1 door.
    const F = collectFacades(spec());
    assert.equal(F.winLit.length + F.winUnlit.length, 16);
    assert.equal(F.doors.length, 4);
    assert.equal(F.sills.length, 16);
  });

  it('windows sit on the facade surface with the historic 0.055 offset', () => {
    const F = collectFacades(spec({ sx: 10, sz: 8 }));
    const south = [...F.winLit, ...F.winUnlit].filter(w => w.rotY === 0);
    assert.ok(south.length > 0, 'expected south-face windows');
    for (const w of south) {
      assert.ok(Math.abs(w.z - (8 / 2 + 0.055)) < 1e-9, `window z=${w.z}, expected 4.055`);
    }
  });

  it('lit/unlit split is a genuine partition (both non-empty, ~35% lit)', () => {
    // Use a wide building for a bigger sample: along>29 → still 2 windows/side/row,
    // so use several stories instead: sy=24 → bodyH≈17.3 → stories=5 → 40 windows/side-set.
    const F = collectFacades(spec({ sy: 24 }));
    const total = F.winLit.length + F.winUnlit.length;
    assert.ok(total >= 32, `expected >=32 windows, got ${total}`);
    assert.ok(F.winLit.length > 0 && F.winUnlit.length > 0, 'both lit and unlit windows expected');
    const litFrac = F.winLit.length / total;
    assert.ok(litFrac > 0.15 && litFrac < 0.6, `lit fraction ${litFrac} far from 0.35`);
  });

  it('bay windows only appear when bayWindow=true', () => {
    assert.equal(collectFacades(spec({ bayWindow: false })).bays.length, 0);
    const bays = collectFacades(spec({ bayWindow: true })).bays;
    assert.equal(bays.length, 1);
    // Protrudes from the south (street) face.
    assert.ok(bays[0].z > 8 / 2, `bay z=${bays[0].z} should protrude past the south face`);
  });

  it('awnings only appear for merchant-row, in the colorIdx variant bucket', () => {
    const m = collectFacades(spec({ district: 'merchant-row', colorIdx: 4 }));
    assert.equal(m.awnings.flat().length, 1);
    assert.equal(m.awnings[4 % 3].length, 1);
    const o = collectFacades(spec({ district: 'old-town' }));
    assert.equal(o.awnings.flat().length, 0);
  });

  it('different seedBase gives different window jitter', () => {
    const a = collectFacades(spec({ seedBase: 1 }));
    const b = collectFacades(spec({ seedBase: 2 }));
    assert.notDeepEqual(a.winUnlit, b.winUnlit);
  });

  it('LOT_SEED_BASE keeps infill RNG clear of hero seeds', () => {
    assert.ok(LOT_SEED_BASE > 1000, 'lot seeds must not collide with hero SOLIDS indices');
  });

  it('mergeFacades concatenates every array', () => {
    const into = emptyFacades();
    mergeFacades(into, collectFacades(spec({ seedBase: 1 })));
    mergeFacades(into, collectFacades(spec({ seedBase: 2, district: 'merchant-row' })));
    const one = collectFacades(spec({ seedBase: 1 }));
    const two = collectFacades(spec({ seedBase: 2, district: 'merchant-row' }));
    assert.equal(into.winLit.length + into.winUnlit.length,
      one.winLit.length + one.winUnlit.length + two.winLit.length + two.winUnlit.length);
    assert.equal(into.awnings.flat().length, 1);
  });
});
