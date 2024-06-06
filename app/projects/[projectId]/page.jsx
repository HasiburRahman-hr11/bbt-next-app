import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/ProjectDetail/PageHeader/PageHeader";
import MainContent from "../../Components/ProjectDetail/MainContent/MainContent";
import FormSection from "../../Components/ProjectDetail/FormSection/FormSection";
import RelatedProjects from "../../Components/ProjectDetail/RelatedProjects/RelatedProjects";
import InfoWithTwoCard from "../../Components/CommonComponents/InfoWithTwoCard/InfoWithTwoCard";

const InfoWithTwoCardData = {
    leftCardData: {
      url: "/car-detailing",
      title: "Car Detailing",
      thumbnail: "/images/project-detail/info-1.webp",
    },
    rightCardData: {
      url: "/services",
      title: "Car Service",
      thumbnail: "/images/project-detail/info-2.webp",
    },
    title:`BBT Custom Car  <b>Detailing and Services </b>`,
    description:`Your car isn't just a machine, it's your trusty steed, your partner in crime, and your ticket to endless adventures. And guess what? We totally get it.`,
      bg:'#F4F4F1'
  };

const ProjectDetail = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <PageHeader />
      <MainContent />
      <FormSection/>
      <RelatedProjects />
      <InfoWithTwoCard data={InfoWithTwoCardData} />
      <Footer />
    </main>
  );
};

export default ProjectDetail;
