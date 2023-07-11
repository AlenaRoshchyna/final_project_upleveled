import { Alegreya } from 'next/font/google';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArtworkById } from '../../../database/artworks';
import { getUserBySessionToken } from '../../../database/users';
import LikeButton from '../../components/LikeButton';
import WishlistButton from '../../components/WishlistButton';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Explore Wada-Art',
  description: 'Wada-Art',
};

const alegreya = Alegreya({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

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
      <div className={styles.productContainer}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={singleArtwork.url}
            alt="picture"
            width={0}
            sizes="100vw"
            height={0}
            style={{ width: '80%', height: 'auto' }}
          />
        </div>

        <div className={`${styles.infoContainer} ${alegreya.className}`}>
          <div className={styles.nameDescription}>
            <div>
              <h1 className={styles.h1}>{singleArtwork.name}</h1> <LikeButton />
            </div>
            <p className={styles.p}>{singleArtwork.description}</p>
          </div>

          <div className={styles.categoryButton}>
            <WishlistButton userId={user?.id} artworkId={singleArtwork.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
