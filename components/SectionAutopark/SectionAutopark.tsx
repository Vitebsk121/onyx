import styles from './SectionAutopark.module.scss';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import AutoparkLogo from '../../public/autopark.svg';
import React from 'react';
import autoparkList from '../../data/autoparkList';
import Slider from '../Slider/Slider';

const SectionAutopark = () => {
  return (
    <section className={styles.autopark}>
      <Marquee speed={50} gradient={false}>
        <div className={styles.autoparkLogo}>
          <Image src={AutoparkLogo} alt={'автопарк логотип'} layout={'responsive'} />
        </div>
      </Marquee>
      <div className={styles.wrapper}>
        <div className={styles.autoparkBlock}>
          <Slider
            countOfVisibleElements={1}
            infinity={true}
            indicators={true}
            autoScroll={{ time: 3000, orientation: 'right' }}
            arrows={false}
          >
            {autoparkList.map(({ image }, index) => (
              <div key={index} className={styles.slide}>
                <Image src={image} alt="truck" layout={'fill'} objectFit={'cover'} />
              </div>
            ))}
          </Slider>
          <h4>
            Собственный автопарк импортной техники, более 30-ти автомобилей марок MAN и DAF и Scania
          </h4>
          <h4>Cобственная ремонтная зона</h4>
          <Slider
            countOfVisibleElements={1}
            infinity={true}
            indicators={true}
            autoScroll={{ time: 3000, orientation: 'left' }}
            arrows={false}
          >
            {autoparkList.map(({ image }, index) => (
              <div key={index} className={styles.slide}>
                <Image src={image} alt="truck" layout={'fill'} objectFit={'cover'} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SectionAutopark;
