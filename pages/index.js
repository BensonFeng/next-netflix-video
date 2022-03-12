import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";

export default function Home() {
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

      {/* <NavBar />
public\static\clifford.webp
      <Car /> */}
    </div>
  );
}
