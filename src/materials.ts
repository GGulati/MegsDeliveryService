import * as THREE from 'three';
import { grainSpeckles, GRAIN_SEED, GRAIN_SIZE } from './grain';

// Shared toon materials (extracted from scene.ts for reuse by life.ts).
export function toon(color: THREE.ColorRepresentation): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({ color, map: grainTexture(), gradientMap: gradientTexture() });
}

let grain: THREE.CanvasTexture | undefined, gradient: THREE.CanvasTexture | undefined;
function grainTexture(): THREE.CanvasTexture {
  if (grain) return grain;
  const c = document.createElement('canvas');
  c.width = c.height = GRAIN_SIZE;
  const x = c.getContext('2d')!;
  x.fillStyle = 'rgba(255,255,255,.9)';
  x.fillRect(0, 0, GRAIN_SIZE, GRAIN_SIZE);
  for (const s of grainSpeckles(GRAIN_SEED)) {
    x.fillStyle = `rgba(85,55,45,${s.alpha})`;
    x.fillRect(s.x, s.y, 1, 1);
  }
  grain = new THREE.CanvasTexture(c);
  grain.colorSpace = THREE.SRGBColorSpace;
  grain.wrapS = grain.wrapT = THREE.RepeatWrapping;
  return grain;
}
function gradientTexture(): THREE.CanvasTexture {
  if (gradient) return gradient;
  const c = document.createElement('canvas');
  c.width = 1; c.height = 3;
  const x = c.getContext('2d')!;
  x.fillStyle = '#202020'; x.fillRect(0, 0, 1, 1);
  x.fillStyle = '#9a9a9a'; x.fillRect(0, 1, 1, 1);
  x.fillStyle = '#fff'; x.fillRect(0, 2, 1, 1);
  gradient = new THREE.CanvasTexture(c);
  gradient.minFilter = gradient.magFilter = THREE.NearestFilter;
  return gradient;
}
