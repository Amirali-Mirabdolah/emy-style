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
import { addToCart, increaseQuantity } from '../store/cart-slice'
import BreadCrumb from '../Components/BreadCrumb'
import Loader from '../Components/Loader'

export default function ProductPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [showProductCounter, setShowProductCounter] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [isShowTrash, setIsShowTrash] = useState(false)

  const cart = useSelector((state) => state.cart)
  console.log(cart);

  const dispatch = useDispatch()
  const itemInCart = useSelector(state => state.cart.cartItems)
  const productQuantity = itemInCart[0]?.quantity
  // console.log(itemInCart[0].quantity);


  const contextData = useContext(modalsContext)
  const params = useParams()
  const productID = params.productID
  const idToString = productID.toString()

  const { data, isLoading } = useProduct(productID)
  const { id, title, slug, description, images, price } = data || {}

  const addToCartButton = () => {
    dispatch(addToCart(data))
    setShowProductCounter(true)
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
          <div className='mt-4 gap-x-6 flex justify-between'>
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
              {/* ProductCounter */}
              <div className='h-10 flex items-center'>
                <button onClick={addToCartButton} className={`${showProductCounter ? 'hidden' : 'flex'} items-center gap-x-1 px-4 py-2 cursor-pointer text-white bg-zinc-700 hover:bg-zinc-600 transition-all w-fit h-10 rounded-md`}>
                  <IoCartOutline className='size-5' />
                  Add
                </button>
                <div className={`${showProductCounter ? 'flex' : 'hidden'} items-center gap-3`}>
                  <button onClick={() => setShowProductCounter(false)} className={'border border-zinc-400 p-2 rounded-md hover:bg-zinc-400/10 cursor-pointer transition-all'}>
                    <HiOutlineTrash className='hidden text-red-500 size-5' />
                  </button>
                  <span>{productQuantity}</span>
                  <div>
                    <button onClick={() => dispatch(increaseQuantity(data))} className='border border-zinc-400 p-2 rounded-md hover:bg-zinc-400/10 cursor-pointer transition-all'>
                      <HiPlus className='text-green-600 size-5' />
                    </button>
                    {/* <button className={`${productQuantity > 1 ? '' : 'hidden'} border border-zinc-400 p-2 rounded-md hover:bg-zinc-400/10 cursor-pointer transition-all`}>
                      <HiMinus />
                    </button> */}
                  </div>
                </div>
              </div>
              {/* ProductCounter */}
            </div>
          </div>

        </div>
      </main>
      {contextData.isShowSearchBox && <SearchInput />}
    </>
  )
}
