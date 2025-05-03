import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import ProductsBox from '../Components/ProductsBox';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useProducts from '../hooks/useProducts';
import modalsContext from '../Contexts/modalsContext';
import SearchInput from '../Components/SearchInput';

export default function HomePage() {


  const contextData = useContext(modalsContext)

  // const queryClient = useQueryClient()
  const { data, error, isLoading } = useProducts()
  console.log(data);

  // fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
  //   .then(res => res.json())
  //   .then(res => console.log(res))

  if (isLoading) {
    return <p>Loading ...</p>
  }

  return (
    <>
      <main className='min-h-screen'>
        <div className='relative flex flex-col items-center gap-4 justify-center h-[400px] lg:h-[600px]'>
          <div className='-z-10 absolute top-0 left-0 size-full bg-black/55 gap-4 px-4 py-20'></div>
          <img src="../public/images/hero.jpg" alt="store" className='absolute -z-20 size-full object-cover' />
          <h1 className='text-3xl text-white font-bold lg:text-5xl'>A Minimal E-commerce Platform</h1>
          <p className='text-white lg:text-xl'>built whith ReactJS and Tailwind CSS</p>
        </div>
      

      <section className='container mx-auto p-4'>
        <div className='flex w-full justify-between items-center mb-4'>
          <h4 className='text-lg xl:text-2xl font-bold'>Featured Products</h4>
          <Link to="/products" className='inline-flex items-center justify-center h-9 rounded-md px-3 gap-2 hover:bg-zinc-100 transition-all'>
            All Products
            <FaArrowRightLong />
          </Link>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-4'>
          {data?.map((products) => (
            <Link to={`/products/${products.id}`} key={products.id}>
              <ProductsBox {...products} />
            </Link>

          ))}
        </div>
      </section>
      </main>
      {contextData.isShowSearchBox && <SearchInput />}
    </>
  )
}