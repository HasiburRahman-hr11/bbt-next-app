import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerSection from "../../Components/BlogDetail/BannerSection/BannerSection";
import BlogContent from "../../Components/BlogDetail/BlogContent/BlogContent";
import NewsLetterSection from "../../Components/BlogDetail/NewsLetterSection/NewsLetterSection";
import RecentUploads from "../../Components/CommonComponents/RecentUploads/RecentUploads";
import ExploreSection from "../../Components/BlogDetail/ExploreSection/ExploreSection";
import RelatedBlogs from "../../Components/BlogDetail/RelatedBlogs/RelatedBlogs";
import { blogs } from "../../../public/data/dummyData";

const BlogDetail = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <BannerSection />
      <BlogContent />
      <NewsLetterSection />
      <RelatedBlogs data={blogs} />
      <ExploreSection />
      <RecentUploads />
      <Footer />
    </main>
  );
};

export default BlogDetail;
