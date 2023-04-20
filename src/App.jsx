import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CryptoDetails from './pages/CryptoDetails'
import Navbar from './components/Navbar'



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/coin' element={<CryptoDetails />}>
          <Route path=':coinId' element={<CryptoDetails />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
