import React from 'react'
import hero from '@/public/image/hero.png'
import Image from 'next/image'
import arrowRight from '@/public/icon/arrow-right.svg'
export const Showcase = () => {
    return (
        <div className='showcase grid-cols-1 grid lg:grid-cols-12 min-h-screen'>
            <div className="lg:col-span-5 row-start-1 col-start-1 -row-end-1 -col-end-1">
                <Image src={hero} alt="logo" className="w-full h-full block object-cover" width={500} height={1000} />
            </div>
            <div className="lg:col-span-7 flex justify-center flex-col row-start-1 col-start-1 -row-end-1 -col-end-1 p-[2vw] lg:pr-[10vw] relative">
                <h1 className='uppercase text-[10vw] text-white lg:text-black lg:text-[5.1rem] font-primary leading-none'>Towards <br /> Tomorrow</h1>
                <p className='text-white lg:text-[#0e9f5a] text-[1.25rem] mt-2'>From premium residences to commercial hubs, every project is a testament to our commitment to quality, innovation, and sustainability. </p>
                <a href="/" className='absolute right-16 top-1/2 -translate-y-1/2'>
                    <Image src={arrowRight} alt="arrow" className="filter brightness-0 invert lg:filter-none w-18 h-18 mt-4" />
                </a>
            </div>
        </div>
    )
}
