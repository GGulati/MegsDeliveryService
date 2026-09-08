import * as THREE from 'three';
import type { GameState, RenderSettings, Stop, Vec3 } from './types';
import { STOPS, SOLIDS, WORLD_LIMIT } from './world';
import { followHeading, modelRotation } from './camera-motion';

/** The deliberately self contained little world that sits behind the DOM game UI. */
export class GameRenderer {
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(62, 1, .1, 900);
  private renderer: THREE.WebGLRenderer;
  private hero = new THREE.Group();
  private targetRing = new THREE.Group();
  private clouds = new THREE.Group();
  private birds = new THREE.Group();
  private clock = 0;
  private camPos = new THREE.Vector3(0, 27, 145);
  private camLook = new THREE.Vector3(0, 18, 90);
  private ray = new THREE.Raycaster();
  private blockers: THREE.Object3D[] = [];
  private outlines: THREE.Mesh[] = [];
  private sun: THREE.DirectionalLight;
  private disposed = false;
  private lastMode: GameState['mode'] | undefined;
  private lastWidth = -1;
  private lastHeight = -1;
  private lastPixelRatio = -1;
  private followYaw = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.setClearColor(0xaed9e8);
    this.scene.fog = new THREE.FogExp2(0xb9dce0, .0035);
    this.camera.position.copy(this.camPos);

