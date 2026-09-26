import assert from 'node:assert/strict';
import { chooseJob, startRun } from '../src/simulation';
import type { GameState } from '../src/types';

/** Starts a run and picks the Harbor Cafe offer from the opening job picker,
 *  leaving the game in flight with the classic first job. Most flight,
 *  arrival, and delivery tests need exactly this setup; the picker itself is
 *  covered by dedicated startRun tests. Fails loudly if the seed ever stops
 *  offering Harbor Cafe from home. */
export function startCafeFlight(state: GameState, seed: number): void {
  startRun(state, seed);
  assert.equal(state.mode, 'offers', 'a fresh run should open the job picker');
  const index = state.run!.offers.findIndex((job) => job.to === 'harbor-cafe');
  assert.ok(index >= 0, `seed ${seed} should offer harbor-cafe from home`);
  chooseJob(state, index);
  assert.equal(state.mode, 'flight', 'choosing a job should take off');
}
