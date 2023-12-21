import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/SearchResults/pageHeader/pageHeader";
import CarList from "../Components/SearchResults/CarList/CarList";

const SearchResults = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <PageHeader />
      <CarList />
      <Footer />
    </main>
  );
};

export default SearchResults;
