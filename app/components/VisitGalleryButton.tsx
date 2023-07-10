'use client';

import { Almendra } from 'next/font/google';
import Link from 'next/link';
import styles from './VisitGalleryButton.module.scss';

const almendra = Almendra({ weight: ['400', '700'], subsets: ['latin'] });

export default function VisitGalleryButtonon() {
  return (
    <Link
      className={`${almendra.className} ${styles.visitGalleryButton}`}
      href="/artworks"
    >
      Visit the Gallery
    </Link>
  );
}
