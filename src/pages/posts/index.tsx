import { GetStaticProps } from 'next';
import Head from 'next/head';
import * as Prismic from '@prismicio/client'

import { getPrismicClient } from '@service/prismic';

import styles from './styles.module.scss'

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de agosto de 2022</time>
            <strong>Titulo do post</strong>
            <p>Conteúdo do post ficará aqui ...</p>
          </a>

          <a href="#">
            <time>12 de agosto de 2022</time>
            <strong>Titulo do post</strong>
            <p>Conteúdo do post ficará aqui ...</p>
          </a>

          <a href="#">
            <time>12 de agosto de 2022</time>
            <strong>Titulo do post</strong>
            <p>Conteúdo do post ficará aqui ...</p>
          </a>
        </div>
      </main>
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response)

  return  {
    props: {}
  }
}
