export interface Vec3 { x: number; y: number; z: number }
export interface Stop { id: string; name: string; subtitle: string; position: Vec3; color: string }
export interface Solid { min: Vec3; max: Vec3 }
export interface FlightInput { turn: number; climb: number; throttle: number }
export interface Player { position: Vec3; yaw: number; pitch: number; speed: number; throttle: number; hover: boolean; velocity: Vec3 }
export interface Profile { coins: number; upgrades: { speed: number; handling: number; braking: number }; furniture: string[]; tutorialDone: boolean; runs: number; deliveries: number }
export interface Job { from: string; to: string; payout: number; label: string; parcel: string }
/** A parcel drop committed by pressing interact: it lands during a short
 * animation before the delivery resolves. `parcel` is false for home banking,
 * where Meg carries nothing. */
export interface DeliveryDrop { stopId: string; t: number; parcel: boolean }
export interface Run { seed: number; elapsed: number; earnings: number; deliveries: number; job: Job | null; offers: Job[]; returning: boolean; lastStop: string }
export type Mode = 'title' | 'tutorial' | 'flight' | 'offers' | 'home' | 'summary';
export type HomePanel = 'none' | 'jobs' | 'brooms' | 'decor' | 'cat';
export interface GameState { mode: Mode; player: Player; profile: Profile; run: Run | null; paused: boolean; pauseReason: string; message: string; tutorialStage: number; drop: DeliveryDrop | null; homePosition: { x: number; z: number }; homeFacing: number; homePanel: HomePanel; summary: { success: boolean; earnings: number; deliveries: number } | null; revision: number }
export interface RenderSettings { reducedMotion: boolean; lowQuality: boolean }
