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
                        <div className="absolute bg-[rgba(0,0,0,0.5)] top-0 left-0 w-full min-h-full flex justify-center items-center pe-[10%] xl:pe-[20%] pt-[30%] md:pt-[30%]">
                            <div className="flex flex-col text-white">
                                <h1 className={`${unbounded.className} pb-2 md:pb-3 text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#0dd4ff] after:w-[60px] after:h-[3px] `}>
                                    Your Partner for Top-Tier SAP<br  />ERP & Intelligence Solutions
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
