import type { Screen } from './Screen';
import { peekSlot, getLastSlot, migrateLegacySave, getMuted, setMuted, type SlotInfo } from '../storage';
import { icon } from '../ui';
import { GameAudio } from '../audio';
import { createState } from '../simulation';
import type { GameState } from '../types';

/** Menu screen: New Game / Continue / Load from slots.
 * Shown immediately on page load. No heavy initialization. */
export class MenuScreen implements Screen {
  private root: HTMLElement;
  private el: HTMLElement | null = null;
  private onSelect: (slotId: number, isNew: boolean) => void;
  private audio: GameAudio;
  private menuState: GameState;

  constructor(root: HTMLElement, onSelect: (slotId: number, isNew: boolean) => void, audio: GameAudio) {
    this.root = root;
    this.onSelect = onSelect;
    this.audio = audio;
    this.menuState = createState();
  }

  /** Called by ScreenManager's rAF loop. Drives menu music. */
  update(_dt: number): void {
    this.audio.update(this.menuState, false);
  }

  enter(): void {
    migrateLegacySave();
    // Reset audio snapshot so menu music starts clean (no SFX from diffing
    // against a previous screen's state).
    this.audio.resetSnapshot();
    const lastSlot = getLastSlot();
    const slots: SlotInfo[] = [1, 2, 3].map(peekSlot);
    const lastInfo = slots.find(s => s.slotId === lastSlot);

    this.el = document.createElement('main');
    this.el.className = 'menu-screen';
    this.el.innerHTML = `
      <div class="menu-card">
        <h1>Meg's Delivery Service</h1>
        <p class="menu-tagline">A little witch. A big sky.</p>
        ${lastInfo?.exists ? `
          <button class="menu-btn primary" data-action="continue" data-slot="${lastSlot}">
            Continue <span>→</span>
            <small>Slot ${lastSlot} · ${lastInfo.deliveries ?? 0} deliveries · ${lastInfo.coins ?? 0} coins</small>
          </button>
        ` : ''}
        <button class="menu-btn" data-action="new">
          New Game <span>→</span>
          <small>Start fresh in an empty slot</small>
        </button>
        <div class="slot-list">
          ${slots.map(s => `
            <button class="slot-btn ${s.exists ? '' : 'empty'}" data-action="slot" data-slot="${s.slotId}" ${!s.exists ? 'disabled' : ''}>
              <b>Slot ${s.slotId}</b>
              ${s.exists
                ? `<small>${s.deliveries ?? 0} deliveries · ${s.coins ?? 0} coins<br>${s.timestamp ? new Date(s.timestamp).toLocaleDateString() : ''}</small>`
                : `<small>Empty</small>`}
            </button>
          `).join('')}
        </div>
        <div style="display:flex;justify-content:center;margin-top:18px">
          <button class="icon-button icon-button-sm" data-action="mute" aria-label="${getMuted() ? 'Unmute audio' : 'Mute audio'}">${icon(getMuted() ? 'sound-off' : 'sound')}</button>
        </div>
      </div>
    `;

    this.el.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('button[data-action]');
      if (!btn) return;
      // Gesture unlock: sync audio with persisted preference. Creates the
      // AudioContext on user gesture (if unmuted). Respects mute preference.
      this.audio.setMuted(getMuted());
      this.audio.sfx('ui_click');
      const action = btn.getAttribute('data-action');
      const slot = parseInt(btn.getAttribute('data-slot') ?? '1', 10);
      if (action === 'mute') {
        const m = !getMuted();
        setMuted(m);
        this.audio.setMuted(m);
        btn.setAttribute('aria-label', m ? 'Unmute audio' : 'Mute audio');
        btn.innerHTML = icon(m ? 'sound-off' : 'sound');
        return;
      }
      if (action === 'continue') this.onSelect(slot, false);
      else if (action === 'slot') this.onSelect(slot, false);
      else if (action === 'new') {
        // Find first empty slot, or ask to overwrite slot 1
        const empty = slots.find(s => !s.exists);
        this.onSelect(empty ? empty.slotId : 1, true);
      }
    });

    this.root.appendChild(this.el);
    // Remove the boot loader (menu is ready)
    document.getElementById('boot-loader')?.remove();
  }

  exit(): void {
    this.el?.remove();
    this.el = null;
    // DO NOT dispose audio — it's a shared instance.
  }
}
