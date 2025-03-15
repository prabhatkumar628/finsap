import React from "react";
import "./home.css"
import { Poppins } from 'next/font/google';
import Image from "next/image";
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function OurGuiding() {
    const ourGuiding = [
        {image:"/home/icons/accountability.png" ,heading: "Accountability", description: "We take ownership of our actions and their consequences, fostering trust and a strong work ethic." },
        {image:"/home/icons/professionalism.png" ,heading: "Professionalism", description: "We strive for excellence in all aspects of our work, continuously improving and exceeding expectations." },
        {image:"/home/icons/target.png" ,heading: "Customer Focus", description: "We prioritize customer needs and satisfaction, delivering impactful solutions that drive long-term success." },
        {image:"/home/icons/integrity.png" ,heading: "Integrity", description: "We conduct business with honesty, transparency, and ethical integrity, safeguarding data and upholding the highest standards." },
        {image:"/home/icons/excellence.png" ,heading: "Excellence", description: "We are committed to operational and service excellence, delivering high-quality services that exceed expectations." },
    ]
    return (
        <>
            {/* <div className={`w-full p-4 sm:p-8 md:p-12 bg-white flex justify-center items-center relative`}>
                <div className="sm:py-4 md:py-8 w-full flex-1 border-2 border-[#8ea8d0] bg-gradient-to-t to-[#043e96] from-[#0089ab]">
                    <div className=" w-full mx-auto h-auto left-0">
                        <div className={unbounded.className}>
                            <h2 className="font-light text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-wider py-4 md:pt-0 md:pb-8 mb-4 md:mb-10 text-center relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#0ed4ff]">
                                Our Guiding Principles
                            </h2>

                        </div>
                        <div className="flex flex-wrap justify-center items-center lg:gap-0 lg:px-6 xl:px-10 min-w-full">
                            <div
                                className="guid-line-item-one w-full sm:w-[80%] md:w-[35%] md:mr-[-3.5%] py-5 md:py-0 md:h-48 bg-[#3eddff] flex justify-center items-center relative"
                            >
                                <div className="max-w-md md:max-w-sm px-6 md:px-10 flex flex-col justify-center items-start h-full">
                                    <p className="font-bold text-[#142141]">Accountability</p>
                                    <p className="text-[#142141]">
                                        We take ownership of our actions and their consequences, fostering trust and a strong work ethic.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="guid-line-item-one w-full sm:w-[80%] md:w-[35%] py-5 md:py-0 md:h-48 bg-[#7ae7ff] flex justify-center items-center relative"
                            >
                                <div className="max-w-md md:max-w-sm px-6 md:px-10 flex flex-col justify-center items-start h-full">
                                    <p className="font-bold text-[#142141]">Professionalism</p>
                                    <p className="text-[#142141]">
                                        We strive for excellence in all aspects of our work, continuously improving and exceeding expectations.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="guid-line-item-one w-full sm:w-[80%] md:w-[35%] md:ml-[-3.5%] py-5 md:py-0 md:h-48 bg-[#3eddff] flex justify-center items-center relative"
                            >
                                <div className="max-w-md md:max-w-sm px-6 md:px-10 flex flex-col justify-center items-start h-full">
                                    <p className="font-bold text-[#142141]">Customer Focus</p>
                                    <p className="text-[#142141]">
                                        We prioritize customer needs and satisfaction, delivering impactful solutions that drive long-term success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center items-center lg:gap-0 lg:px-6 xl:px-10">
                            <div
                                className="guid-line-item-two w-full sm:w-[80%] md:w-[35%] md:mr-[-1.75%] py-5 md:py-0 md:h-48 bg-[#7ae7ff] md:bg-[#3eddff] flex justify-center items-center relative"
                            >
                                <div className="max-w-md md:max-w-sm px-6 md:px-10 flex flex-col justify-center items-start h-full">
                                    <p className="font-bold text-[#142141]">Integrity</p>
                                    <p className="text-[#142141]">
                                        We conduct business with honesty, transparency, and ethical integrity, safeguarding data and upholding the highest standards.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="guid-line-item-two w-full sm:w-[80%] md:w-[35%] md:ml-[-1.75%] py-5 md:py-0 md:h-48 bg-[#3eddff] md:bg-[#7ae7ff] flex justify-center items-center relative"
                            >
                                <div className="max-w-md md:max-w-sm px-6 md:px-10 flex flex-col justify-center items-start h-full">
                                    <p className="font-bold text-[#142141]">Excellence</p>
                                    <p className="text-[#142141]">
                                        We are committed to operational and service excellence, delivering high-quality services that exceed expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="w-full p-4 md:p-6 md:pt-8 lg:pt-12 lg:p-12 bg-white flex justify-center items-center">
                <div className="w-full h-full py-6  md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
                    <div className={unbounded.className}>
                        <h2 className="font-light text-[#043e96] text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-wider py-4 md:pt-0 md:pb-8 mb-4 md:mb-10 text-center relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#0ed4ff]">
                            Our Guiding Principles
                        </h2>
                    </div>
                    <div className={`${unbounded.className} flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-12`}>
                        {ourGuiding.map((item, index) => (
                            <div key={index} className='flex flex-col max-w-[46%] lg:max-w-[350px] text-center justify-center items-center py-4 px-2 sm:p-4 gap-2 sm:gap-4 text-[#043e96] rounded-2xl web-card-2'>
                                <div className="w-[50px] md:w-[70px] min-w-[50px] md:min-w-[70px] md:h-[70px] h-[50px] grid place-items-center">
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
        </>
    );
}
