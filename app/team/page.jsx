import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/TeamPage/BannerSection/BannerSection";
import FounderQuote from "../Components/TeamPage/FounderQuote/FounderQuote";
import Celebration from "../Components/TeamPage/Celebration/Celebration";
import FounderSection from "../Components/TeamPage/FounderSection/FounderSection";
import TeamSection from "../Components/TeamPage/TeamSection/TeamSection";
import WhyUs from "../Components/TeamPage/WhyUs/WhyUs";
import Chairman from "../Components/TeamPage/Chairman/Chairman";
import CooSection from "../Components/TeamPage/CooSection/CooSection";


const Team = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <FounderQuote />
      <Celebration />
      <Chairman />
      <FounderSection />
      <CooSection />
      <TeamSection />
      <WhyUs />
      
      <Footer />
    </main>
  );
};

export default Team;
