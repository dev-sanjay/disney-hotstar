import { CSSObject } from 'styled-components';
import { CardStylesProps, StyledCard } from './styles';

interface CardProps
  extends CardStylesProps,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  style?: CSSObject;
}

const Card: React.FC<CardProps> = ({ children, style, ...rest }) => (
  <StyledCard $style={style} {...rest}>
    {children}
  </StyledCard>
);

export default Card;
