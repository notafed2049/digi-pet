import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "../../../lib/clientPromise";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // profile( profile ) {
      //   return {
      //     id: profile.sub,
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.picture,
      //     friends: [],
      //     requestsReceived: [],
      //     requestsSent: [],
      //     profileBio: '',
      //     gender: ''
      //   }
      // }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  adapter: MongoDBAdapter( clientPromise ),
  callbacks: {
    session: async ({ session, user }) => {
      return {
        ...session,
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      }
    }
  },
}
export default NextAuth(authOptions)