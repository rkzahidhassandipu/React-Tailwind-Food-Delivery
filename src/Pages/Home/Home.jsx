import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import StoreContextProvider from '../../context/StoreContext'

const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div className='px-16'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      
      <StoreContextProvider>
      <FoodDisplay category={category} />
      </StoreContextProvider>
    </div>
  )
}

export default Home