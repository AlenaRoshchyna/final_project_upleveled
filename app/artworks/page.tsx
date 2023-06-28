import Image from 'next/image';
import Link from 'next/link';
import { getArtworks } from '../../database/artworks';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

// export const metadata = {
//   title: 'Dreams to buy',
//   description: 'Products',
// };

export default async function ArtworksPage() {
  const artworks = await getArtworks();
  return (
    <main>
      <section className={styles.productsContainer}>
        {artworks.map((artwork) => {
          console.log(artwork);
          return (
            <div key={`artwork-div-${artwork.id}`}>
              <Link href={`/artworks/${artwork.id}`}>
                {' '}
                <Image
                  className={styles.img}
                  src={artwork.url}
                  alt="product image"
                  width={0}
                  sizes="100vw"
                  height={0}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
              <br />
              <Link href={`/artworks/${artwork.id}`}>{artwork.name}</Link>
            </div>
          );
        })}
      </section>
    </main>
  );
}
