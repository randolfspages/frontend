import React from 'react'
import { PiTruckLight } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiUserVoiceLine  } from "react-icons/ri";


const PromoBanner = () => {
  
  
    return (
    <section className='section__container banner__container text-red-700'>
        <div className='banner__card'>
            <span><PiTruckLight /></span>
            <h4>Free Delivery</h4>
            <p>Offer convience and the ability to shop anywhere, anytime</p>
        </div>

        <div className='banner__card'>
            <span><GiTakeMyMoney /></span>
            <h4>100% Money Back Guaranty</h4>
            <p>E-commerce have a review system where customers can share feedback</p>
        </div>

        <div className='banner__card'>
            <span><RiUserVoiceLine  /></span>
            <h4>Strong Support</h4>
            <p>Offer customer support services to assist customers with queries and issues</p>
        </div>
    </section>
  )
}

export default PromoBanner