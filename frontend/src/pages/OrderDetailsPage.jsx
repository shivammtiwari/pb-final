import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import UserBookingDetails from "../components/UserBookingDetails";

const OrderDetailsPage = () => {
  return (
    <div>
        <Header />
        <UserBookingDetails />
        <Footer />
    </div>
  )
}

export default OrderDetailsPage