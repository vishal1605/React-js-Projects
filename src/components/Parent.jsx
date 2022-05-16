import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RegisterData from './RegisterData';
import Navbar from './Navbar';
import Content from './Content';


function Parent() {

  const [data, setData] = useState([])

  function fetchSearch(e){
    setData(e);
  }


  return (
    <div className="container">
      <Navbar searchResult={fetchSearch}/>
      <Routes>
        <Route exact path='/' element={<Navigate to={`/1`} />}/>
        <Route exact path='add' element={<RegisterData />}/>
        <Route exact path='/:page' element={<Content searchData={data}/>}/>
      </Routes>
    </div>
  )
}

export default Parent