import type { Solid, Stop } from './types';

export const WORLD_LIMIT = 175;

// The pads are deliberately separated by broad streets: they are landmarks, not gates.
export const STOPS: Stop[] = [
  { id: 'home', name: "Meg's Rooftop", subtitle: 'Home pad', position: { x: 0, y: 18, z: 110 }, color: '#f9cf68' },
  { id: 'harbor-cafe', name: 'Harbor Cafe', subtitle: 'Tutorial delivery', position: { x: 0, y: 18, z: 55 }, color: '#63c7dc' },
  { id: 'market', name: 'Sunset Market', subtitle: 'Fresh parcels', position: { x: -72, y: 23, z: 42 }, color: '#e88869' },
  { id: 'lighthouse', name: 'Beacon House', subtitle: 'North overlook', position: { x: 82, y: 28, z: -44 }, color: '#f4e5b8' },
  { id: 'marina', name: 'Marina Works', subtitle: 'Dockside roof', position: { x: -98, y: 20, z: -76 }, color: '#79b9a0' },
  { id: 'observatory', name: 'Hill Observatory', subtitle: 'East hill pad', position: { x: 112, y: 33, z: 76 }, color: '#ad91d1' },
  { id: 'cliffside', name: 'Cliffside Books', subtitle: 'West avenue', position: { x: -130, y: 26, z: 116 }, color: '#db92a7' },
];

// These are the destination buildings only. Rendering may decorate the rest of the island
// freely, but collision and the visible rooftops share this small, intentional set.
export const SOLIDS: Solid[] = [
  { min: { x: -16, y: 3, z: 94 }, max: { x: 16, y: 16, z: 126 } },
  { min: { x: -14, y: 3, z: 41 }, max: { x: 14, y: 16, z: 69 } },
  { min: { x: -87, y: 3, z: 28 }, max: { x: -57, y: 21, z: 56 } },
  { min: { x: 68, y: 3, z: -58 }, max: { x: 96, y: 26, z: -30 } },
  { min: { x: -113, y: 3, z: -91 }, max: { x: -83, y: 18, z: -61 } },
  { min: { x: 97, y: 3, z: 61 }, max: { x: 127, y: 31, z: 91 } },
  { min: { x: -145, y: 3, z: 101 }, max: { x: -115, y: 24, z: 131 } },
];
