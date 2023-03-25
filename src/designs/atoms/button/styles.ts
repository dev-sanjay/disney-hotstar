import styled, { css, CSSObject, DefaultTheme } from 'styled-components';

import { IconProps } from '@atoms/icon';

type ButtonVarient = 'primary' | 'secondary' | 'outline';
export interface IButton {
  /**
   * Button variant
   */
  varient?: ButtonVarient;

  /**
   * Render button and icon in horizontal or column
   */
  direction?: 'row' | 'column';

  /**
   * Reverse the order of the icon and lable
   */
  reverse?: boolean;

  /**
   * Button text
   */
  label?: string;

  /**
   * Button icon
   */
  icon?: IconProps;

  /**
   * Shape of the button
   */
  shape?: {
    /**
     * Circular button for which **Height** and **Width** are same and border are rounded
     */
    circular?: {
      /**
       * Diameter of the circle
       */
      diameter: string;
    };
    /**
     * Square button for which **Height** and **Width** are same
     */
    square?: {
      /**
       * Lenge of the one side of the square
       */
      side: string;
    };
  };
}

interface IButtonStyles extends IButton {
  $style?: CSSObject;
  hasIcon?: boolean;
}

type ButtonColorScheme = {
  backgroundNormal: string;
  backgroundHover: string;
  colorNormal: string;
  colorHover?: string;
  borderColorNormal?: string;
  borderColorHover?: string;
};

const getStylesAsPerTheme = (
  theme: DefaultTheme,
  variant: ButtonVarient = 'primary'
) => {
  const buttonsColorScheme: Record<ButtonVarient, ButtonColorScheme> = {
    primary: {
      backgroundNormal: theme.colors.primary300,
      backgroundHover: theme.colors.primary200,
      colorNormal: theme.colors.neutral100,
    },
    secondary: {
      backgroundNormal: theme.colors.white,
      backgroundHover: theme.colors.neutral200,
      colorNormal: theme.colors.neutral600,
    },
    outline: {
      backgroundNormal: theme.colors.black90,
      backgroundHover: theme.colors.opacity40,
      colorNormal: theme.colors.neutral100,
      colorHover: theme.colors.neutral700,
      borderColorNormal: theme.colors.neutral100,
      borderColorHover: theme.colors.opacity40,
    },
  };

  const {
    backgroundNormal,
    backgroundHover,
    colorNormal,
    colorHover,
    borderColorNormal,
    borderColorHover,
  } = buttonsColorScheme[variant];

  return css`
    background: ${backgroundNormal};
    ${borderColorNormal ? `border: 1px solid ${borderColorNormal};` : ''}
    color: ${colorNormal};

    &:hover {
      background: ${backgroundHover};
      ${borderColorHover ? `border: 1px solid ${borderColorHover};` : ''}
      ${colorHover ? `color: ${colorHover};` : ''}
    }
  `;
};

const getStylesAsPerSize = (hasIcon?: boolean) => css`
  padding: ${hasIcon ? '12px' : '14.5px'} 24px;
`;

const getStylesAsPerShape = ({ shape }: Pick<IButton, 'shape'>) => {
  if (shape?.circular) {
    return css`
      padding: 0;
      width: ${shape.circular.diameter};
      height: ${shape.circular.diameter};
      border-radius: 50%;
    `;
  }

  if (shape?.square) {
    return css`
      padding: 0;
      width: ${shape.square.side};
      height: ${shape.square.side};
    `;
  }

  return '';
};

const StyledButton = styled.button<IButtonStyles>`
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border: 0;
  border-radius: 4px;

  ${({ $style }) => $style && css($style)}
  ${({ theme, varient }) => getStylesAsPerTheme(theme, varient)}
  ${({ hasIcon }) => getStylesAsPerSize(hasIcon)}
  ${({ shape }) => getStylesAsPerShape({ shape })}
`;

export default StyledButton;
