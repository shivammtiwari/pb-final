import React from 'react'
import './FeaturedTreatments.css'
const FeaturedTreatments = () => {
  return (
    <div className='FeaturedTreatmentsWrapper'>
        <div className="FeaturedTreatments">
        <h1>Some Featured Beauty Treatments</h1>
        <div className='FeaturedTreatmentsCards'>
            <div className="FeaturedTreatmentsCard">
                <div className="FeaturedTreatmentsCardImage">
                    <img src="https://img.freepik.com/free-photo/layout-cosmetic-makeup-beauty-products_23-2148113429.jpg?w=900&t=st=1683523887~exp=1683524487~hmac=215a3a2b3dbd82a6e8d950e9deca7165d2b31acae1f3053180a70970fd11e620" alt="" />
                </div>
                <div className="FeaturedTreatmentsCardContent">
                    <h1>Spot Reduction</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ex repudiandae porro culpa .</p>

                </div>
            </div>
            <div className="FeaturedTreatmentsCard">
                <div className="FeaturedTreatmentsCardImage">
                    <img src="https://media.istockphoto.com/id/845708412/photo/eyelash-extension-procedure-woman-eye-with-long-eyelashes-lashes-close-up-macro-selective-focus.jpg?s=612x612&w=0&k=20&c=GRDESfELhTdQCItPCrs_sDbWs9sxxmilFhmJnK0FoIA=" alt="" />
                </div>
                <div className="FeaturedTreatmentsCardContent">
                    <h1>Eyelash Extention</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ex repudiandae porro culpa .</p>
                </div>
            </div>
            <div className="FeaturedTreatmentsCard">
                <div className="FeaturedTreatmentsCardImage">
                    <img src="https://www.forestessentialsindia.com/blog/wp-content/uploads/2021/12/1-1.jpg" alt="" />
                </div>
                <div className="FeaturedTreatmentsCardContent">
                    <h1>Herbal Skincare</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ex repudiandae porro culpa .</p>
                </div>
            </div>
            <div className="FeaturedTreatmentsCard">
                <div className="FeaturedTreatmentsCardImage">
                    <img src="https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?w=900&t=st=1683525382~exp=1683525982~hmac=e78700945ea5b67e65a0cc596a968f4f2d51aa7826b9bcad579c848b9531d37c" alt="" />
                </div>
                <div className="FeaturedTreatmentsCardContent">
                    <h1>Hair Cut</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ex repudiandae porro culpa .</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FeaturedTreatments