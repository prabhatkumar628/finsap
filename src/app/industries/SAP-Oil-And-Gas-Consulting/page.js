import React from 'react';
import { MdOutlineOilBarrel } from "react-icons/md";
import { Unbounded } from 'next/font/google';
import Image from 'next/image';

const unbounded = Unbounded({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function Page() {
    return (
        <div className='w-full min-h-screen bg-white relative px-4 pb-4 sm:pb-8 md:pb-12 pt-16 sm:pt-20 md:px-6 lg:px-12'>
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-12 sm:min-h-14 md:min-h-16 w-[60%] sm:w-[50%] md:w-80 bg-[#0dd4ff] absolute top-0 right-0 grid place-items-center'>
                <p className=" font-light text-2xl sm:text-3xl w-fit text-white">
                    Our Offerings
                </p>
            </div>

            <div className="w-full h-full px-4 py-6 md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
                <div className={`${unbounded.className} flex flex-col gap-6`}>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl py-2 flex sm:items-center gap-2 font-light text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
                        <MdOutlineOilBarrel className='text-4xl md:text-5xl xl:text-6xl' />
                        <span>SAP IS-Oil & Gas Consulting</span>
                    </h1>
                    <p className='text-[#043e96] md:text-lg font-light'>
                        <span className='font-semibold'>Overview: </span>
                        SAP IS-Oil & Gas is a solution designed specifically for the oil and gas industry, offering features to manage upstream,
                        midstream, and downstream operations.
                    </p>
                </div>

                <div className={`${unbounded.className} gap-6 lg:gap-12 mt-4`}>
                    <h2 className="text-base py-2 flex gap-2 items-center text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
                        Our Expertise:
                    </h2>

                    <div className='grid grid-cols-12 pt-4 md:pt-6 gap-10'>
                        {/* Text Section */}
                        <div className='col-span-12 xl:col-span-5 order-2 xl:order-1 grid place-items-center '>
                            <div className='max-w-[650px] flex flex-col gap-4 md:gap-5'>
                                <p className='text-[#043e96] text-sm font-light'>
                                    <span className='font-semibold'>1: Upstream & Exploration: </span>
                                    Streamline exploration, drilling, and production management for greater operational efficiency.
                                </p>
                                <p className='text-[#043e96] text-sm font-light'>
                                    <span className='font-semibold'>2: Supply Chain Management: </span>
                                    Optimize the supply chain, from procurement of materials to delivery to the field.
                                </p>
                                <p className='text-[#043e96] text-sm font-light'>
                                    <span className='font-semibold'>3: Revenue and Expense Management: </span>
                                    Control costs, track revenues, and gain visibility into financial operations.
                                </p>
                                <p className='text-[#043e96] text-sm font-light'>
                                    <span className='font-semibold'>4: Regulatory Compliance & Reporting:</span>
                                    Stay compliant with industry regulations and easily manage reporting requirements.
                                </p>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}
