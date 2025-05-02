import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct'

export default function ProductPage() {

  const params = useParams()
  const productID = params.productID
  const idToString = productID.toString()

  const { data } = useProduct(idToString)
  // console.log(data);

  fetch('https://api.escuelajs.co/api/v1/products/<5>')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))


  // console.log(getProduct(idToString));



  return (
    <div>
      ProductPage
      <div className='flex justify-center items-center'>
        <h1></h1>
      </div>
    </div>
  )
}
