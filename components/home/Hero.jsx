import { Poppins, Passion_One, Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const FontPoppins = Poppins({ subsets: ['latin'], weight: '400' })
const FontPassionOne = Passion_One({ subsets: ['latin'], weight: '400' })
const FontInter = Inter({ subsets: ['latin'], weight: '700' })

const Hero = () => {
    return (
        <div className="py-[70px] lg:py-[200px] bg-[url('/hero.png')] bg-cover bg-right">
            <div className="container mx-auto px-4 2xl:px-0">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-10 xl:col-span-7">
                        <div className={`bg-gradient-to-r from-[#C10505] to-[#045ee1] max-w-max px-[30px] py-2 rounded-md text-[16px] lg:text-[24px] ${FontPoppins.className} mb-[30px]`}>Welcome to WEBDEVIndo</div>
                        <h1 className={`text-[50px] leading-[45px] md:text-[60px] md:leading-[65px] xl:text-[80px] xl:leading-[75px] ${FontPassionOne.className} mb-7`}>Professional Wordpress and FrontEnd Developer</h1>
                        <Link href='/contact' className={`px-[32px] py-[11px] bg-[#045EE1] rounded-md text-[16px] ${FontInter.className} hover:bg-gradient-to-r from-[#C10505] to-[#045ee1]`}>Hire Me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero








