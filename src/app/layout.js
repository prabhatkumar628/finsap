import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

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
        <div className="relative z-50">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
