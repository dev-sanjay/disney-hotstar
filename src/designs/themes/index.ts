import { DefaultTheme } from 'styled-components';

import darkTheme from './dark';
import lightTheme from './light';
import { ThemeName } from './theme';

const themes: Record<ThemeName, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
