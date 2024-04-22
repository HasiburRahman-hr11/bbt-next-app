import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerSection from "../../Components/GuideDetails/BannerSection/BannerSection";
import GuideContent from "../../Components/GuideDetails/GuideContent/GuideContent";
import WorkshopSection from "../../Components/GuideDetails/WorkshopSection/WorkshopSection";
import AboutUs from "../../Components/GuideDetails/AboutUs/AboutUs";
import RelatedBlogs from "../../Components/BlogDetail/RelatedBlogs/RelatedBlogs";
import {blogs} from '../../../public/data/dummyData'

const CarNewsDetail = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <BannerSection />
      <GuideContent />
      <RelatedBlogs sectionTitle="Other Related <b>Auto Guide</b>" data={blogs} sectionBg="#F4F4F1" cardBg="#ffffff" />
      <WorkshopSection />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default CarNewsDetail;
