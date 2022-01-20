/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    productId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            Tenha acesso a todo o conteúdo da plataforma <span> por {product.amount} mensais</span>.
          </p>
          <SubscribeButton priceId={product.productId} />
        </section>

        <img src="/images/react.svg" alt="react" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KJfinFkOYXSQS2dWOkQI9aP') 

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }
  
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}