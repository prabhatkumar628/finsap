import React from 'react'
import { PiGearLight } from "react-icons/pi";
import { Unbounded } from 'next/font/google'
const unbounded = Unbounded({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });


export default function SapServicesPortfolio() {
  return (
    <>
      <div className='w-full min-h-screen bg-white relative px-4 pb-4 md:pb-6 lg:pb-12 pt-16 sm:pt-20 md:px-6 lg:px-12'>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-12 sm:min-h-14 md:min-h-16 w-[60%] sm:w-[50%] md:w-80 bg-[#0dd4ff] absolute top-0 right-0 grid place-items-center'>
          <p className=" font-light text-2xl sm:text-3xl w-fit text-white">
            Our Offerings
          </p>
        </div>

        <div className="w-full h-full px-4 py-6  md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
          <div className={unbounded.className}>
            <h1 className="text-3xl md:text-4xl xl:text-5xl py-2 flex gap-2 sm:items-center font-light text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
              <PiGearLight className='text-4xl md:text-5xl xl:text-6xl' />
              <span>SAP Services Portfolio</span>
            </h1>
          </div>
          <div className={`${unbounded.className}  gap-6 lg:gap-12 mt-4`}>
            <div className=' flex flex-col gap-4 md:gap-8'>

              <p className='text-[#043e96] md:text-lg xl:text-xl md:tracking-wider font-light'>
                FINNSAP is a SAP focused organisation, offering wide range of services to our clients with prime
                emphasis on industry verticals like Utilities, Oil & Gas and Public Sector.
              </p>
              <p className='text-[#043e96] md:text-lg xl:text-xl md:tracking-wider font-light'>
                <span className='font-semibold'>Implementation & Integration: </span>
                Seamless integration of SAP S/4 HANA with your existing systems optimized
                business processes. We help you design, configure, and deploy SAP S/4 HANA tailored to your business
                needs.
              </p>
              <p className='text-[#043e96] md:text-lg xl:text-xl md:tracking-wider font-light'>
                <span className='font-semibold'>SAP Rollout: </span>
                Extending SAP functionalities to new business units or company expansions, either
                geographically or by adding new business units, in a consistent and standardized way, ensuring that all areas
                of the business are aligned and operating with the same system, across multiple regions or subsidiaries.
              </p>
              <p className='text-[#043e96] md:text-lg xl:text-xl md:tracking-wider font-light'>
                <span className='font-semibold'>Customization & Configuration: </span>
                Tailoring the system to meet your specific business needs, ensuring the
                right features and functionalities are enabled for every department across the organization.
              </p>
              <p className='text-[#043e96] md:text-lg xl:text-xl md:tracking-wider font-light'>
                <span className='font-semibold'>Upgrade Services: </span>
                Transition from legacy ERP systems to SAP S/4 HANA, ensuring your infrastructure is
                future-ready. We ensure smooth migration, keeping business disruption to a minimum and enabling you to
                harness the full power of S/4 HANA.
              </p>
              <p className='text-[#043e96] md:text-lg xl:text-xl md:tracking-wider font-light'>
                <span className='font-semibold'>Training & Support: </span>
                Offering training programs and dedicated support to ensure your team can effectively
                use the system post-deployment. We provide user-friendly training, system documentation, and helpdesk
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
