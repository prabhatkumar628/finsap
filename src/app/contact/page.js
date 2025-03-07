import Image from "next/image";

// Multiple font weights
import { Unbounded } from "next/font/google";
import Link from "next/link";
const unbounded = Unbounded({ subsets: ['latin'], weight: ['200', '500', '600'] });

export default function ContactUs() {
    return (
        <main>
            <div className="w-full h-[calc(100vh-61px)] bg-green-500 xl:h-[calc(100vh-70px)] overflow-hidden relative z-40">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        className="w-full h-[calc(100vh-61px)] object-cover transform scale-x-[-1]" // Flip horizontally
                        src="/home/banner.jpg"
                        alt="Banner Image"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
                <div className="w-full h-full bg-[rgba(255,255,255,0.7)] absolute top-0 left-0 flex flex-col justify-end items-start p-5 sm:p-8 ">
                    <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }} className='min-h-10 md:min-h-16 w-[40%] md:w-[22.5%] bg-[#0dd4ff] absolute top-0 right-0'></div>
                    <div style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)" }} className='min-h-8 md:min-h-10 w-[35%] md:w-[20%] bg-[#0dd4ff] absolute bottom-0 left-0'></div>

                    <div className="w-full h-[50%] flex justify-start items-start pt-10 sm:px-10 md:px-16 lg:px-24">
                        <div className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%]">
                            <Image
                                src="/contact/finlogo.png"
                                width={400}
                                height={100}
                                alt="logo"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    <div className="w-full h-[50%] flex flex-col justify-end items-end sm:px-10 md:px-16 lg:px-24">
                        <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-3 text-[#053d99] w-fit flex flex-col items-end pt-2 gap-1 ">
                            <span className={`${unbounded.className} font-extralight`}>Let’s</span>
                            <span className={`${unbounded.className} font-extralight`}>Connect</span>
                        </h1>
                        <div className={`${unbounded.className} text-[#053d99] text-lg md:text-2xl font-extralight flex flex-col justify-end items-end gap-1 md:gap-3 pb-10`}>
                            <Link href={"/"}> call: +91 93541 6844</Link>
                            <Link href={"/"}>+91 91355 51695</Link>
                            <Link href={"/"}>info@finnsa p.com</Link>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
