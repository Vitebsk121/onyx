import styles from './SectionPromo.module.scss';
import React from 'react';

const SectionPromo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.curtain}>
        <h1 className={styles.title}>Onyx - драгоценное качество деятельности</h1>
        <h3 className={styles.subtitle}>Поставка нерудных материалов</h3>
      </div>
      <video
        className={styles.videoBackground}
        poster="/images/previewTruck.jpeg"
        autoPlay
        muted
        loop
      >
        <source src="/kar.mov" />
      </video>
    </section>
  );
};

export default SectionPromo;
