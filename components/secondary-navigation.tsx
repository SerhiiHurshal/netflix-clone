import Link from 'components/link';
import { LabelRegular } from './typography';

const SecondaryNavigation = () => {
  return (
    <div className='flex gap-x-3'>
      <button>
        <LabelRegular>Search </LabelRegular>
      </button>
      <LabelRegular className='flex items-center'>
        <Link href='/kids'>Kids</Link>
      </LabelRegular>
      <button>
        <LabelRegular>Notification menu</LabelRegular>
      </button>
      <button>
        <LabelRegular>Account menu</LabelRegular>
      </button>
    </div>
  );
};

export default SecondaryNavigation;
