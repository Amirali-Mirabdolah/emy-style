import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


export default function BreadCrumb({ product }) {
    return (
        <>
            <ul className='flex gap-2 *:flex *:items-center *:gap-x-1.5 '>
                <li>
                    <Link to={"/"}>
                        <p>Home</p>
                    </Link>
                    <FaChevronRight />
                </li>
                <li>
                    <Link to={"/"}>
                        <p>{product?.category.slug}</p>
                    </Link>
                    <FaChevronRight />
                </li>
                <li>
                    <Link to={"/"}>
                        <p>{product?.title}</p>
                    </Link>
                </li>
            </ul>
        </>
    )
}
