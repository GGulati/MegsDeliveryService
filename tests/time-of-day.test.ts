import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  SHIFT_SECONDS, DAY_START_MIN, DAY_END_MIN,
  timeOfDay, gameMinutes, formatGameTime, skyAt, sunDirection, handAngles,
  SKY_KEYS,
} from '../src/time-of-day.js';

describe('time-of-day', () => {
  it('shift is 360s mapping 7am to 7pm', () => {
    assert.equal(SHIFT_SECONDS, 360);
    assert.equal(DAY_START_MIN, 420);
    assert.equal(DAY_END_MIN, 1140);
  });

  it('timeOfDay clamps to [0,1]', () => {
    assert.equal(timeOfDay(0), 0);
    assert.equal(timeOfDay(180), 0.5);
    assert.equal(timeOfDay(360), 1);
    assert.equal(timeOfDay(-50), 0);
    assert.equal(timeOfDay(9999), 1);
  });

  it('gameMinutes maps elapsed to 7:00→19:00', () => {
    assert.equal(gameMinutes(0), 420);
    assert.equal(gameMinutes(180), 780); // 13:00
    assert.equal(gameMinutes(360), 1140);
  });

  it('formatGameTime renders 12h clock', () => {
    assert.equal(formatGameTime(420), '7:00 AM');
    assert.equal(formatGameTime(780), '1:00 PM');
    assert.equal(formatGameTime(1140), '7:00 PM');
    assert.equal(formatGameTime(720), '12:00 PM');
  });

  it('skyAt returns exact keyframes at key times', () => {
    for (const k of SKY_KEYS) {
      const s = skyAt(k.t);
      assert.deepEqual(s.zenith, k.zenith, `zenith at t=${k.t}`);
      assert.deepEqual(s.sun, k.sun, `sun at t=${k.t}`);
      assert.equal(s.sunIntensity, k.sunIntensity);
      assert.equal(s.duskFactor, k.duskFactor);
    }
  });

  it('skyAt interpolates monotonically between keys', () => {
    const a = skyAt(0.1), b = skyAt(0.2);
    // Sun climbs in the morning: elevation increases
    assert.ok(b.sunElevation > a.sunElevation, 'sun climbs in morning');
    const c = skyAt(0.8), d = skyAt(0.95);
    assert.ok(d.sunElevation < c.sunElevation, 'sun descends in evening');
  });

  it('skyAt clamps out-of-range t', () => {
    assert.deepEqual(skyAt(-1).zenith, skyAt(0).zenith);
    assert.deepEqual(skyAt(2).zenith, skyAt(1).zenith);
  });

  it('duskFactor is 0 midday and 1 at 7pm', () => {
    assert.equal(skyAt(0.5).duskFactor, 0);
    assert.equal(skyAt(1).duskFactor, 1);
  });

  it('sunDirection returns unit vectors', () => {
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      const s = skyAt(t);
      const [x, y, z] = sunDirection(s.sunElevation, s.sunAzimuth);
      const len = Math.sqrt(x * x + y * y + z * z);
      assert.ok(Math.abs(len - 1) < 1e-9, `unit at t=${t}`);
      assert.ok(y >= 0, `sun above horizon at t=${t}`);
    }
  });

  it('sun rises east and sets west', () => {
    const dawn = skyAt(0), dusk = skyAt(1);
    const [dx] = sunDirection(dawn.sunElevation, dawn.sunAzimuth);
    const [ex] = sunDirection(dusk.sunElevation, dusk.sunAzimuth);
    assert.ok(dx > 0, 'dawn sun east (+x)');
    assert.ok(ex < 0, 'dusk sun west (-x)');
  });

  it('handAngles: 7:00 AM → hour at 7, minute at 12', () => {
    const h = handAngles(420);
    assert.ok(Math.abs(h.hour - (7 / 12) * Math.PI * 2) < 1e-9, `hour=${h.hour}`);
    assert.ok(Math.abs(h.minute) < 1e-9);
  });

  it('handAngles: 1:00 PM → hour at 1, minute at 12', () => {
    const h = handAngles(780);
    assert.ok(Math.abs(h.hour - Math.PI / 6) < 1e-9, `hour=${h.hour}`);
    assert.ok(Math.abs(h.minute) < 1e-9);
  });

  it('handAngles: 7:00 PM → full 12h sweep, back at 7', () => {
    const start = handAngles(420), end = handAngles(1140);
    assert.ok(Math.abs(start.hour - end.hour) < 1e-9);
    assert.ok(Math.abs(start.minute - end.minute) < 1e-9);
  });

  it('handAngles: minute hand spins 6x over the shift', () => {
    // 12 game hours = 12 minute-hand revolutions... but our dial is 12h so
    // minute angle at start and end match (both :00)
    const h0 = handAngles(420), h1 = handAngles(450); // 7:30
    assert.ok(Math.abs(h1.minute - Math.PI) < 1e-9, `half hour = half circle`);
    assert.ok(Math.abs(h0.minute) < 1e-9);
  });

  it('deterministic: same elapsed always gives same sky', () => {
    assert.deepEqual(skyAt(timeOfDay(123.456)), skyAt(timeOfDay(123.456)));
  });
});
