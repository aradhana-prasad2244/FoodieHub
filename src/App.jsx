import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Cart from './assets/pages/Cart'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginForm setShowLogin={setShowLogin}/>:<></>}
    <div className='w-full bg-white relative select-none'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
