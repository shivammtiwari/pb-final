import React from "react";
import { Link } from "react-router-dom";
import women from '../../../image/hero3.png'
import './hero.css'
import LocationDropdown from "../../Layout/LocationDropdown";
const Hero = () => {
  return (
    <>
   <section>
      <div className="PleasingBeauty">
      <div className='left-div'>
        <h2> <span className="line"></span> Make your look even <span>More Perfect</span> with your favourite beautician</h2>
        <p>Keep your skin well-groomed, enjoy treatment services from experts and get attractive discounts.</p>
        <div className="location-box">
        <h3>Select a location and find your nearest salon</h3>
        <div className='dropdown-box'>
          <LocationDropdown/>
        </div>
        </div>
      </div>
      <div className="right-div">
        <img src={women} alt="" />
      </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
