import React from 'react'
import {assets} from "../../assets/assets"

const AppDownload = () => {
  return (
    <div className='mt-8 flex flex-col'>
        <div className='mx-auto'>
            <p className='text-4xl font-semibold'>For Better Experience Download <br /> Tomato App</p>
            <div className='flex flex-row pt-8'>
                <img className='mr-4' src={assets.play_store} alt="" />
                <img className='ml-4' src={assets.app_store} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AppDownload