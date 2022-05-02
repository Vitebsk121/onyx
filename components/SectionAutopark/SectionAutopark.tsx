import styles from "./SectionAutopark.module.scss"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import AutoparkLogo from "../../public/autopark.svg";
import Slider from "../Slider/Slider";
import React, { useRef } from "react";
import autoparkList from "../../data/autoparkList";


const SectionAutopark = () => {
  const slideNode = useRef<HTMLDivElement>(null);
  return (
    <section className={styles.autopark}>
      <Marquee speed={50} gradient={false}>
        <Image src={AutoparkLogo} alt={"автопарк логотип"}/>
      </Marquee>
      <div className={styles.wrapper}>
        <div className={styles.autoparkBlock}>
          <Slider childrenRef={slideNode} autoScrollTime={5000} dotScrollIsVisible={true}>
            {autoparkList.map(({image}, index) => (
              index === 0
              ? (
                  <div key={index} ref={slideNode} className={styles.slide}>
                    <Image src={image} alt="truck" layout={"fill"} objectFit={"cover"}/>
                  </div>
                )
              : (
                  <div key={index} className={styles.slide}>
                    <Image src={image} alt="truck" layout={"fill"} objectFit={"cover"}/>
                  </div>
                )
            ))}
          </Slider>
          <p>
            Собственный автопарк импортной техники, более 30-ти автомобилей марок
            MAN и DAF и Scania
          </p>
          <p>
            Cобственная ремонтная зона
          </p>
          <Slider childrenRef={slideNode} autoScrollTime={5000} autoScrollOrientation={'right'} dotScrollIsVisible={true}>
            {autoparkList.map(({image}, index) => (
              index === 0
                ? (
                  <div key={index} ref={slideNode} className={styles.slide}>
                    <Image src={image} alt="truck" layout={"fill"} objectFit={"cover"}/>
                  </div>
                )
                : (
                  <div key={index} className={styles.slide}>
                    <Image src={image} alt="truck" layout={"fill"} objectFit={"cover"}/>
                  </div>
                )
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SectionAutopark;
