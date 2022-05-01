import styles from "./Slider.module.scss"
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import ArrowSVG from "../../public/icons/sliderArrow.svg"

type SliderProps = {
  children: React.ReactNode,
  autoScrollTime?: number,
  autoScrollOrientation?: 'left' | 'right'
};

const Slider: React.FC<SliderProps> = ( { children, autoScrollTime = 0, autoScrollOrientation = 'left'}: SliderProps) => {
  const slidesCount = React.Children.count(children);
  const sliderFrame = useRef<HTMLDivElement>(null)
  const [slidesTranslateX, setSlidesTranslateX] = useState(0);

  const frameWidth = () => {
    if (sliderFrame.current === null) return 0;
    return sliderFrame.current.offsetWidth;
  }

  const leftSlider = () => {
    setSlidesTranslateX(prevState => (
      prevState >= 0 ? -(slidesCount - 1) * frameWidth() : prevState + frameWidth()
    ));
  }
  const rightSlider = () => {
    setSlidesTranslateX(prevState => (
      Math.abs(prevState) >= (frameWidth() * (slidesCount - 1)) ? 0 : prevState - frameWidth()
    ));
  }

  useEffect(() => {
    if(!autoScrollTime) return;
    const autoScroll = setInterval(() => {
      switch (autoScrollOrientation) {
        case 'left':
          leftSlider();
          break;
        case 'right':
          rightSlider();
          break;
      }
    }, autoScrollTime)
    return () => clearInterval(autoScroll);
  }, [])

  return (
    <div className={styles.slider}>
      <button type="button" className={styles.sliderArrow + " " + styles.left} onClick={leftSlider}>
        <Image src={ArrowSVG} style={{transform: "rotate(180deg)"}} />
      </button>
      <div ref={sliderFrame} className={styles.slides} style={{transform: `translateX(${slidesTranslateX}px)`}}>
        {children}
      </div>
      <button type="button" className={styles.sliderArrow + " " + styles.right} onClick={rightSlider}>
        <Image src={ArrowSVG} />
      </button>
    </div>
  );
};

export default Slider;
