import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/FixedPricePolicy/BannerSection/BannerSection";
import FixedPriceContent from "../Components/FixedPricePolicy/FixedPriceContent/FixedPriceContent"

const FixedPricePolicy = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <FixedPriceContent />
      <Footer />
    </main>
  );
};

export default FixedPricePolicy;
