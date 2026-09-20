import assert from 'node:assert/strict';
import test from 'node:test';
import { dismissTip, emptyTipDismissal, nextTipVisibility, tipStateKey } from '../src/ui';

test('tip shows during tutorial and hides in plain flight', () => {
  let t = emptyTipDismissal();
  let r = nextTipVisibility(t, 'tutorial', 0, '', 'Steer toward the pad.');
  assert.equal(r.hidden, false);
  t = r.next;
  r = nextTipVisibility(t, 'flight', 0, '', '', 400);
  assert.equal(r.hidden, true, 'no status and plenty of time: hidden');
});

test('tip shows in flight when time runs low or a status is set', () => {
  const t = emptyTipDismissal();
  assert.equal(nextTipVisibility(t, 'flight', 0, '', '', 90).hidden, false);
  assert.equal(nextTipVisibility(t, 'flight', 0, 'Two minutes left.', 'Two minutes left.', 400).hidden, false);
});

test('flight bubble does not appear on state.message alone (old gating preserved)', () => {
  const t = emptyTipDismissal();
  // state.message changes constantly during flight; only info.status (or low
  // time) may trigger the bubble there, as before.
  const r = nextTipVisibility(t, 'flight', 0, '', 'Delivered! Choose the next parcel.', 400);
  assert.equal(r.hidden, true);
});

test('dismiss hides the tip until new information arrives', () => {
  let t = emptyTipDismissal();
  let r = nextTipVisibility(t, 'tutorial', 0, '', 'Steer toward the pad.');
  t = dismissTip(r.next);
  r = nextTipVisibility(t, 'tutorial', 0, '', 'Steer toward the pad.');
  assert.equal(r.hidden, true, 'same tip stays dismissed');
  t = r.next;
  r = nextTipVisibility(t, 'tutorial', 1, '', 'Press hover to slow down.');
  assert.equal(r.hidden, false, 'new tutorial stage re-shows');
  t = dismissTip(r.next);
  r = nextTipVisibility(t, 'flight', 1, 'Delivered!', 'Delivered!', 400);
  assert.equal(r.hidden, false, 'new status re-shows');
});

test('dismiss of one tip does not hide an unrelated later tip', () => {
  let t = emptyTipDismissal();
  let r = nextTipVisibility(t, 'flight', 0, '', '', 100);
  t = dismissTip(r.next);
  r = nextTipVisibility(t, 'flight', 0, '30 seconds left!', '30 seconds left!', 25);
  assert.equal(r.hidden, false);
});

test('tipStateKey distinguishes mode, stage, and text', () => {
  assert.notEqual(tipStateKey('tutorial', 0, 'a'), tipStateKey('tutorial', 1, 'a'));
  assert.notEqual(tipStateKey('tutorial', 0, 'a'), tipStateKey('flight', 0, 'a'));
  assert.notEqual(tipStateKey('flight', 0, 'a'), tipStateKey('flight', 0, 'b'));
});
