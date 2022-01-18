/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';


export function Header(){
  return (
   <header className={styles.headerContainer}>
     <div className={styles.headerContent}>
       <img src="/images/logo.svg" alt="logo react news" />

       <nav>
         <a className={styles.active}>Home</a>
         <a>Blog</a>
       </nav>

       <SignInButton />
     </div>
   </header>
  );
}