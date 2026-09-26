import * as THREE from 'three';
import { BAY_SHORE } from './world';

/** Builds the bay water shape from the shoreline polygon.
 *  ShapeGeometry is built in the XY plane; scene.ts renders it with
 *  rotation.x=-PI/2, which maps shape-Y to world -Z. So shape-Y must be -z,
 *  otherwise the rendered bay mirrors north-south and disagrees with isInBay. */
export function buildBayShape(): THREE.Shape {
  return new THREE.Shape(BAY_SHORE.map(([x, z]) => new THREE.Vector2(x, -z)));
}
