import './style.css';
import { createState, startTutorial, step, toggleHover, interact, setPaused, nearestStop, startRun, chooseJob, returnHome, getTarget, relativeBearing } from './simulation';
import { STOPS } from './world';
import { GameRenderer } from './scene';
import { UI } from './ui';
import { Input } from './input';
import { HomeUI } from './home-ui';
import { TouchControls, landingCommitted, touchControlsVisible } from './touch-controls';
import { enterHome, closeHomePanel, buyUpgrade, buyFurniture, nearbyStation } from './home';
import { SaveStore } from './storage';
import { GameAudio } from './audio';

const canvas = document.querySelector<HTMLCanvasElement>('#game')!;
const root = document.querySelector<HTMLElement>('#app')!;
const params = new URLSearchParams(location.search);
const testing = params.get('test') === '1';
const stutterDebug = params.get('stutter') === '1';
const stutterFrames: { t: number; dt: number }[] = [];
let stutterResumeAt = 0;
let stutterWorst = 0;
let stutterWorstPhases = '';
let stutterCurPhases = '';
let stutterTapPhases = '';
let stutterPauseAt = 0;
let stutterEl: HTMLElement | null = null;
if (stutterDebug && typeof PerformanceObserver !== 'undefined') {
  try {
    const __lt = new PerformanceObserver((list) => {
      for (const e of list.getEntries()) {
        stutterTapPhases += `longtask:${e.duration.toFixed(0)}ms `;
      }
    });
    __lt.observe({ entryTypes: ['longtask'] });
  } catch { /* not supported */ }
}
if (stutterDebug) {
  stutterEl = document.createElement('div');
  stutterEl.style.cssText = 'position:fixed;top:8px;left:8px;z-index:9999;background:rgba(0,40,0,.85);color:#0f0;font:11px monospace;padding:8px;max-width:92vw;white-space:pre-wrap;pointer-events:none';
  stutterEl.textContent = 'stutter debug on';
  document.body.appendChild(stutterEl);
}
function stutterReport() {
  if (!stutterDebug || !stutterEl) return;
  const since = stutterFrames.filter(f => f.t >= stutterResumeAt).map(f => f.dt);
  const worst = [...since].sort((a, b) => b - a).slice(0, 6).map(x => x.toFixed(0));
  const maxAll = stutterFrames.length ? Math.max(...stutterFrames.map(f => f.dt)).toFixed(0) : '0';
  const pauseDur = stutterPauseAt ? ((stutterResumeAt - stutterPauseAt) / 1000).toFixed(0) : '?';
  stutterEl.textContent = `frames=${stutterFrames.length} maxEver=${maxAll}ms pauseDur=${pauseDur}s\nworst since resume: ${worst.join(', ')}ms\nworst frame ${stutterWorst.toFixed(0)}ms: ${stutterTapPhases}${stutterWorstPhases}`;
}
function stutterPhase(name: string, ms: number, tap = false) {
  if (!stutterDebug) return;
  const entry = `${name}:${ms.toFixed(0)}ms `;
  if (tap) stutterTapPhases += entry; else stutterCurPhases += entry;
}
let state = createState();
let muted = true;
// The stick visual lives inside the coarse-pointer-gated touch layer, so the
// stick must only spawn on coarse pointers too — otherwise a touch-laptop
// finger drag would drive an invisible stick with no affordance.
const coarsePointer = matchMedia('(pointer: coarse)').matches;
state.coarsePointer = coarsePointer;
let renderer: GameRenderer;
let input: Input;
let accumulator = 0;
let lastFrame = 0;
let contextLost = false;
const store = new SaveStore();
const audio = new GameAudio();
let bootReady=false;
let saveKind='loading';
let saveMessage='Opening your little world…';
let saveFyi: string | null = null;
let fyiTimer: ReturnType<typeof setTimeout> | undefined;
/** Shows a short-lived FYI in the save banner, then hides it again. */
function flashSaveFyi(message: string, ms = 8000): void {
  saveFyi = message;
  clearTimeout(fyiTimer);
  fyiTimer = setTimeout(() => { saveFyi = null; draw(0); }, ms);
}
let savePeriod=0;

