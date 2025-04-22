import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import ProductsBox from '../Components/ProductsBox';

export default function HomePage() {
  return (
    <>
      <main className='min-h-screen'>
        <div className='relative flex flex-col items-center gap-4 justify-center h-[400px] lg:h-[600px]'>
          <div className='-z-10 absolute top-0 left-0 size-full bg-black/55 gap-4 px-4 py-20'></div>
          <img src="../public/images/hero.jpg" alt="store" className='absolute -z-20 size-full object-cover' />
          <h1 className='text-3xl text-white font-bold lg:text-5xl'>A Minimal E-commerce Platform</h1>
          <p className='text-white lg:text-xl'>built whith ReactJS and Tailwind CSS</p>
        </div>
      </main>

      <section className='container mx-auto p-4'>
        <div className='flex w-full justify-between items-center'>
          <h4>Featured Products</h4>
          <Link to="/products" className='inline-flex items-center justify-center h-9 rounded-md px-3 gap-2 hover:bg-zinc-100 transition-all'>
            All Products
            <FaArrowRightLong />
          </Link>
        </div>
        <ProductsBox/>
      </section>

    </>
  )
}