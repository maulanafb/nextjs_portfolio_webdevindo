import Image from 'next/image'
import React from 'react'
import { socialMedia } from '@/data/socialMedia'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='container mx-auto px-[106px] py-10'>
            <div className='flex justify-between'>
                <div>webdevindo©Copyright 2023</div>
                <div className='flex flex-row gap-4'>
                    {socialMedia.map((soc, i) => {
                        return <Link key={i} href={soc.url}>
                            <div className="relative w-8 h-8 px-[10px] py-[10px] bg-white rounded-md hover:bg-[#045EE1]">
                                <Image className='px-2' src={soc.src} alt={soc.src} fill />
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
