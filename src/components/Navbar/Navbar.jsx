import React from 'react';
import {assets} from "../../assets/assets";
import { NavLink } from 'react-router-dom';

const navItems = [
  {path:"/", link:"Home"},
  {path:"/menu", link:"menu"},
  {path:"/mobile-app", link:"mobile-app"},
  {path:"/contact-us", link:"contact us"},
]


const Navbar = () => {
  return (
    <header>
      <nav className='px-16 flex '>
        <img src={assets.logo} alt="" />
        <ul>
          {
            navItems.map(({path, link}) => 
              <li>
                <NavLink to={path}>{link}</NavLink>
              </li>
            )
          }
        </ul>
        <div>
          <img src={assets.search_icon} alt="" />
          <img src={assets.basket_icon} alt="" />
        </div>
        <button>Sing in</button>
      </nav>
    </header>
  )
}

export default Navbar