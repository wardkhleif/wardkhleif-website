import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wardkhleif.com',
  output: 'static',
  integrations: [sitemap()],
  // Dev-only overlay. It never shipped to production, but it's in the way.
  devToolbar: { enabled: false },
});
