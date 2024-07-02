import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/WhyUs/BannerSection/BannerSection";
import TopDealer from "../Components/WhyUs/TopDealer/TopDealer";
import TrustedClients from "../Components/WhyUs/TrustedClients/TrustedClients";
import SellYourCar from "../Components/WhyUs/SellYourCar/SellYourCar";
import OurPresence from "../Components/WhyUs/OurPresence/OurPresence";
import MeetTheTeam from "../Components/WhyUs/MeetTheTeam/MeetTheTeam";
import TestimonialSection from "../Components/WhyUs/TestimonialSection/TestimonialSection";

import InfoWithTwoCard from "../Components/CommonComponents/InfoWithTwoCard/InfoWithTwoCard";

const InfoWithTwoCardData = {
  leftCardData: {
    url: "/sell-your-car",
    title: "Sell Your Car",
    thumbnail: "/images/why-us/cta-card-1.webp",
  },
  rightCardData: {
    url: "/collection",
    title: "Buy Car",
    thumbnail: "/images/why-us/cta-card-2.webp",
  },
  title: "From The <br> <b>BBT World</b>",
  description:
    "Get your dream luxury car in 4 easy steps at Big <br> Boy Toyz, India's trusted used car portal.",
  bg: "#F4F4F1",
};

const Services = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <TopDealer />
      <TrustedClients />
      <SellYourCar />
      <OurPresence />
      <MeetTheTeam />
      <TestimonialSection />
      <InfoWithTwoCard data={InfoWithTwoCardData} />
      <Footer />
    </main>
  );
};

export default Services;
