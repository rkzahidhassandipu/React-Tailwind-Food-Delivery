import React from 'react';
import {assets} from "../../assets/assets";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex justify-between px-20 py-5'>
        <img src={assets.logo} alt="" />
        <ul className='flex justify-center items-center '>
          <li className='mx-6'>
            <Link to="/">home</Link>
          </li>
          <li className='mx-6'>
            <Link to='/menu'>menu</Link>
          </li>
          <li className='mx-6'>
            <Link to='/mobile'>mobile-app</Link>
          </li>
          <li className='mx-6'>
            <Link to='/contact'>contact us</Link>
          </li>
        </ul>
        <div className='flex'>
          <img src={assets.search_icon} alt="" />
          <div>
            <img src={assets.basket_icon} alt="" />
            <div></div>
          </div>
          <button className='border w-32 rounded-full '>Sing in</button>
        </div>
    </div>
  )
}

export default Navbar