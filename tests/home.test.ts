import assert from 'node:assert/strict';
import test from 'node:test';
import { BROOM_TRACKS, FURNITURE, buyFurniture, buyUpgrade, enterHome, interactHome, isComplete, stepHome } from '../src/home';
import { createState, step } from '../src/simulation';

test('home purchases require their matching panel, funds, and have hard limits', () => {
  const state = createState();
  state.profile.coins = 1_000;
  enterHome(state);
  assert.equal(buyFurniture(state, 'rug'), false);
  state.homePanel = 'decor';
  assert.equal(buyFurniture(state, 'rug'), true);
  assert.equal(state.profile.coins, 970);
  assert.equal(buyFurniture(state, 'rug'), false);
  state.homePanel = 'brooms';
  assert.equal(buyUpgrade(state, 'speed'), true);
  assert.equal(buyUpgrade(state, 'speed'), true);
  assert.equal(buyUpgrade(state, 'speed'), false);
  assert.equal(buyUpgrade(state, 'nope'), false);
  state.paused=true;state.homePanel='decor';
  const coins=state.profile.coins;
  assert.equal(buyFurniture(state,'plant'),false);
  state.homePanel='brooms';assert.equal(buyUpgrade(state,'handling'),false);
  assert.equal(state.profile.coins,coins);
});

test('home movement is normalized, bounded, and frozen by panels or pause', () => {
  const state = createState();
  enterHome(state);
  stepHome(state, { turn: 1, climb: -1, throttle: 0 }, 1);
  assert.ok(Math.abs(Math.hypot(state.homePosition.x, state.homePosition.z - 3) - 3.5) < 1e-8);
  stepHome(state, { turn: 1, climb: -1, throttle: 0 }, 10);
  assert.ok(state.homePosition.x <= 7.5 && state.homePosition.z <= 5.5);
  const before = { ...state.homePosition };
  state.homePanel = 'jobs';
  step(state, { turn: 1, climb: 0, throttle: 0 }, 1);
  assert.deepEqual(state.homePosition, before);
  state.homePanel = 'none'; state.paused = true;
  stepHome(state, { turn: 1, climb: 0, throttle: 0 }, 1);
  assert.deepEqual(state.homePosition, before);
});

test('home stations open panels and Pumpkin can be petted repeatedly', () => {
  const state = createState();
  enterHome(state);
  state.homePosition = { x: 4, z: 3 };
  interactHome(state);
  assert.equal(state.homePanel, 'cat');
  assert.equal(state.message, 'Pumpkin purrs.');
  interactHome(state);
  assert.equal(state.message, 'Pumpkin purrs.');
});

test('completion needs every decor item and every broom track at level two', () => {
  const state = createState();
  assert.equal(isComplete(state.profile), false);
  state.profile.furniture = FURNITURE.map((item) => item.id);
  for (const track of BROOM_TRACKS) state.profile.upgrades[track.id] = 2;
  assert.equal(isComplete(state.profile), true);
});

test('broom upgrades affect actual flight speed, turning, and hover braking', () => {
  const base = createState();
  base.mode = 'flight';
  base.run = { seed: 1, elapsed: 0, earnings: 0, deliveries: 0, job: null, offers: [], returning: false, lastStop: 'home' };
  base.player.throttle = 18; base.player.speed = 18;
  const upgraded = structuredClone(base);
  upgraded.profile.upgrades = { speed: 2, handling: 2, braking: 2 };
  step(base, { turn: 1, climb: 0, throttle: 1 }, 1);
  step(upgraded, { turn: 1, climb: 0, throttle: 1 }, 1);
  assert.ok(upgraded.player.speed > base.player.speed);
  assert.ok(upgraded.player.yaw > base.player.yaw);
  base.player.hover = true; upgraded.player.hover = true;
  base.player.speed = 12; upgraded.player.speed = 12;
  step(base, { turn: 0, climb: 0, throttle: 0 }, .25);
  step(upgraded, { turn: 0, climb: 0, throttle: 0 }, .25);
  assert.ok(upgraded.player.speed < base.player.speed);
});
