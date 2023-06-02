import React from 'react'
import DashboardHeader from '../../components/Parlour/Layout/DashboardHeader'
import WithdrawMoney from "../../components/Parlour/WithdrawMoney";
import DashboardSideBar from '../../components/Parlour/Layout/DashboardSideBar';

const ShopWithDrawMoneyPage = () => {
  return (
    <div>
    <DashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashboardSideBar active={7} />
      </div>
       <WithdrawMoney />
    </div>
  </div>
  )
}

export default ShopWithDrawMoneyPage