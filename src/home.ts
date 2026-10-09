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
  { id: 'capacity', name: 'Parcel Satchel', description: '+1 job offer slot per level.' },
  { id: 'glide', name: 'Glide Feathers', description: '+10% turn rate at cruising speed per level.' },
] as const;

/** Branching capstone choices per upgrade track, chosen at max level (2). */
export const CAPSTONES = {
  speed: [
    { id: 'tailwind', name: 'Tailwind', description: '+15% top speed.' },
    { id: 'quickstart', name: 'Quickstart', description: '+30% acceleration.' },
  ],
  handling: [
    { id: 'tight-turns', name: 'Tight Turns', description: '+25% turn rate.' },
    { id: 'stable-hover', name: 'Stable Hover', description: 'Hover engages 30% faster.' },
  ],
  braking: [
    { id: 'feather-touch', name: 'Feather Touch', description: 'No speed penalty on bumpy landings.' },
    { id: 'quick-stop', name: 'Quick Stop', description: '+30% brake deceleration.' },
  ],
  capacity: [
    { id: 'deep-satchel', name: 'Deep Satchel', description: '+1 job offer slot.' },
    { id: 'careful-packer', name: 'Careful Packer', description: 'No speed penalty on bumpy landings.' },
  ],
  glide: [
    { id: 'dive-bomber', name: 'Dive Bomber', description: '+30% speed on steep dives.' },
    { id: 'cloud-surfer', name: 'Cloud Surfer', description: '+25% turn rate above 60m.' },
  ],
} as const;

type Station = typeof HOME_STATIONS[number];
export type UpgradeTrack = typeof BROOM_TRACKS[number]['id'];

/** Cost of a capstone choice (or respec switch): same as the max-level upgrade cost. */
export const CAPSTONE_COST = 120;

export const ROOM_X = 7.5;
export const ROOM_Z = 5.5;
const STATION_RADIUS = 2.4;
/** Proximity radius for furniture interactions (tighter than stations). */
export const FURNITURE_INTERACT_RADIUS = 1.5;
/** Furniture positions (match room.ts layout). */
export const CUSHION_POS = { x: 1.4, z: 3.5 };
export const CAT_TREE_POS = { x: 7, z: 2.5 };
/** Cooldown between Pumpkin pets (ms) to prevent spam. */
export const PET_COOLDOWN_MS = 2000;
let lastPetAt = -Infinity;
/** For tests: reset the pet cooldown. */
export function resetPetCooldown(): void { lastPetAt = -Infinity; }
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
  state.homeSitting = false;
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
  // Sitting: E always stands Meg up.
  if (state.homeSitting) { toggleSit(state); return; }
  // Furniture interactions take priority over stations (tighter radius).
  if (toggleSit(state)) return;
  if (petPumpkin(state)) return;
  const station = nearbyStation(state);
  if (!station) return;
  state.homePanel = station.id;
  state.message = station.id === 'cat' ? 'Pumpkin purrs.' : `${station.name} opened.`;
  state.revision++;
}

/** Toggle sitting on the window cushion. Requires owning the cushion and
 * standing within FURNITURE_INTERACT_RADIUS. Returns whether it toggled. */
export function toggleSit(state: GameState): boolean {
  if (state.mode !== 'home' || state.paused) return false;
  if (!state.profile.furniture.includes('cushion')) return false;
  // Standing up works from anywhere (Meg can't move while sitting, so she's
  // always near the cushion); sitting down needs proximity.
  if (!state.homeSitting) {
    const d = Math.hypot(state.homePosition.x - CUSHION_POS.x, state.homePosition.z - CUSHION_POS.z);
    if (d > FURNITURE_INTERACT_RADIUS) return false;
  }
  state.homeSitting = !state.homeSitting;
  state.message = state.homeSitting ? 'A well-earned rest.' : 'Back on your feet.';
  state.revision++;
  return true;
}

/** Pet Pumpkin at the cat tree. Requires owning the cat tree, proximity, and
 * the cooldown to have elapsed. Increments petCount (audio plays the purr).
 * `now` is injectable for tests; defaults to Date.now(). */
export function petPumpkin(state: GameState, now: number = Date.now()): boolean {
  if (state.mode !== 'home' || state.paused) return false;
  if (!state.profile.furniture.includes('cat-tree')) return false;
  const d = Math.hypot(state.homePosition.x - CAT_TREE_POS.x, state.homePosition.z - CAT_TREE_POS.z);
  if (d > FURNITURE_INTERACT_RADIUS) return false;
  if (now - lastPetAt < PET_COOLDOWN_MS) return false;
  lastPetAt = now;
  state.petCount++;
  state.message = 'Pumpkin purrs.';
  state.revision++;
  return true;
}

/** Moves Meg around the 18×14 room. Menus and pause intentionally freeze walking. */
export function stepHome(state: GameState, input: FlightInput, dt: number): void {
  if (state.mode !== 'home' || state.paused || state.homePanel !== 'none' || state.homeSitting || !Number.isFinite(dt) || dt <= 0) return;
  const x = clamp(input.turn, -1, 1);
  const z = -clamp(input.climb, -1, 1);
  const magnitude = Math.hypot(x, z);
  if (magnitude > 0) {
    const scale = WALK_SPEED * dt / Math.max(1, magnitude);
    state.homePosition.x = clamp(state.homePosition.x + x * scale, -ROOM_X, ROOM_X);
    state.homePosition.z = clamp(state.homePosition.z + z * scale, -ROOM_Z, ROOM_Z);
    state.homeFacing = Math.atan2(x, z);
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

/** Returns whether a capstone was bought (or switched). Capstones unlock at max level (2). */
export function buyCapstone(state: GameState, track: string, capstoneId: string): boolean {
  if (state.paused || state.mode !== 'home' || state.homePanel !== 'brooms' || !isTrack(track)) return false;
  const options = CAPSTONES[track];
  const option = options.find((o) => o.id === capstoneId);
  if (!option) return false;
  if (state.profile.upgrades[track] < 2) return false;
  if (state.profile.upgrades.capstones[track] === capstoneId) return false; // already active
  if (state.profile.coins < CAPSTONE_COST) return false;
  state.profile.coins -= CAPSTONE_COST;
  state.profile.upgrades.capstones[track] = capstoneId;
  state.message = `${option.name} chosen.`;
  state.revision++;
  return true;
}

export interface CapstoneCard {
  id: string; name: string; description: string;
  cost: number; active: boolean; affordable: boolean;
}

/** Card data for the capstone choice UI. Null when the track isn't at max level. */
export function capstoneOptions(profile: Profile, track: UpgradeTrack): CapstoneCard[] | null {
  if (profile.upgrades[track] < 2) return null;
  const active = profile.upgrades.capstones[track];
  return CAPSTONES[track].map((o) => ({
    id: o.id,
    name: o.name,
    description: o.description,
    cost: CAPSTONE_COST,
    active: active === o.id,
    affordable: profile.coins >= CAPSTONE_COST,
  }));
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
