import Link from 'components/link';
import { LabelRegular } from './typography';

const Navigation = () => {
  return (
    <ul className='flex gap-x-3'>
      <li className='flex items-center'>
        <LabelRegular>
          <Link href='/browse'>Home</Link>
        </LabelRegular>
      </li>
      <li className='flex items-center'>
        <LabelRegular>
          <Link href='/browse/tv-shows'>TV Shows</Link>
        </LabelRegular>
      </li>
      <li className='flex items-center'>
        <LabelRegular>
          <Link href='/browse/movies'>Movies</Link>
        </LabelRegular>
      </li>
      <li className='flex items-center'>
        <LabelRegular>
          <Link href='/latest'>New & Popular</Link>
        </LabelRegular>
      </li>
      <li className='flex items-center'>
        <LabelRegular>
          <Link href='/browse/my-list'>My List</Link>
        </LabelRegular>
      </li>
      <li className='flex items-center'>
        <LabelRegular>
          <Link href='/browse/original-audio'>Browse by Languages</Link>
        </LabelRegular>
      </li>
    </ul>
  );
};

export default Navigation;
