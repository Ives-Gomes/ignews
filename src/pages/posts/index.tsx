import Head from 'next/head';

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
