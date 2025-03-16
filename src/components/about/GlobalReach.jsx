import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function GlobalReach() {
    return (
        <div className='bg-white p-4 md:p-6 lg:p-12'>
            <div className='relative'>
                <div className='md:ps-32 max-h-[400px] md:max-h-max'>
                    <Image
                        className="w-full h-full object-cover"
                        src="/about/global.jpg"
                        alt="global reach"
                        width={1920}
                        height={1080}
                        layout="responsive"
                    />
                </div>
                <div className='md:absolute w-full h-full top-0 left-0 md:bg-transparent flex flex-col justify-end items-start p-5 lg:p-10 border-2 border-[#8ea8d0] md:border-none'>
                    <h3 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-3 text-[#053d99] w-fit flex md:flex-col pt-2 gap-1 relative after:absolute after:content-[''] after:w-[80px] after:h-[3px] after:bottom-0 after:left-1 after:bg-[#0ed4ff]">
                        <span className={`${unbounded.className}  font-extralight`}>Current</span>
                        <span className={`${unbounded.className} tracking-widest`}>Global</span>
                        <span className={`${unbounded.className} font-extralight`}>Reach</span>
                    </h3>
                    <p className={`${unbounded.className} text-[#043e96] md:tracking-widest font-light mt-1 sm:mt-2`}>
                        Finnsap's global reach extends across key<br className='hidden md:block' />
                        markets, including Europe, South Africa, the<br className='hidden md:block' />
                        United States, and headquartered in India.<br className='hidden md:block' />
                        This international presence allows us to serve<br className='hidden md:block' />
                        clients with diverse needs and navigate the<br className='hidden md:block' />
                        complexities of global business.
                    </p>
                </div>
            </div>
        </div>
    )
}
