import React from 'react';
import BannerSection from "../Components/SellCar/BannerSection/BannerSection";
import ContactSection from "../Components/SellCar/ContactSection/ContactSection";
import SellCarList from "../Components/SellCar/SellCarList/SellCarList";
import OtherBrands from "../Components/SellCar/OtherBrands/OtherBrands";
import MondateCheck from "../Components/SellCar/MondateCheck/MondateCheck";
import Testimonial from "../Components/SellCar/Testimonial/Testimonial";
import SellProcess from "../Components/SellCar/SellProcess/SellProcess";
import BbtFeatured from "../Components/SellCar/BbtFeatured/BbtFeatured";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const SellCar = () => {
  return (
    <main>
        <Header isPageHeader={false} />
        <BannerSection />
        <ContactSection />
        <SellCarList />
        <OtherBrands />
        <MondateCheck />
        <Testimonial />
        <SellProcess />
        <BbtFeatured />
        <Footer />
    </main>
  )
}

export default SellCar
