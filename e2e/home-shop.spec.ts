import { test, expect, collectErrors, mockEnvironment, expectUnhidden } from './fixtures';
import { createState } from '../src/simulation';
import { encodeSave, SAVE_KEY_PREFIX } from '../src/storage';

/** E2E: Home shop UI wiring.
 * Verifies the home interface renders with shop panels and the upgrade/
 * furnish buttons are present and clickable. Purchase logic is covered
 * headlessly; e2e proves the DOM wiring. */
test('home shop panels render with purchasable items', async ({ page }) => {
  const errors = await collectErrors(page);
  await mockEnvironment(page);

  // Seed a save with coins, in home mode at the broom workshop
  const state = createState();
  state.profile.coins = 500;
  state.profile.tutorialDone = true;
  state.mode = 'home';
  state.homePanel = 'brooms';
  const saveData = encodeSave(state);
  const slotKey = `${SAVE_KEY_PREFIX}1`;
  await page.addInitScript(({ key, data }) => {
    localStorage.setItem(key, data);
    localStorage.setItem('megs-delivery-last-slot-v1', '1');
  }, { key: slotKey, data: saveData });

  await page.goto('/');
  await expect(page.locator('.menu-screen')).toBeVisible({ timeout: 10_000 });
  await page.locator('.menu-screen button:has-text("Continue")').first().click();
  await expectUnhidden(page, '.meg-ui', 30_000);
  await expect(page.locator('.loading-screen')).toBeHidden({ timeout: 30_000 });
  await page.waitForTimeout(1000);

  // Home interface should be visible
  const homeVisible = await page.evaluate(() => {
    const el = document.querySelector('.home-interface') as HTMLElement;
    return el && !el.hidden;
  });
  expect(homeVisible, 'home interface should be visible').toBeTruthy();

  // Broom upgrade buttons should be present (not disabled with 500 coins)
  const upgradeBtn = page.locator('button[data-upgrade="speed"]').first();
  await expect(upgradeBtn).toBeVisible({ timeout: 5_000 });
  await expect(upgradeBtn).toBeEnabled();

  // Click to buy — coins should decrease
  const coinsBefore = await page.evaluate(() =>
    parseInt(document.body.innerText.match(/(\d+)\s*coins/i)?.[1] ?? '0')
  );
  await upgradeBtn.click();
  await page.waitForTimeout(500);
  const coinsAfter = await page.evaluate(() =>
    parseInt(document.body.innerText.match(/(\d+)\s*coins/i)?.[1] ?? '0')
  );
  expect(coinsAfter, `coins should decrease (was ${coinsBefore})`).toBeLessThan(coinsBefore);

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
