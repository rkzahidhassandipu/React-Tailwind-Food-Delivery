import React from 'react';
import {assets} from "../../assets/assets";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className=' font-Outfit'>
        <img src={assets.logo} alt="" />
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to='/menu'>menu</Link>
          </li>
          <li>
            <Link to='/mobile'>mobile-app</Link>
          </li>
          <li>
            <Link to='/contact'>contact us</Link>
          </li>
        </ul>
        <div>
          <img src={assets.search_icon} alt="" />
          <div>
            <img src={assets.basket_icon} alt="" />
            <div></div>
          </div>
        </div>
    </div>
  )
}

export default Navbar