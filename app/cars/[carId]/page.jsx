'use client';
import React from "react";
import Header from "../../Components/Header/Header";
import BannerSection from "../../Components/SingleCar/BannerSection/BannerSection";
import SpecificationSection from "../../Components/SingleCar/SpecificationSection/SpecificationSection";
import RelatedCars from "../../Components/SingleCar/RelatedCars/RelatedCars";
import CompareSection from "../../Components/SingleCar/CompareSection/CompareSection";
import PopularBrands from "../../Components/SingleCar/PopularBrands/PopularBrands";
import ShopByCategory from "../../Components/SingleCar/ShopByCategory/ShopByCategory";
import AboutUs from '../../Components/SingleCar/AboutUs/AboutUs';
import FinanceSection from '../../Components/SingleCar/FinanceSection/FinanceSection';
import PreviewSection from '../../Components/SingleCar/PreviewSection/PreviewSection';
import Footer from "../../Components/Footer/Footer";

const SingleProductPage = () => {
  return (
    <main>
      <Header isPageHeader={true}/>
      <BannerSection />
      <SpecificationSection />
      <PreviewSection />
      <RelatedCars />
   
      <FinanceSection />
      <CompareSection />
      <PopularBrands />
      <ShopByCategory/>
      <AboutUs />
      <Footer />

    </main>
  );
};

export default SingleProductPage;
