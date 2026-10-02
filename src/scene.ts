import * as THREE from 'three';
import type { GameState, RenderSettings, Solid, Stop, Vec3 } from './types';
import { STOPS, SOLIDS, WORLD_LIMIT, isInBay, PARK_RECT, DOCKS, DOCK_W, DOCK_D, DOCK_BOATS, MANSION_GROUNDS, LIGHTHOUSE_TOWER_SOLID_INDEX, CLOCK_TOWER_SOLID_INDEX, OBSERVATORY_DOME_SOLID_INDEX, DISTRICT_PALETTES } from './world';
import { createWater, updateWater } from './water';
import { heightAt, bakeTerrainTexture, canGrow } from './terrain';
import { mulberry32 } from './grain';
import { ROAD_EDGES, nodeById, nodePos, type RoadEdge } from './roads';
import { roadCurve, roadWidth, ribbonHeightAt, edgeClips, clipT, intersectionMarkings, CAR_HALF, BIKE_HALF, WALK_HALF, intersections, intersectionHeightAt } from './road-deck';
import { buildBridge } from './bridge';
import { generateLots, lotsToSolids, lotTerrain } from './town-gen';
import { PARK_TREES, PARK_PATHS, PARK_CONSERVATORY } from './park';
import { collectFacades, emptyFacades, mergeFacades, LOT_SEED_BASE, type FacadeSet, type FacadeInstance } from './facades';
import { DROP_ANIM_SECONDS, HALO_FADE_SECONDS, ARRIVAL_RADIUS, glowColumnTarget } from './simulation';
import { toon } from './materials';
import { Life } from './life';
import { followHeading, modelRotation, homeCameraFrame, homeLookStep, HOME_CAM_OFFSET, HOME_LOOK_Y } from './camera-motion';
import { RoomView } from './room';
import { FlightEffects, flightVisuals } from './flight-visuals';
import { SkyDome } from './sky';
import { timeOfDay, gameMinutes, skyAt, sunDirection, handAngles, SHIFT_SECONDS } from './time-of-day';

/** The deliberately self contained little world that sits behind the DOM game UI. */
/** Pastel Painted-Ladies body colors for bungalow-lanes infill (lot.palette 1-4). */
const PASTEL_BODIES = [0xf2b8c6, 0xa8d0e8, 0xf2d8a8, 0xc8b8e0];

/** Invisible camera-blocker box matching a building solid's AABB. Heroes and
 *  infill lots share this so the pull-in raycast and collision always agree. */
