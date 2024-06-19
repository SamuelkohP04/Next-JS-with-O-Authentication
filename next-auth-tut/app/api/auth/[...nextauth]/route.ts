import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from 'bcrypt'
import {sql} from '@vercel/postgres';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { },
        password: { },
      },
      async authorize(credentials, req) {
        //
        const response = await sql `
        SELECT * FROM users WHERE emai${credentials?.email}`;
        const user = response.rows[0];
        console.log({credentials});
        return null;
      },
    })]
});


export { handler as GET, handler as POST}