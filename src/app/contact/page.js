import Image from "next/image";

// Multiple font weights
import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ['latin'], weight: ['200', '500', '600'] });

export default function ContactUs() {
    return (
        <main>
            <div className="w-full xl:h-[calc(100vh-70px)] overflow-hidden relative z-40">
                <Image
                    className="w-full h-full object-cover transform scale-x-[-1]" // Flipping the image horizontally
                    src="/home/banner.jpg"
                    alt="Banner Image"
                    width={1920}
                    height={1080}
                    layout="responsive"
                />
                <div className="w-full h-full bg-[rgba(255,255,255,0.7)] absolute top-0 left-0 flex flex-col justify-end items-start p-5 sm:p-8 ">
                    <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-16 w-[22.5%] bg-[#0dd4ff] absolute top-0 right-0'></div>
                    <div style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)" }} className='min-h-10 w-[20%] bg-[#0dd4ff] absolute bottom-0 left-0'></div>

                    {/* <div className="flex flex-col bg-green-600 w-full">
                        <h1 className={`${unbounded.className} pb-2 md:pb-3 text-[#132040] sm:text-xl md:text-2xl lg:text-4xl font-extralight relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#043e96] after:w-[60px] after:h-[2px]`}>
                            Your Partner for Top-Tier SAP<br />ERP & Intelligence Solutions
                        </h1>

                        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-[#132040] w-fit flex flex-col pt-2 gap-0">
                            <span className={`${unbounded.className} font-extralight`}>COMPANY</span>
                            <span className={`${unbounded.className} tracking-widest font-semibold`}>PROFILE</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </main>
    );
}
