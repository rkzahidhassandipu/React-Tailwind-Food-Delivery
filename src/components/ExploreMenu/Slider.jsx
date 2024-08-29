import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import {menu_list} from "../../assets/assets"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >

            <div>
                {
                    menu_list.map((item, index) => {
                        return (
                            <SwiperSlide className={({EActive, UnActive}) => EActive ? "PActive":"unActive"}>
                                <img src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </div>
       
      </Swiper>
    </>
  );
}