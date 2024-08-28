import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import StoreContextProvider from '../../context/StoreContext'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div className='px-16'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      
      <StoreContextProvider>
      <FoodDisplay category={category} />
      </StoreContextProvider>
      <AppDownload />
    </div>
  )
}

export default Home