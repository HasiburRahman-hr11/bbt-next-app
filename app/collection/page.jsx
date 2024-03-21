import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/Collection/PageHeader/PageHeader";
import CollectionListTop from "../Components/Collection/CollectionListTop/CollectionListTop";
import CollectionListBottom from "../Components/Collection/CollectionListBottom/CollectionListBottom";
// import FormSection from "../Components/Collection/FormSection/FormSection";
import ContactSection from "../Components/Collection/ContactSection/ContactSection";
import OurShowrooms from "../Components/Collection/OurShowrooms/OurShowrooms";

const Collection = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <PageHeader />
      <CollectionListTop />
      <ContactSection />
      <CollectionListBottom />
      <OurShowrooms />
      <Footer />
    </main>
  );
};

export default Collection;
