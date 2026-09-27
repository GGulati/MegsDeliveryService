// src/facades.ts — pure facade-layout collector (Task 6).
//
// Computes the exact facade layout the old per-mesh makeBuildings code
// produced (window positions/sizes, sills, doors, flower boxes, awnings,
// Victorian bays) — but returns plain instance records instead of meshes.
// scene.ts turns each record list into one THREE.InstancedMesh.
//
// Pure math + seeded RNG only: no three.js, no DOM. Fully unit-testable.
// Deterministic: the same FacadeSpec always yields the same records.
import { mulberry32 } from './grain';

/** Base for infill-lot RNG seeds: keeps lot facades clear of hero SOLIDS indices. */
export const LOT_SEED_BASE = 1_000_000;

const STORY_H = 3.4;

export interface FacadeSpec {
  /** Footprint extents (m) and total height (m). */
  sx: number; sy: number; sz: number;
  /** World y of the building base. */
  minY: number;
  /** Footprint center. */
  cx: number; cz: number;
  /** District key (drives merchant-row awnings). */
  district: string;
  /** RNG seed base: hero SOLIDS index, or LOT_SEED_BASE + lot index. */
  seedBase: number;
  /** Color-variant index for awnings: building index within its list. */
  colorIdx: number;
  /** Victorian protruding bay on the street (south) face. */
  bayWindow: boolean;
}

export interface FacadeInstance {
  x: number; y: number; z: number;
  rotX: number; rotY: number;
  sx: number; sy: number; sz: number;
}

export interface FacadeSet {
  winLit: FacadeInstance[];
  winUnlit: FacadeInstance[];
  sills: FacadeInstance[];
  doors: FacadeInstance[];
  flowerBoxes: FacadeInstance[];
  petals: FacadeInstance[];
  leaves: FacadeInstance[];
  /** Awnings bucketed by stripe color variant (0, 1, 2). */
  awnings: FacadeInstance[][];
  bays: FacadeInstance[];
}

export function emptyFacades(): FacadeSet {
  return {
    winLit: [], winUnlit: [], sills: [], doors: [],
    flowerBoxes: [], petals: [], leaves: [],
    awnings: [[], [], []], bays: [],
  };
}

export function mergeFacades(into: FacadeSet, from: FacadeSet): void {
  into.winLit.push(...from.winLit);
  into.winUnlit.push(...from.winUnlit);
  into.sills.push(...from.sills);
  into.doors.push(...from.doors);
  into.flowerBoxes.push(...from.flowerBoxes);
  into.petals.push(...from.petals);
  into.leaves.push(...from.leaves);
  from.awnings.forEach((bucket, vi) => into.awnings[vi].push(...bucket));
  into.bays.push(...from.bays);
}

type Side = 'north' | 'south' | 'east' | 'west';
const SIDE_IDX: Record<Side, number> = { north: 0, south: 1, east: 2, west: 3 };

/**
 * Collect facade instance records for one building. Layout, RNG sequence,
 * and offsets are identical to the historic per-mesh makeBuildings code —
 * heroes render pixel-identical, just instanced.
 */
