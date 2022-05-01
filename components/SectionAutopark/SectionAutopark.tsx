import styles from "./SectionAutopark.module.scss"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import AutoparkLogo from "../../public/autopark.svg";

const SectionAutopark = () => {

  return (
    <section className={styles.autopark}>
      <Marquee speed={50} gradient={false}>
        <Image src={AutoparkLogo}/>
      </Marquee>
      <div className={styles.wrapper}>
        <div className={styles.autoparkBlock}>
            <div>
              <img className={styles.blockPic} src="/images/truck1.png" alt="truck"/>
            </div>
            <p>
              Собственный автопарк импортной техники, более 30-ти автомобилей марок
              MAN и DAF и Scania
            </p>
          <p>
            Cобственная ремонтная зона
          </p>
          <div>
            <img className={styles.blockPic} src="/images/driver1.png" alt="driver"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAutopark;
