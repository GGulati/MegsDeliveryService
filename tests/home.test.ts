import assert from 'node:assert/strict';
import test from 'node:test';
import { BROOM_TRACKS, CAPSTONES, FURNITURE, buyCapstone, buyFurniture, buyUpgrade, capstoneOptions, enterHome, interactHome, isComplete, stepHome, toggleSit, petPumpkin, resetPetCooldown, PET_COOLDOWN_MS } from '../src/home';
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
  base.run = { seed: 1, elapsed: 0, earnings: 0, deliveries: 0, job: null, offers: [], returning: false, lastStop: 'home', recentStops: [] };
  base.player.throttle = 18; base.player.speed = 18;
  const upgraded = structuredClone(base);
  upgraded.profile.upgrades = { speed: 2, handling: 2, braking: 2, capacity: 0, glide: 0, capstones: {} };
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

test('home facing matches the movement direction (room Meg faces +z at rotation 0)', () => {
  const state = createState();
  enterHome(state);
  // climb:-1 moves toward +z; facing 0 keeps the +z-facing model pointed along travel.
  stepHome(state, { turn: 0, climb: -1, throttle: 0 }, 1);
  assert.ok(Math.abs(state.homeFacing - 0) < 1e-9, `facing=${state.homeFacing}`);
  // climb:1 moves toward -z; facing PI turns her to face -z.
  stepHome(state, { turn: 0, climb: 1, throttle: 0 }, 1);
  assert.ok(Math.abs(state.homeFacing - Math.PI) < 1e-9, `facing=${state.homeFacing}`);
  // turn:1 moves toward +x; facing PI/2 turns her to face +x.
  stepHome(state, { turn: 1, climb: 0, throttle: 0 }, 1);
  assert.ok(Math.abs(state.homeFacing - Math.PI / 2) < 1e-9, `facing=${state.homeFacing}`);
});

test('BROOM_TRACKS has 5 tracks including capacity and glide', () => {
  const ids = BROOM_TRACKS.map((t) => t.id);
  assert.deepEqual(ids, ['speed', 'handling', 'braking', 'capacity', 'glide']);
  for (const track of BROOM_TRACKS) {
    assert.ok(track.name.length > 0, `${track.id} needs a name`);
    assert.ok(track.description.length > 0, `${track.id} needs a description`);
  }
});

test('CAPSTONES covers all 5 tracks with 2 options each', () => {
  const trackIds = BROOM_TRACKS.map((t) => t.id);
  assert.deepEqual(Object.keys(CAPSTONES).sort(), [...trackIds].sort());
  for (const track of trackIds) {
    const options = CAPSTONES[track as keyof typeof CAPSTONES];
    assert.equal(options.length, 2, `${track} needs exactly 2 capstone options`);
    for (const option of options) {
      assert.ok(option.id.length > 0);
      assert.ok(option.name.length > 0);
      assert.ok(option.description.length > 0);
    }
    assert.notEqual(options[0].id, options[1].id, `${track} capstone ids must differ`);
  }
});

test('CAPSTONES has the expected ids per track', () => {
  assert.deepEqual(CAPSTONES.speed.map((o) => o.id), ['tailwind', 'quickstart']);
  assert.deepEqual(CAPSTONES.handling.map((o) => o.id), ['tight-turns', 'stable-hover']);
  assert.deepEqual(CAPSTONES.braking.map((o) => o.id), ['feather-touch', 'quick-stop']);
  assert.deepEqual(CAPSTONES.capacity.map((o) => o.id), ['deep-satchel', 'careful-packer']);
  assert.deepEqual(CAPSTONES.glide.map((o) => o.id), ['dive-bomber', 'cloud-surfer']);
});

test('buyCapstone purchases a capstone at max level and deducts the cost', () => {
  const state = createState();
  state.profile.coins = 500;
  enterHome(state);
  state.homePanel = 'brooms';
  state.profile.upgrades.speed = 2;
  assert.equal(buyCapstone(state, 'speed', 'tailwind'), true);
  assert.equal(state.profile.upgrades.capstones.speed, 'tailwind');
  assert.equal(state.profile.coins, 380); // 500 - 120 capstone cost
  assert.ok(state.message.includes('Tailwind'));
});

