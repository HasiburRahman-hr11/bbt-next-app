"use client"
import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/SearchResults/PageHeader/PageHeader";
import CarList from "../Components/SearchResults/CarList/CarList";
import NoResults from "../Components/SearchResults/NoResults/NoResults";
import TopChoices from "../Components/SearchResults/TopChoices/TopChoices";
import RecentlyAdded from "../Components/SearchResults/RecentlyAdded/RecentlyAdded";

const SearchResults = () => {
  const [totalResults , setTotalResults] = useState(10);
  return (
    <main>
      <Header isPageHeader={true} />
      <PageHeader totalResults={totalResults} />
      {totalResults > 0 ? (
        <CarList />
      ) : (
        <NoResults />
      )}
      <TopChoices />
      <RecentlyAdded />
      <Footer />
    </main>
  );
};

export default SearchResults;
