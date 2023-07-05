'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './MyWishlist.module.scss';

export default function MyWishlists(props: any) {
  return (
    <main className={styles.productsContainer}>
      {props.wishlists.map((wishlist: any) => {
        return (
          <div key={`wishlist-div-${wishlist.id}`}>
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

            <p>Name: {wishlist.name}</p>

            <p>Category: {wishlist.category}</p>
          </div>
        );
      })}
    </main>
  );
}