test('buyCapstone fails when the track is not at max level', () => {
  const state = createState();
  state.profile.coins = 500;
  enterHome(state);
  state.homePanel = 'brooms';
  state.profile.upgrades.speed = 1;
  assert.equal(buyCapstone(state, 'speed', 'tailwind'), false);
  assert.equal(state.profile.upgrades.capstones.speed, undefined);
  assert.equal(state.profile.coins, 500);
});

test('buyCapstone fails with insufficient funds', () => {
  const state = createState();
  state.profile.coins = 100;
  enterHome(state);
  state.homePanel = 'brooms';
  state.profile.upgrades.speed = 2;
  assert.equal(buyCapstone(state, 'speed', 'tailwind'), false);
  assert.equal(state.profile.upgrades.capstones.speed, undefined);
  assert.equal(state.profile.coins, 100);
});

test('buyCapstone fails for invalid track or capstone id', () => {
  const state = createState();
  state.profile.coins = 500;
  enterHome(state);
  state.homePanel = 'brooms';
  state.profile.upgrades.speed = 2;
  assert.equal(buyCapstone(state, 'nope', 'tailwind'), false);
  assert.equal(buyCapstone(state, 'speed', 'nope'), false);
  assert.equal(buyCapstone(state, 'speed', 'tight-turns'), false); // wrong track's capstone
  assert.equal(state.profile.coins, 500);
});

test('buyCapstone requires the brooms panel and an unpaused home', () => {
  const state = createState();
  state.profile.coins = 500;
  enterHome(state);
  state.profile.upgrades.speed = 2;
  state.homePanel = 'decor';
  assert.equal(buyCapstone(state, 'speed', 'tailwind'), false);
  state.homePanel = 'brooms';
  state.paused = true;
  assert.equal(buyCapstone(state, 'speed', 'tailwind'), false);
  assert.equal(state.profile.coins, 500);
});

test('buyCapstone respecs: paying again switches to the other option', () => {
  const state = createState();
  state.profile.coins = 500;
  enterHome(state);
  state.homePanel = 'brooms';
  state.profile.upgrades.speed = 2;
  assert.equal(buyCapstone(state, 'speed', 'tailwind'), true);
  assert.equal(state.profile.coins, 380);
  assert.equal(buyCapstone(state, 'speed', 'quickstart'), true); // switch
  assert.equal(state.profile.upgrades.capstones.speed, 'quickstart');
  assert.equal(state.profile.coins, 260); // paid the capstone price again
});

test('buyCapstone with the already-active option is a no-op', () => {
  const state = createState();
  state.profile.coins = 500;
  enterHome(state);
  state.homePanel = 'brooms';
  state.profile.upgrades.speed = 2;
  assert.equal(buyCapstone(state, 'speed', 'tailwind'), true);
  assert.equal(buyCapstone(state, 'speed', 'tailwind'), false); // already active
  assert.equal(state.profile.coins, 380); // not charged again
});

test('capstoneOptions returns null below max level', () => {
  const state = createState();
  enterHome(state);
  assert.equal(capstoneOptions(state.profile, 'speed'), null);
  state.profile.upgrades.speed = 1;
  assert.equal(capstoneOptions(state.profile, 'speed'), null);
});

test('capstoneOptions returns both cards with active/affordable flags at max level', () => {
  const state = createState();
  enterHome(state);
  state.profile.coins = 500;
  state.profile.upgrades.speed = 2;
  const options = capstoneOptions(state.profile, 'speed');
  assert.ok(options !== null);
  assert.equal(options.length, 2);
  assert.deepEqual(options.map((o) => o.id), ['tailwind', 'quickstart']);
  assert.equal(options[0].active, false);
  assert.equal(options[0].affordable, true);
  assert.equal(options[0].cost, 120);
  assert.ok(options[0].name.length > 0 && options[0].description.length > 0);
  // After choosing one, it becomes active
  state.profile.upgrades.capstones.speed = 'tailwind';
  const after = capstoneOptions(state.profile, 'speed')!;
  assert.equal(after[0].active, true);
  assert.equal(after[1].active, false);
  // Unaffordable when broke
  state.profile.coins = 10;
  const broke = capstoneOptions(state.profile, 'speed')!;
  assert.equal(broke[0].affordable, false);
  assert.equal(broke[1].affordable, false);
});

