import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import AllProducts from './Pages/AllProducts'
import ProductPage from './Pages/ProductPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:productID' element={<ProductPage/>}/>
      </Routes>
    </>
  )
}

export default App
