import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import BannerSection from '../Components/Career/BannerSection/BannerSection';
import AboutSection from '../Components/Career/AboutSection/AboutSection';
import ParksSection from '../Components/Career/ParksSection/ParksSection';
import PlatformSection from '../Components/Career/PlatformSection/PlatformSection';
import OpeningSection from '../Components/Career/OpeningSection/OpeningSection';
import MoreInfo from '../Components/Career/MoreInfo/MoreInfo';

const Career = () => {
  return (
    <main>
        <Header />
        <BannerSection />
        <AboutSection />
        <ParksSection />
        <PlatformSection />
        <OpeningSection />
        <MoreInfo />
        <Footer/>
    </main>
  )
}

export default Career