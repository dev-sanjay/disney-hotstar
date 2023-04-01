import Icon, { IconProps } from '@atoms/icon';
import Typography, { TypographyProps } from '@typography';

import StyledMenu, { LinkText } from './styles';

interface MenuProps extends IconProps, TypographyProps {
  text: string;
  isActive: boolean;
}

const Menu: React.FC<MenuProps> = ({ name, typography, text, isActive }) => (
  <StyledMenu mainAxis={false} crossAxis isActive={isActive}>
    <Icon name={name} />
    <Typography typography={typography}>
      <LinkText>{text}</LinkText>
    </Typography>
  </StyledMenu>
);

export default Menu;
