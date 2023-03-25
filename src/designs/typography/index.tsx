import StyledTypography, { Typographies } from './styles';

export interface TypographyProps {
  children?: React.ReactNode;
  typography: Typographies;
}
const Typography: React.FC<TypographyProps> = ({ children, typography }) => (
  <StyledTypography typography={typography}>{children}</StyledTypography>
);

export default Typography;
