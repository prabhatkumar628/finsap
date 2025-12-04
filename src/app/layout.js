import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Finnsap - SAP Services & Consulting",
  description: "Expert SAP solutions and consulting services.",
  icons: "/fabicon.png", 
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        <div className="relative z-50">
          <Header />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
