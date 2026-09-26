import * as THREE from 'three';
import { BAY_SHORE } from './world';

/** Builds the bay water shape from the shoreline polygon.
 *  ShapeGeometry is built in the XY plane; scene.ts renders it with
 *  rotation.x=-PI/2, which maps shape-Y to world -Z. So shape-Y must be -z,
 *  otherwise the rendered bay mirrors north-south and disagrees with isInBay. */
export function buildBayShape(): THREE.Shape {
  return new THREE.Shape(BAY_SHORE.map(([x, z]) => new THREE.Vector2(x, -z)));
}

/** Builds the sand rim: the shoreline pushed outward from the bay centroid. */
export function buildBaySandShape(): THREE.Shape {
  const cx = BAY_SHORE.reduce((a, p) => a + p[0], 0) / BAY_SHORE.length;
  const cz = BAY_SHORE.reduce((a, p) => a + p[1], 0) / BAY_SHORE.length;
  return new THREE.Shape(
    BAY_SHORE.map(([x, z]) => {
      const dx = x - cx, dz = z - cz, d = Math.hypot(dx, dz) || 1;
      return new THREE.Vector2(x + (dx / d) * 7, -(z + (dz / d) * 7));
    }),
  );
}
