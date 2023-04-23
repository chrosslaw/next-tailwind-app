import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Footer from "./footer/Footer";

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
          <Link href="https://chrosslaw.com" className={styles.card}>
            <h2 className={inter.className}>
              Portfolio <span>-&gt;</span>
            </h2>
            <p className={inter.className}></p>
          </Link>
          <Link href="https://blog.chrosstech.com" className={styles.card}>
            <h2 className={inter.className}>
              Blog <span>-&gt;</span>
            </h2>
            <p className={inter.className}></p>
          </Link>
        </div>

        <Footer />
      </main>
    </>
  );
}
