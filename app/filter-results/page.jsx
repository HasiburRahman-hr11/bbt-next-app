"use client"
import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/FilterResults/PageHeader/PageHeader";
import CarList from "../Components/FilterResults/CarList/CarList";
import NoResults from "../Components/FilterResults/NoResults/NoResults";
import OurShowrooms from "../Components/FilterResults/OurShowrooms/OurShowrooms";

const FilterResults = () => {
  const [totalResults , setTotalResults] = useState(0);
  return (
    <main>
      <Header isPageHeader={true} />
      <PageHeader />
      {totalResults > 0 ? (
        <CarList />
      ) : (
        <NoResults />
      )}
      
      <OurShowrooms />
      <Footer />
    </main>
  );
};

export default FilterResults;
