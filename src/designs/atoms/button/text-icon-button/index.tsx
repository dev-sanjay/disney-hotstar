import Icon from '@atoms/icon';
import Typography, { TypographyProps } from '@typography';

import { IconButtonProps } from '../icon-button';
import StyledButton from '../styles';

export interface TextIconButtonProps extends IconButtonProps, TypographyProps {
  /**
   * - Label for the icon
   */
  text: string;
}

export const TextIconButton: React.FC<TextIconButtonProps> = ({
  style,
  text,
  icon,
  typography,
  ...rest
}) => (
  <StyledButton $style={style} hasIcon {...rest}>
    <Icon {...icon} />
    <Typography typography={typography}>{text}</Typography>
  </StyledButton>
);

export default TextIconButton;
