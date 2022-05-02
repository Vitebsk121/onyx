import React from "react";
import MainLayout from "../HOC/MainLayout";
import SectionPromo from "../components/SectionPromo/SectionPromo";
import SectionPrivilege from "../components/SectionPrivilege/SectionPrivilege";
import SectionAutopark from "../components/SectionAutopark/SectionAutopark";
import SectionProjects from "../components/SectionProjects/SectionProjects";
import SectionGoodsAndServices from "../components/SectionGoodsAndServices/SectionGoodsAndServices";

const MainPage = () => {
  return (
    <MainLayout title={'Главная'} >
      <SectionPromo />
      <SectionPrivilege />
      <SectionGoodsAndServices />
      <SectionProjects />
      <SectionAutopark />
    </MainLayout >
  );
};

export default MainPage;
