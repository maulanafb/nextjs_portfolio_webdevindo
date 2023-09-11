'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { menu } from '../data/menu'
import Link from 'next/link'
import { HiOutlineX, HiMenuAlt3, HiMenu } from 'react-icons/hi'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPage = usePathname()
    const [show, setShow] = useState(false)
    // useEffect(() => {
    //     alert(`value menjadi ${show}`)
    // }, [show])
    return (
        <div className="container mx-auto px-4 2xl:px-0">
            <nav className='flex py-4 justify-between items-center'>
                <Image alt={logo} src={logo} />
                <HiMenuAlt3 size={30} className='cursor-pointer lg:hidden' onClick={() => setShow(!show)} />
                <div className={`flex fixed lg:relative bg-black lg:bg-transparent w-full  h-screen lg:h-0 ${show ? 'right-0' : '-right-full'} lg:right-0 top-0 flex-col lg:flex-row justify-center lg:justify-end items-center gap-10 transition-all duration-300 red_line`}>
                    <HiOutlineX size={30} className='cursor-pointer absolute top-7 right-7 lg:hidden' onClick={() => setShow(!show)} />
                    {menu.map((item, i) => <Link key={i} className={currentPage == item.url ? 'active' : ''} href={item.url}>{item.label}</Link>)}
                </div>
            </nav>
        </div>

    )
}

export default Navbar
