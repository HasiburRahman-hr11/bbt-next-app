import React from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import BannerSection from '../Components/Associates/BannerSection/BannerSection'
import AboutSection from '../Components/Associates/AboutSection/AboutSection'
import EsteemsSection from '../Components/Associates/EsteemsSection/EsteemsSection'

const Associates = () => {
  return (
    <main>
        <Header />
        <BannerSection />
        <EsteemsSection />
        <AboutSection />
        <Footer/>
    </main>
  )
}

export default Associates