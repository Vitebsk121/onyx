import styles from './BurgerMenu.module.scss'

import React from "react";

type BurgerMenuProps = {
  menuIsOpen: boolean,
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({menuIsOpen, setMenuIsOpen}: BurgerMenuProps) => {

  return (
    <div
      className={styles.burgerMenu + ' ' + (menuIsOpen ? styles.active : '')}
      onClick={() => setMenuIsOpen(prev => !prev)}
    >
      <div className={styles.burgerMenu_lineWrapper}>
        <div className={styles.burgerMenu_line + ' ' + styles.lineOne + ' ' + (menuIsOpen ? styles.active : '')}/>
        <div className={styles.burgerMenu_line + ' ' + styles.lineTwo + ' ' + (menuIsOpen ? styles.active : '')}/>
        <div className={styles.burgerMenu_line + ' ' + styles.lineThree + ' ' + (menuIsOpen ? styles.active : '')}/>
      </div>
    </div>
  );
};

export default BurgerMenu;
