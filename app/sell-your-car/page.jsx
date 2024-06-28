"use client";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/SellYourCar/BannerSection/BannerSection";
import HowToSell from "../Components/SellYourCar/HowToSell/HowToSell";
import FloatingForm from "../Components/SellYourCar/FloatingForm/FloatingForm";
import ProcessSection from "../Components/SellYourCar/ProcessSection/ProcessSection";
import PresenceSection from "../Components/SellYourCar/PresenceSection/PresenceSection";
import BenefitsSection from "../Components/SellYourCar/BenefitsSection/BenefitsSection";
import Prerequisites from "../Components/SellYourCar/Prerequisites/Prerequisites";
import CarSelection from "../Components/SellYourCar/CarSelection/CarSelection";
import BrandListing from "../Components/SellYourCar/BrandListing/BrandListing";
import FaqSection from "../Components/SellYourCar/FaqSection/FaqSection";

const SellYourCar = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("afterInsBanner");
      const footer = document.getElementById("footer");

      if (
        secondSection &&
        footer &&
        secondSection.getBoundingClientRect().top <= 0 &&
        footer.getBoundingClientRect().top > window.innerHeight
      ) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="sell-car-page">
      <Header />
      <div id="afterInsBanner">
        <BannerSection />
        <HowToSell />
        <ProcessSection />
        <PresenceSection />
        <BenefitsSection />
        <Prerequisites />
        <CarSelection />
        <BrandListing />
        <FaqSection />
      </div>
      <Footer />
      <div
        className={`z-100 fixed  left-0 w-full transition-all duration-500 ease-in-out ${
          showForm
            ? "bottom-[5rem] show-from-bottom opacity-[1] hidden xl:block"
            : "opacity-[0] bottom-[100rem]"
        }`}
      >
        <FloatingForm />
      </div>
    </main>
  );
};

export default SellYourCar;
