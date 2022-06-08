import styles from './Drawer.module.scss';

import React from 'react';
import Link from 'next/link';

type DrawerProps = {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer: React.FC<DrawerProps> = ({ menuIsOpen, setMenuIsOpen }: DrawerProps) => {
  return (
    <div className={styles.drawer + ' ' + (menuIsOpen ? styles.active : '')}>
      <ul className={styles.navList}>
        <li className={styles.navItem} onClick={() => setMenuIsOpen((prev) => !prev)}>
          <Link href="/">
            <a>Главная</a>
          </Link>
        </li>
        <li className={styles.navItem} onClick={() => setMenuIsOpen((prev) => !prev)}>
          <Link href="/#goodsAndServices" scroll={false}>
            <a>Товары и услуги</a>
          </Link>
        </li>
        <li className={styles.navItem} onClick={() => setMenuIsOpen((prev) => !prev)}>
          <Link href="/#projects" scroll={false}>
            <a>Портфолио</a>
          </Link>
        </li>
        <li className={styles.navItem} onClick={() => setMenuIsOpen((prev) => !prev)}>
          <Link href="/#contacts" scroll={false}>
            <a>Контакты</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
