import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import PageHeader from '../Components/Blogs/PageHeader/PageHeader'
import BlogList from '../Components/Blogs/BlogList/BlogList'
import AboutUs from '../Components/Blogs/AboutUs/AboutUs'
import NewsLetterSection from '../Components/Blogs/NewsLetterSection/NewsLetterSection'


const Blogs = () => {
  return (
    <main>
        <Header isPageHeader={true}/>
        <PageHeader/>
        <BlogList/>
        <AboutUs />
        <NewsLetterSection />
        <Footer />
    </main>
  )
}

export default Blogs