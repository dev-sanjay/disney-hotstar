import Typography, { TypographyProps } from '@typography';

import { BaseButtonProps } from '../base-button';
import StyledButton from '../styles';

export interface TextButtonProps extends TypographyProps, BaseButtonProps {}

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  style,
  typography,
  ...rest
}) => (
  <StyledButton $style={style} {...rest}>
    <Typography typography={typography}>{children}</Typography>
  </StyledButton>
);

export default TextButton;
