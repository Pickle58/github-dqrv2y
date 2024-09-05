import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://september-1-blog.netlify.app/",
  integrations: [preact()]
});