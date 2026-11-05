import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ypareek.ch',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
});