function pause(reason = 'Take a little breather.') { if (stutterDebug) stutterPauseAt = performance.now(); setPaused(state, true, reason); input?.clear(); accumulator = 0; persist(); draw(0); }
function resume() { if (!bootReady || document.hidden || contextLost) return; const __t0 = stutterDebug ? performance.now() : 0; if (stutterDebug) { stutterResumeAt = performance.now(); stutterFrames.length = 0; stutterWorst = 0; stutterWorstPhases = ''; stutterTapPhases = ''; } setPaused(state, false); input?.clear(); accumulator = 0; lastFrame = performance.now(); persist(); if (stutterDebug) stutterPhase('resumeTap', performance.now() - __t0, true);
  // No synchronous draw(0) here: the rAF loop draws on the next frame anyway.
  // A full WebGL render inside the tap handler blocks the main thread on
  // mobile (30-80ms) before the browser can paint the dismissed modal,
  // which reads as a freeze. (Fixed 2026-09-28.)
}
function fullscreen() { if (document.fullscreenElement) void document.exitFullscreen?.(); else void document.documentElement.requestFullscreen?.().catch(() => {}); }
const ui = new UI(root, {
  start() { if(!bootReady)return; if (state.profile.tutorialDone) enterHome(state); else startTutorial(state); input?.clear(); (document.activeElement as HTMLElement)?.blur(); persist(); draw(0); },
  pause: () => pause(), resume,
  unstuck() {
    if(!bootReady)return;
    // Teleport to 5m above the nearest stop — stops are on clear pads/rooftops.
    const p = state.player.position;
    let best = STOPS[0], bestD = Infinity;
    for (const s of STOPS) {
      const d = (s.position.x - p.x) ** 2 + (s.position.z - p.z) ** 2;
      if (d < bestD) { bestD = d; best = s; }
    }
    state.player.position = { x: best.position.x, y: best.position.y + 5, z: best.position.z };
    state.player.velocity = { x: 0, y: 0, z: 0 };
    state.player.speed = 0;
    state.player.throttle = 0; // else she re-launches at prior speed after rescue
    resume(); input?.clear(); persist(); draw(0);
  },
  mute() { muted = !muted; audio.setMuted(muted); draw(0); },
  fullscreen,
  chooseJob(index) { if(!bootReady)return; chooseJob(state, index); input.clear(); persist(); draw(0); },
  returnHome() { if(!bootReady)return; returnHome(state); input.clear(); persist(); draw(0); },
  nextDay() { if(!bootReady)return; enterHome(state); input.clear(); persist(); draw(0); },
});
const homeUI=new HomeUI(root,{
  interact(){if(!bootReady)return;interact(state);input.clear();persist();draw(0);},
  close(){if(!bootReady)return;closeHomePanel(state);input.clear();persist();draw(0);},
  start(){if(!bootReady)return;startRun(state,testing?42:undefined);input.clear();persist();draw(0);},
  upgrade(track){if(!bootReady)return;buyUpgrade(state,track);persist();draw(0);},
  furnish(id){if(!bootReady)return;buyFurniture(state,id);persist();draw(0);},
});
// The touch layer carries the floating-stick visual; the stick itself spawns
// on the canvas below the panels (see Input.bindTouch).
const touchControls=new TouchControls(root);
const saveBanner=document.createElement('aside');saveBanner.className='save-status';saveBanner.setAttribute('aria-live','polite');root.append(saveBanner);
saveBanner.addEventListener('click',event=>{
  const button=(event.target as HTMLElement).closest('button');
  if(button?.dataset.save==='retry')void boot();
});

try { renderer = new GameRenderer(canvas); }
catch { root.innerHTML = '<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>'; throw new Error('WebGL 2 is unavailable.'); }
input = new Input(canvas, { hover: () => {if(!bootReady)return; toggleHover(state); persist(); draw(0); }, interact: () => {if(!bootReady||state.mode!=='home')return; interact(state);persist(); draw(0); }, pause: () => {if(!bootReady)return;if(state.mode==='home'&&state.homePanel!=='none'){closeHomePanel(state);persist();draw(0);}else if(state.paused)resume();else pause();}, fullscreen }, () => coarsePointer && !landingCommitted(state) && touchControlsVisible(state.mode, state.paused, state.homePanel));

function persist(){if(!bootReady||!store.canSave)return;if(!store.save(state)){saveKind='session';saveMessage=store.message;}}
async function boot(){bootReady=false;saveKind='loading';saveMessage='Opening your little world…';draw(0);const result=await store.acquire();
  if(result.kind==='invalid'){
    // No valid save to load: discard the unreadable bytes and start a new
    // game with saving on. A brief banner says what happened; no decisions.
    store.discardUnreadable();
    state=createState();state.coarsePointer=coarsePointer;
    renderer.setSeed(state.seed);
    bootReady=true;saveKind='ready';saveMessage='';
    persist();
    flashSaveFyi('Your saved game could not be read, so it was discarded and a new game was started.');
    input?.clear();accumulator=0;draw(0);
    return;
  }
  saveKind=result.kind;saveMessage=result.message;if(result.state)state=result.state;renderer.setSeed(state.seed);if(result.kind==='ready'&&result.seedMigrated&&store.canSave)store.save(state);bootReady=result.kind==='ready'||result.kind==='session';input?.clear();accumulator=0;draw(0);}

