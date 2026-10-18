import { test, expect, collectErrors, mockEnvironment, expectUnhidden, seedRandom } from './fixtures';
import { createState } from '../src/simulation';
import { encodeSave, SAVE_KEY_PREFIX } from '../src/storage';

/** E2E: Broom upgrade purchasing with capstone choice and respec.
 * Verifies the full broom progression flow: buying track levels,
 * capstone cards appearing at max level, choosing a capstone,
 * and switching (respec) by paying again. */
test('broom upgrade purchasing with capstone respec', async ({ page }) => {
  test.setTimeout(120_000);
  const errors = await collectErrors(page);
  await mockEnvironment(page);
  await seedRandom(page, 42);

  // Seed a save with plenty of coins, in home mode at the broom workshop
  const state = createState();
  state.profile.coins = 1000;
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

  // Verify 5 tracks visible
  const tracks = ['speed', 'handling', 'braking', 'capacity', 'glide'];
  for (const track of tracks) {
    await expect(page.locator(`button[data-upgrade="${track}"]`).first(),
      `${track} track should be visible`).toBeVisible({ timeout: 5_000 });
  }

  const getCoins = () => page.evaluate(() => {
    const gs = (window as unknown as {
      __gameState?: () => { profile: { coins: number } }
    }).__gameState?.();
    return gs?.profile.coins ?? 0;
  });

  // Buy Capacity level 1
  const coinsBefore = await getCoins();
  await page.locator('button[data-upgrade="capacity"]').first().click();
  await page.waitForTimeout(500);
  const coinsAfterL1 = await getCoins();
  expect(coinsAfterL1, 'coins should decrease after buying capacity L1').toBeLessThan(coinsBefore);

  // Verify level shows 1/2
  const capacityBtn = page.locator('button[data-upgrade="capacity"]').first();
  await expect(capacityBtn.locator('small')).toContainText('1/2');

  // Buy Capacity level 2 (max)
  await capacityBtn.click();
  await page.waitForTimeout(500);
  const coinsAfterL2 = await getCoins();
  expect(coinsAfterL2, 'coins should decrease after buying capacity L2').toBeLessThan(coinsAfterL1);
  const capacityBtnL2 = page.locator('button[data-upgrade="capacity"]').first();
  await expect(capacityBtnL2.locator('small')).toContainText('2/2', { timeout: 5_000 });

  // Verify game state has capacity at level 2 before attempting capstone
  const capacityLevel = await page.evaluate(() => {
    const gs = (window as unknown as { __gameState?: () => { profile: { upgrades: { capacity: number } } } }).__gameState?.();
    return gs?.profile.upgrades.capacity;
  });
  expect(capacityLevel, 'capacity should be at level 2 in game state').toBe(2);

  // Verify two capstone cards appear (re-locate after UI re-render from L2 purchase)
  const deepSatchelBtn = page.locator('button[data-capstone="capacity:deep-satchel"]').first();
  const carefulPackerBtn = page.locator('button[data-capstone="capacity:careful-packer"]').first();
  await expect(deepSatchelBtn, 'Deep Satchel card should appear').toBeVisible({ timeout: 5_000 });
  await expect(carefulPackerBtn, 'Careful Packer card should appear').toBeVisible({ timeout: 5_000 });
  await expect(deepSatchelBtn).toContainText('Choose');
  await expect(carefulPackerBtn).toContainText('Choose');

  // Click Deep Satchel "Choose" — costs 120
  const coinsBeforeCapstone = await getCoins();
  // Wait for the button to be enabled (UI re-renders after L2 purchase)
  await expect(deepSatchelBtn).toBeEnabled({ timeout: 5_000 });
  await deepSatchelBtn.click();
  await page.waitForTimeout(500);
  const coinsAfterChoose = await getCoins();
  expect(coinsBeforeCapstone - coinsAfterChoose, 'capstone should cost 120 coins').toBe(120);

  // Verify Deep Satchel shows "Active"
  await expect(page.locator('button[data-capstone="capacity:deep-satchel"]').first())
    .toContainText('Active');
  // Careful Packer should now show "Switch"
  await expect(page.locator('button[data-capstone="capacity:careful-packer"]').first())
    .toContainText('Switch');

  // Click Careful Packer "Switch" — costs another 120 (respec)
  await page.locator('button[data-capstone="capacity:careful-packer"]').first().click();
  await page.waitForTimeout(500);
  const coinsAfterSwitch = await getCoins();
  expect(coinsAfterChoose - coinsAfterSwitch, 'respec should cost 120 coins').toBe(120);

  // Verify Careful Packer is now Active
  await expect(page.locator('button[data-capstone="capacity:careful-packer"]').first())
    .toContainText('Active');
  await expect(page.locator('button[data-capstone="capacity:deep-satchel"]').first())
    .toContainText('Switch');

  // Verify game state reflects the respec
  const capstone = await page.evaluate(() => {
    const gs = (window as unknown as { __gameState?: () => { profile: { upgrades: { capstones: Record<string, string> } } } }).__gameState?.();
    return gs?.profile.upgrades.capstones['capacity'];
  });
  expect(capstone, 'capstone should be careful-packer after respec').toBe('careful-packer');

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
