import { cache } from 'react';
import { Artwork } from '../migrations/1687436432-createTableArtworks';
import { sql } from './connect';

export const getArtworks = cache(async () => {
  const artworks = await sql<Artwork[]>`
    SELECT * FROM artworks
 `;
  return artworks;
});

export const getArtworkById = cache(async (id: number) => {
  const [artwork] = await sql<Artwork[]>`
    SELECT
      *
    FROM
    artworks
    WHERE
      id = ${id}
  `;
  return artwork;
});
