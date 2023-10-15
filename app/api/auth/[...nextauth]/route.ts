import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "username" },
    //     password: {  label: "Password", type: "password" }
    //   },
    //   async authorize(credentials) {
    //     if (!credentials.username || !credentials.password) return null
    //   }
    // })
  ],


}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}