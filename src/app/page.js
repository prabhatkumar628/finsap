import Image from "next/image";
import OurGuiding from "@/components/home/OurGuiding";
import WhyUs from "@/components/home/WhyUs";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ['latin'], weight: ['200', '500', '600'] });

export default function Home() {
  return (
    <main>
      <div className="w-full xl:h-[calc(100vh-70px)] overflow-hidden relative z-40">
        <Image
          className="w-full h-full object-cover"
          src="/home/banner.jpg"
          alt="Banner Image"
          width={1920}
          height={1080}
          layout="responsive"
        />
        <div className="w-full h-full bg-[rgba(0,0,0,0)] absolute top-0 left-0 flex flex-col justify-end items-start p-5 sm:p-8 md:p-24 lg:p-40">
          <div className="flex flex-col ">
            <h1 className={`${unbounded.className} pb-2 md:pb-3 text-[#132040] sm:text-xl md:text-2xl lg:text-4xl font-extralight relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#043e96] after:w-[60px] after:h-[2px] `}>
              Your Partner for Top-Tier SAP<br />ERP & Intelligence Solutions
            </h1>

            <div className=" text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-[#132040] w-fit flex flex-col pt-2 gap-0">
              <span className={`${unbounded.className} font-extralight`}>COMPANY</span>
              <span className={`${unbounded.className} tracking-widest font-semibold`}>PROFILE</span>
            </div>
          </div>
        </div>
      </div>
      <OurGuiding />
      <WhyUs />
    </main>
  );
}

export const generateMetadata = () => {
  return {
    title: "Finnsap - Expert SAP Services, Solutions & Consulting",
    description:
      "Finnsap offers top-tier SAP consulting, ERP solutions, and web & mobile development services. Optimize your business with our expert SAP solutions.",
    keywords: [
      "SAP Services",
      "SAP Consulting",
      "SAP Solutions",
      "ERP Solutions",
      "SAP Implementation",
      "Business Software",
      "Enterprise Resource Planning",
      "Cloud ERP",
      "SAP Business One",
      "SAP S/4HANA",
      "SAP Migration",
      "SAP Custom Development",
      "SAP Integration Services",
      "SAP Fiori",
      "Web & Mobile App Development",
      "IT Consulting Services",
      "Digital Transformation",
    ],
    openGraph: {
      title: "Finnsap - Leading SAP Services & Consulting Firm",
      description:
        "Unlock the power of SAP with Finnsap. From SAP implementation to enterprise-grade web & mobile solutions, we help businesses achieve operational excellence.",
      url: `${process.env.BASE_URL}`,
      siteName: "Finnsap",
      images: [
        {
          url: `${process.env.BASE_URL}/og.png`, 
          width: 1200,
          height: 630,
          alt: "Finnsap - SAP Services & Consulting",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Finnsap - Transforming Businesses with SAP Solutions",
      description:
        "End-to-end SAP consulting, ERP solutions, and digital transformation services. Partner with Finnsap for expert guidance and robust enterprise solutions.",
      images: [`${process.env.BASE_URL}/og.png`],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.BASE_URL}`,
    },
  };
};