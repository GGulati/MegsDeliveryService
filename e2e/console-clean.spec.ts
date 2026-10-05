import { test, expect, collectErrors, startNewGame, domClick, expectUnhidden } from './fixtures';

/** Tier 1 — load integrity.
 * Zero JS errors through the full menu → game → flight → pause → resume flow.
 * This is the invariant the audio-btn freeze violated: a single stale DOM
 * id reference threw on every frame, rolled back the screen transition,
 * and froze the game on mobile. */
test('console stays clean through menu, new game, flight, pause, resume', async ({ page }) => {
  const errors = await collectErrors(page);

  await startNewGame(page);

  // Enter flight from the title screen
  await domClick(page, '#start-btn');
  await expectUnhidden(page, '#flight-hud', 10_000);

  // Pause via HUD button, then resume
  await page.locator('#pause-btn').click();
  await expectUnhidden(page, '#pause-card');
  await page.locator('#resume-btn').click();
  await expect(page.locator('#pause-card')).toBeHidden();

  // Let a few frames run to catch per-frame errors
  await page.waitForTimeout(2000);

  expect(errors, `expected zero console/page errors, got:\n${errors.join('\n')}`).toEqual([]);
});
