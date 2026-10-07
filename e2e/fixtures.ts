import { test as base, expect } from '@playwright/test';

/** Shared e2e fixtures and helpers.
 *
 * Mocking strategy (no game-code test hooks):
 * - Determinism via addInitScript: Math.random is replaced with a seeded
 *   PRNG before page scripts run. No ?test=1 extension, no window.__game.
 * - State assertions via DOM (the HUD already exposes coins, target,
 *   distance, speed) and screenshot comparison for animation.
 */

export const test = base;
export { expect };

/** Test-environment mocks injected before page scripts run:
 * - document.hidden / visibilityState: headless browsers report hidden,
 *   which triggers the game's auto-pause. Force visible for tests.
 * - Math.random: replaced with a seeded PRNG further below. */
export async function mockEnvironment(page: import('@playwright/test').Page) {
  await page.addInitScript(() => {
    Object.defineProperty(document, 'hidden', { value: false, configurable: true });
    Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true });
  });
}

/** Seeded PRNG (mulberry32) injected before page scripts run. */
export async function seedRandom(page: import('@playwright/test').Page, seed = 42) {
  await page.addInitScript(s => {
    let a = s >>> 0;
    Math.random = () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }, seed);
}

/** Mock (pointer: coarse) as true via matchMedia override.
 * Needed for touch-control tests on desktop Chromium, where the media
 * query is false but the test dispatches synthetic touch events. */
export async function mockCoarsePointer(page: import('@playwright/test').Page) {
  await page.addInitScript(() => {
    const orig = window.matchMedia.bind(window);
    window.matchMedia = (query: string) => {
      if (query === '(pointer: coarse)') {
        return { matches: true, media: query, onchange: null,
          addListener: () => {}, removeListener: () => {},
          addEventListener: () => {}, removeEventListener: () => {},
          dispatchEvent: () => false } as unknown as MediaQueryList;
      }
      return orig(query);
    };
  });
}

/** Collect console errors and pageerrors during a test. */
export async function collectErrors(page: import('@playwright/test').Page) {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(`[console.error] ${msg.text().slice(0, 300)}`);
  });
  page.on('pageerror', err => {
    errors.push(`[pageerror] ${String(err).slice(0, 300)}`);
  });
  return errors;
}

/** Wait until an element's `hidden` attribute is false (the game's own
 * visibility signal). Playwright's toBeVisible() also requires a non-zero
 * bounding box, which is flaky for HUD layers in headless. */
export async function expectUnhidden(
  page: import('@playwright/test').Page,
  selector: string,
  timeout = 30_000,
) {
  await expect(async () => {
    const hidden = await page.evaluate(
      sel => (document.querySelector(sel) as HTMLElement | null)?.hidden,
      selector,
    );
    expect(hidden).toBe(false);
  }).toPass({ timeout });
}

/** Start a new game and wait until the world is interactive. */
export async function startNewGame(page: import('@playwright/test').Page) {
  await mockEnvironment(page);
  await seedRandom(page, 42);
  await page.goto('/');
  await expect(page.locator('.menu-screen')).toBeVisible();
  await page.locator('button:has-text("New Game")').first().click();
  await expect(page.locator('.loading-screen')).toBeVisible();
  await expectUnhidden(page, '.meg-ui');
  await expect(page.locator('.loading-screen')).toBeHidden({ timeout: 30_000 });
}

/** Assert the game is animating: two screenshots 2s apart must differ.
 * Structural (not pixel-diffed against a baseline), so no GPU flake. */
export async function expectAnimating(page: import('@playwright/test').Page) {
  const a = await page.screenshot();
  await page.waitForTimeout(2000);
  const b = await page.screenshot();
  expect(a.equals(b), 'screenshots 2s apart should differ (game is animating)').toBe(false);
}

/** Click via direct DOM dispatch (avoids Playwright's navigation-wait quirk
 * on buttons whose handlers never navigate). */
export async function domClick(page: import('@playwright/test').Page, selector: string) {
  // Wait for the element to be visible before clicking — under load, the DOM
  // may not be ready when the test runs. This avoids silent no-op clicks.
  await page.locator(selector).waitFor({ state: 'visible', timeout: 10_000 });
  await page.evaluate(sel => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (!el) throw new Error(`domClick: ${sel} not found`);
    el.click();
  }, selector);
}

/** Read HUD values from the DOM. */
export async function hud(page: import('@playwright/test').Page) {
  return page.evaluate(() => ({
    targetName: document.querySelector('#target-name')?.textContent?.trim() ?? null,
    targetDistance: document.querySelector('#target-distance')?.textContent?.trim() ?? null,
    speed: document.querySelector('#speed-value')?.textContent?.trim() ?? null,
    coins: document.querySelector('#flight-earnings')?.textContent?.trim() ?? null,
  }));
}
