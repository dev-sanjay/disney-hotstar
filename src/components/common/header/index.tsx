import Logo from '../logo';
import Navbar from '../navbar';
import StyledHeader, { LeftSection, RightSection } from './styles';

const Header: React.FC = () => (
  <StyledHeader as="header" mainAxis={false} crossAxis>
    <LeftSection mainAxis={false} crossAxis>
      <Logo />
      <Navbar />
    </LeftSection>

    <RightSection mainAxis={false} crossAxis>
      Right Section
    </RightSection>
  </StyledHeader>
);

export default Header;
