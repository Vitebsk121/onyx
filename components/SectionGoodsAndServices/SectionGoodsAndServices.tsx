import styles from  "./SectionGoodsAndServices.module.scss";
import Slider from "../Slider/Slider";
import Image from "next/image";
import Link from "next/link";
import {useRef} from "react";
import goodsList from "../../data/goodsList";
import servicesList from "../../data/servicesList";

const SectionGoodsAndServices = () => {
  const node = useRef(null);
  const nodeSecond = useRef(null);
  return (
    <div className={styles.goodsAndServices}>
      <h3 className={styles.title}>товары</h3>
      <Slider childrenRef={node} infinityScroll={true}>
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
      <h3 className={styles.title}>услуги</h3>
      <div className={styles.servicesSlider}>
        <Slider childrenRef={nodeSecond} infinityScroll={true}>
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
