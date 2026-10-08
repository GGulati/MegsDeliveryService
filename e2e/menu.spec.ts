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

test('menu click unlocks audio without console errors', async ({ page }) => {
  const errors = await collectErrors(page);
  await mockEnvironment(page);
  await seedRandom(page, 42);
  // Start with muted=true (default) for a deterministic test
  await page.addInitScript(() => {
    localStorage.setItem('megs-delivery-service:muted', '1');
  });
  await page.goto('/');

  const menu = page.locator('.menu-screen');
  await expect(menu).toBeVisible({ timeout: 10_000 });

  // Click the mute button (gesture unlocks AudioContext)
  const muteBtn = menu.locator('button[aria-label="Mute audio"], button[aria-label="Unmute audio"]').first();
  await muteBtn.click();
  await page.waitForTimeout(500);

  // Shared audio instance should be exposed and unmuted after gesture
  const audioState = await page.evaluate(() => {
    return (window as unknown as { __audio?: { debugState(): unknown } }).__audio?.debugState();
  });
  expect(audioState).toBeDefined();
  expect((audioState as { muted: boolean }).muted).toBe(false);

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});

test('mute toggle silences audio', async ({ page }) => {
  await mockEnvironment(page);
  await seedRandom(page, 42);
  // Start with muted=true (default) for a deterministic test
  await page.addInitScript(() => {
    localStorage.setItem('megs-delivery-service:muted', '1');
  });
  await page.goto('/');

  const menu = page.locator('.menu-screen');
  await expect(menu).toBeVisible({ timeout: 10_000 });

  const muteBtn = menu.locator('button[aria-label="Mute audio"], button[aria-label="Unmute audio"]').first();

  // First click: unlocks and unmutes (starts muted)
  await muteBtn.click();
  await page.waitForTimeout(300);
  let muted = await page.evaluate(() =>
    (window as unknown as { __audio?: { debugState(): { muted: boolean } } }).__audio?.debugState().muted
  );
  expect(muted).toBe(false);

  // Second click: mutes
  await muteBtn.click();
  await page.waitForTimeout(300);
  muted = await page.evaluate(() =>
    (window as unknown as { __audio?: { debugState(): { muted: boolean } } }).__audio?.debugState().muted
  );
  expect(muted).toBe(true);
});
