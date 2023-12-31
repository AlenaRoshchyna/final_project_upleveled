import { cache } from 'react';
import { User } from '../migrations/1687193322-createUsers';
import { sql } from './connect';

type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const getUsers = cache(async () => {
  const users = await sql<UserWithPasswordHash[]>`
  SELECT
    *
  FROM
    users
  `;
  return users;
});

export const getUserWithPasswordHashByUsername = cache(
  async (username: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
    SELECT * FROM
      users
    WHERE
      users.username = ${username.toLowerCase()}
 `;

    return user;
  },
);

export const getUserByUsername = cache(async (username: string) => {
  console.log('database', username);
  const [user] = await sql<User[]>`
    SELECT
      id,
      username,
      email
    FROM
      users
    WHERE
      users.username = ${username.toLowerCase()}
 `;

  return user;
});

export const createUser = cache(
  async (username: string, passwordHash: string, email: string) => {
    console.log(passwordHash);

    const [user] = await sql<User[]>`
    INSERT INTO users
      (username, password_hash, email)
    VALUES
      (${username.toLowerCase()}, ${passwordHash}, ${email})
    RETURNING
      id,
      username,
      email
 `;

    return user;
  },
);

export const getUserById = cache(async (id: number) => {
  const [user] = await sql<UserWithPasswordHash[]>`
    SELECT
      *
    FROM
      users
    WHERE
      id = ${id}
  `;
  return user;
});

export const getUserBySessionToken = cache(async (token: string) => {
  const [user] = await sql<User[]>`
  SELECT
    users.id,
    users.username
  FROM
    users
  INNER JOIN
    sessions ON (
      sessions.token = ${token} AND
      sessions.user_id = users.id AND
      sessions.expiry_timestamp > now()
    )
  `;

  return user;
});
