import 'tailwindcss/tailwind.css';
import { workSans } from 'utils/fonts';
import Header from 'components/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={workSans.variable}>
      <body className='min-h-screen bg-zinc-900'>
        <Header />
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}