export function solidBlocker(s: Solid): THREE.Mesh {
  const blocker = new THREE.Mesh(new THREE.BoxGeometry(s.max.x - s.min.x, s.max.y - s.min.y, s.max.z - s.min.z));
  blocker.position.set((s.min.x + s.max.x) / 2, (s.min.y + s.max.y) / 2, (s.min.z + s.max.z) / 2);
  return blocker;
}
export class GameRenderer {
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(62, 1, .5, 600);
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
  private life: Life | null = null;
  private beamGroup: THREE.Group | null = null;
  private beamLight: THREE.PointLight | null = null;
  private lighthouseLit = true;
  private sun: THREE.DirectionalLight;
  private hemi: THREE.HemisphereLight;
  private skyDome: SkyDome | null = null;
  private clockHands: Array<{ hour: THREE.Group; minute: THREE.Group }> = [];
  private lampMat: THREE.MeshToonMaterial | null = null;
  private beamMat: THREE.MeshBasicMaterial | null = null;
  private disposed = false;
  private lastMode: GameState['mode'] | undefined;
  private lastWidth = -1;
  private lastHeight = -1;
  private lastPixelRatio = -1;
  private followYaw = 0;
  private world!: THREE.Group;
  private water: THREE.Mesh | null = null;
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
    this.hemi = hemi;
    this.scene.add(hemi);
    this.sun = new THREE.DirectionalLight(0xffd1a0, 2.5);
    this.sun.position.set(-80, 115, 48);
    this.scene.add(this.sun);
    this.skyDome = new SkyDome();
    this.scene.add(this.skyDome.mesh);
    this.world=this.makeWorld();
    this.scene.add(this.world, this.hero, this.dropParcel, this.glowColumn, this.targetRing, this.clouds, this.birds, this.room.group);
    this.makeHero(); this.makeDropParcel(); this.makeGlowColumn(); this.makeSkyLife(); this.resize();
  }

  resize(): void {
    // The next render owns the quality-dependent backing-store dimensions.
    this.lastWidth = -1;
  }

  /** Adopt the save game's general-purpose seed (2026-09-30). The renderer
   * is built before the save finishes loading, so Life is constructed here
   * once the seed is known. boot() may run again via the banner Retry (the
   * save was open in another tab); rebuilding keeps traffic matched to the
   * current save's seed. */
  setSeed(seed: number): void {
    this.life?.dispose();
    this.life = new Life(this.world, seed);
  }

  render(state: GameState, dt: number, settings: RenderSettings): void {
    if (this.disposed) return;
    const step = state.paused ? 0 : Math.min(.05, Math.max(0, dt)); this.clock += step;
    if (this.water && !settings.reducedMotion) updateWater(this.water, this.clock, this.camera.position);
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
    // Meg is scaled to the world: peds are ~1.75m, so the broom rig reads
    // ~3m long (user feedback 2026-09-27 — she was 4x human scale before).
    this.hero.scale.setScalar(state.mode === 'title' || state.mode === 'summary' ? .86 : .28);
    this.hero.position.y += visual.bob;
    this.animateSky(settings.reducedMotion, step);
    // Ambient life: cars and pedestrians (Phase 2). Hidden at home with the world.
    if (!atHome && step > 0) {
      this.life?.update(step, player, state.player.speed, state.player.velocity.y, this.clock);
    }
    this.updateBeacon(this.destination(state), settings.reducedMotion || state.paused ? 0 : step);
    this.updateGlowColumn(state, settings.reducedMotion);
    this.updateDropParcel(state, settings.reducedMotion ? 0 : step, settings.reducedMotion);
    this.updateCamera(state, player, step, settings.reducedMotion, snap);
    this.lastMode = state.mode;
    // Time-of-day: 7am→7pm over the 360s shift. Drives sky shader, sun orbit,
    // hemisphere, fog, and the clock tower hands. Only ticks during a run.
    const elapsed = state.run ? state.run.elapsed : 0;
    const t = timeOfDay(elapsed);
    const sky = skyAt(t);
    const gm = gameMinutes(elapsed);
    const angles = handAngles(gm);
    for (const h of this.clockHands) {
      h.hour.rotation.z = -angles.hour;
      h.minute.rotation.z = -angles.minute;
    }
    if (this.skyDome) this.skyDome.setElapsed(elapsed, step);
    const [sx, sy, sz] = sunDirection(sky.sunElevation, sky.sunAzimuth);
    this.sun.position.set(sx * 160, Math.max(8, sy * 160), sz * 160);
    this.sun.color.setRGB(...sky.sun);
    this.sun.intensity = sky.sunIntensity;
    this.hemi.color.setRGB(...sky.hemiSky);
    this.hemi.groundColor.setRGB(...sky.hemiGround);
    const fog = this.scene.fog as THREE.FogExp2;
    if (fog) fog.color.setRGB(...sky.fog);
    // Toon tint: grade the whole scene warm at golden hour via renderer clear
    // color blend — applied to fog-matched background.
    this.renderer.setClearColor(new THREE.Color(...sky.horizon));
    // Dusk: street lamps glow on, lighthouse beam brightens.
    const dusk = sky.duskFactor;
    if (this.lampMat) {
      this.lampMat.emissive.setRGB(1.0 * dusk, 0.75 * dusk, 0.4 * dusk);
      this.lampMat.emissiveIntensity = 1.6 * dusk;
    }
    if (this.beamLight) this.beamLight.intensity = 3 + dusk * 5;
    if (this.beamMat) this.beamMat.opacity = 0.28 + dusk * 0.25;
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
    // One water plane for the whole world. Wind Waker-style shader water:
    // depth-gradient color + generous noise foam + whitecaps (2026-10-01).
    const water = createWater();
    this.water = water;
    g.add(water);
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
    // Roads ride the hand-authored graph; bridge edges are drawn by the bridge module.
    // Roads are FLAT ribbons (not tubes) so they don't swallow nearby houses
    // (user feedback 2026-09-27). The deck follows the smooth curve grade;
    // earthwork skirts drop from the deck edges to the terrain on slopes.
    // Deck heights are node-pinned (road-deck.ts) so adjacent edges meet
    // exactly — no vertical steps at nodes (user feedback 2026-09-27).
    const deckMat = toon(0xffffff);
    deckMat.vertexColors = true;
    deckMat.side = THREE.DoubleSide;
    const earthMat = toon(0x8a6f4d);
    earthMat.side = THREE.DoubleSide;
    // Cross-section bands: [offset, color] verts from left edge to right edge.
    // Town streets: car lanes + bike lanes + sidewalks. Switchbacks: plain.
    const bandCache = new Map<string, [number, number][]>();
    const bandLayout = (width: number): [number, number][] => {
      const key = width.toFixed(1);
      let bands = bandCache.get(key);
      if (!bands) {
        const asphalt = 0x43434a;
        if (width > 5) {
          const bike = 0xa85b4a, walk = 0xb8b0a0;
          bands = [
            [-WALK_HALF, walk], [-BIKE_HALF, walk],
            [-BIKE_HALF, bike], [-CAR_HALF, bike],
            [-CAR_HALF, asphalt], [CAR_HALF, asphalt],
            [CAR_HALF, bike], [BIKE_HALF, bike],
            [BIKE_HALF, walk], [WALK_HALF, walk],
          ];
        } else {
          bands = [[-width / 2, asphalt], [width / 2, asphalt]];
        }
        bandCache.set(key, bands);
      }
      return bands;
    };
    const makeFlatRoad = (e: RoadEdge, curve: THREE.CatmullRomCurve3, width: number, t0: number, t1: number): THREE.Group => {
      const grp = new THREE.Group();
      const segs = 24, hw = width / 2;
      const bands = bandLayout(width);
      const nv = bands.length;
      const pos: number[] = [], nor: number[] = [], col: number[] = [], idx: number[] = [];
      // Skirts: [leftTop, leftBottom, rightTop, rightBottom] per station.
      // Collapsed (top==bottom) where the terrain meets the deck.
      const spos: number[] = [], snor: number[] = [], sidx: number[] = [];
      const cc = new THREE.Color();
      for (let i = 0; i <= segs; i++) {
        // Ribbons are clipped at intersection nodes: the station range runs
        // from t0 to t1 (not 0..1) so the ribbon ends exactly at the clip
        // line where the intersection mesh begins — zero overlap.
        const t = t0 + (i / segs) * (t1 - t0);
        const p = curve.getPointAt(t);
        const tan = curve.getTangentAt(t);
        const px = -tan.z, pz = tan.x;
        const plen = Math.hypot(px, pz) || 1;
        const nx = px / plen, nz = pz / plen;
        // Deck clears the highest terrain across the road width and is pinned
        // at shared nodes so neighboring edges meet exactly. Near an
        // intersection the profile ramps to the flat mesh height so the
        // ribbon end meets the intersection with no step.
        const roadY = ribbonHeightAt(e, t);
        for (const [off, hex] of bands) {
          pos.push(p.x + nx * off, roadY, p.z + nz * off);
          nor.push(0, 1, 0);
          cc.setHex(hex);
          col.push(cc.r, cc.g, cc.b);
        }
        if (i < segs) {
          for (let v = 0; v < nv - 1; v++) {
            const a = i * nv + v, b = a + nv;
            idx.push(a, b, a + 1, a + 1, b, b + 1);
          }
        }
        // Skirt verts for this station (left edge, then right edge).
        const lx = p.x + nx * hw, lz = p.z + nz * hw;
        const rx = p.x - nx * hw, rz = p.z - nz * hw;
        const sides: [number, number, number, number][] = [
          [lx, lz, nx, nz], [rx, rz, -nx, -nz],
        ];
        for (const [ex, ez, ox, oz] of sides) {
          const ty = heightAt(ex, ez);
          const by = ty < roadY - 0.35 ? Math.max(ty - 0.1, roadY - 4) : roadY;
          spos.push(ex, roadY, ez, ex, by, ez);
          snor.push(ox, 0, oz, ox, 0, oz);
        }
        if (i < segs) {
          const a = i * 4;
          // Left strip: verts (a, a+1) -> (a+4, a+5). Right: (a+2, a+3) -> (a+6, a+7).
          sidx.push(a, a + 4, a + 1, a + 1, a + 4, a + 5);
          sidx.push(a + 2, a + 3, a + 6, a + 3, a + 7, a + 6);
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      geo.setIndex(idx);
      const deck = new THREE.Mesh(geo, deckMat);
      deck.receiveShadow = true;
      grp.add(deck);
      const sgeo = new THREE.BufferGeometry();
      sgeo.setAttribute('position', new THREE.Float32BufferAttribute(spos, 3));
      sgeo.setAttribute('normal', new THREE.Float32BufferAttribute(snor, 3));
      sgeo.setIndex(sidx);
      const skirt = new THREE.Mesh(sgeo, earthMat);
      skirt.receiveShadow = true;
      grp.add(skirt);
      return grp;
    };
    // Intersections (clean-break redesign 2026-09-27, replacing junction
    // patches): one flat asphalt mesh per junction at a single height, with
    // stop lines, crosswalks, and sidewalk corner fillets as flat decals
    // 1-2cm above the base (never coplanar). Road ribbons end exactly at clip
    // lines; the mesh begins there — zero overlap by construction.
    const buildIntersections = (g: THREE.Group, deckMat: THREE.Material, earthMat: THREE.Material): void => {
      const asphalt = new THREE.Color(0x43434a);
      // Merged marking geometry for the whole map: white paint (stop lines +
      // crosswalks) and sidewalk-colored fillets. Two draw calls total.
      const whitePos: number[] = [], whiteNor: number[] = [], whiteIdx: number[] = [];
      const walkPos: number[] = [], walkNor: number[] = [], walkIdx: number[] = [];
      const quad = (pos: number[], nor: number[], idx: number[], ys: number[],
          a: [number, number], b: [number, number], c: [number, number], d: [number, number]) => {
        const base = pos.length / 3;
        const pts = [a, b, c, d];
        for (let qi = 0; qi < 4; qi++) {
          pos.push(pts[qi][0], ys[qi], pts[qi][1]); nor.push(0, 1, 0);
        }
        idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
      };
      for (const ix of intersections()) {
        const p = nodePos(nodeById(ix.nodeId));
        // Sloped asphalt base: triangle fan from the node over the zone,
        // using per-vertex mesh heights (sloped intersection zones follow
        // each approach's profile). Matches roadGroundHeight exactly.
        const centerH = intersectionHeightAt(ix, p.x, p.z);
        const pos: number[] = [p.x, centerH, p.z];
        const nor: number[] = [0, 1, 0];
        const col: number[] = [asphalt.r, asphalt.g, asphalt.b];
        const idx: number[] = [];
        for (const v of ix.ring) {
          pos.push(v.x, v.h, v.z); nor.push(0, 1, 0);
          col.push(asphalt.r, asphalt.g, asphalt.b);
        }
        for (let k = 0; k < ix.ring.length; k++)
          idx.push(0, 1 + k, 1 + ((k + 1) % ix.ring.length));
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
        geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
        geo.setIndex(idx);
        const mesh = new THREE.Mesh(geo, deckMat);
        mesh.receiveShadow = true;
        g.add(mesh);
        // Earthwork skirt around the perimeter, top 2cm below the mesh so no
        // dirt wall pokes through the surface it supports. The skirt OMITS
        // the spans where roads enter (the stub end caps): a rim wall across
        // a road entry would cut the ribbon. Foundations only, never walls
        // crossing roads.
        const spos: number[] = [], snor: number[] = [], sidx: number[] = [];
        const n = ix.ring.length;
        // Road-entry angular spans (from the node): each leg's stub end cap
        // covers [legAngle - atan2(hw,clip), legAngle + atan2(hw,clip)].
        const entries = ix.legs.map(l => ({
          la: Math.atan2(l.dz, l.dx),
          ca: Math.atan2(l.hw, l.clip),
        }));
        const angDiff = (a: number, b: number) => {
          const d = (a - b) % (Math.PI * 2);
          return Math.abs(((d + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
        };
        for (let i = 0; i < n; i++) {
          const a = ix.ring[i], b = ix.ring[(i + 1) % n];
          // Skip quads on a road-entry cap.
          const mx = (a.x + b.x) / 2 - p.x, mz = (a.z + b.z) / 2 - p.z;
          const midAng = Math.atan2(mz, mx);
          if (entries.some(e => angDiff(midAng, e.la) <= e.ca + 1e-6)) continue;
          const ex = b.x - a.x, ez = b.z - a.z;
          const el = Math.hypot(ex, ez) || 1;
          const ox = ez / el, oz = -ex / el;
          const ty = Math.min(heightAt(a.x, a.z), heightAt(b.x, b.z));
          // Sloped skirt: top follows the mesh (2cm below each vertex).
          const topYa = a.h - 0.02, topYb = b.h - 0.02;
          const topY = Math.min(topYa, topYb);
          const by = ty < topY - 0.3 ? Math.max(ty - 0.1, topY - 3) : topY;
          const base = spos.length / 3;
          spos.push(a.x, topYa, a.z, a.x, by, a.z, b.x, topYb, b.z, b.x, by, b.z);
          snor.push(ox, 0, oz, ox, 0, oz, ox, 0, oz, ox, 0, oz);
          sidx.push(base, base + 2, base + 1, base + 1, base + 2, base + 3);
        }
        const sgeo = new THREE.BufferGeometry();
        sgeo.setAttribute('position', new THREE.Float32BufferAttribute(spos, 3));
        sgeo.setAttribute('normal', new THREE.Float32BufferAttribute(snor, 3));
        sgeo.setIndex(sidx);
        const sm = new THREE.Mesh(sgeo, earthMat);
        sm.receiveShadow = true;
        g.add(sm);
        // Painted markings as flat decals above the asphalt base (never
        // coplanar): stop lines + crosswalks in white, sidewalk corner
        // fillets in sidewalk color. Layout is pure geometry from road-deck.
        // 8cm lift + polygon offset: mobile GPUs (16-bit depth) need more
        // separation than desktop; the offset pulls decals toward the camera
        // in depth without a visible float.
        const { white, walk } = intersectionMarkings(ix);
        // Markings follow the sloped mesh: each corner lifted 8cm above the
        // interpolated surface (never coplanar, never floating).
        const markHeights = (q: [number, number][], lift: number): number[] =>
          q.map(([x, z]) => intersectionHeightAt(ix, x, z) + lift);
        for (const q of white)
          quad(whitePos, whiteNor, whiteIdx, markHeights(q, 0.08), q[0], q[1], q[2], q[3]);
        for (const q of walk)
          quad(walkPos, walkNor, walkIdx, markHeights(q, 0.085), q[0], q[1], q[2], q[3]);
      }
      // Emit the merged marking meshes.
      // Markings sit 1-2cm above the road surface (never coplanar) with
      // polygonOffset to defeat mobile 16-bit depth flicker. depthTest stays
      // ON so buildings/houses correctly occlude the lines.
      const markMat = toon(0xf5f1e6);
      markMat.side = THREE.DoubleSide;
      markMat.depthWrite = false;
      markMat.polygonOffset = true;
      markMat.polygonOffsetFactor = -2;
      markMat.polygonOffsetUnits = -2;
      if (whiteIdx.length) {
        const wgeo = new THREE.BufferGeometry();
        wgeo.setAttribute('position', new THREE.Float32BufferAttribute(whitePos, 3));
        wgeo.setAttribute('normal', new THREE.Float32BufferAttribute(whiteNor, 3));
        wgeo.setIndex(whiteIdx);
        const wm = new THREE.Mesh(wgeo, markMat);
        wm.receiveShadow = false;
        wm.renderOrder = 1;
        g.add(wm);
      }
      const walkMat = toon(0xb8b0a0);
      walkMat.side = THREE.DoubleSide;
      walkMat.depthWrite = false;
      walkMat.polygonOffset = true;
      walkMat.polygonOffsetFactor = -2;
      walkMat.polygonOffsetUnits = -2;
      if (walkIdx.length) {
        const fgeo = new THREE.BufferGeometry();
        fgeo.setAttribute('position', new THREE.Float32BufferAttribute(walkPos, 3));
        fgeo.setAttribute('normal', new THREE.Float32BufferAttribute(walkNor, 3));
        fgeo.setIndex(walkIdx);
        const fm = new THREE.Mesh(fgeo, walkMat);
        fm.receiveShadow = false;
        fm.renderOrder = 1;
        g.add(fm);
      }
    };
    for (const e of ROAD_EDGES) {
      if (e.kind === 'bridge') continue;
      const curve = roadCurve(e);
      const width = roadWidth(e);
      // Clip the ribbon at intersection nodes: it ends at the plan-distance
      // clip where the intersection mesh takes over. clipT converts the plan
      // distance to a curve parameter. The ribbon meets the mesh at a shared
      // boundary edge (no margin): the mesh's 2cm crown keeps them from being
      // coplanar, so there is no z-fighting and no gap. (The old 5cm margin
      // left a visible 5cm hole on sloped zones; removed 2026-09-28.)
      const clips = edgeClips(e);
      const t0 = clips.a ? clipT(e, 'a', clips.a.dist) : 0;
      const t1 = clips.b ? clipT(e, 'b', clips.b.dist) : 1;
      g.add(makeFlatRoad(e, curve, width, t0, t1));
    }
    // Center dashes: merged into a single geometry (not individual meshes).
    // Individual meshes cause flicker on tile-based mobile GPUs due to
    // hundreds of draw calls with overlapping screen-space bounds.
    const dashMat = toon(0xfff6d8);
    dashMat.side = THREE.DoubleSide;
    dashMat.depthWrite = false;
    dashMat.polygonOffset = true;
    dashMat.polygonOffsetFactor = -2;
    dashMat.polygonOffsetUnits = -2;
    const dashPos: number[] = [];
    const dashNor: number[] = [];
    const dashIdx: number[] = [];
    for (const e of ROAD_EDGES) {
      if (e.kind === 'bridge') continue;
      const curve = roadCurve(e);
      // Center dashes (flat, on the road surface). Dashes TERMINATE at
      // intersection clip lines (with a 1m margin) — they never enter the
      // intersection, like real lane markings.
      const len = curve.getLength();
      const clips = edgeClips(e);
      const cA = clips.a ? clips.a.dist : 0;
      const cB = clips.b ? clips.b.dist : 0;
      for (let d = cA + 1; d < len - cB - 3; d += 4) {
        const p0 = curve.getPointAt(d / len), p1 = curve.getPointAt(Math.min(1, (d + 2) / len));
        const dp = new THREE.Vector3().addVectors(p0, p1).multiplyScalar(0.5);
        // Dash quad: 0.24m wide, 2m long, oriented along the road direction.
        // Build directly in world space (no per-mesh transform).
        const angle = Math.atan2(p1.x - p0.x, p1.z - p0.z);
        const cosA = Math.cos(angle), sinA = Math.sin(angle);
        // Local: x = width (0.24), z = length (2). Rotate by angle around Y.
        const hw = 0.12, hl = 1.0;
        const dy = ribbonHeightAt(e, (d + 1) / len) + 0.02;
        // Corners: (±hw, ±hl) rotated
        const corners: [number, number][] = [
          [-hw, -hl], [hw, -hl], [hw, hl], [-hw, hl],
        ];
        const base = dashPos.length / 3;
        for (const [lx, lz] of corners) {
          // Rotate: x' = lx*cosA + lz*sinA, z' = -lx*sinA + lz*cosA
          // (matches rotation.z = angle for a plane rotated x=-90°)
          const wx = dp.x + lx * cosA + lz * sinA;
          const wz = dp.z + (-lx * sinA + lz * cosA);
          dashPos.push(wx, dy, wz);
          dashNor.push(0, 1, 0);
        }
        dashIdx.push(base, base + 1, base + 2, base, base + 2, base + 3);
      }
    }
    if (dashIdx.length > 0) {
      const dashGeo = new THREE.BufferGeometry();
      dashGeo.setAttribute('position', new THREE.Float32BufferAttribute(dashPos, 3));
      dashGeo.setAttribute('normal', new THREE.Float32BufferAttribute(dashNor, 3));
      dashGeo.setIndex(dashIdx);
      const dashMesh = new THREE.Mesh(dashGeo, dashMat);
      dashMesh.renderOrder = 1;
      g.add(dashMesh);
    }
    // Intersections: one flat asphalt mesh per junction at a single height,
    // with painted markings as flat decals 1-2cm above (never coplanar).
    // Road ribbons end exactly at clip lines; the mesh begins there — zero
    // overlap by construction, so z-fighting is impossible (2026-09-27).
    buildIntersections(g, deckMat, earthMat);
    // Docks reach into the bay from both piers: west pier serves Harbor Cafe,
    // east pier serves Marina Works.
    buildBridge(g);
    const dockMat = toon(0x9a6147);
    DOCKS.forEach(([x, z]) => {
      const dock = new THREE.Mesh(new THREE.BoxGeometry(DOCK_W, .7, DOCK_D), dockMat); dock.position.set(x, -0.25, z); g.add(dock);
    });
    this.makeBuildings(g); this.makeGreenery(g); this.makeLighthouse(g);
    this.makeClockTower(g); this.makeObservatoryDome(g);
    this.makeBakeryDormer(g); this.makeMansionTerraces(g); this.makeBoats(g);
    this.makeLaundryLines(g); this.makeDockDressing(g); this.makeStreetLamps(g);
    this.makePark(g);
    return g;
  }

  private makePark(g: THREE.Group): void {
    // Golden Gate Park-style rectangle on the upper tier: manicured lawn, two
    // tree allées, crossing gravel paths, and a glass conservatory centerpiece.
    // Layout data comes from src/park.ts (tested); this only renders it.
    const [x0, z0, x1, z1] = PARK_RECT;
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const y = heightAt(cx, cz);
    const lawn = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), toon(0x7fae5c));
    lawn.rotation.x = -Math.PI / 2;
    lawn.position.set(cx, y + 0.1, cz);
    g.add(lawn);
    // Tree allées: one InstancedMesh for trunks, one for crowns.
    const dummy = new THREE.Object3D();
    const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.35, 0.55, 4, 7), toon(0x744a36), PARK_TREES.length);
    const crowns = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(2.6, 1), toon(0x4d976b), PARK_TREES.length);
    PARK_TREES.forEach((t, i) => {
      const ty = heightAt(t.x, t.z);
      dummy.rotation.set(0, i * 2.39996, 0); // deterministic golden-angle spin
      dummy.scale.setScalar(t.s);
      dummy.position.set(t.x, ty + 2 * t.s, t.z);
      dummy.updateMatrix();
      trunks.setMatrixAt(i, dummy.matrix);
      dummy.position.set(t.x, ty + 5.5 * t.s, t.z);
      dummy.updateMatrix();
      crowns.setMatrixAt(i, dummy.matrix);
    });
    trunks.instanceMatrix.needsUpdate = true;
    crowns.instanceMatrix.needsUpdate = true;
    g.add(trunks, crowns);
    // Crossing pale-gravel paths.
    const pathMat = toon(0xe8dcc0);
    for (const p of PARK_PATHS) {
      const path = new THREE.Mesh(new THREE.BoxGeometry(p.x1 - p.x0, 0.2, p.z1 - p.z0), pathMat);
      path.position.set((p.x0 + p.x1) / 2, y + 0.15, (p.z0 + p.z1) / 2);
      g.add(path);
    }
    // Conservatory: glass box body with a ribbed glass dome at the crossing.
    const c = PARK_CONSERVATORY;
    const glass = new THREE.MeshToonMaterial({ color: 0xcfe8e4, transparent: true, opacity: 0.5 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(c.w, c.h, c.d), glass);
    body.position.set(c.x, y + c.h / 2, c.z);
    g.add(body);
    const domeR = c.d / 2;
    const dome = new THREE.Mesh(new THREE.SphereGeometry(domeR, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), glass);
    dome.position.set(c.x, y + c.h, c.z);
    g.add(dome);
    const ribMat = toon(0x7a8a8a);
    for (let i = 0; i < 6; i++) {
      const rib = new THREE.Mesh(new THREE.TorusGeometry(domeR, 0.15, 6, 12, Math.PI), ribMat);
      rib.position.set(c.x, y + c.h, c.z);
      rib.rotation.y = (i / 6) * Math.PI;
      g.add(rib);
    }
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
    const docks: [number, number][] = DOCKS;
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
    this.lampMat = lampMat;
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
    // Moored alongside the docks: offset in z so hulls sit beside the dock,
    // not through it. DOCK_BOATS follows DOCKS (see src/world.ts).
    const rots = [0.08, -0.06, 0.1, -0.08, 0.06, -0.1];
    const spots: [number, number, number][] = DOCK_BOATS.map(([x, z], i) => [x, z, rots[i]]);
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
    // Facade instancing (Task 6): every repeated facade element across heroes
    // + infill is collected as plain records, then built as one
    // THREE.InstancedMesh per element type per material. Bodies and roofs stay
    // individual meshes (a few hundred boxes is fine; roofs vary per building).
    const F = emptyFacades();
    // Shared facade materials — one per element type, not one per building.
    const trimMat = toon(0xffdfaa), glassMat = toon(0x356f89), litMat = toon(0xffd98a), doorMat = toon(0x704638);
    const leafMat = toon(0x4d976b), petalMat = toon(0xff8baa);

    // One building pass: individual body + pyramid roof, facades collected.
    const addBuilding = (
      sx: number, sy: number, sz: number, minY: number, cx: number, cz: number,
      district: string, seedBase: number, colorIdx: number, bayWindow: boolean,
      bodyColor: number, roofColor: number,
    ): void => {
      const roofHeight = Math.min(4.2, sy * .28);
      const body = new THREE.Mesh(new THREE.BoxGeometry(sx, sy - roofHeight, sz), toon(bodyColor));
      body.position.set(cx, minY + (sy - roofHeight) * .5, cz); body.castShadow = true; body.receiveShadow = true;
      g.add(body);
      // These roofs replace the final few metres of each painted box, entirely within
      // its collision footprint, so they read from the air without enlarging an obstacle.
      const halfX = sx * .5, halfZ = sz * .5, roofBase = sy * .5 - roofHeight;
      const center = new THREE.Vector3(cx, minY + sy * .5, cz);
      const roofGeo = new THREE.BufferGeometry();
      roofGeo.setAttribute('position', new THREE.Float32BufferAttribute([
        -halfX, roofBase, -halfZ, halfX, roofBase, -halfZ, 0, sy * .5, 0,
         halfX, roofBase, -halfZ, halfX, roofBase,  halfZ, 0, sy * .5, 0,
         halfX, roofBase,  halfZ, -halfX, roofBase,  halfZ, 0, sy * .5, 0,
        -halfX, roofBase,  halfZ, -halfX, roofBase, -halfZ, 0, sy * .5, 0,
      ], 3)); roofGeo.setIndex([0, 2, 1, 3, 5, 4, 6, 8, 7, 9, 11, 10]); roofGeo.computeVertexNormals();
      const roof = new THREE.Mesh(roofGeo, toon(roofColor));
      roof.position.copy(center); roof.castShadow = true; g.add(roof);
      mergeFacades(F, collectFacades({ sx, sy, sz, minY, cx, cz, district, seedBase, colorIdx, bayWindow }));
    };

    // Heroes: keep the full-height invisible camera blocker; landmarks with
    // dedicated visuals (lighthouse tower, clock tower, observatory dome) skip
    // the generic box pass exactly as before.
    SOLIDS.forEach((s, i) => {
      const sx = s.max.x - s.min.x, sy = s.max.y - s.min.y, sz = s.max.z - s.min.z;
      const center = new THREE.Vector3((s.min.x + s.max.x) / 2, (s.min.y + s.max.y) / 2, (s.min.z + s.max.z) / 2);
      const blocker = solidBlocker(s); this.blockers.push(blocker);
      if (i === LIGHTHOUSE_TOWER_SOLID_INDEX) return;
      if (i === CLOCK_TOWER_SOLID_INDEX || i === OBSERVATORY_DOME_SOLID_INDEX) return;
      // District palette: each district paints its own bodies and roofs.
      const pal = (s.district && DISTRICT_PALETTES[s.district]) || DISTRICT_PALETTES['old-town'];
      addBuilding(sx, sy, sz, s.min.y, center.x, center.z, s.district ?? 'old-town', i, i, false,
        pal.bodies[i % pal.bodies.length], pal.roofs[i % pal.roofs.length]);
      // District dressing: bungalow lanes get picket fences + cottage gardens,
      // mansion hill gets low stone walls + formal walled gardens.
      if (s.district === 'bungalow-lanes') this.makePicketFence(g, s, i);
      if (s.district === 'mansion-hill') this.makeWalledGarden(g, s, i);
    });

    // Infill lots: seeded procedural town. Each lot gets a camera blocker with
    // the same AABB as its collision solid (see COLLISION_SOLIDS in simulation.ts).
    const lots = generateLots();
    const infillSolids = lotsToSolids(lots);
    // Stone foundation material for hillside lots (fills the downhill gap so
    // houses sit on slopes without floating or terrain poking through).
    const foundationMat = toon(0x8a7f72);
    // Driveway material: packed dirt path connecting each house to its road.
    const drivewayMat = toon(0xb8a88a);
    // Non-bridge road segments for driveway connections (bridges are elevated).
    const roadSegs = ROAD_EDGES.filter(e => e.kind !== 'bridge').map(e => {
      const a = nodePos(nodeById(e.a)), b = nodePos(nodeById(e.b));
      return { x0: a.x, z0: a.z, x1: b.x, z1: b.z };
    });
    lots.forEach((lot, li) => {
      const terr = lotTerrain(lot.x, lot.z, lot.w, lot.d);
      // House floor sits on the highest terrain under the footprint (matches
      // lotsToSolids); foundation fills down to the lowest point.
      const maxH = terr ? terr.maxH : heightAt(lot.x + lot.w / 2, lot.z + lot.d / 2);
      const minH = terr ? terr.minH : maxH;
      const baseY = maxH;
      const pal = DISTRICT_PALETTES[lot.district] || DISTRICT_PALETTES['old-town'];
      // Pastel Painted-Ladies bodies for bungalow-lanes lots with palette 1-4.
      const bodyColor = lot.palette === 0 ? pal.bodies[li % pal.bodies.length] : PASTEL_BODIES[lot.palette - 1];
      // Foundation: fills from the lowest terrain to the house floor on slopes.
      if (maxH - minH > 0.3) {
        const found = new THREE.Mesh(new THREE.BoxGeometry(lot.w, maxH - minH, lot.d), foundationMat);
        found.position.set(lot.x + lot.w / 2, minH + (maxH - minH) / 2, lot.z + lot.d / 2);
        found.castShadow = true; found.receiveShadow = true;
        g.add(found);
      }
      addBuilding(lot.w, lot.h, lot.d, baseY, lot.x + lot.w / 2, lot.z + lot.d / 2,
        lot.district, LOT_SEED_BASE + li, li, lot.bayWindow,
        bodyColor, pal.roofs[li % pal.roofs.length]);
      this.blockers.push(solidBlocker(infillSolids[li]));
      // Driveway: a 3m dirt path from the lot edge to the nearest road tube.
      // Every house gets a visible road connection (user feedback 2026-09-27).
      const cx = lot.x + lot.w / 2, cz = lot.z + lot.d / 2;
      let bpx = 0, bpz = 0, bdist = Infinity;
      for (const s of roadSegs) {
        const dx = s.x1 - s.x0, dz = s.z1 - s.z0;
        const len2 = dx * dx + dz * dz;
        let t = len2 > 0 ? ((cx - s.x0) * dx + (cz - s.z0) * dz) / len2 : 0;
        t = Math.max(0, Math.min(1, t));
        const px = s.x0 + t * dx, pz = s.z0 + t * dz;
        const d = Math.hypot(cx - px, cz - pz);
        if (d < bdist) { bdist = d; bpx = px; bpz = pz; }
      }
      if (bdist < Infinity && bdist > 0.5) {
        const dirX = bpx - cx, dirZ = bpz - cz;
        const dist = Math.hypot(dirX, dirZ);
        const nx = dirX / dist, nz = dirZ / dist;
        // Start at the lot AABB edge along the road direction.
        const eAlong = (lot.w * Math.abs(nx) + lot.d * Math.abs(nz)) / 2;
        const sx = cx + nx * eAlong, sz = cz + nz * eAlong;
        // End at the road tube edge (2.8m radius) so the path meets the asphalt.
        const ex = bpx - nx * 2.8, ez = bpz - nz * 2.8;
        const dlen = Math.hypot(ex - sx, ez - sz);
        if (dlen > 1.5) {
          const mx = (sx + ex) / 2, mz = (sz + ez) / 2;
          const my = (heightAt(sx, sz) + heightAt(ex, ez)) / 2 + 0.1;
          const drive = new THREE.Mesh(new THREE.BoxGeometry(3, 0.18, dlen), drivewayMat);
          drive.position.set(mx, my, mz);
          drive.rotation.y = Math.atan2(ex - sx, ez - sz);
          drive.receiveShadow = true;
          g.add(drive);
        }
      }
    });

    this.buildFacadeInstances(g, F, { trimMat, glassMat, litMat, doorMat, leafMat, petalMat });
  }

  /** Build phase: one THREE.InstancedMesh per facade element type per material. */
  private buildFacadeInstances(
    g: THREE.Group, F: FacadeSet,
    mats: { trimMat: THREE.Material; glassMat: THREE.Material; litMat: THREE.Material; doorMat: THREE.Material; leafMat: THREE.Material; petalMat: THREE.Material },
  ): void {
    const unitPlane = new THREE.PlaneGeometry(1, 1);
    const unitBox = new THREE.BoxGeometry(1, 1, 1);
    const unitSphere = new THREE.SphereGeometry(1, 6, 5);
    const dummy = new THREE.Object3D();
    // Fill an InstancedMesh from records. Instances span the whole town, so
    // unit-geometry bounds are meaningless: disable frustum culling.
    const fill = (mesh: THREE.InstancedMesh, recs: FacadeInstance[]): void => {
      recs.forEach((r, idx) => {
        dummy.position.set(r.x, r.y, r.z);
        dummy.rotation.set(r.rotX, r.rotY, 0);
        dummy.scale.set(r.sx, r.sy, r.sz);
        dummy.updateMatrix();
        mesh.setMatrixAt(idx, dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
      mesh.frustumCulled = false;
      g.add(mesh);
    };

    if (F.winLit.length) {
      const m = new THREE.InstancedMesh(unitPlane, mats.litMat, F.winLit.length);
      fill(m, F.winLit);
    }
    if (F.winUnlit.length) {
      const m = new THREE.InstancedMesh(unitPlane, mats.glassMat, F.winUnlit.length);
      fill(m, F.winUnlit);
    }
    if (F.doors.length) {
      const m = new THREE.InstancedMesh(unitPlane, mats.doorMat, F.doors.length);
      fill(m, F.doors);
    }
    if (F.sills.length) {
      const m = new THREE.InstancedMesh(unitBox, mats.trimMat, F.sills.length);
      fill(m, F.sills);
    }
    if (F.bays.length) {
      const m = new THREE.InstancedMesh(unitBox, mats.trimMat, F.bays.length);
      fill(m, F.bays);
    }
    if (F.flowerBoxes.length) {
      const m = new THREE.InstancedMesh(unitBox, mats.doorMat, F.flowerBoxes.length);
      fill(m, F.flowerBoxes);
    }
    if (F.petals.length) {
      const m = new THREE.InstancedMesh(unitSphere, mats.petalMat, F.petals.length);
      fill(m, F.petals);
    }
    if (F.leaves.length) {
      const m = new THREE.InstancedMesh(unitSphere, mats.leafMat, F.leaves.length);
      fill(m, F.leaves);
    }

    // Merchant-row awnings: one sloped unit quad geometry, three shared stripe
    // materials (previously one canvas texture per building).
    const awnGeo = new THREE.PlaneGeometry(1, 1, 1, 1);
    const apos = awnGeo.attributes.position;
    for (let v = 0; v < apos.count; v++) {
      if (apos.getY(v) < 0) apos.setZ(v, -0.7); // front (outward) edge dips down
    }
    awnGeo.computeVertexNormals();
    const awnColors: [string, string][] = [['#e86a6a', '#f5f0e1'], ['#5b7fa6', '#f5f0e1'], ['#6aa86a', '#f5f0e1']];
    F.awnings.forEach((recs, vi) => {
      if (!recs.length) return;
      const [c1, c2] = awnColors[vi % awnColors.length];
      const cnv = document.createElement('canvas'); cnv.width = 128; cnv.height = 16;
      const ctx = cnv.getContext('2d')!;
      for (let sIdx = 0; sIdx < 8; sIdx++) { ctx.fillStyle = sIdx % 2 ? c1 : c2; ctx.fillRect(sIdx * 16, 0, 16, 16); }
      const tex = new THREE.CanvasTexture(cnv); tex.colorSpace = THREE.SRGBColorSpace;
      const m = new THREE.InstancedMesh(awnGeo, new THREE.MeshToonMaterial({ map: tex, side: THREE.DoubleSide }), recs.length);
      fill(m, recs);
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
    // Formal walled garden around a Mansion Hill villa, built relative to the
    // villa's MANSION_GROUNDS rect (not hardcoded): walls on south/west/east,
    // north side open to the terraced platforms stepping to the loop road.
    // The shared boundary between the two villas' grounds gets a hedge, not
    // two coincident walls.
    const grounds = MANSION_GROUNDS.find(gr =>
      s.min.x >= gr[0] - 1 && s.max.x <= gr[2] + 1 &&
      s.min.z >= gr[1] - 1 && s.max.z <= gr[3] + 1);
    if (!grounds) return;
    const [gx0, gz0, gx1, gz1] = grounds;
    const groundY = s.min.y;
    const wallMat = toon(0xb8b0a0), capMat = toon(0xd8d0c0), hedgeMat = toon(0x3d8a5f), soilMat = toon(0x6b4a2f);
    const flowerMats = [toon(0xff8baa), toon(0xffd94a), toon(0xffffff)];
    // Shared boundary with the neighboring grounds? (avoids coincident walls)
    const sharedWest = MANSION_GROUNDS.some(gr => gr !== grounds && Math.abs(gr[2] - gx0) < 0.01);
    const sharedEast = MANSION_GROUNDS.some(gr => gr !== grounds && Math.abs(gr[0] - gx1) < 0.01);
    // Walls: [centerX, centerZ, lenX, lenZ]. Hedges: same format.
    const walls: [number, number, number, number][] = [
      [(gx0 + gx1) / 2, gz0, gx1 - gx0, 0.5], // south
    ];
    const hedges: [number, number, number, number][] = [
      [(gx0 + gx1) / 2, gz0 + 1.5, gx1 - gx0 - 3, 0.8],
    ];
    // West wall (or shared-boundary hedge), from the south grounds edge
    // up to the villa's north edge; the terraces take over beyond that.
    const sideLen = s.max.z - gz0;
    const sideCz = (gz0 + s.max.z) / 2;
    // Shared boundary: only the WEST property plants the hedge, centered on
    // the boundary line. The east property skips its west side entirely —
    // two offset hedges in the narrow gap read as a collision (user feedback
    // 2026-09-27).
    if (sharedWest) {
      // Western neighbor owns this boundary; nothing to plant.
    } else {
      walls.push([gx0, sideCz, 0.5, sideLen]);
      hedges.push([gx0 + 1.5, sideCz, 0.8, sideLen - 3]);
    }
    if (sharedEast) hedges.push([gx1, sideCz, 0.8, sideLen - 2]);
    else {
      walls.push([gx1, sideCz, 0.5, sideLen]);
      hedges.push([gx1 - 1.5, sideCz, 0.8, sideLen - 3]);
    }
    // Flower beds in the side garden strips (between the villa and the side walls).
    const beds: [number, number][] = [];
    const bedStripZ0 = gz0 + 3, bedStripZ1 = s.max.z - 2;
    if (bedStripZ1 - bedStripZ0 >= 5) {
      const sideStrips: [number, number][] = [];
      // West strip (if not a shared boundary and wide enough).
      if (!sharedWest && s.min.x - gx0 >= 5) sideStrips.push([gx0 + 2.5, s.min.x - 2.5]);
      // East strip.
      if (!sharedEast && gx1 - s.max.x >= 5) sideStrips.push([s.max.x + 2.5, gx1 - 2.5]);
      for (const [sx0, sx1] of sideStrips) {
        const bx = (sx0 + sx1) / 2;
        const n = Math.max(1, Math.floor((bedStripZ1 - bedStripZ0) / 8));
        for (let bi = 0; bi < n; bi++) {
          const bz = bedStripZ0 + (bi + 0.5) * ((bedStripZ1 - bedStripZ0) / n);
          beds.push([bx, bz]);
        }
      }
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
    // Sprawling parkland: specimen trees in the open lawns (not just formal
    // hedges/beds) so the grounds read as an expansive estate, not a walled
    // courtyard. Deterministic placement.
    const treeSpots: [number, number][] = [];
    const southZ0 = gz0 + 5, southZ1 = s.min.z - 4;
    if (southZ1 - southZ0 > 6) {
      const n = Math.max(2, Math.floor((gx1 - gx0 - 10) / 11));
      for (let i = 0; i < n; i++) {
        const tx = gx0 + 7 + (i + 0.5) * ((gx1 - gx0 - 14) / n) + (rnd() - 0.5) * 3;
        const tz = (southZ0 + southZ1) / 2 + (rnd() - 0.5) * 2;
        treeSpots.push([tx, tz]);
      }
    }
    if (!sharedWest && s.min.x - gx0 > 9) treeSpots.push([(gx0 + s.min.x) / 2, (southZ0 + southZ1) / 2]);
    if (!sharedEast && gx1 - s.max.x > 9) treeSpots.push([(s.max.x + gx1) / 2, (southZ0 + southZ1) / 2]);
    const trunkMat = toon(0x744a36), crownMat = toon(0x4d976b);
    for (const [tx, tz] of treeSpots) {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.65, 3.2, 7), trunkMat);
      trunk.position.set(tx, groundY + 1.6, tz);
      trunk.castShadow = true;
      g.add(trunk);
      const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(3, 1), crownMat);
      crown.position.set(tx, groundY + 5, tz);
      crown.castShadow = true;
      g.add(crown);
    }
  }

  private makeGreenery(g: THREE.Group): void {
    const trunk = toon(0x744a36), leaf = toon(0x4d976b), leaf2 = toon(0x3d8a5f), flower = toon(0xff8baa);
    // Two-zone forest: dense woods on the northern hills (the town's natural
    // boundary — a visual wall of green), sparse elsewhere. Deterministic seed.
    const rand = mulberry32(1337);
    // Tree exclusion: keep crowns off roads, out of houses/buildings, and out
    // of the formal mansion gardens (user feedback 2026-09-27: trees were
    // colliding with roads, houses, terrain).
    const lots = generateLots();
    const roadSegs = ROAD_EDGES.map(e => {
      const a = nodeById(e.a), b = nodeById(e.b);
      return { x0: a.x, z0: a.z, x1: b.x, z1: b.z };
    });
    const treeClear = (x: number, z: number): boolean => {
      for (const s of roadSegs) {
        const dx = s.x1 - s.x0, dz = s.z1 - s.z0;
        const len2 = dx * dx + dz * dz;
        let t = len2 > 0 ? ((x - s.x0) * dx + (z - s.z0) * dz) / len2 : 0;
        t = Math.max(0, Math.min(1, t));
        if (Math.hypot(x - (s.x0 + t * dx), z - (s.z0 + t * dz)) < 4.5) return false;
      }
      for (const l of lots) {
        if (x > l.x - 2 && x < l.x + l.w + 2 && z > l.z - 2 && z < l.z + l.d + 2) return false;
      }
      for (const s of SOLIDS) {
        if (x > s.min.x - 2 && x < s.max.x + 2 && z > s.min.z - 2 && z < s.max.z + 2) return false;
      }
      if (MANSION_GROUNDS.some(gr => x > gr[0] && x < gr[2] && z > gr[1] && z < gr[3])) return false;
      return true;
    };
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
      if (!treeClear(x, z)) continue;
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
      if (!treeClear(x, z)) continue;
      if (STOPS.some(s => Math.hypot(x - s.position.x, z - s.position.z) < 24)) continue;
      if (x > PARK_RECT[0] && x < PARK_RECT[2] && z > PARK_RECT[1] && z < PARK_RECT[3]) continue; // keep the park clear
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
    // Positions follow the solids so the Phase 1 layout pass can move them.
    const cottage = SOLIDS[3];
    const towerS = SOLIDS[LIGHTHOUSE_TOWER_SOLID_INDEX];
    const hx = (cottage.min.x + cottage.max.x) / 2, hz = (cottage.min.z + cottage.max.z) / 2;
    const rock = new THREE.Mesh(new THREE.CylinderGeometry(20, 24, 9, 18), toon(0x8a7f72));
    rock.position.set(hx, cottage.min.y + 2.5, hz); rock.castShadow = true; g.add(rock);
    const x = (towerS.min.x + towerS.max.x) / 2, z = (towerS.min.z + towerS.max.z) / 2;
    const dy = towerS.min.y; // visual tower base sat at y=3 when the solid base was y=0
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 5.2, 26, 16), toon(0xfff0d4));
    tower.position.set(x, 16 + dy, z); tower.castShadow = true; g.add(tower);
    // Red bands track the tower's taper so they sit proud of the white shell.
    const towerR = (y: number) => 5.2 - (y - 3) * (1.6 / 26);
    for (const y of [8, 14, 20, 26]) {
      const stripe = new THREE.Mesh(
        new THREE.CylinderGeometry(towerR(y + 1.1) + 0.15, towerR(y - 1.1) + 0.15, 2.2, 16),
        toon(0xd25c51));
      stripe.position.set(x, y + dy, z); g.add(stripe);
    }
    const gallery = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 1.2, 16), toon(0x3e6680));
    gallery.position.set(x, 29.6 + dy, z); g.add(gallery);
    const lampRoom = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 3.4, 12),
      new THREE.MeshBasicMaterial({ color: 0xffe9ad }));
    lampRoom.position.set(x, 31.8 + dy, z); g.add(lampRoom);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(3.4, 2.6, 12), toon(0xc9534e));
    cap.position.set(x, 34.8 + dy, z); g.add(cap);
    // Rotating beam: two opposite translucent blades from the lamp room.
    const beamGroup = new THREE.Group(); beamGroup.position.set(x, 31.8 + dy, z);
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xffdf8e, transparent: true, opacity: .28, depthWrite: false, side: THREE.DoubleSide });
    this.beamMat = beamMat;
    [0, Math.PI].forEach(a => {
      const blade = new THREE.Mesh(new THREE.ConeGeometry(3.2, 26, 12, 1, true), beamMat);
      blade.rotation.z = Math.PI / 2; blade.rotation.y = a;
      blade.position.set(Math.cos(a) * 13, 0, -Math.sin(a) * 13);
      beamGroup.add(blade);
    });
    g.add(beamGroup); this.beamGroup = beamGroup;
    this.beamLight = new THREE.PointLight(0xffdc92, 60, 90); this.beamLight.position.set(x, 32 + dy, z); g.add(this.beamLight);
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
    // Follows the clock-tower SOLIDS so the Phase 1 layout pass can move it.
    const ct = SOLIDS[CLOCK_TOWER_SOLID_INDEX];
    const cx = (ct.min.x + ct.max.x) / 2, cz = (ct.min.z + ct.max.z) / 2;
    const by = ct.min.y; // base elevation; all visual heights hang off this
    const sandstone = toon(0xd4a574), terracotta = toon(0xb65c3f), trim = toon(0xffdfaa);
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(8, 20, 8), sandstone);
    shaft.position.set(cx, by + 10, cz); shaft.castShadow = true; g.add(shaft); // y: by..by+20
    // Belfry: slightly wider band with arched openings (dark insets).
    const belfry = new THREE.Mesh(new THREE.BoxGeometry(8.6, 3, 8.6), sandstone);
    belfry.position.set(cx, by + 21.5, cz); belfry.castShadow = true; g.add(belfry); // y: by+20..by+23
    const openingMat = toon(0x2a2a35);
    const faceDefs: Array<[number, number, number]> = [
      [0, -4.32, Math.PI], [0, 4.32, 0], [-4.32, 0, -Math.PI / 2], [4.32, 0, Math.PI / 2],
    ];
    for (const [ox, oz, rot] of faceDefs) {
      // Clock face group: local +Z is the outward face normal.
      const faceGroup = new THREE.Group();
      faceGroup.position.set(cx + ox, by + 17, cz + oz);
      faceGroup.rotation.y = rot;
      g.add(faceGroup);
      // Face disc: 0.3 thick, centered at local z=0 → surface at z=0.15.
      const face = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.3, 24),
        new THREE.MeshBasicMaterial({ color: 0xf8f0d8 }));
      face.rotation.x = Math.PI / 2;
      faceGroup.add(face);
      // Tick marks: 12 small boxes around the rim, at z=0.16 (just off the face).
      const tickMat = new THREE.MeshBasicMaterial({ color: 0x2a2a35 });
      for (let ti = 0; ti < 12; ti++) {
        const tick = new THREE.Mesh(new THREE.BoxGeometry(0.09, ti % 3 === 0 ? 0.34 : 0.2, 0.02), tickMat);
        const a = (ti / 12) * Math.PI * 2;
        tick.position.set(Math.sin(a) * 1.9, Math.cos(a) * 1.9, 0.16);
        tick.rotation.z = -a;
        faceGroup.add(tick);
      }
      // Hands: pivot groups at z=0.30 — a full 0.15 clear of the face surface
      // (no z-fighting). Each hand mesh extends +Y from its pivot; the render
      // loop sets pivot.rotation.z = -angle (clockwise).
      const handMat = new THREE.MeshBasicMaterial({ color: 0x2a2a35 });
      const hourPivot = new THREE.Group();
      hourPivot.position.set(0, 0, 0.30);
      const hour = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.1, 0.06), handMat);
      hour.position.y = 0.45; // pivot slightly below center so tail shows
      hourPivot.add(hour);
      faceGroup.add(hourPivot);
      const minutePivot = new THREE.Group();
      minutePivot.position.set(0, 0, 0.36); // minute hand above hour hand
      const minute = new THREE.Mesh(new THREE.BoxGeometry(0.13, 1.65, 0.06), handMat);
      minute.position.y = 0.62;
      minutePivot.add(minute);
      faceGroup.add(minutePivot);
      // Center cap.
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.1, 12), handMat);
      cap.rotation.x = Math.PI / 2;
      cap.position.z = 0.38;
      faceGroup.add(cap);
      this.clockHands.push({ hour: hourPivot, minute: minutePivot });
      // Belfry opening (dark arch suggestion).
      const opening = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2), openingMat);
      opening.position.set(cx + ox * 1.01, by + 21.5, cz + oz * 1.01); opening.rotation.y = rot; g.add(opening);
    }
    // Pointed terracotta roof (pyramid). Collision tops at by+28 with the visual.
    const roofGeo = new THREE.ConeGeometry(6.2, 5, 4);
    const roof = new THREE.Mesh(roofGeo, terracotta);
    roof.position.set(cx, by + 25.5, cz); roof.rotation.y = Math.PI / 4; roof.castShadow = true; g.add(roof);
    const finial = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), trim);
    finial.position.set(cx, by + 28.2, cz); g.add(finial);
    // Corner trim for a finished look.
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const corner = new THREE.Mesh(new THREE.BoxGeometry(0.7, 20, 0.7), trim);
      corner.position.set(cx + sx * 3.8, by + 10, cz + sz * 3.8); g.add(corner);
    }
  }

  private makeObservatoryDome(g: THREE.Group): void {
    // Observatory Rise: stone drum + copper-green dome on the Hill Observatory
    // roof, offset from the delivery pad. The dome is the landmark.
    // Follows the dome SOLIDS so the Phase 1 layout pass can move it.
    const ds = SOLIDS[OBSERVATORY_DOME_SOLID_INDEX];
    const cx = (ds.min.x + ds.max.x) / 2, cz = (ds.min.z + ds.max.z) / 2;
    const roofY = ds.min.y;
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
    // Follows the bakery SOLIDS so the Phase 1 layout pass can move it; the roof
    // surface height is derived from the pyramid roof geometry in makeBuildings.
    const b = SOLIDS[0];
    const bcx = (b.min.x + b.max.x) / 2, bcz = (b.min.z + b.max.z) / 2;
    const cx = bcx, cz = bcz - 8;
    const sx = b.max.x - b.min.x, sy = b.max.y - b.min.y, sz = b.max.z - b.min.z;
    const roofH = Math.min(4.2, sy * .28);
    const f = Math.max(0, Math.min(1 - Math.abs(cx - bcx) / (sx / 2), 1 - Math.abs(cz - bcz) / (sz / 2)));
    const roofY = (b.max.y - roofH) + f * roofH;
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
    // (SOLIDS[17] and SOLIDS[18]) toward the loop road. Stone retaining walls,
    // green garden tops. Decorative. Follows the villa SOLIDS so the Phase 1
    // layout pass can move them.
    // NOTE: no collision solids — MIN_ALTITUDE keeps Meg >=3m above terrain,
    // so she can only graze the tallest garden top (3.25m). If the flight
    // floor is ever lowered, add SOLIDS for these.
    const stone = toon(0x9a9a92), garden = toon(0x6aa86a);
    const terrace = (x0: number, x1: number, yBase: number, yTop: number, z0: number, z1: number) => {
      const h = yTop - yBase; // wall rises from the terrain to yTop
      const wall = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, h, z1 - z0), stone);
      wall.position.set((x0 + x1) / 2, yBase + h / 2, (z0 + z1) / 2);
      wall.castShadow = true; wall.receiveShadow = true; g.add(wall);
      const top = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0 - 0.6, 0.25, z1 - z0 - 0.6), garden);
      top.position.set((x0 + x1) / 2, yTop + 0.12, (z0 + z1) / 2);
      top.receiveShadow = true; g.add(top);
    };
    // Villa 1 and Villa 2: terraces step north toward the loop road's north leg (u1–u4).
    for (const vi of [17, 18]) {
      const v = SOLIDS[vi];
      const yBase = v.min.y;
      terrace(v.min.x, v.max.x, yBase, yBase + 1.5, v.max.z, v.max.z + 4.5);
      terrace(v.min.x + 4, v.max.x - 4, yBase, yBase + 3, v.max.z + 2.25, v.max.z + 4.5);
    }
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
