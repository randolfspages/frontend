import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from 'react-router-dom';




const SubBanner = () => {

    
  return (
    <div>
        <div className='overlay'></div>
        <div className='wrapper'>
            <main className='container mx-auto z-3 pt-40 px-2 md:flex items-center shadow-sm bg-red-50'>
                <div>
                    <h1 className='banner-text text-5xl lg:text-7xl text-red-700 leading-snug font-extrabold'>
                        SUPER SALES - 50%
                    </h1>
                    <h1 className='banner-text text-4xl lg:text-7xl leading-snug font-extrabold'>
                        Authentic African apparel without the price tag
                    </h1>
                    <p className="sub-heading">No need to spend $XXX on apparel just for the name's sake.
                        Our premium apparel is made from the same stuff.
                    </p>

                    <div className="banner-btns ">
                        <button className="browse-collection-btn  text-black hover:bg-neutral-200 hover:text-slate-500"><Link to='/shop'>Browse collections</Link></button>
                        <span href="#" className="banner-text-btn text-red-700 uppercase"><Link to='#'>Winter '24 Collection</Link></span>
                        <button><CgArrowLongRight className="arrow md:text-3xl text-2xl text-red-600" /></button>
                    </div>
                </div>
                <div className='header__image m-0'>
                    <img src="/productImages/HERO_BANNER.png" width={700} alt="" />
                </div>
            </main>
        </div>
        

    </div>
  )
}

export default SubBanner