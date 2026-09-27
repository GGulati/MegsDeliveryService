import * as THREE from 'three';
import type { GameState, RenderSettings, Stop, Vec3 } from './types';
import { STOPS, SOLIDS, WORLD_LIMIT, isInBay, LIGHTHOUSE_TOWER_SOLID_INDEX, CLOCK_TOWER_SOLID_INDEX, OBSERVATORY_DOME_SOLID_INDEX, DISTRICT_PALETTES } from './world';
import { buildWater, WaterMesh } from './water';
import { heightAt, bakeTerrainTexture, canGrow } from './terrain';
import { mulberry32 } from './grain';
import { DROP_ANIM_SECONDS, HALO_FADE_SECONDS, ARRIVAL_RADIUS, glowColumnTarget } from './simulation';
import { followHeading, modelRotation, homeCameraFrame, homeLookStep, HOME_CAM_OFFSET, HOME_LOOK_Y } from './camera-motion';
import { RoomView } from './room';
import { FlightEffects, flightVisuals } from './flight-visuals';
import { grainSpeckles, GRAIN_SEED, GRAIN_SIZE } from './grain';

/** The deliberately self contained little world that sits behind the DOM game UI. */
export class GameRenderer {
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(62, 1, .1, 900);
  private renderer: THREE.WebGLRenderer;
  private effects: FlightEffects;
  private hero = new THREE.Group();
  private dropParcel = new THREE.Group();
  private glowColumn = new THREE.Group();
  private glowMats: THREE.ShaderMaterial[] = [];
  private lastGlowStopId: string | undefined;
  private targetRing = new THREE.Group();
  private clouds = new THREE.Group();
  private birds = new THREE.Group();
  private boats: THREE.Group[] = [];
  private clock = 0;
  private camPos = new THREE.Vector3(0, 27, 145);
  private camLook = new THREE.Vector3(0, 18, 90);
  private homeLook = new THREE.Vector3(0, HOME_LOOK_Y, 0);
  private ray = new THREE.Raycaster();
  private blockers: THREE.Object3D[] = [];
  private outlines: THREE.Mesh[] = [];
  private beamGroup: THREE.Group | null = null;
  private beamLight: THREE.PointLight | null = null;
  private lighthouseLit = true;
  private sun: THREE.DirectionalLight;
  private disposed = false;
  private lastMode: GameState['mode'] | undefined;
  private lastWidth = -1;
  private lastHeight = -1;
  private lastPixelRatio = -1;
  private followYaw = 0;
  private world!: THREE.Group;
  private water: WaterMesh | null = null;
  private room = new RoomView();
  private outdoorFog = new THREE.FogExp2(0xb9dce0,.0035);

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.effects = new FlightEffects(canvas);
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
    this.world=this.makeWorld();
    this.scene.add(this.world, this.hero, this.dropParcel, this.glowColumn, this.targetRing, this.clouds, this.birds, this.room.group);
    this.makeHero(); this.makeDropParcel(); this.makeGlowColumn(); this.makeSkyLife(); this.resize();
  }

  resize(): void {
    // The next render owns the quality-dependent backing-store dimensions.
    this.lastWidth = -1;
  }

  render(state: GameState, dt: number, settings: RenderSettings): void {
    if (this.disposed) return;
    const step = state.paused ? 0 : Math.min(.05, Math.max(0, dt)); this.clock += step;
    if (this.water && !settings.reducedMotion) this.water.update(this.clock);
    const visual = flightVisuals(state, this.clock, settings.reducedMotion);
    this.effects.update(visual.speed, settings.lowQuality);
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

    const atHome=state.mode==='home';
    [this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds].forEach(object=>object.visible=!atHome);
    this.room.update(state,step,settings.reducedMotion);
    if(atHome){this.scene.fog=null;this.renderer.setClearColor(0xd5c6ae);this.camera.fov=48;this.camera.updateProjectionMatrix();const hp=state.homePosition||{x:0,z:0};const frame=homeCameraFrame(hp.x,hp.z);const nl=homeLookStep([this.homeLook.x,this.homeLook.z],[frame.look[0],frame.look[2]],this.lastMode!=='home',step,settings.reducedMotion);this.homeLook.set(nl[0],HOME_LOOK_Y,nl[1]);this.camera.position.set(this.homeLook.x+HOME_CAM_OFFSET.x,this.homeLook.y+HOME_CAM_OFFSET.y,this.homeLook.z+HOME_CAM_OFFSET.z);this.camera.up.set(0,1,0);this.camera.lookAt(this.homeLook);this.lastMode=state.mode;this.renderer.render(this.scene,this.camera);return;}
    if(this.camera.fov!==62){this.camera.fov=62;this.camera.updateProjectionMatrix();}
    this.scene.fog=this.outdoorFog;this.renderer.setClearColor(0xaed9e8);

    const p = state.player.position;
    const player = new THREE.Vector3(p.x, p.y, p.z);
    const snap = this.lastMode === undefined || this.lastMode !== state.mode;
    this.hero.position.copy(player);
    this.hero.rotation.order = 'YXZ';
    this.hero.rotation.y = modelRotation(state.player.yaw);
    this.hero.rotation.x = state.player.pitch * .4;
    this.hero.rotation.z = 0;
    this.hero.scale.setScalar(state.mode === 'title' || state.mode === 'summary' ? .86 : .62);
    this.hero.position.y += visual.bob;
    this.animateSky(settings.reducedMotion, step);
    this.updateBeacon(this.destination(state), settings.reducedMotion || state.paused ? 0 : step);
    this.updateGlowColumn(state, settings.reducedMotion);
    this.updateDropParcel(state, settings.reducedMotion ? 0 : step, settings.reducedMotion);
    this.updateCamera(state, player, step, settings.reducedMotion, snap);
    this.lastMode = state.mode;
    const dusk = state.run ? Math.min(1, state.run.elapsed / 480) : .1;
    this.sun.color.setHSL(.095 - dusk * .08, .9, .78); this.sun.intensity = 2.5 - dusk * .45;
    (this.scene.fog as THREE.FogExp2).color.setHSL(.55 - dusk * .48, .42, .82 - dusk * .12);
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.effects.dispose();
    this.disposed = true;
    this.scene.traverse(o => { const m = o as THREE.Mesh; if (m.geometry) m.geometry.dispose(); const mat = m.material as THREE.Material | THREE.Material[]; (Array.isArray(mat) ? mat : [mat]).forEach(x => x?.dispose()); });
    this.renderer.dispose();
  }

  private makeWorld(): THREE.Group {
    const g = new THREE.Group();
    const roadMat = toon(0xffedc4);
    // One water plane for the whole world. The shader discovers depth from the
    // baked heightfield, so foam and color follow the true coastline — no polygons.
    const water = buildWater();
    this.water = water;
    g.add(water.mesh);
    // Island terrain: a heightfield displaced by heightAt (domain-warped noise).
    // The town core stays flat; the coastline wobbles and hills rise in the outer ring.
    // Surface color is baked into a 1024² texture (0.43m/texel) by
    // bakeTerrainTexture, so the GPU filters it smoothly per-pixel. Vertex
    // colors on the 2.2m mesh grid can't do this — they interpolate as visible
    // triangles. The heightfield still displaces the vertices.
    const islandGeo = new THREE.PlaneGeometry(440, 440, 200, 200);
    islandGeo.rotateX(-Math.PI / 2);
    const pos = islandGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, heightAt(pos.getX(i), pos.getZ(i)));
    }
    islandGeo.computeVertexNormals();
    const TEX = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = TEX; canvas.height = TEX;
    const ctx = canvas.getContext('2d')!;
    const img = ctx.createImageData(TEX, TEX);
    // Grid-baked: 1 noise eval per texel instead of 5 (see bakeTerrainTexture).
    img.data.set(bakeTerrainTexture(TEX));
    ctx.putImageData(img, 0, 0);
    const colorTex = new THREE.CanvasTexture(canvas);
    colorTex.colorSpace = THREE.SRGBColorSpace;
    colorTex.anisotropy = 4;
    const groundMat = toon(0xffffff);
    groundMat.map = colorTex;
    const island = new THREE.Mesh(islandGeo, groundMat); g.add(island);
    // Curving pale paths are tubes so they remain charming from the chase camera.
    // They ring the bay: west loop serves the cottage and bungalow lanes, east loop
    // serves the merchant row and mansion hill, meeting in the north.
    // Control points snap to the heightfield so roads ride the hills, not through them.
    [[[-150,0,90],[-116,0,40],[-80,0,-10],[-70,0,-70],[-40,0,-110],[0,0,-120]], [[150,0,90],[110,0,50],[90,0,0],[106,0,-60],[60,0,-110],[0,0,-120]]].forEach(points => {
      const curve = new THREE.CatmullRomCurve3(points.map(([x, , z]) => new THREE.Vector3(x, heightAt(x, z) + .18, z)));
      g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, 2.8, 8, false), roadMat));
    });
    // Docks reach into the bay from both piers: west pier serves Harbor Cafe,
    // east pier serves Marina Works.
    const dockMat = toon(0x9a6147);
    [[-15, 50], [-15, 70], [-15, 90]].forEach(([x, z]) => {
      const dock = new THREE.Mesh(new THREE.BoxGeometry(24, .7, 8), dockMat); dock.position.set(x, .8, z); g.add(dock);
    });
    [[50, 60], [50, 80], [50, 100]].forEach(([x, z]) => {
      const dock = new THREE.Mesh(new THREE.BoxGeometry(24, .7, 8), dockMat); dock.position.set(x, .8, z); g.add(dock);
    });
    this.makeBuildings(g); this.makeGreenery(g); this.makeLighthouse(g);
    this.makeClockTower(g); this.makeObservatoryDome(g);
    this.makeBakeryDormer(g); this.makeMansionTerraces(g); this.makeBoats(g);
    this.makeLaundryLines(g); this.makeDockDressing(g); this.makeStreetLamps(g);
    return g;
  }

  private makeLaundryLines(g: THREE.Group): void {
    // Clotheslines strung between old-town buildings, with colorful cloth.
    const lineMat = toon(0x4a3f35);
    const clothMats = [toon(0xff8baa), toon(0x7fb8e8), toon(0xffffff), toon(0xffd94a), toon(0x9ad67f)];
    const lines: [number, number, number, number, number, number][] = [
      // [x1, y1, z1, x2, y2, z2] — between neighboring old-town facades
      [-25, 9, -50, -20, 9, -32],  // bldg(-45..-25) to bldg(-40..-20)
      [5, 11, -50, 15, 11, -45],   // bldg(-25..5) to bldg(15..35)
      [-20, 8, -22, 15, 8, -28],   // bldg(-40..-20) to bldg(15..35)
    ];
    const rnd = mulberry32(42);
    lines.forEach(([x1, y1, z1, x2, y2, z2]) => {
      const a = new THREE.Vector3(x1, y1, z1), b = new THREE.Vector3(x2, y2, z2);
      const len = a.distanceTo(b);
      // Sagging line: thin cylinder segments.
      const segs = 12;
      let prev = a.clone();
      for (let sIdx = 1; sIdx <= segs; sIdx++) {
        const t = sIdx / segs;
        const p = a.clone().lerp(b, t); p.y -= Math.sin(t * Math.PI) * 0.8;
        const segLen = prev.distanceTo(p);
        const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, segLen, 4), lineMat);
        seg.position.copy(prev).lerp(p, 0.5);
        seg.lookAt(p); seg.rotateX(Math.PI / 2);
        g.add(seg);
        prev = p;
      }
      // Cloth pieces hanging from the line.
      const nCloth = Math.floor(len / 3);
      for (let c = 0; c < nCloth; c++) {
        const t = (c + 0.7) / (nCloth + 0.4);
        const p = a.clone().lerp(b, t); p.y -= Math.sin(t * Math.PI) * 0.8;
        const w = 0.9 + rnd() * 0.5, h = 1.1 + rnd() * 0.5;
        const cloth = new THREE.Mesh(new THREE.PlaneGeometry(w, h), clothMats[Math.floor(rnd() * clothMats.length)]);
        cloth.position.set(p.x, p.y - h / 2, p.z);
        cloth.rotation.y = Math.atan2(b.x - a.x, b.z - a.z) + Math.PI / 2;
        (cloth.material as THREE.Material).side = THREE.DoubleSide;
        g.add(cloth);
      }
    });
  }

  private makeDockDressing(g: THREE.Group): void {
    // Crates, barrels, and coiled ropes on the harbor piers.
    const crateMat = toon(0xa8763e), barrelMat = toon(0x7a5230), ropeMat = toon(0xc9b489);
    const docks: [number, number][] = [[-15, 50], [-15, 70], [-15, 90], [50, 60], [50, 80], [50, 100]];
    const rnd = mulberry32(7);
    docks.forEach(([dx, dz]) => {
      // Crates: stacked boxes near the dock edge.
      const nCrates = 2 + Math.floor(rnd() * 3);
      for (let c = 0; c < nCrates; c++) {
        const s = 1.1 + rnd() * 0.5;
        const crate = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), crateMat);
        crate.position.set(dx - 10 + rnd() * 20, 1.15 + s / 2 + (c === 2 ? 1.4 : 0), dz - 3 + rnd() * 6);
        crate.rotation.y = rnd() * 0.6;
        crate.castShadow = true;
        g.add(crate);
      }
      // Barrels: cylinders.
      for (let b = 0; b < 2; b++) {
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 1.5, 10), barrelMat);
        barrel.position.set(dx - 8 + rnd() * 16, 1.9, dz - 2.5 + rnd() * 5);
        barrel.castShadow = true;
        g.add(barrel);
      }
      // Coiled rope: flat torus.
      const rope = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.18, 8, 16), ropeMat);
      rope.position.set(dx - 6 + rnd() * 12, 1.25, dz - 2 + rnd() * 4);
      rope.rotation.x = Math.PI / 2;
      g.add(rope);
    });
  }

  private makeStreetLamps(g: THREE.Group): void {
    // Warm lamp posts along merchant row and the old-town square.
    const poleMat = toon(0x3a3a42), lampMat = toon(0xffd98a);
    const spots: [number, number][] = [
      [-70, 30], [-62, 42], [-78, 48],          // merchant row west
      [-92, 12], [-92, 20],                      // merchant row north
      [-47, 24], [-47, 32],                      // merchant row east
      [-10, -40], [10, -40], [-10, -55], [10, -55], // old-town square
    ];
    spots.forEach(([x, z]) => {
      const y0 = 0; // town core is flat
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 4.2, 8), poleMat);
      pole.position.set(x, y0 + 2.1, z);
      pole.castShadow = true;
      g.add(pole);
      const cap = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.35, 8), poleMat);
      cap.position.set(x, y0 + 4.55, z);
      g.add(cap);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), lampMat);
      lamp.position.set(x, y0 + 4.2, z);
      g.add(lamp);
    });
  }

  private makeBoats(g: THREE.Group): void {
    // Moored boats in the bay alongside the docks: hull from an extruded
    // boat-outline (pointed bow, rounded stern), gunwale rim, mast + furled
    // sail. Gentle bobbing. Deterministic placement.
    const hullMat = toon(0x8b5a3c), hullMat2 = toon(0x5b7fa6), mastMat = toon(0x6b4a2f), sailMat = toon(0xf5f0e1);
    // Boat hull outline (top view): pointed bow at +z, rounded stern at -z.
    const hullShape = new THREE.Shape();
    hullShape.moveTo(0, 4.2);           // bow tip
    hullShape.quadraticCurveTo(1.7, 2.5, 1.6, 0);
    hullShape.quadraticCurveTo(1.5, -2.5, 1.0, -3.4);
    hullShape.quadraticCurveTo(0, -3.8, -1.0, -3.4);
    hullShape.quadraticCurveTo(-1.5, -2.5, -1.6, 0);
    hullShape.quadraticCurveTo(-1.7, 2.5, 0, 4.2);
    const hullGeo = new THREE.ExtrudeGeometry(hullShape, { depth: 1.1, bevelEnabled: false });
    hullGeo.rotateX(-Math.PI / 2); // extrude vertically: shape XY -> XZ plane, depth -> +y
    const rimShape = new THREE.Shape();
    rimShape.moveTo(0, 4.5);
    rimShape.quadraticCurveTo(1.95, 2.6, 1.85, 0);
    rimShape.quadraticCurveTo(1.75, -2.6, 1.15, -3.65);
    rimShape.quadraticCurveTo(0, -4.1, -1.15, -3.65);
    rimShape.quadraticCurveTo(-1.75, -2.6, -1.85, 0);
    rimShape.quadraticCurveTo(-1.95, 2.6, 0, 4.5);
    const rimHole = new THREE.Path();
    rimHole.moveTo(0, 3.9);
    rimHole.quadraticCurveTo(1.45, 2.4, 1.35, 0);
    rimHole.quadraticCurveTo(1.25, -2.4, 0.85, -3.15);
    rimHole.quadraticCurveTo(0, -3.5, -0.85, -3.15);
    rimHole.quadraticCurveTo(-1.25, -2.4, -1.35, 0);
    rimHole.quadraticCurveTo(-1.45, 2.4, 0, 3.9);
    rimShape.holes.push(rimHole);
    const rimGeo = new THREE.ExtrudeGeometry(rimShape, { depth: 0.28, bevelEnabled: false });
    rimGeo.rotateX(-Math.PI / 2);
    // Moored alongside the docks (docks are 24 x 8 at x=-15/50): offset in z
    // so hulls sit beside the dock, not through it.
    const spots: [number, number, number][] = [
      // [x, z, rotation] — west pier docks at z=50/70/90, east pier at z=60/80/100
      [-15, 58, 0.08], [-15, 78, -0.06], [-15, 98, 0.1],
      [50, 68, -0.08], [50, 88, 0.06], [50, 108, -0.1],
    ];
    spots.forEach(([x, z, rot], i) => {
      const boat = new THREE.Group();
      const hm = i % 2 ? hullMat2 : hullMat;
      const hull = new THREE.Mesh(hullGeo, hm);
      hull.position.y = 1.1; boat.add(hull);
      const rim = new THREE.Mesh(rimGeo, mastMat);
      rim.position.y = 1.1; boat.add(rim);
      // Mast + furled sail.
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 5.5, 6), mastMat);
      mast.position.y = 3.8; boat.add(mast);
      const sail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 3.6, 1.7), sailMat);
      sail.position.set(0, 3.3, -1.2); boat.add(sail);
      boat.position.set(x, 0.1, z);
      boat.rotation.y = rot;
      boat.userData.phase = i * 1.3;
      boat.userData.baseY = 0.1;
      g.add(boat);
      this.boats.push(boat);
    });
  }

  private makeBuildings(g: THREE.Group): void {
    SOLIDS.forEach((s, i) => {
      const sx = s.max.x - s.min.x, sy = s.max.y - s.min.y, sz = s.max.z - s.min.z;
      const center = new THREE.Vector3((s.min.x+s.max.x)/2, (s.min.y+s.max.y)/2, (s.min.z+s.max.z)/2);
      // Keep a full-height invisible camera blocker while letting the painted roof replace
      // the upper portion of the render box. Collision and camera clearance stay exact.
      const blocker = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz)); blocker.position.copy(center); this.blockers.push(blocker);
      // The lighthouse tower solid is drawn as a cylinder by makeLighthouse,
      // so the generic box pass skips its visuals (camera blocker already pushed).
      if (i === LIGHTHOUSE_TOWER_SOLID_INDEX) return;
      // Phase B landmarks get dedicated visuals (clock tower, observatory dome),
      // not generic boxes. Collision blocker already pushed above.
      if (i === CLOCK_TOWER_SOLID_INDEX || i === OBSERVATORY_DOME_SOLID_INDEX) return;
      // District palette: each district paints its own bodies and roofs.
      const pal = (s.district && DISTRICT_PALETTES[s.district]) || DISTRICT_PALETTES['old-town'];
      const roofHeight = Math.min(4.2, sy * .28);
      const body = new THREE.Mesh(new THREE.BoxGeometry(sx, sy-roofHeight, sz), toon(pal.bodies[i % pal.bodies.length]));
      body.position.set(center.x, s.min.y + (sy-roofHeight)*.5, center.z); body.castShadow = true; body.receiveShadow = true;
      g.add(body);
      // These roofs replace the final few metres of each painted box, entirely within
      // its collision footprint, so they read from the air without enlarging an obstacle.
      const halfX = sx * .5, halfZ = sz * .5, roofBase = sy * .5 - roofHeight;
      const roofGeo = new THREE.BufferGeometry();
      roofGeo.setAttribute('position', new THREE.Float32BufferAttribute([
        -halfX, roofBase, -halfZ, halfX, roofBase, -halfZ, 0, sy*.5, 0,
         halfX, roofBase, -halfZ, halfX, roofBase,  halfZ, 0, sy*.5, 0,
         halfX, roofBase,  halfZ,-halfX, roofBase,  halfZ, 0, sy*.5, 0,
        -halfX, roofBase,  halfZ,-halfX, roofBase, -halfZ, 0, sy*.5, 0,
      ], 3)); roofGeo.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]); roofGeo.computeVertexNormals();
      const roof = new THREE.Mesh(roofGeo, toon(pal.roofs[i % pal.roofs.length]));
      roof.position.copy(center); roof.castShadow = true; g.add(roof);
      const trimMat = toon(0xffdfaa), glassMat = toon(0x356f89), litMat = toon(0xffd98a), doorMat = toon(0x704638);
      const leafMat = toon(0x4d976b), petalMat = toon(0xff8baa);
      // Story-aware facades: door on the ground floor, one window row per story above.
      // Stories are counted against the body height (below the roof), not total height.
      // Windows vary per building/face/story (jitter, size, lit, flower boxes) for a
      // softer town feel instead of an industrial grid. Deterministic seed.
      const storyH = 3.4;
      const bodyH = sy - roofHeight;
      const stories = Math.max(1, Math.round(bodyH / storyH));
      const baseW = Math.min(2.6, sx * .18), baseH = Math.min(2.4, storyH * .55);
      const sideIdx = { north: 0, south: 1, east: 2, west: 3 };
      const addFacade = (side: 'north'|'south'|'east'|'west') => {
        const along = side==='north'||side==='south' ? sx : sz;
        const positions = along > 29 ? [-.27, .27] : [-.2, .2];
        const rot = side==='north' ? Math.PI : side==='south' ? 0 : side==='west' ? -Math.PI/2 : Math.PI/2;
        const isZ = side==='north'||side==='south';
        const outward = side==='north' ? -1 : side==='south' ? 1 : side==='west' ? -1 : 1;
        const planeAt = (alongOffset: number, y: number, depth: number) => isZ
          ? new THREE.Vector3(body.position.x + alongOffset, y, body.position.z + outward * (sz*.5 + depth))
          : new THREE.Vector3(body.position.x + outward * (sx*.5 + depth), y, body.position.z + alongOffset);
        const winRow = (story: number, y: number) => {
          positions.forEach((offset, pi) => {
            // Deterministic per-window variation (no horizontal jitter — keep rows aligned).
            const rnd = mulberry32(i * 1000 + sideIdx[side] * 100 + story * 10 + pi);
            const jx = 0;
            const w = baseW * (0.88 + rnd() * 0.24);    // width variation
            const h = baseH * (0.88 + rnd() * 0.24);    // height variation
            // Keep the window top below the body top (no ceiling clipping).
            const maxY = s.min.y + bodyH - h * 0.5 - 0.35;
            const wy = Math.min(y, maxY);
            const p = planeAt(along * offset + jx, wy, .055);
            const mat = rnd() < 0.35 ? litMat : glassMat; // some windows warmly lit
            const win = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); win.position.copy(p); win.rotation.y=rot; g.add(win);
            const sill = new THREE.Mesh(new THREE.BoxGeometry(w + .38, .18, .16), trimMat); sill.position.copy(planeAt(along * offset + jx, wy-h*.5-.08, .1)); if(!isZ)sill.rotation.y=Math.PI/2; g.add(sill);
            // Flower box under some windows.
            if (rnd() < 0.3) {
              const box = new THREE.Mesh(new THREE.BoxGeometry(w * 0.8, 0.35, 0.4), doorMat);
              box.position.copy(planeAt(along * offset + jx, wy-h*.5-0.35, 0.28)); if(!isZ)box.rotation.y=Math.PI/2; g.add(box);
              for (let f = 0; f < 3; f++) {
                const fl = new THREE.Mesh(new THREE.SphereGeometry(0.14, 6, 5), f % 2 ? petalMat : leafMat);
                fl.position.copy(planeAt(along * offset + jx + (f-1)*w*0.22, wy-h*.5-0.12, 0.28)); g.add(fl);
              }
            }
          });
        };
        // Ground floor: centered door with flanking windows.
        const doorH = Math.min(3.0, storyH * .82);
        const door = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(2.4, along*.13), doorH), doorMat);
        door.position.copy(planeAt(0, s.min.y + doorH*.5, .06)); door.rotation.y=rot; g.add(door);
        winRow(0, s.min.y + storyH * .58);
        // Upper stories: one window row per story.
        for (let st = 1; st < stories; st++) {
          winRow(st, s.min.y + storyH * st + storyH * .58);
        }
      };
      addFacade('north'); addFacade('south'); addFacade('east'); addFacade('west');
      // Merchant-row shops get striped awnings over the south face (street side).
      // The awning is a sloped quad: top edge at the wall, front edge lower and outward.
      if (s.district === 'merchant-row') {
        const awnColors: [string, string][] = [['#e86a6a', '#f5f0e1'], ['#5b7fa6', '#f5f0e1'], ['#6aa86a', '#f5f0e1']];
        const [c1, c2] = awnColors[i % awnColors.length];
        const cnv = document.createElement('canvas'); cnv.width = 128; cnv.height = 16;
        const ctx = cnv.getContext('2d')!;
        for (let sIdx = 0; sIdx < 8; sIdx++) { ctx.fillStyle = sIdx % 2 ? c1 : c2; ctx.fillRect(sIdx * 16, 0, 16, 16); }
        const tex = new THREE.CanvasTexture(cnv); tex.colorSpace = THREE.SRGBColorSpace;
        const awnW = Math.min(sx * 0.7, 10), awnD = 2.2;
        const awnGeo = new THREE.PlaneGeometry(awnW, awnD, 1, 1);
        const pos = awnGeo.attributes.position;
        for (let v = 0; v < pos.count; v++) {
          if (pos.getY(v) < 0) pos.setZ(v, -0.7); // front (outward) edge dips down
        }
        awnGeo.computeVertexNormals();
        const awn = new THREE.Mesh(awnGeo, new THREE.MeshToonMaterial({ map: tex, side: THREE.DoubleSide }));
        const doorH = Math.min(3.0, storyH * .82);
        // Plane local +y maps to world -z after rotation.x=-PI/2, so the dipped
        // edge (local y<0) lands outward (+z, street side) and lower.
        awn.position.set(center.x, s.min.y + doorH + 0.55, center.z + sz * .5 + awnD * .5 - 0.15);
        awn.rotation.x = -Math.PI / 2;
        g.add(awn);
      }
      // District dressing: bungalow lanes get picket fences + cottage gardens,
      // mansion hill gets low stone walls + formal walled gardens.
      if (s.district === 'bungalow-lanes') this.makePicketFence(g, s, i);
      if (s.district === 'mansion-hill') this.makeWalledGarden(g, s, i);
    });
  }

  private makePicketFence(g: THREE.Group, s: { min: { x: number; y: number; z: number }; max: { x: number; y: number; z: number } }, seed: number): void {
    const cx = (s.min.x + s.max.x) / 2, cz = (s.min.z + s.max.z) / 2;
    const sx = s.max.x - s.min.x, sz = s.max.z - s.min.z;
    const groundY = s.min.y;
    const picketMat = toon(0xf5f0e1), soilMat = toon(0x6b4a2f);
    const flowerMats = [toon(0xff8baa), toon(0xffd94a), toon(0xffffff), toon(0xe86a6a)];
    // Fence runs: [x1, z1, x2, z2]. Front has a 2.4m gap at center for the path.
    const off = 4, fx1 = cx - sx / 2 - off, fx2 = cx + sx / 2 + off, fz = cz + sz / 2 + off;
    const runs: [number, number, number, number][] = [
      [fx1, fz, cx - 1.2, fz], [cx + 1.2, fz, fx2, fz], // front (with path gap)
      [fx1, cz - sz / 2, fx1, fz], [fx2, cz - sz / 2, fx2, fz], // sides
    ];
    // Collect picket transforms, then instance them.
    const mats: THREE.Matrix4[] = [];
    const dummy = new THREE.Object3D();
    runs.forEach(([x1, z1, x2, z2]) => {
      const len = Math.hypot(x2 - x1, z2 - z1);
      const n = Math.max(2, Math.floor(len / 0.38));
      const ang = Math.atan2(x2 - x1, z2 - z1);
      for (let k = 0; k <= n; k++) {
        const t = k / n;
        dummy.position.set(x1 + (x2 - x1) * t, groundY + 0.55, z1 + (z2 - z1) * t);
        dummy.rotation.set(0, ang, 0);
        dummy.updateMatrix();
        mats.push(dummy.matrix.clone());
      }
      // Two horizontal rails per run.
      const railLen = len;
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, railLen), picketMat);
      rail.position.set((x1 + x2) / 2, groundY + 0.75, (z1 + z2) / 2);
      rail.rotation.y = ang;
      g.add(rail);
      const rail2 = rail.clone(); rail2.position.y = groundY + 0.35; g.add(rail2);
    });
    const picketGeo = new THREE.BoxGeometry(0.14, 1.1, 0.07);
    // Pointed top: small cone merged visually by placing it atop each picket.
    const inst = new THREE.InstancedMesh(picketGeo, picketMat, mats.length);
    mats.forEach((m, idx) => inst.setMatrixAt(idx, m));
    inst.instanceMatrix.needsUpdate = true;
    g.add(inst);
    const tipGeo = new THREE.ConeGeometry(0.1, 0.18, 4);
    const tips = new THREE.InstancedMesh(tipGeo, picketMat, mats.length);
    mats.forEach((m, idx) => {
      const p = new THREE.Vector3().setFromMatrixPosition(m);
      dummy.position.set(p.x, p.y + 0.64, p.z);
      dummy.rotation.set(0, Math.PI / 4, 0);
      dummy.updateMatrix();
      tips.setMatrixAt(idx, dummy.matrix);
    });
    tips.instanceMatrix.needsUpdate = true;
    g.add(tips);
    // Cottage garden: two flower beds flanking the front path.
    const rnd = mulberry32(seed * 77 + 5);
    [-1, 1].forEach(side => {
      const bx = cx + side * 3.2, bz = cz + sz / 2 + 2.2;
      const bed = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.35, 1.8), soilMat);
      bed.position.set(bx, groundY + 0.18, bz);
      g.add(bed);
      for (let f = 0; f < 7; f++) {
        const fl = new THREE.Mesh(new THREE.SphereGeometry(0.22, 7, 6), flowerMats[Math.floor(rnd() * flowerMats.length)]);
        fl.position.set(bx + (rnd() - 0.5) * 2.8, groundY + 0.55, bz + (rnd() - 0.5) * 1.2);
        g.add(fl);
        const lv = new THREE.Mesh(new THREE.SphereGeometry(0.18, 6, 5), toon(0x4d976b));
        lv.position.set(bx + (rnd() - 0.5) * 2.8, groundY + 0.42, bz + (rnd() - 0.5) * 1.2);
        g.add(lv);
      }
    });
  }

  private makeWalledGarden(g: THREE.Group, s: { min: { x: number; y: number; z: number }; max: { x: number; y: number; z: number } }, seed: number): void {
    // Per-villa layouts: the west side is open to the existing terraced platforms
    // (which step down toward the bay), and walls stop short of the neighboring villa.
    // Villa 1: x 100..120, z -15..5. Villa 2: x 125..140, z 5..25.
    const cx = (s.min.x + s.max.x) / 2, cz = (s.min.z + s.max.z) / 2;
    const groundY = s.min.y;
    const wallMat = toon(0xb8b0a0), capMat = toon(0xd8d0c0), hedgeMat = toon(0x3d8a5f), soilMat = toon(0x6b4a2f);
    const flowerMats = [toon(0xff8baa), toon(0xffd94a), toon(0xffffff)];
    const isVilla1 = cx < 120;
    // Walls: [centerX, centerZ, lenX, lenZ]. Hedges: same format. Beds: [x, z].
    let walls: [number, number, number, number][];
    let hedges: [number, number, number, number][];
    let beds: [number, number][];
    if (isVilla1) {
      walls = [
        [109, -21, 30, 0.5],   // north
        [108, 11, 28, 0.5],    // south (stops before villa 2's zone)
        [124, -5, 0.5, 32],    // east
      ];
      hedges = [
        [109, -19.5, 26, 0.8],
        [108, 9.5, 24, 0.8],
        [122.5, -5, 0.8, 28],
      ];
      beds = [[104, -17.5], [114, -17.5], [104, 7.5], [114, 7.5]];
    } else {
      walls = [
        [136, -1, 20, 0.5],    // north (starts clear of villa 1)
        [132.5, 31, 27, 0.5],  // south
        [146, 15, 0.5, 32],    // east
      ];
      hedges = [
        [136, 0.5, 16, 0.8],
        [132.5, 29.5, 23, 0.8],
        [144.5, 15, 0.8, 28],
      ];
      beds = [[131, 2.8], [139, 2.8], [131, 27.2], [139, 27.2]];
    }
    const wallH = 0.9;
    walls.forEach(([x, z, lx, lz]) => {
      const w = new THREE.Mesh(new THREE.BoxGeometry(lx, wallH, lz), wallMat);
      w.position.set(x, groundY + wallH / 2, z);
      w.castShadow = true;
      g.add(w);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(lx + 0.15, 0.12, lz + 0.15), capMat);
      cap.position.set(x, groundY + wallH + 0.06, z);
      g.add(cap);
    });
    const hedgeH = 1.0;
    hedges.forEach(([x, z, lx, lz]) => {
      const h = new THREE.Mesh(new THREE.BoxGeometry(lx, hedgeH, lz), hedgeMat);
      h.position.set(x, groundY + hedgeH / 2, z);
      h.castShadow = true;
      g.add(h);
    });
    const rnd = mulberry32(seed * 131 + 11);
    beds.forEach(([bx, bz]) => {
      const bed = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.4, 2.4), soilMat);
      bed.position.set(bx, groundY + 0.2, bz);
      g.add(bed);
      for (let f = 0; f < 8; f++) {
        const fl = new THREE.Mesh(new THREE.SphereGeometry(0.24, 7, 6), flowerMats[Math.floor(rnd() * flowerMats.length)]);
        fl.position.set(bx + (rnd() - 0.5) * 2.6, groundY + 0.6, bz + (rnd() - 0.5) * 1.8);
        g.add(fl);
      }
    });
  }

  private makeGreenery(g: THREE.Group): void {
    const trunk = toon(0x744a36), leaf = toon(0x4d976b), leaf2 = toon(0x3d8a5f), flower = toon(0xff8baa);
    // Two-zone forest: dense woods on the northern hills (the town's natural
    // boundary — a visual wall of green), sparse elsewhere. Deterministic seed.
    const rand = mulberry32(1337);
    const placeTree = (x: number, z: number) => {
      const t = new THREE.Group();
      const h = 3 + rand() * 2.5;
      const b = new THREE.Mesh(new THREE.CylinderGeometry(.35, .55, h, 7), trunk);
      b.position.y = h / 2; t.add(b);
      const lm = rand() < 0.5 ? leaf : leaf2;
      const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(2.2 + rand() * 1.2, 1), lm);
      crown.position.y = h + 1.5; t.add(crown);
      t.position.set(x, heightAt(x, z), z);
      t.rotation.y = rand() * Math.PI * 2;
      g.add(t);
      if (rand() < 0.3) {
        const f = new THREE.Mesh(new THREE.SphereGeometry(.28, 7, 6), flower);
        f.position.set(x + .8, heightAt(x, z) + .5, z + .6);
        g.add(f);
      }
    };
    // Dense woods: northern hills (z > 60, outside town core). 260 trees.
    let placed = 0, tries = 0;
    while (placed < 260 && tries < 6000) {
      tries++;
      const x = (rand() - 0.5) * 400, z = 60 + rand() * 160; // z in [60, 220]
      if (!canGrow(x, z)) continue;
      if (STOPS.some(s => Math.hypot(x - s.position.x, z - s.position.z) < 24)) continue;
      if (Math.hypot(x, z) < 145) continue; // outside the flat town core
      placeTree(x, z);
      placed++;
    }
    // Sparse elsewhere: 60 trees, town center kept airy.
    placed = 0; tries = 0;
    while (placed < 60 && tries < 3000) {
      tries++;
      const x = (rand() - 0.5) * 400, z = (rand() - 0.5) * 400;
      if (!canGrow(x, z)) continue;
      if (STOPS.some(s => Math.hypot(x - s.position.x, z - s.position.z) < 24)) continue;
      if (Math.hypot(x, z) < 100 && rand() < 0.7) continue;
      // Don't double-plant in the woods zone.
      if (z > 60 && Math.hypot(x, z) >= 145) continue;
      placeTree(x, z);
      placed++;
    }
  }

  private makeLighthouse(g: THREE.Group): void {
    // The lighthouse stands on a rock headland at the bay's east mouth now — a real
    // place, not panorama dressing. The keeper's cottage (Beacon House, the delivery
    // pad) is SOLIDS[3], drawn by makeBuildings; the tower solid is the last SOLIDS
    // entry, drawn here as a cylinder. Beam rotation is driven in render().
    const hx = 74, hz = 110; // headland center
    const rock = new THREE.Mesh(new THREE.CylinderGeometry(20, 24, 9, 18), toon(0x8a7f72));
    rock.position.set(hx, 2.5, hz); rock.castShadow = true; g.add(rock);
    const x = 88, z = 118; // tower
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 5.2, 26, 16), toon(0xfff0d4));
    tower.position.set(x, 16, z); tower.castShadow = true; g.add(tower);
    // Red bands track the tower's taper so they sit proud of the white shell.
    const towerR = (y: number) => 5.2 - (y - 3) * (1.6 / 26);
    for (const y of [8, 14, 20, 26]) {
      const stripe = new THREE.Mesh(
        new THREE.CylinderGeometry(towerR(y + 1.1) + 0.15, towerR(y - 1.1) + 0.15, 2.2, 16),
        toon(0xd25c51));
      stripe.position.set(x, y, z); g.add(stripe);
    }
    const gallery = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 1.2, 16), toon(0x3e6680));
    gallery.position.set(x, 29.6, z); g.add(gallery);
    const lampRoom = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 3.4, 12),
      new THREE.MeshBasicMaterial({ color: 0xffe9ad }));
    lampRoom.position.set(x, 31.8, z); g.add(lampRoom);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(3.4, 2.6, 12), toon(0xc9534e));
    cap.position.set(x, 34.8, z); g.add(cap);
    // Rotating beam: two opposite translucent blades from the lamp room.
    const beamGroup = new THREE.Group(); beamGroup.position.set(x, 31.8, z);
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xffdf8e, transparent: true, opacity: .28, depthWrite: false, side: THREE.DoubleSide });
    [0, Math.PI].forEach(a => {
      const blade = new THREE.Mesh(new THREE.ConeGeometry(3.2, 26, 12, 1, true), beamMat);
      blade.rotation.z = Math.PI / 2; blade.rotation.y = a;
      blade.position.set(Math.cos(a) * 13, 0, -Math.sin(a) * 13);
      beamGroup.add(blade);
    });
    g.add(beamGroup); this.beamGroup = beamGroup;
    this.beamLight = new THREE.PointLight(0xffdc92, 60, 90); this.beamLight.position.set(x, 32, z); g.add(this.beamLight);
    this.setLighthouseLit(true);
  }

  /** Toggles the lighthouse beam. Day/night and weather will drive this later;
   *  for now the light stays on. */
  setLighthouseLit(lit: boolean): void {
    this.lighthouseLit = lit;
    if (this.beamGroup) this.beamGroup.visible = lit;
    if (this.beamLight) this.beamLight.intensity = lit ? 60 : 0;
  }

  // Phase B landmarks: each district's skyline anchor. Collision comes from
  // SOLIDS; these are the dedicated visuals (generic box pass skips them).

  private makeClockTower(g: THREE.Group): void {
    // Old Town clock tower: tallest in the town core, shorter than the lighthouse.
    // Sandstone shaft, clock faces on all four sides, pointed terracotta roof.
    const cx = 6, cz = -74; // center of the clock-tower SOLIDS
    const sandstone = toon(0xd4a574), terracotta = toon(0xb65c3f), trim = toon(0xffdfaa);
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(8, 20, 8), sandstone);
    shaft.position.set(cx, 10, cz); shaft.castShadow = true; g.add(shaft); // y: 0..20
    // Belfry: slightly wider band with arched openings (dark insets).
    const belfry = new THREE.Mesh(new THREE.BoxGeometry(8.6, 3, 8.6), sandstone);
    belfry.position.set(cx, 21.5, cz); belfry.castShadow = true; g.add(belfry); // y: 20..23
    const openingMat = toon(0x2a2a35);
    const faceDefs: Array<[number, number, number]> = [
      [0, -4.32, Math.PI], [0, 4.32, 0], [-4.32, 0, -Math.PI / 2], [4.32, 0, Math.PI / 2],
    ];
    for (const [ox, oz, rot] of faceDefs) {
      // Clock face: light disc with hands, set into the shaft near the top.
      const face = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.3, 24),
        new THREE.MeshBasicMaterial({ color: 0xf8f0d8 }));
      face.rotation.x = Math.PI / 2; face.rotation.z = rot;
      face.position.set(cx + ox, 17, cz + oz); g.add(face);
      // Hands: hour and minute, fixed at a charming time.
      const handMat = new THREE.MeshBasicMaterial({ color: 0x2a2a35 });
      const hour = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.1, 0.1), handMat);
      hour.position.set(cx + ox * 1.02, 17.3, cz + oz * 1.02); hour.rotation.z = -0.6; hour.rotation.y = rot; g.add(hour);
      const minute = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.6, 0.1), handMat);
      minute.position.set(cx + ox * 1.02, 17.2, cz + oz * 1.02); minute.rotation.z = 0.9; minute.rotation.y = rot; g.add(minute);
      // Belfry opening (dark arch suggestion).
      const opening = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2), openingMat);
      opening.position.set(cx + ox * 1.01, 21.5, cz + oz * 1.01); opening.rotation.y = rot; g.add(opening);
    }
    // Pointed terracotta roof (pyramid). Collision tops at y=28 with the visual.
    const roofGeo = new THREE.ConeGeometry(6.2, 5, 4);
    const roof = new THREE.Mesh(roofGeo, terracotta);
    roof.position.set(cx, 25.5, cz); roof.rotation.y = Math.PI / 4; roof.castShadow = true; g.add(roof);
    const finial = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), trim);
    finial.position.set(cx, 28.2, cz); g.add(finial);
    // Corner trim for a finished look.
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const corner = new THREE.Mesh(new THREE.BoxGeometry(0.7, 20, 0.7), trim);
      corner.position.set(cx + sx * 3.8, 10, cz + sz * 3.8); g.add(corner);
    }
  }

  private makeObservatoryDome(g: THREE.Group): void {
    // Observatory Rise: stone drum + copper-green dome on the Hill Observatory
    // roof, offset from the delivery pad. The dome is the landmark.
    // Roof surface at (107,-63) on the pyramid: 28.76 (not the 31 apex).
    const cx = 107, cz = -63, roofY = 28.76;
    const stone = toon(0x8a8a92), copper = toon(0x5c8a7a);
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.8, 3, 18), stone);
    drum.position.set(cx, roofY + 1.5, cz); drum.castShadow = true; g.add(drum);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(4.5, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), copper);
    dome.position.set(cx, roofY + 3, cz); dome.castShadow = true; g.add(dome);
    // Slit opening (dark) facing the sky, plus a small finial.
    const slit = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.5, 0.4), toon(0x1a1a25));
    slit.position.set(cx, roofY + 4.85, cz + 4.1); slit.rotation.x = -0.25; g.add(slit);
    const finial = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 6), toon(0x8a6a3a));
    finial.position.set(cx, roofY + 7.7, cz); g.add(finial);
  }

  private makeBakeryDormer(g: THREE.Group): void {
    // Merchant Row: the bakery (SOLIDS[0]) gets a distinctive attic dormer with
    // a warm lit window — "home" reads from the air. Offset from the pad.
    // Roof surface at (-70,32) on the pyramid: 15.2 (not the 18 apex).
    const cx = -70, cz = 32, roofY = 15.2;
    const pastel = toon(0xf4e4a8), wood = toon(0x8b5a3a);
    const dormer = new THREE.Mesh(new THREE.BoxGeometry(4.5, 2.6, 3), pastel);
    dormer.position.set(cx, roofY + 1.3, cz); dormer.castShadow = true; g.add(dormer);
    // Warm emissive window: Meg's attic light.
    const win = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.6),
      new THREE.MeshBasicMaterial({ color: 0xffd88a }));
    win.position.set(cx, roofY + 1.3, cz + 1.52); g.add(win);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 0.15), wood);
    frame.position.set(cx, roofY + 1.3, cz + 1.45); g.add(frame);
    // Re-cut the window in front of the frame (frame is a border illusion).
    win.position.z = cz + 1.54;
    // Little pitched cap on the dormer.
    const capGeo = new THREE.BufferGeometry();
    capGeo.setAttribute('position', new THREE.Float32BufferAttribute([
      -2.45, 0, -1.7, 2.45, 0, -1.7, 0, 0.2, 0,
      2.45, 0, -1.7, 2.45, 0, 1.7, 0, 0.2, 0,
      2.45, 0, 1.7, -2.45, 0, 1.7, 0, 0.2, 0,
      -2.45, 0, 1.7, -2.45, 0, -1.7, 0, 0.2, 0,
    ], 3));
    capGeo.setIndex([0, 2, 1, 3, 5, 4, 6, 8, 7, 9, 11, 10]);
    capGeo.computeVertexNormals();
    const cap = new THREE.Mesh(capGeo, wood);
    cap.position.set(cx, roofY + 2.6, cz); cap.castShadow = true; g.add(cap);
  }

  private makeMansionTerraces(g: THREE.Group): void {
    // Mansion Hill: terraced garden platforms stepping down from each villa
    // toward the bay. Stone retaining walls, green garden tops. Decorative.
    // NOTE: no collision solids — MIN_ALTITUDE keeps Meg >=3m above terrain,
    // so she can only graze the tallest garden top (3.25m). If the flight
    // floor is ever lowered, add SOLIDS for these.
    const stone = toon(0x9a9a92), garden = toon(0x6aa86a);
    const terrace = (x0: number, x1: number, yTop: number, z0: number, z1: number) => {
      const h = yTop; // base at y=0 (terrain)
      const wall = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, h, z1 - z0), stone);
      wall.position.set((x0 + x1) / 2, h / 2, (z0 + z1) / 2);
      wall.castShadow = true; wall.receiveShadow = true; g.add(wall);
      const top = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0 - 0.6, 0.25, z1 - z0 - 0.6), garden);
      top.position.set((x0 + x1) / 2, h + 0.12, (z0 + z1) / 2);
      top.receiveShadow = true; g.add(top);
    };
    // Villa 1 (x:100..120, z:-15..5): terraces step west toward the bay.
    terrace(90, 100, 1.5, -15, 5);
    terrace(94, 100, 3, -11, 1);
    // Villa 2 (x:125..140, z:5..25): terraces step west toward the bay.
    terrace(115, 125, 1.5, 5, 25);
    terrace(119, 125, 3, 9, 21);
  }

  private makeHero(): void {
    const outline = new THREE.MeshBasicMaterial({ color: 0x392b3d, side: THREE.BackSide });
    const add = (geo: THREE.BufferGeometry, material: THREE.Material, pos: Vec3, scale?: Vec3) => {
      const m=new THREE.Mesh(geo,material);m.position.set(pos.x,pos.y,pos.z); if(scale)m.scale.set(scale.x,scale.y,scale.z);this.hero.add(m);
      const o=new THREE.Mesh(geo,outline);o.scale.setScalar(1.045);m.add(o); this.outlines.push(o); return m;
    };
    // An unmistakable side-saddle broom: a long warm wood shaft, handle curl, binding,
    // and a broad straw fan behind Pumpkin. At yaw 0 Meg travels toward -Z.
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
    [-.42,.42].forEach(x=>add(new THREE.SphereGeometry(.19,7,6),cat,{x,y:1.27,z:2.12},{x:1,y:.7,z:1.15}));
    const collar=add(new THREE.TorusGeometry(.79,.075,6,12),toon(0xc54b52),{x:0,y:2.45,z:2.06}); collar.rotation.x=Math.PI/2;
    const tail=add(new THREE.TorusGeometry(1.0,.17,7,12,Math.PI*.8),toon(0xf2d6af),{x:0,y:2,z:.95});tail.rotation.x=Math.PI/2;
  }

  private makeSkyLife(): void {
    const cloudMat=toon(0xfffbeb); for(let i=0;i<12;i++){const c=new THREE.Group();for(let j=0;j<4;j++){const p=new THREE.Mesh(new THREE.SphereGeometry(3+j%2*1.5,10,7),cloudMat);p.position.set(j*3,Math.sin(j)*.8,0);c.add(p);}c.position.set(-190+(i*47)%380,38+(i%4)*16,-155+(i*71)%320);this.clouds.add(c);}
    this.makeBirds();
  }

  private birdFlock: { group: THREE.Group; left: THREE.Group; right: THREE.Group; vel: THREE.Vector3; phase: number }[] = [];

  private makeBirds(): void {
    // Gull model: white body, gray wings on shoulder pivots (for flapping),
    // head + orange beak, fanned tail. Faces +z; oriented to velocity each frame.
    const bodyMat = toon(0xf5f5f0), wingMat = toon(0xd9d9d9), beakMat = toon(0xe8933c);
    const rnd = mulberry32(1234);
    for (let i = 0; i < 12; i++) {
      const b = new THREE.Group();
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.45, 10, 8), bodyMat);
      body.scale.set(0.7, 0.6, 1.6);
      b.add(body);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), bodyMat);
      head.position.set(0, 0.22, 0.75);
      b.add(head);
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.35, 8), beakMat);
      beak.position.set(0, 0.18, 1.05);
      beak.rotation.x = Math.PI / 2;
      b.add(beak);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.07, 0.6), wingMat);
      tail.position.set(0, 0.05, -0.85);
      b.add(tail);
      // Wings: pivot groups at the shoulders; the mesh extends outward so
      // rotating the pivot about z flaps the wing up/down.
      const mkWing = (side: number) => {
        const pivot = new THREE.Group();
        pivot.position.set(side * 0.28, 0.12, 0.1);
        const wing = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.07, 0.65), wingMat);
        wing.position.x = side * 0.85;
        // Taper the tip.
        const tip = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.06, 0.45), wingMat);
        tip.position.x = side * 1.85;
        pivot.add(wing, tip);
        b.add(pivot);
        return pivot;
      };
      const left = mkWing(-1), right = mkWing(1);
      // Start scattered over the harbor.
      b.position.set(-30 + rnd() * 80, 28 + rnd() * 12, 45 + rnd() * 55);
      this.birds.add(b);
      this.birdFlock.push({
        group: b, left, right,
        vel: new THREE.Vector3((rnd() - 0.5) * 8, 0, (rnd() - 0.5) * 8),
        phase: rnd() * Math.PI * 2,
      });
    }
  }

  private updateBirds(dt: number): void {
    // Classic boids: separation + alignment + cohesion, plus altitude hold
    // and wander. No leash — the flock roams freely.
    const N = this.birdFlock.length;
    if (!N || dt <= 0) return;
    const PERC = 14, MAX_SPEED = 9, MIN_SPEED = 4.5, MAX_FORCE = 26;
    const steer = new THREE.Vector3(), diff = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      const a = this.birdFlock[i];
      const sep = new THREE.Vector3(), ali = new THREE.Vector3(), coh = new THREE.Vector3();
      let neighbors = 0;
      for (let j = 0; j < N; j++) {
        if (i === j) continue;
        const b = this.birdFlock[j];
        const d = a.group.position.distanceTo(b.group.position);
        if (d < PERC && d > 0.001) {
          neighbors++;
          diff.copy(a.group.position).sub(b.group.position).divideScalar(d * d);
          sep.add(diff);
          ali.add(b.vel);
          coh.add(b.group.position);
        }
      }
      steer.set(0, 0, 0);
      if (neighbors > 0) {
        // Separation.
        sep.divideScalar(neighbors).normalize().multiplyScalar(MAX_SPEED).sub(a.vel);
        sep.clampLength(0, MAX_FORCE);
        // Alignment.
        ali.divideScalar(neighbors).normalize().multiplyScalar(MAX_SPEED).sub(a.vel);
        ali.clampLength(0, MAX_FORCE);
        // Cohesion.
        coh.divideScalar(neighbors).sub(a.group.position).normalize().multiplyScalar(MAX_SPEED).sub(a.vel);
        coh.clampLength(0, MAX_FORCE);
        steer.addScaledVector(sep, 1.6).addScaledVector(ali, 1.0).addScaledVector(coh, 0.9);
      }
      // Altitude hold toward y=33.
      const altErr = 33 - a.group.position.y;
      steer.y += THREE.MathUtils.clamp(altErr * 2.2, -MAX_FORCE * 0.6, MAX_FORCE * 0.6);
      // Wander: layered sines so the flock roams instead of circling a point.
      steer.x += Math.sin(this.clock * 0.9 + a.phase) * 4 + Math.sin(this.clock * 0.23 + a.phase * 2.1) * 3;
      steer.z += Math.cos(this.clock * 0.7 + a.phase * 1.3) * 4 + Math.cos(this.clock * 0.31 + a.phase * 0.7) * 3;
      // Integrate.
      a.vel.addScaledVector(steer, dt);
      const speed = a.vel.length();
      if (speed > MAX_SPEED) a.vel.multiplyScalar(MAX_SPEED / speed);
      else if (speed < MIN_SPEED && speed > 0.001) a.vel.multiplyScalar(MIN_SPEED / speed);
      a.group.position.addScaledVector(a.vel, dt);
      // Face travel direction.
      const look = a.group.position.clone().add(a.vel);
      a.group.lookAt(look);
      // Flap/glide cycle: flap ~2.5s, glide ~1.8s.
      const cyc = (this.clock * 0.35 + a.phase * 0.15) % 1;
      let amp: number, base: number;
      if (cyc < 0.58) { amp = 0.75; base = 0; }       // flapping
      else { amp = 0.06; base = 0.18; }               // gliding, wings slightly raised
      const flap = base + Math.sin(this.clock * 11 + a.phase) * amp;
      a.left.rotation.z = flap;
      a.right.rotation.z = -flap;
    }
  }

  private animateSky(reduced: boolean, dt: number): void { if(reduced)return; this.clouds.children.forEach((c,i)=>{c.position.x+=.012*(1+i%3);if(c.position.x>205)c.position.x=-205;});this.updateBirds(dt); if(this.beamGroup&&this.lighthouseLit)this.beamGroup.rotation.y+=.015; this.boats.forEach((b)=>{const y0=b.userData.baseY??.35;b.position.y=y0+Math.sin(this.clock*1.2+b.userData.phase)*.18;b.rotation.z=Math.sin(this.clock*.9+b.userData.phase)*.03;}); }
  private destination(state: GameState): Stop | undefined {
    if(state.mode==='tutorial') return STOPS.find(s=>s.id==='harbor-cafe') || STOPS[1];
    const id=state.run?.returning ? 'home' : state.run?.job?.to;
    return STOPS.find(s=>s.id===id) || STOPS.find(s=>s.id==='home') || STOPS[0];
  }
  private updateBeacon(stop: Stop | undefined, step:number): void { if(!stop)return; this.targetRing.position.set(stop.position.x, Math.max(3,stop.position.y+.6),stop.position.z);this.targetRing.rotation.y+=step*.8;if(!this.targetRing.children.length){const ring=new THREE.Mesh(new THREE.TorusGeometry(4.5,.25,8,28),toon(0xffe49b));ring.rotation.x=Math.PI/2;this.targetRing.add(ring);const beam=new THREE.Mesh(new THREE.CylinderGeometry(.08,.26,8,8,1,true),new THREE.MeshBasicMaterial({color:0xffe8a2,transparent:true,opacity:.16,depthWrite:false,side:THREE.DoubleSide}));beam.position.y=4;this.targetRing.add(beam);}}
  /** A tall beacon over the active drop pad so it reads at distance: two nested
   * open cylinders with a vertical gradient (bright at the pad, fading with
   * altitude), warm additive light, no lighting cost. Static geometry built
   * once — per-frame work is a visibility flag and one uniform. */
  private makeGlowColumn(): void {
    const height = 90;
    // The outer layer's widest point is the shared arrival radius: the
    // visible halo width and the simulation's eligible zone are one value.
    const layers = [
      { rTop: ARRIVAL_RADIUS, rBottom: 2.4, opacity: .2 },
      { rTop: 1.7, rBottom: 1.1, opacity: .32 },
    ];
    for (const layer of layers) {
      const geo = new THREE.CylinderGeometry(layer.rTop, layer.rBottom, height, 24, 1, true);
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        uniforms: { uHeight: { value: height }, uOpacity: { value: layer.opacity }, uPulse: { value: 1 } },
        vertexShader: 'varying float vH; uniform float uHeight;\n' +
          'void main(){ vH = position.y / uHeight + .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
        fragmentShader: 'varying float vH; uniform float uOpacity; uniform float uPulse;\n' +
          'void main(){ float a = pow(clamp(1. - vH, 0., 1.), 1.7) * uOpacity * uPulse;\n' +
          '  gl_FragColor = vec4(1., .62, .22, a); }',
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = height / 2;
      this.glowColumn.add(mesh);
      this.glowMats.push(mat);
    }
    this.glowColumn.visible = false;
  }
  /** Shows the column at the active destination: the live drop pad while the
   * player carries a parcel, or home when heading home. It tracks destination
   * changes and hides the moment a delivery resolves. The pad ring stays the
   * near-field marker, so the column is narrow at its base and never
   * obscures it. Before an auto-drop the column fades out first (driven by
   * state.haloFade); once the drop commits it hides immediately. */
  private updateGlowColumn(state: GameState, reduced: boolean): void {
    const stop = glowColumnTarget(state);
    const show = !!stop;
    this.glowColumn.visible = show;
    if (!show || !stop) { this.lastGlowStopId = undefined; return; }
    if (this.lastGlowStopId !== stop.id) {
      this.lastGlowStopId = stop.id;
      this.glowColumn.position.set(stop.position.x, stop.position.y, stop.position.z);
    }
    // Reduced motion renders the glow static; otherwise it breathes gently.
    // The pre-drop fade multiplies the glow to zero before the parcel leaves.
    const fade = state.haloFade > 0 ? Math.max(0, Math.min(1, state.haloFade / HALO_FADE_SECONDS)) : 1;
    const pulse = (reduced ? 1 : .86 + .14 * Math.sin(this.clock * 2.4)) * fade;
    for (const mat of this.glowMats) mat.uniforms.uPulse.value = pulse;
  }
  /** A committed parcel drop: the box detaches from Meg and falls to the pad. */
  private makeDropParcel(): void {
    const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.1, 1.5), toon(0xc98d5f));
    const ribbonMat = toon(0xc54b52);
    const ribbonX = new THREE.Mesh(new THREE.BoxGeometry(1.56, 1.16, .34), ribbonMat);
    const ribbonZ = new THREE.Mesh(new THREE.BoxGeometry(.34, 1.16, 1.56), ribbonMat);
    const bow = new THREE.Mesh(new THREE.SphereGeometry(.3, 8, 6), ribbonMat);
    bow.position.y = .68; bow.scale.set(1.4, .7, 1.4);
    this.dropParcel.add(box, ribbonX, ribbonZ, bow);
    this.dropParcel.visible = false;
  }
  private updateDropParcel(state: GameState, step: number, reduced: boolean): void {
    const drop = state.drop;
    const stop = drop ? STOPS.find((s) => s.id === drop.stopId) : undefined;
    const show = !!drop && !!stop && drop.parcel;
    this.dropParcel.visible = show;
    if (!show || !drop || !stop) return;
    // The player is frozen at the drop point, so the parcel falls from Meg's
    // position straight to the pad, accelerating as it goes.
    const k = reduced ? 1 : Math.min(1, drop.t / DROP_ANIM_SECONDS);
    const ease = k * k;
    const p = state.player.position;
    const toY = stop.position.y + .7;
    // Meg's descent releases near the pad, but a low manual drop can commit
    // below release height — clamp so the parcel never rises.
    const fromY = Math.max(p.y - 1.4, toY);
    this.dropParcel.position.set(
      p.x + (stop.position.x - p.x) * ease,
      fromY + (toY - fromY) * ease,
      p.z + (stop.position.z - p.z) * ease,
    );
    if (!reduced) this.dropParcel.rotation.y += step * 4;
  }
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
function grainTexture(): THREE.CanvasTexture { if(grain)return grain;const c=document.createElement('canvas');c.width=c.height=GRAIN_SIZE;const x=c.getContext('2d')!;x.fillStyle='rgba(255,255,255,.9)';x.fillRect(0,0,GRAIN_SIZE,GRAIN_SIZE);for(const s of grainSpeckles(GRAIN_SEED)){x.fillStyle=`rgba(85,55,45,${s.alpha})`;x.fillRect(s.x,s.y,1,1)}grain=new THREE.CanvasTexture(c);grain.colorSpace=THREE.SRGBColorSpace;grain.wrapS=grain.wrapT=THREE.RepeatWrapping;return grain;}
function gradientTexture(): THREE.CanvasTexture {if(gradient)return gradient;const c=document.createElement('canvas');c.width=1;c.height=3;const x=c.getContext('2d')!;x.fillStyle='#202020';x.fillRect(0,0,1,1);x.fillStyle='#9a9a9a';x.fillRect(0,1,1,1);x.fillStyle='#fff';x.fillRect(0,2,1,1);gradient=new THREE.CanvasTexture(c);gradient.minFilter=gradient.magFilter=THREE.NearestFilter;return gradient;}
