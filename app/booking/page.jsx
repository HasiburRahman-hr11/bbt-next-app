import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BookingWrapper from '../Components/Booking/BookingWrapper';

const Booking = () => {
  return (
    <main>
        <Header isPageHeader={true} />
        <BookingWrapper />
        <Footer />
    </main>
  )
}

export default Booking