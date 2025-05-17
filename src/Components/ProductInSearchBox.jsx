import React from 'react'

function ProductInSearchBox({ id, title, images, price }) {

  return (
    <div className='flex items-center gap-4 py-2 border-b border-b-zinc-300'>
      <img src={images[0]} alt="product" className='size-16 rounded-lg object-cover' />
      <div>
        <p className='line-clamp-1 font-medium text-sm/6'>{title}</p>
        <p className='text-xs text-zinc-500'>{price} $</p>
      </div>
    </div>
  )
}

export default ProductInSearchBox