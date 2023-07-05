import './globals.css';
import { Alegreya, Almendra } from 'next/font/google';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getUserBySessionToken } from '../database/users';
import logo from '../public/logo.png';
import { LogoutButton } from './components/LogoutButton';
import styles from './layout.module.scss';

const almendra = Almendra({ weight: ['400', '700'], subsets: ['latin'] });
const alegreya = Alegreya({
  weight: ['400', '700', '500', '600', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Wada-Art',
  description: 'World of Wada artist',
};

type Props = {
  children: import('react').ReactNode;
};

export default async function RootLayout({ children }: Props) {
  // 1. get the session token from the cookie
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/about">
                <Image src={logo} width={94} height={65} alt="logo" />
              </Link>
            </div>

            <ul className={almendra.className}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/artworks">Gallery</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>

            {user ? (
              <>
                <div className={styles.username}>
                  <span className={alegreya.className}>{user.username}</span>
                </div>
                <LogoutButton />
              </>
            ) : (
              <ul className={almendra.className}>
                <li>
                  <Link href="/register">Register</Link>
                </li>
                <li>
                  <Link href="/login">Log in</Link>
                </li>
              </ul>
            )}
          </nav>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <ul className={almendra.className}>
            <li>
              <Link href="/about">About me</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
