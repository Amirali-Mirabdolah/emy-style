import React from 'react'

export default function ProductsBox({ images, title, price, category }) {
    return (
        <>
            <div>
                <figure className='relative aspect-square rounded-xl overflow-hidden'>
                    <img src={images[0]} alt="product image" className='size-full object-cover shrink-0 rounded-xl duration-300 hover:scale-110' />
                </figure>
                <div>
                    <h4 className='line-clamp-1 lg:line-clamp-2'>{title}</h4>
                    <p>{price}$</p>
                    <p className='mt-2 rounded-md w-fit p-2 font-medium text-xs shadow-sm bg-zinc-200'>{category.slug}</p>
                </div>
            </div>
        </>
    )
}
