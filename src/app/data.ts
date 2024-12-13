import { db } from "@vercel/postgres";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const fetchUsers = async () => {
  const client = await db.connect();
  const data = await client.sql<User>`SELECT * FROM users`;
  return data.rows;
};

export const fetchUserById = async (id: string) => {
  const client = await db.connect();
  const data = await client.sql<User>`SELECT * FROM users
    WHERE id=${id}`;

  return data.rows[0];
};
