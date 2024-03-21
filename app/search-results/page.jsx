"use client"
import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/SearchResults/PageHeader/PageHeader";
import CarList from "../Components/SearchResults/CarList/CarList";
import NoResults from "../Components/SearchResults/NoResults/NoResults";

const SearchResults = () => {
  const [totalResults , setTotalResults] = useState(1);
  return (
    <main>
      <Header isPageHeader={true} />
      <PageHeader />
      {totalResults > 0 ? (
        <CarList />
      ) : (
        <NoResults />
      )}
      <Footer />
    </main>
  );
};

export default SearchResults;
