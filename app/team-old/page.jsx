import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/TeamPageOld/BannerSection/BannerSection";
import Celebration from "../Components/TeamPageOld/Celebration/Celebration";
import Chairman from "../Components/TeamPageOld/Chairman/Chairman";
import Founder from "../Components/TeamPageOld/Founder/Founder";
import CooSection from "../Components/TeamPageOld/CooSection/CooSection";
import TeamSection from "../Components/TeamPageOld/TeamSection/TeamSection";
import BbtFeatured from "../Components/TeamPageOld/BbtFeatured/BbtFeatured";

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
