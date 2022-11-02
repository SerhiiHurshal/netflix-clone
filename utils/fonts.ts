import { Noto_Sans } from '@next/font/google';

const notoSans = Noto_Sans({
  variable: '--noto-sans-regular',
  // weight is provided just for typescsript
  weight: '400',
  subsets: ['latin'],
});

export { notoSans };
