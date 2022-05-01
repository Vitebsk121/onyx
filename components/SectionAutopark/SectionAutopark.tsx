import styles from "./SectionAutopark.module.scss"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import AutoparkLogo from "../../public/autopark.svg";
import Slider from "../Slider/Slider";

const SectionAutopark = () => {
  return (
    <section className={styles.autopark}>
      <Marquee speed={50} gradient={false}>
        <Image src={AutoparkLogo}/>
      </Marquee>
      <div className={styles.wrapper}>
        <div className={styles.autoparkBlock}>
          <Slider autoScrollTime={3500}>
            <img className={styles.blockPic} src="/images/truck1.png" alt="truck"/>
            <img className={styles.blockPic} src="/images/driver1.png" alt="driver"/>
            <img className={styles.blockPic} src="/images/driver1.png" alt="driver"/>
          </Slider>
          <p>
            Собственный автопарк импортной техники, более 30-ти автомобилей марок
            MAN и DAF и Scania
          </p>
          <p>
            Cобственная ремонтная зона
          </p>
          <Slider autoScrollTime={3500} autoScrollOrientation={'right'}>
            <img className={styles.blockPic} src="/images/driver1.png" alt="driver"/>
            <img className={styles.blockPic} src="/images/driver1.png" alt="driver"/>
            <img className={styles.blockPic} src="/images/truck1.png" alt="truck"/>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SectionAutopark;
