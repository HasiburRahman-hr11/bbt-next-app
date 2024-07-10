import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/CompareCars/BannerSection/BannerSection";
import CompareSection from "../Components/CompareCars/CompareSection/CompareSection";
import RecentUploads from "../Components/CommonComponents/RecentUploads/RecentUploads";
import WhyWeExist from "../Components/CompareCars/WhyWeExist/WhyWeExist";
import ExploreBBTWorld from "../Components/CompareCars/ExploreBBTWorld/ExploreBBTWorld";

const page = () => {
  return (
    <main>
        <Header />
        <BannerSection />
        <CompareSection />
        <RecentUploads bgColor="#F4F4F1" />
        <WhyWeExist />
        <ExploreBBTWorld />
        <Footer />
    </main>
  )
}

export default page