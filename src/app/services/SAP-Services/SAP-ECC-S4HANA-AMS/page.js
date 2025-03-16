import React from 'react'
import { GiGears } from "react-icons/gi";
import Image from 'next/image';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function SapEccAms() {
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
              <GiGears className='text-4xl md:text-5xl transform scale-x-[-1]' />
            </div>
            <span> SAP ECC AMS (Application Management Services)</span>
          </h1>
          <p className='text-[#043e96] text-lg md:text-xl font-light'>
            <span className='font-semibold'>Overview: </span>
            SAP ECC (Enterprise Central Component) is a core part of your business operations, and our Application Management
            Services ensure it runs smoothly with maximum efficiency.
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
                  <span className='font-semibold'>1: 24/7 Support: </span>
                  Continuous monitoring and support for SAP
                  ECC to ensure business continuity.
                </p>
                <p className='text-[#043e96] font-light'>
                  <span className='font-semibold'>2: Performance Optimization: </span>
                  Regular system health checks
                  and performance enhancements to optimize efficiency.
                </p>
                <p className='text-[#043e96] font-light'>
                  <span className='font-semibold'>3: Incident & Problem Management: </span>
                  Rapid resolution of any
                  technical issues with minimal downtime.
                </p>
                <p className='text-[#043e96] font-light'>
                  <span className='font-semibold'>4: Upgrades & Patches: </span>
                  Keeping your SAP ECC system
                  updated and aligned with the latest SAP features and security
                  patches.
                </p>
                <div>
                  <Image
                    className="w-full h-auto object-cover rounded-4xl"
                    src="/services/sap-ecc-s4hana/security.jpg"
                    alt="security"
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
                  src="/services/sap-ecc-s4hana/analysis.jpg"
                  alt="analysis"
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
    title: "SAP ECC & S/4HANA AMS - Application Management Services by Finnsap",
    description:
      "Finnsap provides expert SAP ECC & S/4HANA Application Management Services (AMS), ensuring seamless operations, system optimization, and business continuity.",
    keywords: [
      "SAP ECC AMS",
      "SAP S/4HANA AMS",
      "SAP Application Management Services",
      "SAP ECC Support",
      "SAP S/4HANA Support",
      "SAP AMS Consulting",
      "SAP Managed Services",
      "SAP System Optimization",
      "SAP Technical Support",
      "SAP Functional Support",
      "SAP Business Continuity",
      "SAP IT Support Services",
      "SAP ECC to S/4HANA Migration",
      "SAP Cloud AMS",
      "SAP ERP Maintenance",
    ],
    openGraph: {
      title: "SAP ECC & S/4HANA AMS - Expert SAP Application Management Services",
      description:
        "Ensure smooth SAP ECC & S/4HANA operations with Finnsap's AMS solutions. We offer expert support, maintenance, and optimization for your SAP systems.",
      url: `${process.env.BASE_URL}/services/SAP-Services/SAP-ECC-S4HANA-AMS`,
      siteName: "Finnsap",
      images: [
        {
          url: `${process.env.BASE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "SAP ECC & S/4HANA AMS - Finnsap",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SAP ECC & S/4HANA AMS - SAP Application Management Services",
      description:
        "Finnsap provides end-to-end SAP AMS solutions, ensuring optimal performance and continuous improvement for SAP ECC & S/4HANA systems.",
      images: [`${process.env.BASE_URL}/og.png`],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.BASE_URL}/services/SAP-Services/SAP-ECC-S4HANA-AMS`,
    },
  };
};
