import type { Screen } from './Screen';
import { peekSlot, getLastSlot, migrateLegacySave, getMuted, setMuted, type SlotInfo } from '../storage';
import { icon } from '../ui';

/** Menu screen: New Game / Continue / Load from slots.
 * Shown immediately on page load. No heavy initialization. */
export class MenuScreen implements Screen {
  private root: HTMLElement;
  private el: HTMLElement | null = null;
  private onSelect: (slotId: number, isNew: boolean) => void;

  constructor(root: HTMLElement, onSelect: (slotId: number, isNew: boolean) => void) {
    this.root = root;
    this.onSelect = onSelect;
  }

  enter(): void {
    migrateLegacySave();
    const lastSlot = getLastSlot();
    const slots: SlotInfo[] = [1, 2, 3].map(peekSlot);
    const lastInfo = slots.find(s => s.slotId === lastSlot);

    this.el = document.createElement('main');
    this.el.className = 'menu-screen';
    this.el.innerHTML = `
      <div class="menu-card" style="position:relative">
        <button class="icon-button icon-button-sm" data-action="mute" aria-label="${getMuted() ? 'Unmute audio' : 'Mute audio'}" style="position:absolute;top:16px;right:16px">${icon(getMuted() ? 'sound-off' : 'sound')}</button>
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
      </div>
    `;

    this.el.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('button[data-action]');
      if (!btn) return;
      const action = btn.getAttribute('data-action');
      const slot = parseInt(btn.getAttribute('data-slot') ?? '1', 10);
      if (action === 'mute') {
        const m = !getMuted();
        setMuted(m);
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
  }
}
