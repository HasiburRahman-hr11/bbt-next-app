import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FaqMain from "../Components/Faq/FaqMain/FaqMain";
import LatestAddition from "../Components/Faq/LatesAddition/LatestAddition";
import MoreInfo from "../Components/Faq/MoreInfo/MoreInfo";
import PageBannerSmall from "../Components/CommonComponents/PageBannerSmall/PageBannerSmall";

const bannerData = {
  title:`Frequently <br /> <b>Asked questions</b>`,
  description: `  Hello, How we can help`,
  breadcrumb: "FAQ",
  bannerImage:"/images/faq/faq-banner.webp",
  bannerImageMobile:"/images/faq/faq-banner-mobile.webp"
}

const Faqs = () => {
  return (
    <main>
      <Header />
      <PageBannerSmall data={bannerData} />
      <FaqMain />
      <LatestAddition />
      <MoreInfo />
      <Footer />
    </main>
  );
};

export default Faqs;
