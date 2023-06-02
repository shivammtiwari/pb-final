import React from 'react'
import DashboardHeader from '../../components/Parlour/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Parlour/Layout/DashboardSideBar'
import CreateService from "../../components/Parlour/CreateService";

const ParlourCreateService = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={4} />
            </div>
            <div className="w-full justify-center flex">
                <CreateService />
            </div>
          </div>
    </div>
  )
}

export default ParlourCreateService