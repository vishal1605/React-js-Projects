import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Feeds from './Feeds';
import LoginForm from './LoginForm';

import Navbar from './Navbar';
import Register from './Register';


function Parent() {
  const [count, setCount] = useState(0);

  function countFunction(a) {
    setCount(pre=>pre+1);
  }



  return (
    <div className="container">
      <Navbar sendCount={count} />
      <Routes>
        <Route path='/logout' element={<Navigate to={`/login`} />} />
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<LoginForm getCount={countFunction} />} />
        <Route path='/feeds' element={(JSON.parse(localStorage.getItem('user'))!==null)? <Feeds />: <Navigate to={`/login`} />} />

      </Routes>

    </div>
  )
}

export default Parent