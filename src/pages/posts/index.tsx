import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | react.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2020</time>
            <strong>Axios - um cliente HTTP Full Stack</strong>
            <p>Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.</p>
          </a>
          <a href="#">
            <time>12 de março de 2020</time>
            <strong>Axios - um cliente HTTP Full Stack</strong>
            <p>Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.</p>
          </a>
          <a href="#">
            <time>12 de março de 2020</time>
            <strong>Axios - um cliente HTTP Full Stack</strong>
            <p>Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.</p>
          </a>
          <a href="#">
            <time>12 de março de 2020</time>
            <strong>Axios - um cliente HTTP Full Stack</strong>
            <p>Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.</p>
          </a>
          <a href="#">
            <time>12 de março de 2020</time>
            <strong>Axios - um cliente HTTP Full Stack</strong>
            <p>Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.</p>
          </a>
          <a href="#">
            <time>12 de março de 2020</time>
            <strong>Axios - um cliente HTTP Full Stack</strong>
            <p>Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.</p>
          </a>
        </div>
      </main>
    </>
  );
}