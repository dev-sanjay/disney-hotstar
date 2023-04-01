import Image from 'next/image';
import Link from 'next/link';

import logoImage from '@assets/images/logo.png';
import StyledLogo from './styles';

const Logo: React.FC = () => (
  <Link href="/">
    <StyledLogo>
      <Image src={logoImage} alt="Disney + Hotstar" priority />
    </StyledLogo>
  </Link>
);

export default Logo;
