import styles from './Slider.module.scss';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ArrowSVG from '../../public/icons/sliderArrow.svg';

type NewSliderProps = {
  children: React.ReactNode;
  countOfVisibleElements: number;
  arrowPosition?: {
    top: string;
    margin: string;
  };
  indicators?: boolean;
  infinity?: boolean;
  autoScroll?: { time: number; orientation: 'left' | 'right' };
  shadow?: boolean;
};

const arrowPositionDefault = {
  top: '50%',
  margin: '15px',
};

const TRANSITION_DURATION = 600;

const Slider: React.FC<NewSliderProps> = ({
  children,
  countOfVisibleElements,
  arrowPosition = arrowPositionDefault,
  indicators = false,
  infinity = false,
  autoScroll = { time: 0, orientation: 'left' },
  shadow = false,
}: NewSliderProps) => {
  const slideNode = useRef<HTMLDivElement>(null);
  const slideBoxNode = useRef<HTMLDivElement>(null);
  const [slidesTranslateX, setSlidesTranslateX] = useState(0);
  const [slideBoxTransitionDuration, setSlideBoxTransition] = useState(TRANSITION_DURATION);
  const [pickedSlideIndex, setPickedSlideIndex] = useState(0);
  const arrOfSlides = React.Children.toArray(children);

  const slideWidth = () => {
    if (slideNode.current === null) return 0;
    return slideNode.current.offsetWidth;
  };

  const arrowStyle = (arrow: 'left' | 'right') => {
    return arrow === 'left'
      ? { top: arrowPosition.top, left: arrowPosition.margin }
      : { top: arrowPosition.top, right: arrowPosition.margin };
  };

  const prevSlide = () => {
    if (infinity) {
      setSlidesTranslateX((prevState) => prevState + slideWidth());
    } else {
      setSlidesTranslateX((prevState) => (prevState >= 0 ? 0 : prevState + slideWidth()));
    }
  };

  const nextSlide = () => {
    if (infinity) {
      setSlidesTranslateX((prevState) => prevState - slideWidth());
    } else {
      setSlidesTranslateX((prevState) =>
        Math.abs(prevState) < slideWidth() * (arrOfSlides.length - countOfVisibleElements)
          ? prevState - slideWidth()
          : prevState,
      );
    }
  };

  useEffect(() => {
    if (!infinity) return;

    const range = -(slideWidth() * arrOfSlides.length);

    if (slidesTranslateX === 0) {
      setTimeout(() => {
        setSlideBoxTransition(0);
        setSlidesTranslateX(range);
      }, TRANSITION_DURATION);
      return;
    }
    if (slidesTranslateX === range * 2) {
      setTimeout(() => {
        setSlideBoxTransition(0);
        setSlidesTranslateX(range);
      }, TRANSITION_DURATION);
      return;
    }
  }, [arrOfSlides, infinity, slidesTranslateX]);

  useEffect(() => {
    if (slideBoxTransitionDuration === 0) {
      setSlideBoxTransition(TRANSITION_DURATION);
    }
  }, [slideBoxTransitionDuration]);

  useEffect(() => {
    const picked = Math.round(Math.abs(slidesTranslateX / slideWidth()));
    if (infinity) {
      if (picked > arrOfSlides.length - 1) {
        setPickedSlideIndex(picked - arrOfSlides.length);
      } else {
        setPickedSlideIndex(picked);
      }
    } else {
      setPickedSlideIndex(picked);
    }
  }, [arrOfSlides.length, infinity, slidesTranslateX]);

  useEffect(() => {
    if (infinity) {
      const range = -(slideWidth() * arrOfSlides.length);
      setSlidesTranslateX(range);
    }
  }, [arrOfSlides.length, infinity]);

  useEffect(() => {
    if (autoScroll.time === 0) return;
    const autoScrollInterval = setInterval(() => {
      switch (autoScroll.orientation) {
        case 'left':
          prevSlide();
          break;
        case 'right':
          nextSlide();
          break;
      }
    }, autoScroll.time);
    return () => clearInterval(autoScrollInterval);
  }, [autoScroll.orientation, autoScroll.time]);

  return (
    <div className={styles.slider}>
      <button
        type="button"
        className={styles.sliderArrow}
        onClick={prevSlide}
        style={arrowStyle('left')}
      >
        <Image src={ArrowSVG} style={{ transform: 'rotate(180deg)' }} alt="Прокрутка влево" />
      </button>
      <div className={styles.viewport}>
        <div
          className={styles.slidesBox}
          style={{
            transform: `translateX(${slidesTranslateX}px)`,
            transitionDuration: `${slideBoxTransitionDuration}ms`,
          }}
          ref={slideBoxNode}
        >
          {infinity
            ? Array.prototype.concat(arrOfSlides, arrOfSlides, arrOfSlides).map((slide, index) => (
                <div
                  ref={slideNode}
                  key={index}
                  style={{ minWidth: `${100 / countOfVisibleElements}%` }}
                >
                  {slide}
                </div>
              ))
            : arrOfSlides.map((slide, index) => (
                <div
                  ref={slideNode}
                  key={index}
                  style={{ minWidth: `${100 / countOfVisibleElements}%` }}
                >
                  {slide}
                </div>
              ))}
        </div>
      </div>
      <button
        type="button"
        className={styles.sliderArrow + ' ' + styles.right}
        onClick={nextSlide}
        style={arrowStyle('right')}
      >
        <Image src={ArrowSVG} alt="Прокрутка вправо" />
      </button>
      {indicators ? (
        <div className={styles.scroll}>
          {arrOfSlides.map((child, index) => {
            const cls = [styles.scrollPoint];
            if (index === pickedSlideIndex) cls.push(styles.active);
            return <div key={index} className={cls.join(' ')} />;
          })}
        </div>
      ) : null}
      {shadow ? (
        <>
          <div
            className={[styles.shadow, styles.left].join(' ')}
            style={{ minWidth: `${100 / countOfVisibleElements}%` }}
            onClick={prevSlide}
          />
          <div
            className={[styles.shadow, styles.right].join(' ')}
            style={{ minWidth: `${100 / countOfVisibleElements}%` }}
            onClick={nextSlide}
          />
        </>
      ) : null}
    </div>
  );
};

export default Slider;
