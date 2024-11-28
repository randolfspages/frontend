import React from 'react'
import { Link } from 'react-router-dom' 


const cards = [
  {id:1, image:'/card-1.png', trend:'2024 Trend', title:'Women\'s CanivalWear'},
  {id:2, image:'/card-2.png', trend:'2024 Trend', title:'Women\'s Dresses'},
  {id:3, image:'/card-3.png', trend:'2024 Trend', title:'Women\'s Casuals'},
]

const HeroSection = () => {
  
  return (
    <section className='section__container hero__container container mx-auto px-4'>
       { cards.map((card) => (
          <div key={card.id} className='hero__card'>
              <Link to='/shop'><img src={card.image} alt="" /></Link>
              <div className='hero__content'>
                  <p>{card.trend}</p>
                  <h4>{card.title}</h4>
                  <Link to="/shop">Discover More</Link>
  
              </div>
          </div>
       ))
       
       }
    </section>
  )
}

export default HeroSection