import React from 'react'
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function WhyUs() {
    const whyUsData = [
        { heading: "Experienced & Professional Consultants", description: "At FINNSAP, we engage only with highly skilled and experienced consultants who have a proven track record of success. This ensures that our clients receive expert guidance and insights based on years of demonstrated expertise and successful outcomes." },
        { heading: "Top-to-Bottom Approach", description: "To enhance transparency and ensure accurate communication, FINNSAP adopts a comprehensive approach where relevant leadership is actively involved in client project engagements. This fosters direct interaction, moving beyond siloed project calls and ensuring clear and transparent reporting to all stakeholders." },
        { heading: "Standardized Practices", description: "FINNSAP emphasizes the implementation of industry-standard practices and process flows, helping businesses optimize their operations, integrate best practices, and reduce operational overheads." },
        { heading: "Effective Consulting", description: "We prioritize providing tailored solutions that address our clients' specific requirements and challenges. Our approach helps mitigate process inefficiencies, offering a seamless experience to end users while streamlining workflows." },
        { heading: "Commitment to Deliver", description: "At FINNSAP, we believe trust and commitment are the cornerstones of success. We make realistic commitments, ensuring that we only promise what we can deliver within the agreed timeframe, maintaining our reputation for reliability and avoiding the risk of overpromising and underdelivering." },
    ]
    return (
        <div className="w-full p-4 md:p-6 md:pt-4 lg:pt-4 lg:p-12 bg-white flex justify-center items-center">
            <div className="w-full h-full px-4 py-6  md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
                <div className={unbounded.className}>
                    <p className="font-light text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-wider text-[#043e96] pb-4 md:pb-8 mb-4 md:mb-10 text-center relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#0ed4ff]">
                        Why Us?
                    </p>
                </div>
                <div className={`${unbounded.className} grid grid-cols-12 gap-6 lg:gap-8`}>
                    {
                        whyUsData.map((item, index) => (
                            <div key={index} className='col-span-12 md:col-span-6 flex flex-col gap-4'>
                                <h3 className="text-xl md:2xl font-bold py-2 text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] hover:after:w-full w-fit after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff] after:transition-all after:duration-200 after:ease-linear">
                                    {item.heading}
                                </h3>
                                <p className='text-[#043e96] md:text-lg font-light'>
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
