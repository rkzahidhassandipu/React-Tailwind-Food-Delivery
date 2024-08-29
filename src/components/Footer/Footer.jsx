import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='px-16 mt-12 bg-slate-950 py-10 text-white'>
      <div className='flex flex-row'>
        <div className='basis-2/2'>
          <img src={assets.logo} alt="" />
          <p className='py-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nostrum dolorum cupiditate aut labore laborum dignissimos? Ipsum sequi possimus ad corporis, eos, sed enim obcaecati numquam quod accusamus dolor doloremque.</p>
          <div className='flex flex-row pb-8'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='basis-2/5'>
          <h2 className='text-2xl font-Outfit'>COMPANY</h2>
          <ul className='pt-5'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='basis-2/5'>
          <h2 className='text-2xl font-Outfit'>GET IN TOUCH</h2>
          <ul className='pt-5'>
            <li>+1-215-562-786</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='pt-5'>Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer