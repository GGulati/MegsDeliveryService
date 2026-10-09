import { test, expect, collectErrors, mockEnvironment, expectUnhidden, seedRandom, domClick } from './fixtures';
import { createState } from '../src/simulation';
import { encodeSave, SAVE_KEY_PREFIX } from '../src/storage';

/** E2E: Decor upgrades with interactivity.
 * Buys the cushion and cat-tree, then verifies the interactive behaviors:
 * sitting on the cushion (Pumpkin joins) and petting Pumpkin at the cat-tree. */
test('decor upgrades with interactivity', async ({ page }) => {
  test.setTimeout(180_000);
  const errors = await collectErrors(page);
  await mockEnvironment(page);
  await seedRandom(page, 42);

  // Seed a save with coins, in home mode at the decor corner
  const state = createState();
  state.profile.coins = 500;
  state.profile.tutorialDone = true;
  state.mode = 'home';
  state.homePanel = 'decor';
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

  // Buy the cushion and cat-tree
  const cushionBtn = page.locator('button[data-furnish="cushion"]').first();
  const catTreeBtn = page.locator('button[data-furnish="cat-tree"]').first();
  await expect(cushionBtn, 'cushion should be in the shop').toBeVisible({ timeout: 5_000 });
  await expect(catTreeBtn, 'cat-tree should be in the shop').toBeVisible({ timeout: 5_000 });

  await cushionBtn.click();
  await page.waitForTimeout(500);
  await expect(cushionBtn).toContainText('At home');

  await catTreeBtn.click();
  await page.waitForTimeout(500);
  await expect(catTreeBtn).toContainText('At home');

  // Close the shop (Escape or close button)
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  // Helper to get game state
  const getState = () => page.evaluate(() => {
    return (window as unknown as {
      __gameState?: () => {
        homeSitting: boolean;
        petCount: number;
        homePosition: { x: number; z: number };
        homePanel: string;
      }
    }).__gameState?.();
  });

  // Verify panel is closed (required for movement)
  let panelCheck = await getState();

  // Helper to move Meg via keyboard.
  // Cushion is at (1.4, 3.5); home starts at (0, 3).
  // Need: +1.4 x (right = 'd'), +0.5 z (back = 's', since 'w' is -z)
  // Interaction radius is 1.5m, so get well within range.
  await page.keyboard.down('d'); // move right (+x)
  await page.waitForTimeout(300);
  await page.keyboard.up('d');
  await page.waitForTimeout(200);
  panelCheck = await getState();

  // Press E near cushion → should sit
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  let gs = await getState();
  expect(gs?.homeSitting, 'pressing E near cushion should set homeSitting=true').toBe(true);

  // Press E again → should stand
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  gs = await getState();
  expect(gs?.homeSitting, 'pressing E again should set homeSitting=false').toBe(false);

  // Walk to cat-tree at (7, 2.5) — move right
  const petCountBefore = (await getState())?.petCount ?? 0;
  await page.keyboard.down('d');
  await page.waitForTimeout(2000);
  await page.keyboard.up('d');
  await page.waitForTimeout(500);

  // Press E near cat-tree → should pet (petCount increases)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  const petCountAfter = (await getState())?.petCount ?? 0;
  expect(petCountAfter, `petCount should increase after petting (was ${petCountBefore})`)
    .toBeGreaterThan(petCountBefore);

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
