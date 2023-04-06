const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    "storybook-addon-styled-component-theme/dist/preset",
    "storybook-addon-next"
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets": path.resolve(__dirname, '../src/assets'),
      "@atoms/button": path.resolve(__dirname, '../src/designs/atoms/button'),
      "@atoms/icon": path.resolve(__dirname, '../src/designs/atoms/icon'),
      "@components": path.resolve(__dirname, '../src/components'),
      "@typography": path.resolve(__dirname, '../src/designs/typography'),
    }; 

    return config;
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin', // Required for typescript 5
  },
};
