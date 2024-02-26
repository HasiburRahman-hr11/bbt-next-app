import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/SquadPage/BannerSection/BannerSection";
import JoinUs from "../Components/SquadPage/JoinUs/JoinUs";
import BenefitsSection from "../Components/SquadPage/BenefitsSection/BenefitsSection";
import Requirements from "../Components/SquadPage/Requirements/Requirements";

const BbtSquad = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <JoinUs />
      <BenefitsSection />
      <Requirements />
      <Footer />
    </main>
  );
};

export default BbtSquad;
