import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { landmarkData } from '../../static/data'
import './layout.css'

const LocationDropdown = () => {
  const [search, setSearch] = useState('');
  const [searchtitle, setSearchtitle] = useState(false);


  const navigate = useNavigate();
  const submitHandle = (e) => {
    navigate(`/search-parlours?landmark=${e.target.value}`);
    setSearch(e.target.value)
    searchtitle(true)
    // window.location.reload();
  };

 

  return (
    <div className="LocationDropdown">
      <div class="select">
        <select name="slct" id="slct"
          cursor={"pointer"}
          value={search}
          width={"20em"}
          onChange={submitHandle}
        >
          <option selected hidden  value=''> Please select a location...</option>
         {landmarkData &&
          landmarkData.map((i, index) => (
            <option value={i.title}>{i.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationDropdown;
