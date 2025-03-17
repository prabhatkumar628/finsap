"use client"
import Image from "next/image";
import { VscThreeBars } from "react-icons/vsc";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoChevronDownSharp } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./layout.css"
import { usePathname } from "next/navigation";
import { Raleway } from 'next/font/google'
export const raleway = Raleway({ subsets: ['latin'], weight: ['500'] })

export default function Header() {
    const [menu, setMenu] = useState(false)
    const [services, setServices] = useState(false)
    const [sapServices, setSapServices] = useState(false)
    const [appServices, setAppServices] = useState(false)
    const [navFixed, setNavFixed] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const servicesRef = useRef()
    const pathname = usePathname()
    useEffect(() => {
        setMenu(false)
        setServices(false)
        console.log(pathname)
    }, [pathname])


    useEffect(() => {
        const handleScroll = () => {
            const currentScroolY = window.scrollY
            if (currentScroolY < lastScrollY && currentScroolY > 138) {
                setNavFixed(true)
            } else {
                setNavFixed(false)
            }
            setLastScrollY(currentScroolY)
        };
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    useEffect(() => {
        const dropdown = document.getElementById("dropdown");
        const handleClickOutside = (e) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target)) {
                setServices(false);
            }
        };
        const handleDropdownClick = (e) => {
            e.stopPropagation(); // Prevent event bubbling
            setServices(prev => !prev);
        };

        if (dropdown) {
            dropdown.addEventListener("click", handleDropdownClick);
        }
        document.addEventListener("click", handleClickOutside);
        window.addEventListener("scroll", handleClickOutside);
        return () => {
            if (dropdown) {
                dropdown.removeEventListener("click", handleDropdownClick);
            }
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("scroll", handleClickOutside);
        };
    }, []);

    return (
        <header style={{ boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em" }}
            className={`${navFixed ? "fixed top-0 left-0" : "static"} w-full p-3 px-4 sm:min-h-[80px] sm:px-10 md:px-16 lg:px-24 bg-white !shadow-md z-50 grid place-items-center`}>
            <nav className="flex items-center justify-between relative w-full">
                <Link href={"/"} className="relative w-32 sm:w-40 lg:w-44 xl:w-48 h-auto">
                    <Image
                        src="/Layout/logo.png"
                        alt="finnsap_logo"
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                        className="w-full h-auto"
                        priority
                    />
                </Link>
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px" }}
                    className={`fixed top-0 right-0 h-screen w-[300px] mr-[-350px] md:mr-0 ${menu ? "!mr-0" : ""} md:static md:w-full md:h-auto bg-white md:!shadow-none md:bg-transparent transition-all duration-300 ease-in-out z-50`}>
                    <div className="p-3 px-4 sm:px-10 grid place-items-end md:hidden">
                        <div onClick={() => setMenu(false)} style={{ boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em" }} className="w-[40px] h-[40px] rounded-sm shadow-1 text-[#043e96] grid place-items-center text-3xl">
                            <RxCross2 />
                        </div>
                    </div>
                    <ul className={`flex flex-col md:flex-row md:m-auto md:w-fit gap-4 md:gap-0 lg:gap-4 lg:text-lg font-semibold px-5 md:px-0`}>
                        <li className={`${raleway.className} flex`}>
                            <Link className={`${pathname === "/" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-1 md:p-2 w-full`} href={"/"}>Home</Link>
                        </li>
                        <li className={`${raleway.className} flex flex-col`}>
                            <div id="dropdown" className={`${services ? "font-semibold !text-[#0ed4ff]" : ""} ${pathname.startsWith("/services") ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] cursor-pointer hover:text-[#0ed4ff] transition px-2 py-1 md:p-2 flex items-center lg:gap-1 w-full`}>
                                <span>Services</span>
                                <IoChevronDownSharp className="hidden md:block" />
                            </div>
                            <div ref={servicesRef} className={`services w-full ${services ? "md:max-h-[300px]" : "md:!shadow-none md:!py-0"} transition-all duration-300 ease-in-out md:max-h-0 md:overflow-hidden md:absolute top-[130%] left-0 rounded-md bg-white grid grid-cols-12 p-2 md:p-4 xl:px-10 xl:py-6 gap-2 z-50`}>
                                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                                    <div
                                        onClick={() => setSapServices(prev => !prev)}
                                        className="font-bold flex items-center gap-2 cursor-pointer px-2 py-1 md:pb-2 md:pt-0 text-[#043e96] transition"
                                    >
                                        <span>SAP Services</span>
                                        <IoChevronDownSharp className={`md:hidden transition-transform duration-300 ${sapServices ? "rotate-180" : ""}`} />
                                    </div>

                                    <ul className={`overflow-hidden transition-all duration-300 ease-in-out ${sapServices ? "max-h-[200px] opacity-100 pt-2" : "max-h-0 opacity-0"} md:pt-2 md:max-h-none md:opacity-100`}>
                                        <li className="flex">
                                            <Link className={`${pathname == "/services/SAP-Services/SAP-Services-Portfolio" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/SAP-Services/SAP-Services-Portfolio"}>SAP Services Portfolio</Link>
                                        </li>
                                        <li className="flex mt-3">
                                            <Link className={`${pathname == "/services/SAP-Services/SAP-EPR-Consulting" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/SAP-Services/SAP-EPR-Consulting"}>SAP ERP Consulting</Link>
                                        </li>
                                        <li className="flex mt-3">
                                            <Link className={`${pathname == "/services/SAP-Services/SAP-IS-Utilities-Consulting" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/SAP-Services/SAP-IS-Utilities-Consulting"}>SAP IS-Utilities Consulting</Link>
                                        </li>
                                        <li className="flex mt-3">
                                            <Link className={`${pathname == "/services/SAP-Services/SAP-BRIM-Consulting" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/SAP-Services/SAP-BRIM-Consulting"}>SAP BRIM Consulting</Link>
                                        </li>
                                        <li className="flex mt-3">
                                            <Link className={`${pathname == "/services/SAP-Services/SAP-ECC-S4HANA-AMS" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/SAP-Services/SAP-ECC-S4HANA-AMS"}>SAP ECC-S4HANA AMS</Link>
                                        </li>
                                        <li className="flex mt-3">
                                            <Link className={`${pathname == "/services/SAP-Services/SAP-AMI-Consulting" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/SAP-Services/SAP-AMI-Consulting"}>SAP AMI Consulting</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                                    <div
                                        onClick={() => setAppServices(prev => !prev)}
                                        className="font-bold flex items-center gap-2 cursor-pointer px-2 py-1 md:pb-2 md:pt-0 text-[#043e96] transition"
                                    >
                                        <span>Web Services</span>
                                        <IoChevronDownSharp className={`md:hidden transition-transform duration-300 ${appServices ? "rotate-180" : ""}`} />
                                    </div>

                                    <ul className={`overflow-hidden transition-all duration-300 ease-in-out ${appServices ? "max-h-[200px] opacity-100 pt-2" : "max-h-0 opacity-0"} md:pt-2 md:max-h-none md:opacity-100`}>
                                        <li className="flex">
                                            <Link className={`${pathname == "/services/Web-Services/Web-Development" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/Web-Services/Web-Development"}>Web Development</Link>
                                        </li>
                                        <li className="flex mt-3">
                                            <Link className={`${pathname == "/services/Web-Services/Web-Support" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/Web-Services/Web-Support"}>Web Support</Link>
                                        </li>
                                        <li className="flex mt-3">
                                            <Link className={`${pathname == "/services/Web-Services/Mobile-App-Development" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/Web-Services/Mobile-App-Development"}>Mobile App Development</Link>
                                        </li>
                                        <li className="flex mt-3">
                                            <Link className={`${pathname == "/services/Web-Services/Mobile-App-Support" ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-0 text-sm w-full`} href={"/services/Web-Services/Mobile-App-Support"}>Mobile App Support</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 md:col-span-4 lg:col-span-6 hidden text-center md:grid place-items-center text-5xl">
                                    <div className="relative w-full h-[260px] overflow-hidden grid place-items-center">
                                        <Image
                                            className="object-cover rounded-4xl overflow-hidden"
                                            src="/Layout/popbanner.jpg"
                                            alt="Oil & Gas Industry"
                                            fill
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={`${raleway.className} flex`}>
                            <Link className={`${pathname.startsWith("/industries") ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-1 md:p-2 w-full`} href={"/industries/SAP-Oil-And-Gas-Consulting"}>Industries</Link>
                        </li>
                        <li className={`${raleway.className} flex`}>
                            <Link className={`${pathname.startsWith("/about") ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-1 md:p-2 w-full`} href={"/about"}>About Us</Link>
                        </li>
                        <li className={`${raleway.className} flex`}>
                            <Link className={`${pathname.startsWith("/contact") ? "font-semibold !text-[#0ed4ff]" : ""} text-[#043e96] hover:text-[#0ed4ff] transition px-2 py-1 md:p-2 w-full`} href={"/contact"}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2 text-3xl">
                    <Link href="https://wa.me/919135551695" target="_blank" rel="noopener noreferrer">
                        <div className="icon-box w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] rounded-sm shadow-1 text-[#043e96] grid place-items-center">
                            <FaSquareWhatsapp />
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className="icon-box w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] rounded-sm shadow-1 text-[#043e96] grid place-items-center">
                            <FaSquareXTwitter />
                        </div>
                    </Link>
                    <VscThreeBars onClick={() => setMenu(pre => !pre)} className="md:hidden text-[#0ed4ff]" />
                </div>
            </nav>
        </header>
    );
}
