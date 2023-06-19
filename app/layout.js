import './globals.css';
import { Almendra } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';
import styles from './layout.module.scss';

const almendra = Almendra({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Wada-Art',
  description: 'World of Wada artist',
};

export default function RootLayout({ children }) {
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
                <Link href="/pictures">Gallery</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
            <ul className={almendra.className}>
              <li>
                <Link href="/register">Register</Link>
              </li>
              <li>
                <Link href="/login">Log in</Link>
              </li>
            </ul>
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
