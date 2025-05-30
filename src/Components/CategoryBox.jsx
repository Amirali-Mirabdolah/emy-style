import React from 'react'

export default function CategoryBox({ image, name, creationAt }) {
    return (
        <>
            <div className='flex items-center h-[90px] gap-4 rounded-lg border border-zinc-300 dark:border-dark-border dark:hover:ring-white p-4 hover:ring-2 hover:ring-zinc-900 transition-all duration-200'>
                <img className='size-14 object-cover rounded-md' src={image} alt="category" />
                <div className='truncate'>
                    <p className='font-semibold text-sm'>{name}</p>
                    <p className='text-zinc-400 text-xs/5'>{creationAt.slice(0, 7)}</p>
                </div>
            </div>
        </>
    )
}
