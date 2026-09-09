import * as THREE from 'three';
import type { GameState } from './types';
import { FURNITURE, HOME_STATIONS } from './home';
type HomeState = GameState & { homeFacing?: number; homePanel?: string; homeInteraction?: string };

const mat = (color: THREE.ColorRepresentation) => new THREE.MeshToonMaterial({ color });
const wood = mat(0x8d5436), darkWood = mat(0x4f3027), cream = mat(0xffefcf), plaster = mat(0xf5d9ae);
const teal = mat(0x197b78), ginger = mat(0xc96e37), brass = mat(0xdfa94b), leaf = mat(0x4b825d);
function box(w: number, h: number, d: number, material: THREE.Material = wood): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material); m.castShadow = m.receiveShadow = true; return m;
}
function cyl(r: number, h: number, material: THREE.Material = wood, sides = 10): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, sides), material); m.castShadow = m.receiveShadow = true; return m;
}
function add(g: THREE.Object3D, obj: THREE.Object3D, x: number, y: number, z: number): THREE.Object3D { obj.position.set(x, y, z); g.add(obj); return obj; }

/** A self-contained, deliberately cosy cut-away attic for home mode. */
export class RoomView {
  readonly group = new THREE.Group();
  private meg = new THREE.Group(); private pip = new THREE.Group(); private tail = new THREE.Group();
  private clock = 0; private disposed = false; private furniture = new Map<string, THREE.Object3D>();
  private facing = 0; private lastHome = false;

  constructor() {
    this.group.name = 'Meg attic room';
    this.makeRoom(); this.makeBasics(); this.makeStations(); this.makeMeg(); this.makePumpkin(); this.makeFurniture();
    this.group.visible = false;
  }

  update(state: GameState, dt: number, reducedMotion: boolean): void {
    if (this.disposed) return;
    const s = state as HomeState, isHome = s.mode === 'home'; this.group.visible = isHome;
    if (!isHome) { this.lastHome = false; return; }
    const step = Math.min(.05, Math.max(0, dt || .016)); this.clock += step;
    const p = s.homePosition || { x: 0, z: 0 };
    const target = new THREE.Vector3(THREE.MathUtils.clamp(p.x, -7.5, 7.5), 0, THREE.MathUtils.clamp(p.z, -5.5, 5.5));
    if (!this.lastHome) this.meg.position.copy(target); else this.meg.position.lerp(target, 1 - Math.exp(-step * 14));
    this.lastHome = true;
    const requested = s.homeFacing;
    if (typeof requested === 'number') this.facing = requested;
    else if (target.distanceToSquared(this.meg.position) > .001) this.facing = Math.atan2(target.x - this.meg.position.x, target.z - this.meg.position.z);
    this.meg.rotation.y = this.facing;
    const moving = target.distanceTo(this.meg.position) > .035;
    this.meg.children.filter(x => x.name === 'limb').forEach((limb, i) => limb.rotation.x = reducedMotion ? 0 : Math.sin(this.clock * 11 + i * Math.PI) * (moving ? .55 : .08));
    this.meg.position.y = reducedMotion ? 0 : (moving ? Math.abs(Math.sin(this.clock * 11)) * .045 : Math.sin(this.clock * 2) * .018);
    const desired = this.meg.position.clone().add(new THREE.Vector3(-Math.sin(this.facing) * 1.25, 0, -Math.cos(this.facing) * 1.25));
    desired.x = THREE.MathUtils.clamp(desired.x, -7.3, 7.3); desired.z = THREE.MathUtils.clamp(desired.z, -5.3, 5.3);
    this.pip.position.lerp(desired, 1 - Math.exp(-step * 4)); this.pip.lookAt(this.meg.position.x, 0, this.meg.position.z);
    const nearCat = this.meg.position.distanceToSquared(new THREE.Vector3(4, 0, 3)) < 2.7;
    this.pip.position.y = !reducedMotion && nearCat ? Math.sin(this.clock * 6) * .075 : 0;
    this.tail.rotation.z = !reducedMotion ? Math.sin(this.clock * (nearCat ? 5 : 2)) * .34 : .12;
    this.furniture.forEach((object, id) => object.visible = s.profile.furniture.includes(id));
  }

