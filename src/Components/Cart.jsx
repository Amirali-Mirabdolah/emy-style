import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { IoMdClose } from "react-icons/io";
import modalsContext from '../Contexts/modalsContext';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import { removeFromCart } from '../store/cart-slice';

export default function Cart() {

    const contextData = useContext(modalsContext)
    const productsInCart = useSelector(state => state.cart.cartItems)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()

    const removeFromCartButton = (product) => {
        // console.log('cart: ', productsInCart);
        console.log(product);
        contextData.setShowProductCounter(false)
        dispatch(removeFromCart(product))
    }

    const closeCart = (e) => {
        if (e.target.id === "cart-wrapper" || e.target.id === "cart-close-icon") {
            contextData.setIsShowCart(false)
        }
    }

    return ReactDom.createPortal(
        <div onClick={closeCart} id='cart-wrapper' className='fixed flex items-center justify-center top-0 z-30 inset-0 bg-zinc-700/75'>
            <div className={`fixed ${contextData?.isShowCart ? 'right-0' : '-right-96'} w-[75%] md:w-96 gap-4 p-6 bg-white dark:bg-dark dark:text-white top-0 min-h-screen transition-all duration-500`}>
                <h2 className='text-lg font-bold py-3'>Cart</h2>
                <IoMdClose onClick={closeCart} id='cart-close-icon' className='absolute right-2 top-[23px] size-5 cursor-pointer' />
                {productsInCart.length ?
                    <div className='max-h-[410px] overflow-y-auto'>
                        {productsInCart.map((product) => (
                            <section key={product.id} className='border-b border-b-zinc-400 py-3 space-y-3'>
                                <div className='flex gap-x-3 items-center'>
                                    <img className='size-16 object-cover rounded-lg' src={product.images[0]} alt="" />
                                    <div>
                                        <p className='line-clamp-1 font-bold'>{product.title}</p>
                                        <p>{product.price} $</p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <Counter product={product} removeFromCartButton={() => removeFromCartButton(product)} />
                                </div>
                            </section>
                        ))}
                    </div>
                    : (<h2 className='text-center font-bold md:text-2xl'>Cart is empty</h2>)}
                <p className="font-bold my-3 text-sm/6">Total: {totalPrice} $</p>
            </div>
        </div>, document.getElementById('modals-parent')
    )
}