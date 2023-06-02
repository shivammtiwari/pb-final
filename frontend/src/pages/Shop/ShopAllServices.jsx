import React from 'react'
import DashboardHeader from '../../components/Parlour/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Parlour/Layout/DashboardSideBar'
import AllServices from "../../components/Parlour/AllServices";

const ShopAllProducts = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={3} />
            </div>
            <div className="w-full justify-center flex">
                <AllServices />
            </div>
          </div>
    </div>
  )
}

export default ShopAllProducts