import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function ContactUs() {
  return (
    <main className={unbounded.className}>
      <div className="w-full bg-[#d4e6fd] overflow-hidden relative z-40">
        <div className="w-full h-full bg-[rgba(255,255,255,0.7)]  top-0 left-0 flex flex-col justify-end items-start p-5 sm:p-8 ">
          <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-10 md:min-h-16 w-[40%] md:w-[22.5%] bg-[#0dd4ff] absolute top-0 right-0'></div>
          <div style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)" }} className='min-h-8 md:min-h-10 w-[35%] md:w-[20%] bg-[#0dd4ff] absolute bottom-0 left-0'></div>
          <div className="w-full h-full min-h-[80svh] md:px-10 lg:px-16 grid grid-cols-12 pt-10 md:pt-0 gap-4 md:gap-0 lg:gap-6">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1 grid place-items-center h-full">
              <div className="flex flex-col md:gap-16 w-fit h-fit">
                <div className="w-[70%] mt-6 md:mt-16">
                  <Image
                    src="/contact/finlogo.png"
                    width={400}
                    height={100}
                    alt="finnsap"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="w-full h-max flex justify-end md:justify-start">
                  <div className="w-fit h-fit md:mb-10">
                    <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-3 text-[#053d99] w-fit flex flex-col justify-end items-end ms-auto md:justify-start md:items-start md:m-auto pt-2 gap-1 ">
                      <span className={`${unbounded.className} font-light`}>Let’s</span>
                      <span className={`${unbounded.className} font-light`}>Connect</span>
                    </h1>
                    <div className={`${unbounded.className} text-[#053d99] text-lg md:text-2xl font-extralight flex flex-col justify-end items-end ms-auto md:justify-start md:items-start md:m-auto gap-1 md:gap-3 pb-10`}>
                      <Link href="tel:+919354168443"> call: +91 93541 68443</Link>
                      <Link href="https://wa.me/919135551695" target="_blank" rel="noopener noreferrer">
                        <div className="flex gap-2 items-center">
                          <div className="w-[30px] min-w-[30px] h-[30px] md:w-[40px] md:min-w-[40px] md:h-[40px] grid place-items-center">
                            <Image
                              className="rounded-lg"
                              src="/contact/whatsapp.png"
                              alt="whatsapp" width={70} height={70}
                            />
                          </div>
                          <span>+91 91355 51695</span>
                        </div>
                      </Link>
                      <Link href="mailto:info@finnsap.com">info@finnsap.com</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2 grid place-items-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const generateMetadata = () => {
  return {
    title: "Contact Finnsap - Get in Touch for SAP Solutions & Consulting",
    description:
      "Reach out to Finnsap for expert SAP consulting, ERP solutions, and web & mobile app development. Let's optimize your business together.",
    keywords: [
      "Contact Finnsap",
      "SAP Consulting Contact",
      "SAP Solutions Inquiry",
      "ERP Solutions Contact",
      "Business Software Support",
      "Enterprise Resource Planning Help",
      "Cloud ERP Consultation",
      "SAP Business One Support",
      "SAP S/4HANA Contact",
      "SAP Migration Assistance",
      "SAP Custom Development Inquiry",
      "SAP Integration Services Help",
      "SAP Fiori Consultation",
      "IT Consulting Services Contact",
      "Digital Transformation Support",
    ],
    openGraph: {
      title: "Contact Finnsap - Leading SAP Consulting & ERP Solutions",
      description:
        "Need expert SAP consulting? Contact Finnsap today for tailored SAP solutions, ERP support, and IT consulting services.",
      url: `${process.env.BASE_URL}/contact`,
      siteName: "Finnsap",
      images: [
        {
          url: `${process.env.BASE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "Finnsap Contact - SAP Consulting & ERP Solutions",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Finnsap - Expert SAP Services & Consulting",
      description:
        "Get in touch with Finnsap for world-class SAP solutions, ERP consulting, and business transformation services.",
      images: [`${process.env.BASE_URL}/og.png`],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.BASE_URL}/contact`,
    },
  };
};