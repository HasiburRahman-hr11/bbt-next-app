import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import AboutSection from '../Components/Career/AboutSection/AboutSection';
import ParksSection from '../Components/Career/ParksSection/ParksSection';
import PlatformSection from '../Components/Career/PlatformSection/PlatformSection';
import OpeningSection from '../Components/Career/OpeningSection/OpeningSection';
import MoreInfo from '../Components/Career/MoreInfo/MoreInfo';

import PageBanner from "../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title:`Career Opportunities <br /> <b>At BBT</b>`,
  description: `BBT believes that its future depends on its people who are capable enough to <br /> generate new ideas & plans that altogether will help in talking the business to a <br /> new height.`,
  breadcrumb: "Career",
  bannerImage:"/images/career/career-banner-desktop.webp",
  bannerImageMobile:"/images/career/career-banner-desktop.webp"
}

const Career = () => {
  return (
    <main>
        <Header />
        <PageBanner data={bannerData} />
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