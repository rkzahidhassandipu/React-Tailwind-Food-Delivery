import React, { useContext, useState } from 'react'
import StoreContextProvider, {StoreContext} from '../../context/StoreContext';
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
