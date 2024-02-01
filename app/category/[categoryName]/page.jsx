import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerSection from "../../Components/CategoryPage/BannerSection/BannerSection";
import CarList from "../../Components/CategoryPage/CarList/CarList";
import AboutSection from '../../Components/CategoryPage/AboutSection/AboutSection';
import UspSection from '../../Components/CategoryPage/UspSection/UspSection';
import DescriptionSection from '../../Components/CategoryPage/DescriptionSection/DescriptionSection';
import PageHeader from "../../Components/CategoryPage/PageHeader/PageHeader";

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
