'use client';

import { Route } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';
import { getSafeReturnToPath } from '../../util/validation';
import styles from './LoginForm.module.scss';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function login() {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    const data: LoginResponseBodyPost = await response.json();

    if ('error' in data) {
      setError(data.error);
      console.log(data.error);
      return;
    }

    router.push(
      getSafeReturnToPath(props.returnTo) ||
        (`/profile/${data.user.username}` as Route),
    );
    // we may have in the future revalidatePath()
    router.refresh();
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.form}>
        <h4 className={styles.titel}>Please, login.</h4>

        <form
          onSubmit={(event) => event.preventDefault()}
          className={styles.loginForm}
        >
          <div>
            <label htmlFor="username">Username:</label>
            <input
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="username">Password:</label>
            <input
              value={password}
              type="password"
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </div>
          <button
            className={styles.loginSubmit}
            onClick={async () => await login()}
          >
            log in
          </button>
          {error !== '' && <div className={styles.error}>{error}</div>}
        </form>
      </div>
      <div className={styles.signupContainer}>
        <p>
          Don't have an account yet?
          <Link href="/register" className={styles.registerLink}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
