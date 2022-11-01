import Logo from 'components/logo';
import Navigation from './navigation';
import SecondaryNavigation from './secondary-navigation';

const Header = () => {
  return (
    <nav>
      <Logo />
      <Navigation />
      <SecondaryNavigation />
    </nav>
  );
};

export default Header;
