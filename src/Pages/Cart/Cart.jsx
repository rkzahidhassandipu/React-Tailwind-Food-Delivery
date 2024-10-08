import React, { useState } from 'react'
import StoreContextProvider from '../../context/StoreContext';
import CartItems from '../../components/CartItems/CartItems';

const Cart = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <StoreContextProvider>
        <CartItems category={category} />
      </StoreContextProvider>
    </div>
  )
}

export default Cart
