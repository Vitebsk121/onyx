import styles from './SectionProjects.module.scss';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import ProjectsLogo from '../../public/projects.svg';
import projectsList from '../../data/projectsList';
import Slider from '../Slider/Slider';
import partners from '../../data/partners';

const SectionProjects = () => {
  return (
    <div className={styles.projects} id={'projects'}>
      <Marquee speed={50} gradient={false}>
        <Image src={ProjectsLogo} alt={'логотип проектов'} />
      </Marquee>
      <div className={styles.wrapper}>
        <Slider countOfVisibleElements={3} arrowPosition={{ top: '40%', margin: '-30px' }}>
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
          <Image key={name} src={image} alt={name} />
        ))}
      </Marquee>
    </div>
  );
};

export default SectionProjects;
