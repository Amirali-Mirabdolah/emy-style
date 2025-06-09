import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import ProductPage from './Pages/ProductPage'
import modalsContext from './Contexts/modalsContext'
import CategoryProducts from './Pages/CategoryProducts'
import AboutMe from './Components/AboutMe'
import CheckoutPage from './Pages/CheckoutPage'
import NotFound from './Pages/NotFound'
import AllProducts from './Pages/AllProducts'

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme'))
  const [isShowSearchBox, setShowSearchBox] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  const [showProductCounter, setShowProductCounter] = useState(false)

  const toggleDarkMode = () => {
    const themeMode = darkMode ? 'light' : 'dark'
    setDarkMode(!darkMode)
    localStorage.setItem('theme', themeMode)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <>
      <modalsContext.Provider value={{
        isShowSearchBox,
        setShowSearchBox,
        isShowCart,
        setIsShowCart,
        showProductCounter,
        setShowProductCounter,
        darkMode,
        setDarkMode
      }}>
        <Header toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories/:categoryID' element={<CategoryProducts />} />
          <Route path='/products/:productID' element={<ProductPage />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <AboutMe />
      </modalsContext.Provider>
    </>
  )
}

export default App
