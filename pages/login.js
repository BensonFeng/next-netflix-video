import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Login.module.css";
const Login = () => {
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    console.log("Button working");
  };
  return (
    <div>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header>
        <div className={styles.headerWrapper}>
          <a className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128px"
                height="34px"
              />
            </div>
          </a>
        </div>

        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1 className={styles.signinHeader}>Sign In</h1>
            <input
              type="text"
              placeholder="Email address"
              className={styles.emailInput}
            />

            <p className={styles.userMsg}></p>
            <buttom onClick={handleLoginWithEmail} className={styles.loginBtn}>
              Sign In
            </buttom>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Login;
