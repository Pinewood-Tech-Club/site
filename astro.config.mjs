// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  // Astro 7 defaults to JSX whitespace stripping (`compressHTML: 'jsx'`),
  // which can collapse spaces between inline elements. Keep the Astro 6
  // HTML-aware compressor so existing copy does not change.
  compressHTML: true,
});