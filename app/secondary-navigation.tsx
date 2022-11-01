import Link from 'next/link';

const SecondaryNavigation = () => {
  return (
    <nav>
      <button>Search</button>
      <Link href='/kids'>Kids</Link>
      <button>Notification menu</button>
      <button>Account menu</button>
    </nav>
  );
};

export default SecondaryNavigation;
