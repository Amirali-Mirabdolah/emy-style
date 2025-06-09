import React, { useContext } from 'react'
import useProducts from '../hooks/useProducts'
import Loader from '../Components/Loader'
import ProductsBox from '../Components/ProductsBox'
import { Link } from 'react-router-dom'
import modalsContext from '../Contexts/modalsContext'
import SearchInput from '../Components/SearchInput'
import Cart from '../Components/Cart'

export default function AllProducts() {

    const { data = [], isLoading } = useProducts('')
    const contextData = useContext(modalsContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <div className='min-h-screen dark:bg-dark dark:text-white p-4 space-y-4'>
                <h1 className="font-bold text-xl md:font-black md:text-2xl">All Products</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {data.map((products) => (
                        <Link to={`/products/${products.id}`} key={products.id}>
                            <ProductsBox {...products} />
                        </Link>
                    ))}
                </div>
            </div>
            {contextData.isShowSearchBox && <SearchInput />}
            {contextData.isShowCart && <Cart />}
        </>
    )
}
