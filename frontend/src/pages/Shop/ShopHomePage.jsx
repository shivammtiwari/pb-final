import React from 'react'
import ShopInfo from "../../components/Parlour/ParlourInfo";
import ShopProfileData from "../../components/Parlour/ParlourProfileData";

const ShopHomePage = () => {
  return (
        <div>
        <ShopInfo isOwner={true} />
        <ShopProfileData isOwner={true} />
        </div>

  )
}

export default ShopHomePage