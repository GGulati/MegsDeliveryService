import type { FlightInput, GameState, HomePanel, Profile } from './types';

export const HOME_STATIONS = [
  { id: 'jobs', name: 'Job Board', x: -5, z: -3 },
  { id: 'brooms', name: 'Broom Workshop', x: 5, z: -3 },
  { id: 'decor', name: 'Decor Corner', x: -5, z: 3 },
  { id: 'cat', name: 'Pumpkin', x: 4, z: 3 },
] as const;

export const FURNITURE = [
  { id: 'rug', name: 'Woven Rug', cost: 30, description: 'A soft landing for tired feet.' },
  { id: 'plant', name: 'Moonleaf Plant', cost: 40, description: 'A little green for Meg\'s room.' },
  { id: 'shelf', name: 'Parcel Shelf', cost: 50, description: 'A home for souvenirs and parcels.' },
  { id: 'lamp', name: 'Warm Lamp', cost: 60, description: 'A cozy glow after a long shift.' },
  { id: 'cushion', name: 'Window Cushion', cost: 70, description: 'The perfect reading nook.' },
  { id: 'cat-tree', name: 'Cat Tree', cost: 80, description: 'Pumpkin\'s new favorite perch.' },
] as const;

export const BROOM_TRACKS = [
  { id: 'speed', name: 'Swift Bristles', description: 'Raises top speed by 10% per level.' },
  { id: 'handling', name: 'Responsive Handle', description: 'Raises turn rate by 20% per level.' },
  { id: 'braking', name: 'Cloud Brake', description: 'Raises hover braking by 20% per level.' },
] as const;

type Station = typeof HOME_STATIONS[number];
type UpgradeTrack = typeof BROOM_TRACKS[number]['id'];

const ROOM_X = 7.5;
const ROOM_Z = 5.5;
const STATION_RADIUS = 2.4;
const WALK_SPEED = 3.5;
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export function enterHome(state: GameState): void {
  state.mode = 'home';
  state.run = null;
  state.paused = false;
  state.pauseReason = '';
  state.homePosition = { x: 0, z: 3 };
  state.homeFacing = 0;
  state.homePanel = 'none';
  state.message = 'Back at Meg\'s room.';
  state.revision++;
}

export function closeHomePanel(state: GameState): void {
  if (state.mode !== 'home' || state.homePanel === 'none') return;
  state.homePanel = 'none';
  state.revision++;
}

export function nearbyStation(state: GameState): Station | undefined {
  if (state.mode !== 'home') return undefined;
  return HOME_STATIONS.find((station) => Math.hypot(state.homePosition.x - station.x, state.homePosition.z - station.z) <= STATION_RADIUS);
}

export function interactHome(state: GameState): void {
  if (state.mode !== 'home' || state.paused) return;
  const station = nearbyStation(state);
  if (!station) return;
  state.homePanel = station.id;
  state.message = station.id === 'cat' ? 'Pumpkin purrs.' : `${station.name} opened.`;
  state.revision++;
}

/** Moves Meg around the 18×14 room. Menus and pause intentionally freeze walking. */
export function stepHome(state: GameState, input: FlightInput, dt: number): void {
  if (state.mode !== 'home' || state.paused || state.homePanel !== 'none' || !Number.isFinite(dt) || dt <= 0) return;
  const x = clamp(input.turn, -1, 1);
  const z = -clamp(input.climb, -1, 1);
  const magnitude = Math.hypot(x, z);
  if (magnitude > 0) {
    const scale = WALK_SPEED * dt / Math.max(1, magnitude);
    state.homePosition.x = clamp(state.homePosition.x + x * scale, -ROOM_X, ROOM_X);
    state.homePosition.z = clamp(state.homePosition.z + z * scale, -ROOM_Z, ROOM_Z);
    state.homeFacing = Math.atan2(x, -z);
  }
  state.revision++;
}

/** Returns whether a broom upgrade was bought. */
export function buyUpgrade(state: GameState, track: string): boolean {
  if (state.paused || state.mode !== 'home' || state.homePanel !== 'brooms' || !isTrack(track)) return false;
  const level = state.profile.upgrades[track];
  if (level >= 2) return false;
  const cost = level === 0 ? 60 : 120;
  if (state.profile.coins < cost) return false;
  state.profile.coins -= cost;
  state.profile.upgrades[track] = level + 1;
  state.message = `${BROOM_TRACKS.find((item) => item.id === track)!.name} upgraded.`;
  state.revision++;
  return true;
}

/** Returns whether a decor item was bought. */
export function buyFurniture(state: GameState, id: string): boolean {
  if (state.paused || state.mode !== 'home' || state.homePanel !== 'decor') return false;
  const furniture = FURNITURE.find((item) => item.id === id);
  if (!furniture || state.profile.furniture.includes(id) || state.profile.coins < furniture.cost) return false;
  state.profile.coins -= furniture.cost;
  state.profile.furniture.push(id);
  state.message = `${furniture.name} added to the room.`;
  state.revision++;
  return true;
}

export function isComplete(profile: Profile): boolean {
  return FURNITURE.every((item) => profile.furniture.includes(item.id))
    && BROOM_TRACKS.every((track) => profile.upgrades[track.id] >= 2);
}

function isTrack(track: string): track is UpgradeTrack {
  return BROOM_TRACKS.some((item) => item.id === track);
}

export type { HomePanel };
