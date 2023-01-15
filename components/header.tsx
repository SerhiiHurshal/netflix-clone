import Logo from 'components/logo';
import Navigation from './navigation';
import SecondaryNavigation from './secondary-navigation';

const Header = () => {
  return (
    <nav className='flex justify-between w-full py-5 text-sm px-[4%]'>
      <div className='flex gap-x-11'>
        <Logo />
        <Navigation />
      </div>
      <SecondaryNavigation />
    </nav>
  );
};

export default Header;
