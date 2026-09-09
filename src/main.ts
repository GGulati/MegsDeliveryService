import './style.css';
import { createState, startTutorial, step, toggleHover, interact, setPaused, nearestStop, startRun, chooseJob, returnHome, getTarget } from './simulation';
import { STOPS } from './world';
import { GameRenderer } from './scene';
import { UI } from './ui';
import { Input } from './input';

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

function pause(reason = 'Take a little breather.') { setPaused(state, true, reason); input?.clear(); accumulator = 0; draw(0); }
function isPortrait() { return matchMedia('(max-width: 700px) and (orientation: portrait)').matches; }
function resume() { if (isPortrait() || document.hidden || contextLost) return; setPaused(state, false); input?.clear(); accumulator = 0; lastFrame = performance.now(); draw(0); }
function fullscreen() { if (document.fullscreenElement) void document.exitFullscreen?.(); else void document.documentElement.requestFullscreen?.().catch(() => {}); }
const ui = new UI(root, {
  start() { if (state.profile.tutorialDone) startRun(state, testing ? 42 : undefined); else startTutorial(state); input?.clear(); (document.activeElement as HTMLElement)?.blur(); draw(0); },
  interact() { interact(state); draw(0); },
  hover() { toggleHover(state); draw(0); },
  pause: () => pause(), resume,
  mute() { muted = !muted; draw(0); },
  quality() { lowQuality = !lowQuality; draw(0); },
  motion() { reducedMotion = !reducedMotion; draw(0); }, fullscreen,
  chooseJob(index) { chooseJob(state, index); input.clear(); draw(0); },
  returnHome() { returnHome(state); input.clear(); draw(0); },
  nextDay() { startRun(state, testing ? 42 : undefined); input.clear(); draw(0); },
});

try { renderer = new GameRenderer(canvas); }
catch { root.innerHTML = '<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>'; throw new Error('WebGL 2 is unavailable.'); }
input = new Input(canvas, { hover: () => { toggleHover(state); draw(0); }, interact: () => { interact(state); draw(0); }, pause: () => state.paused ? resume() : pause(), fullscreen });

function draw(dt: number) {
  if (!renderer || contextLost) return;
  renderer.render(state, dt, { reducedMotion, lowQuality });
  const target = getTarget(state) ?? STOPS[0];
  const home = STOPS[0].position;
  const dx = home.x - state.player.position.x, dz = home.z - state.player.position.z;
  const homeDistance = Math.hypot(dx, dz);
  const nearby = nearestStop(state);
  const ready = !!nearby && (state.mode === 'tutorial' ? state.tutorialStage === 2 && nearby.id === STOPS[1].id : state.mode === 'flight' && (nearby.id === 'home' || nearby.id === state.run?.job?.to));
  ui.render(state, { muted, lowQuality, reducedMotion, targetName: target.name,
    targetDistance: Math.hypot(target.position.x - state.player.position.x, target.position.z - state.player.position.z),
    canInteract: ready, speed: state.player.speed, status: '', timeRemaining: state.run ? Math.max(0,480-state.run.elapsed) : undefined,
    homeBearing: (Math.atan2(dx,-dz)-state.player.yaw)*180/Math.PI,homeDistance,homeMinimum: homeDistance/(18*(1+state.profile.upgrades.speed*.1)),
    targetAltitude: target.position.y-state.player.position.y, interactionLabel: nearby?.id === 'home' && state.mode === 'flight' ? 'Bank earnings' : 'Deliver parcel' });
}
function advance(ms: number) {
  if (state.paused || document.hidden || contextLost || isPortrait()) { accumulator = 0; draw(0); return; }
  accumulator += Math.max(0, ms) / 1000;
  while (accumulator + 1e-10 >= 1 / 60) { step(state, input.sample(), 1 / 60); accumulator -= 1 / 60; }
  draw(Math.min(ms / 1000, .1));
}
function frame(now: number) { const dt = lastFrame ? Math.min(now - lastFrame, 100) : 0; lastFrame = now; if (!testing) advance(dt); requestAnimationFrame(frame); }
window.addEventListener('resize', () => { renderer.resize(); if (isPortrait()) pause('Turn your phone sideways to fly.'); draw(0); });
document.addEventListener('visibilitychange', () => { if (document.hidden) pause('Welcome back. Ready to fly?'); });
window.addEventListener('blur', () => { input.clear(); if (state.mode !== 'title') pause(); });
canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); pause('The sky is taking a moment.'); contextLost = true; });
canvas.addEventListener('webglcontextrestored', () => { contextLost = false; draw(0); });
Object.assign(window, {
  advanceTime: (ms: number) => advance(ms),
  render_game_to_text: () => JSON.stringify({ coordinates: 'x right/east, y up, z south; yaw 0 faces -z', mode: state.mode, paused: state.paused, player: state.player, tutorialStage: state.tutorialStage, message: state.message, run: state.run, profile: state.profile, stops: STOPS, nearby: nearestStop(state)?.id ?? null }),
});
if (testing) Object.assign(window, { __game: { get state() { return state; }, reset() { state = createState(); accumulator = 0; draw(0); }, draw: () => draw(0) } });
draw(0);
requestAnimationFrame(frame);
