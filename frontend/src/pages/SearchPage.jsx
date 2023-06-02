
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { getAllSellers } from "../redux/actions/sellers";
import { backend_url } from '../server'
import Header from "../components/Layout/Header";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(false);

  const dispatch = useDispatch();
  const { sellers } = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getAllSellers());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  return (
    < >
    <Header/>
      <input
        type="text"
        placeholder="Ener parlour name..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="h-[40px]  w-[88%] m-3.5 py-2 px-4 border-[#dcdcdc] border-[1px] rounded-md"
      />
      <AiOutlineSearch
        size={30}
        className="absolute right-6 top-23.5 cursor-pointer "
      />
       {/* search box */}
       <div  >
        <div className=" w-[88%]  m-3.5  shadow-sm-2 z-[9] ">
          {sellers && sellers.filter((product) => {
            if (searchTerm === '') return null
            else if (searchTerm === ' ') return null
            else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return product
            } else return null
          }).map((i, index) => {
            return (
              <> <Link to={`/product/${i._id}`}>
                <div className="w-full flex hover:bg-[#fff9f9] bg-slate-50 mb-2 p-5 items-start-py-3 rounded-md">
                  <img
                    src={`${backend_url}${i.avatar}`}
                    alt=""
                    className="w-[40px]  h-[40px] mr-[10px]"
                  />
                  <div>
                  <h1>{i.name}</h1> 
                  <p>{i.landmark}</p>
                  </div>
                </div>
              </Link>
              </>
            );
          })}
        </div>
      </div>


    </>
  );
};

export default SearchPage;