export function collectFacades(spec: FacadeSpec): FacadeSet {
  const { sx, sy, sz, minY, cx, cz, district, seedBase, colorIdx, bayWindow } = spec;
  const F = emptyFacades();
  const rec = (x: number, y: number, z: number, rotY: number,
               rsx: number, rsy: number, rsz: number, rotX = 0): FacadeInstance =>
    ({ x, y, z, rotX, rotY, sx: rsx, sy: rsy, sz: rsz });

  // Story-aware facades: door on the ground floor, one window row per story
  // above. Stories are counted against the body height (below the roof).
  const roofHeight = Math.min(4.2, sy * .28);
  const bodyH = sy - roofHeight;
  const stories = Math.max(1, Math.round(bodyH / STORY_H));
  const baseW = Math.min(2.6, sx * .18), baseH = Math.min(2.4, STORY_H * .55);
  const doorH = Math.min(3.0, STORY_H * .82);

  const addFacade = (side: Side) => {
    const along = side === 'north' || side === 'south' ? sx : sz;
    const positions = along > 29 ? [-.27, .27] : [-.2, .2];
    const rot = side === 'north' ? Math.PI : side === 'south' ? 0 : side === 'west' ? -Math.PI / 2 : Math.PI / 2;
    const isZ = side === 'north' || side === 'south';
    const outward = side === 'north' ? -1 : side === 'south' ? 1 : side === 'west' ? -1 : 1;
    const planeAt = (alongOffset: number, y: number, depth: number): [number, number, number] => isZ
      ? [cx + alongOffset, y, cz + outward * (sz * .5 + depth)]
      : [cx + outward * (sx * .5 + depth), y, cz + alongOffset];
    const winRow = (story: number, y: number) => {
      positions.forEach((offset, pi) => {
        // Deterministic per-window variation (no horizontal jitter — keep rows aligned).
        const rnd = mulberry32(seedBase * 1000 + SIDE_IDX[side] * 100 + story * 10 + pi);
        const w = baseW * (0.88 + rnd() * 0.24);    // width variation
        const h = baseH * (0.88 + rnd() * 0.24);    // height variation
        // Keep the window top below the body top (no ceiling clipping).
        const maxY = minY + bodyH - h * 0.5 - 0.35;
        const wy = Math.min(y, maxY);
        const [px, py, pz] = planeAt(along * offset, wy, .055);
        (rnd() < 0.35 ? F.winLit : F.winUnlit).push(rec(px, py, pz, rot, w, h, 1));
        const [qx, qy, qz] = planeAt(along * offset, wy - h * .5 - .08, .1);
        F.sills.push(rec(qx, qy, qz, isZ ? 0 : Math.PI / 2, w + .38, .18, .16));
        // Flower box under some windows.
        if (rnd() < 0.3) {
          const [bx, by, bz] = planeAt(along * offset, wy - h * .5 - 0.35, 0.28);
          F.flowerBoxes.push(rec(bx, by, bz, isZ ? 0 : Math.PI / 2, w * 0.8, 0.35, 0.4));
          for (let f = 0; f < 3; f++) {
            const [fx, fy, fz] = planeAt(along * offset + (f - 1) * w * 0.22, wy - h * .5 - 0.12, 0.28);
            (f % 2 ? F.petals : F.leaves).push(rec(fx, fy, fz, 0, 0.14, 0.14, 0.14));
          }
        }
      });
    };
    // Ground floor: centered door with flanking windows.
    const [dx, dy, dz] = planeAt(0, minY + doorH * .5, .06);
    F.doors.push(rec(dx, dy, dz, rot, Math.min(2.4, along * .13), doorH, 1));
    winRow(0, minY + STORY_H * .58);
    // Upper stories: one window row per story.
    for (let st = 1; st < stories; st++) {
      winRow(st, minY + STORY_H * st + STORY_H * .58);
    }
  };
  addFacade('north'); addFacade('south'); addFacade('east'); addFacade('west');

  // Merchant-row shops get striped awnings over the south face (street side).
  if (district === 'merchant-row') {
    const awnW = Math.min(sx * 0.7, 10), awnD = 2.2;
    F.awnings[colorIdx % 3].push(rec(
      cx, minY + doorH + 0.55, cz + sz * .5 + awnD * .5 - 0.15,
      0, awnW, awnD, 1, -Math.PI / 2));
  }

  // Victorian bay: protruding box on the south (street) face.
  if (bayWindow) {
    const bayW = Math.min(3.2, sx * 0.4), bayH = STORY_H * 0.95, bayD = 0.8;
    F.bays.push(rec(cx, minY + bayH * .5, cz + sz * .5 + bayD * .5 - 0.05, 0, bayW, bayH, bayD));
  }

  return F;
}
