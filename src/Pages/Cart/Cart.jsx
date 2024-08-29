import React, { useContext } from 'react'
// import {StoreContextProvider} from "../../context/StoreContext"
import {StoreContext} from '../../context/StoreContext';
import CartItems from '../../components/CartItems/CartItems';

const Cart = () => {
  return (
    <CartItems />
  )
}

export default Cart