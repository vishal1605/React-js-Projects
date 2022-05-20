import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Header from './Header'
import Main from './Main'
import './parent.css'

function Parent() {
  return (
    <div className="container">
        <Header />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default Parent