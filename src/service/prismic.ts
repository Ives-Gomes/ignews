import * as Prismic from '@prismicio/client'

export function getPrismicClient() {
  const prismic = Prismic.createClient(
    Prismic.getRepositoryName(process.env.PRISMIC_ENDPOINT as string),
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
  )

  return prismic;
}
