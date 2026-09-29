/**
 * Time-of-day system: pure functions mapping shift elapsed seconds to a
 * 7am→7pm game day. No THREE dependency — returns plain RGB tuples and
 * numbers so it's fully unit-testable. The scene layer consumes these.
 *
 * Shift is 360 real seconds = 720 game minutes (1s = 2 game-min).
 */

/** Real seconds per full 7am→7pm shift. */
export const SHIFT_SECONDS = 360;
/** Game minutes at shift start (7:00). */
export const DAY_START_MIN = 7 * 60;
/** Game minutes at shift end (19:00). */
export const DAY_END_MIN = 19 * 60;

export type RGB = [number, number, number];

/** Normalized time-of-day in [0,1]: 0 = 7am, 1 = 7pm. */
export function timeOfDay(elapsed: number): number {
  return Math.max(0, Math.min(1, elapsed / SHIFT_SECONDS));
}

/** Game clock in minutes since midnight (420 → 1140). */
export function gameMinutes(elapsed: number): number {
  return DAY_START_MIN + timeOfDay(elapsed) * (DAY_END_MIN - DAY_START_MIN);
}

/** Format game minutes as "h:mm AM/PM". */
export function formatGameTime(minutes: number): string {
  const h24 = Math.floor(minutes / 60);
  const m = Math.floor(minutes % 60);
  const suffix = h24 < 12 ? 'AM' : 'PM';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${m.toString().padStart(2, '0')} ${suffix}`;
}

export interface SkyKeyframe {
  /** Time-of-day in [0,1]. */
  t: number;
  /** Sky dome zenith color. */
  zenith: RGB;
  /** Sky dome horizon color. */
  horizon: RGB;
  /** Sun disc color. */
  sun: RGB;
  /** Sun elevation in radians (0 = horizon, π/2 = zenith). */
  sunElevation: number;
  /** Sun azimuth in radians (0 = east, π = west, measured clockwise from north). */
  sunAzimuth: number;
  /** Fog color. */
  fog: RGB;
  /** Hemisphere sky color. */
  hemiSky: RGB;
  /** Hemisphere ground color. */
  hemiGround: RGB;
  /** Global warm tint multiplier for the toon ramp (1 = neutral). */
  tint: RGB;
  /** Sun light intensity. */
  sunIntensity: number;
  /** 0→1 how "night-like" (drives lamps, lighthouse beam, stars). */
  duskFactor: number;
}

/**
 * Keyframes across the day. Times are t in [0,1] (7am→7pm).
 * Dawn: low warm sun east. Midday: high neutral sun. Dusk: low amber sun west.
 */
export const SKY_KEYS: SkyKeyframe[] = [
  {
    t: 0.0, // 7:00 — dawn
    zenith: [0.45, 0.62, 0.86],
    horizon: [1.0, 0.72, 0.55],
    sun: [1.0, 0.82, 0.62],
    sunElevation: 0.10,
    sunAzimuth: Math.PI / 2, // east
    fog: [0.98, 0.80, 0.68],
    hemiSky: [0.85, 0.72, 0.80],
    hemiGround: [0.78, 0.55, 0.50],
    tint: [1.05, 0.95, 0.88],
    sunIntensity: 2.0,
    duskFactor: 0.25,
  },
  {
    t: 0.25, // 10:00 — morning
    zenith: [0.36, 0.60, 0.90],
    horizon: [0.78, 0.88, 0.95],
    sun: [1.0, 0.94, 0.82],
    sunElevation: 0.65,
    sunAzimuth: Math.PI / 2 + 0.6,
    fog: [0.78, 0.86, 0.92],
    hemiSky: [0.82, 0.90, 1.0],
    hemiGround: [0.72, 0.58, 0.52],
    tint: [1.0, 1.0, 1.0],
    sunIntensity: 2.5,
    duskFactor: 0.0,
  },
  {
    t: 0.5, // 13:00 — midday
    zenith: [0.30, 0.56, 0.92],
    horizon: [0.72, 0.85, 0.95],
    sun: [1.0, 0.98, 0.92],
    sunElevation: 1.15,
    sunAzimuth: Math.PI, // south-ish overhead
    fog: [0.72, 0.84, 0.92],
    hemiSky: [0.85, 0.92, 1.0],
    hemiGround: [0.70, 0.58, 0.52],
    tint: [1.0, 1.0, 1.0],
    sunIntensity: 2.6,
    duskFactor: 0.0,
  },
  {
    t: 0.75, // 16:00 — afternoon
    zenith: [0.36, 0.58, 0.88],
    horizon: [0.85, 0.82, 0.78],
    sun: [1.0, 0.90, 0.72],
    sunElevation: 0.55,
    sunAzimuth: Math.PI + 0.7,
    fog: [0.85, 0.80, 0.75],
    hemiSky: [0.85, 0.82, 0.92],
    hemiGround: [0.75, 0.58, 0.50],
    tint: [1.03, 0.98, 0.92],
    sunIntensity: 2.4,
    duskFactor: 0.0,
  },
  {
    t: 0.92, // ~18:05 — golden hour
    zenith: [0.42, 0.52, 0.78],
    horizon: [1.0, 0.62, 0.38],
    sun: [1.0, 0.70, 0.42],
    sunElevation: 0.16,
    sunAzimuth: Math.PI * 1.5 - 0.25, // west
    fog: [1.0, 0.72, 0.52],
    hemiSky: [0.90, 0.68, 0.62],
    hemiGround: [0.70, 0.50, 0.45],
    tint: [1.08, 0.92, 0.80],
    sunIntensity: 2.1,
    duskFactor: 0.45,
  },
  {
    t: 1.0, // 19:00 — dusk
    zenith: [0.22, 0.28, 0.52],
    horizon: [0.95, 0.48, 0.35],
    sun: [1.0, 0.55, 0.32],
    sunElevation: 0.02,
    sunAzimuth: Math.PI * 1.5, // west
    fog: [0.85, 0.55, 0.45],
    hemiSky: [0.55, 0.45, 0.62],
    hemiGround: [0.45, 0.35, 0.38],
    tint: [1.05, 0.85, 0.75],
    sunIntensity: 1.6,
    duskFactor: 1.0,
  },
];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpRGB(a: RGB, b: RGB, t: number): RGB {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

/** Interpolated sky state at time-of-day t in [0,1]. */
export function skyAt(t: number): SkyKeyframe {
  const tc = Math.max(0, Math.min(1, t));
  let i = 0;
  while (i < SKY_KEYS.length - 2 && SKY_KEYS[i + 1].t < tc) i++;
  const a = SKY_KEYS[i], b = SKY_KEYS[i + 1];
  const f = (tc - a.t) / (b.t - a.t);
  return {
    t: tc,
    zenith: lerpRGB(a.zenith, b.zenith, f),
    horizon: lerpRGB(a.horizon, b.horizon, f),
    sun: lerpRGB(a.sun, b.sun, f),
    sunElevation: lerp(a.sunElevation, b.sunElevation, f),
    sunAzimuth: lerp(a.sunAzimuth, b.sunAzimuth, f),
    fog: lerpRGB(a.fog, b.fog, f),
    hemiSky: lerpRGB(a.hemiSky, b.hemiSky, f),
    hemiGround: lerpRGB(a.hemiGround, b.hemiGround, f),
    tint: lerpRGB(a.tint, b.tint, f),
    sunIntensity: lerp(a.sunIntensity, b.sunIntensity, f),
    duskFactor: lerp(a.duskFactor, b.duskFactor, f),
  };
}

/** Sun direction unit vector from elevation/azimuth. */
export function sunDirection(elevation: number, azimuth: number): [number, number, number] {
  return [
    Math.sin(azimuth) * Math.cos(elevation),
    Math.sin(elevation),
    Math.cos(azimuth) * Math.cos(elevation),
  ];
}

/** Clock hand angles in radians for a game time in minutes.
 *  0 = 12 o'clock, increasing clockwise (matches a real 12h dial). */
export function handAngles(gameMin: number): { hour: number; minute: number } {
  const h12 = (gameMin / 60) % 12;
  return {
    minute: ((gameMin % 60) / 60) * Math.PI * 2,
    hour: (h12 / 12) * Math.PI * 2,
  };
}
