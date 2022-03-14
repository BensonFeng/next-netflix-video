import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/Login.module.css";

import { magic } from "../lib/magic-client";

const Login = () => {
  const [userMsg, setUserMsg] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    console.log("Button working");
    if (email) {
      if (email === "bf827208@gmail.com") {
        // log in a user by their email
        try {
          setIsLoading(true);
          const didToken = await magic.auth.loginWithMagicLink({ email });
          console.log(didToken);
          if (didToken) {
            setIsLoading(false);
            router.push("/");
          }
        } catch (error) {
          // Handle errors if required!
          console.error("something went wrong logging in", error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setUserMsg("Something went wrong logging in");
      }
    } else {
      // show user message
      setIsLoading(false);
      setUserMsg("Enter a valid email address");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <header className={styles.header}>
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
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />

          <p className={styles.userMsg}>{userMsg}</p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            {isLoading ? `Loading...` : `Sign in`}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
