import Logo from 'components/logo';
import Navigation from './navigation';
import SecondaryNavigation from './secondary-navigation';

const Header = () => {
  return (
    <nav className='flex justify-between w-full px-4 py-5 text-sm'>
      <Logo />
      <Navigation />
      <SecondaryNavigation />
    </nav>
  );
};

export default Header;
