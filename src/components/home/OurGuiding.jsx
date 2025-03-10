import React from "react";
import "./home.css"
import { Unbounded } from 'next/font/google'
const unbounded = Unbounded({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function OurGuiding() {
    return (
        <>
            <div className={`w-full md:p-14 bg-white flex justify-center items-center relative`}>
                <div className="w-full h-full md:min-h-[600px] xl:min-h-[80vh] flex-1 border-2 border-[#8ea8d0] hidden md:block"></div>
                <div className=" static md:absolute w-full mx-auto h-auto left-0 md:top-[50%] md:translate-y-[-50%]">
                    <div className={unbounded.className}>
                        <h2 className="font-light text-3xl sm:text-4xl md:text-5xl xl:text-7xl tracking-wider text-[#043e96] py-4 md:pt-0 md:pb-8 mb-4 md:mb-10 text-center relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#0ed4ff]">
                            Our Guiding Principles
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center lg:gap-0 lg:px-6 xl:px-10 bg-gradient-to-t to-[#043e96] from-[#0089ab] min-w-full">
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
                    <div className="flex flex-wrap justify-center items-center lg:gap-0 lg:px-6 xl:px-10 bg-gradient-to-b to-[#043e96] from-[#0089ab]">
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
        </>
    );
}
