import React from 'react'
import Image from 'next/image';
import WhyChooseCard from '@/components/services/webServices/WhyChooseCard';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function WebSupport() {
  const webSupportExpertise = [
    { title: "1: Website Performance Optimization:", text: "Enhance loading speed, responsiveness, and overall performance to improve user experience and SEO rankings.", },
    { title: "2: Regular Security Updates & Fixes:", text: "Protect your website from cyber threats, malware, and vulnerabilities with continuous security audits and patches.", },
    { title: "3: Bug Fixes & Troubleshooting:", text: "Identify and resolve website issues quickly to ensure a seamless user experience across all devices and browsers.", },
    { title: "4: Content Updates & Management:", text: "Keep your website fresh and engaging with regular content updates, blog postings, and media enhancements.", },
    { title: "5: CMS & Plugin Updates:", text: "Ensure smooth operation of your WordPress, Shopify, Magento, or custom CMS website with regular updates and plugin management.", },
    { title: "6: Backup & Disaster Recovery:", text: "Automated daily, weekly, or monthly backups to prevent data loss and ensure quick recovery in case of failures.", },
    { title: "7: Third-Party Integration & API Support:", text: "Ensure uninterrupted functionality of third-party tools, payment gateways, and API integrations.", },
    { title: "8: SEO Monitoring & Enhancements:", text: "Maintain a strong online presence with SEO audits, keyword optimization, and meta tag updates for better rankings.", },
  ]
  const whyChooseUsData = [
    {image:"/services/web-services/web-support/icons/support.png" ,heading: "24/7 Monitoring & Quick Support", description: "We ensure real-time issue detection and immediate fixes." },
    {image:"/services/web-services/web-support/icons/maintenance.png" ,heading: "Regular Maintenance & Security", description: "Preventive updates to keep your website safe and running smoothly." },
    {image:"/services/web-services/web-support/icons/user-experience.png" ,heading: "User-Centric Approach", description: "Enhancing user experience with optimized performance and functionality." },
    {image:"/services/web-services/web-support/icons/support-plan.png" ,heading: "Custom Support Plans", description: "Tailored maintenance solutions to fit your business needs and budget." },
    {image:"/services/web-services/web-support/icons/growth.png" ,heading: "Scalability & Growth", description: "Future-proof your website with continuous updates and feature enhancements." },
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
                src="/services/web-services/web-support/websupporticon.png"
                alt='web support icon' width={70} height={70}
              />
            </div>
            <h1 className="text-3xl md:text-4xl py-2 flex items-center gap-3 text-[#043e96] relative after:absolute after:w-[80px] md:after:w-[100px] after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-[#0ed4ff]">
              Comprehensive Web Support & Maintenance Services
            </h1>
          </div>
          <div className='my-4'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 bg-white sm:p-4 rounded-2xl web-card'>
              <div className='order-2 md:order-1 col-span-12 md:col-span-5 flex justify-center md:justify-start'>
                <Image
                  className='w-full max-w-[400px] h-auto object-cover rounded-2xl'
                  src="/services/web-services/web-support/websupport-hero.jpg"
                  alt='web support'
                  width={280}
                  height={150}
                />
              </div>
              <div className={`order-1 md:order-2 col-span-12 md:col-span-7 ${unbounded.className} flex items-center`}>
                <p className='text-[#043e96] text-lg md:text-xl font-light'>
                  <span className='font-semibold'>Overview: </span>
                  At Finnsap, we provide reliable and proactive web support & maintenance services to ensure your website remains updated, secure, and high-performing. Whether you need bug fixes, security updates, performance optimization, or content management, our expert team is here to help.
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
                  {webSupportExpertise.map((item, index) => (
                    <p key={index} className='text-[#043e96] font-light'>
                      <span className='font-semibold'>{item.title} </span>
                      {item.text}
                    </p>
                  ))}
                </div>
                <div className="overflow-hidden w-full max-w-[600px] xl:max-w-[700px] h-auto m-auto">
                  <Image
                    className="w-full rounded-3xl object-cover "
                    src="/services/web-services/web-support/websupport.jpg"
                    alt="web support banner"
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
      <WhyChooseCard data={whyChooseUsData}/>
    </>
  )
}

export const generateMetadata = () => {
  return {
    title: "Web Support & Maintenance Services - Secure & Optimize Your Website | Finnsap",
    description:
      "Finnsap provides expert web support and maintenance services, including performance optimization, security updates, bug fixes, and regular content management.",
    keywords: [
      "Web Support Services",
      "Website Maintenance",
      "Website Security Updates",
      "Performance Optimization",
      "Bug Fixes & Troubleshooting",
      "Content Updates & Management",
      "CMS & Plugin Updates",
      "Backup & Disaster Recovery",
      "Third-Party Integration Support",
      "SEO Monitoring & Enhancements",
      "WordPress Support",
      "Shopify Website Maintenance",
      "E-commerce Site Support",
      "24/7 Website Monitoring",
      "Custom Web Support Plans",
    ],
    openGraph: {
      title: "Web Support & Maintenance Services - Finnsap",
      description:
        "Ensure your website remains secure, fast, and up-to-date with Finnsap's expert web support and maintenance services.",
      url: `${process.env.BASE_URL}/services/Web-Services/Web-Support`,
      siteName: "Finnsap",
      images: [
        {
          url: `${process.env.BASE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "Web Support & Maintenance Services - Finnsap",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Web Support & Maintenance Services | Finnsap",
      description:
        "Keep your website running smoothly with Finnsap’s web support services. We offer security updates, bug fixes, content management, and performance optimization.",
      images: [`${process.env.BASE_URL}/og.png`],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.BASE_URL}/services/Web-Services/Web-Support`,
    },
  };
};
