import React from 'react';
import { MdOutlineOilBarrel } from "react-icons/md";
import Image from 'next/image';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function Page() {
    return (
        <div className='w-full min-h-screen relative px-4 pb-4 sm:pb-8 md:pb-12 pt-16 sm:pt-20 md:px-6 lg:px-12'>
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-12 sm:min-h-14 md:min-h-16 w-[60%] sm:w-[50%] md:w-80 bg-[#0dd4ff] absolute top-0 right-0 grid place-items-center'>
                <p className=" font-light text-2xl sm:text-3xl w-fit text-white">
                    Our Offerings
                </p>
            </div>
            <div className="w-full h-full px-4 py-6 md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
                <div className={`${unbounded.className} flex flex-col gap-6`}>
                    <h1 className="text-3xl md:text-4xl py-2 flex sm:items-center gap-2 text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
                        <div className='w-fit'>
                            <MdOutlineOilBarrel className='text-4xl md:text-5xl' />
                        </div>
                        <span>SAP IS-Oil & Gas Consulting</span>
                    </h1>
                    <p className='text-[#043e96] text-lg md:text-xl font-light'>
                        <span className='font-semibold'>Overview: </span>
                        SAP IS-Oil & Gas is a solution designed specifically for the oil and gas industry, offering features to manage upstream,
                        midstream, and downstream operations.
                    </p>
                </div>
                <div className={`${unbounded.className} gap-6 lg:gap-12 mt-4`}>
                    <h2 className="text-lg py-2 flex gap-2 items-center text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
                        Our Expertise:
                    </h2>
                    <div className='grid grid-cols-12 pt-4 md:pt-6 gap-4 sm:gap-6 md:gap-10'>
                        <div className='col-span-12 xl:col-span-5 order-2 xl:order-1 grid place-items-center '>
                            <div className='max-w-[600px] flex flex-col gap-4 '>
                                <p className='text-[#043e96] font-light'>
                                    <span className='font-semibold'>1: Upstream & Exploration: </span>
                                    Streamline exploration, drilling, and production management for greater operational efficiency.
                                </p>
                                <p className='text-[#043e96] font-light'>
                                    <span className='font-semibold'>2: Supply Chain Management: </span>
                                    Optimize the supply chain, from procurement of materials to delivery to the field.
                                </p>
                                <p className='text-[#043e96] font-light'>
                                    <span className='font-semibold'>3: Revenue and Expense Management: </span>
                                    Control costs, track revenues, and gain visibility into financial operations.
                                </p>
                                <p className='text-[#043e96] font-light'>
                                    <span className='font-semibold'>4: Regulatory Compliance & Reporting:</span>
                                    Stay compliant with industry regulations and easily manage reporting requirements.
                                </p>
                                <div>
                                    <Image
                                        className="w-full h-auto object-cover rounded-4xl"
                                        src="/industries/oil-and-gas-consulting/oil-drilling.jpg"
                                        alt="Oil & Gas Industry"
                                        width={600}
                                        height={400}
                                        layout="responsive"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-7 order-1 xl:order-2 flex justify-center">
                            <div className="relative w-full max-w-[600px] xl:max-w-[700px] h-[250px] sm:h-[300px] md:h-[400px] xl:h-full xl:max-h-[600px]">
                                <Image
                                    className="rounded-4xl object-cover"
                                    src="/industries/oil-and-gas-consulting/industry.jpg"
                                    alt="Oil & Gas Industry"
                                    fill
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const generateMetadata = () => {
    return {
      title: "SAP Oil & Gas Consulting - Expert SAP Solutions for Energy Sector",
      description:
        "Finnsap provides specialized SAP consulting for the oil & gas industry. Optimize operations with tailored SAP solutions, ERP integration, and digital transformation.",
      keywords: [
        "SAP Oil & Gas Consulting",
        "SAP for Energy Sector",
        "Oil & Gas ERP Solutions",
        "SAP S/4HANA for Oil & Gas",
        "SAP Upstream Solutions",
        "SAP Midstream Solutions",
        "SAP Downstream Solutions",
        "Energy Industry SAP Solutions",
        "Oil & Gas Digital Transformation",
        "SAP Asset Management",
        "SAP Supply Chain for Oil & Gas",
        "SAP HANA for Energy Industry",
        "SAP Business One for Oil & Gas",
        "Enterprise Resource Planning for Oil & Gas",
        "IT Consulting for Oil & Gas Industry",
      ],
      openGraph: {
        title: "SAP Oil & Gas Consulting - Optimize Your Energy Business",
        description:
          "Get expert SAP solutions for the oil & gas industry with Finnsap. From SAP S/4HANA to ERP integration, we help energy businesses streamline operations.",
        url: "https://www.finnsap.com/industries/SAP-Oil-And-Gas-Consulting",
        siteName: "Finnsap",
        images: [
          {
            url: "https://www.finnsap.com/og.png",
            width: 1200,
            height: 630,
            alt: "SAP Oil & Gas Consulting - Finnsap",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "SAP Oil & Gas Consulting - Expert SAP Solutions",
        description:
          "Finnsap offers top-tier SAP consulting for the oil & gas industry. Optimize operations, enhance efficiency, and drive digital transformation.",
        images: ["https://www.finnsap.com/og.png"],
      },
      robots: "index, follow",
      alternates: {
        canonical: "https://www.finnsap.com/industries/SAP-Oil-And-Gas-Consulting",
      },
    };
  };