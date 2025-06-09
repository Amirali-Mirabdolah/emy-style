import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import ProductsBox from '../Components/ProductsBox';
import useProducts from '../hooks/useProducts';
import modalsContext from '../Contexts/modalsContext';
import SearchInput from '../Components/SearchInput';
import Loader from '../Components/Loader';
import Cart from '../Components/Cart';

export default function HomePage() {
  const contextData = useContext(modalsContext)
  const { data, isError, error, isLoading } = useProducts('10')

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <main className='min-h-screen dark:bg-dark'>
        <div className='relative flex flex-col items-center gap-4 justify-center h-[400px] lg:h-[600px]'>
          <img src="/images/hero.jpg" alt="store" className='absolute size-full object-cover brightness-50' />
          <h1 className='text-center text-2xl text-white font-bold lg:text-5xl z-10'>A Minimal E-commerce Platform</h1>
          <p className='text-white lg:text-xl z-10'>Built with ReactJS and Tailwind CSS</p>
        </div>
        <section className='container mx-auto p-4 dark:bg-dark dark:text-white'>
          <div className='flex w-full justify-between items-center mb-4'>
            <h4 className='text-lg xl:text-2xl font-bold'>Featured Products</h4>
            <Link to="/products" className='inline-flex items-center justify-center h-9 rounded-md px-3 gap-2 hover:bg-zinc-100 dark:hover:bg-dark-hover transition-all'>
              All Products
              <FaArrowRightLong />
            </Link>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {data?.map((products) => (
              <Link to={`/products/${products.id}`} key={products.id}>
                <ProductsBox {...products} />
              </Link>
            ))}
          </div>
        </section>
      </main>
      {contextData.isShowSearchBox && <SearchInput />}
      {contextData.isShowCart && <Cart />}
    </>
  )
}