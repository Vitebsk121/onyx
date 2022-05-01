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
  const arrOfSlides = React.Children.toArray(children);
  const slidesCount = React.Children.count(children);
  const sliderFrame = useRef<HTMLDivElement>(null)
  const [slidesTranslateX, setSlidesTranslateX] = useState(0);
  const [pickedSlideIndex, setPickedSlideIndex] = useState(0);

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

  const pickSlide = (index: number) => {
    setSlidesTranslateX(-index * frameWidth());
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

  useEffect(() => {
    setPickedSlideIndex(Math.round(Math.abs(slidesTranslateX / frameWidth())));
  }, [slidesTranslateX])

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
      <div className={styles.scroll}>
        {arrOfSlides.map((child, index) => {
          const cls = [styles.scrollPoint]
          if (index === pickedSlideIndex) cls.push(styles.active);
          return <button key={index} type="button" className={cls.join(' ')} onClick={() => pickSlide(index)} />
        })}
      </div>
    </div>
  );
};

export default Slider;
