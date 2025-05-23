import React from 'react'
import { MdOutlineSettingsSuggest } from "react-icons/md";
import Image from 'next/image';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function SapAmiConsulting() {
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
              <MdOutlineSettingsSuggest className='text-4xl md:text-5xl transform scale-x-[-1]' />
            </div>
            <span>SAP Automated Metering Infrastructure Services</span>
          </h1>
          <p className='text-[#043e96] text-lg md:text-xl font-light'>
            At <span className='font-semibold'>FINNSAP</span>, SAP Automated Metering Infrastructure (AMI) enables utility companies to automate the reading of meters and manage consumption data efficiently.
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
                  <span className='font-semibold'>1: Meter Data Management: </span>
                  Centralized system for managing
                  data from various types of meters (electric, water, gas).
                </p>
                <p className='text-[#043e96] font-light'>
                  <span className='font-semibold'>2: Real-Time Data Processing: </span>
                  Continuous monitoring and
                  real-time processing of meter data for billing accuracy and
                  decision-making.
                </p>
                <p className='text-[#043e96] font-light'>
                  <span className='font-semibold'>3: Integration with SAP IS-U: </span>
                  Seamless integration with SAP
                  IS-U for enhanced customer service and billing processes.
                </p>
                <p className='text-[#043e96] font-light'>
                  <span className='font-semibold'>4: Scalability: </span>
                  Support for a wide range of meters and scaling
                  to meet the growing needs of utility providers.
                </p>
                <div>
                  <Image
                    className="w-full h-auto object-cover rounded-4xl"
                    src="/services/sap-ami/graph.jpeg"
                    alt="graph"
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
                  src="/services/sap-ami/businessman.jpg"
                  alt="businessman"
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
    title: "SAP AMI Consulting - Advanced Metering Infrastructure Solutions",
    description:
      "Finnsap provides expert SAP AMI consulting services, enabling smart metering, real-time data analytics, and seamless utility management for businesses.",
    keywords: [
      "SAP AMI Consulting",
      "Advanced Metering Infrastructure",
      "SAP Smart Metering",
      "SAP Utilities Solutions",
      "SAP AMI Implementation",
      "SAP AMI Integration",
      "SAP Smart Grid Solutions",
      "SAP Energy Data Management",
      "SAP Utility Billing",
      "Real-Time Meter Data Management",
      "SAP AMI Deployment",
      "SAP Digital Utilities",
      "SAP IS-U",
      "SAP IoT in Utilities",
      "SAP Meter Data Analytics",
    ],
    openGraph: {
      title: "SAP AMI Consulting - Smart Metering & Utility Management",
      description:
        "Optimize your utility management with SAP AMI consulting by Finnsap. We provide smart metering, real-time data processing, and grid optimization solutions.",
      url: `${process.env.BASE_URL}/services/SAP-Services/SAP-AMI-Consulting`,
      siteName: "Finnsap",
      images: [
        {
          url: `${process.env.BASE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "SAP AMI Consulting - Finnsap",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SAP AMI Consulting - Smart Utility & Metering Solutions",
      description:
        "Transform utility operations with SAP AMI consulting by Finnsap. Get smart metering, real-time data insights, and seamless integration solutions.",
      images: [`${process.env.BASE_URL}/og.png`],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.BASE_URL}/services/SAP-Services/SAP-AMI-Consulting`,
    },
  };
};
