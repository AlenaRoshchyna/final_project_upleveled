'use client';

import { Route } from 'next';
// import { Route } from 'next';
import { useRouter } from 'next/navigation';
import { logout } from '../(auth)/logout/actions';
import styles from './LogoutButton.module.scss';

export function LogoutButton() {
  const router = useRouter();
  return (
    <main>
      <form>
        <button
          className={styles.button}
          formAction={async () => {
            await logout();
            router.refresh();
            router.push('/' as Route);
          }}
        >
          logout
        </button>
      </form>
    </main>
  );
}
