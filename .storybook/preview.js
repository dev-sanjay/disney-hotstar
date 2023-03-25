import '../src/styles/icon.css';

import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import themes from '../src/designs/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

addDecorator(withThemesProvider(Object.values(themes)), ThemeProvider);