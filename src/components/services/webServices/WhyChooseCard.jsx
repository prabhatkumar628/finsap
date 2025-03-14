import React from 'react'
import Image from 'next/image';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function WhyChooseCard({ data }) {
    return (
        <div className="w-full p-4 md:p-6 md:pt-4 lg:pt-4 lg:p-12 bg-white flex justify-center items-center">
            <div className="w-full h-full px-4 py-6  md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
                <div className={unbounded.className}>
                    <p className="text-3xl md:text-4xl text-[#043e96] pb-4 md:pb-8 mb-4 md:mb-10 text-center relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#0ed4ff]">
                        Why Choose Us?
                    </p>
                </div>
                <div className={`${unbounded.className} grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-12`}>
                    {data.map((item, index) => (
                        <div key={index} className='flex flex-col text-center justify-center items-center py-4 px-2 sm:p-4 gap-2 sm:gap-4 text-[#043e96] rounded-2xl web-card-2'>
                            <div className="w-[50px] min-w-[50px] h-[50px] grid place-items-center">
                                <Image
                                    src={item.image}
                                    alt={item.heading} width={70} height={70}
                                />
                            </div>
                            <h3 className='sm:text-lg'>{item.heading}</h3>
                            <p className='font-light text-sm sm:text-base'> {item.description} </p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}