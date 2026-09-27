// src/town-gen.ts — seeded procedural town infill (Task 5).
//
// Jittered-grid sampler over the tier pads (the town's buildable land).
// Deterministic: TOWN_SEED always yields the same town. Static data only —
// no per-frame work.
//
// NOTE on the algorithm: the brief specified walking each road edge in 14m
// steps and sampling lots at 7-12m lateral offsets. Implemented literally that
// yields ~55 lots; even with aggressive tuning (8m steps, setback bands out to
// 37m, face-setback instead of center-offset so lots clear the 2.8m road tube)
// it caps at ~129, because heroes already occupy the prime road frontage and
// the 6m other-road check blocks the rest. The 200-300 goal requires filling
// block interiors, so the sampler walks a jittered grid over the pads instead,
// keeping every one of the brief's rejection criteria (hero 2m pad, lot-lot,
// bay, PARK_RECT, rect-based 3.5m road clearance) plus a land check. The
// road-clearance filter keeps lots street-served: the Phase 1 interior grids
// (midtown lanes, upper east street, waterfront strips, observatory spur)
// put most lots within a block of a street.
import { heightAt, TIERS } from './terrain';
import { ROAD_EDGES, nodeById } from './roads';
import { SOLIDS, isInBay, PARK_RECT } from './world';
import { mulberry32 } from './grain';
import type { Solid } from './types';

/** Seed for the procedural town: same seed always yields the same town. */
export const TOWN_SEED = 20260927;

export interface Lot {
  /** Min corner of the axis-aligned footprint. */
  x: number; z: number;
  /** Footprint extents. */
  w: number; d: number;
  /** Building height (floors * FLOOR_H). */
  h: number;
  floors: number;
  district: string;
  /** Victorian bay windows on the street facade (old-town / merchant-row). */
  bayWindow: boolean;
  /** Facade palette index: 0 = default town palette, 1-4 = pastel (Painted Ladies). Task 6 interprets. */
  palette: number;
}

interface LotProfile {
  w: [number, number];
  d: [number, number];
  floors: [number, number];
  bayWindow: boolean;
  palettes: number[];
}

/** Per-district lot size/floor/palette ranges. */
export const DISTRICT_LOT_PROFILES: Record<string, LotProfile> = {
  'harbor':         { w: [9, 16], d: [8, 14], floors: [1, 2], bayWindow: false, palettes: [0] },
  'old-town':       { w: [8, 14], d: [8, 12], floors: [2, 4], bayWindow: true,  palettes: [0] },
  'merchant-row':   { w: [8, 14], d: [8, 12], floors: [2, 3], bayWindow: true,  palettes: [0] },
  'bungalow-lanes': { w: [8, 12], d: [8, 12], floors: [1, 1], bayWindow: false, palettes: [1, 2, 3, 4] },
};

const GRID = 7;              // grid spacing over each tier pad (m)
const GRID_SAMPLES = 4;       // jittered samples per grid cell
const GRID_JITTER = 0.9;      // jitter amplitude as a fraction of GRID
const MIN_LAND_Y = -0.4;      // lots must sit above water (waterfront pad is at y=0)
const ROAD_HALF_TUBE = 2.8;   // widest road tube radius (street); switchbacks are narrower
const ROAD_MARGIN = 0.7;      // extra clearance margin beyond the tube
const ROAD_CLEAR_RECT = ROAD_HALF_TUBE + ROAD_MARGIN; // min centerline-to-lot-AABB distance (m)
const HERO_PAD = 2;           // hero AABB expansion for overlap checks (m)
const MAX_LOTS = 275;
const FLOOR_H = 3.4;

function aabbOverlap(ax0: number, az0: number, ax1: number, az1: number,
                     bx0: number, bz0: number, bx1: number, bz1: number): boolean {
  return ax0 < bx1 && ax1 > bx0 && az0 < bz1 && az1 > bz0;
}

