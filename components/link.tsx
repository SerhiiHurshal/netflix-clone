import NextLink from 'next/link';
import { FC } from 'react';

type LinkProps = React.ComponentProps<typeof NextLink>;

const Link: FC<LinkProps> = ({ children, href }) => {
  return (
    <NextLink href={href} className='flex items-center'>
      {children}
    </NextLink>
  );
};

export default Link;
