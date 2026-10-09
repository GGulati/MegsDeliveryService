import * as THREE from 'three';

export interface PumpkinTarget { x: number; z: number; }

/** Named perch spots for Pumpkin around the attic. Coordinates match the
 * furniture layout in room.ts (cat-tree, cushion) plus the cat station. */
export const PUMPKIN_PERCHES = {
  catTree: { x: 7, z: 2.5 },
  cushion: { x: 1.4, z: 3.5 },
  floor: { x: 4, z: 3 },
} as const;

/** Pumpkin the cat: low-poly mesh (body + head + ears + tail, matching the
 * game's toon style) with smooth target-seeking movement. When no target is
 * set, Pumpkin idles with a subtle bob. */
export class Pumpkin {
  readonly group = new THREE.Group();
  private target: PumpkinTarget | null = null;
  private clock = 0;
  private tail: THREE.Group;

  constructor() {
    const cream = new THREE.MeshToonMaterial({ color: 0xffefcf });
    const ginger = new THREE.MeshToonMaterial({ color: 0xc96e37 });
    const dark = new THREE.MeshToonMaterial({ color: 0x2c2730 });
    const add = (obj: THREE.Object3D, x: number, y: number, z: number): THREE.Object3D => {
      obj.position.set(x, y, z); this.group.add(obj); return obj;
    };
    const sph = (r: number, m: THREE.Material): THREE.Mesh => {
      const s = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 9), m);
      s.castShadow = true; return s;
    };
    add(sph(.43, cream), 0, .48, 0); // body
    add(sph(.34, cream), 0, .76, .28); // head
    for (const x of [-.2, .2]) {
      add(new THREE.Mesh(new THREE.ConeGeometry(.16, .36, 4), ginger), x, 1.12, .26); // ears
      add(new THREE.Mesh(new THREE.SphereGeometry(.045, 8, 6), dark), x * .72, .8, .59); // eyes
    }
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(.18, .42, .08), ginger);
    stripe.rotation.z = Math.PI / 2; add(stripe, 0, .86, .58);
    const tailRoot = new THREE.Group(); this.tail = tailRoot; add(tailRoot, 0, .51, -.38);
    const tailMesh = new THREE.Mesh(new THREE.TorusGeometry(.34, .07, 6, 12, Math.PI * 1.4), ginger);
    tailMesh.rotation.x = Math.PI / 2; tailMesh.position.set(0, .36, -.22); tailRoot.add(tailMesh);
    this.group.name = 'Pumpkin';
  }

  setTarget(t: PumpkinTarget | null): void { this.target = t; }

  /** Advance the cat one step. Pass a target to walk toward it (~2 m/s, no
   * overshoot, faces the direction of travel); omit it to idle in place.
   * `wag` scales the tail-wag speed. */
  update(dt: number, target?: PumpkinTarget | null, wag = 2.5): void {
    if (target !== undefined) this.target = target;
    const step = Math.max(0, dt || 0);
    this.clock += step;
    const t = this.target;
    if (t) {
      const dx = t.x - this.group.position.x, dz = t.z - this.group.position.z;
      const dist = Math.hypot(dx, dz);
      if (dist > .02) {
        const move = Math.min(dist, 2 * step);
        this.group.position.x += (dx / dist) * move;
        this.group.position.z += (dz / dist) * move;
        this.group.rotation.y = Math.atan2(dx, dz);
      }
    } else {
      this.group.position.y = Math.sin(this.clock * 2) * .018;
    }
    this.tail.rotation.z = Math.sin(this.clock * wag) * .3;
  }
}

export function createPumpkin(): Pumpkin { return new Pumpkin(); }

export function updatePumpkin(p: Pumpkin, dt: number, target?: PumpkinTarget | null): void {
  p.update(dt, target);
}

export function pumpkinPosition(p: Pumpkin): { x: number; y: number; z: number } {
  const v = p.group.position;
  return { x: v.x, y: v.y, z: v.z };
}
