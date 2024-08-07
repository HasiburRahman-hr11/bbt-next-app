import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CarList from "../../Components/CategoryPage/CarList/CarList";
import AboutSection from '../../Components/CategoryPage/AboutSection/AboutSection';
import UspSection from '../../Components/CategoryPage/UspSection/UspSection';
import DescriptionSection from '../../Components/CategoryPage/DescriptionSection/DescriptionSection';
import PageHeader from "../../Components/CategoryPage/PageHeader/PageHeader";
import PageBanner from "../../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title:`Planning to buy a <br /> used <strong>luxury Suv car ?</strong>  <br /> Take a look.`,
  breadcrumb: "SUVs",
  bannerImage:"/images/suv/suv-banner-desk.webp",
  bannerImageMobile:"/images/suv/suv-banner-mob.webp"
}

const SuvCollection = () => {
  return (
    <main>
      <Header />
      <PageBanner data={bannerData} />
      <PageHeader />
      <CarList />
      <DescriptionSection />
      <UspSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default SuvCollection;
