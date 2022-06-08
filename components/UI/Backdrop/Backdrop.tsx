import styles from './Backdrop.module.scss';

import React from 'react';

type BackdropProps = {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Backdrop: React.FC<BackdropProps> = ({ menuIsOpen, setMenuIsOpen }: BackdropProps) => {
  return (
    <div
      role="none"
      className={styles.backdrop + ' ' + (menuIsOpen ? styles.open : '')}
      onClick={() => setMenuIsOpen(false)}
    />
  );
};

export default Backdrop;
