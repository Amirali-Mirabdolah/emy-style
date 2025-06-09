import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCategoryProducts from '../hooks/useCategoryProducts'
import ProductsBox from '../Components/ProductsBox'
import Loader from '../Components/Loader'
import modalsContext from '../Contexts/modalsContext'
import SearchInput from '../Components/SearchInput'
import Cart from '../Components/Cart'

export default function CategoryProducts() {

  const contextData = useContext(modalsContext)
  const categoryId = useParams().categoryID
  const { data = [], isLoading } = useCategoryProducts(categoryId)

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <section className='p-4 space-y-4 dark:bg-dark dark:text-white min-h-screen'>
        <h1 className="font-bold text-xl md:font-black md:text-2xl">{data[1].category.name} Products</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {data.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductsBox {...product} />
            </Link>
          ))}
        </div>
      </section>
      {contextData.isShowSearchBox && <SearchInput />}
      {contextData.isShowCart && <Cart />}
    </>
  )
}
