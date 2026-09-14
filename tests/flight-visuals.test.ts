import test from 'node:test';
import assert from 'node:assert/strict';
import { createState } from '../src/simulation';
import { flightVisuals } from '../src/flight-visuals';

test('flight has no bob and speed effects follow actual velocity, not throttle', () => {
  const s = createState(); s.mode = 'flight';
  for (let i=0;i<100;i++) assert.equal(flightVisuals(s,i/10,false).bob,0);
  s.player.velocity={x:0,y:0,z:0};s.player.speed=18;
  assert.equal(flightVisuals(s,1,false).speed,0);
  s.player.velocity.z=-18;
  const fast=flightVisuals(s,1,false).speed;
  s.player.velocity.z=-9;
  assert.ok(fast>flightVisuals(s,1,false).speed);
});

test('stationary hover bob is bounded and effects stop for pause, reduced motion, and home', () => {
  const s=createState();s.mode='flight';s.player.hover=true;s.player.velocity={x:0,y:0,z:0};
  for(let i=0;i<300;i++) assert.ok(Math.abs(flightVisuals(s,i/10,false).bob)<=.035);
  assert.notEqual(flightVisuals(s,1,false).bob,0);
  s.paused=true;assert.deepEqual(flightVisuals(s,1,false),{bob:0,speed:0});
  s.paused=false;assert.deepEqual(flightVisuals(s,1,true),{bob:0,speed:0});
  s.mode='home';assert.deepEqual(flightVisuals(s,1,false),{bob:0,speed:0});
});
