/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | react.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋⚛️ Olá seja bem vindo</span>
          <h1>Noticias sobre o mundo do <span>React</span>.</h1>
          <p>
            Tenha acesso a todo o conteúdo da plataforma <span> por R$9,99 mensais</span>.
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/react.svg" alt="react" />
      </main>
    </>
  )
}
