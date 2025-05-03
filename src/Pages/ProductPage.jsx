import React, { useContext, useEffect } from 'react'
import { data, Link, useLocation, useParams } from 'react-router-dom'
import { getProduct } from '../services/product'
import useProduct from '../hooks/useProduct'
import { useQuery } from '@tanstack/react-query'
import { FaChevronRight } from "react-icons/fa6";
import modalsContext from '../Contexts/modalsContext'
import SearchInput from '../Components/SearchInput'

export default function ProductPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const contextData = useContext(modalsContext)
  const params = useParams()
  const productID = params.productID
  const idToString = productID.toString()

  //   export async function getProduct(id) {
  //     const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`,{
  //         cache:'reload'
  //     })
  //     return response.json()
  // }

  // const getProduct = (id) => {
  //   fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  //     .then(res => res.json())
  //     .then(data => console.log('response in get product: ', data))

  //   return data
  // }

  // const productInPage = ({ id }) => {
  //   const { data } = useQuery({
  //     queryKey: ["product", idToString],
  //     queryFn: () => getProduct(idToString)
  //   })
  // // }
  // console.log(data);

  const { data, isLoading } = useProduct(productID)
  //  data = { id, title, slug, description, images, price }
  const { id, title, slug, description, images, price } = data || {}

  // getProduct(idToString)
  // console.log(product);

  // fetch(`https://api.escuelajs.co/api/v1/products/${productID}`)
  //   .then(res => res.json())
  //   .then(data => console.log("data by fetch", data))
  //   .catch(error => console.error("err by fetch", error))


  // console.log(getProduct(idToString));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-zinc-800 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <>
      <main className='min-h-screen'>
        <div className='container mx-auto p-4'>
          {/* BreadCrumb */}
          <ul className='flex gap-2 *:flex *:items-center *:gap-x-1.5 '>
            <li>
              <Link to={"/"}>
                <p>Home</p>
              </Link>
              <FaChevronRight />
            </li>
            <li>
              <Link to={"/"}>
                <p>Home</p>
              </Link>
              <FaChevronRight />
            </li>
            <li>
              <Link to={"/"}>
                <p>{data?.category.slug}</p>
              </Link>
              <FaChevronRight />
            </li>
          </ul>
          {/* BreadCrumb */}
          <div className='mt-4 gap-6 flex justify-between'>
            <div className='h-96'>
              <img className='object-cover rounded-xl' src={images} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
              <h1 className='mb-2 text-2xl font-black'>{title}</h1>
              <p>{price}$</p>
              <p className='border-b pb-5'>{description}</p>
            </div>

          </div>

        </div>
      </main>
      {contextData.isShowSearchBox && <SearchInput />}
    </>
  )
}
