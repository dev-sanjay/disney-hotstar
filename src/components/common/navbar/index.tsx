import { IconName } from '@atoms/icon';
import { Typographies } from '@typography/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Menu from './menu';
import StyledNavbar from './styles';

const menuItems: {
  name: IconName;
  typography: Typographies;
  text: string;
  href: string;
}[] = [
  {
    name: 'home',
    typography: 'Montserrat/Bold/16px',
    text: 'Home',
    href: '/',
  },
  {
    name: 'tv',
    typography: 'Montserrat/Bold/16px',
    text: 'Series',
    href: '/series',
  },
  {
    name: 'movie',
    typography: 'Montserrat/Bold/16px',
    text: 'Movies',
    href: '/movies',
  },
  {
    name: 'star',
    typography: 'Montserrat/Bold/16px',
    text: 'Originals',
    href: '/originals',
  },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <StyledNavbar>
      {menuItems.map(({ name, typography, text, href }) => (
        <Link href={href} key={name}>
          <Menu
            name={name}
            typography={typography}
            text={text}
            isActive={router.pathname === href}
          />
        </Link>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
