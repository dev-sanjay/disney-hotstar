import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  name: 'light',
  fontFamily: {
    primary: '',
    seconday: '',
  },
  colors: {
    // Common Colors
    transparent: 'transparent',
    white: 'white',
    black: 'black',
    black90: '#000000e6',
    opacity40: '#f9f9f966',

    // Primary Colors
    primary500: '#00386C',
    primary400: '#0063E5',
    primary300: '#037AEB',
    primary200: '#068DFF',
    primary100: '#67BDFF',

    // Accent Colors
    accent200: '#02E7F5',

    // Neutral Colors
    neutral700: '#101116',
    neutral600: '#1A1D29',
    neutral500: '#30333E',
    neutral400: '#5F6169',
    neutral300: '#74757D',
    neutral200: '#C8C9CB',
    neutral100: '#F9F9F9',
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
  gradient: {
    linear:
      'linear-gradient(180deg, #0E1012 -50.62%, rgba(14, 16, 18, 0) 100%)',
  },
};

export default theme;
