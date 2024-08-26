import React from 'react';
import {assets} from "../../assets/assets";
import { NavLink } from 'react-router-dom';

const navItems = [
  {path:"/", link:"Home"},
  {path:"/menu", link:"Menu"},
  {path:"/mobile-app", link:"Mobile-app"},
  {path:"/contact-us", link:"Contact us"},
]


const Navbar = () => {
  return (
    <header>
      <nav className='px-16 py-5 flex justify-between'>
        <img src={assets.logo} alt="" />
        <ul className='md:flex items-center'>
          {
            navItems.map(({path, link}) => 
              <li key={path} className='px-10'>
                <NavLink className={({isActive, isPending}) => isActive ? "active" : "pending"} to={path}>{link}</NavLink>
              </li>
            )
          }
        </ul>
        <div className='md:flex'>
          <img src={assets.search_icon} alt="" />
          <img src={assets.basket_icon} alt="" />
          <button>Sing in</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar