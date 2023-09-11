import React from 'react'
import Image from 'next/image'
import { services } from '@/data/services'
import { Poppins } from 'next/font/google'

const fontPoppins = Poppins({ subsets: ['latin'], weight: '600' })

const OurService = () => {
    return (
        <div>
            <section className='py-16 bg-[#0F0F0F]'>
                <div className="container  mx-auto px-4 2xl:px-0">
                    <h2 className={`title-section ${fontPoppins.className}`} >Our Awesome Service</h2>
                    <p className='text-center max-w-[514px] mx-auto text-[18px] mt-[5px]'>There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.</p>
                    <div className={`md:grid-cols-2 lg:grid-cols-3 grid gap-5 mt-16`}>
                        {services.map((service, i) => {
                            return (
                                <div key={i} className="item-service py-[38px] px-[30px] bg-black rounded-[24px] transition-all duration-300">
                                    <div className="logo-service relative w-[60px] h-[60px] mb-4">
                                        <Image src={service.logo} alt={service.title} fill />
                                    </div>
                                    <h3 className={`${fontPoppins.className} text-[25px] leading-[37px] mb-3`} >{service.title}</h3>
                                    <p className='text-[#6b6b6b]'>{service.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default OurService
