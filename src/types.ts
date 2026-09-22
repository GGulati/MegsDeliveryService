export interface Vec3 { x: number; y: number; z: number }
export interface Stop { id: string; name: string; subtitle: string; position: Vec3; color: string }
export interface Solid { min: Vec3; max: Vec3 }
export interface FlightInput {
  turn: number; climb: number; throttle: number;
  // One-shot: the touch stick was just released, so the cruise trim the stick
  // was driving collapses and the drone brakes instead of flying on.
  cutThrottle?: boolean;
}
export interface Player { position: Vec3; yaw: number; pitch: number; speed: number; throttle: number; hover: boolean; velocity: Vec3; brakeHold: boolean }
export interface Profile { coins: number; upgrades: { speed: number; handling: number; braking: number }; furniture: string[]; tutorialDone: boolean; runs: number; deliveries: number }
export interface Job { from: string; to: string; payout: number; label: string; parcel: string }
/** A parcel drop committed by pressing interact: it lands during a short
 * animation before the delivery resolves. `parcel` is false for home banking,
 * where Meg carries nothing. */
export interface DeliveryDrop { stopId: string; t: number; parcel: boolean }
/** An auto-descent in progress: after the halo fades, Meg lowers herself to
 * just above the pad before the parcel drops the last stretch. The run clock
 * and flight input freeze through the descent, like the drop itself. */
export interface DeliveryDescent { stopId: string }
export interface Run { seed: number; elapsed: number; earnings: number; deliveries: number; job: Job | null; offers: Job[]; returning: boolean; lastStop: string }
export type Mode = 'title' | 'tutorial' | 'flight' | 'offers' | 'home' | 'summary';
export type HomePanel = 'none' | 'jobs' | 'brooms' | 'decor' | 'cat';
/** Seconds left on the pre-drop halo fade-out; 0 when no auto-drop is pending.
 * While fading, the run clock and flight physics freeze, and only a fresh
 * maneuver (not a steadily held stick) cancels the pending drop. */
export interface GameState { mode: Mode; player: Player; profile: Profile; run: Run | null; paused: boolean; pauseReason: string; message: string; tutorialStage: number; drop: DeliveryDrop | null; descent: DeliveryDescent | null; haloFade: number; fadeSnap: { turn: number; throttle: number } | null; fadeCooldown: number; homePosition: { x: number; z: number }; homeFacing: number; homePanel: HomePanel; summary: { success: boolean; earnings: number; deliveries: number } | null; revision: number; coarsePointer: boolean }
export interface RenderSettings { reducedMotion: boolean; lowQuality: boolean }
