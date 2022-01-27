import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";
import Head from "next/head";

import styles from '../post.module.scss';
import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  const { data: session } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])

  return (
    <>
      <Head>
        <title>{post.title} | react.news</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            dangerouslySetInnerHTML={{
            __html:
            post.content
            }}
            className={`${styles.postContent} ${styles.previewContent}`}
          />

          <div className={styles.continueReading}>
            Continue lendo
            <Link href="/">
              <a href="">Assinar agora 🤓</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient()

  const response: any = await prismic.getByUID('post', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.slice(0, 4)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }) 
  }

  return {
    props: {
      post
    },
    redirect: 60 * 30, // 30 minute
  }
}