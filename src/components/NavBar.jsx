import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaXmark} from 'react-icons/fa6'
import {useState} from 'react'



const NavBar = () => {

    
                


    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {path:'/',  link:'Home'},
        {path:'/shop',  link:'Shop'},
    ]

    const navItems1 = [
        {path:'/pages',  link:'Pages'},
        {path:'/contact',  link:'Contact'},
    ]

    const navItems2 = [
        {path:'/',  link:'Home'},
        {path:'/shop',  link:'Shop'},
        {path:'/pages',  link:'Pages'},
        {path:'/contact',  link:'Contact'},
    ]

// bg-neutral-200
    
  return (
    <header className='bg-red-700 text-stone-200 fixed top-0 left-0 right-0 shadow-md' style={{zIndex:'100'}}>
        <nav className='px-5 py-5 max-w-7xl mx-auto flex justify-between items-center'>

            <ul className='md:flex gap-6 hidden'>
                {
                    navItems.map(({path, link}) => 
                    <li key={path}>
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            <Link to="/"><span className='md:font-extrabold md:text-3xl text-xl font-bold'>BESIA</span><span className='font-extralight text-xs'>&copy;</span></Link>

            <ul className='md:flex gap-6 hidden'>
                {
                    navItems1.map(({path, link}) => 
                    <li key={path}>
                        <NavLink to={path}>{link}</NavLink>
                    </li>
                    )
                }
            </ul>
{/* Mobile menu button, display mobile screen */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-7 h-7'/> : <FaBars className='w-7 h-7' />
                    }
                </button>
            </div>
        </nav>

{/* Only for mobile */}
        <div className='text-center text-white'>
        <ul className={`md:hidden block space-y-12 py-6 px-4 bg-black text-lg ${isMenuOpen ? 'fixed left-0 w-full transition-all ease-out duration-150' : 'hidden'}`}>
                {
                    navItems2.map(({path, link}) => 
                    <li key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

        </div>
    </header>
  )
}

export default NavBar