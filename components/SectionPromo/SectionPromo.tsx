import styles from './SectionPromo.module.scss';
import React from 'react';
import AutoCounter from '../AutoCounter/AutoCounter';

const defaultCountOfDelivery = 103820;
const defaultCountOfVolume = 1455475;
const defaultCountOfWeight = 2391108;

const SectionPromo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.curtain}>
        <h1 className={styles.title}>
          O<span>NYX</span> - драгоценное качество деятельности
        </h1>
        <h3 className={styles.subtitle}>Поставка нерудных материалов</h3>
        <div className={styles.companyInfo}>
          <div className={styles.companyInfo__item}>
            <h3 className={styles.subtitle}>
              <AutoCounter defaultCount={defaultCountOfDelivery} durationMS={2000} />
            </h3>
            <h4>
              рейсов совершила {'\n'}
              наша компания
            </h4>
          </div>
          <div className={styles.companyInfo__item}>
            <h3 className={styles.subtitle}>
              <AutoCounter defaultCount={defaultCountOfVolume} durationMS={2000} /> м<sup>3</sup>
            </h3>
            <h3 className={styles.subtitle}>
              <AutoCounter defaultCount={defaultCountOfWeight} durationMS={2000} /> т
            </h3>
            <h4>
              различных материалов перевезла {'\n'}
              наша компания
            </h4>
          </div>
        </div>
      </div>
      <video
        className={styles.videoBackground}
        poster="/images/previewTruck.jpeg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/kar.webm" />
        <source src="/kar.mp4" />
      </video>
    </section>
  );
};

export default SectionPromo;
