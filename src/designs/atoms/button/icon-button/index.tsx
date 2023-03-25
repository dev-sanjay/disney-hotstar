import Icon, { IconProps } from '@atoms/icon';

import { BaseButtonProps } from '../base-button';
import StyledButton from '../styles';

export interface IconButtonProps extends BaseButtonProps {
  /**
   * - Props for the icon
   */
  icon: IconProps;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  style,
  ...rest
}) => (
  <StyledButton $style={style} hasIcon {...rest}>
    <Icon {...icon} />
  </StyledButton>
);

export default IconButton;
