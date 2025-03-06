import Image from 'next/image'
import React from 'react'
import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ['latin'], weight: ['200',"300", '500', '600'] });

export default function GlobalReach() {
    return (
        <div className='bg-white p-10 md:pt-20 relative'>
            <div className='w-full h-full hidden md:flex absolute top-0 left-0 bg-[rgba(0,0,0,0)] flex-col items-end gap-6'>
                <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-16 w-[35%] bg-[#0dd4ff]'></div>
                <div style={{ clipPath: "polygon(80% 0, 100% 0, 100% 100%, 65% 100%)" }} className='h-full w-full overflow-hidden'></div>

                <div style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)" }} className='min-h-10 w-[20%] bg-[#0dd4ff] absolute bottom-0 left-0'></div>
            </div>
            <div className='relative'>
                <div className='absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0)] flex flex-col justify-end items-start p-5 lg:p-10'>
                    <h3 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-3 text-[#053d99] w-fit flex flex-col pt-2 gap-1 relative after:absolute after:content-[''] after:w-[80px] after:h-[3px] after:bottom-0 after:left-1 after:bg-[#0ed4ff]">
                        <span className={`${unbounded.className} font-extralight`}>Current</span>
                        <span className={`${unbounded.className} tracking-widest font-semibold`}>Global</span>
                        <span className={`${unbounded.className} font-extralight`}>Reach</span>
                    </h3>
                    <p className='text-[#043e96] tracking-widest font-medium'>
                        Finnsap's global reach extends across key<br/>
                        markets, including Europe, South Africa, the<br/>
                        United States, and headquartered in India.<br/>
                        This international presence allows us to serve<br/>
                        clients with diverse needs and navigate the<br/>
                        complexities of global business.
                    </p>
                </div>

                <div className='ps-32'>
                    <Image
                        className="w-full h-full object-cover"
                        src="/about/global.jpg"
                        alt="Banner Image"
                        width={1920}
                        height={1080}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    )
}
