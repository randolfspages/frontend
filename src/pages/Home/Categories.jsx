import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

    const categories = [
        {name:'accessories', path:'/categories/:accessories', image:'/productImages/AfricanAccessories1.jpeg'},
        {name:'dress', path:'/categories/:dresses', image:'/productImages/AfricanWear3.jpg'},
        {name:'jewellery', path:'/categories/:jewelleries', image:'/productImages/AfricanJewelry1.jpeg'},
        {name:'cosmetics', path:'/categories/:comestics', image:'/productImages/AfricanCosmetic1.jpg'},

    ]
  return (
    <>
    <div className='product__grid'>
        {
            categories.map((category) => (
                <Link key={category.name} to={`/categories/${category.name}`} className='categories__card'>
                    <img src={category.image} alt={category.name} />
                    <h4>{category.name}</h4>
                </Link>
            ))
        }
    </div>

    </>
  )
}

export default Categories