import React, { useContext, useEffect, useState } from 'react'
import { data, Link, useLocation, useParams } from 'react-router-dom'
import { getProduct } from '../services/product'
import useProduct from '../hooks/useProduct'
import { useQuery } from '@tanstack/react-query'
import { FaChevronRight } from "react-icons/fa6";
import modalsContext from '../Contexts/modalsContext'
import SearchInput from '../Components/SearchInput'
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../store/cart-slice'
import BreadCrumb from '../Components/BreadCrumb'
import Loader from '../Components/Loader'
import Cart from '../Components/Cart'
import Counter from '../Components/Counter'

export default function ProductPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const contextData = useContext(modalsContext)
  const isShowProductCounter = contextData.isShowProductCounter

  const params = useParams()
  const productID = params.productID

  const { data, isLoading } = useProduct(productID)
  const { id, title, slug, description, images, price } = data || {}

  const [showProductCounter, setShowProductCounter] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [isShowTrash, setIsShowTrash] = useState(false)

  const cart = useSelector((state) => state.cart)
  // console.log('cart.cartItems :', cart.cartItems);

  const dispatch = useDispatch()
  const itemInCart = useSelector(state => state.cart.cartItems)
  // const productQuantity = itemInCart[0]?.quantity

  const existingProduct = itemInCart.find(item => item.id === id)
  console.log('existingProduct: ', existingProduct)
  // console.log(itemInCart[0].quantity);

  const addToCartButton = () => {
    dispatch(addToCart(data))
    setShowProductCounter(true)
  }

  const removeFromCartButton = () => {
    setShowProductCounter(false)
    dispatch(removeFromCart(data))
  }

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <main className='min-h-screen'>
        <div className='container mx-auto p-4'>
          <BreadCrumb product={data} />
          <div className='mt-4 gap-x-6 flex items-center'>
            <div className='h-96'>
              <img className='object-cover rounded-xl' src={images} alt="" />
            </div>
            <div className='flex flex-col gap-4 gap-y-3 justify-center'>
              <h1 className='mb-2 text-2xl font-black'>{title}</h1>
              <p>{price}$</p>
              <div className='space-y-1'>
                <h3 className='text-lg font-black'>Description</h3>
                <p className='border-b pb-5 text-zinc-500'>{description}</p>
              </div>
              <div className='h-10 flex items-center'>
                {existingProduct ?
                  <Counter product={data} removeFromCartButton={removeFromCartButton} />
                  : <button onClick={addToCartButton} className={`${showProductCounter ? 'hidden' : 'flex'} items-center gap-x-1 px-4 py-2 cursor-pointer text-white bg-zinc-700 hover:bg-zinc-600 transition-all w-fit h-10 rounded-md`}>
                    <IoCartOutline className='size-5' />
                    Add
                  </button>}
              </div>
            </div>
          </div>

        </div>
      </main>
      {contextData.isShowSearchBox && <SearchInput />}
      {contextData.isShowCart && <Cart />}
    </>
  )
}
