'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Wishlist } from '../../migrations/1687869188-createTableWishlist';

type Props = {
  wishlist: Wishlist;
};

export default function DeleteWishlists(props: Props) {
  const [error, setError] = useState();
  const router = useRouter();

  return (
    <>
      <button
        onClick={async () => {
          const response = await fetch(`/api/wishlists/${props.wishlist.id}`, {
            method: 'DELETE',
          });

          const data = await response.json();

          if (data.error) {
            setError(data.error);
            return;
          }

          router.refresh();
        }}
      >
        Delete
      </button>
      <div>{error}</div>
    </>
  );
}
