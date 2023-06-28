import { Sql } from 'postgres';

export type Wishlist = {
  id: number;
  userId: number;
  artworkId: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE wishlists (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id integer NOT NULL REFERENCES users (id),
      artwork_id integer NOT NULL REFERENCES artworks (id)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE wishlists
  `;
}
