import styles from "./SectionPromo.module.scss"
import React from "react";

const SectionPromo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.curtain}>
        <h1 className={styles.title}>Onyx - Драгоценное качество деятельности</h1>
        <h3 className={styles.subtitle}>Поставка нерудных материалов</h3>
      </div>
      <video
        className={styles.videoBackground}
        src="/kar.mov"
        preload="auto"
        autoPlay
        muted
        loop
      />
    </section>
  );
};

export default SectionPromo;
