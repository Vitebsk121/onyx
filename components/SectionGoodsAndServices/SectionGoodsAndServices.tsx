import styles from './SectionGoodsAndServices.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import goodsList from '../../data/goodsList';
import servicesList from '../../data/servicesList';
import Slider from '../Slider/Slider';
import {useEffect, useState} from "react";

const defaultViewportSettings = {
  viewport: {
    width: '100%',
    overflow: 'hidden',
  },
  slider: {
    overflow: 'visible',
  },
}

const SectionGoodsAndServices = () => {
  const [adaptiveSliderSettings, setAdaptiveSliderSettings] = useState({
    countVisibleSlidesInGoods: 4,
    countVisibleSlidesInServices: 3,
    arrowIsVisible: true,
    shadowIsVisible: true,
    viewportSettings: defaultViewportSettings,
  })

  useEffect(() => {
    const changeSLiderProp = () => {
      if (document.documentElement.clientWidth <= 650) {
        setAdaptiveSliderSettings({
          countVisibleSlidesInGoods: 1,
          countVisibleSlidesInServices: 1,
          arrowIsVisible: false,
          shadowIsVisible: false,
          viewportSettings: {
            viewport: {
              width: '50%',
              overflow: 'visible',
            },
            slider: {
              overflow: 'hidden',
            },
          }
        })
      } else {
        setAdaptiveSliderSettings({
          countVisibleSlidesInGoods: 4,
          countVisibleSlidesInServices: 3,
          arrowIsVisible: true,
          shadowIsVisible: true,
          viewportSettings: defaultViewportSettings,
        })
      }
    }
    addEventListener('resize', changeSLiderProp);
    changeSLiderProp();
    return () => removeEventListener('resize', changeSLiderProp);
  }, [])
  return (
    <div className={styles.goodsAndServices} id={'goodsAndServices'}>
      <h2 className={styles.title}>товары</h2>
      <div className={styles.sliderGoods_wrapper}>
        <Slider
          countOfVisibleElements={adaptiveSliderSettings.countVisibleSlidesInGoods}
          infinity={true}
          arrowPosition={{ top: '50%', margin: '130px' }}
          shadow={adaptiveSliderSettings.shadowIsVisible}
          arrows={adaptiveSliderSettings.arrowIsVisible}
          viewportSetting={adaptiveSliderSettings.viewportSettings}
        >
          {goodsList.map(({ image, title, name }, index) => (
            <div key={title + index} className={styles.slide}>
              <Image src={image} layout={'fill'} objectFit={'cover'} alt={title} />
              <Link href={`/products/${name}`}>
                <a className={styles.slideLink}>{title}</a>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <h2 className={styles.title}>услуги</h2>
      <div className={styles.servicesSlider}>
        <Slider
          countOfVisibleElements={adaptiveSliderSettings.countVisibleSlidesInServices}
          infinity={true}
          arrowPosition={{ top: '50%', margin: '-50px' }}
          arrows={adaptiveSliderSettings.arrowIsVisible}
          viewportSetting={adaptiveSliderSettings.viewportSettings}
        >
          {servicesList.map(({ image, title, name }, index) => (
            <div key={title + index} className={styles.serviceSlide}>
              <Image src={image} layout={'fill'} objectFit={'cover'} alt={title} />
              <Link href={`/services/${name}`}>
                <a className={styles.slideLink}>{title}</a>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionGoodsAndServices;
