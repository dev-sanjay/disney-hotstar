export type ThemeName = 'light' | 'dark';

type CommonColors = 'white' | 'black' | 'black90' | 'transparent' | 'opacity40';
type PrimaryColors =
  | 'primary500'
  | 'primary400'
  | 'primary300'
  | 'primary200'
  | 'primary100';
type AccentColors = 'accent200';
type NeutralColors =
  | 'neutral700'
  | 'neutral600'
  | 'neutral500'
  | 'neutral400'
  | 'neutral300'
  | 'neutral200'
  | 'neutral100';

type Colors = CommonColors | PrimaryColors | AccentColors | NeutralColors;

interface Shadows {
  small: string;
  normal: string;
  big: string;
  dark: string;
  button: string;
}

interface Blur {
  layer: string;
  small: string;
  large: string;
}

interface Gradient {
  linear: string;
}

declare module 'styled-components' {
  interface DefaultTheme {
    name: ThemeName;
    fontFamily: {
      primary: string;
      seconday: string;
    };

    colors: Record<Colors, string>;
    shadows: Shadows;
    blur: Blur;
    gradient: Gradient;
  }
}
