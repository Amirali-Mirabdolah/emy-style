import React, { useEffect } from 'react'
import useCategory from '../hooks/useCategory';
import { Link } from 'react-router-dom';
import ProductsBox from './ProductsBox';

export default function RelatedProducts({ category }) {
    const { data = [] } = useCategory(category)

    return (
        <>
            <div className='grid gap-4 grid-cols-2 md:grid-cols-5'>
                {data.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductsBox {...product} />
                    </Link>
                ))}
            </div>
        </>
    )
}
