import { test, expect, collectErrors, seedRandom, mockEnvironment } from './fixtures';

/** Tier 1 — menu integrity.
 * The main menu is the first thing players see. It must load instantly
 * (no loading screen before the menu), show all options, and be error-free. */
test('menu loads instantly with all options', async ({ page }) => {
  const errors = await collectErrors(page);
  await mockEnvironment(page);
  await seedRandom(page, 42);
  await page.goto('/');

  const menu = page.locator('.menu-screen');
  await expect(menu).toBeVisible({ timeout: 10_000 });

  // No loading screen before the menu (architecture invariant)
  await expect(page.locator('.loading-screen')).toBeHidden();

  // All menu options present (Continue only appears with an existing save)
  await expect(menu.locator('button:has-text("New Game")').first()).toBeVisible();

  // Mute control on the main menu (speaker icon button)
  await expect(menu.locator('button[aria-label="Mute audio"], button[aria-label="Unmute audio"]').first()).toBeVisible();

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
