import styles from './Product.module.scss';
import React, {useEffect, useState} from 'react';
import MainLayout from '../../HOC/MainLayout';
import goodsList, { IGoods } from '../../data/goodsList';
import Image from 'next/image';
import Slider from '../../components/Slider/Slider';

type Tfunc = {
  product: IGoods;
};

const defaultSliderSettings = {
  countVisibleSlides: 3,
  arrowPosition: { top: '15%', margin: '-30px' },
}

export default function Product({ product }: Tfunc) {
  const [sliderSettings, setSliderSettings] = useState(defaultSliderSettings);

  useEffect(() => {
    const changeSLiderProp = () => {
      if (document.documentElement.clientWidth <= 650) {
        setSliderSettings({
          countVisibleSlides: 1,
          arrowPosition: { top: '10%', margin: '-15px' },
        })
      } else {
        setSliderSettings(defaultSliderSettings)
      }
    }
    addEventListener('resize', changeSLiderProp);
    changeSLiderProp();
    return () => removeEventListener('resize', changeSLiderProp);
  }, [])

  return (
    <MainLayout title={product.title}>
      <div className={styles.productPage}>
        <section className={styles.sectionPromo}>
          <div className={styles.sectionBackground}>
            <Image src={product.image} layout={'fill'} objectFit={'cover'} alt={product.title} />
          </div>
          <h1 className={styles.productPage_title}>{product.title}</h1>
        </section>
        <section className={styles.sectionContent}>
          {product.description &&
            product.description.map((descr) => (
              <p key={descr} className={styles.content_description}>
                {descr}
              </p>
            ))}
          {product.categories ? (
            <>
              <h4 className={styles.content_title}>{product.categories.title}</h4>
              <ul className={styles.contentCategoriesList}>
                {product.categories.categor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
          {product.content.title && (
            <h4 className={styles.content_title}>{product.content.title}</h4>
          )}
          {product.content.subtitles &&
            product.content.subtitles.map((item) => (
              <p key={item} className={styles.content_description}>
                {item}
              </p>
            ))}
          {product.slider && (
            <div className={styles.slider_wrapper}>
              <Slider
                countOfVisibleElements={sliderSettings.countVisibleSlides}
                arrowPosition={sliderSettings.arrowPosition}
                infinity={true}
              >
                {product.slider.map(({ image, title, descriptions }) => (
                  <div key={title} className={styles.slide}>
                    <div className={styles.slidePic}>
                      <Image src={image} layout={'fill'} objectFit={'cover'} alt={title} />
                    </div>
                    <h4 className={styles.slideTitle}>{title}</h4>
                    {descriptions.map((descr) => (
                      <p key={descr} className={styles.slideDescription}>
                        {descr}
                      </p>
                    ))}
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ params }: any) {
  const product = goodsList.filter(({ name }) => name === params.name)[0];
  return {
    props: { product }, // will be passed to the page component as props
  };
}
