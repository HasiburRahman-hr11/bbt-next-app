import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/FilterResults/PageHeader/PageHeader";
import CarList from "../Components/FilterResults/CarList/CarList";
import OurShowrooms from "../Components/FilterResults/OurShowrooms/OurShowrooms";

const FilterResults = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <PageHeader />
      <CarList />
      <OurShowrooms />
      <Footer />
    </main>
  );
};

export default FilterResults;
