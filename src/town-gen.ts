// src/town-gen.ts — seeded procedural town infill (Task 5; road-frontage
// rework per user feedback 2026-09-27).
//
// Road-frontage sampler: walks every street/switchback edge and places lots on
// both sides at lot-width intervals, offset perpendicular from the centerline.
// Every house fronts a road (user requirement). Deterministic: TOWN_SEED always
// yields the same town. Static data only — no per-frame work.
import { heightAt, TIERS } from './terrain';
import { ROAD_EDGES, nodeById } from './roads';
import { SOLIDS, isInBay, PARK_RECT, MANSION_GROUNDS } from './world';
import { mulberry32 } from './grain';
import type { Solid } from './types';

/** Seed for the procedural town: same seed always yields the same town. */
export const TOWN_SEED = 20260927;

/** Max terrain height range across a lot footprint (m). Steeper lots are rejected.
 *  Foundations fill up to this height — hillside houses get tall stone bases,
 *  San Francisco style. */
const MAX_LOT_SLOPE = 5;

/**
 * Terrain height range under a lot footprint (4 corners + center).
 * Returns null if any sample is below water (unbuildable).
 * Used to reject lots on water missed by the bay polygon and lots on
 * slopes too steep to sit without clipping through the terrain
 * (user feedback 2026-09-27).
 */
export function lotTerrain(x: number, z: number, w: number, d: number): { minH: number; maxH: number } | null {
  const cx = x + w / 2, cz = z + d / 2;
  const hs = [
    heightAt(x, z), heightAt(x + w, z),
    heightAt(x, z + d), heightAt(x + w, z + d),
    heightAt(cx, cz),
  ];
  const minH = Math.min(...hs);
  if (minH < MIN_LAND_Y) return null;
  return { minH, maxH: Math.max(...hs) };
}

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

const MIN_LAND_Y = -0.4;      // lots must sit above water (waterfront pad is at y=0)
const ROAD_HALF_TUBE = 2.8;   // widest road tube radius (street); switchbacks are narrower
const ROAD_MARGIN = 0.7;      // extra clearance margin beyond the tube
const ROAD_CLEAR_RECT = ROAD_HALF_TUBE + ROAD_MARGIN; // min centerline-to-lot-AABB distance (m)
const HERO_PAD = 2;           // hero AABB expansion for overlap checks (m)
const MAX_LOTS = 275;
const FLOOR_H = 3.4;

/** Minimum building height: fits the 2.79m door + 0.35m top margin + roof.
 *  Bungalows (1 floor = 3.4m) were too short — doors stuck through the roof.
 *  (User feedback 2026-09-28: make short buildings taller, not doors shorter.) */
const MIN_BUILDING_H = 4.4;

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

/** Squared distance from point (px,pz) to segment (ax,az)-(bx,bz). */
function ptSegDist2(px: number, pz: number,
                    ax: number, az: number, bx: number, bz: number): number {
  const dx = bx - ax, dz = bz - az;
  const l2 = dx * dx + dz * dz;
  const t = l2 > 0 ? Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / l2)) : 0;
  const qx = ax + dx * t - px, qz = az + dz * t - pz;
  return qx * qx + qz * qz;
}

/** Distance from segment (ax,az)-(bx,bz) to the axis-aligned box. */
function segRectDist(ax: number, az: number, bx: number, bz: number,
                     x0: number, z0: number, x1: number, z1: number): number {
  const edges: [number, number, number, number][] = [
    [x0, z0, x1, z0], [x1, z0, x1, z1], [x1, z1, x0, z1], [x0, z1, x0, z0],
  ];
  if (ax >= x0 && ax <= x1 && az >= z0 && az <= z1) return 0;
  if (bx >= x0 && bx <= x1 && bz >= z0 && bz <= z1) return 0;
  for (const [cx, cz, dx, dz] of edges)
    if (segsCross(ax, az, bx, bz, cx, cz, dx, dz)) return 0;
  let m = Infinity;
  for (const [px, pz] of [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] as const)
    m = Math.min(m, ptSegDist2(px, pz, ax, az, bx, bz));
  for (const [cx, cz, dx, dz] of edges) {
    m = Math.min(m, ptSegDist2(ax, az, cx, cz, dx, dz));
    m = Math.min(m, ptSegDist2(bx, bz, cx, cz, dx, dz));
  }
  return Math.sqrt(m);
}

