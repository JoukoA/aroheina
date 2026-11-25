// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { copyFileSync } from 'node:fs';

/**
 * @astrojs/sitemap writes sitemap-index.xml + sitemap-0.xml.
 * This tiny integration also copies the index to /sitemap.xml so the
 * conventional URL works (the index points to the real sitemap files).
 * It must come AFTER sitemap() in the integrations list.
 */
const sitemapAlias = {
  name: 'sitemap-alias',
  hooks: {
    'astro:build:done': ({ dir }) => {
      copyFileSync(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir));
    },
  },
};

export default defineConfig({
  site: 'https://aroheina.online',
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx(), sitemap(), sitemapAlias],
  markdown: { shikiConfig: { theme: 'github-light' } },
});
