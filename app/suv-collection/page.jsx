import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/SuvCollection/BannerSection/BannerSection";
import CarList from "../Components/SuvCollection/CarList/CarList";
import AboutSection from '../Components/SuvCollection/AboutSection/AboutSection';
import UspSection from '../Components/SuvCollection/UspSection/UspSection';
import DescriptionSection from '../Components/SuvCollection/DescriptionSection/DescriptionSection';
import PageHeader from "../Components/SuvCollection/PageHeader/PageHeader";

const SuvCollection = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <PageHeader />
      <CarList />
      <DescriptionSection />
      <UspSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default SuvCollection;
