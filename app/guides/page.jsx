import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from '../Components/Guides/BannerSection/BannerSection';
import GuideList from '../Components/Guides/GuideList/GuideList';
import NewsLetterSection from '../Components/Guides/NewsLetterSection/NewsLetterSection';
import RecentUploads from '../Components/CommonComponents/RecentUploads/RecentUploads';

const Guides = () => {
  return (
    <main>
        <Header/>
        <BannerSection/>
        <GuideList />
        <RecentUploads />
        <NewsLetterSection/>
        <Footer />
    </main>
  )
}

export default Guides