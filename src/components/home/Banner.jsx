"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins } from 'next/font/google';
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

export default function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const banner = ["sketch4.png", "banner2.jpg", "banner4.png", "sketch1.png", "sketch3.png",]

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {banner.map((img, index) => (
                    <div key={index} className="max-h-[90vh] relative overflow-hidden">
                        <img src={`/home/banner/${img}`} alt={`banner-${index + 1}`} />
                        <div className="absolute bg-[rgba(0,0,0,0.5)] top-0 left-0 w-full min-h-full flex justify-center items-center pe-[40%] pt-[20%] md:pt-[10%]">
                            <div className="flex flex-col text-white">
                                <h1 className={`${unbounded.className} pb-2 md:pb-3 sm:text-xl md:text-2xl lg:text-4xl font-light relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#0dd4ff] after:w-[60px] after:h-[3px] `}>
                                    Your Partner for Top-Tier SAP<br />ERP & Intelligence Solutions
                                </h1>
                                <div className=" text-2xl sm:text-3xl md:text-5xl lg:text-7xl w-fit flex flex-col pt-2 gap-0">
                                    <span className={`${unbounded.className} font-light`}>COMPANY</span>
                                    <span className={`${unbounded.className} tracking-widest font-semibold`}>PROFILE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
