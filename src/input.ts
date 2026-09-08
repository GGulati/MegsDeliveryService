import type { FlightInput } from './types';

export interface InputCallbacks { hover: () => void; interact: () => void; pause: () => void; fullscreen: () => void }

export class Input {
  private keys = new Set<string>();
  private stick = { x: 0, y: 0 };
  private throttle = 0;
  private stickPointer: number | null = null;
  private readonly keydown: (event: KeyboardEvent) => void;
  private readonly keyup: (event: KeyboardEvent) => void;
  private readonly slider?: HTMLInputElement;
  private readonly joystick?: HTMLElement;

  constructor(canvas: HTMLElement, callbacks: InputCallbacks) {
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
    this.slider = document.querySelector<HTMLInputElement>('#throttle') || undefined;
    this.bindTouch();
  }

  sample(): FlightInput {
    const pressed = (a: string, b: string) => Number(this.keys.has(a) || this.keys.has(b));
    const turn = (pressed('arrowright', 'd') - pressed('arrowleft', 'a')) + this.stick.x;
    const climb = (pressed('arrowup', 'w') - pressed('arrowdown', 's')) - this.stick.y;
    const throttle = pressed('e', 'e') - pressed('q', 'q') + this.throttle;
    return { turn: Math.max(-1, Math.min(1, turn)), climb: Math.max(-1, Math.min(1, climb)), throttle: Math.max(-1, Math.min(1, throttle)) };
  }

  clear(): void { this.keys.clear(); this.stickPointer = null; this.stick.x = this.stick.y = this.throttle = 0; if (this.slider) this.slider.value = '0'; this.joystick?.style.removeProperty('--stick-x'); this.joystick?.style.removeProperty('--stick-y'); this.joystick?.classList.remove('is-dragging'); }
  dispose(): void { window.removeEventListener('keydown', this.keydown); window.removeEventListener('keyup', this.keyup); this.clear(); }

  private inControl(target: EventTarget | null): boolean { return target instanceof Element && !!target.closest('input, button, select, textarea, [contenteditable="true"]'); }
  private bindTouch(): void {
    if (this.joystick) {
      const update = (event: PointerEvent) => {
        const box = this.joystick!.getBoundingClientRect(), radius = box.width * .34;
        const x = event.clientX - (box.left + box.width / 2), y = event.clientY - (box.top + box.height / 2);
        const length = Math.max(radius, Math.hypot(x, y)); this.stick.x = x / length; this.stick.y = y / length;
        this.joystick!.style.setProperty('--stick-x', `${this.stick.x * radius}px`); this.joystick!.style.setProperty('--stick-y', `${this.stick.y * radius}px`);
      };
      this.joystick.addEventListener('pointerdown', e => { if (this.stickPointer !== null) return; this.stickPointer = e.pointerId; this.joystick!.setPointerCapture(e.pointerId); this.joystick!.classList.add('is-dragging'); update(e); });
      this.joystick.addEventListener('pointermove', e => { if (e.pointerId === this.stickPointer) update(e); });
      const end = (e: PointerEvent) => { if (e.pointerId !== this.stickPointer) return; this.stickPointer = null; this.stick.x = this.stick.y = 0; this.joystick!.style.removeProperty('--stick-x'); this.joystick!.style.removeProperty('--stick-y'); this.joystick!.classList.remove('is-dragging'); };
      this.joystick.addEventListener('pointerup', end); this.joystick.addEventListener('pointercancel', end); this.joystick.addEventListener('lostpointercapture', end);
    }
    if (this.slider) {
      const sync = () => this.throttle = Number(this.slider!.value);
      const reset = () => { this.throttle = 0; this.slider!.value = '0'; };
      this.slider.addEventListener('input', sync); this.slider.addEventListener('pointerup', reset); this.slider.addEventListener('pointercancel', reset);
    }
  }
}
