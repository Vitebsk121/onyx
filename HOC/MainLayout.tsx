import Head from "next/head"
import React from "react";


type MainLayoutProps = {
  children: React.ReactNode
  title: string
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, title = "",}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`Onyx | ` + title}</title>
        <meta name="description" content="Сайт компании Onyx" />
        <meta name="keywords" content="onyx, оникс, песок, гравий, щебень, доставка москва" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>ONYX Главная</header>
      {children}
      <footer>контакты ONYX</footer>
    </>
  );
};

export default MainLayout;
