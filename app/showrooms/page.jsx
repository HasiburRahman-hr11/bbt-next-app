import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from '../Components/ShowroomsPage/BannerSection/BannerSection';
import UspSection from '../Components/ShowroomsPage/UspSection/UspSection';
import ShowroomsSection from '../Components/ShowroomsPage/ShowroomsSection/ShowroomsSection';
import VisitSection from '../Components/ShowroomsPage/VisitSection/VisitSection';
import RecentUploads from '../Components/CommonComponents/RecentUploads/RecentUploads'
import MeetTheTeam from '../Components/ShowroomsPage/MeetTheTeam/MeetTheTeam';

const Showrooms = () => {
  return (
    <main>
        <div className='white-header bg-white pt-[2rem] lg:pt-0'>
        <Header isPageHeader={true} />
        </div>
        <BannerSection />
        <UspSection />
        <ShowroomsSection />
        <VisitSection />
        <RecentUploads />
        <MeetTheTeam />
        <Footer />
    </main>
  )
}

export default Showrooms;