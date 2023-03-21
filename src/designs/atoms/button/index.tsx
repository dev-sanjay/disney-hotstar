import StyledButton from './styles';

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledButton>{children}</StyledButton>
);

export default Button;
