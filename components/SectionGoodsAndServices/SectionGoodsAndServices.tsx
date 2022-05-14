import styles from "./SectionGoodsAndServices.module.scss";
import Image from "next/image";
import Link from "next/link";
import goodsList from "../../data/goodsList";
import servicesList from "../../data/servicesList";
import Slider from "../Slider/Slider";

const SectionGoodsAndServices = () => {
  return (
    <div className={styles.goodsAndServices} id={'goodsAndServices'}>
      <h2 className={styles.title}>товары</h2>
      <Slider countOfVisibleElements={4} infinity={true} arrowPosition={{top: '50%', margin: '130px'}} shadow={true}>
        {goodsList.map(({image, title, name}, index) => (
              <div key={title + index} className={styles.slide}>
                <Image src={image} layout={"fill"} objectFit={"cover"} alt={title}/>
                <Link href={`/products/${name}`}>
                  <a className={styles.slideLink}>{title}</a>
                </Link>
              </div>
        ))}
      </Slider>
      <h2 className={styles.title}>услуги</h2>
      <div className={styles.servicesSlider}>
        <Slider countOfVisibleElements={3} infinity={true} arrowPosition={{top: '50%', margin: '-50px'}}>
          {servicesList.map(({image, title, name}, index) => (
                <div key={title + index} className={styles.serviceSlide}>
                  <Image src={image} layout={"fill"} objectFit={"cover"} alt={title}/>
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
