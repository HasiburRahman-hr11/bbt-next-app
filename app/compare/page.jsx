import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/Compare/BannerSection/BannerSection";
import CompareSection from "../Components/Compare/CompareSection/CompareSection";
import ContactSection from "../Components/Compare/ContactSection/ContactSection";
import LatestBlogs from "../Components/Compare/LatestBlogs/LatestBlogs";
import LatestCars from "../Components/Compare/LatestCars/LatestCars";
import FeaturedSection from "../Components/Compare/FeaturedSection/FeaturedSection";

const Compare = () => {
  return (
    <main>
      <Header isPageHeader={false} />
      <BannerSection />
      <CompareSection />
      <ContactSection />
      <LatestBlogs />
      <FeaturedSection />
      <LatestCars />
      <Footer />
    </main>
  );
};

export default Compare;
