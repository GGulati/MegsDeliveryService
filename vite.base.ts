/** Resolve the Vite `base` path for this build.
 * - PR preview builds (PR_NUMBER set): /MegsDeliveryService/pr-<N>/
 * - GitHub Pages production builds (GITHUB_PAGES set): /MegsDeliveryService/
 * - Everything else (local dev / preview): /
 */
export function resolveBase(env: NodeJS.ProcessEnv): string {
  const pr = env.PR_NUMBER?.trim();
  if (pr) return `/MegsDeliveryService/pr-${pr}/`;
  if (env.GITHUB_PAGES) return '/MegsDeliveryService/';
  return '/';
}
