import React, { useState } from 'react';
import {assets} from "../../assets/assets";
import { NavLink } from 'react-router-dom';

const navItems = [
  {path:"/", link:"Home"},
  {path:"/menu", link:"Menu"},
  {path:"/mobile-app", link:"Mobile-app"},
  {path:"/contact-us", link:"Contact us"},
]


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className='mx-auto '>
      <nav className='px-16 py-5 flex justify-between'>
        <img className='w-20 h-8' src={assets.logo} alt="" />
        <ul className='md:flex items-center hidden'>
          {
            navItems.map(({path, link}) => 
              <li key={path} className='px-6'>
                <NavLink className={({isActive, isPending}) => isActive ? "active" : "pending"} to={path}>{link}</NavLink>
              </li>
            )
          }
        </ul>
        <div className='flex items-center'>
          <img className='mx-2 w-6 h-6' src={assets.search_icon} alt="" />
          <img className='mx-2 w-6 h-6' src={assets.basket_icon} alt="" />
          <button className='border border-orange-500 rounded-full w-24 py-1 mx-2'>Sing in</button>
        </div>
        
        <div>
          
        </div>

      </nav>
    </header>
  )
}

export default Navbar