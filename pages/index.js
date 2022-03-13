import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";
import Card from "../components/card/card";
import SectionCard from "../components/card/section-cards";

import { getVideos } from "../lib/videos";

export async function getServerSideProps(context) {
  const disneyVideos = getVideos();
  return {
    props: { disneyVideos }, // will be passed to the page component as props
  };
}

export default function Home({ disneyVideos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="test@gmail.com" />
      <Banner
        title="Clifford the Big Red Dog"
        subTitle="big red dog"
        imgUrl="/static/clifford.webp"
      />
      <div className={styles.sectionWrapper}>
        <SectionCard title="Disney" videos={disneyVideos} size="large" />
        <SectionCard title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </div>
  );
}
