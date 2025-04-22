import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import AllProducts from './Pages/AllProducts'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<AllProducts/>}/>
      </Routes>
    </>
  )
}

export default App
