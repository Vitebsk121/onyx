import styles from "./Slider.module.scss"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import ArrowSVG from "../../public/icons/sliderArrow.svg"

type SliderProps = {
  children: React.ReactNode,
  autoScrollTime?: number,
  autoScrollOrientation?: 'left' | 'right',
  childrenRef: React.RefObject<HTMLDivElement>,
  infinityScroll?: boolean,
  dotScrollIsVisible?: boolean,
  shadow?: boolean,
  controls?: boolean,
};

const Slider: React.FC<SliderProps> = ( {
                                          children,
                                          autoScrollTime = 0,
                                          autoScrollOrientation = 'left',
                                          childrenRef,
                                          infinityScroll = false,
                                          dotScrollIsVisible = false,
                                          shadow = false,
                                          controls = true,
}: SliderProps) => {
  const arrOfSlides = React.Children.toArray(children);
  const slidesCount = React.Children.count(children);
  const [slidesTranslateX, setSlidesTranslateX] = useState(0);
  const [pickedSlideIndex, setPickedSlideIndex] = useState(0);

  const frameWidth = () => {
    if (childrenRef.current === null) return 0;
    return childrenRef.current.offsetWidth;
  }

  const leftSlider = () => {
    if (infinityScroll) {
      setSlidesTranslateX(prevState => (
        prevState >= 0 ? -(slidesCount * 2) * frameWidth() : prevState + frameWidth()
      ));
    } else {
      setSlidesTranslateX(prevState => (
        prevState >= 0 ? -(slidesCount - 1) * frameWidth() : prevState + frameWidth()
      ));
    }
  }
  const rightSlider = () => {
    if (infinityScroll) {
      setSlidesTranslateX(prevState => (
        Math.abs(prevState) >= (frameWidth() * (slidesCount * 4)) ? -slidesCount * 2 * frameWidth() : prevState - frameWidth()
      ));
    } else {
      setSlidesTranslateX(prevState => (
        Math.abs(prevState) >= (frameWidth() * (slidesCount - 1)) ? 0 : prevState - frameWidth()
      ));
    }
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

  useEffect(() => {
    if (infinityScroll) setSlidesTranslateX(-slidesCount * 2 * frameWidth());
  }, [])

  useEffect(() => {
    const resetSliderSize = () => {
      setSlidesTranslateX(0)
    }
    addEventListener("resize", resetSliderSize)
    return () => removeEventListener("resize", resetSliderSize)
  }, [])


  return (
    <div className={styles.slider}>
      {shadow
        ? (
          <div
            style={{width: `${frameWidth()}px`}}
            className={styles.sliderShadow + ' ' + styles.shadowLeft}
            onClick={leftSlider}
          />
        )
        : null
      }
      {controls
        ? (
          <button
            type="button"
            className={styles.sliderArrow + " " + styles.left}
            onClick={leftSlider}
          >
            <Image src={ArrowSVG} style={{transform: "rotate(180deg)"}} alt="Прокрутка влево" />
          </button>
        )
        : null
      }
      <div className={styles.slides} style={{transform: `translateX(${slidesTranslateX}px)`}}>
        {infinityScroll
          ? (
            <>
              <div className={styles.infiniteSlidesGroup}>{children}</div>
              <div className={styles.infiniteSlidesGroup}>{children}</div>
              <div className={styles.infiniteSlidesGroup}>{children}</div>
              <div className={styles.infiniteSlidesGroup}>{children}</div>
              <div className={styles.infiniteSlidesGroup}>{children}</div>
            </>
          )
          : children
        }
      </div>
      {controls
        ? (
          <button
            type="button"
            className={styles.sliderArrow + " " + styles.right}
            onClick={rightSlider}
          >
            <Image src={ArrowSVG} alt="Прокрутка вправо" />
          </button>
        )
        : null
      }
      {shadow
        ? (
          <div
            className={styles.sliderShadow + ' ' + styles.shadowRight}
            style={{width: `${frameWidth()}px`}}
            onClick={rightSlider}
          />
        )
        : null
      }
      {dotScrollIsVisible
        ? (
          <div className={styles.scroll}>
            {arrOfSlides.map((child, index) => {
              const cls = [styles.scrollPoint]
              if (index === pickedSlideIndex) cls.push(styles.active);
              return <button key={index} type="button" className={cls.join(' ')} onClick={() => pickSlide(index)} />
            })}
          </div>
        )
        : null
      }
    </div>
  );
};

export default Slider;
