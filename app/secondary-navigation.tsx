import Link from 'next/link';

const SecondaryNavigation = () => {
  return (
    <div>
      <button>Search</button>
      <Link href='/kids'>Kids</Link>
      <button>Notification menu</button>
      <button>Account menu</button>
    </div>
  );
};

export default SecondaryNavigation;
