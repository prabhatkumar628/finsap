import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Link from 'next/link';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });


export default function Footer() {
    const h4css = "font-semibold uppercase text-xl relative py-4 before:content-[''] before:absolute before:bottom-0 before:left-0 sm:before:left-[50%] sm:before:translate-x-[-50%] before:w-[30px] before:h-[3px] hover:before:w-full w-max before:transition-all duration-200 ease-linear before:bg-[#0ed4ff]"

    return (
        <>
            <footer className={`${unbounded.className} bg-[#043e96] text-white p-5 lg:py-10 md:px-20 lg:px-10`}>
                <div className="w-full grid grid-cols-12 gap-4">
                    <div className="h-full w-full order-3 md:order-3 lg:order-3 col-span-6 md:col-span-4 lg:col-span-3">
                        <div className="sm:grid  sm:place-items-center text-end sm:text-center">
                            <div className="flex justify-end">
                                <h3 className={`font-semibold text-end  uppercase text-xl relative py-4 before:content-[''] before:absolute before:bottom-0 before:right-0 sm:before:left-[50%] sm:before:translate-x-[-50%] before:w-[30px] before:h-[3px] hover:before:w-full w-max before:transition-all duration-200 ease-linear before:bg-[#0ed4ff]`}>Company</h3>
                            </div>
                            <div className="mt-4 text-sm flex flex-col gap-2">
                                <p><Link href={"/"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Home</Link></p>
                                <p><Link href={"/industries/SAP-Oil-And-Gas-Consulting"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Industries</Link></p>
                                <p><Link href={"/about"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">About Us</Link></p>
                                <p><Link href={"/contact"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Contact Us</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full order-4 md:order-4 lg:order-4 col-span-6 md:col-span-12 lg:col-span-3">
                        <div className="sm:grid sm:place-items-center sm:text-center">
                            <h4 className={h4css}>FOLLOW US</h4>
                            <Link href={"/"} className='hidden lg:block'>
                                <div className=" place-items-center my-4 grid">
                                    <img className="min-w-[100px] w-[100px] rounded-md" src="/og.png" alt="finnsap logo" />
                                </div>
                            </Link>

                            <div className="flex flex-col md:flex-row gap-2 mt-4 lg:mt-0">
                                <div className='flex md:flex-row gap-2 w-fit'>
                                    <FaFacebookF className="h-[40px] p-2 w-[40px] hover:text-[#0ed4ff] hover:border-[#0ed4ff] rounded border border-white cursor-pointer transition-all duration-200 ease-linear" />
                                    <FaXTwitter className="h-[40px] p-2 w-[40px] hover:text-[#0ed4ff] hover:border-[#0ed4ff] rounded border border-white cursor-pointer transition-all duration-200 ease-linear" />

                                </div>
                                <div className='flex md:flex-row gap-2 w-fit'>
                                    <FaLinkedinIn className="h-[40px] p-2 w-[40px] hover:text-[#0ed4ff] hover:border-[#0ed4ff] rounded border border-white cursor-pointer transition-all duration-200 ease-linear" />
                                    <FaYoutube className="h-[40px] p-2 w-[40px] hover:text-[#0ed4ff] hover:border-[#0ed4ff] rounded border border-white cursor-pointer transition-all duration-200 ease-linear" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full order-1 md:order-1 lg:order-2 col-span-6 md:col-span-4 lg:col-span-3">
                        <div className="sm:grid  sm:place-items-center text-end sm:text-center">
                            <div className="flex justify-end">
                                <h4 className={`font-semibold text-end  uppercase text-xl relative py-4 before:content-[''] before:absolute before:bottom-0 before:right-0 sm:before:left-[50%] sm:before:translate-x-[-50%] before:w-[30px] before:h-[3px] hover:before:w-full w-max before:transition-all duration-200 ease-linear before:bg-[#0ed4ff]`}>Web Services</h4>
                            </div>
                            <div className="mt-4 text-sm flex flex-col gap-2">
                                <p><Link href={"/services/Web-Services/Web-Development"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Web Development</Link></p>
                                <p><Link href={"/services/Web-Services/Web-Support"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Web Support</Link></p>
                                <p><Link href={"/services/Web-Services/Mobile-App-Development"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Mobile App Development</Link></p>
                                <p><Link href={"/services/Web-Services/Mobile-App-Support"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Mobile App Support</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full order-2 md:order-2 lg:order-1 col-span-6 md:col-span-4 lg:col-span-3">
                        <div className="sm:grid sm:place-items-center sm:text-center">
                            <div className="flex md:justify-end">
                                <h4 className={`${h4css} `}>SAP Services</h4>
                            </div>
                            <div className="mt-4 text-sm flex flex-col gap-2">
                                <p><Link href={"/services/SAP-Services/SAP-Services-Portfolio"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">SAP Services Portfolio</Link></p>
                                <p><Link href={"/services/SAP-Services/SAP-EPR-Consulting"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">SAP ERP Consulting</Link></p>
                                <p><Link href={"/services/SAP-Services/SAP-IS-Utilities-Consulting"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">SAP IS-Utilities Consulting</Link></p>
                                <p><Link href={"/services/SAP-Services/SAP-BRIM-Consulting"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">SAP BRIM Consulting</Link></p>
                                <p><Link href={"/services/SAP-Services/SAP-ECC-S4HANA-AMS"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">SAP ECC-S4HANA AMS</Link></p>
                                <p><Link href={"/services/SAP-Services/SAP-AMI-Consulting"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">SAP AMI Consulting</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-6 sm:mt-10 md:mt-12">
                    <ul className="flex flex-row sm:text-center flex-wrap justify-center items-center gap-2 sm:gap-5 font-semibold">
                        <li><Link href={"/"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Legal Statement</Link></li>
                        <li><Link href={"/"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Privacy Policy</Link></li>
                        <li><Link href={"/"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">User Agreement</Link></li>
                        <li><Link href={"/"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">CCPA Policy</Link></li>
                        <li><Link href={"/"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Cookies Policy</Link></li>
                        <li><Link href={"/"} className="transition-all duration-200 ease-linear hover:text-[#0ed4ff] w-fit">Copy Right Policy</Link></li>
                    </ul>
                </div> */}
            </footer>
            <div className="bg-[#142141] py-4 p-5 text-[#818181]">
                <p className="text-center text-xs font-semibold">Copyright © 2025 Finnsap. All Rights Reserved.</p>
            </div>
        </>

    )
}
