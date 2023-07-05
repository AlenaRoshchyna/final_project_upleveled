import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserBySessionToken, getUserByUsername } from '../../database/users';
import { getWishlistByUser } from '../../database/wishlists';
import DeleteWishlists from './DeleteWishlists';
import styles from './MyWishlist.module.scss';
import MyWishlists from './MyWishlists';

// import styles from './page.module.scss';

// export const dynamic = 'force-dynamic';

export default async function WishlistPage() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const currentUser = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  console.log('current User:', currentUser);

  // for watching your wishlist, please login
  if (!sessionToken) {
    return redirect(`/login`);
  }

  const user = await getUserByUsername(currentUser!.username);
  // console.log('logged in User:', user);

  if (!user) {
    return redirect(`/login?returnTo=/${user!.username}`);
  }

  const wishlists = await getWishlistByUser(user.id);

  // console.log('WishLists: ', wishlists);

  return (
    <>
      <h1 className={styles.h1}>
        {user.username.toUpperCase()}'s favourite artworks
      </h1>
      <section>
        {wishlists.length === 0 ? (
          <p>Wishlist is empty</p>
        ) : (
          <MyWishlists wishlists={wishlists} />
        )}
        {/* <DeleteWishlists /> */}
      </section>
    </>
  );
}
