// Golden Gate Park-style park district layout — pure data, no three.js.
// Rendering lives in scene.ts makePark; tests pin the layout in tests/park.test.ts.
import { PARK_RECT } from './world';

export interface ParkTree { x: number; z: number; s: number }
export interface ParkPath { x0: number; z0: number; x1: number; z1: number }
export interface ParkConservatory { x: number; z: number; w: number; d: number; h: number }

const [PX0, PZ0, PX1, PZ1] = PARK_RECT;
const CX = (PX0 + PX1) / 2; // 0
const CZ = (PZ0 + PZ1) / 2; // -175

// Two tree allées along the long (x) axis, 10m either side of the center path.
export const PARK_TREES: ParkTree[] = (() => {
  const trees: ParkTree[] = [];
  let i = 0;
  for (const z of [CZ - 10, CZ + 10]) {
    for (let x = PX0 + 2.5; x <= PX1 - 2.5; x += 5) {
      const s = 0.9 + ((i * 37) % 10) / 50; // deterministic 0.9–1.08 size variation
      trees.push({ x, z, s });
      i++;
    }
  }
  return trees;
})();

// Two crossing pale-gravel paths: east-west along the center, north-south through it.
export const PARK_PATHS: ParkPath[] = [
  { x0: PX0, z0: CZ - 1.5, x1: PX1, z1: CZ + 1.5 },
  { x0: CX - 1.5, z0: PZ0, x1: CX + 1.5, z1: PZ1 },
];

// Glass conservatory centerpiece at the path crossing.
export const PARK_CONSERVATORY: ParkConservatory = { x: CX, z: CZ, w: 14, d: 9, h: 5 };

export const PARK_TIER_Y = 20;
