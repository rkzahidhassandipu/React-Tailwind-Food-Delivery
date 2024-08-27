import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const FoodItem = ({id, name, price, description, image}) => {
    const [itemCount, setItemCount] = useState(0)
  return (
    <div className='inline-block w-[23.56%] gap-10 text-center mr-5 '>
        <div className='mt-10 transform rounded-lg  bg-white  dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg'>
            <div className=''>
                <img className='rounded-ss-xl rounded-r-xl' src={image} alt="" />
                {
                    !itemCount
                    ?<img className='absolute top-48 left-2 w-10' onClick={() => setItemCount(prev => prev+1)} src={assets.add_icon_white} /> 
                    : <div className='flex absolute top-48 left-2 items-center'>
                        <img src={assets.remove_icon_red} onClick={() => setItemCount(prev=> prev-1)} alt="" />
                        <p className='rounded-full px-5 text-center bg-white font-semibold'>{itemCount}</p>
                        <img src={assets.add_icon_green} onClick={() => setItemCount(prev=> prev+1)} alt="" />
                    </div>
                }
            </div>

            <div className='p-3'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-2xl'>{name}</p>
                    <img className='h-5' src={assets.rating_starts} alt="" />
                </div>
                <p className='text-left py-2'>{description}</p>
                <p className='text-orange-400 font-semibold text-2xl text-left'>$ {price}</p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem