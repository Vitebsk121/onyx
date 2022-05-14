import styles from './Services.module.scss';
import React from 'react';
import MainLayout from '../../HOC/MainLayout';
import Image from 'next/image';
import servicesList, { IServices } from '../../data/servicesList';

type Tfunc = {
  service: IServices;
};

export default function product({ service }: Tfunc) {
  return (
    <MainLayout title={service.title}>
      <div className={styles.servicePage}>
        <section className={styles.sectionPromo}>
          <div className={styles.sectionBackground}>
            <Image src={service.image} layout={'fill'} objectFit={'cover'} alt={service.title} />
          </div>
          <h1 className={styles.servicePage_title}>{service.secondaryTitle}</h1>
        </section>
        <section className={styles.sectionContent}>
          {service.description &&
            service.description.map((descr) => (
              <p key={descr} className={styles.content_description}>
                {descr}
              </p>
            ))}
          {service.content && <h4 className={styles.content_title}>{service.content.title}</h4>}
          {service.content &&
            service.content.subtitles.map((item) => (
              <p key={item} className={styles.content_description}>
                {item}
              </p>
            ))}
          {service.map && <Image src={service.map} alt={'карта доставки'} />}
          {service.repairInfo && (
            <div className={styles.repairInfo}>
              {service.repairInfo.map(({ title, list }) => (
                <div key={title} className={styles.repairInfo_item}>
                  <h4 className={styles.content_title}>{title}</h4>
                  {list.map((listItem) => (
                    <p key={listItem} className={styles.content_description}>
                      {listItem}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}
          {service.repairContacts && (
            <div className={styles.contacts}>
              <h4 className={styles.content_title}>{service.repairContacts.title}</h4>
              <div>
                {service.repairContacts.linksList.map(({ link, linkName }) => (
                  <a
                    key={link}
                    href={link}
                    className={styles.contacts_link}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    {linkName}
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ params }: any) {
  const service = servicesList.filter(({ name }) => name === params.name)[0];
  return {
    props: { service }, // will be passed to the page component as props
  };
}
