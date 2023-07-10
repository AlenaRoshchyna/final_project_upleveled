'use client';

import { Alegreya } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import DeleteWishlists from './DeleteWishlists';
// import DeleteWishlists from './DeleteWishlists';
import styles from './MyWishlist.module.scss';

const alegreya = Alegreya({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function MyWishlists(props: any) {
  return (
    <main className={styles.productsContainer}>
      {props.wishlists.map((wishlist: any) => {
        return (
          <div
            className={alegreya.className}
            key={`wishlist-div-${wishlist.id}`}
          >
            <div className={styles.imgContainer}>
              <Link href={`/artworks/${wishlist.id}`}>
                <Image
                  className={styles.img}
                  src={wishlist.url}
                  alt="product image"
                  width={0}
                  sizes="100vw"
                  height={0}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
              <DeleteWishlists wishlists={wishlist.wishlist} />
            </div>

            <div className={styles.infoContainer}>
              <div className={styles.title}>Name:</div>{' '}
              <div className={styles.content}>{wishlist.name}</div>
            </div>

            <div className={styles.infoContainer}>
              <div className={styles.title}>Category:</div>{' '}
              <div className={styles.content}>{wishlist.category}</div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
