import React from "react";
import MainLayout from "../HOC/MainLayout";
import styles from "../styles/SPromo.module.scss"

const MainPage = () => {
  return (
    <MainLayout title={'Главная'} >
      <section className={styles.promo}>
        <div className={styles.curtain}>
          <h1 className={styles.title}>ONYX - Драгоценное качество деятельности</h1>
        </div>
        <video
          className={styles.videoBackground}
          src="/kar.mov"
          autoPlay
          muted
          loop
        />
      </section>
    </MainLayout >
  );
};

export default MainPage;
