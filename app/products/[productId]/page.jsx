import React from "react";
import Header from "../../Components/Header/Header";
import BannerSection from "../../Components/SingleProduct/BannerSection/BannerSection";
import SpecificationSection from "../../Components/SingleProduct/SpecificationSection/SpecificationSection";
import RelatedCars from "../../Components/SingleProduct/RelatedCars/RelatedCars";
import CompareSection from "../../Components/SingleProduct/CompareSection/CompareSection";
import PopularBrands from "../../Components/SingleProduct/PopularBrands/PopularBrands";
import ShopByCategory from "../../Components/SingleProduct/ShopByCategory/ShopByCategory";
import AboutUs from '../../Components/SingleProduct/AboutUs/AboutUs';
import FinanceSection from '../../Components/SingleProduct/FinanceSection/FinanceSection'

const SingleProductPage = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <BannerSection />
      <SpecificationSection />
      <RelatedCars />
      <CompareSection />
      <PopularBrands />
      <ShopByCategory/>
      <AboutUs />
      <FinanceSection />
    </main>
  );
};

export default SingleProductPage;