  dispose(): void {
    if (this.disposed) return; this.disposed = true;
    const geometries = new Set<THREE.BufferGeometry>(), materials = new Set<THREE.Material>(), textures = new Set<THREE.Texture>();
    this.group.traverse(o => { const mesh = o as THREE.Mesh; if (mesh.geometry) geometries.add(mesh.geometry); const ms = mesh.material ? (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) : []; ms.forEach(m => { materials.add(m); Object.values(m).forEach(v => { if (v instanceof THREE.Texture) textures.add(v); }); }); });
    geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); textures.forEach(t => t.dispose()); this.group.clear();
  }

  private makeRoom(): void {
    const floor = box(18, .25, 14, wood); add(this.group, floor, 0, -.13, 0);
    // alternating boards make the floor read as timber without a texture asset
    for (let z = -6; z <= 6; z += 1) { const seam = box(17.8, .012, .035, darkWood); add(this.group, seam, 0, .01, z + .5); }
    const back = box(18, 8, .22, plaster); add(this.group, back, 0, 4, -7);
    const left = box(.22, 8, 14, plaster); add(this.group, left, 4, 4, 0); // cutaway's left wall sits beyond the playable floor edge
    left.position.x = -9;
    for (const [x, z, w, d] of [[-8.65, 0, .34, 14], [0, -6.65, 18, .34], [0, -3.9, 18, .25]] as number[][]) add(this.group, box(w, .28, d, darkWood), x, 7.55, z);
    for (const x of [-8.4, -4.4, 0, 4.4, 8.4]) { const beam = box(.32, 7.6, .35, darkWood); beam.rotation.z = x / 34; add(this.group, beam, x, 3.8, -6.75); }
    this.makeWindow();
  }

  private makeWindow(): void {
    const g = new THREE.Group(); add(this.group, g, 2.3, 4.7, -6.78);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 2.45), new THREE.MeshBasicMaterial({ color: 0xffcf8d })); glow.position.z = .02; g.add(glow);
    for (const [x, y, w, h] of [[0, 0, 3.45, .17], [0, 0, .16, 2.6], [-1.65, 0, .16, 2.6], [1.65, 0, .16, 2.6], [0, 1.22, 3.45, .16]] as number[][]) add(g, box(w, h, .12, darkWood), x, y, .08);
    for (const x of [-2, 2]) { const curtain = new THREE.Mesh(new THREE.CylinderGeometry(.45, .56, 2.65, 8), mat(0x8299a8)); curtain.scale.z = .28; add(g, curtain, x, 0, .22); }
    const sill = box(4.5, .18, .55, wood); add(g, sill, 0, -1.38, .32);
  }

  private makeBasics(): void {
    // Bed: warm quilt, headboard, pillow and stout legs at the back right.
    const bed = new THREE.Group(); add(this.group, bed, 5.8, 0, 4.65);
    add(bed, box(4.2, .35, 2.6, darkWood), 0, .55, 0); add(bed, box(4, .32, 2.35, mat(0x9c6374)), 0, .9, 0);
    add(bed, box(4.25, 2.25, .22, darkWood), 0, 1.5, 1.16); add(bed, box(1.55, .26, .8, cream), -.9, 1.2, -.55);
    [[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(([x,z]) => add(bed, cyl(.12,.65,darkWood), x,.25,z));
    // Desk / mail station
    const desk = new THREE.Group(); add(this.group, desk, -5, 0, -3);
    add(desk, box(3.3, .22, 1.55, wood), 0, 1.75, 0); [-1.35,1.35].forEach(x => [-.58,.58].forEach(z => add(desk, cyl(.11,1.7,darkWood),x,.85,z)));
    add(desk, box(.9, .72, 1.15, darkWood), -1.05, 1.25, 0); add(desk, box(.62,.12,.88, mat(0xf3dfad)), .55, 1.93, .03);
    const stool = new THREE.Group(); add(this.group, stool, -4.2, 0, -1.45); add(stool,cyl(.48,.16,mat(0x6f9da1)),0,1,0); add(stool,cyl(.13,1,darkWood),0,.5,0);
  }

  private makeStations(): void {
    // broom rack, a home catalogue pedestal, and the cat's designated sun cushion
    const rack = new THREE.Group(); add(this.group, rack, 5, 0, -3); add(rack, box(2.2,.16,.46,darkWood),0,2.55,0); [-.75,0,.75].forEach(x => { const broom = cyl(.06,2.35,wood); broom.rotation.z = -.16 + x*.1; add(rack,broom,x,1.25,0); add(rack,new THREE.Mesh(new THREE.ConeGeometry(.29,.52,7),ginger),x-.14,.28,0); });
    const catalogue = new THREE.Group(); add(this.group,catalogue,-5,0,3); add(catalogue,cyl(.48,1.15,darkWood),0,.58,0); add(catalogue,box(1.25,.14,.9,mat(0x5c8e86)),0,1.2,0); catalogue.rotation.y=-.25;
    const spot = new THREE.Mesh(new THREE.CylinderGeometry(1.15,1.3,.16,16),mat(0xd9a17f)); add(this.group,spot,4,.08,3);
    HOME_STATIONS.forEach(s => this.group.add(this.label(s.id === 'jobs' ? 'POST' : s.id === 'decor' ? 'HOME' : s.id.toUpperCase(), s.x, 3.3, s.z)));
  }

  private makeMeg(): void {
    const g = this.meg; g.name = 'Meg'; this.group.add(g);
    add(g, new THREE.Mesh(new THREE.SphereGeometry(.34, 12, 10), mat(0xffc39e)), 0, 1.52, 0);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(.38,12,10,0,Math.PI*2,0,Math.PI*.55), mat(0x8e432b)); add(g,hair,0,1.7,.01);
    const hat = new THREE.Group(); add(g,hat,0,1.94,0); add(hat,new THREE.Mesh(new THREE.CylinderGeometry(.48,.48,.12,12),mat(0x45304d)),0,0,0); const cone = new THREE.Mesh(new THREE.ConeGeometry(.3,.82,12),mat(0x45304d)); cone.rotation.z=-.18; add(hat,cone,.06,.39,0);
    add(g,new THREE.Mesh(new THREE.ConeGeometry(.48,1.05,12),teal),0,.84,0);
    for (const [x,z] of [[-.22,.08],[.22,.08]] as number[][]) { const leg=cyl(.09,.55,darkWood); leg.name='limb'; add(g,leg,x,.3,z); const arm=cyl(.075,.58,mat(0xffc39e)); arm.name='limb'; arm.rotation.z=x*1.8; add(g,arm,x*1.5,1.06,0); }
  }

  private makePumpkin(): void {
    const g=this.pip; g.name='Pumpkin'; this.group.add(g); add(g,new THREE.Mesh(new THREE.SphereGeometry(.43,12,9),cream),0,.48,0); add(g,new THREE.Mesh(new THREE.SphereGeometry(.34,12,9),cream),0,.76,.28);
    for(const x of [-.2,.2]) { const ear=new THREE.Mesh(new THREE.ConeGeometry(.16,.36,4),ginger); add(g,ear,x,1.12,.26); const eye=new THREE.Mesh(new THREE.SphereGeometry(.045,8,6),mat(0x2c2730)); add(g,eye,x*.72,.8,.59); }
    const stripe=box(.18,.42,.08,ginger); stripe.rotation.z=Math.PI/2; add(g,stripe,0,.86,.58);
    const tailRoot=new THREE.Group(); this.tail=tailRoot; add(g,tailRoot,0,.51,-.38); const tail=new THREE.Mesh(new THREE.TorusGeometry(.34,.07,6,12,Math.PI*1.4),ginger); tail.rotation.x=Math.PI/2; add(tailRoot,tail,0,.36,-.22);
  }

  private makeFurniture(): void {
    const put=(id:string,x:number,z:number, build:()=>THREE.Object3D) => { const o=build(); o.position.set(x,0,z); o.visible=false; this.group.add(o); this.furniture.set(id,o); };
    put('rug',0,-.2,()=>{ const m=new THREE.Mesh(new THREE.CylinderGeometry(2.1,2.1,.05,20),mat(0x72918d)); m.position.y=.035; return m; });
    put('plant',-7,4.6,()=>{ const g=new THREE.Group(); add(g,cyl(.38,.7,mat(0xca8b55)),0,.35,0); for(let i=0;i<6;i++){const l=new THREE.Mesh(new THREE.SphereGeometry(.35,8,6),leaf); add(g,l,Math.sin(i)*.28,1+Math.abs(Math.cos(i))*.25,Math.cos(i)*.28);} return g; });
    put('shelf',-7.7,-2.2,()=>{const g=new THREE.Group(); add(g,box(.55,3.1,2.2,darkWood),0,1.55,0); for(let y=.6;y<3;y+=.75)add(g,box(.7,.1,2.1,wood),0,y,0); return g;});
    put('lamp',1.8,-4.8,()=>{const g=new THREE.Group(); add(g,cyl(.1,2.2,brass),0,1.1,0); const shade=new THREE.Mesh(new THREE.ConeGeometry(.52,.48,12,1,true),cream); add(g,shade,0,2.1,0); return g;});
    put('cushion',1.4,3.5,()=>{const m=new THREE.Mesh(new THREE.SphereGeometry(.6,12,7),mat(0xd37586)); m.scale.y=.32; m.position.y=.18; return m;});
    put('cat-tree',7,2.5,()=>{const g=new THREE.Group(); add(g,cyl(.17,2.5,mat(0xcfae79)),0,1.25,0); add(g,cyl(.72,.16,mat(0xcf9c67)),0,2.45,0); return g;});
    void FURNITURE;
  }

  private label(text: string, x: number, y: number, z: number): THREE.Sprite {
    const canvas=document.createElement('canvas'); canvas.width=256; canvas.height=92; const c=canvas.getContext('2d')!;
    c.fillStyle='#3f2b35'; c.roundRect(4,4,248,84,18); c.fill(); c.strokeStyle='#f7d688'; c.lineWidth=5; c.roundRect(4,4,248,84,18); c.stroke(); c.fillStyle='#fff3cf'; c.font='bold 36px sans-serif'; c.textAlign='center'; c.textBaseline='middle'; c.fillText(text,128,48);
    const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(canvas),transparent:true})); sprite.position.set(x,y,z); sprite.scale.set(1.7,.62,1); return sprite;
  }
}
