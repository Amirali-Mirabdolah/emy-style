import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { IoMdClose } from "react-icons/io";
import modalsContext from '../Contexts/modalsContext';

export default function Cart() {

    const contextData = useContext(modalsContext)

    const closeCart = (e) => {
        if (e.target.id === "cart-wrapper") {
            contextData.setIsShowCart(false)
        }
    }

    return ReactDom.createPortal(
        <div onClick={closeCart} id='cart-wrapper' className='fixed flex items-center justify-center top-0 z-30 w-full h-screen bg-zinc-700/75'>
            <div className={`fixed ${contextData.isShowCart ? 'right-0' : '-right-96'} w-96 gap-4 p-6 bg-white top-0 min-h-screen transition-all duration-500`}>
                <h2 className='text-lg font-semibold py-3'>Carts</h2>
                <IoMdClose id='cart-close-icon' className='absolute right-2 top-[23px] size-5 cursor-pointer' />
                <div className='h-[410px] overflow-y-auto'>
                    <section className='border-b border-b-zinc-400 py-3 space-y-3'>
                        <div className='flex gap-x-3 items-center'>
                            <img className='size-16 object-cover rounded-lg' src="../public/images/hero.jpg" alt="" />
                            <div>
                                <p>Classic Red Cap</p>
                                <p>35$</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p>counter</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>, document.getElementById('modals-parent')
    )
}
