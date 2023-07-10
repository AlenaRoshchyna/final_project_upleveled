'use client';

import { Almendra } from 'next/font/google';
import Link from 'next/link';
import styles from './ContactMeButton.module.scss';

const almendra = Almendra({ weight: ['400', '700'], subsets: ['latin'] });

export default function ContactMeButton() {
  return (
    <Link
      className={`${almendra.className} ${styles.contactMeButton}`}
      href="mailto:abc@example.com?subject = Feedback&body = Message"
    >
      Contact me
    </Link>
  );
}
