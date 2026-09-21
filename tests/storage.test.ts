import assert from 'node:assert/strict';
import test from 'node:test';
import { createState, startRun } from '../src/simulation';
import { SAVE_KEY, SaveStore, decodeSave, encodeSave } from '../src/storage';

test('save codec round trips and pauses an active shift on return', () => {
  const state = createState(); startRun(state, 9);
  const loaded = decodeSave(encodeSave(state));
  assert.ok(loaded); assert.equal(loaded.run?.seed, 9);
  assert.equal(loaded.paused, true); assert.equal(loaded.pauseReason, 'Welcome back');
});

test('a saved drop-freeze hover pin does not survive a reload', () => {
  const state = createState(); startRun(state, 9);
  state.player.hover = true; // e.g. saved mid drop-freeze before the fix
  const loaded = decodeSave(encodeSave(state));
  assert.ok(loaded);
  assert.equal(loaded.player.hover, false, 'stuck hover must clear on load so the drone can move');
});

test('codec rejects malformed, wrong-version, invalid numeric and world references', () => {
  const raw = JSON.parse(encodeSave(createState()));
  assert.equal(decodeSave('{'), null);
  assert.equal(decodeSave(JSON.stringify({ ...raw, version: 2 })), null);
  raw.state.profile.coins = -1; assert.equal(decodeSave(JSON.stringify(raw)), null);
  raw.state.profile.coins = 0; raw.state.player.position.x = 'NaN'; assert.equal(decodeSave(JSON.stringify(raw)), null);
  raw.state.player.position.x = 0; raw.state.run = { seed: 1, elapsed: 0, earnings: 0, deliveries: 0, job: { from: 'nope', to: 'home', payout: 20, label: 'x', parcel: 'x' }, offers: [], returning: false, lastStop: 'home' };
  assert.equal(decodeSave(JSON.stringify(raw)), null);
  raw.state.run = null; raw.state.profile.furniture = ['not-a-room-item']; assert.equal(decodeSave(JSON.stringify(raw)), null);
});

test('SaveStore makes one atomic write and leaves old storage untouched on failure', async () => {
  const backing = new Map<string, string>(); let writes = 0; let fail = false;
  const oldStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  const oldNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: { getItem: (key: string) => backing.get(key) ?? null, setItem: (key: string, value: string) => { if (fail) throw new Error('quota'); writes++; backing.set(key, value); } } });
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { locks: { request: async (_: string, _o: unknown, callback: (lock: object) => Promise<void>) => callback({}) } } });
  try {
    const store = new SaveStore(); assert.equal((await store.acquire()).kind, 'ready');
    assert.equal(store.save(createState()), true); assert.equal(writes, 1); const before = backing.get(SAVE_KEY);
    fail = true; assert.equal(store.save(createState()), false); assert.equal(backing.get(SAVE_KEY), before);
    store.release();
  } finally {
    if (oldStorage) Object.defineProperty(globalThis, 'localStorage', oldStorage); else delete (globalThis as { localStorage?: unknown }).localStorage;
    if (oldNavigator) Object.defineProperty(globalThis, 'navigator', oldNavigator); else delete (globalThis as { navigator?: unknown }).navigator;
  }
});

test('an unreadable save can be discarded to start a new game with saving on', async () => {
  const storage=Object.getOwnPropertyDescriptor(globalThis,'localStorage'),nav=Object.getOwnPropertyDescriptor(globalThis,'navigator');
  const backing=new Map<string,string>(); let writes=0;
  Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{
    getItem:(key:string)=>backing.get(key)??null,
    setItem:(key:string,value:string)=>{writes++;backing.set(key,value);},
    removeItem:(key:string)=>{backing.delete(key);},
  }});
  Object.defineProperty(globalThis,'navigator',{configurable:true,value:{}});
  try {
    backing.set(SAVE_KEY,'{broken');
    const store=new SaveStore();
    assert.equal((await store.acquire()).kind,'invalid');
    assert.equal(backing.get(SAVE_KEY),'{broken','acquire must leave the corrupt save untouched');
    assert.equal(store.canSave,false);
    store.discardUnreadable();
    assert.equal(backing.has(SAVE_KEY),false,'discard removes the corrupt save');
    assert.equal(store.save(createState()),true,'saving works again after discard');
    assert.equal(writes,1,'the fresh state is written');
    const loaded=decodeSave(backing.get(SAVE_KEY)!);
    assert.ok(loaded,'the new save reads back');
  }
  finally {if(storage)Object.defineProperty(globalThis,'localStorage',storage);else delete (globalThis as {localStorage?:unknown}).localStorage;if(nav)Object.defineProperty(globalThis,'navigator',nav);else delete (globalThis as {navigator?:unknown}).navigator;}
});

test('discardUnreadable never deletes a save that now decodes', async () => {
  const storage=Object.getOwnPropertyDescriptor(globalThis,'localStorage'),nav=Object.getOwnPropertyDescriptor(globalThis,'navigator');
  const backing=new Map<string,string>();
  Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{
    getItem:(key:string)=>backing.get(key)??null,
    setItem:(key:string,value:string)=>{backing.set(key,value);},
    removeItem:(key:string)=>{backing.delete(key);},
  }});
  Object.defineProperty(globalThis,'navigator',{configurable:true,value:{}});
  try {
    // A valid save lands in the key after the corrupt one was seen (e.g.
    // another tab wrote one): discarding must leave it alone.
    backing.set(SAVE_KEY,encodeSave(createState()));
    const before=backing.get(SAVE_KEY);
    const store=new SaveStore();
    store.discardUnreadable();
    assert.equal(backing.get(SAVE_KEY),before,'a decodable save must survive discardUnreadable');
    assert.ok(decodeSave(backing.get(SAVE_KEY)!),'the surviving save still reads back');
  }
  finally {if(storage)Object.defineProperty(globalThis,'localStorage',storage);else delete (globalThis as {localStorage?:unknown}).localStorage;if(nav)Object.defineProperty(globalThis,'navigator',nav);else delete (globalThis as {navigator?:unknown}).navigator;}
});

test('malformed saves remain recoverable without Web Locks', async () => {
  const storage=Object.getOwnPropertyDescriptor(globalThis,'localStorage'),nav=Object.getOwnPropertyDescriptor(globalThis,'navigator');
  let writes=0;
  Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{getItem:()=>'{broken',setItem:()=>writes++}});
  Object.defineProperty(globalThis,'navigator',{configurable:true,value:{}});
  try {const store=new SaveStore();assert.equal((await store.acquire()).kind,'invalid');assert.equal(store.canSave,false);store.continueSession();assert.equal(store.save(createState()),false);assert.equal(writes,0);}
  finally {if(storage)Object.defineProperty(globalThis,'localStorage',storage);else delete (globalThis as {localStorage?:unknown}).localStorage;if(nav)Object.defineProperty(globalThis,'navigator',nav);else delete (globalThis as {navigator?:unknown}).navigator;}
});
