import React from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import CounterSection from '../Components/Associates/CounterSection/CounterSection';
import RelationSection from '../Components/Associates/RelationSection/RelationSection';
import AboutSection from '../Components/Associates/AboutSection/AboutSection';
import EsteemsSection from '../Components/Associates/EsteemsSection/EsteemsSection';
import SneakPeak from '../Components/Associates/SneakPeak/SneakPeak';

import PageBanner from "../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title:`Our <b> Associates</b>`,
  description: `BBT believes that its future depends on its people who are capable <br /> enough to generate new ideas & plans that altogether will help in <br /> talking the business to a new height.`,
  breadcrumb: "Our Associates",
  bannerImage:"/images/associates/associates-banner-desktop.webp",
  bannerImageMobile:"/images/associates/associates-banner-mobile.webp"
}

const Associates = () => {
  return (
    <main>
        <Header />
        <PageBanner data={bannerData} />
        <CounterSection />
        <EsteemsSection />
        <RelationSection />
        <AboutSection />
        <SneakPeak />
        <Footer/>
    </main>
  )
}

export default Associates