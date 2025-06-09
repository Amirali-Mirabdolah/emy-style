import React, { useEffect } from 'react'
import useCategory from '../hooks/useCategory';
import { Link } from 'react-router-dom';
import ProductsBox from './ProductsBox';

export default function RelatedProducts({ category }) {
    const { data = [] } = useCategory(category)

    return (
        <>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {data.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductsBox {...product} />
                    </Link>
                ))}
            </div>
        </>
    )
}
