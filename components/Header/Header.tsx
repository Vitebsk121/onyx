import styles from "./Header.module.scss"

import React from "react";
import Link from "next/link";
import OnyxLogo from "../OnyxLogo/OnyxLogo";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Link href={'https://nextjs.org/docs/basic-features/image-optimization'}>
        <a>
          <OnyxLogo fill={"white"}/>
        </a>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href=""><a>Главная</a></Link>
          </li>
          <li className={styles.navItem}>
            <Link href=""><a>Товары и услуги</a></Link>
          </li>
          <li className={styles.navItem}>
            <Link href=""><a>Портфолио</a></Link>
          </li>
          <li className={styles.navItem}>
            <Link href=""><a>Контакты</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
