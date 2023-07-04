import type { NextAuthOptions } from "next-auth"
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ACCESS as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ACCESS as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
  ],
} 