import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { useSelector } from 'react-redux'

export default function CheckoutPage() {

    const productsInCart = useSelector(state => state.cart)
    console.log(productsInCart.cartItems);


    return (
        <>
            <div className='min-h-screen p-4 mx-auto dark:bg-dark dark:text-white'>
                <h1 className="mb-4 font-bold text-2xl">Checkout Page</h1>
                <div className='grid gap-4 lg:grid-cols-2 *:rounded-lg *:dark:border *:dark:border-dark-hover *:shadow-sm'>
                    <div className=''>
                        <form className='space-y-4 p-4'>
                            <h2 className='font-semibold'>Shipping Information</h2>
                            <div className='grid grid-cols-12 gap-4 *:grid *:md:col-span-6 *:col-span-12 *:gap-y-2'>
                                <div>
                                    <label htmlFor="full-name" >Full Name</label>
                                    <input id='full-name' type="text" className='checkout-form__input' />
                                </div>
                                <div>
                                    <label htmlFor="email-address" >Email Address</label>
                                    <input id='email-address' type="text" className='checkout-form__input' />
                                </div>
                            </div>
                            <PhoneInput prefix='+' className='grid grid-cols-12' />
                            <div className='grid grid-span-12 gap-2'>
                                <label htmlFor="address">Address</label>
                                <input id='address' type="text" className='checkout-form__input' />
                            </div>
                            <div className='checkout-form__input !h-fit'>
                                <div className='flex items-center space-x-2'>
                                    <input type="checkbox" id='check' className='appearance-none cursor-pointer border checked:bg-dark dark:checked:bg-white size-4 rounded-full' />
                                    <label htmlFor="check" className='font-bold text-sm select-none'>I Have read and agree to Use Teams and conditionals</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='h-fit'>
                        <div className='grid p-4 gap-4'>
                            <h2 className='font-semibold'>Order Summary</h2>
                            <ul>
                                <li>Products: {productsInCart.cartItems.length} items</li>
                                <li>Discount: 0$</li>
                                <li>Total: {productsInCart.totalPrice}$</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
