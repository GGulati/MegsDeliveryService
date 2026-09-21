import type { FlightInput } from './types';

export interface InputCallbacks { hover: () => void; interact: () => void; pause: () => void; fullscreen: () => void }

export class Input {
  private keys = new Set<string>();
  private stick = { x: 0, y: 0 };
  private stickPointer: number | null = null;
  private cutPending = false;
  private readonly keydown: (event: KeyboardEvent) => void;
  private readonly keyup: (event: KeyboardEvent) => void;
  private readonly canvas: HTMLElement;
  private readonly joystick?: HTMLElement;
  private readonly stickEnabled: () => boolean;

  constructor(canvas: HTMLElement, callbacks: InputCallbacks, stickEnabled: () => boolean = () => true) {
    this.canvas = canvas;
    this.stickEnabled = stickEnabled;
    this.keydown = (event) => {
      if (this.inControl(event.target)) return;
      const key = event.key.toLowerCase();
      if (['arrowleft','arrowright','arrowup','arrowdown','w','a','s','d','q','e',' ','enter','escape','p','f'].includes(key)) event.preventDefault();
      if (!event.repeat && key === ' ') callbacks.hover();
      if (!event.repeat && key === 'enter') callbacks.interact();
      if (!event.repeat && (key === 'escape' || key === 'p')) callbacks.pause();
      if (!event.repeat && key === 'f') callbacks.fullscreen();
      this.keys.add(key);
    };
    this.keyup = (event) => this.keys.delete(event.key.toLowerCase());
    window.addEventListener('keydown', this.keydown);
    window.addEventListener('keyup', this.keyup);
    canvas.addEventListener('blur', () => this.clear());
    this.joystick = document.querySelector<HTMLElement>('#joystick') || undefined;
    if (this.joystick) this.joystick.hidden = true;
    this.bindTouch();
  }

  sample(): FlightInput {
    const pressed = (a: string, b: string) => Number(this.keys.has(a) || this.keys.has(b));
    const turn = (pressed('arrowright', 'd') - pressed('arrowleft', 'a')) + this.stick.x;
    const climb = (pressed('arrowup', 'w') - pressed('arrowdown', 's')) - this.stick.y;
    // The touch stick is the gas pedal: holding it drives the cruise trim up
    // (+1, same as holding E); releasing it collapses the trim via
    // cutThrottle so the drone brakes instead of flying on. Keyboard trim
    // (Q/E) is untouched — release-to-brake is a touch-stick behavior.
    const driving = this.stickPointer !== null;
    const throttle = pressed('e', 'e') - pressed('q', 'q') + (driving ? 1 : 0);
    const cutThrottle = this.cutPending;
    this.cutPending = false;
    return { turn: Math.max(-1, Math.min(1, turn)), climb: Math.max(-1, Math.min(1, climb)), throttle: Math.max(-1, Math.min(1, throttle)), cutThrottle };
  }

  clear(): void { this.keys.clear(); this.stickPointer = null; this.stick.x = this.stick.y = 0; this.cutPending = false; if (this.joystick) { this.joystick.style.removeProperty('--stick-x'); this.joystick.style.removeProperty('--stick-y'); this.joystick.classList.remove('is-dragging'); this.joystick.hidden = true; } }
  dispose(): void { window.removeEventListener('keydown', this.keydown); window.removeEventListener('keyup', this.keyup); this.clear(); }

  private inControl(target: EventTarget | null): boolean { return target instanceof Element && !!target.closest('input, button, select, textarea, [contenteditable="true"]'); }
  private bindTouch(): void {
    if (!this.joystick) return;
    const joy = this.joystick;
    const update = (event: PointerEvent) => {
      const box = joy.getBoundingClientRect(), radius = box.width * .34;
      const x = event.clientX - (box.left + box.width / 2), y = event.clientY - (box.top + box.height / 2);
      const length = Math.max(radius, Math.hypot(x, y)); this.stick.x = x / length; this.stick.y = y / length;
      joy.style.setProperty('--stick-x', `${this.stick.x * radius}px`); joy.style.setProperty('--stick-y', `${this.stick.y * radius}px`);
    };
    const begin = (event: PointerEvent) => {
      // The stick floats: it appears wherever the finger lands, not in a
      // fixed corner. Mouse input never spawns it (desktop flies keyboard).
      if (event.pointerType === 'mouse' || this.stickPointer !== null || !this.stickEnabled()) return;
      this.stickPointer = event.pointerId;
      try { this.canvas.setPointerCapture(event.pointerId); } catch { /* pointer already released */ }
      const half = joy.offsetWidth / 2 || 56;
      joy.style.left = `${event.clientX - half}px`; joy.style.top = `${event.clientY - half}px`;
      joy.hidden = false;
      joy.classList.add('is-dragging');
      update(event);
    };
    const move = (event: PointerEvent) => { if (event.pointerId === this.stickPointer) update(event); };
    const end = (event: PointerEvent) => {
      if (event.pointerId !== this.stickPointer) return;
      this.stickPointer = null; this.stick.x = this.stick.y = 0;
      joy.style.removeProperty('--stick-x'); joy.style.removeProperty('--stick-y');
      joy.classList.remove('is-dragging'); joy.hidden = true;
      // Releasing the stick is braking: the next sample collapses the cruise
      // trim the stick was driving, so the drone slows to a stop.
      this.cutPending = true;
    };
    this.canvas.addEventListener('pointerdown', begin);
    this.canvas.addEventListener('pointermove', move);
    this.canvas.addEventListener('pointerup', end);
    this.canvas.addEventListener('pointercancel', end);
    // If capture is revoked without a pointerup/cancel (e.g. setPointerCapture
    // threw and the finger lifted over a panel), the stick must still end —
    // otherwise touch input soft-locks at full trim with no way to re-grab.
    this.canvas.addEventListener('lostpointercapture', end);
  }
}
