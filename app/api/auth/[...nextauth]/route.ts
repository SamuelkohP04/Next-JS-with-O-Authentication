import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Fetch user from database
        const response = await sql`
        SELECT * FROM users WHERE email = ${credentials?.email}`;
        const user = response.rows[0];

        if (!user) {
          // If user is not found, return null
          return null;
        }

        // Compare the provided password with the hashed password in the database
        const passwordCorrect = await compare(
          credentials?.password || '',
          user.password
        );
        console.log({ passwordCorrect });

        if (passwordCorrect) {
          // If password is correct, return the user object
          return {
            id: user.id,
            email: user.email,
          };
        } else {
          // If password is incorrect, return null
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
