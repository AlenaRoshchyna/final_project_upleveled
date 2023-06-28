import { cookies } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArtworkById } from '../../../database/artworks';
import { getUserBySessionToken } from '../../../database/users';
import WishlistButton from '../../components/WishlistButton';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Explore Wada-Art',
  description: 'Wada-Art',
};

type Props = {
  params: {
    artworkId: string;
  };
};

export default async function ArtworkPage(props: Props) {
  const singleArtwork = await getArtworkById(Number(props.params.artworkId)); // Convert the string into a number

  if (!singleArtwork) {
    notFound();
  }

  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session
  const user =
    sessionTokenCookie &&
    (await getUserBySessionToken(sessionTokenCookie.value));
  console.log('user', user);

  return (
    <main className={styles.productPage}>
      <Image
        src={singleArtwork.url}
        alt="picture"
        width={0}
        sizes="100vw"
        height={0}
        style={{ width: '25%', height: 'auto' }}
      />
      <WishlistButton userId={user?.id} artworkId={singleArtwork.id} />

      <div>
        <p>Name: {singleArtwork.name}</p>
        <p>Description: {singleArtwork.description}</p>
        <p>Category: {singleArtwork.category}</p>
      </div>
    </main>
  );
}
