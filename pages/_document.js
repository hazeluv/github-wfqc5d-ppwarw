import Document, { Html, Head, Main, NextScript } from 'next/document';
//import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
//import styles from '../styles/Home.module.css';
import Modal from '../components/Modal';
import styles from './_app';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <h1 className={styles.title}></h1>

        <p className={styles.description}>
          <code className={styles.code}></code>
          <code className={styles.code}></code>
        </p>
        <div className={styles.grid}>
          <Link href="/js-form">
            <a className={styles.card}>
              <h2>Signup</h2>
            </a>
          </Link>
        </div>
        <div className={styles.grid}>
          <Link href="/no-js-form">
            <a className={styles.card}>
              <h2>Signup</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
      <Modal />
    </div>
  );
}
