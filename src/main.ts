import './style.css';
import { createState, startTutorial, step, toggleHover, interact, setPaused, nearestStop, startRun, chooseJob, returnHome, getTarget } from './simulation';
import { STOPS } from './world';
import { GameRenderer } from './scene';
import { UI } from './ui';
import { Input } from './input';
import { HomeUI } from './home-ui';
import { TouchControls } from './touch-controls';
import { enterHome, closeHomePanel, buyUpgrade, buyFurniture, nearbyStation } from './home';
import { SaveStore, SAVE_KEY } from './storage';
import { GameAudio } from './audio';

const canvas = document.querySelector<HTMLCanvasElement>('#game')!;
const root = document.querySelector<HTMLElement>('#app')!;
const params = new URLSearchParams(location.search);
const testing = params.get('test') === '1';
let state = createState();
let muted = true;
let lowQuality = matchMedia('(pointer: coarse)').matches;
let reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
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
let savePeriod=0;

function pause(reason = 'Take a little breather.') { setPaused(state, true, reason); input?.clear(); accumulator = 0; persist(); draw(0); }
function resume() { if (!bootReady || document.hidden || contextLost) return; setPaused(state, false); input?.clear(); accumulator = 0; lastFrame = performance.now(); persist();draw(0); }
function fullscreen() { if (document.fullscreenElement) void document.exitFullscreen?.(); else void document.documentElement.requestFullscreen?.().catch(() => {}); }
const ui = new UI(root, {
  start() { if(!bootReady)return; if (state.profile.tutorialDone) enterHome(state); else startTutorial(state); input?.clear(); (document.activeElement as HTMLElement)?.blur(); persist(); draw(0); },
  hover() { if(!bootReady)return; toggleHover(state);persist(); draw(0); },
  pause: () => pause(), resume,
  mute() { muted = !muted; audio.setMuted(muted); draw(0); },
  quality() { lowQuality = !lowQuality; draw(0); },
  motion() { reducedMotion = !reducedMotion; draw(0); }, fullscreen,
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
// The touch layer is constructed after every screen panel so it sits last in
// DOM order (above the panels); see TouchControls for the stacking contract.
const touchControls=new TouchControls(root);
const saveBanner=document.createElement('aside');saveBanner.className='save-status';saveBanner.setAttribute('aria-live','polite');root.append(saveBanner);
saveBanner.addEventListener('click',event=>{
  const button=(event.target as HTMLElement).closest('button');
  if(button?.dataset.save==='retry')void boot();
  if(button?.dataset.save==='session'){store.continueSession();state=createState();bootReady=true;saveKind='session';saveMessage='Playing without saving. Your existing save is untouched.';draw(0);}
  if(button?.dataset.save==='export'){const raw=localStorage.getItem(SAVE_KEY);if(raw){const link=document.createElement('a');const url=URL.createObjectURL(new Blob([raw],{type:'application/json'}));link.href=url;link.download='megs-save-recovery.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}}
});

try { renderer = new GameRenderer(canvas); }
catch { root.innerHTML = '<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>'; throw new Error('WebGL 2 is unavailable.'); }
input = new Input(canvas, { hover: () => {if(!bootReady)return; toggleHover(state); persist(); draw(0); }, interact: () => {if(!bootReady)return; interact(state);persist(); draw(0); }, pause: () => {if(!bootReady)return;if(state.mode==='home'&&state.homePanel!=='none'){closeHomePanel(state);persist();draw(0);}else if(state.paused)resume();else pause();}, fullscreen });

function persist(){if(!bootReady||!store.canSave)return;if(!store.save(state)){saveKind='session';saveMessage=store.message;}}
async function boot(){bootReady=false;saveKind='loading';saveMessage='Opening your little world…';draw(0);const result=await store.acquire();saveKind=result.kind;saveMessage=result.message;if(result.state)state=result.state;bootReady=result.kind==='ready'||result.kind==='session';input?.clear();accumulator=0;draw(0);}

function draw(dt: number) {
  audio.update(state, !bootReady || contextLost);
  document.body.classList.toggle('reduced-motion', reducedMotion);
  if (!renderer || contextLost) return;
  renderer.render(state, dt, { reducedMotion, lowQuality });
  const target = getTarget(state) ?? STOPS[0];
  const home = STOPS[0].position;
  const dx = home.x - state.player.position.x, dz = home.z - state.player.position.z;
  const homeDistance = Math.hypot(dx, dz);
  ui.render(state, { muted, lowQuality, reducedMotion, targetName: target.name,
    targetDistance: Math.hypot(target.position.x - state.player.position.x, target.position.z - state.player.position.z),
    speed: state.player.speed, status: '', timeRemaining: state.run ? Math.max(0,480-state.run.elapsed) : undefined,
    homeBearing: (Math.atan2(dx,-dz)-state.player.yaw)*180/Math.PI,homeDistance,homeMinimum: homeDistance/(18*(1+state.profile.upgrades.speed*.1)),
    targetAltitude: target.position.y-state.player.position.y });
  homeUI.render(state);
  touchControls.render(state);
  if(!bootReady)document.querySelector<HTMLElement>('.home-interface')!.hidden=true;
  if(state.mode==='home')document.querySelector<HTMLElement>('#flight-hud')!.hidden=true;
  (document.querySelector('#start-btn') as HTMLButtonElement).disabled=!bootReady;
  if(state.profile.tutorialDone)document.querySelector('#start-btn')!.innerHTML='Come on in <span>→</span>';
  document.querySelector('#next-day-btn')!.innerHTML='Back to your room <span>→</span>';
  document.querySelector<HTMLElement>('.sun-pill')!.hidden=!state.run;
  saveBanner.hidden=saveKind==='ready';
  const bannerKey=saveKind+saveMessage;
  if(saveBanner.dataset.key!==bannerKey){saveBanner.dataset.key=bannerKey;saveBanner.textContent=saveMessage;if(saveKind==='readonly')saveBanner.insertAdjacentHTML('beforeend','<br><button data-save="retry">Retry</button>');if(saveKind==='invalid')saveBanner.insertAdjacentHTML('beforeend','<br><button data-save="export">Download original save</button><button data-save="session">Play without saving</button>');}
}
function advance(ms: number) {
  if (!bootReady||state.paused || document.hidden || contextLost) { accumulator = 0; draw(0); return; }
  const oldMode=state.mode;
  accumulator += Math.max(0, ms) / 1000;
  while (accumulator + 1e-10 >= 1 / 60) { step(state, input.sample(), 1 / 60); accumulator -= 1 / 60; }
  savePeriod+=ms;if(savePeriod>=5000||oldMode!==state.mode){persist();savePeriod=0;}
  draw(Math.min(ms / 1000, .1));
}
function frame(now: number) { const dt = lastFrame ? Math.min(now - lastFrame, 100) : 0; lastFrame = now; if (!testing) advance(dt); requestAnimationFrame(frame); }
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
