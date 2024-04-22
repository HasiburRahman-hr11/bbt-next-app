import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/Wallpapers/PageHeader/PageHeader";
import WallpaperList from "../Components/Wallpapers/WallpaperList/WallpaperList";
import SquadBanner from "../Components/Wallpapers/SquadBanner/SquadBanner";
import RelatedBlogs from "../Components/BlogDetail/RelatedBlogs/RelatedBlogs";
import { blogs } from "../../public/data/dummyData";

const Wallpapers = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <PageHeader />
      <WallpaperList />
      <RelatedBlogs
        sectionTitle=" latest <b>blogs</b>"
        data={blogs}
        sectionBg="#F4F4F1"
        cardBg="#ffffff"
      />
      <SquadBanner />
      <Footer />
    </main>
  );
};

export default Wallpapers;
