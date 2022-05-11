import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Content from './components/Content'
import Navbar from './components/Navbar'
import RegisterData from './components/RegisterData'

function App() {

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

export default App