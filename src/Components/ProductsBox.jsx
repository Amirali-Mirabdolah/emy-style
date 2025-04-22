import React from 'react'

export default function ProductsBox() {
    return (
        <>
            <div className='grid grid-cols-3 gap-2'>
                <a href="#">
                    <figure className='relative aspect-square rounded-xl overflow-hidden'>
                        <img src="../public/images/hero.jpg" alt="" className='size-full object-cover shrink-0 rounded-xl duration-300 hover:scale-110'/>
                    </figure>
                    <div>
                        <h4>con frutas</h4>
                        <p>$55.00</p>
                        <p className='mt-2 rounded-md w-fit p-2 font-medium text-xs shadow-sm bg-zinc-200'>Clothing</p>
                    </div>
                </a>
            </div>
        </>
    )
}
