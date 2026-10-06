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

  // Stage 0: steer instruction
  await expect(page.locator('#tutorial-bubble')).toBeVisible();
  expect(await bubbleText()).toContain('Harbor Cafe');

  // Stage 0 → 1: move the player (hold W to fly forward)
  await page.keyboard.down('w');
  await page.waitForTimeout(1500);
  await page.keyboard.up('w');

  // Stage 1: slow-down instruction (desktop copy)
  await expect(async () => {
    const text = await bubbleText();
    expect(text).toContain('slow down');
  }).toPass({ timeout: 10_000 });

  // Stage 1 → 2: stop (press Space to hover/brake)
  await page.keyboard.press(' ');
  await page.waitForTimeout(1000);

  // Stage 2: drift-to-pad instruction
  await expect(async () => {
    const text = await bubbleText();
    expect(text).toContain('Harbor Cafe');
    expect(text).toContain('parcel');
  }).toPass({ timeout: 10_000 });

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
