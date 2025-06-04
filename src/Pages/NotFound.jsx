import React from 'react'
import { TbError404 } from 'react-icons/tb'
import { Link, Navigate } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <div className='min-h-screen dark:bg-dark dark:text-white inset-0 flex items-center justify-center'>
                <div className='flex flex-col items-center gap-1'>
                    <TbError404 className='size-[96px]' />
                    <h1 className='font-black text-xl lg:text-2xl'>Page Not Found |:</h1>
                    <Link className='checkout-button mt-5 !w-1/2 text-center' to='/'>
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
