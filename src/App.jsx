import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import AllProducts from './Pages/AllProducts'
import ProductPage from './Pages/ProductPage'
import modalsContext from './Contexts/modalsContext'
import SearchInput from './Components/SearchInput'
import Cart from './Components/Cart'

function App() {

  const [isShowSearchBox, setShowSearchBox] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  const [showProductCounter, setShowProductCounter] = useState(false)

  return (
    <>
      <modalsContext.Provider value={{
        isShowSearchBox,
        setShowSearchBox,
        isShowCart,
        setIsShowCart,
        showProductCounter,
        setShowProductCounter
      }}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/products/:productID' element={<ProductPage />} />
        </Routes>
      </modalsContext.Provider>
      {/* {isShowCart && <Cart />} */}
      {/* {isShowSearchBox && <SearchInput />} */}
    </>
  )
}

export default App
