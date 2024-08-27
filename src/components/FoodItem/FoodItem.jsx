import React from 'react'
import { assets } from '../../assets/assets'

const FoodItem = ({id, name, price, description, image}) => {
  return (
    <div className='inline-block w-[23.56%] gap-10 text-center mr-5 '>
        <div className='mt-10 transform rounded-lg  bg-white  dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg'>
            <div className=''>
                <img className='rounded-s-xl rounded-se-lg' src={image} alt="" />
            </div>

            <div className=''>
                <div>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p>{description}</p>
                <p>$ {price}</p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem