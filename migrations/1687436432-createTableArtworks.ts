import { Sql } from 'postgres';

export type Artwork = {
  id: number;
  name: string;
  url: string;
  description: string;
  category: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE artworks (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(50) NOT NULL,
    url varchar(500),
    description varchar(500),
    category varchar(30)
  )
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE artworks
  `;
}
