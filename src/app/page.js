import Image from "next/image";
import OurGuiding from "@/components/home/OurGuiding";
import WhyUs from "@/components/home/WhyUs";
import Banner from "@/components/home/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
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