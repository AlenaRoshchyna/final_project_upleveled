import { Alegreya } from 'next/font/google';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserBySessionToken, getUserByUsername } from '../../database/users';
import { getWishlistByUser } from '../../database/wishlists';
import styles from './MyWishlist.module.scss';
import MyWishlists from './MyWishlists';

const alegreya = Alegreya({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Your wishlist',
  description: 'Favourite Wada artworks',
};

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

  console.log('WishLists: ', wishlists);

  return (
    <>
      <h1 className={`${styles.h1} ${alegreya.className}`}>
        {user.username.charAt(0).toUpperCase() + user.username.slice(1)}'s
        favourite artworks
      </h1>
      <section>
        {wishlists.length === 0 ? (
          <p className={`${styles.empty} ${alegreya.className}`}>
            ꧁ Wishlist is empty ꧂
          </p>
        ) : (
          <MyWishlists wishlists={wishlists} />
        )}
      </section>
    </>
  );
}
