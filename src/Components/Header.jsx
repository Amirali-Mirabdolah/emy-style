import React from 'react'
import { PiTShirtBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { TbMoon } from "react-icons/tb";
import { GoSun } from "react-icons/go";


export default function Header() {
    return (
        <>
            <header className='sticky top-0 z-50'>
                <nav className='w-full mx-auto flex justify-between items-center gap-4 px-4 py-3'>
                    <a href='#' className='flex items-center gap-x-1 text-2xl'>
                        <PiTShirtBold />
                        <h3>EMY STYLE</h3>
                    </a>
                    <div className='flex flex-1 justify-start py-2'>
                        <a href="#" className='flex flex-1 max-w-max'>Categories
                            <div className='invisible'>
                                <a href="#">
                                    <div>
                                        {/* icon */}
                                        {/* image */}
                                        text
                                    </div>
                                </a>
                            </div>
                        </a>
                    </div>
                    <div className='flex flex-1 justify-end gap-x-4 *:hover:bg-zinc-300 transition-colors'>
                        <button className='flex justify-center py-[3px] flex-1 items-center border gap-4 rounded-2xl '>
                            <CiSearch className='size-6'/>
                            Search Products
                        </button>
                        {/* <div className='*:border *:p-1 *:rounded-[5px] transition-all space-x-3'> */}
                        <button>
                            <TbShoppingBag className='size-6'/>
                        </button>
                        <button className=''>
                            <TbMoon className='size-6'/>
                            <GoSun className='hidden' />
                        </button>
                        {/* </div> */}
                    </div>
                </nav>
            </header>
        </>
    )
}