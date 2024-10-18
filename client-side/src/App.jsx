import React from 'react'
import { Router, Routes } from 'react-router-dom'
import Home from './pages/Home';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Router path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App


