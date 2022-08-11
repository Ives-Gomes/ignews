import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

import { query as q } from 'faunadb'

import { fauna } from '@service/fauna'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          scope: 'read:user, user:email',
        },
      },
    }),
  ],
  callbacks: {
   async signIn({ user, account, profile }) {
    const { email } = user

    try {
      await fauna.query(
        q.Create(
          q.Collection('users'),
          { data: { email }},
        )
      )

      return true
    } catch (err) {
      console.log(err)

      return false
    }
   },
  },
})
