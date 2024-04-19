import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from '../Components/Guides/BannerSection/BannerSection';
import GuideList from '../Components/Guides/GuideList/GuideList';
import RecentUploads from '../Components/CommonComponents/RecentUploads/RecentUploads';

const page = () => {
  return (
    <main>
        <Header/>
        <BannerSection/>
        <GuideList />
        <RecentUploads />
        <Footer />
    </main>
  )
}

export default page