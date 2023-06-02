import React from 'react'
import DashboardHeader from '../../components/Parlour/Layout/DashboardHeader'
import Footer from '../../components/Layout/Footer'
import BookingDetails from "../../components/Parlour/BookingDetails";

const ParlourBookingDetails = () => {
  return (
    <div>
         <DashboardHeader />
         <BookingDetails />
          <Footer />
    </div>
  )
}

export default ParlourBookingDetails