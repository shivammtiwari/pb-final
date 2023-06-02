import React from 'react'
import DashboardHeader from '../../components/Parlour/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Parlour/Layout/DashboardSideBar'
import DashboardMessages from "../../components/Parlour/DashboardMessages";

const ShopInboxPage = () => {
  return (
    <div>
    <DashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashboardSideBar active={8} />
      </div>
       <DashboardMessages />
    </div>
  </div>
  )
}

export default ShopInboxPage