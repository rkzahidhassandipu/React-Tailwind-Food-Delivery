import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import {menu_list} from "../../assets/assets"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div>
        <h1 className='text-3xl font-semibold my-6'>Explore our menu</h1>
        <p className='font-Outfit mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum atque architecto ab at similique saepe. <br /> Sed, aliquam perspiciatis. Sint quos omnis maxime. Quis aperiam nihil, laborum esse fugit in laboriosam.</p>
     <Swiper
        slidesPerView={8}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className='flex'>
            {
                menu_list.map((item, index) => {
                    return (
                        <SwiperSlide key={index} onClick={()=>setCategory(prev =>prev ===item.menu_name?"All":item.menu_name)}>
                            <img className={`rounded-full mx-auto ${category === item.menu_name?"menuActive": ""}`} src={item.menu_image} alt="" />
                            <p className='text-center'>{item.menu_name}</p>
                        </SwiperSlide>
                    )
                })
            }
        </div>
      </Swiper>
    </div>
  )
}

export default ExploreMenu