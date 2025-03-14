import React from 'react'
import Image from 'next/image';
import WhyChooseCard from '@/components/services/webServices/WhyChooseCard';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });


export default function MobileAppSupport() {
  const appDevExpertise = [
    { title: "1: Regular App Updates & Enhancements:", text: "Stay ahead of the competition with frequent updates, adding new features, UI improvements, and security enhancements.", },
    { title: "2: Performance Optimization:", text: "Monitor and improve app performance with speed optimizations, crash fixes, and real-time analytics monitoring.", },
    { title: "3: Bug Fixing & Issue Resolution:", text: "Detect and fix bugs efficiently, ensuring a seamless, error-free user experience on all devices.", },
    { title: "4: OS & Device Compatibility Updates:", text: "Ensure your app remains compatible with the latest iOS, Android, and cross-platform updates, avoiding any disruptions.", },
    { title: "5: Security & Compliance Management:", text: "Protect user data with regular security audits, encryption updates, and compliance with industry standards like GDPR and HIPAA.", },
    { title: "6: 24/7 Monitoring & Support:", text: "Our team provides proactive monitoring and real-time support, addressing potential issues before they affect users.", },
    { title: "7: Third-Party API & Backend Maintenance:", text: "Ensure smooth integration and performance of third-party APIs, cloud services, and backend infrastructure.", },
  ]

  const whyChooseUsData = [
    { image: "/services/web-services/app-support/icons/Proactive.png", heading: "Proactive Maintenance", description: "We prevent issues before they arise, keeping your app running smoothly." },
    { image: "/services/web-services/app-support/icons/user.png", heading: "User-Centric Approach", description: "We ensure a seamless and uninterrupted experience for your customers." },
    { image: "/services/web-services/app-support/icons/growth.png", heading: "Scalability & Growth", description: "We help scale your app with continuous updates and new feature rollouts." },
    { image: "/services/web-services/app-support/icons/secure.png", heading: "Security & Compliance", description: "Regular security patches to protect user data and meet regulatory standards." },
    { image: "/services/web-services/app-support/icons/benefit.png", heading: "Cost-Effective Support Plans", description: "Flexible, budget-friendly maintenance packages tailored to your business needs." },
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
                src="/services/web-services/app-support/appsupporticon.png"
                alt='mobile app support icon' width={70} height={70}
              />
            </div>
            <h1 className="text-3xl md:text-4xl py-2 flex items-center gap-3 text-[#043e96] relative after:absolute after:w-[80px] md:after:w-[100px] after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-[#0ed4ff]">
              Comprehensive Mobile App Support & Maintenance Services
            </h1>
          </div>
          <div className=' my-4'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 bg-white sm:p-4 rounded-2xl web-card'>
              <div className='order-2 md:order-1 col-span-12 md:col-span-5 flex justify-center md:justify-start'>
                <Image
                  className='w-full max-w-[400px] h-auto object-cover rounded-2xl'
                  src="/services/web-services/app-support/appsupport-hero.jpg"
                  alt='mobile app support'
                  width={280}
                  height={150}
                />
              </div>
              <div className={`order-1 md:order-2 col-span-12 md:col-span-7 ${unbounded.className} flex items-center`}>
                <p className='text-[#043e96] text-lg md:text-xl font-light'>
                  <span className='font-semibold'>Overview: </span>
                  At Finnsap, we provide end-to-end mobile app support and maintenance services to ensure your app remains secure, up-to-date, and fully optimized. Whether it{"'"}s bug fixes, performance enhancements, feature updates, or security patches, our expert team ensures seamless app functionality and an enhanced user experience.
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
                    className="w-full max-h-[450px] rounded-3xl object-cover "
                    src="/services/web-services/app-support/appsupport.jpg"
                    alt="mobile app support banner"
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
    title: "Mobile App Support & Maintenance Services - Finnsap",
    description:
      "Ensure your mobile app runs smoothly with Finnsap's expert support & maintenance services. Bug fixes, security updates, performance optimization & more.",
    keywords: [
      "Mobile App Support",
      "App Maintenance Services",
      "iOS App Support",
      "Android App Support",
      "Mobile App Bug Fixes",
      "App Performance Optimization",
      "Security Updates for Apps",
      "Mobile App Troubleshooting",
      "App Store Updates",
      "User Experience Optimization",
      "Mobile App Monitoring",
      "Emergency App Support",
      "Third-Party API Support",
      "Cross-Platform App Support",
      "24/7 App Maintenance",
    ],
    openGraph: {
      title: "Mobile App Support & Maintenance Services - Finnsap",
      description:
        "Keep your mobile app secure and high-performing with Finnsap's professional support services. We provide troubleshooting, bug fixes, and updates.",
      url: "https://www.finnsap.com/services/Web-Services/Mobile-App-Support",
      siteName: "Finnsap",
      images: [
        {
          url: "https://www.finnsap.com/og.png",
          width: 1200,
          height: 630,
          alt: "Mobile App Support Services - Finnsap",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mobile App Support & Maintenance Services",
      description:
        "Get expert mobile app support from Finnsap. We handle bug fixes, security patches, performance optimization, and continuous maintenance.",
      images: ["https://www.finnsap.com/og.png"],
    },
    robots: "index, follow",
    alternates: {
      canonical: "https://www.finnsap.com/services/Web-Services/Mobile-App-Support",
    },
  };
};