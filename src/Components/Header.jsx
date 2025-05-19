import React, { useContext } from 'react'
import { PiTShirtBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { TbMoon } from "react-icons/tb";
import { GoSun } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import modalsContext from '../Contexts/modalsContext';
import { Link } from 'react-router-dom';
import useCategories from '../hooks/useCategories';
import CategoryBox from './CategoryBox';



export default function Header() {

    const contexDate = useContext(modalsContext)
    const { data = [] } = useCategories()
    // console.log('data in header ', data);


    return (
        <>
            <header className='sticky top-0 z-20 bg-white border-b border-zinc-300'>
                <nav className='w-full mx-auto flex justify-center md:justify-between items-center gap-4 px-4 py-3'>
                    <Link to={'/'} className='flex items-center gap-x-1 text-2xl'>
                        <PiTShirtBold />
                        <h3 className='hidden md:inline'>EMY STYLE</h3>
                    </Link>
                    <div className='md:flex md:flex-1 justify-start items-center h-8'>
                        <div className='relative group'>
                            <div className='hidden md:inline-flex items-center justify-center gap-x-1 px-2 py-1.5 cursor-pointer hover:bg-zinc-100 rounded-[6px] transition-all'>
                                <p className='font-semibold'>Categories</p>
                                <MdKeyboardArrowDown />
                            </div>
                            <div className='absolute grid grid-cols-2 gap-3 p-4 -left-[60px] top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible delay-300 bg-white border border-zinc-300 w-[500px] lg:w-[600px] transition-all shadow-xl rounded-xl'>
                                {data.slice(0, 5).map(product => (
                                    <Link key={product.id} to={`/categories/${product.id}`}>
                                        <CategoryBox {...product} />
                                    </Link>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className='flex w-4/5 md:flex-1 md:justify-end gap-x-4 *:hover:bg-zinc-100 transition-all'>
                        <button onClick={() => contexDate.setShowSearchBox(true)} className='flex justify-center flex-1 items-center border gap-x-3 rounded-2xl text-nowrap'>
                            <CiSearch className='size-6' />
                            Search Products
                        </button>
                        <button onClick={() => contexDate.setIsShowCart(true)} className='p-[3px] border rounded-[6px]'>
                            <TbShoppingBag className='size-6' />
                        </button>
                        <button className='p-[3px] border rounded-[6px]'>
                            <TbMoon className='size-6' />
                            <GoSun className='hidden' />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}