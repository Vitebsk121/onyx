import styles from "./SectionContacts.module.scss";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import ContacrsLogo from "../../public/contects.svg";
import YMap from "../YMap/YMap";

type SectionContactsProps = {};

const SectionContacts: React.FC<SectionContactsProps> = (props: SectionContactsProps) => {
  return (
    <section className={styles.contacts} id={'contacts'}>
      <Marquee speed={50} gradient={false}>
        <Image src={ContacrsLogo} alt={"логотип контактов"}/>
      </Marquee>
      <div className={styles.contacts_contentWrapper}>
        <div className={styles.contacts_info}>
          <div className={styles.contacts_info_item}>
            <p>
              Доставка по Москве, Московской области и близлежащим регионам
            </p>
          </div>
          <div className={styles.contacts_info_item}>
            <h3 className={styles.contacts_info_title}>Контакты:</h3>
            <p className={styles.contacts_info_subtitle}>
              Адрес: г. Балашиха, ул. Станция Стройка, вл 8
            </p>
            <p className={styles.contacts_info_subtitle}>
              Телефон: +7 495 532 87 25, <br/>
              +7 925 002 05 34
            </p>
            <p className={styles.contacts_info_subtitle}>
              Почта: info@onyxnerud.ru
            </p>
          </div>
          <div className={styles.contacts_info_item}>
            <h3 className={styles.contacts_info_title}>Наша перевалка:</h3>
            <p className={styles.contacts_info_subtitle}>
              г. Москва, Зеленый проспект, 3а
            </p>
          </div>
        </div>
        <div className={styles.contacts_map}>
          <YMap />
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
