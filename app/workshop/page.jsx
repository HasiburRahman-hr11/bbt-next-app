import React from 'react'
import Header from '../Components/Header/Header'
import BannerSection from '../Components/Workshop/BannerSection/BannerSection';
import ExcellenceSection from '../Components/Workshop/ExcellenceSection/ExcellenceSection';
import CraftingSection from '../Components/Workshop/CraftingSection/CraftingSection';
import ServicesSection from '../Components/Workshop/ServicesSection/ServicesSection';
import Footer from '../Components/Footer/Footer'

const Workshop = () => {
  return (
    <main>
        <Header isPageHeader={true} />
        <BannerSection/>
        <ExcellenceSection />
        <CraftingSection />
        <ServicesSection />
        <Footer/>
    </main>
  )
}

export default Workshop