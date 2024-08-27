import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    // Filter the food_list by category
    const filteredFood = food_list.filter(food => food.category === category);

    return (
        <div>
           <h2>Top dishes near you</h2>
           <div>
            {
                food_list.map((item, index) => {
                    {console.log(category, item.category)}
                    if(category === "All" || category === item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                   
                })
            }
           </div>
        </div>
    );
};

export default FoodDisplay;

