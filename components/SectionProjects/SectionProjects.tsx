import styles from "./SectionProjects.module.scss"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import ProjectsLogo from "../../public/projects.svg";
import projectsList from "../../data/projectsList";

const SectionProjects = () => {
  return (
    <div className={styles.projects}>
      <Marquee speed={50} gradient={false}>
        <Image src={ProjectsLogo}/>
      </Marquee>
      <div className={styles.wrapper}>
        {projectsList.map(({image, title, description}) => (
          <div key={title} className={styles.projectsCard}>
            <div className={styles.cardPic}>
              <Image src={image} layout={"fill"} objectFit={"cover"}/>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionProjects;
