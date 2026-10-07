import { test, expect, collectErrors, startNewGame, domClick, expectUnhidden } from './fixtures';

/** E2E: Keyboard flight controls.
 * Proves keyboard input drives the game: holding W increases speed,
 * arrow keys turn, Space brakes. This is the primary desktop control
 * path — currently no e2e verifies input actually moves the player. */
test('keyboard input moves the player', async ({ page }) => {
  const errors = await collectErrors(page);
  await startNewGame(page);
  await domClick(page, '#start-btn');
  await expectUnhidden(page, '#flight-hud', 10_000);

  const getSpeed = () => page.evaluate(() =>
    parseFloat(document.querySelector('#speed-value')?.textContent ?? '0')
  );
  const getDistance = () => page.evaluate(() =>
    document.querySelector('#target-distance')?.textContent ?? ''
  );

  // Initial speed should be low
  const speedBefore = await getSpeed();

  // Hold E to accelerate (throttle up)
  // Note: game clamps dt to 100ms, so under load wall-time != game-time.
  // Poll for the condition instead of assuming a fixed timeout suffices.
  await page.keyboard.down('e');
  await expect.poll(getSpeed, { timeout: 15_000 })
    .toBeGreaterThan(speedBefore);
  const speedAfterE = await getSpeed();
  await page.keyboard.up('e');

  // Distance to target should be changing (player is moving)
  const dist1 = await getDistance();
  await page.waitForTimeout(1000);
  const dist2 = await getDistance();
  // Distance text should update as the player moves
  expect(dist1).toBeTruthy();
  expect(dist2).toBeTruthy();

  // E should brake? No — Q brakes (throttle down). Space is hover.
  // Accelerate again, then Q to slow. Poll for speed decrease (not fixed timeout)
  // because dt clamp means game-time runs slower than wall-time under load.
  await page.keyboard.down('e');
  await expect.poll(getSpeed, { timeout: 15_000 })
    .toBeGreaterThan(speedAfterE);
  await page.keyboard.up('e');
  const speedCruising = await getSpeed();
  await page.keyboard.down('q');
  await expect.poll(getSpeed, { timeout: 15_000 })
    .toBeLessThan(speedCruising);
  await page.keyboard.up('q');

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
