/* eslint-disable @next/next/no-img-element */
import { SignInButton } from '../SignInButton';
import Link from 'next/link';

import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export function Header(){
  const { asPath } = useRouter();

  return (
   <header className={styles.headerContainer}>
     <div className={styles.headerContent}>
       <img src="/images/logo.svg" alt="logo react news" />

       <nav>
         <Link  href="/">
          <a className={asPath === '/' ? styles.active : ''}>Home</a>
         </Link>
         <Link href="/posts" prefetch>
          <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>
         </Link>
       </nav>

       <SignInButton />
     </div>
   </header>
  );
}