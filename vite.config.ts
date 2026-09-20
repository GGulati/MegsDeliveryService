import { defineConfig } from 'vite';
import { resolveBase } from './vite.base';

export default defineConfig({
  base: resolveBase(process.env),
  define: {
    __BUILD_SHA__: JSON.stringify(process.env.GITHUB_SHA?.slice(0, 7) ?? 'dev'),
  },
});
