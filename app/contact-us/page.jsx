import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/ContactUs/BannerSection/BannerSection";
import FormSection from "../Components/ContactUs/FormSection/FormSection";
import ShowroomSection from "../Components/ContactUs/ShowroomSection/ShowroomSection";

const ContactUs = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <BannerSection />
      <FormSection />
      <ShowroomSection />
      <Footer />
    </main>
  );
};

export default ContactUs;
