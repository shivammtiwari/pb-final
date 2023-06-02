import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Footer from "../components/Layout/Footer";
import FeaturedTreatments from '../components/FeaturedTreatments/FeaturedTreatments';

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <FeaturedTreatments/>
        <Footer />
    </div>
  )
}

export default HomePage