import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import ProductPage from './Pages/ProductPage'
import modalsContext from './Contexts/modalsContext'
import SearchInput from './Components/SearchInput'
import Cart from './Components/Cart'
import CategoryProducts from './Pages/CategoryProducts'
import AboutMe from './Components/AboutMe'

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
        </Routes>
        <AboutMe />
      </modalsContext.Provider>
      {/* {isShowCart && <Cart />} */}
      {/* {isShowSearchBox && <SearchInput />} */}
    </>
  )
}

export default App
