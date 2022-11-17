import Link from 'components/link';

const SecondaryNavigation = () => {
  return (
    <div className='flex gap-x-3'>
      <button>Search</button>
      <Link href='/kids'>Kids</Link>
      <button>Notification menu</button>
      <button>Account menu</button>
    </div>
  );
};

export default SecondaryNavigation;
