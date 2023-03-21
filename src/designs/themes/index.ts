import { DefaultTheme } from 'styled-components';

import darkTheme from './dark';
import lightTheme from './light';
import { ThemeType } from './theme';

const themes: Record<ThemeType, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
