import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FormSection from "../Components/ContactUs/FormSection/FormSection";
import ShowroomSection from "../Components/ContactUs/ShowroomSection/ShowroomSection";
import ContactSection from "../Components/ContactUs/ContactSection/ContactSection";
import InfoWithTwoCard from "../Components/CommonComponents/InfoWithTwoCard/InfoWithTwoCard";
import PageBannerSmall from "../Components/CommonComponents/PageBannerSmall/PageBannerSmall";

const bannerData = {
  bannerImage: "/images/insurance/home-ins-banner.webp",
  bannerImageMobile: "/images/insurance/home-ins-banner-mob.webp",
  breadcrumb: "Contact Us",
  title: "Get in <b>Touch</b>",
  description: "This may be beginning of our journey",
};


const InfoWithTwoCardData = {
  leftCardData: {
    url: "/career",
    title: "Looking For Career Opportunities",
    thumbnail: "/images/contact-us/card-img-1.webp",
  },
  rightCardData: {
    url: "/team",
    title: "Know More About The Team",
    thumbnail: "/images/contact-us/card-img-2.webp",
  },
  title: "BBT career opportunities & <b>About The Team</b>",
  description: "Your car isn't just a machine, it's your trusty steed, your partner in crime, and your ticket to endless adventures. And guess what? We totally get it.",
    bg:'#FFFFFF'
};

const ContactUs = () => {
  return (
    <main>
      <Header />
      {/* <BannerSection /> */}
      <PageBannerSmall data={bannerData} />
      <ContactSection />
      <FormSection />
      <ShowroomSection />
      <InfoWithTwoCard data={InfoWithTwoCardData} />
      {/* <Footer /> */}
    </main>
  );
};

export default ContactUs;
