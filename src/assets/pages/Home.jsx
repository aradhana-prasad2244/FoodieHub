import React, { useState } from 'react'
import Header from '../../components/Header'
import MenuCategories from '../../components/MenuCategories'
import FoodDisplay from '../../components/foodDisplay';
import AppDownload from '../../components/AppDownload';

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>

      <Header/>
      <MenuCategories category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home