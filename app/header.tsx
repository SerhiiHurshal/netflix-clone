import Image from 'next/image';
import Navigation from './navigation';
import SecondaryNavigation from './secondary-navigation';

const Header = () => {
  return (
    <header>
      <Image src='/logo.svg' width={92} height={30} alt='logo' />
      <Navigation />
      <SecondaryNavigation />
    </header>
  );
};

export default Header;
