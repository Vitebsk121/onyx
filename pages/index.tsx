import React from "react";
import MainLayout from "../HOC/MainLayout";
import SectionPromo from "../components/SectionPromo/SectionPromo";
import SectionPrivilege from "../components/SectionPrivilege/SectionPrivilege";
import SectionAutopark from "../components/SectionAutopark/SectionAutopark";

const MainPage = () => {
  return (
    <MainLayout title={'Главная'} >
      <SectionPromo />
      <SectionPrivilege />
      <SectionAutopark />
    </MainLayout >
  );
};

export default MainPage;
