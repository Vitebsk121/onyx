import styles from "./SectionPrivilege.module.scss";
import privilegeList from "../../data/privilegeList";
import React from "react";


const SectionPrivilege = () => {
  return (
    <section className={styles.privilege}>
      <ul className={styles.privilegeList}>
        {privilegeList.map(({icon, title}) => (
          <li key={title} className={styles.listItem}>
            <img className={styles.itemIcon} src={icon} alt={title}/>
            <img className={styles.itemLine} src="/icons/line.svg" alt="line"/>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionPrivilege;
