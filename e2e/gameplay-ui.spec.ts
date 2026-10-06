import { test, expect, collectErrors, startNewGame, domClick, expectUnhidden, expectAnimating, hud } from './fixtures';

/** Tier 2 — new game world integrity.
 * The 3D world must render and animate (not frozen). The HUD must show
 * game state. The mute button lives in the menus (title + pause) as a
 * speaker icon, not the gameplay HUD. */
test('new game world renders, animates, and shows HUD state', async ({ page }) => {
  const errors = await collectErrors(page);
  await startNewGame(page);

  // Enter flight from title
  await domClick(page, '#start-btn');
  await expectUnhidden(page, '#flight-hud', 10_000);

  // The world is animating (structural screenshot check)
  await expectAnimating(page);

  // HUD exposes game state via DOM
  const state = await hud(page);
  expect(state.targetName, 'HUD should show a target').toBeTruthy();
  expect(state.speed, 'HUD should show speed').toBeTruthy();

  // Mute button lives in the menus (speaker icon), not the flight HUD
  const hudMute = await page.locator('#flight-hud #mute-btn-title, #flight-hud #mute-btn-pause').count();
  expect(hudMute, 'gameplay HUD should not have a mute button').toBe(0);

  // Pause button present in HUD
  await expect(page.locator('#pause-btn')).toBeVisible();

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});

/** Tier 2 — pause menu integrity and mute placement.
 * Pause must show the pause card, and resume must return to flight.
 * Mute lives in the menus as speaker icons (title card + pause card). */
test('pause menu shows with mute, resume returns to flight', async ({ page }) => {
  const errors = await collectErrors(page);
  await startNewGame(page);

  // Mute control is in the title card (main menu)
  const titleMute = await page.locator('#title-card #mute-btn-title').count();
  expect(titleMute, 'title card should have a mute button').toBe(1);

  await domClick(page, '#start-btn');
  await expectUnhidden(page, '#flight-hud', 10_000);

  // Mute control is in the pause card (speaker icon)
  await domClick(page, '#pause-btn');
  await expectUnhidden(page, '#pause-card', 10_000);
  const pauseMuteVisible = await page.locator('#pause-card #mute-btn-pause').count();
  expect(pauseMuteVisible, 'pause card should have a mute button').toBe(1);

  // Resume returns to flight
  await domClick(page, '#resume-btn');
  await expect(page.locator('#pause-card')).toBeHidden({ timeout: 10_000 });
  await expectUnhidden(page, '#flight-hud', 10_000);

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
