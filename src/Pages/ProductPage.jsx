import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct'
import modalsContext from '../Contexts/modalsContext'
import SearchInput from '../Components/SearchInput'
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/cart-slice'
import BreadCrumb from '../Components/BreadCrumb'
import Loader from '../Components/Loader'
import Cart from '../Components/Cart'
import Counter from '../Components/Counter'
import ProductsBox from '../Components/ProductsBox'
import useCategory from '../hooks/useCategory'

export default function ProductPage() {

  const location = useLocation().pathname

  useEffect(() => {
    window.scrollTo(0, 0)
    contextData.setShowSearchBox(false)
  }, [location])

  const contextData = useContext(modalsContext)
  const params = useParams()
  const productID = params.productID

  const { data, isLoading } = useProduct(productID)
  const { id, title, description, images, price } = data || {}

  const { data: prodcuts = [] } = useCategory(data?.category.id)


  const [showProductCounter, setShowProductCounter] = useState(false)

  const dispatch = useDispatch()
  const itemInCart = useSelector(state => state.cart.cartItems)
  const existingProduct = itemInCart.find(item => item.id === id)

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
      <main className='min-h-screen dark:bg-dark dark:text-white'>
        <div className='container mx-auto p-4 flex-col'>
          <BreadCrumb product={data} />
          <div className='mt-4 gap-x-6 md:flex items-center md:h-[480px]'>
            <div className='flex md:w-3/5 justify-center items-center py-2 md:h-96'>
              <img className='object-cover size-96 rounded-xl' src={images[0]} alt="" />
            </div>
            <div className='flex flex-col gap-4 gap-y-3 justify-center'>
              <h1 className='mb-2 text-2xl font-black'>{title}</h1>
              <p>{price} $</p>
              <div className='space-y-1'>
                <h3 className='text-lg font-black'>Description</h3>
                <p className='border-b pb-5 text-zinc-500'>{description}</p>
              </div>
              <div className='h-10 flex items-center'>
                {existingProduct ?
                  <Counter product={data} removeFromCartButton={removeFromCartButton} />
                  : <button onClick={addToCartButton} className='flex items-center gap-x-1 px-4 py-2 cursor-pointer text-white bg-zinc-700 hover:bg-zinc-600 transition-all w-fit h-10 rounded-md'>
                    <IoCartOutline className='size-5' />
                    Add
                  </button>}
              </div>
            </div>
          </div>
          <section className='my-8 space-y-6'>
            <h2 className='text-center font-bold text-lg lg:text-2xl'>{data.category.name} Products</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
              {prodcuts.map(product => (
                <Link to={`/products/${product.id}`} key={prodcuts.id}>
                  <ProductsBox {...product} />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      {contextData.isShowSearchBox && <SearchInput />}
      {contextData.isShowCart && <Cart />}
    </>
  )
}