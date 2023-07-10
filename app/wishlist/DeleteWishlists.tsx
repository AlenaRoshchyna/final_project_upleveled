'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './MyWishlist.module.scss';

type Props = {
  wishlists: {
    userId: number;
    id: number;
  };
};

export default function DeleteWishlists(props: Props) {
  console.log(props);
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <div>
      <button
        className={styles.deleteButton}
        onClick={async () => {
          const response = await fetch(`/api/wishlists/${props.wishlists}`, {
            method: 'DELETE',
          });

          const data = await response.json();

          if (data.error) {
            setError(data.error);
            console.log(error);
            router.refresh();
            return;
          }
          router.refresh();
        }}
      >
        X
      </button>
    </div>
  );
}
// type Props = {
//   deleteId: number;
// };

// export default function DeleteWishlists(props: Props) {
//   return (
//     <button
//       onClick={async () => {
//         await deleteWishlistById(props.deleteId);
//       }}
//     >
//       Delete
//     </button>
//   );
// }
