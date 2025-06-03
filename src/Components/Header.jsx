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



export default function Header({ toggleDarkMode }) {

    const contexDate = useContext(modalsContext)
    const { data = [] } = useCategories()
    // console.log('data in header ', data);


    return (
        <>
            <header className='sticky top-0 z-20 bg-white dark:bg-dark border-b border-white-border dark:border-dark-hover dark:text-white'>
                <nav className='w-full mx-auto flex justify-center md:justify-between items-center gap-4 px-4 py-3'>
                    <Link to={'/'} className='flex items-center gap-x-1 text-2xl'>
                        <PiTShirtBold />
                        <h3 className='hidden md:inline'>EMY STYLE</h3>
                    </Link>
                    <div className='md:flex md:flex-1 justify-start items-center h-8'>
                        <div className='relative group'>
                            <div className='hidden md:inline-flex items-center justify-center gap-x-1 px-2 py-1.5 cursor-pointer hover:bg-zinc-100 dark:hover:bg-dark-hover rounded-[6px] transition-all'>
                                <p className='font-semibold'>Categories</p>
                                <MdKeyboardArrowDown />
                            </div>
                            <div className='absolute md:grid grid-cols-2 gap-3 p-4 -left-[60px] top-10 opacity-0 invisible hidden group-hover:opacity-100 group-hover:visible delay-300 bg-white dark:bg-dark border border-zinc-300 w-[500px] lg:w-[600px] transition-all shadow-xl rounded-xl'>
                                {data.slice(0, 5).map(product => (
                                    <Link key={product.id} to={`/categories/${product.id}`}>
                                        <CategoryBox {...product} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex w-4/5 md:flex-1 md:justify-end gap-x-4 *:hover:bg-zinc-100 dark:*:hover:bg-dark-hover *:transition-all'>
                        <button onClick={() => contexDate.setShowSearchBox(true)} className='flex justify-center flex-1 items-center border gap-x-3 rounded-2xl text-nowrap'>
                            <CiSearch className='size-6' />
                            Search Products
                        </button>
                        <button onClick={() => contexDate.setIsShowCart(true)} className='p-[3px] border rounded-[6px]'>
                            <TbShoppingBag className='size-6' />
                        </button>
                        <button onClick={() => {
                            toggleDarkMode()
                            // console.log(contexDate.darkMode)
                        }}
                            className='p-[3px] border rounded-[6px] *:size-6'>
                            <TbMoon className={`${contexDate.darkMode ? 'hidden' : ''}`} />
                            <GoSun className={`${contexDate.darkMode ? '' : 'hidden'}`} />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}