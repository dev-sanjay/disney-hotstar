import StyledCenter, { ICenter } from './styles';

interface CenterProps extends ICenter {
  children?: React.ReactNode;
}

const Center: React.FC<CenterProps> = ({ children, ...rest }) => (
  <StyledCenter {...rest}>{children}</StyledCenter>
);

export default Center;
