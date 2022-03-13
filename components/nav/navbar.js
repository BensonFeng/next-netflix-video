import { useState } from "react";
import styles from "./navbar.module.css";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const NavBar = (props) => {
  const router = useRouter();

  const [showDropDown, setshowDropDown] = useState(false);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropDown = (e) => {
    e.preventDefault();
    setshowDropDown(!showDropDown);
  };

  const { username } = props;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropDown}>
              <p className={styles.username}>{username}</p>
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              />
            </button>

            {showDropDown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/about">
                    <a className={styles.linkName}>Sign Out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
