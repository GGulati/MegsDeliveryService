import { defineConfig, devices } from '@playwright/test';

/** Local-only e2e. Not wired into CI (deliberate).
 * Run: npm run test:e2e  (builds first, then serves dist via vite preview) */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'list',
  timeout: 120_000,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    {
      name: 'mobile-chromium',
      use: {
        ...devices['Pixel 7'],
        // Real touch events for joystick testing
        hasTouch: true,
      },
    },
    {
      // Headed: headless Firefox blocks WebGL2, which this game requires.
      // On headless Linux, run via xvfb-run.
      name: 'mobile-firefox',
      use: {
        browserName: 'firefox',
        headless: false,
        viewport: { width: 412, height: 915 },
        hasTouch: true,
        isMobile: true,
        userAgent:
          'Mozilla/5.0 (Android 14; Mobile; rv:120.0) Gecko/120.0 Firefox/120.0',
      },
    },
  ],
  webServer: {
    command: 'npx vite preview --port 4173 --strictPort --host 127.0.0.1',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