function draw(dt: number) {
  audio.update(state, !bootReady || contextLost);
  if (!renderer || contextLost) return;
  const __d0 = stutterDebug ? performance.now() : 0;
  renderer.render(state, dt);
  if (stutterDebug) stutterPhase('gl', performance.now() - __d0);
  const target = getTarget(state) ?? STOPS[0];
  ui.render(state, { muted, targetName: target.name,
    targetDistance: Math.hypot(target.position.x - state.player.position.x, target.position.z - state.player.position.z),
    targetBearing: relativeBearing(state.player.position, target.position, state.player.yaw),
    speed: state.player.speed, status: '', timeRemaining: state.run ? Math.max(0,360-state.run.elapsed) : undefined });
  homeUI.render(state);
  touchControls.render(state);
  if(!bootReady)document.querySelector<HTMLElement>('.home-interface')!.hidden=true;
  if(state.mode==='home')document.querySelector<HTMLElement>('#flight-hud')!.hidden=true;
  (document.querySelector('#start-btn') as HTMLButtonElement).disabled=!bootReady;
  if(state.profile.tutorialDone)document.querySelector('#start-btn')!.innerHTML='Come on in <span>→</span>';
  document.querySelector('#next-day-btn')!.innerHTML='Back to your room <span>→</span>';
  saveBanner.hidden=saveKind==='ready'&&saveFyi===null;
  const bannerKey=saveKind+saveMessage+(saveFyi??'');
  if(saveBanner.dataset.key!==bannerKey){saveBanner.dataset.key=bannerKey;saveBanner.textContent=saveKind==='ready'?(saveFyi??''):saveMessage;if(saveKind==='readonly')saveBanner.insertAdjacentHTML('beforeend','<br><button data-save="retry">Retry</button>');}
}
function advance(ms: number) {
  if (!bootReady||state.paused || document.hidden || contextLost) { accumulator = 0; draw(0); return; }
  const __a0 = stutterDebug ? performance.now() : 0;
  const oldMode=state.mode;
  accumulator += Math.max(0, ms) / 1000;
  while (accumulator + 1e-10 >= 1 / 60) { step(state, input.sample(), 1 / 60); accumulator -= 1 / 60; }
  if (stutterDebug) stutterPhase('sim', performance.now() - __a0);
  savePeriod+=ms;if(savePeriod>=5000||oldMode!==state.mode){persist();savePeriod=0;}
  const __a1 = stutterDebug ? performance.now() : 0;
  draw(Math.min(ms / 1000, .1));
  if (stutterDebug) stutterPhase('draw', performance.now() - __a1);
}
function frame(now: number) { const rawDt = lastFrame ? now - lastFrame : 0; const dt = Math.min(rawDt, 100); lastFrame = now; if (stutterDebug) stutterCurPhases = ''; if (!testing) advance(dt); if (stutterDebug) { stutterFrames.push({ t: now, dt: rawDt }); if (stutterFrames.length > 900) stutterFrames.shift(); if (rawDt > stutterWorst) { stutterWorst = rawDt; stutterWorstPhases = stutterCurPhases; } if (stutterFrames.length % 15 === 0) stutterReport(); } requestAnimationFrame(frame); }
window.addEventListener('resize', () => { renderer.resize(); draw(0); });
document.addEventListener('visibilitychange', () => { if (document.hidden) pause('Welcome back. Ready to fly?'); });
window.addEventListener('blur', () => { input.clear(); if (state.mode !== 'title') pause(); });
canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); pause('The sky is taking a moment.'); contextLost = true; });
canvas.addEventListener('webglcontextrestored', () => { contextLost = false; draw(0); });
window.addEventListener('pagehide',()=>{persist();bootReady=false;audio.update(state,true);store.release();});
window.addEventListener('pageshow',event=>{if(event.persisted)void boot();});
Object.assign(window, {
  advanceTime: (ms: number) => advance(ms),
  render_game_to_text: () => JSON.stringify({ coordinates: 'x right/east, y up, z south; yaw 0 faces -z', mode: state.mode, paused: state.paused, player: state.player, tutorialStage: state.tutorialStage, message: state.message, run: state.run, profile: state.profile, stops: STOPS, nearby: nearestStop(state)?.id ?? null,homePosition:state.homePosition,homePanel:state.homePanel,station:nearbyStation(state)?.id,saveKind }),
});
if (testing) Object.assign(window, { __game: { get state() { return state; },get ready(){return bootReady;}, reset() { state = createState(); accumulator = 0; draw(0); }, draw: () => draw(0), audio: () => audio.debugState(), persist, renderer: () => renderer } });
draw(0);
requestAnimationFrame(frame);
void boot();
