import React from 'react'
import { PiGearLight } from "react-icons/pi";
import { Unbounded } from 'next/font/google'
const unbounded = Unbounded({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function SapEprConsulting() {
  return (
    <div className='w-full min-h-screen bg-white relative px-4 pb-4 md:pb-6 lg:pb-12 pt-16 sm:pt-20 md:px-6 lg:px-12'>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-12 sm:min-h-14 md:min-h-16 w-[60%] sm:w-[50%] md:w-80 bg-[#0dd4ff] absolute top-0 right-0 grid place-items-center'>
        <p className=" font-light text-2xl sm:text-3xl w-fit text-white">
          Our Offerings
        </p>
      </div>
      <div className="w-full h-full px-4 py-6  md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
        <div className={`${unbounded.className} flex flex-col gap-6`}>
          <h1 className="text-3xl md:text-4xl py-2 flex sm:items-center gap-2 font-light text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
            <div className='w-fit'>
              <PiGearLight className='text-4xl md:text-5xl' />
            </div>
            <span>SAP ERP Consulting</span>
          </h1>
          <p className='text-[#043e96] md:text-lg font-light'>
            <span className='font-semibold'>Overview: </span>
            SAP S/4 HANA is a next-generation ERP suite designed to help businesses run smarter, faster, and more
            efficiently. It simplifies business processes, integrates operations, and provides real-time data insights. With its in-memory
            computing capabilities, it empowers businesses to make data-driven decisions with speed and agility.
          </p>
        </div>
        <div className={`${unbounded.className}  gap-6 lg:gap-12 mt-4`}>
          <h2 className="text-xl py-2 flex gap-2 items-center text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
            Our Expertise:
          </h2>
          <ul className=' list-disc grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 pb-0 md:p-6 md:pb-0'>
            <li className='text-[#043e96] text-sm md:text-base font-light'>
              <span className='font-semibold'>SAP S/4 HANA Finance (FI): </span>
              Optimizing financial processes with
              real-time reporting, seamless integration with other modules, and
              powerful analytics for managing accounts, reporting, and financial
              planning.
            </li>
            <li className='text-[#043e96] text-sm md:text-base font-light'>
              <span className='font-semibold'>SAP S/4 HANA Production Planning (PP): </span>
              Planning and optimizing manufacturing processes, managing production
              schedules, and ensuring efficient production operations.
            </li>
            <li className='text-[#043e96] text-sm md:text-base font-light'>
              <span className='font-semibold'>SAP S/4 HANA Controlling (CO): </span>
              Enhancing cost management
              and internal reporting. This module helps businesses optimize
              budgeting, tracking, and controlling financial data.
            </li>
            <li className='text-[#043e96] text-sm md:text-base font-light'>
              <span className='font-semibold'>SAP S/4 HANA Supply Chain Management (SCM): </span>
              Enhancing
              logistics, warehouse management, and distribution with real-time
              data for better supply chain decisions.
            </li>
            <li className='text-[#043e96] text-sm md:text-base font-light'>
              <span className='font-semibold'>SAP S/4 HANA Materials Management (MM): </span>
              Streamlining
              procurement, inventory management, and supplier relationships
              with automated processes for ordering, purchasing, and goods
              receipt.
            </li>
            <li className='text-[#043e96] text-sm md:text-base font-light'>
              <span className='font-semibold'>SAP S/4 HANA Human Resources (HR): </span>
              Modernizing HR
              processes such as payroll, talent management, and employee
              engagement with a unified HR system.
            </li>
            <li className='text-[#043e96] text-sm md:text-base font-light'>
              <span className='font-semibold'>SAP S/4 HANA Sales and Distribution (SD): </span>
              Optimizing order-to
              cash processes, managing pricing, order fulfillment, and customer
              relationship management (CRM) for increased efficiency and
              customer satisfaction.
            </li>
            <li className='text-[#043e96] text-sm md:text-base font-light'>
              <span className='font-semibold'>SAP S/4 HANA Procurement (PM): </span>
              Managing procurement
              processes with smarter workflows, vendor management, and
              automated purchasing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export const generateMetadata = () => {
  return {
    title: "SAP ERP Consulting - Expert SAP ERP Solutions by Finnsap",
    description:
      "Finnsap provides expert SAP ERP consulting services, including implementation, integration, and support to optimize business processes and drive efficiency.",
    keywords: [
      "SAP ERP Consulting",
      "SAP ERP Solutions",
      "SAP Business One",
      "SAP S/4HANA Consulting",
      "SAP ERP Implementation",
      "SAP ERP Migration",
      "SAP ERP Integration",
      "Enterprise Resource Planning",
      "SAP ERP Customization",
      "SAP ERP Support Services",
      "Cloud ERP Solutions",
      "SAP Digital Transformation",
      "SAP Financial Management",
      "SAP Supply Chain Management",
      "SAP Manufacturing Solutions",
    ],
    openGraph: {
      title: "SAP ERP Consulting - Comprehensive SAP ERP Solutions",
      description:
        "Optimize your business operations with Finnsap’s SAP ERP consulting services. We provide expert implementation, migration, and support for SAP ERP systems.",
      url: "https://www.finnsap.com/services/SAP-Services/SAP-EPR-Consulting",
      siteName: "Finnsap",
      images: [
        {
          url: "https://www.finnsap.com/og.png",
          width: 1200,
          height: 630,
          alt: "SAP ERP Consulting - Finnsap",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SAP ERP Consulting - Optimize Your Business with SAP",
      description:
        "Finnsap offers expert SAP ERP consulting services to help businesses streamline operations, improve efficiency, and drive digital transformation.",
      images: ["https://www.finnsap.com/og.png"],
    },
    robots: "index, follow",
    alternates: {
      canonical: "https://www.finnsap.com/services/SAP-Services/SAP-EPR-Consulting",
    },
  };
};
