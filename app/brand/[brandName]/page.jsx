import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerSection from "../../Components/BrandPage/BannerSection/BannerSection";
import PageHeader from "../../Components/BrandPage/PageHeader/PageHeader";
import CarList from "../../Components/BrandPage/CarList/CarList";
import CarModels from "../../Components/BrandPage/CarModels/CarModels";
import UspSection from "../../Components/BrandPage/UspSection/UspSection";
import AboutSection from "../../Components/BrandPage/AboutSection/AboutSection";
import GiftYourself from "../../Components/BrandPage/GiftYourself/GiftYourself";
import FaqSection from "../../Components/BrandPage/FaqSection/FaqSection";
import MostSearched from "../../Components/BrandPage/MostSearched/MostSearched";

const BrandPage = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <PageHeader />
      <CarList />
      <CarModels />
      <UspSection />
      <AboutSection />
      <GiftYourself />
      <FaqSection />
      <MostSearched />
      <Footer />
    </main>
  );
};

export default BrandPage;
