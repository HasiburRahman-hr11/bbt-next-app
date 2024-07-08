import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/CheckPoints/BannerSection/BannerSection";
import CheckPointsSection from "../Components/CheckPoints/CheckPointsSection/CheckPointsSection";
import SellYourCar from "../Components/CheckPoints/SellYourCar/SellYourCar";
import QuickContact from "../Components/CheckPoints/QuickContact/QuickContact";

const page = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <CheckPointsSection />
      <div className="xl:hidden">
        <QuickContact />
      </div>
      <SellYourCar/>
      <Footer />
    </main>
  );
};

export default page;
