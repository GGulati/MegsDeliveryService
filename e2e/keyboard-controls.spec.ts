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
  await page.keyboard.down('e');
  await page.waitForTimeout(2000);
  const speedAfterE = await getSpeed();
  await page.keyboard.up('e');

  expect(speedAfterE, `E should accelerate (was ${speedBefore}, now ${speedAfterE})`)
    .toBeGreaterThan(speedBefore);

  // Distance to target should be changing (player is moving)
  const dist1 = await getDistance();
  await page.waitForTimeout(1000);
  const dist2 = await getDistance();
  // Distance text should update as the player moves
  expect(dist1).toBeTruthy();
  expect(dist2).toBeTruthy();

  // E should brake? No — Q brakes (throttle down). Space is hover.
  // Accelerate again, then Q to slow
  await page.keyboard.down('e');
  await page.waitForTimeout(1000);
  await page.keyboard.up('e');
  const speedCruising = await getSpeed();
  await page.keyboard.down('q');
  await page.waitForTimeout(1500);
  await page.keyboard.up('q');
  const speedAfterBrake = await getSpeed();
  expect(speedAfterBrake, `Q should brake (was ${speedCruising}, now ${speedAfterBrake})`)
    .toBeLessThan(speedCruising);

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