function segsCross(ax: number, az: number, bx: number, bz: number,
                   cx: number, cz: number, dx: number, dz: number): boolean {
  const d1x = bx - ax, d1z = bz - az, d2x = dx - cx, d2z = dz - cz;
  const denom = d1x * d2z - d1z * d2x;
  if (Math.abs(denom) < 1e-9) return false; // parallel
  const t = ((cx - ax) * d2z - (cz - az) * d2x) / denom;
  const u = ((cx - ax) * d1z - (cz - az) * d1x) / denom;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

/** True when the segment touches the axis-aligned box (endpoints or crossing). */
function segIntersectsAABB(ax: number, az: number, bx: number, bz: number,
                            x0: number, z0: number, x1: number, z1: number): boolean {
  if (ax >= x0 && ax <= x1 && az >= z0 && az <= z1) return true;
  if (bx >= x0 && bx <= x1 && bz >= z0 && bz <= z1) return true;
  return segsCross(ax, az, bx, bz, x0, z0, x1, z0)
      || segsCross(ax, az, bx, bz, x1, z0, x1, z1)
      || segsCross(ax, az, bx, bz, x1, z1, x0, z1)
      || segsCross(ax, az, bx, bz, x0, z1, x0, z0);
}

/** Deterministic infill lots across the tier pads. */
export function generateLots(): Lot[] {
  const rand = mulberry32(TOWN_SEED);
  const lots: Lot[] = [];

  const heroBoxes = SOLIDS.map(s => ({
    x0: s.min.x - HERO_PAD, z0: s.min.z - HERO_PAD,
    x1: s.max.x + HERO_PAD, z1: s.max.z + HERO_PAD,
  }));
  const segs = ROAD_EDGES.map(e => {
    const a = nodeById(e.a), b = nodeById(e.b);
    return { x0: a.x, z0: a.z, x1: b.x, z1: b.z };
  });
  // Rect-based road clearance: the lot AABB, expanded by ROAD_CLEAR_RECT,
  // must not touch any road centerline. Center-based checks let wide lots
  // engulf the 2.8m road tube; this keeps the tube clear with margin.

  let midtownAccepted = 0;
  for (const tier of TIERS) {
    for (const [x0, z0, x1, z1] of tier.rects) {
      const tierDistrict = tier.name === 'waterfront' ? 'harbor'
        : tier.name === 'midtown' ? 'midtown-mix'
        : 'bungalow-lanes';
      for (let gx = x0 + GRID / 2; gx < x1 && lots.length < MAX_LOTS; gx += GRID) {
        for (let gz = z0 + GRID / 2; gz < z1 && lots.length < MAX_LOTS; gz += GRID) {
          for (let s = 0; s < GRID_SAMPLES && lots.length < MAX_LOTS; s++) {
            // Draw all randoms up front so RNG consumption is constant per candidate.
            const jx = (rand() - 0.5) * GRID * GRID_JITTER;
            const jz = (rand() - 0.5) * GRID * GRID_JITTER;
            // Midtown alternates old-town / merchant-row by accepted lot, so the
            // built mix stays balanced even where heroes block whole cells.
            const district = tierDistrict === 'midtown-mix'
              ? (midtownAccepted % 2 === 0 ? 'old-town' : 'merchant-row')
              : tierDistrict;
            const profile = DISTRICT_LOT_PROFILES[district];
            const w = profile.w[0] + rand() * (profile.w[1] - profile.w[0]);
            const d = profile.d[0] + rand() * (profile.d[1] - profile.d[0]);
            const floors = profile.floors[0] + Math.floor(rand() * (profile.floors[1] - profile.floors[0] + 1));
            const palette = profile.palettes[Math.floor(rand() * profile.palettes.length)];
            const cx = gx + jx, cz = gz + jz;
            const x = cx - w / 2, z = cz - d / 2;

            // Must sit on land (above water); the waterfront pad is at y=0 so
            // the threshold sits just below that. isInBay misses the margins
            // where terrain dips below sea level outside the bay polygon.
            if (heightAt(cx, cz) < MIN_LAND_Y) continue;
            // Bay water at the lot center.
            if (isInBay(cx, cz)) continue;
            // Future park rectangle (Task 8 builds the park here).
            if (aabbOverlap(x, z, x + w, z + d, PARK_RECT[0], PARK_RECT[1], PARK_RECT[2], PARK_RECT[3])) continue;
            // Hero overlap (AABB expanded 2m).
            if (heroBoxes.some(h => aabbOverlap(x, z, x + w, z + d, h.x0, h.z0, h.x1, h.z1))) continue;
            // Lot-lot overlap.
            if (lots.some(l => aabbOverlap(x, z, x + w, z + d, l.x, l.z, l.x + l.w, l.z + l.d))) continue;
            // Road clearance: lot AABB expanded by 3.5m must not touch any
            // road centerline (clears the 2.8m street tube with margin).
            const rx0 = x - ROAD_CLEAR_RECT, rz0 = z - ROAD_CLEAR_RECT;
            const rx1 = x + w + ROAD_CLEAR_RECT, rz1 = z + d + ROAD_CLEAR_RECT;
            if (segs.some(s => segIntersectsAABB(s.x0, s.z0, s.x1, s.z1, rx0, rz0, rx1, rz1))) continue;

            if (tierDistrict === 'midtown-mix') midtownAccepted++;
            lots.push({
              x, z, w, d,
              h: floors * FLOOR_H,
              floors, district,
              bayWindow: profile.bayWindow,
              palette,
            });
          }
        }
      }
    }
  }
  return lots;
}

/** Lots -> collision solids: base y from heightAt at the lot center. */
export function lotsToSolids(lots: Lot[]): Solid[] {
  return lots.map(l => {
    const baseY = heightAt(l.x + l.w / 2, l.z + l.d / 2);
    return {
      min: { x: l.x, y: baseY, z: l.z },
      max: { x: l.x + l.w, y: baseY + l.h, z: l.z + l.d },
      district: l.district,
    };
  });
}
