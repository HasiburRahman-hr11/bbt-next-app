import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/Faq/BannerSection/BannerSection";
import FaqMain from "../Components/Faq/FaqMain/FaqMain";
import LatestAddition from "../Components/Faq/LatesAddition/LatestAddition";
import MoreInfo from "../Components/Faq/MoreInfo/MoreInfo";

const Faqs = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <FaqMain />
      <LatestAddition />
      <MoreInfo />
      <Footer />
    </main>
  );
};

export default Faqs;
