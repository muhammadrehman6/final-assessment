import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CartData from '../pages/CartData'
import Login from '../pages/Login'


function Routing() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<CartData />} />
       
    </Routes>
    </div>
  )
}

export default Routing