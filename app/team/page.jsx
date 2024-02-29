import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/TeamPage/BannerSection/BannerSection";
import Celebration from "../Components/TeamPage/Celebration/Celebration";
import Chairman from "../Components/TeamPage/Chairman/Chairman";
import Founder from "../Components/TeamPage/Founder/Founder";
import CooSection from "../Components/TeamPage/CooSection/CooSection";
import TeamSection from "../Components/TeamPage/TeamSection/TeamSection";
import BbtFeatured from "../Components/TeamPage/BbtFeatured/BbtFeatured";

const Team = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <Celebration />
      <Chairman />
      <Founder />
      <CooSection />
      <TeamSection />
      <BbtFeatured />
      <Footer />
    </main>
  );
};

export default Team;
