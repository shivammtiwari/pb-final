import React from 'react'
import ParlourInfo from "../../components/Parlour/ParlourInfo";
import ParlourProfileData from "../../components/Parlour/ParlourProfileData";
import Header from '../../components/Layout/Header'

const ParlourPreviewPage = () => {
  return (
    <> 
    <Header/>
    <ParlourInfo isOwner={false} />
      <ParlourProfileData isOwner={false} />
    </>
  )
}

export default ParlourPreviewPage