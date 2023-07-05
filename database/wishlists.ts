import { cache } from 'react';
import { Wishlist } from '../migrations/1687869188-createTableWishlist';
import { sql } from './connect';

export type WishlistSubmit = {
  id: number;
  userId: number;
  artworkId: number;
};

export type WishlistByUser = {
  wishlistId: number;
  name: string;
  description: string;
  category: string;
  url: string;
  userId: number;
  username: string;
  id: number;
  artworkId: number;
};

export const getWishlists = cache(async () => {
  const wishlists = await sql<Wishlist[]>`
    SELECT * FROM wishlists
 `;
  return wishlists;
});

export const getWishlistById = cache(async (id: number) => {
  const [wishlist] = await sql<Wishlist[]>`
    SELECT
      *
    FROM
    wishlists
    WHERE
      id = ${id}
  `;
  return wishlist;
});

export const submitWishlist = cache(
  async (userId: number, artworkId: number) => {
    const [wishlist] = await sql<WishlistSubmit[]>`
    INSERT INTO wishlists
      (user_id, artwork_id)
    VALUES
      (${userId}, ${artworkId})
    RETURNING
    id,
    user_id,
    artwork_id
 `;

    return wishlist;
  },
);

export const getWishlistByUser = cache(async (userId: number) => {
  console.log('database', userId);
  const wishlistWithUser = await sql<WishlistByUser[]>`
     SELECT
      wishlists.id,
      artworks.id,
      artworks.name,
      artworks.description,
      artworks.category,
      artworks.url,
      users.username
    FROM
      wishlists

    INNER JOIN
      artworks ON (
      wishlists.artwork_id = artworks.id
  )
    INNER JOIN
      users ON (
      users.id = ${userId} AND
      wishlists.user_id = users.id)

    `;

  return wishlistWithUser;
});
