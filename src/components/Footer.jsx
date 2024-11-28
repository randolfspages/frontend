import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";


const Footer = () => {


  return (
    <>
        <footer className='section__container footer__container'>
                <div className='foot__col'>
                    <h4>CONTACT INFO</h4>
                    <p>
                        <span><FaMapLocationDot /></span>
                        55 Aviation Road Airport Residential Area, Accra-Ghana.
                    </p>
                    <p>
                        <span><MdEmail /></span>
                        support@spread.com
                    </p>

                    <p>
                        <span><IoCallSharp /></span>
                        00233 244 11 222 333 4545
                    </p>
                </div>

                <div className='footer__col'>
                    <h4>COMPANY</h4>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Work With Us</a>
                    <a href="/">Our Blog</a>
                    <a href="/">Terms and Condition</a>
                </div>

                <div className='footer__col'>
                    <h4>USEFUL LINKS</h4>
                    <a href="/">Help</a>
                    <a href="/">Track My Order</a>
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">Dresses</a>
                </div>

                <div className='footer__col'>
                    <h4>INSTAGRAM</h4>
                    <div className='instagram__grid'>
                        <img src="/instagram-1.jpg" alt="" />
                        <img src="/instagram-2.jpg" alt="" />
                        <img src="/instagram-3.jpg" alt="" />
                        <img src="/instagram-4.jpg" alt="" />
                        <img src="/instagram-5.jpg" alt="" />
                        <img src="/instagram-6.jpg" alt="" />
                    </div>
                </div>
        </footer>

        <div className='footer__bar'>
            Copyright &copy; 2025 by Spread, All rights reserved.
        </div>
    </>
  )
}

export default Footer