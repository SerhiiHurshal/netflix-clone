import 'tailwindcss/tailwind.css';
import { notoSans } from 'utils/fonts';
import Header from './header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={notoSans.variable}>
      <body className='min-h-screen'>
        <Header />
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}

