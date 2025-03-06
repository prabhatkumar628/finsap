import React from 'react'
import { Raleway, Unbounded } from 'next/font/google'
export const raleway = Raleway({ subsets: ['latin'], weight: ['500'] })
const unbounded = Unbounded({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });


export default function AboutUs() {
    return (
        <div className="w-full p-4 md:p-14 md:pt-28 bg-white flex justify-center items-center relative">
        <div className='w-full h-full hidden md:flex absolute top-0 left-0 bg-[rgba(0,0,0,0)] flex-col items-end gap-6'>
            <div style={{clipPath:"polygon(0 0, 100% 0, 100% 100%, 10% 100%)"}} className='min-h-16 w-[22.5%] bg-[#043d95]'></div>
            <div style={{clipPath:"polygon(80% 0, 100% 0, 100% 100%, 65% 100%)"}} className='h-full w-full overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            </div>
        </div>
            <div className="w-full h-full px-4 py-6  md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
                <h1 className="text-2xl py-2 text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
                    About Us
                </h1>
                <div className={`${unbounded.className} grid grid-cols-12 gap-6 lg:gap-12 mt-4`}>
                    <div className='col-span-12 md:col-span-8 flex flex-col gap-4 md:gap-10'>

                        <h2 className=" text-2xl sm:text-3xl md:text-5xl text-[#043e96] w-fit flex flex-col pt-2 gap-0">
                            <span className={`font-extralight`}> Empowering Businesses
                                <br />with SAP Expertise</span>
                        </h2>
                        <p className='text-[#043e96] text-xl sm:tracking-widest font-light'>
                            As a growing IT consulting firm, Finnsap specializes in
                            delivering high-impact SAP solutions. We guide businesses
                            and government entities worldwide in leveraging top-tier ERP
                            systems and intelligence tools from SAP.
                        </p>
                        <p className='text-[#043e96] text-xl sm:tracking-widest font-light'>
                            Finnsap boasts deep industry expertise, particularly within the
                            Utilities and Public Sector. We forge strategic partnerships,
                            delivering tailored solutions that address unique business
                            challenges.
                        </p>
                        <p className='text-[#043e96] text-xl sm:tracking-widest font-light'>
                            Headquartered in India, we serve clients globally. Our team of
                            experienced consultants, encompassing technical and
                            functional SAP specialists, ensures successful project delivery
                            and lasting value.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
