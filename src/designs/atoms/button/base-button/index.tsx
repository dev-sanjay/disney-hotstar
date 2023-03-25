import { CSSObject } from 'styled-components';

import StyledButton, { IButton } from '../styles';

export interface BaseButtonProps
  extends IButton,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * - Extra styling for the icon
   */
  style?: CSSObject;
}

export const Button: React.FC<BaseButtonProps> = ({
  children,
  style,
  ...rest
}) => (
  <StyledButton $style={style} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
