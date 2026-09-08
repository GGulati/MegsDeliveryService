import type { GameState } from './types';

export interface UIActions {
  start: () => void;
  interact: () => void;
  hover: () => void;
  pause: () => void;
  resume: () => void;
  mute: () => void;
  quality: () => void;
  motion: () => void;
  fullscreen: () => void;
}

export interface UIInfo {
  muted: boolean;
  lowQuality: boolean;
  reducedMotion: boolean;
  targetName: string;
  targetDistance: number;
  canInteract: boolean;
  speed: number;
  status: string;
}

const icon = (name: 'star' | 'envelope' | 'pause' | 'sound' | 'fullscreen') => {
  const paths = {
    star: '<path d="m12 2 2.8 6.5L22 9l-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9l7.2-.5Z"/>',
    envelope: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    pause: '<path d="M7 4h3v16H7zm7 0h3v16h-3z"/>',
    sound: '<path d="M4 10h4l5-4v12l-5-4H4zM16 9c1 .8 1 5.2 0 6m2-9c3 2.6 3 9.4 0 12"/>',
    fullscreen: '<path d="M4 9V5h4m8 0h4v4M20 15v4h-4M8 19H4v-4"/>',
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
};

export class UI {
  private el: Record<string, HTMLElement> = {};
  private previousRevision = -1;

  constructor(root: HTMLElement, actions: UIActions) {
    root.classList.add('meg-ui');
    root.innerHTML = `
      <header class="gamebar" aria-label="Flight controls">
        <div class="gamebar-brand">MEG’S <span>Delivery Service</span></div>
        <div class="sun-pill" aria-label="Time until nightfall"><i></i><span>Before nightfall</span></div>
        <div class="gamebar-actions">
          <button class="icon-button" id="audio-btn" type="button" aria-label="Mute audio">${icon('sound')}</button>
          <button class="icon-button" id="pause-btn" type="button" aria-label="Pause flight">${icon('pause')}</button>
        </div>
      </header>
      <main class="screen-layer">
        <section class="title-card panel" id="title-card" aria-labelledby="title-heading">
          <div class="eyebrow">${icon('star')} A LITTLE WITCH. A BIG SKY.</div>
          <h1 id="title-heading">MEG’S<br><em>Delivery</em> Service</h1>
          <p class="premise">A small spell, a satchel of letters, and one lovely evening to bring every parcel home.</p>
          <p class="key-hint">Steer with <kbd>WASD</kbd> / arrows · rise with <kbd>W</kbd> · hover with <kbd>Space</kbd></p>
          <button id="start-btn" class="primary-button" type="button">Start flying <span>→</span></button>
          <div class="title-controls" aria-label="Settings">
            <button id="quality-btn" type="button">Quality: <b>High</b></button>
            <button id="motion-btn" type="button">Motion: <b>Full</b></button>
            <button id="fullscreen-btn" type="button">${icon('fullscreen')} Fullscreen</button>
          </div>
          <footer>MADE OF LITTLE ADVENTURES <span>⌨ / touch to fly</span></footer>
        </section>

        <section class="flight-hud" id="flight-hud" aria-label="Flight information">
          <div class="destination-card panel">
            <div class="eyebrow">${icon('envelope')} Next delivery</div>
            <strong id="target-name">The village</strong>
            <span id="target-distance">— m away</span>
            <button id="interact-btn" class="context-button" type="button">Deliver parcel <kbd>Enter</kbd></button>
          </div>
          <div class="tutorial-bubble" id="tutorial-bubble"><b>Pip says:</b> <span id="tutorial-text">Let’s take the scenic route!</span></div>
          <div class="flight-readout panel"><span><b id="speed-value">0</b> m/s</span><button id="hover-btn" type="button">Hover <kbd>Space</kbd></button></div>
        </section>

        <section class="pause-card panel" id="pause-card" aria-labelledby="pause-heading">
          <div class="eyebrow">${icon('star')} Taking a breather</div>
          <h2 id="pause-heading">The sky will wait.</h2>
          <p id="pause-reason">Rest your wings whenever you need.</p>
          <p class="key-hint">When you return: <kbd>WASD</kbd> or arrows to steer · <kbd>Q</kbd>/<kbd>E</kbd> for speed</p>
          <button id="resume-btn" class="primary-button" type="button">Continue flying <span>→</span></button>
          <div class="title-controls"><button id="pause-quality-btn" type="button">Quality</button><button id="pause-motion-btn" type="button">Motion</button></div>
        </section>

        <aside class="rotate-prompt" aria-live="polite"><span>↻</span><b>Turn your device</b><small>Landscape gives Meg more sky to fly.</small></aside>
      </main>
      <div class="touch-controls" aria-label="Touch flight controls">
        <div id="joystick" class="joystick" role="group" aria-label="Flight stick"><i></i><span>steer</span></div>
        <label class="throttle-label">Speed <input id="throttle" type="range" min="-1" max="1" value="0" step="0.05" aria-label="Throttle: slow to fast"></label>
      </div>`;
    const get = (id: string) => root.querySelector<HTMLElement>(`#${id}`)!;
    ['title-card','flight-hud','pause-card','pause-reason','target-name','target-distance','interact-btn','tutorial-bubble','tutorial-text','speed-value','hover-btn','audio-btn','pause-btn','quality-btn','motion-btn','pause-quality-btn','pause-motion-btn'].forEach(id => this.el[id] = get(id));
    get('start-btn').addEventListener('click', actions.start);
    get('interact-btn').addEventListener('click', event => { actions.interact(); (event.currentTarget as HTMLButtonElement).blur(); });
    get('hover-btn').addEventListener('click', event => { actions.hover(); (event.currentTarget as HTMLButtonElement).blur(); });
    get('pause-btn').addEventListener('click', actions.pause);
    get('resume-btn').addEventListener('click', actions.resume);
    get('audio-btn').addEventListener('click', actions.mute);
    [get('quality-btn'), get('pause-quality-btn')].forEach(x => x.addEventListener('click', actions.quality));
    [get('motion-btn'), get('pause-motion-btn')].forEach(x => x.addEventListener('click', actions.motion));
    get('fullscreen-btn').addEventListener('click', actions.fullscreen);
  }

  render(state: GameState, info: UIInfo): void {
    const title = state.mode === 'title';
    const paused = !title && state.paused;
    this.el['title-card'].hidden = !title;
    this.el['flight-hud'].hidden = title || paused;
    this.el['pause-card'].hidden = !paused;
    this.el['target-name'].textContent = info.targetName;
    this.el['target-distance'].textContent = info.targetDistance > 0 ? `${Math.round(info.targetDistance)} m away` : 'Right here';
    this.el['speed-value'].textContent = String(Math.round(info.speed));
    const deliver = this.el['interact-btn'] as HTMLButtonElement;
    deliver.disabled = !info.canInteract;
    deliver.textContent = info.canInteract ? 'Deliver parcel' : 'Get a little closer';
    const hover = this.el['hover-btn'] as HTMLButtonElement;
    hover.classList.toggle('is-active', state.player.hover);
    hover.innerHTML = `${state.player.hover ? 'Resume flight' : 'Hover'} <kbd>Space</kbd>`;
    this.el['audio-btn'].setAttribute('aria-label', info.muted ? 'Unmute audio' : 'Mute audio');
    this.el['audio-btn'].classList.toggle('is-muted', info.muted);
    this.el['quality-btn'].innerHTML = `Quality: <b>${info.lowQuality ? 'Low' : 'High'}</b>`;
    this.el['motion-btn'].innerHTML = `Motion: <b>${info.reducedMotion ? 'Low' : 'Full'}</b>`;
    this.el['tutorial-text'].textContent = info.status || state.message || 'Let’s take the scenic route!';
    this.el['tutorial-bubble'].hidden = title || (!state.mode.includes('tutorial') && !info.status);
    if (this.previousRevision !== state.revision) {
      this.el['pause-reason'].textContent = state.pauseReason || 'Rest your wings whenever you need.';
      this.previousRevision = state.revision;
    }
  }
}
