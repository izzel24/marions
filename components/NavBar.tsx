'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { TbMenu } from 'react-icons/tb';


export default function NavBar({}) {

    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const alwaysWhite = pathname === "/product"
    const [open, setOpen] = useState(false)
    return (
        <nav className={`flex px-4 sm:px-10 py-3 justify-between font-libre fixed z-99 w-full ${(scrolled || alwaysWhite ) && "bg-white shadow-[0px_0px_6px_1px_rgba(0,0,0,25%)]"} transition-all ease-in duration-300 `}>
            <Link href={'/'} className='flex items-center gap-[2vw] portrait:gap-[2vw] landscape:gap-[1.15vw] lg:gap-[1.15vw]'>
                <img src="/logo.png" alt="Marion's Eksotik Logo" className='w-[8vw] portrait:w-[8vw] landscape:w-[3.5vw] lg:w-[3.5vw] ' />
                <div className='flex flex-col  '>
                    <p className='text-[4vw] portrait:text-[3.5vw] lg:text-[1.75vw] leading-none font-bold flex'>MARIONS EKSOTIK TENUN </p>
                    {/* <p className='text-[2.5vw] portrait:text-[2.75vw] lg:text-[1.2vw] portrait:leading-[max(10px,2vw)] leading-2 font-semibold'>Tenun</p> */}
                </div>
            </Link>
            <ul className='hidden sm:flex portrait:hidden landscape:flex gap-6 items-center '>
                <li className='text-[1.25vw]'><Link href="/">Home</Link></li>
                <li className='text-[1.25vw]'><Link href="/product">Products</Link></li>
            </ul>
            <button className='flex sm:hidden portrait:flex landscape:hidden h-full  items-center absolute top-0 right-4 z-10 text-[4vw] ' onClick={() => setOpen(!open)}><TbMenu /></button>
            <ul
                className={`sm:hidden flex portrait:flex landscape:hidden flex-col absolute top-0 right-0 h-screen bg-white w-[70vw] py-[7vw]
  transition-transform duration-500 ease-in-out
  ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <li className="px-6 py-3 text-[3vw]"><Link href="/">Home</Link></li>
                <li className="px-6 py-3 text-[3vw]"> <Link href="/product">Products</Link></li>
            </ul>
        </nav>
    )
}
