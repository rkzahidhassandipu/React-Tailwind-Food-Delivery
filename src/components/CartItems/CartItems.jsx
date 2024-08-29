import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const CartItems = ({ category }) => {
    const {cartItems, food_list, removeFromCart} = useContext(StoreContext)
    return (
        <div>
            <div>
                <div>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                </div>
        
                <br />
                <hr />
                {
                food_list.map((item, index) => {
                    if(cartItems[item._id] > 0){
                        return (
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                        )
                    }
                })
                }
            </div>
        </div>
    )
};

export default CartItems;

