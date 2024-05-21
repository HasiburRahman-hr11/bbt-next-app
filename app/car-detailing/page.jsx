import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/CarDetailing/BannerSection/BannerSection";
import AboutSection from "../Components/CarDetailing/AboutSection/AboutSection";
import WhyChooseUs from "../Components/CarDetailing/WhyChooseUs/WhyChooseUs";
import OurProcess from "../Components/CarDetailing/OurProcess/OurProcess";
import ChooseWhatsRight from "../Components/CarDetailing/ChooseWhatsRight/ChooseWhatsRight";
import ComparisonChart from "../Components/CarDetailing/ComparisonChart/ComparisonChart";
import SneakPeek from "../Components/CarDetailing/SneakPeek/SneakPeek";
import ModifyRide from "../Components/CarDetailing/ModifyRide/ModifyRide";
import FormSection from "../Components/CarDetailing/FormSection/FormSection";
import ServiceListing from "../Components/CarDetailing/ServiceListing/ServiceListing";

const CarDetailing = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <AboutSection />
      <WhyChooseUs />
      <OurProcess />
      <ChooseWhatsRight />
      <ComparisonChart />
      <SneakPeek />
      <ModifyRide />
      <FormSection />
      <ServiceListing />
      <Footer />
    </main>
  );
};

export default CarDetailing;
