import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig, splitVendorChunkPlugin } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      build: {
        sourcemap: false,
        target: ['es2020'],
        rollupOptions: {
          output: {
            manualChunks: {
              react: ['react', 'react-dom'],
              lodash: ['lodash'],
            },
            cache: false,
          },
        },
      },
      plugins: [splitVendorChunkPlugin()],
    });
  },
};
export default config;
