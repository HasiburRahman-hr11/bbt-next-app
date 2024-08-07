import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import GuideList from '../Components/Guides/GuideList/GuideList';
import NewsLetterSection from '../Components/Guides/NewsletterSection/NewsletterSection';
import RecentUploads from '../Components/CommonComponents/RecentUploads/RecentUploads';
import PageBanner from "../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title:`The Grand <br /> <b>Convertible Feast</b>`,
  description: ` BBT Squad is a new platform inviting car enthusiasts to pursue their passion <br /> for automobiles without compromising on their existing work areas.`,
  breadcrumb: "Auto Guides",
  bannerImage:"/images/guides/auto-guide-banner.webp",
  bannerImageMobile:"/images/guides/guide-banner-mob.webp"
}

const Guides = () => {
  return (
    <main>
        <Header/>
        <PageBanner data={bannerData} />
        <GuideList />
        <RecentUploads />
        <NewsLetterSection/>
        <Footer />
    </main>
  )
}

export default Guides