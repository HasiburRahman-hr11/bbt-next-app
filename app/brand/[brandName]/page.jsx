import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerSection from "../../Components/BrandPage/BannerSection/BannerSection";
import PageHeader from "../../Components/BrandPage/PageHeader/PageHeader";
import CarList from "../../Components/BrandPage/CarList/CarList";

const BrandPage = () => {
  return (
    <main>
      <Header />
      <BannerSection />
      <PageHeader />
      <CarList />
      <Footer />
    </main>
  );
};

export default BrandPage;
