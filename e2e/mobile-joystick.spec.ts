import { test, expect, collectErrors, mockEnvironment, seedRandom, expectUnhidden, domClick } from './fixtures';

/** Tier 2 — mobile joystick.
 * On touch devices, a floating joystick must appear where the finger lands
 * and drive flight input. This is the primary flight control on mobile.
 *
 * Regression: joystick unresponsive on mobile (game animates, but touch
 * input does nothing). */

async function startFlightMobile(page: import('@playwright/test').Page) {
  await mockEnvironment(page);
  await seedRandom(page, 42);
  await page.goto('/');
  await expect(page.locator('.menu-screen')).toBeVisible({ timeout: 10_000 });
  await page.locator('button:has-text("New Game")').first().click();
  await expectUnhidden(page, '.meg-ui', 30_000);
  await expect(page.locator('.loading-screen')).toBeHidden({ timeout: 30_000 });
  await domClick(page, '#start-btn');
  await expectUnhidden(page, '#flight-hud', 10_000);
}

/** Dispatch a synthetic touch pointerdown on the canvas. */
async function touchDown(page: import('@playwright/test').Page, x: number, y: number) {
  await page.evaluate(([px, py]) => {
    const canvas = document.querySelector('canvas')!;
    canvas.dispatchEvent(new PointerEvent('pointerdown', {
      pointerId: 7, pointerType: 'touch', clientX: px, clientY: py, bubbles: true,
    }));
  }, [x, y]);
}

test('touch drag on canvas spawns the joystick', async ({ page }) => {
  const errors = await collectErrors(page);
  await startFlightMobile(page);

  // Joystick starts hidden
  const joyHiddenBefore = await page.evaluate(
    () => (document.querySelector('#joystick') as HTMLElement)?.hidden
  );
  expect(joyHiddenBefore).toBe(true);

  // Touch the canvas
  const box = await page.locator('canvas').boundingBox();
  expect(box).toBeTruthy();
  await touchDown(page, box!.x + box!.width / 2, box!.y + box!.height / 2);
  await page.waitForTimeout(500);

  // Joystick should appear where the finger landed
  const joyHiddenAfter = await page.evaluate(
    () => (document.querySelector('#joystick') as HTMLElement)?.hidden
  );
  expect(joyHiddenAfter, 'joystick should appear on touch').toBe(false);

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});

test('joystick drag steers the player', async ({ page }) => {
  const errors = await collectErrors(page);
  await startFlightMobile(page);

  const box = await page.locator('canvas').boundingBox();
  const cx = box!.x + box!.width / 2, cy = box!.y + box!.height / 2;

  // Touch down and drag right
  await page.evaluate(([x, y]) => {
    const canvas = document.querySelector('canvas')!;
    const opts = { pointerId: 7, pointerType: 'touch', bubbles: true };
    canvas.dispatchEvent(new PointerEvent('pointerdown', { ...opts, clientX: x, clientY: y }));
    canvas.dispatchEvent(new PointerEvent('pointermove', { ...opts, clientX: x + 80, clientY: y }));
  }, [cx, cy]);
  await page.waitForTimeout(1000);

  // The stick input should be non-zero (steering right)
  const stickX = await page.evaluate(() => {
    const joy = document.querySelector('#joystick') as HTMLElement;
    return joy.style.getPropertyValue('--stick-x');
  });
  expect(stickX, 'joystick should show rightward deflection').toBeTruthy();
  expect(parseFloat(stickX), 'stick X should be positive (right)').toBeGreaterThan(0);

  expect(errors, `expected zero errors, got:\n${errors.join('\n')}`).toEqual([]);
});
