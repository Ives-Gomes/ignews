import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

import { ExprArg, query as q } from 'faunadb'

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
    async session({ session }) {
      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  "ref",
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user?.email as string)
                    )
                  )
                )
              ),
              q.Match(
                q.Index('subscription_by_status'),
                "active"
              )
            ])
          )
        )

        return {
          ...session,
          activeSubscription: userActiveSubscription,
        }
      } catch (err: any) {
        return {
          ...session,
          activeSubscription: null,
        }
      }
    },
    async signIn({ user, account, profile }) {
    const { email } = user

    try {
      await fauna.query(
        q.If(
          q.Not(
            q.Exists(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email as ExprArg)
              )
            )
          ),
          q.Create(
            q.Collection('users'),
            { data: { email }},
          ),
          q.Get(
            q.Match(
              q.Index('user_by_email'),
              q.Casefold(user.email as ExprArg)
            )
          )
        )
      )

      return true
    } catch (err) {
      return false
    }
   },
  },
})
