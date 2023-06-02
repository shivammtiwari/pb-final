import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import ParlourCard from '../components/Route/Cards/ParlourCard'
import { server } from '../server';
import Header from '../components/Layout/Header';
import LocationDropdown from '../components/Layout/LocationDropdown';
import { useDispatch, useSelector } from "react-redux";
import Address from '../image/Address.png'
import './pages.css'


const ParloursPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const landmarkData = searchParams.get("landmark");
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const [count, setCount] = useState(0);
  const [isLoading, setSisLoading] = useState(false)



  useEffect(() => {
    let getData = async () => {

      let res = await fetch(`${server}/shop/all-sellers`)
      res = await res.json()
      if (landmarkData === null) {
        const d = res;
        setSisLoading(true)
        setData(d);
      } else {
        const d = res && res.filter((i) => i.landmark === landmarkData);
        setData(d);
        setCount(d.length);
        setSisLoading(false)

      }
      window.scrollTo(0, 0);
    }
    getData();

  }, [landmarkData])

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const SelectLocation = () => {
    return (
      <>
        <div className='mt-6' >
          <img style={{ width: '250px', margin: 'auto' }} src={Address} />
          <p style={{ textAlign: 'center' }}>Please select a location to find nearest salon...</p>
        </div>

      </>
    )
  }
  return (
    <>
      <Header />
      <div className='ParloursPageContent'>
        <div className='DropdownHeader'>
          <LocationDropdown />
          {isLoading ? null : <input value={searchTerm} onChange={handleSearchChange} type='text' placeholder='Enter Parlour Name...' />}
        </div>

        {
          isLoading ? <SelectLocation />
            : <div>
              <p className='mb-4'>Parlours In {landmarkData}</p>
              <div className='parlours-page-cards'>
                {
                  data.filter((i, index) => {
                    if (searchTerm === '') {
                      return i
                    } else if (i.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return i;
                    }
                  }).map((i, index) => {
                    return (
                      <ParlourCard data={i} key={index} />
                    )
                  })
                }
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default ParloursPage