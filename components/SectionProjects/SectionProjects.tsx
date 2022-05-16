import styles from './SectionProjects.module.scss';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import ProjectsLogo from '../../public/projects.svg';
import projectsList from '../../data/projectsList';
import Slider from '../Slider/Slider';
import partners from '../../data/partners';
import {useEffect, useState} from "react";


const defaultSliderSettings = {
  countVisibleSlides: 3,
  arrowPosition: { top: '40%', margin: '-30px' },
}

const SectionProjects = () => {
  const [sliderSettings, setSliderSettings] = useState(defaultSliderSettings)
  useEffect(() => {
    const changeSLiderProp = () => {
      if (document.documentElement.clientWidth <= 650) {
        setSliderSettings({
          countVisibleSlides: 1,
          arrowPosition: { top: '35%', margin: '-15px' },
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
    <div className={styles.projects} id={'projects'}>
      <Marquee speed={50} gradient={false}>
        <div className={styles.projectsLogo}>
          <Image src={ProjectsLogo} alt={'логотип проектов'} layout={'responsive'}/>
        </div>
      </Marquee>
      <div className={styles.wrapper}>
        <Slider countOfVisibleElements={sliderSettings.countVisibleSlides} arrowPosition={sliderSettings.arrowPosition}>
          {projectsList.map(({ image, title, description }) => (
            <div key={title} className={styles.slide}>
              <div className={styles.cardPic}>
                <Image src={image} alt={title} layout={'fill'} objectFit={'cover'} />
              </div>
              <h4 className={styles.cardTitle}>{title}</h4>
              <p className={styles.cardDescription}>{description}</p>
            </div>
          ))}
        </Slider>
        <h5 className={styles.projects_title}>наши партнеры</h5>
      </div>
      <Marquee speed={100} gradient={false}>
        {partners.map(({ name, image }) => (
          <div key={name} className={styles.partnersItem}>
            <Image src={image} alt={name} layout={'fill'} objectFit={'contain'} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SectionProjects;
