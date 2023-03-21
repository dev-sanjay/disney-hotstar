import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  type: 'dark',
  fontFamily: {
    primary: '',
    seconday: '',
  },
  colors: {
    // Primary Colors
    base900: '',
    base800: '',
    base700: '',
    base600: '',
    base500: '',
    base400: '',
    base300: '',
    base200: '',
    base100: '',
    base50: '',

    accent: 'blue',
    accentHover: '',
    background: '',
    surface: '',

    // Secondary Colors
    purple: '',
    blue: '',
    green: '',
    lightGreen: '',

    // Semantic Colors
    warning: '',
    error: '',
    link: '',
    info: '',
    caution: '',
    success: '',

    // Gradient colors
    glass: '',
    linearDark: '',
    radialDark: '',

    // Neutral Colors
    transparent: 'transparent',
    white: 'white',
    black: 'black',

    // TranslucentBlack Colors
    black90: '',
    black80: '',

    // TranslucentWhite Colors
  },
  shadows: {
    small: '0px 2px 8px rgba(0, 0, 0, 0.04)',
    normal: '0px 4px 16px rgba(0, 0, 0, 0.08)',
    big: '0px 8px 24px rgba(0, 0, 0, 0.08)',
    dark: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    button: '0px 8px 16px rgba(0, 0, 0, 0.1)',
  },
  blur: {
    small: 'blur(60px)',
    large: 'blur(12px)',
    layer: 'blur(60px)',
  },
};

export default theme;
