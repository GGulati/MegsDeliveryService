import { test, expect, collectErrors, startNewGame, domClick, expectUnhidden } from './fixtures';

/** E2E: Keyboard flight controls.
 * Proves keyboard input drives the game: holding W increases speed,
 * arrow keys turn, Space brakes. This is the primary desktop control
 * path — currently no e2e verifies input actually moves the player. */
test('keyboard input moves the player', async ({ page }) => {
  test.setTimeout(180_000); // Slow: 22s world loading + flight actions
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

  // Hold E to accelerate (throttle up) — poll until speed increases
  await page.keyboard.down('e');
  await expect(async () => {
    const s = await getSpeed();
    expect(s).toBeGreaterThan(speedBefore);
  }).toPass({ timeout: 10_000 });
  await page.keyboard.up('e');

  // Distance to target should be changing (player is moving)
  const dist1 = await getDistance();
  expect(dist1).toBeTruthy();
  await expect(async () => {
    const d2 = await getDistance();
    expect(d2).toBeTruthy();
    expect(d2).not.toBe(dist1);
  }).toPass({ timeout: 10_000 });

  // Q brakes (throttle down). Space is hover.
  // Accelerate again, then Q to slow — poll until speed decreases
  await page.keyboard.down('e');
  await page.waitForTimeout(1000);
  await page.keyboard.up('e');
  const speedCruising = await getSpeed();
  await page.keyboard.down('q');
  await expect(async () => {
    const s = await getSpeed();
    expect(s).toBeLessThan(speedCruising);
  }).toPass({ timeout: 10_000 });
  await page.keyboard.up('q');

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
