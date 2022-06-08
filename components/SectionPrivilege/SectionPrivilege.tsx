import styles from './SectionPrivilege.module.scss';
import privilegeList from '../../data/privilegeList';
import Image from 'next/image';
import LinePic from '../../public/icons/line.svg';
import React from 'react';

const SectionPrivilege = () => {
  return (
    <section className={styles.privilege}>
      <ul className={styles.privilegeList}>
        {privilegeList.map(({ icon, title }) => (
          <li key={title} className={styles.listItem}>
            <div className={styles.listItemWrapper}>
              <div className={styles.itemIcon}>
                <Image src={icon} alt={title} />
              </div>
              <div className={styles.itemLine}>
                <Image src={LinePic} alt="line" />
              </div>
              <p>{title}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionPrivilege;
