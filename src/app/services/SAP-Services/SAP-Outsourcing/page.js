import React from 'react'
import { PiUserCircleGear } from "react-icons/pi";
import { GiPolarStar } from "react-icons/gi";
import { TiStarburst } from "react-icons/ti";
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import WhyChooseCard from '@/components/services/webServices/WhyChooseCard';
import Link from 'next/link';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function SapOutsourcing() {

    const cardData = [
        {
            image: "outsourcing1.jpg",
            h2: "SAP Managed Services",
            h3: "Ensure smooth, uninterrupted SAP operations with our end-to-end management solutions",
            list: [
                { listHeading: "SAP System Administration: ", listData: "Continuous monitoring, maintenance, and system optimization." },
                { listHeading: "SAP Hosting & Cloud Management: ", listData: "Secure, scalable, and cost-effective cloud-based SAP hosting." },
                { listHeading: "Database & Performance Optimization: ", listData: "Improving system performance and operational efficiency." },
                { listHeading: "Disaster Recovery & Backup: ", listData: "Ensuring data security, backup, and business continuity." },
            ]
        },
        {
            image: "outsourcing2.jpg",
            h2: "SAP Support & Maintenance",
            h3: "Keep your business running smoothly with 24/7 SAP support and expert assistance",
            list: [
                { listHeading: "24/7 SAP Helpdesk: ", listData: "Rapid issue resolution to minimize downtime." },
                { listHeading: "Functional & Technical Support: ", listData: "Comprehensive support across all SAP modules." },
                { listHeading: "Patch Management & Upgrades: ", listData: "Regular updates to keep your SAP system secure and up to date." },
                { listHeading: "User Training & Knowledge Transfer: ", listData: "Empowering your team with the necessary skills to manage SAP effectively." },
            ]
        },
        {
            image: "outsourcing3.jpg",
            h2: "SAP Implementation & Customization",
            h3: "Deploy, customize, and integrate SAP solutions tailored to your business needs",
            list: [
                { listHeading: "SAP Implementation : ", listData: "End-to-end deployment of SAP solutions for smooth business operations." },
                { listHeading: "Customization & Development: ", listData: "Development of custom modules, reports, and automation." },
                { listHeading: "SAP Integration: ", listData: "Seamless integration with third-party applications and enterprise systems." },
                { listHeading: "Process Optimization: ", listData: "Streamlining workflows and enhancing operational efficiency.." },
            ]
        },
        {
            image: "outsourcing4.jpg",
            h2: "SAP Outsourcing for Enterprises",
            h3: "Maximize SAP capabilities while reducing operational costs with specialized outsourcing solutions",
            list: [
                { listHeading: "SAP ISU Modules: ", listData: "FICA, Billing, Device Management, Customer Services." },
                { listHeading: "SAP BRIM Modules: ", listData: "FICA, Convergent Invoicing (CI), Convergent Charging (CC), Subscription Order Management (SOM)." },
                { listHeading: "SAP Integration: ", listData: "PI/PO, CPI, CM for seamless system connectivity." },
                { listHeading: "SAP FI Modules: ", listData: "Finance (FI), Financial Supply Chain Management (FSCM), Controlling (CO), Materials Management (MM), Plant Maintenance (PM), Project Systems (PS)." },
                { listHeading: "Data Migration: ", listData: "ECC to S/4HANA migration and Non-SAP to SAP migration." },
                { listHeading: "SAP Reporting: ", listData: "Business Intelligence & Analytics (BIW/BO/CDS)." },
                { listHeading: "SAP Security & Basis: ", listData: "Ensuring compliance, security, and system stability." },
            ]
        },
    ]

    const whyChooseUsData = [
        { image: "/services/sap-outsourcing/icons/experts.png", heading: "Certified SAP Experts ", description: "Experienced professionals across all SAP modules and domains." },
        { image: "/services/sap-outsourcing/icons/cost-effective.png", heading: "Cost-Effective Solutions ", description: "Reduce IT overhead with customized outsourcing plans." },
        { image: "/services/sap-outsourcing/icons/support.png", heading: "Proactive Support ", description: "Preventive maintenance to minimize disruptions and ensure peak performance." },
        { image: "/services/sap-outsourcing/icons/scalable.png", heading: "Scalable Services ", description: "Solutions designed to grow with your business needs." },
    ]

    return (
        <>
            <div className='w-full px-4 pb-4 sm:pb-8 md:pb-12 pt-16 sm:pt-20 md:px-6 lg:px-12 relative'>
                <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-12 sm:min-h-14 md:min-h-16 w-[60%] sm:w-[50%] md:w-80 bg-[#0dd4ff] absolute top-0 right-0 grid place-items-center'>
                    <p className=" font-light text-2xl sm:text-3xl w-fit text-white">
                        Our Offerings
                    </p>
                </div>
                <div className="w-full h-full px-4 py-6 md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
                    <div className={`${unbounded.className} flex flex-col gap-6`}>
                        <h1 className="text-3xl md:text-4xl py-2 flex sm:items-center gap-2 text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
                            <div className='w-fit'>
                                <PiUserCircleGear className='text-4xl md:text-5xl transform scale-x-[-1]' />
                            </div>
                            <span>SAP Outsourcing: Optimize, Innovate & Scale with Confidence</span>
                        </h1>
                        <p className='text-[#043e96] text-lg md:text-xl font-light'>
                            At <span className='font-semibold'>FINNSAP</span>, we specialize in <span className='font-semibold'>SAP Outsourcing Services</span> designed to help
                            businesses enhance efficiency, reduce costs, and drive innovation.
                            Whether you require full-scale SAP implementation, dedicated support,
                            or specialized module expertise, our team of <span className='font-semibold'>certified SAP professionals </span>
                            ensures seamless operations and long-term success.
                        </p>
                    </div>
                    <div className={`${unbounded.className} gap-6 lg:gap-12 mt-4`}>
                        <div className='grid place-items-center '>
                            <h2 className="text-lg py-2 flex gap-2 items-center text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#0ed4ff]">
                                Our SAP Outsourcing Solutions:
                            </h2>
                        </div>
                        <div className='grid grid-cols-12 gap-4 lg:gap-10 xl:gap-x-16 pt-4 sm:mt-2 md:mt-4'>
                            {
                                cardData.map((item, index) => (
                                    <div key={index} className='col-span-12 sm:col-span-6 web-card-2 p-4 xl:p-6'>
                                        <div className='flex flex-col gap-4'>
                                            <div className='w-full max-h-[300px] overflow-hidden bg-amber-500'>
                                                <Image
                                                    className="w-full h-auto object-cover"
                                                    src={`/services/sap-outsourcing/${item.image}`}
                                                    alt={item.image}
                                                    width={600}
                                                    height={300}
                                                    layout="responsive"
                                                    priority
                                                />
                                            </div>
                                            <div className='text-[#043e96] font-light flex flex-col gap-2'>
                                                <div className='inline'>
                                                    <h3 className='font-semibold flex w-fit'>{index + 1}. {item.h2}: </h3>
                                                    <span className='flex'>{item.h3}</span>
                                                </div>
                                                {
                                                    item.list.map((list, no) => (
                                                        <div key={no} className='flex gap-1'>
                                                            <div className='text-[22px]'>
                                                                <GiPolarStar />
                                                            </div>
                                                            <p><span className='font-semibold'>{list.listHeading}</span>{list.listData}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={`${unbounded.className} pt-4 sm:mt-2 md:mt-4 text-[#043e96] font-light grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6`}>
                        <div className='flex gap-1'>
                            <div className='text-[22px]'>
                                <TiStarburst />
                            </div>
                            <p><span className='font-semibold'>On-Site and Remote SAP Experts: </span>Flexible staffing options based on your business requirements.</p>
                        </div>
                        <div className='flex gap-1'>
                            <div className='text-[22px]'>
                                <TiStarburst />
                            </div>
                            <p><span className='font-semibold'>Business Process Outsourcing (BPO): </span>Efficient management of SAP-driven business processes.</p>
                        </div>
                        <div className='flex gap-1'>
                            <div className='text-[22px]'>
                                <TiStarburst />
                            </div>
                            <p><span className='font-semibold'>SAP Security & Compliance: </span>Ensuring regulatory compliance and data security.</p>
                        </div>
                        <div className='flex gap-1'>
                            <div className='text-[22px]'>
                                <TiStarburst />
                            </div>
                            <p><span className='font-semibold'>Flexible Engagement Models: </span>Choose from full, partial, or hybrid outsourcing models.</p>
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseCard data={whyChooseUsData} />
            <div className={`${unbounded.className} w-full bg-[#1c66d5] p-4 md:px-6 py-10 lg:px-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20`}>
                <div className="flex flex-col gap-4">
                    <p className='text-3xl text-[#fff]'>Get Started with SAP Outsourcing Today!</p>
                    <p className='text-xl text-[#fff]'>Transform your SAP operations with expert outsourcing solutions from FINNSAP. Contact us today to discuss how we can support your business growth and success.</p>
                </div>
                <div>
                    <Link href={"/contact"} className='bg-[#0dd4ff] py-2 md:py-3 px-6 md:px-8 font-bold text-white whitespace-nowrap rounded-full'>Contact Now</Link>
                </div>
            </div>
        </>

    )
}

export const generateMetadata = () => {
    return {
      title: "SAP Outsourcing Services - Optimize, Innovate, and Scale with Finnsap",
      description:
        "Enhance your business efficiency with Finnsap’s SAP Outsourcing Services. Get expert SAP consulting, implementation, and support to optimize operations and scale seamlessly.",
      keywords: [
        "SAP Outsourcing Services",
        "SAP Managed Services",
        "SAP Consulting Outsourcing",
        "SAP BPO Services",
        "SAP Support and Maintenance",
        "Enterprise SAP Outsourcing",
        "SAP IT Outsourcing",
        "SAP AMS (Application Management Services)",
        "SAP Offshore Development",
        "SAP Business Optimization",
        "SAP Implementation Outsourcing",
        "SAP Hosting Services",
        "Cloud SAP Outsourcing",
        "SAP Migration Support",
        "SAP Integration Outsourcing",
      ],
      openGraph: {
        title: "SAP Outsourcing Services - Expert SAP Solutions by Finnsap",
        description:
          "Partner with Finnsap for top-tier SAP Outsourcing Services. From consulting to managed services, we optimize your SAP ecosystem for efficiency and growth.",
        url: `${process.env.BASE_URL}/services/SAP-Services/SAP-Outsourcing`,
        siteName: "Finnsap",
        images: [
          {
            url: `${process.env.BASE_URL}/og.png`,
            width: 1200,
            height: 630,
            alt: "SAP Outsourcing Services - Finnsap",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "SAP Outsourcing Services - Optimize, Innovate & Scale",
        description:
          "Boost your business with Finnsap's SAP Outsourcing Services. We provide end-to-end SAP support, consulting, and implementation for enterprises.",
        images: [`${process.env.BASE_URL}/og.png`],
      },
      robots: "index, follow",
      alternates: {
        canonical: `${process.env.BASE_URL}/services/SAP-Services/SAP-Outsourcing`,
      },
    };
  };
  
