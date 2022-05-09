import styles from "./SectionProjects.module.scss"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import ProjectsLogo from "../../public/projects.svg";
import projectsList from "../../data/projectsList";

const SectionProjects = () => {
  return (
    <div className={styles.projects}>
      <Marquee speed={50} gradient={false}>
        <Image src={ProjectsLogo} alt={"логотип проектов"}/>
      </Marquee>
      <div className={styles.wrapper}>
        {projectsList.map(({image, title, description}) => (
          <div key={title}>
            <div className={styles.cardPic}>
              <Image src={image} alt={title} layout={"fill"} objectFit={"cover"}/>
            </div>
            <h4 className={styles.cardTitle}>{title}</h4>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionProjects;
