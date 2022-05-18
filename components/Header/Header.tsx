import styles from './Header.module.scss';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import OnyxLogo from '../OnyxLogo/OnyxLogo';
import BurgerMenu from '../UI/BurgerMenu/BurgerMenu';
import Drawer from '../UI/Drawer/Drawer';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [logoColor, setLogoColor] = useState('white');
  const [headerStyle, setHeaderStyle] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const changeTheme = () => {
      if (window.scrollY > 50) {
        setLogoColor('black');
        setHeaderStyle(styles.white);
      } else {
        setLogoColor('white');
        setHeaderStyle('');
      }
    };

    changeTheme();

    window.addEventListener('scroll', changeTheme);

    return () => {
      window.removeEventListener('scroll', changeTheme);
    };
  }, []);

  return (
    <header className={styles.header + ' ' + headerStyle}>
      <Link href={'/'}>
        <a>
          <OnyxLogo fill={logoColor} />
        </a>
      </Link>
      <BurgerMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Главная</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#goodsAndServices" scroll={false}>
              <a>Товары и услуги</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#projects" scroll={false}>
              <a>Портфолио</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#contacts" scroll={false}>
              <a>Контакты</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Drawer menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </header>
  );
};

export default Header;
