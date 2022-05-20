import React from 'react'
import { BrowserRouter } from 'react-router-dom';
// import IncreaseCounter from './experimentFile/IncreaseCounter';
import Parent from './cart/Parent'

function App() {

  return (
    <BrowserRouter>
      <Parent />
    </BrowserRouter>

  )
}

export default App