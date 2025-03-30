import React from 'react'
import { MdSupportAgent } from "react-icons/md";
import { GiPolarStar } from "react-icons/gi";
import { TiStarburst } from "react-icons/ti";
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import WhyChooseCard from '@/components/services/webServices/WhyChooseCard';
import Link from 'next/link';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function TrainingAndSupport() {

    const cardData = [
        {
            image: "/services/training-support/training.jpg",
            h2: "Professional Training Programs",
            h3: "Our expert-led training programs are designed to equip individuals and teams with the essential skills required for operational excellence. Our offerings include:",
            list: [
                { listHeading: "Corporate Training: ", listData: "Leadership development, team-building, and productivity enhancement." },
                { listHeading: "SAP Technical Training: ", listData: "Specialized training on SAP ISU and BRIM modules delivered by industry experts." },
                { listHeading: "Soft Skills Development: ", listData: "Training in communication, customer service, and professional growth." },
                { listHeading: "Customized Training: ", listData: "Tailor-made programs designed to address your specific business requirements." },
            ]
        },
        {
            image: "/services/training-support/support.jpg",
            h2: "Dedicated Support Services",
            h3: "We provide ongoing technical and functional support to maximize the value of your SAP systems and training investments. Our support services include:",
            list: [
                { listHeading: "Technical Support: ", listData: "Troubleshooting, system maintenance, and IT support." },
                { listHeading: "Customer Service Training: ", listData: "SpeciaEnhancing service quality and customer interactions." },
                { listHeading: "Employee Assistance Programs: ", listData: "On-demand coaching and skills reinforcement." },
                { listHeading: "Helpdesk & Remote Support: ", listData: "Fast, reliable solutions to keep your operations running smoothly." },
            ],
        },
    ]

    const whyChooseUsData = [
        { image: "/services/training-support/icons/experts.png", heading: "Industry Experts ", description: "Our trainers and support specialists are seasoned SAP professionals." },
        { image: "/services/training-support/icons/flexibility.png", heading: "Flexible Learning Options ", description: "Choose from on - site, virtual, and self - paced training modules." },
        { image: "/services/training-support/icons/solution.png", heading: "Tailored Solutions ", description: "Custom - designed programs to meet your business’s unique needs." },
        { image: "/services/training-support/icons/support.png", heading: "Continuous Support ", description: "We provide post - training assistance to ensure long - term success." },
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
                                <MdSupportAgent className='text-4xl md:text-5xl transform scale-x-[-1]' />
                            </div>
                            <span>Corporate Training & Support</span>
                        </h1>
                        <p className='text-[#043e96] text-lg md:text-xl font-light'>
                            At <span className='font-semibold'>FINNSAP</span>, we provide comprehensive corporate training programs and dedicated support services to ensure your team can effectively utilize SAP systems post-deployment. Our tailored solutions help businesses enhance productivity, improve system efficiency, and drive long-term success. Whether you aim to upskill your workforce, implement new systems, or optimize customer service, we have the expertise and resources to support your goals.
                        </p>
                    </div>
                    <div className={`${unbounded.className} gap-6 lg:gap-12 mt-4`}>
                        <div className='grid place-items-center '>
                            <h2 className="text-lg py-2 flex gap-2 items-center text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#0ed4ff]">
                                Our Services
                            </h2>
                        </div>
                        <div className='grid grid-cols-12 gap-4 lg:gap-10 xl:gap-x-16 pt-4 sm:mt-2 md:mt-4'>
                            {
                                cardData.map((item, index) => (
                                    <div key={index} className='col-span-12 sm:col-span-6 web-card-2 p-4 xl:p-6'>
                                        <div className='flex flex-col gap-4'>
                                            <div className='w-full max-h-[300px] overflow-hidden bg-black'>
                                                <Image
                                                    className="w-full h-auto object-cover"
                                                    src={`${item.image}`}
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
                </div>
            </div>
            <WhyChooseCard data={whyChooseUsData} />
            <div className={`${unbounded.className} w-full bg-[#1c66d5] p-4 md:px-6 py-10 lg:px-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20`}>
                <div className="flex flex-col gap-4">
                    <p className='text-3xl text-[#fff]'>Get Started Today!</p>
                    <p className='text-xl text-[#fff]'>Empower your team with expert training and reliable SAP support. Contact us today to learn how FINNSAP can help your business enhance efficiency, improve system adoption, and drive growth.</p>
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
      title: "SAP Corporate Training & Support - Expert SAP Learning by Finnsap",
      description:
        "Empower your workforce with Finnsap’s SAP Corporate Training & Support services. Get expert-led SAP training and dedicated support for seamless business operations.",
      keywords: [
        "SAP Corporate Training",
        "SAP Training & Support",
        "Corporate SAP Learning",
        "SAP Professional Training",
        "SAP Employee Training",
        "SAP Certification Training",
        "SAP Skill Development",
        "Enterprise SAP Training",
        "SAP Implementation Training",
        "SAP End-User Training",
        "SAP Functional Training",
        "SAP Technical Training",
        "SAP Business Process Training",
        "SAP AMS (Application Management Services) Training",
        "SAP Enterprise Support",
      ],
      openGraph: {
        title: "SAP Corporate Training & Support - Enhance SAP Skills with Finnsap",
        description:
          "Boost your team's SAP expertise with Finnsap’s Corporate Training & Support. Our SAP experts deliver top-notch training and ongoing support for enterprises.",
        url: `${process.env.BASE_URL}/services/SAP-Services/Training-And-Support`,
        siteName: "Finnsap",
        images: [
          {
            url: `${process.env.BASE_URL}/og.png`,
            width: 1200,
            height: 630,
            alt: "SAP Corporate Training & Support - Finnsap",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "SAP Corporate Training & Support - Learn & Grow with Finnsap",
        description:
          "Get expert SAP Corporate Training & Support from Finnsap. Enhance your team's SAP skills with customized training and expert support services.",
        images: [`${process.env.BASE_URL}/og.png`],
      },
      robots: "index, follow",
      alternates: {
        canonical: `${process.env.BASE_URL}/services/SAP-Services/Training-And-Support`,
      },
    };
  };
  
