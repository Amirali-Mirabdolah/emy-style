import React from 'react'
// import useCategory from '../hooks/useCategory'
import { Link, useParams } from 'react-router-dom'
import useCategoryProducts from '../hooks/useCategoryProducts'
import ProductsBox from '../Components/ProductsBox'
import Loader from '../Components/Loader'

export default function CategoryProducts() {

  const categoryId = useParams().categoryID
  console.log(categoryId);

  const { data = [], isLoading } = useCategoryProducts(categoryId)
  console.log('data in catpro ', data);

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <section className='p-4 space-y-4'>
        <h1 className="font-bold text-xl md:font-black md:text-2xl">All Products</h1>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {data.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductsBox {...product} />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
