import { test, expect, collectErrors, mockEnvironment, seedRandom, expectUnhidden, domClick } from './fixtures';

/** E2E: Save/Continue roundtrip.
 * Play briefly (triggering a save), reload the page, and Continue.
 * Verifies localStorage wiring, slot persistence, and state restoration
 * through the real browser — headless tests can't cover page reload. */
test('save persists across reload, Continue restores the game', async ({ page }) => {
  const errors = await collectErrors(page);
  await mockEnvironment(page);
  await seedRandom(page, 42);
  await page.goto('/');

  // Start a new game and enter flight (triggers persist via start())
  await expect(page.locator('.menu-screen')).toBeVisible({ timeout: 10_000 });
  await page.locator('button:has-text("New Game")').first().click();
  await expectUnhidden(page, '.meg-ui', 30_000);
  await expect(page.locator('.loading-screen')).toBeHidden({ timeout: 30_000 });
  await domClick(page, '#start-btn');
  await expectUnhidden(page, '#flight-hud', 10_000);

  // Wait for the save to land in localStorage
  await page.waitForFunction(() => {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i)?.includes('megs-delivery-save')) return true;
    }
    return false;
  }, { timeout: 10_000 });

  // Reload — menu should now offer Continue
  await page.reload();
  await expect(page.locator('.menu-screen')).toBeVisible({ timeout: 10_000 });
  const continueBtn = page.locator('.menu-screen button:has-text("Continue")').first();
  await expect(continueBtn).toBeVisible({ timeout: 10_000 });

  // Continue restores the game (not the title screen)
  await continueBtn.click();
  await expectUnhidden(page, '.meg-ui', 30_000);
  await expect(page.locator('.loading-screen')).toBeHidden({ timeout: 30_000 });
  // Should be back in flight/tutorial, not at the title card
  await expectUnhidden(page, '#flight-hud', 10_000);

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