    const hemi = new THREE.HemisphereLight(0xd9f1ff, 0xc77f78, 2.35);
    this.scene.add(hemi);
    this.sun = new THREE.DirectionalLight(0xffd1a0, 2.5);
    this.sun.position.set(-80, 115, 48);
    this.scene.add(this.sun);
    this.scene.add(this.makeWorld(), this.hero, this.targetRing, this.clouds, this.birds);
    this.makeHero(); this.makeSkyLife(); this.resize();
  }

  resize(): void {
    // The next render owns the quality-dependent backing-store dimensions.
    this.lastWidth = -1;
  }

  render(state: GameState, dt: number, settings: RenderSettings): void {
    if (this.disposed) return;
    const step = Math.min(.05, Math.max(0, dt || .016)); this.clock += step;
    const canvas = this.renderer.domElement;
    const w = Math.max(1, canvas.clientWidth || canvas.width), h = Math.max(1, canvas.clientHeight || canvas.height);
    const maxPixels = settings.lowQuality ? 1_000_000 : 2_000_000;
    const pixelRatio = Math.min(devicePixelRatio || 1, Math.sqrt(maxPixels / (w * h)));
    if (w !== this.lastWidth || h !== this.lastHeight || pixelRatio !== this.lastPixelRatio) {
      this.renderer.setPixelRatio(pixelRatio);
      this.renderer.setSize(w, h, false);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.lastWidth = w; this.lastHeight = h; this.lastPixelRatio = pixelRatio;
    }
    this.renderer.shadowMap.enabled = !settings.lowQuality;
    this.outlines.forEach(outline => { outline.visible = !settings.lowQuality; });

    const p = state.player.position;
    const player = new THREE.Vector3(p.x, p.y, p.z);
    const snap = this.lastMode === undefined || this.lastMode !== state.mode;
    if (snap) this.hero.position.copy(player);
    else this.hero.position.lerp(player, 1 - Math.exp(-step * 13));
    this.hero.rotation.order = 'YXZ';
    this.hero.rotation.y = modelRotation(state.player.yaw);
    this.hero.rotation.x = state.player.pitch * .4;
    this.hero.rotation.z = 0;
    this.hero.scale.setScalar(state.mode === 'title' || state.mode === 'summary' ? .86 : .62);
    const bob = settings.reducedMotion ? 0 : (state.mode === 'title' || state.mode === 'summary') ? Math.sin(this.clock * 1.5) * .35 : Math.sin(this.clock * 7) * .10;
    this.hero.position.y += bob;
    this.animateSky(settings.reducedMotion);
    this.updateBeacon(this.destination(state), step);
    this.updateCamera(state, player, step, settings.reducedMotion, snap);
    this.lastMode = state.mode;
    const dusk = state.run ? Math.min(1, state.run.elapsed / 360) : .1;
    this.sun.color.setHSL(.095 - dusk * .08, .9, .78); this.sun.intensity = 2.5 - dusk * .45;
    (this.scene.fog as THREE.FogExp2).color.setHSL(.55 - dusk * .48, .42, .82 - dusk * .12);
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.disposed = true;
    this.scene.traverse(o => { const m = o as THREE.Mesh; if (m.geometry) m.geometry.dispose(); const mat = m.material as THREE.Material | THREE.Material[]; (Array.isArray(mat) ? mat : [mat]).forEach(x => x?.dispose()); });
    this.renderer.dispose();
  }

  private makeWorld(): THREE.Group {
    const g = new THREE.Group();
    const groundMat = toon(0xf1d79d), roadMat = toon(0xffedc4), waterMat = toon(0x6abdc7);
    const water = new THREE.Mesh(new THREE.CircleGeometry(WORLD_LIMIT * 1.18, 72), waterMat); water.rotation.x = -Math.PI / 2; water.position.y = -1.4; g.add(water);
    const island = new THREE.Mesh(new THREE.CylinderGeometry(190, 198, 2.7, 72), groundMat); island.position.y = -1.2; g.add(island);
    // Curving pale paths are tubes so they remain charming from the chase camera.
    [[[-160,0,-95],[-70,0,-12],[0,0,13],[78,0,45],[160,0,100]], [[-140,0,110],[-50,0,62],[0,0,55],[20,0,-25],[95,0,-125]]].forEach(points => {
      const curve = new THREE.CatmullRomCurve3(points.map(a => new THREE.Vector3(a[0], .18, a[2])));
      g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, 2.8, 8, false), roadMat));
    });
    const harbor = new THREE.Mesh(new THREE.CircleGeometry(45, 40), toon(0x51b4c2)); harbor.rotation.x = -Math.PI / 2; harbor.position.set(118, .22, -108); g.add(harbor);
    for (let i = 0; i < 4; i++) { const dock = new THREE.Mesh(new THREE.BoxGeometry(8, .7, 26), toon(0x9a6147)); dock.position.set(93 + i * 12, .8, -101); g.add(dock); }
    this.makeBuildings(g); this.makeGreenery(g); this.makeLighthouse(g);
    return g;
  }

  private makeBuildings(g: THREE.Group): void {
    const palette = [0xf8d8ad, 0x78b9ae, 0x80516c, 0xf3b16b, 0xdce2c5];
    SOLIDS.forEach((s, i) => {
      const sx = s.max.x - s.min.x, sy = s.max.y - s.min.y, sz = s.max.z - s.min.z;
      const body = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), toon(palette[i % palette.length]));
      body.position.set((s.min.x+s.max.x)/2, (s.min.y+s.max.y)/2, (s.min.z+s.max.z)/2); body.castShadow = true; body.receiveShadow = true;
      g.add(body); this.blockers.push(body);
      // Facade trim only protrudes a few centimetres and never changes collision silhouette meaningfully.
      // Keep the charming roof profile inside the simulation's collision ceiling.
      const roofHeight = Math.min(3, sy * .18);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(sx, sz) * .76, roofHeight, 4), toon(i % 2 ? 0xbf694f : 0xa94d43));
      roof.position.set(body.position.x, s.max.y - roofHeight / 2, body.position.z); roof.rotation.y = Math.PI / 4; g.add(roof);
      const frontZ = s.min.z - .035;
      for (let x = -.26; x <= .26; x += .52) {
        const win = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(2.5, sx*.24), Math.min(2.5, sy*.22)), toon(0x4b8ca0));
        win.position.set(body.position.x + sx*x, body.position.y + sy*.08, frontZ); g.add(win);
        const awning = new THREE.Mesh(new THREE.BoxGeometry(Math.min(3, sx*.3), .28, .8), toon(0xf7d7a8)); awning.position.set(win.position.x, win.position.y + 1.5, frontZ-.32); g.add(awning);
      }
    });
  }

  private makeGreenery(g: THREE.Group): void {
    const trunk = toon(0x744a36), leaf = toon(0x4d976b), flower = toon(0xff8baa);
    for (let i=0;i<72;i++) { const a=i*2.399, r=42+(i%9)*15; const x=Math.cos(a)*r, z=Math.sin(a)*r;
      if (Math.abs(x)<18 && z>25 && z<120) continue;
      const t=new THREE.Group(); const h=3+(i%3)*1.4;
      const b=new THREE.Mesh(new THREE.CylinderGeometry(.35,.55,h,7),trunk); b.position.y=h/2; t.add(b);
      const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(2.2+(i%2),1),leaf); crown.position.y=h+1.5;t.add(crown); t.position.set(x,0,z);g.add(t);
      if(i%3===0){const f=new THREE.Mesh(new THREE.SphereGeometry(.28,7,6),flower);f.position.set(x+.8,.5,z+.6);g.add(f);}
    }
  }

  private makeLighthouse(g: THREE.Group): void {
    // A remote sea-stack landmark: visible in the panorama, never a surprise in a flight lane.
    const x=-202,z=-135; const tower=new THREE.Mesh(new THREE.CylinderGeometry(3.5,5.2,22,16),toon(0xfff0d4));tower.position.set(x,11,z);g.add(tower);
    const cap=new THREE.Mesh(new THREE.CylinderGeometry(4.4,4.4,2.2,16),toon(0xc9534e));cap.position.set(x,23,z);g.add(cap);
    const beam=new THREE.PointLight(0xffdc92,3,60);beam.position.set(x,24,z);g.add(beam);
    for(let y=5;y<21;y+=5){const stripe=new THREE.Mesh(new THREE.CylinderGeometry(4.2,5,1.4,16),toon(0xd25c51));stripe.position.set(x,y,z);g.add(stripe);}
  }

  private makeHero(): void {
    const outline = new THREE.MeshBasicMaterial({ color: 0x392b3d, side: THREE.BackSide });
    const add = (geo: THREE.BufferGeometry, material: THREE.Material, pos: Vec3, scale?: Vec3) => {
      const m=new THREE.Mesh(geo,material);m.position.set(pos.x,pos.y,pos.z); if(scale)m.scale.set(scale.x,scale.y,scale.z);this.hero.add(m);
      const o=new THREE.Mesh(geo,outline);o.scale.setScalar(1.045);m.add(o); this.outlines.push(o); return m;
    };
    // An unmistakable side-saddle broom: a long warm wood shaft, handle curl, binding,
    // and a broad straw fan behind Pip.  At yaw 0 Meg travels toward -Z.
    const shaft=add(new THREE.CylinderGeometry(.16,.21,8.6,10),toon(0x855039),{x:0,y:.15,z:.35}); shaft.rotation.x=Math.PI/2;
    const handle=add(new THREE.TorusGeometry(.62,.105,7,14,Math.PI*1.25),toon(0x79422f),{x:0,y:.58,z:-4.05}); handle.rotation.z=Math.PI*.18;
    [3.0,3.3].forEach(z => add(new THREE.TorusGeometry(.34,.10,6,12),toon(0x55332e),{x:0,y:.15,z}));
    // individual asymmetric reeds make the rear read as straw rather than a cone
    for(let i=0;i<21;i++){const f=(i-10)/10;const curve=new THREE.LineCurve3(new THREE.Vector3(f*.25,.15,3),new THREE.Vector3(f*1.5,-.05+Math.cos(i)*.16,5.8-Math.abs(f)*.35));add(new THREE.TubeGeometry(curve,1,.11,5,false),toon(i%2?0xd3a35a:0xf0c978),{x:0,y:0,z:0});}
    add(new THREE.ConeGeometry(1.75,4.3,9),toon(0x176e76),{x:0,y:4.0,z:-.25});
    add(new THREE.SphereGeometry(1.15,14,10),toon(0xffc6a3),{x:0,y:6.5,z:-.35});
    add(new THREE.ConeGeometry(2.05,4.6,11),toon(0x254958),{x:0,y:9.0,z:-.35});
    add(new THREE.TorusGeometry(1.55,.28,7,16),toon(0x254958),{x:0,y:7.25,z:-.35},{x:1,y:1,z:1}).rotation.x=Math.PI/2;
    // Bent booted legs visibly hug either side of the broom instead of leaving Meg standing on it.
    [-1,1].forEach(side=>{const thigh=add(new THREE.CylinderGeometry(.34,.48,2.2,7),toon(0x254958),{x:side*.72,y:2.35,z:.05});thigh.rotation.z=side*.36;const shin=add(new THREE.CylinderGeometry(.28,.35,1.75,7),toon(0x254958),{x:side*1.12,y:1.15,z:-.08});shin.rotation.z=-side*.62;const boot=add(new THREE.SphereGeometry(.46,8,7),toon(0x573934),{x:side*1.48,y:.52,z:-.47},{x:1,y:.65,z:1.45});});
    // Auburn curls, two bright eyes, and a smile make the tiny pilot read at distance.
    [-.75,-.38,.38,.75].forEach((x,i)=>add(new THREE.SphereGeometry(.45,8,7),toon(0x9d4d32),{x,y:6.75-(i%2)*.42,z:-1.15}));
    [-.4,.4].forEach(x=>add(new THREE.SphereGeometry(.14,8,7),toon(0x263842),{x,y:6.65,z:-1.43}));
    const cat=toon(0xf2d6af); add(new THREE.SphereGeometry(1.02,12,9),cat,{x:0,y:2.0,z:1.48}); add(new THREE.SphereGeometry(.78,12,9),cat,{x:0,y:2.78,z:2.08});
    [-.48,.48].forEach(x=>add(new THREE.ConeGeometry(.38,.78,3),toon(0xe0a36c),{x,y:3.55,z:2.2}));
    [-.26,.26].forEach(x=>add(new THREE.SphereGeometry(.12,7,6),toon(0x274151),{x,y:2.88,z:2.88}));
    const tail=add(new THREE.TorusGeometry(1.0,.17,7,12,Math.PI*.8),toon(0xf2d6af),{x:0,y:2,z:.95});tail.rotation.x=Math.PI/2;
  }

  private makeSkyLife(): void {
    const cloudMat=toon(0xfffbeb); for(let i=0;i<12;i++){const c=new THREE.Group();for(let j=0;j<4;j++){const p=new THREE.Mesh(new THREE.SphereGeometry(3+j%2*1.5,10,7),cloudMat);p.position.set(j*3,Math.sin(j)*.8,0);c.add(p);}c.position.set(-190+(i*47)%380,38+(i%4)*16,-155+(i*71)%320);this.clouds.add(c);}
    const birdMat=toon(0x583d50);for(let i=0;i<9;i++){const b=new THREE.Group();[-1,1].forEach(s=>{const wing=new THREE.Mesh(new THREE.ConeGeometry(.65,2,3),birdMat);wing.rotation.z=s*.9;wing.position.x=s*.55;b.add(wing)});b.position.set(-80+i*16,34+i%3*4,-45-i*11);this.birds.add(b);}
  }

  private animateSky(reduced: boolean): void { if(reduced)return; this.clouds.children.forEach((c,i)=>{c.position.x+=.012*(1+i%3);if(c.position.x>205)c.position.x=-205;});this.birds.children.forEach((b,i)=>{b.position.x+=.035;b.rotation.z=Math.sin(this.clock*5+i)*.18;}); }
  private destination(state: GameState): Stop | undefined {
    if(state.mode==='tutorial') return STOPS.find(s=>s.position.z===55) || STOPS[1];
    const id=state.run?.returning ? state.run.job?.from : state.run?.job?.to;
    return STOPS.find(s=>s.id===id) || STOPS.find(s=>s.position.z===110) || STOPS[0];
  }
  private updateBeacon(stop: Stop | undefined, step:number): void { if(!stop)return; this.targetRing.position.set(stop.position.x, Math.max(3,stop.position.y+.6),stop.position.z);this.targetRing.rotation.y+=step*.8;if(!this.targetRing.children.length){const ring=new THREE.Mesh(new THREE.TorusGeometry(4.5,.25,8,28),toon(0xffe49b));ring.rotation.x=Math.PI/2;this.targetRing.add(ring);const beam=new THREE.Mesh(new THREE.CylinderGeometry(.08,.26,8,8,1,true),new THREE.MeshBasicMaterial({color:0xffe8a2,transparent:true,opacity:.16,depthWrite:false,side:THREE.DoubleSide}));beam.position.y=4;this.targetRing.add(beam);}}
  private updateCamera(state: GameState, player: THREE.Vector3, step: number, reduced: boolean, snap: boolean): void {
    let wanted:THREE.Vector3, look:THREE.Vector3;
    if(state.mode==='title'||state.mode==='summary'){const a=reduced ? 0 : this.clock*.035;wanted=new THREE.Vector3(-92+Math.sin(a)*8,48,146+Math.cos(a)*7);look=new THREE.Vector3(18,13,65);}
    else {this.followYaw=snap?state.player.yaw:followHeading(this.followYaw,state.player.yaw,step);const yaw=this.followYaw;const behind=new THREE.Vector3(-Math.sin(yaw)*26,12,Math.cos(yaw)*26);wanted=player.clone().add(behind);look=player.clone().add(new THREE.Vector3(Math.sin(yaw)*5,2,-Math.cos(yaw)*5));
      const start=player.clone().add(new THREE.Vector3(0,2,0)); const dir=wanted.clone().sub(start), dist=dir.length();
      this.blockers.forEach(blocker => blocker.updateWorldMatrix(true, false));
      this.ray.set(start,dir.normalize());const hit=this.ray.intersectObjects(this.blockers,false)[0];if(hit&&hit.distance<dist)wanted.copy(start).add(dir.setLength(Math.max(7,hit.distance-1)));}
    // Translation tracks the broom; only heading eases. The horizon never banks with it.
    this.camPos.copy(wanted);this.camLook.copy(look);this.camera.position.copy(this.camPos);this.camera.up.set(0,1,0);this.camera.lookAt(this.camLook);
  }
}

