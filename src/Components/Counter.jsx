import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../store/cart-slice'
import { HiMinus, HiOutlineTrash, HiPlus } from 'react-icons/hi'

export default function Counter({ product,removeFromCartButton }) {

    const dispatch = useDispatch()
    const itemsInCart = useSelector(state => state.cart.cartItems)
    // console.log("couter state",itemsInCart);
    // console.log("product in couter",product);

    const existingProduct = itemsInCart.find(item => item.id === product.id)
    // console.log("counter: ", existingProduct);

    return (
        <>
            <div className='flex items-center gap-3'>
                <button onClick={removeFromCartButton} className={`${existingProduct.quantity > 1 ? 'hidden' : ''} border border-zinc-400 p-2 rounded-md hover:bg-zinc-400/10 cursor-pointer transition-all`}>
                    <HiOutlineTrash className='text-red-500 size-5' />
                </button>
                <button onClick={() => dispatch(decreaseQuantity(product))} className={`${existingProduct.quantity > 1 ? '' : 'hidden'} border border-zinc-400 p-2 rounded-md hover:bg-zinc-400/10 cursor-pointer transition-all`}>
                    <HiMinus className='text-red-500 size-5' />
                </button>
                <span>{existingProduct.quantity}</span>
                <div>
                    <button onClick={() => dispatch(increaseQuantity(product))} className='border border-zinc-400 p-2 rounded-md hover:bg-zinc-400/10 cursor-pointer transition-all'>
                        <HiPlus className='text-green-600 size-5' />
                    </button>
                </div>
            </div>
        </>
    )
}