import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ChrossTech</title>
        <meta name="description" content="NextJS React environment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/C.svg"
            alt="Next.js Logo"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://blog.chrosstech.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Blog <span>-&gt;</span>
            </h2>
            <p className={inter.className}></p>
          </a>
        </div>
      </main>
    </>
  );
}
