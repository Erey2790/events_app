import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { HomePage } from "../src/components/home/home-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img />
          <Link href="/" legacyBehavior>
          <a> Home</a>
          </Link>
          <Link href="/events" legacyBehavior>
          <a> Events</a>
          </Link>
          <Link  href="/about-us" legacyBehavior>
          <a> About Us</a>
          </Link>
        </nav>
      </header>
      <HomePage data={data}/>

      <footer className={styles.footer}>
        <p> © 2023 Time to Code - A Project with Next.JS</p>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  
  return {
    props: {
      data: events_categories,
    },
  };
}
