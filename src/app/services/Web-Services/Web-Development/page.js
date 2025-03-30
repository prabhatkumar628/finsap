import React from 'react'
import Image from 'next/image';
import WhyChooseCard from '@/components/services/webServices/WhyChooseCard';
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function WebDevelopment() {
  const webDevExpertise = [
    { title: "1: Custom Website Development:", text: "We build fully customized, responsive websites optimized for speed, performance, and user engagement.", },
    { title: "2: E-Commerce Development:", text: "Power your online store with secure, scalable, and user-friendly e-commerce solutions using platforms like Shopify, WooCommerce, and Magento.", },
    { title: "3: Enterprise Web Applications:", text: "Develop robust enterprise solutions, CRM platforms, ERP integrations, and customer portals to enhance business efficiency.", },
    { title: "4: Front-End & UI/UX Development:", text: "Create visually appealing and intuitive web interfaces with the latest HTML, CSS, JavaScript, React.js, Next.js, and Vue.js frameworks.", },
    { title: "5: Back-End Development & API Integration:", text: "Develop secure and scalable server-side applications using Node.js, Express.js, Laravel, and Python, with seamless third-party API integrations.", },
    { title: "6: Cloud-Based & Headless CMS Solutions:", text: "Implement powerful cloud-based architectures and headless CMS solutions like Strapi, Contentful, or WordPress to streamline content management.", },
  ]

  const whyChooseUsData = [
    {image:"/services/web-services/web-development/icons/idea.png" ,heading: "Bespoke Solutions", description: "We craft tailor-made web applications aligned with your unique business needs." },
    {image:"/services/web-services/web-development/icons/website.png" ,heading: "SEO-Optimized", description: "Our websites are built with SEO best practices to improve online visibility." },
    {image:"/services/web-services/web-development/icons/friendly.png" ,heading: "Mobile-Responsive", description: "Ensuring a seamless experience across all devices." },
    {image:"/services/web-services/web-development/icons/hacker.png" ,heading: "Secure & Scalable", description: "Robust security implementations and scalable architectures for long-term success." },
    {image:"/services/web-services/web-development/icons/service.png" ,heading: "Ongoing Support", description: "Dedicated maintenance and support to keep your website running smoothly." },
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
                src="/services/web-services/web-development/webdevicon.png"
                alt='web development icon' width={70} height={70}
              />
            </div>
            <h1 className="text-3xl md:text-4xl py-2 flex items-center gap-3 text-[#043e96] relative after:absolute after:w-[80px] md:after:w-[100px] after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-[#0ed4ff]">
              Build Scalable, Secure & High-Performance Websites
            </h1>
          </div>
          <div className=' my-4'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 bg-white sm:p-4 rounded-2xl web-card'>
              <div className='order-2 md:order-1 col-span-12 md:col-span-5 flex justify-center md:justify-start'>
                <Image
                  className='w-full max-w-[400px] h-auto object-cover rounded-2xl'
                  src="/services/web-services/web-development/webdevhero.jpg"
                  alt='web development'
                  width={280}
                  height={150}
                />
              </div>
              <div className={`order-1 md:order-2 col-span-12 md:col-span-7 ${unbounded.className} flex items-center`}>
                <p className='text-[#043e96] text-lg md:text-xl font-light'>
                  At <span className='font-semibold'>FINNSAP</span>, we specialize in creating dynamic and feature-rich web solutions tailored to your business needs. Our team of expert developers leverages the latest technologies, frameworks, and best practices to deliver scalable, secure, and high-performance websites.
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
                  {webDevExpertise.map((item, index) => (
                    <p key={index} className='text-[#043e96] font-light'>
                      <span className='font-semibold'>{item.title} </span>
                      {item.text}
                    </p>
                  ))}
                </div>
                <div className="overflow-hidden w-full max-w-[600px] xl:max-w-[700px] h-auto m-auto">
                  <Image
                    className="w-full h-full rounded-3xl object-cover "
                    src="/services/web-services/web-development/webdev.jpg"
                    alt="web development banner"
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
    title: "Web Development Services - Custom Websites & Web Apps | Finnsap",
    description:
      "Get high-quality web development services from Finnsap. We build responsive websites, web applications, eCommerce platforms, and enterprise solutions.",
    keywords: [
      "Web Development Services",
      "Custom Website Development",
      "Web App Development",
      "Responsive Website Design",
      "eCommerce Website Development",
      "Enterprise Web Solutions",
      "Full-Stack Web Development",
      "Front-End Development",
      "Back-End Development",
      "UI/UX Design",
      "Next.js Web Development",
      "React Web Applications",
      "Laravel Development",
      "MERN Stack Development",
      "SEO-Friendly Websites",
    ],
    openGraph: {
      title: "Web Development Services - Custom Websites & Web Apps",
      description:
        "Build high-performing websites & web apps with Finnsap. From front-end to full-stack development, we deliver scalable solutions for your business.",
      url: `${process.env.BASE_URL}/services/Web-Services/Web-Development`,
      siteName: "Finnsap",
      images: [
        {
          url: `${process.env.BASE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "Web Development Services - Finnsap",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Web Development Services - Finnsap",
      description:
        "Finnsap offers cutting-edge web development services. Get custom-built websites, web apps, and enterprise solutions tailored to your business needs.",
      images: [`${process.env.BASE_URL}/og.png`],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.BASE_URL}/services/Web-Services/Web-Development`,
    },
  };
};
