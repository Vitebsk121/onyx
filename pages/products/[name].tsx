import styles from "./Product.module.scss"
import React from "react";
import MainLayout from "../../HOC/MainLayout";
import goodsList, {IGoods} from "../../data/goodsList";
import Image from "next/image";

type Tfunc = {
  product: IGoods
}


export default function product({product}: Tfunc) {
  return (
    <MainLayout title={'product'} >
      <div className={styles.productPage}>
        <section className={styles.sectionPromo}>
          <div className={styles.sectionBackground}>
            <Image src={product.image} layout={"fill"} objectFit={"cover"} alt={product.title} />
          </div>
          <h1 className={styles.productPage_title}>{product.title}</h1>
        </section>
        <section className={styles.sectionContent}>
          {product.description && product.description.map((descr) => (
            <p key={descr} className={styles.content_description}>{descr}</p>
          ))}
          {product.categories
            ? (
              <>
                <h4 className={styles.content_title}>{product.categories.title}</h4>
                <ul className={styles.contentCategoriesList}>
                  {product.categories.categor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )
            : null
          }
          {product.content.title && (
            <h4 className={styles.content_title}>{product.content.title}</h4>
          )}
          {product.content.subtitles && product.content.subtitles.map((item) => (
            <p key={item} className={styles.content_description}>{item}</p>
          ))}
        </section>
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps({params}: any) {
  const product = goodsList.filter(({name}) => name === params.name)[0]
  return {
    props: {product}, // will be passed to the page component as props
  }
}
