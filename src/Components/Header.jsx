import React from 'react'
import { PiTShirtBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { TbMoon } from "react-icons/tb";
import { GoSun } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";


export default function Header() {
    return (
        <>
            <header className='sticky top-0 z-50 bg-white border-b border-zinc-300'>
                <nav className='w-full mx-auto flex justify-between items-center gap-4 px-4 py-3'>
                    <a href='#' className='flex items-center gap-x-1 text-2xl'>
                        <PiTShirtBold />
                        <h3 className='hidden sm:inline'>EMY STYLE</h3>
                    </a>
                    <div className='flex flex-1 justify-start items-center h-8'>
                        <a href="#" className='hidden md:inline-flex items-center justify-center max-w-max h-full hover:bg-zinc-100 rounded-[6px] transition-all'>Categories
                            <div className='invisible hover:visible'>
                                <a href="#">
                                    <div>
                                        {/* icon */}
                                        {/* image */}
                                        text
                                    </div>
                                </a>
                            </div>
                            <MdKeyboardArrowDown />
                        </a>
                    </div>
                    <div className='flex flex-1 justify-end gap-x-4 *:hover:bg-zinc-100 transition-all'>
                        <button className='flex justify-center flex-1 items-center border gap-x-3 rounded-2xl text-nowrap'>
                            <CiSearch className='size-6' />
                            Search Products
                        </button>
                        {/* <div className='*:border *:p-1 *:rounded-[5px] transition-all space-x-3'> */}
                        <button className='p-[3px] border rounded-[6px]'>
                            <TbShoppingBag className='size-6' />
                        </button>
                        <button className='p-[3px] border rounded-[6px]'>
                            <TbMoon className='size-6' />
                            <GoSun className='hidden' />
                        </button>
                        {/* </div> */}
                    </div>
                </nav>
            </header>
        </>
    )
}