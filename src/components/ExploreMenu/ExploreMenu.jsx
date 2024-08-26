import React from 'react'
import {menu_list} from "../../assets/assets"

const ExploreMenu = () => {
  return (
    <div>
        <h1>Explore our menu</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum atque architecto ab at similique saepe. Sed, aliquam perspiciatis. Sint quos omnis maxime. Quis aperiam nihil, laborum esse fugit in laboriosam.</p>

        <div>
            {
                menu_list.map((item, index) => {
                    return (
                        <div>
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ExploreMenu