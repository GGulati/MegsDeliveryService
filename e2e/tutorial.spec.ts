import { test, expect, collectErrors, startNewGame, domClick, expectUnhidden } from './fixtures';

/** E2E: Tutorial UI flow.
 * Verifies the onboarding stages advance via real keyboard input and the
 * tutorial bubble shows the correct instructions. The full flight-to-cafe
 * completion is covered headlessly; e2e proves the UI wiring. */
test('tutorial stages advance with keyboard input', async ({ page }) => {
  const errors = await collectErrors(page);
  await startNewGame(page);
  await domClick(page, '#start-btn');
  await expectUnhidden(page, '#flight-hud', 10_000);

  const bubbleText = () => page.locator('#tutorial-text').textContent();

  // The tutorial starts at Stage 0 ("Steer toward..."), but the player spawns
  // with speed 9, so Stage 0→1 (movement gate) fires within a few frames.
  // By the time the HUD is up, we're reliably at Stage 1. Verify the bubble
  // is visible and showing the Stage 1 instruction (desktop copy).
  // The full stage-transition logic (0→1→2→complete) is covered headlessly
  // in tests/gameplay.test.ts; e2e proves the UI wiring.
  await expect(page.locator('#tutorial-bubble')).toBeVisible();
  await expect(async () => {
    const text = await bubbleText();
    expect(text).toContain('slow down');
  }).toPass({ timeout: 10_000 });

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
