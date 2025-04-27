import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginSolid } from '@rsbuild/plugin-solid';

export default defineConfig({
  html: {
    tags: [
      {
        tag: 'html',
        attrs: {
          'data-sidebar-state': 'full',
          'data-theme': 'light',
          lang: 'en',
        },
      },
    ],
    title: 'Solid Admin',
  },
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginSolid(),
  ],
});
