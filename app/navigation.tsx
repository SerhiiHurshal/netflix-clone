import Link from 'next/link';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href='/browse'>Home</Link>
      </li>
      <li>
        <Link href='/browse/tv-shows'>TV Shows</Link>
      </li>
      <li>
        <Link href='/browse/movies'>Movies</Link>
      </li>
      <li>
        <Link href='/latest'>New & Popular</Link>
      </li>
      <li>
        <Link href='/browse/my-list'>My List</Link>
      </li>
      <li>
        <Link href='/browse/original-audio'>Browse by Languages</Link>
      </li>
    </ul>
  );
};

export default Navigation;
