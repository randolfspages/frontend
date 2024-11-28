import React from 'react'
import { RiStarSFill, RiStarSLine } from "react-icons/ri";



const RatingStars = ({rating}) => {

    const stars = [];
        for (let index = 1; index <= 5; index++) {
                stars.push( 
                    <span key={index}>{index <= rating ? <RiStarSFill /> : <RiStarSLine />}</span>
                    //<span key={index} className={index <= rating ? <RiStarSFill /> : <RiStarSLine />}></span>
                    //<span key={index} className={`ri-star${index <= rating ? '-fill' : '-line'}`}></span>
                )
        }

  return (
    <div className='product__rating flex justify-center'>{stars}</div>
  )
}

export default RatingStars