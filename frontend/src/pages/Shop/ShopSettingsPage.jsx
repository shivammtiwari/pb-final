import React from "react";
import ParlourSettings from "../../components/Parlour/ParlourSettings";
import DashboardHeader from "../../components/Parlour/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Parlour/Layout/DashboardSideBar";

const ShopSettingsPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={11} />
        </div>
        <ParlourSettings />
      </div>
    </div>
  );
};

export default ShopSettingsPage;
