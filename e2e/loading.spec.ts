import { test, expect, collectErrors, seedRandom, mockEnvironment, expectUnhidden } from './fixtures';

/** Tier 1 — loading screen integrity.
 * After choosing New Game, a loading screen must appear with progress,
 * then give way to the interactive game world. This is the staged-loading
 * architecture: heavy init happens under the loading screen, never before. */
test('loading screen appears after New Game, then yields to the game', async ({ page }) => {
  const errors = await collectErrors(page);
  await mockEnvironment(page);
  await seedRandom(page, 42);
  await page.goto('/');

  await expect(page.locator('.menu-screen')).toBeVisible({ timeout: 10_000 });
  await page.locator('button:has-text("New Game")').first().click();

  // Loading screen appears promptly after the choice
  await expect(page.locator('.loading-screen')).toBeVisible({ timeout: 5_000 });

  // Game becomes interactive; loading screen goes away
  await expectUnhidden(page, '.meg-ui', 30_000);
  await expect(page.locator('.loading-screen')).toBeHidden({ timeout: 30_000 });

  // Title card shown (new game starts at title)
  await expectUnhidden(page, '#title-card', 10_000);

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
