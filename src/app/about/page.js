import AboutUs from '@/components/about/AboutUs'
import GlobalReach from '@/components/about/GlobalReach'
import React from 'react'

export default function About() {
    return (
        <>
            <AboutUs />
            <GlobalReach />
        </>
    )
}
export const generateMetadata = () => {
    return {
      title: "About Finnsap - Leading SAP Services & Consulting Firm",
      description:
        "Learn more about Finnsap, a trusted provider of SAP consulting, ERP solutions, and digital transformation services. Discover how we help businesses succeed.",
      keywords: [
        "About Finnsap",
        "Finnsap Company Profile",
        "SAP Consulting Firm",
        "ERP Solutions Provider",
        "Business Software Experts",
        "Enterprise Resource Planning",
        "Cloud ERP Services",
        "SAP Business One Company",
        "SAP S/4HANA Experts",
        "SAP Migration Services",
        "SAP Custom Development",
        "SAP Integration Solutions",
        "SAP Fiori Experts",
        "IT Consulting Company",
        "Digital Transformation Partner",
      ],
      openGraph: {
        title: "About Finnsap - Trusted SAP Services & ERP Consulting",
        description:
          "Finnsap is a leading SAP consulting firm providing expert ERP solutions, business transformation, and IT services to help companies grow.",
        url: `${process.env.BASE_URL}/about`,
        siteName: "Finnsap",
        images: [
          {
            url: `${process.env.BASE_URL}/og.png`,
            width: 1200,
            height: 630,
            alt: "About Finnsap - SAP Services & Consulting",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "About Finnsap - Leading SAP Solutions & Consulting",
        description:
          "Get to know Finnsap, a trusted SAP consulting and ERP solutions provider, helping businesses achieve efficiency and success.",
        images: [`${process.env.BASE_URL}/about`],
      },
      robots: "index, follow",
      alternates: {
        canonical: `${process.env.BASE_URL}/about`,
      },
    };
  };