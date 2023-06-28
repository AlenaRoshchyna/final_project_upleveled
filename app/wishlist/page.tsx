import { cookies } from 'next/headers';
// import { notFound } from 'next/navigation';
import { getUserBySessionToken } from '../../database/users';
import { getWishlistByUserIdAndSessionToken } from '../../database/wishlists';
import styles from './page.module.scss';

type Props = {
  params: { userId: number; artworkId: number };
};

export default async function WishlistPage({ params }: Props) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  // Check the result of this console.log in your VSCode and show me
  console.log('logged in User:', user);

  const wishlists = await getWishlistByUserIdAndSessionToken(user.id);

  // Check the result of this console.log in your VSCode and show me
  console.log('WishLists: ', wishlists);

  // if (!wishlist) {
  //   notFound();
  // }

  return (
    <main className={styles.id}>
      {/* <div>id: {wishlist.id}</div>
      <div>artwork: {wishlist.userId}</div>
      <div>artwork: {wishlist.artworkId}</div> */}
    </main>
  );
}