/** Which tier pad contains (x, z), if any. */
function tierAt(x: number, z: number): { name: string; y: number } | undefined {
  for (const tier of TIERS) {
    for (const [x0, z0, x1, z1] of tier.rects) {
      if (x >= x0 && x < x1 && z >= z0 && z < z1) return tier;
    }
  }
  return undefined;
}

/** True when the circle touches the axis-aligned box. */
function circleHitsAABB(cx: number, cz: number, r: number,
                        x0: number, z0: number, x1: number, z1: number): boolean {
  const nx = Math.max(x0, Math.min(cx, x1));
  const nz = Math.max(z0, Math.min(cz, z1));
  const dx = cx - nx, dz = cz - nz;
  return dx * dx + dz * dz < r * r;
}

/** Deterministic infill lots along road frontages. */
export function generateLots(): Lot[] {
  const rand = mulberry32(TOWN_SEED);
  const lots: Lot[] = [];

  const heroBoxes = SOLIDS.map(s => ({
    x0: s.min.x - HERO_PAD, z0: s.min.z - HERO_PAD,
    x1: s.max.x + HERO_PAD, z1: s.max.z + HERO_PAD,
  }));
  // Lighthouse rock exclusion (user feedback 2026-09-27): makeLighthouse puts
  // a radius-24 rock at the SOLIDS[3] center; keep lots 2m clear of it.
  const cottage = SOLIDS[3];
  const rockX = (cottage.min.x + cottage.max.x) / 2;
  const rockZ = (cottage.min.z + cottage.max.z) / 2;
  const ROCK_R = 26;
  const segs = ROAD_EDGES.filter(e => e.kind !== 'bridge').map(e => {
    const a = nodeById(e.a), b = nodeById(e.b);
    return { x0: a.x, z0: a.z, x1: b.x, z1: b.z };
  });
  // Rect-based road clearance: the lot AABB, expanded by ROAD_CLEAR_RECT,
  // must not touch any road centerline. Center-based checks let wide lots
  // engulf the 2.8m road tube; this keeps the tube clear with margin.

  let midtownAccepted = 0;
  for (const edge of ROAD_EDGES) {
    if (edge.kind === 'bridge') continue;
    const a = nodeById(edge.a), b = nodeById(edge.b);
    const dx = b.x - a.x, dz = b.z - a.z;
    const len = Math.hypot(dx, dz);
    if (len < 10) continue;
    const ux = dx / len, uz = dz / len; // along-road unit vector
    const px = -uz, pz = ux;            // perpendicular unit vector

    // Walk the edge, placing lots on both sides at lot-width intervals.
    // Start/end inset 5m so intersections don't crowd.
    let s = 5;
    while (s < len - 5 && lots.length < MAX_LOTS) {
      const rx = a.x + ux * s, rz = a.z + uz * s;
      const roadTier = tierAt(rx, rz);
      if (!roadTier) { s += 6; continue; }
      const tierDistrict = roadTier.name === 'waterfront' ? 'harbor'
        : roadTier.name === 'midtown' ? 'midtown-mix'
        : 'bungalow-lanes';
      // Midtown alternates old-town / merchant-row by accepted lot, so the
      // built mix stays balanced even where heroes block whole stretches.
      const district = tierDistrict === 'midtown-mix'
        ? (midtownAccepted % 2 === 0 ? 'old-town' : 'merchant-row')
        : tierDistrict;
      const profile = DISTRICT_LOT_PROFILES[district];
      // Draw all randoms up front so RNG consumption is constant per step.
      const w = profile.w[0] + rand() * (profile.w[1] - profile.w[0]);
      const d = profile.d[0] + rand() * (profile.d[1] - profile.d[0]);
      const floors = profile.floors[0] + Math.floor(rand() * (profile.floors[1] - profile.floors[0] + 1));
      const palette = profile.palettes[Math.floor(rand() * profile.palettes.length)];
      const sideFirst = rand() < 0.5 ? 1 : -1;
      // Lot half-extents along and across the road (axis-aligned box vs
      // arbitrary road angle, via the support function).
      const eAlong = (w * Math.abs(ux) + d * Math.abs(uz)) / 2;
      const ePerp = (w * Math.abs(px) + d * Math.abs(pz)) / 2;

      for (const side of [sideFirst, -sideFirst]) {
        if (lots.length >= MAX_LOTS) break;
        // Perpendicular offset: try the lot AABB edge at 4m, 6m, 8m, 10m, 12m
        // from the centerline (3.5m clearance + gap). Farther offsets find room
        // where the near frontage is blocked by heroes or other streets.
        let placed = false;
        for (const gap of [0.5, 2.5, 4.5, 6.5, 8.5]) {
          if (placed || lots.length >= MAX_LOTS) break;
          const offset = ROAD_CLEAR_RECT + ePerp + gap;
          const cx = rx + px * side * offset;
          const cz = rz + pz * side * offset;
          const x = cx - w / 2, z = cz - d / 2;

          // Must sit on a tier pad.
          if (!tierAt(cx, cz)) continue;
          // Must sit on land (above water); the waterfront pad is at y=0 so
          // the threshold sits just below that.
          if (heightAt(cx, cz) < MIN_LAND_Y) continue;
          // Bay water: all four corners clear, not just the center — a lot near
          // the shoreline can have its center on land while corners hang over
          // the water (user feedback 2026-09-27).
          if (isInBay(x, z) || isInBay(x + w, z) || isInBay(x, z + d) || isInBay(x + w, z + d)) continue;
          // Terrain under the footprint: reject water missed by the bay polygon
          // and slopes too steep to build on without clipping through terrain.
          const terr = lotTerrain(x, z, w, d);
          if (!terr || terr.maxH - terr.minH > MAX_LOT_SLOPE) continue;
          // Future park rectangle.
          if (aabbOverlap(x, z, x + w, z + d, PARK_RECT[0], PARK_RECT[1], PARK_RECT[2], PARK_RECT[3])) continue;
          // Mansion grounds: part of the house footprint (user feedback 2026-09-27).
          if (MANSION_GROUNDS.some(gr => aabbOverlap(x, z, x + w, z + d, gr[0], gr[1], gr[2], gr[3]))) continue;
          // Lighthouse rock exclusion circle.
          if (circleHitsAABB(rockX, rockZ, ROCK_R, x, z, x + w, z + d)) continue;
          // Hero overlap (AABB expanded 2m).
          if (heroBoxes.some(h => aabbOverlap(x, z, x + w, z + d, h.x0, h.z0, h.x1, h.z1))) continue;
          // Lot-lot overlap.
          if (lots.some(l => aabbOverlap(x, z, x + w, z + d, l.x, l.z, l.x + l.w, l.z + l.d))) continue;
          // Road clearance: lot AABB expanded by 3.5m must not touch any
          // road centerline (clears the 2.8m street tube with margin).
          const rx0 = x - ROAD_CLEAR_RECT, rz0 = z - ROAD_CLEAR_RECT;
          const rx1 = x + w + ROAD_CLEAR_RECT, rz1 = z + d + ROAD_CLEAR_RECT;
          if (segs.some(sg => segIntersectsAABB(sg.x0, sg.z0, sg.x1, sg.z1, rx0, rz0, rx1, rz1))) continue;

          if (tierDistrict === 'midtown-mix') midtownAccepted++;
          lots.push({
            x, z, w, d,
            h: Math.max(floors * FLOOR_H, MIN_BUILDING_H),
            floors, district,
            bayWindow: profile.bayWindow,
            palette,
          });
          placed = true;
        }
      }

      // Advance past this lot's along-road footprint plus a 2m gap.
      s += 2 * eAlong + 2;
    }
  }

  // Pass 2: block-interior infill. The road-frontage pass leaves gaps where
  // heroes occupy the frontage or streets run close together. Fill the tier
  // pads on a jittered grid, but only where the lot is within 15m of a road
  // centerline so every house still fronts a street. (collectFacades puts a
  // door on all four sides, so orientation is automatic.)
  const GRID2 = 4;
  for (const tier of TIERS) {
    for (const [x0, z0, x1, z1] of tier.rects) {
      const tierDistrict = tier.name === 'waterfront' ? 'harbor'
        : tier.name === 'midtown' ? 'midtown-mix'
        : 'bungalow-lanes';
      for (let gx = x0 + GRID2 / 2; gx < x1 && lots.length < MAX_LOTS; gx += GRID2) {
        for (let gz = z0 + GRID2 / 2; gz < z1 && lots.length < MAX_LOTS; gz += GRID2) {
          for (let s = 0; s < 9 && lots.length < MAX_LOTS; s++) {
            const jx = (rand() - 0.5) * GRID2 * 0.9;
            const jz = (rand() - 0.5) * GRID2 * 0.9;
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

            // Within 15m of a road centerline (AABB-to-segment, matching the test).
            let nearRoad = false;
            for (const sg of segs) {
              const dist = segRectDist(sg.x0, sg.z0, sg.x1, sg.z1, x, z, x + w, z + d);
              if (dist <= 15) { nearRoad = true; break; }
            }
            if (!nearRoad) continue;
            if (heightAt(cx, cz) < MIN_LAND_Y) continue;
            if (isInBay(x, z) || isInBay(x + w, z) || isInBay(x, z + d) || isInBay(x + w, z + d)) continue;
            const terr2 = lotTerrain(x, z, w, d);
            if (!terr2 || terr2.maxH - terr2.minH > MAX_LOT_SLOPE) continue;
            if (aabbOverlap(x, z, x + w, z + d, PARK_RECT[0], PARK_RECT[1], PARK_RECT[2], PARK_RECT[3])) continue;
            if (MANSION_GROUNDS.some(gr => aabbOverlap(x, z, x + w, z + d, gr[0], gr[1], gr[2], gr[3]))) continue;
            if (circleHitsAABB(rockX, rockZ, ROCK_R, x, z, x + w, z + d)) continue;
            if (heroBoxes.some(h => aabbOverlap(x, z, x + w, z + d, h.x0, h.z0, h.x1, h.z1))) continue;
            if (lots.some(l => aabbOverlap(x, z, x + w, z + d, l.x, l.z, l.x + l.w, l.z + l.d))) continue;
            const rx0 = x - ROAD_CLEAR_RECT, rz0 = z - ROAD_CLEAR_RECT;
            const rx1 = x + w + ROAD_CLEAR_RECT, rz1 = z + d + ROAD_CLEAR_RECT;
            if (segs.some(sg => segIntersectsAABB(sg.x0, sg.z0, sg.x1, sg.z1, rx0, rz0, rx1, rz1))) continue;

            if (tierDistrict === 'midtown-mix') midtownAccepted++;
            lots.push({
              x, z, w, d,
              h: Math.max(floors * FLOOR_H, MIN_BUILDING_H),
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
    // Base the house on the highest terrain under the footprint so terrain
    // can never poke through the walls on a slope; the visual foundation
    // (scene.ts) fills down to the lowest point.
    const terr = lotTerrain(l.x, l.z, l.w, l.d);
    const baseY = terr ? terr.maxH : heightAt(l.x + l.w / 2, l.z + l.d / 2);
    return {
      min: { x: l.x, y: baseY, z: l.z },
      max: { x: l.x + l.w, y: baseY + l.h, z: l.z + l.d },
      district: l.district,
    };
  });
}
