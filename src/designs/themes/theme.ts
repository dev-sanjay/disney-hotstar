export type ThemeType = 'light' | 'dark';

type BaseColors =
  | 'base900'
  | 'base800'
  | 'base700'
  | 'base600'
  | 'base500'
  | 'base400'
  | 'base300'
  | 'base200'
  | 'base100'
  | 'base50';
type AccentColors = 'accent' | 'accentHover';
type SurfaceColors = 'background' | 'surface';

type PrimaryColors = BaseColors | AccentColors | SurfaceColors;
type SecondaryColors = 'purple' | 'blue' | 'green' | 'lightGreen';
type SemanticColors =
  | 'warning'
  | 'error'
  | 'link'
  | 'info'
  | 'caution'
  | 'success';
type GradientColors = 'glass' | 'linearDark' | 'radialDark';
type NeutralColors = 'black' | 'white' | 'transparent';
type TranslucentBlack =
  | 'black90'
  | 'black80'
  | 'black70'
  | 'black60'
  | 'black50'
  | 'black40'
  | 'black30'
  | 'black20'
  | 'black10';
type TranslucentWhite =
  | 'white90'
  | 'white80'
  | 'white70'
  | 'white60'
  | 'white50'
  | 'white40'
  | 'white30'
  | 'white20'
  | 'white10';

type Colors =
  | PrimaryColors
  | SecondaryColors
  | SemanticColors
  | GradientColors
  | NeutralColors
  | TranslucentWhite
  | TranslucentBlack;

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

declare module 'styled-components' {
  interface DefaultTheme {
    type: ThemeType;
    fontFamily: {
      primary: string;
      seconday: string;
    };

    // TODO: Remove partial once all colors are added
    colors: Partial<Record<Colors, string>>;
    shadows: Shadows;
    blur: Blur;
  }
}
