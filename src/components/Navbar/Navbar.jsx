import React, { useState } from 'react';
import {assets} from "../../assets/assets";
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';
import Cart from '../../Pages/Cart/Cart';

const navItems = [
  {path:"/", link:"Home"},
  {path:"/menu", link:"Menu"},
  {path:"/mobile-app", link:"Mobile-app"},
  {path:"/contact-us", link:"Contact us"},
]


const Navbar = ({setShowLogin}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className='mx-auto '>
      <nav className='px-16 py-5 flex justify-between'>
        <Link to='/'> <img className='w-20 h-8' src={assets.logo} alt="" /></Link>
        <ul className='md:flex items-center hidden'>
          {
            navItems.map(({path, link}) => 
              <li key={path} className='px-6'>
                <NavLink className={({isActive, isPending}) => isActive ? "active" : "pending"} to={path}>{link}</NavLink>
              </li>
            )
          }
        </ul>
        <div className='flex items-center md:justify-end'>
          <img className='mx-2 w-6 h-6' src={assets.search_icon} alt="" />
          <Link to='/cart'><img className='mx-2 w-6 h-6' src={assets.basket_icon} alt="" /></Link>
          <button className='border border-orange-500 rounded-full w-24 py-1 mx-2' onClick={() => setShowLogin(true)}>Sing in</button>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='cursor-pointer ml-6'>
              {
                isMenuOpen ? <FaXmark /> : <FaBars />
              }
            </button>
          </div>
        </div>
      </nav>

      <div>
        <ul className={`md:hidden px-16 py-4 space-y-4 ${isMenuOpen ? "transition-all ease-out duration-1000":"hidden"}`}>
          {
            navItems.map(({path, link}) => <li className='' key={path}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>)
          }
        </ul>
      </div>
    </header>
  )
}

export default Navbar