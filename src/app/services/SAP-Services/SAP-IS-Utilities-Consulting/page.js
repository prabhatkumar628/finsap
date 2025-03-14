import React from 'react'
import { PiUsersThree } from "react-icons/pi";
import Image from 'next/image';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function SapIsUtilities() {
    return (
        <div className='w-full min-h-screen bg-white relative px-4 pb-4 sm:pb-8 md:pb-12 pt-16 sm:pt-20 md:px-6 lg:px-12'>
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-12 sm:min-h-14 md:min-h-16 w-[60%] sm:w-[50%] md:w-80 bg-[#0dd4ff] absolute top-0 right-0 grid place-items-center'>
                <p className=" font-light text-2xl sm:text-3xl w-fit text-white">
                    Our Offerings
                </p>
            </div>
            <div className="w-full h-full px-4 py-6  md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
                <div className={`${unbounded.className} flex flex-col gap-6`}>
                    <h1 className="text-3xl md:text-4xl py-2 flex sm:items-center gap-2 text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
                        <div className='w-fit'>
                            <PiUsersThree className='text-4xl md:text-5xl' />
                        </div>
                        <span> SAP IS-Utilities Consulting</span>
                    </h1>
                    <p className='text-[#043e96] text-lg md:text-xl font-light'>
                        <span className='font-semibold'>Overview: </span>
                        SAP IS-U (Industry Solution for Utilities) is a comprehensive solution designed for utility companies, managing all aspects
                        of operations from billing to customer engagement. Our SAP IS-U consulting services help utility businesses streamline their
                        processes and enhance their customer service.
                    </p>
                </div>
                <div className={`${unbounded.className}  gap-6 lg:gap-12 mt-4`}>
                    <h2 className="text-lg py-2 flex gap-2 items-center text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
                        Our Expertise:
                    </h2>
                    <div className='grid grid-cols-12 pt-4 md:pt-6 gap-4 sm:gap-6 md:gap-10'>
                        <div className='col-span-12 xl:col-span-5 order-2 xl:order-1 grid place-items-center '>
                            <div className='max-w-[650px] flex flex-col gap-4 md:gap-5'>
                                <p className='text-[#043e96] font-light'>
                                    <span className='font-semibold'>1: FICA (Finance & Contract Account Receivables and Payable): </span>
                                    SAP FICA is a powerful component within SAP IS-U that helps utility companies to manage accounts,
                                    payments, and collections with flexibility and precision.
                                </p>
                                <p className='text-[#043e96] font-light'>
                                    <span className='font-semibold'>2: Billing & Invoicing: </span>
                                    Efficient and accurate billing
                                    solutions for electricity, water, gas, and more, with easy
                                    integration into customer management.
                                </p>
                                <p className='text-[#043e96] font-light'>
                                    <span className='font-semibold'>3: Customer Engagement: </span>
                                    Enhancing customer
                                    experience through CRM functionalities integrated with
                                    SAP IS-U for personalized service and communication.
                                </p>
                                <p className='text-[#043e96] font-light'>
                                    <span className='font-semibold'>4: Device Management: </span>
                                    Manages technical data,
                                    installations, meter readings, and the inspection of devices.
                                </p>
                                <p className='text-[#043e96] font-light'>
                                    <span className='font-semibold'>5: Data Management & Analytics: </span>
                                    Empowering utility
                                    companies with actionable data insights to optimize
                                    operations and improve customer service.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 xl:col-span-7 order-1 xl:order-2 h-full w-full grid place-items-center'>
                            <Image
                                className="w-full h-full object-cover rounded-4xl max-w-[650px]"
                                src="/services/sap-is-utilities/sapis.avif"
                                alt="Banner Image"
                                width={1920}
                                height={1080}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const generateMetadata = () => {
    return {
      title: "SAP IS-Utilities Consulting - Expert SAP Solutions for Utility Industry",
      description:
        "Finnsap provides specialized SAP IS-Utilities consulting for energy, water, and waste management industries. Optimize utility operations with SAP solutions.",
      keywords: [
        "SAP IS-Utilities Consulting",
        "SAP for Utilities Industry",
        "SAP Utilities Solutions",
        "SAP Energy Management",
        "SAP Water Utilities",
        "SAP Waste Management",
        "SAP S/4HANA for Utilities",
        "SAP Customer Service Utilities",
        "SAP Billing & Revenue Management",
        "SAP Smart Metering Solutions",
        "SAP Digital Transformation for Utilities",
        "SAP Asset Management for Utilities",
        "SAP ERP for Utilities",
        "SAP Integration for Energy Sector",
        "Utility Industry IT Solutions",
      ],
      openGraph: {
        title: "SAP IS-Utilities Consulting - Optimize Utility Operations",
        description:
          "Get expert SAP IS-Utilities solutions with Finnsap. Enhance efficiency in energy, water, and waste management industries through SAP consulting.",
        url: "https://www.finnsap.com/services/SAP-Services/SAP-IS-Utilities-Consulting",
        siteName: "Finnsap",
        images: [
          {
            url: "https://www.finnsap.com/og.png",
            width: 1200,
            height: 630,
            alt: "SAP IS-Utilities Consulting - Finnsap",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "SAP IS-Utilities Consulting - Transform Utility Operations",
        description:
          "Finnsap offers top-tier SAP IS-Utilities consulting services. Optimize your energy, water, and waste management business with SAP solutions.",
        images: ["https://www.finnsap.com/og.png"],
      },
      robots: "index, follow",
      alternates: {
        canonical: "https://www.finnsap.com/services/SAP-Services/SAP-IS-Utilities-Consulting",
      },
    };
  };
  