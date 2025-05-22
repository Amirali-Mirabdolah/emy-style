import React from 'react'
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandGmail } from "react-icons/tb";

export default function AboutMe() {
    return (
        <>
            <div className="dark:bg-red-500 mt-8 border-t border-zinc-300">
                <div className="container mx-auto flex items-center justify-between gap-4 p-4">
                    <p className='text-xs text-zinc-500 py-1'>Developed by <span className='font-bold text-zinc-900 underline underline-offset-4 decoration-wavy'>Amirali Mirabdolah</span></p>
                    <div className='flex gap-6 items-center **:size-6'>
                        <a href="https://github.com/Amirali-Mirabdolah"><FiGithub /></a>
                        <a href="https://www.linkedin.com/in/amirali-mirabdolah/"><CiLinkedin /></a>
                        <a href="mailto:amiralimirabdolah@gmail.com"><TbBrandGmail /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
