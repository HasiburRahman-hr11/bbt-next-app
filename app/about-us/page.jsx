import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/AboutUs/BannerSection/BannerSection";
import MissionSection from "../Components/AboutUs/MissionSection/MissionSection";
import UspSection from "../Components/AboutUs/UspSection/UspSection";
import Showroom from "../Components/AboutUs/Showroom/Showroom";
import ServiceCenter from "../Components/AboutUs/ServiceCenter/ServiceCenter";
import VisionSection from "../Components/AboutUs/VisionSection/VisionSection";
import TeamSection from "../Components/AboutUs/TeamSection/TeamSection";

const AboutUs = () => {
  return (
    <main>
      <div className="white-header bg-white pt-[2rem] lg:pt-0">
        <Header isPageHeader={true} />
      </div>
      <BannerSection/>
      <MissionSection/>
      <UspSection/>
      <Showroom/>
      <ServiceCenter />
      <VisionSection />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default AboutUs;
