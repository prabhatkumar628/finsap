import React from 'react'
import Image from 'next/image';
import WhyChooseCard from '@/components/services/webServices/WhyChooseCard';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function MobileAppDevelopment() {
  const appDevExpertise = [
    { title: "1: Native App Development:", text: "Develop fast, secure, and high-performing apps tailored specifically for iOS (Swift) and Android (Kotlin) platforms.", },
    { title: "2: Cross-Platform App Development:", text: "Leverage frameworks like React Native and Flutter to build cost-effective, high-performance apps for both Android and iOS with a single codebase.", },
    { title: "3: Enterprise & Business Apps:", text: "Streamline operations with custom enterprise apps for workforce management, CRM, ERP integration, and real-time collaboration.", },
    { title: "4: UI/UX & Mobile App Design:", text: "Deliver engaging and intuitive user experiences with modern UI/UX design principles, ensuring higher user retention and satisfaction.", },
    { title: "5: Cloud & API-Driven Apps:", text: "Develop scalable, cloud-based applications with seamless API integrations for real-time data processing and enhanced performance.", },
    { title: "6: AI & IoT-Enabled Apps:", text: "Innovate with AI-powered chatbots, predictive analytics, and IoT integrations for smart, data-driven mobile applications.", },
  ]
  const whyChooseUsData = [
    { image: "/services/web-services/app-development/icons/custom.png", heading: "Custom Solutions", description: "Every app is designed to meet your specific business requirements." },
    { image: "/services/web-services/app-development/icons/ux-design.png", heading: "User-Centric Design", description: "Engaging UI/UX ensures high user satisfaction and retention." },
    { image: "/services/web-services/app-development/icons/optimization.png", heading: "Performance-Optimized", description: "Fast, responsive, and reliable apps with minimal load times." },
    { image: "/services/web-services/app-development/icons/security.png", heading: "Security First", description: "End-to-end encryption and secure data handling." },
    { image: "/services/web-services/app-development/icons/future.png", heading: "Future-Ready Tech", description: "Cutting-edge technologies like AI, Blockchain, and IoT." },
    { image: "/services/web-services/app-development/icons/support.png", heading: "Ongoing Maintenance & Support", description: "Ensuring your app stays updated and runs smoothly." },
  ]
  return (
    <>
      <div className='w-full min-h-screen relative px-4 pb-4 sm:pb-8 md:pb-12 pt-16 sm:pt-20 md:px-6 lg:px-12'>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-12 sm:min-h-14 md:min-h-16 w-[60%] sm:w-[50%] md:w-80 bg-[#0dd4ff] absolute top-0 right-0 grid place-items-center'>
          <p className=" font-light text-2xl sm:text-3xl w-fit text-white">
            Our Offerings
          </p>
        </div>
        <div className="w-full h-full px-4 py-6 md:p-6 lg:px-12 md:pb-12 flex-1 border-2 border-[#8ea8d0]">
          <div className={`${unbounded.className} gap-4 flex items-center`}>
            <div className="w-[70px] min-w-[50px] h-[70px] grid place-items-center">
              <Image
                src="/services/web-services/app-development/appdevicon.png"
                alt='app development' width={70} height={70}
              />
            </div>
            <h1 className="text-3xl md:text-4xl py-2 flex items-center gap-3 text-[#043e96] relative after:absolute after:w-[80px] md:after:w-[100px] after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-[#0ed4ff]">
              Innovative & Scalable Mobile Solutions for Your Business
            </h1>
          </div>
          <div className=' my-4'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 bg-white sm:p-4 rounded-2xl web-card'>
              <div className='order-2 md:order-1 col-span-12 md:col-span-5 flex justify-center md:justify-start'>
                <Image
                  className='w-full max-w-[400px] h-auto object-cover rounded-2xl'
                  src="/services/web-services/app-development/appdevhero.jpg"
                  alt='mobile app development'
                  width={280}
                  height={150}
                />
              </div>
              <div className={`order-1 md:order-2 col-span-12 md:col-span-7 ${unbounded.className} flex items-center`}>
                <p className='text-[#043e96] text-lg md:text-xl font-light'>
                  <span className='font-semibold'>Overview: </span>
                  At Finnsap, we design and develop high-performance, user-centric mobile applications tailored to your business needs. Whether it{"'"}s iOS, Android, or cross-platform, our expert developers build feature-rich apps that enhance user experience and drive business growth.
                </p>
              </div>
            </div>
          </div>
          <div className={`${unbounded.className} gap-6 lg:gap-12 mt-4`}>
            <h2 className="text-lg py-2 flex gap-2 items-center text-[#043e96] relative after:absolute after:content-[''] after:w-[80px] lg:after:w-[100px] after:h-[2px] after:bottom-0 after:left-0 after:bg-[#0ed4ff]">
              Our Expertise:
            </h2>
            <div className='grid grid-cols-12 pt-4 md:pt-6 gap-4 sm:gap-6 md:gap-10'>
              <div className='col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='max-w-[600px] flex flex-col gap-4 m-auto '>
                  {appDevExpertise.map((item, index) => (
                    <p key={index} className='text-[#043e96] font-light'>
                      <span className='font-semibold'>{item.title} </span>
                      {item.text}
                    </p>
                  ))}
                </div>
                <div className="overflow-hidden w-full max-w-[600px] xl:max-w-[700px] h-auto m-auto">
                  <Image
                    className="w-full h-full rounded-3xl object-cover "
                    src="/services/web-services/app-development/appdev.jpg"
                    alt="app development banner"
                    width={600}
                    height={400}
                    layout="responsive"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseCard data={whyChooseUsData} />
    </>
  )
}

export const generateMetadata = () => {
  return {
    title: "Mobile App Development Services - Custom App Solutions by Finnsap",
    description:
      "Discover Finnsap's expert mobile app development services, including iOS, Android, cross-platform, and enterprise app solutions for businesses.",
    keywords: [
      "Mobile App Development",
      "iOS App Development",
      "Android App Development",
      "Cross-Platform App Development",
      "Enterprise Mobile Solutions",
      "Custom Mobile App Development",
      "Mobile UI/UX Design",
      "React Native Development",
      "Flutter App Development",
      "Mobile App Performance Optimization",
      "Mobile App Security Solutions",
      "App Store Optimization (ASO)",
      "Mobile App Integration",
      "Custom Business Apps",
      "AI-Powered Mobile Applications",
    ],
    openGraph: {
      title: "Mobile App Development Services - Custom Solutions by Finnsap",
      description:
        "Explore Finnsap's mobile app development expertise in iOS, Android, and cross-platform applications. Custom solutions for startups & enterprises.",
      url: `${process.env.BASE_URL}/services/Web-Services/Mobile-App-Development`,
      siteName: "Finnsap",
      images: [
        {
          url: `${process.env.BASE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "Mobile App Development Services - Finnsap",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mobile App Development - Custom App Solutions",
      description:
        "Get high-performance mobile app solutions with Finnsap. We specialize in iOS, Android, and cross-platform development.",
      images: [`${process.env.BASE_URL}/og.png`],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.BASE_URL}/services/Web-Services/Mobile-App-Development`,
    },
  };
};