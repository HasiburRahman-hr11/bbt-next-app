import React from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import BannerSection from '../Components/Associates/BannerSection/BannerSection'
import CounterSection from '../Components/Associates/CounterSection/CounterSection'
import RelationSection from '../Components/Associates/RelationSection/RelationSection'
import AboutSection from '../Components/Associates/AboutSection/AboutSection'
import EsteemsSection from '../Components/Associates/EsteemsSection/EsteemsSection'
import SneakPeak from '../Components/Associates/SneakPeak/SneakPeak'

const Associates = () => {
  return (
    <main>
        <Header />
        <BannerSection />
        <CounterSection />
        <EsteemsSection />
        <RelationSection />
        <AboutSection />
        <SneakPeak />
        <Footer/>
    </main>
  )
}

export default Associates