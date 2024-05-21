import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from '../Components/Services/BannerSection/BannerSection';
import UspSection from '../Components/Services/UspSection/UspSection';
import AboutSection from '../Components/Services/AboutSection/AboutSection';
import OurProcess from '../Components/Services/OurProcess/OurProcess';
import WorkshopGallery from '../Components/Services/WorkshopGallery/WorkshopGallery';
import ServiceTypes from '../Components/Services/ServiceTypes/ServiceTypes';
import Partnership from '../Components/Services/Partnership/Partnership';
import PopularBrands from '../Components/Services/PopularBrands/PopularBrands';
import GlimpseSection from '../Components/Services/GlimpseSection/GlimpseSection';
import ContactSection from '../Components/Services/ContactSection/ContactSection';

const Services = () => {
  return (
    <main>
    <Header />
    <BannerSection />
    <UspSection />
    <AboutSection />
    <OurProcess />
    <WorkshopGallery />
    <ServiceTypes />
    <Partnership />
    <PopularBrands />
    <GlimpseSection />
    <ContactSection />
    <Footer />
  </main>
  )
}

export default Services