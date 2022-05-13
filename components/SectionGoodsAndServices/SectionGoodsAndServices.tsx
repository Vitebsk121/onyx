import styles from  "./SectionGoodsAndServices.module.scss";
import Image from "next/image";
import Link from "next/link";
import {useRef} from "react";
import goodsList from "../../data/goodsList";
import servicesList from "../../data/servicesList";
import Slider from "../Slider/Slider";

const SectionGoodsAndServices = () => {
  const node = useRef(null);
  const nodeSecond = useRef(null);
  return (
    <div className={styles.goodsAndServices}>
      <h2 className={styles.title}>товары</h2>
      <Slider countOfVisibleElements={4} infinity={true} arrowPosition={{top: '50%', margin: '130px'}} shadow={true}>
        {goodsList.map(({image, title}, index) => {
          if(index === 0) {
            return (
              <div key={title + index} ref={node} className={styles.slide}>
                <Image src={image} layout={"fill"} objectFit={"cover"} alt={"товар"}/>
                <Link href="/">
                  <a className={styles.slideLink}>{title}</a>
                </Link>
              </div>
            )
          } else {
            return (
              <div key={title + index} className={styles.slide}>
                <Image src={image} layout={"fill"} objectFit={"cover"} alt={"товар"}/>
                <Link href="/">
                  <a className={styles.slideLink}>{title}</a>
                </Link>
              </div>
            )
          }
        })}
      </Slider>
      <h2 className={styles.title}>услуги</h2>
      <div className={styles.servicesSlider}>
        <Slider countOfVisibleElements={3} infinity={true} arrowPosition={{top: '50%', margin: '-50px'}}>
          {servicesList.map(({image, title}, index) => {
            if(index === 0) {
              return (
                <div key={title + index} ref={nodeSecond} className={styles.serviceSlide}>
                  <Image src={image} layout={"fill"} objectFit={"cover"} alt={"услуга"}/>
                  <Link href="/">
                    <a className={styles.slideLink}>{title}</a>
                  </Link>
                </div>
              )
            } else {
              return (
                <div key={title + index} className={styles.serviceSlide}>
                  <Image src={image} layout={"fill"} objectFit={"cover"} alt={"услуга"}/>
                  <Link href="/">
                    <a className={styles.slideLink}>{title}</a>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SectionGoodsAndServices;
