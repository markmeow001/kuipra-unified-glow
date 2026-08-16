import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kuipra.ca',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Static pages served from public/ are invisible to Astro's route
      // graph, so they must be listed by hand here.
      customPages: ['https://www.kuipra.ca/', 'https://www.kuipra.ca/zh/'],
    }),
  ],
  build: {
    format: 'directory',
  },
});