function toon(color: THREE.ColorRepresentation): THREE.MeshToonMaterial { return new THREE.MeshToonMaterial({color, map: grainTexture(), gradientMap: gradientTexture()}); }
let grain:THREE.CanvasTexture|undefined, gradient:THREE.CanvasTexture|undefined;
function grainTexture(): THREE.CanvasTexture { if(grain)return grain;const c=document.createElement('canvas');c.width=c.height=32;const x=c.getContext('2d')!;x.fillStyle='rgba(255,255,255,.9)';x.fillRect(0,0,32,32);for(let i=0;i<110;i++){x.fillStyle=`rgba(85,55,45,${Math.random()*.07})`;x.fillRect(Math.random()*32,Math.random()*32,1,1)}grain=new THREE.CanvasTexture(c);grain.colorSpace=THREE.SRGBColorSpace;grain.wrapS=grain.wrapT=THREE.RepeatWrapping;return grain;}
function gradientTexture(): THREE.CanvasTexture {if(gradient)return gradient;const c=document.createElement('canvas');c.width=1;c.height=3;const x=c.getContext('2d')!;x.fillStyle='#202020';x.fillRect(0,0,1,1);x.fillStyle='#9a9a9a';x.fillRect(0,1,1,1);x.fillStyle='#fff';x.fillRect(0,2,1,1);gradient=new THREE.CanvasTexture(c);gradient.minFilter=gradient.magFilter=THREE.NearestFilter;return gradient;}
