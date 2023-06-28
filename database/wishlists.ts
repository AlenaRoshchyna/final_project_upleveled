import { cache } from 'react';
import { Wishlist } from '../migrations/1687869188-createTableWishlist';
import { sql } from './connect';

export type WishlistSubmit = {
  id: number;
  userId: number;
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

export const getWishlistByUserIdAndSessionToken = cache(
  async (userId: number) => {
    const wishlist = await sql<Wishlist[]>`
     SELECT
      wishlists.*,
      artworks.*,
      users.username
    FROM
      wishlists

    INNER JOIN
      artworks ON (
      wishlists.artwork_id = artworks.id
      )
    INNER JOIN
    users ON (
     users.id = ${userId}
     )
    `;

    return wishlist;
  },
);

// -- INNER JOIN
// --   sessions ON (
// --     sessions.token = ${token} AND
// --     sessions.expiry_timestamp > now()
// --   )