test('cushion sit: E near owned cushion toggles homeSitting', () => {
  
  const state = createState();
  enterHome(state);
  state.profile.furniture.push('cushion');
  state.homePosition = { x: 1.4, z: 3.5 }; // at the cushion
  assert.equal(state.homeSitting, false);
  assert.equal(toggleSit(state), true);
  assert.equal(state.homeSitting, true);
  assert.equal(toggleSit(state), true);
  assert.equal(state.homeSitting, false);
});

test('cushion sit requires ownership and proximity', () => {
  
  const state = createState();
  enterHome(state);
  state.homePosition = { x: 1.4, z: 3.5 };
  assert.equal(toggleSit(state), false, 'unowned cushion should not sit');
  assert.equal(state.homeSitting, false);
  state.profile.furniture.push('cushion');
  state.homePosition = { x: -5, z: -3 }; // far away
  assert.equal(toggleSit(state), false, 'far from cushion should not sit');
  assert.equal(state.homeSitting, false);
});

test('movement is blocked while sitting', () => {
  const state = createState();
  enterHome(state);
  state.homeSitting = true;
  const before = { ...state.homePosition };
  stepHome(state, { turn: 1, climb: 0, throttle: 0 }, 1);
  assert.deepEqual(state.homePosition, before);
  state.homeSitting = false;
  stepHome(state, { turn: 1, climb: 0, throttle: 0 }, 1);
  assert.ok(state.homePosition.x !== before.x, 'should move when not sitting');
});

test('cat-tree pet: E near owned cat-tree increments petCount with cooldown', () => {
  
  resetPetCooldown();
  const state = createState();
  enterHome(state);
  state.profile.furniture.push('cat-tree');
  state.homePosition = { x: 7, z: 2.5 }; // at the cat-tree
  assert.equal(state.petCount, 0);
  assert.equal(petPumpkin(state, 1000), true);
  assert.equal(state.petCount, 1);
  assert.equal(petPumpkin(state, 1000 + PET_COOLDOWN_MS - 1), false, 'cooldown should block spam');
  assert.equal(state.petCount, 1);
  assert.equal(petPumpkin(state, 1000 + PET_COOLDOWN_MS), true);
  assert.equal(state.petCount, 2);
});

test('cat-tree pet requires ownership and proximity', () => {
  
  resetPetCooldown();
  const state = createState();
  enterHome(state);
  state.homePosition = { x: 7, z: 2.5 };
  assert.equal(petPumpkin(state, 5000), false, 'unowned cat-tree should not pet');
  state.profile.furniture.push('cat-tree');
  state.homePosition = { x: -5, z: -3 }; // far away
  assert.equal(petPumpkin(state, 6000), false, 'far from cat-tree should not pet');
});

test('interactHome prioritizes cushion sit over station panels', () => {
  const state = createState();
  enterHome(state);
  state.profile.furniture.push('cushion');
  // Between cushion (1.4,3.5) and cat station (4,3): cushion wins
  state.homePosition = { x: 2.5, z: 3.4 };
  interactHome(state);
  assert.equal(state.homeSitting, true);
  assert.equal(state.homePanel, 'none', 'should not open a panel when sitting');
  // E again stands up
  interactHome(state);
  assert.equal(state.homeSitting, false);
});

test('interactHome pets at cat-tree instead of opening panels', () => {
  
  resetPetCooldown();
  const state = createState();
  enterHome(state);
  state.profile.furniture.push('cat-tree');
  state.homePosition = { x: 7, z: 2.5 };
  interactHome(state);
  assert.equal(state.petCount, 1);
  assert.equal(state.homePanel, 'none', 'should not open a panel when petting');
});
