'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { WishlistResponseBodyPost } from '../api/wishlists/route';
import styles from './WishlistButton.module.scss';

type Props = {
  userId: number | undefined;
  artworkId: number;
};

export default function WishlistButton({ userId, artworkId }: Props) {
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  async function createWishlist() {
    const response = await fetch('/api/wishlists', {
      method: 'POST',
      body: JSON.stringify({
        userId,
        artworkId,
      }),
    });

    const data: WishlistResponseBodyPost = await response.json();

    if ('error' in data) {
      setError(data.error);
    } else {
      setSuccessMessage('Added to wish list!');
    }
    router.refresh();
  }

  async function handleSubmit() {
    await createWishlist();
  }

  return (
    <div>
      <button className={styles.button} onClick={handleSubmit}>
        Wishlist
      </button>
      {error !== '' && <div>{error}</div>}
      {successMessage !== '' && <div>{successMessage}</div>}
    </div>
  );
}
