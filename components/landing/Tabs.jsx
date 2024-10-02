import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { tabData } from "@/data/tabsData";
const CuratedItems = () => {
    const [activeTab, setActiveTab] = useState("newArrivals");
    const tabs = [
        { id: "newArrivals", label: "New Arrivals" },
        { id: "recentlySold", label: "Recently Sold" },
        { id: "bestSellers", label: "Best Sellers" },
        { id: "trending", label: "Trending" },
        { id: "editorsPicks", label: "Editor's Picks" },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className="text-black" />,
        prevArrow: <SamplePrevArrow className="rounded-full" />,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="p-5 max-w-7xl mx-auto py-10 my-10  ">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-gray-700 mb-8 w-full text-center">
                    Discover Curated Items
                </h2>
                <div className="relative">
                    {/* Thin orange line spanning the entire width */}
                    <div className="absolute -top-0 left-0 right-0 h-[5px] opacity-55 bg-orange-400 "></div>

                    {/* Tab container */}
                    <div className="flex justify-between relative">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                py-2 px-4 text-lg font-semibold focus:outline-none
                ${
                    activeTab === tab.id
                        ? "text-orange-500 border-t-[10px]  border-orange-500 -mt-0.5"
                        : "text-gray-600 hover:text-gray-800"
                }
              `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/* Carousel for Active Tab */}
            <div className="carousel ">
                <Slider {...settings}>
                    {tabData[activeTab]?.map((item, index) => (
                        <div key={index} className="carousel-item    mt-5  ">
                            <div className="bg-white rounded-lg   p-4 w-[21rem] mx-auto border border-red-500  ">
                                {" "}
                                {/* Adjusted the width to create a portrait layout */}
                                <img
                                    src={item.images[0]}
                                    alt={item.images[0]}
                                    className="w-full h-96 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-[1rem] leading-5 ">
                                    {item.title}
                                </h3>
                                <p className="text-sm mt-2 ">
                                    MRP:{" "}
                                    <span className="font-medium mx-2">
                                        Rs.{item.price}
                                    </span>
                                    {item.discountPrice && (
                                        <span className="text-red-500 text-sm mt-1 line-through">
                                            {item.discountPrice}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CuratedItems;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="/arrow_right.png"
            className={className}
            style={{
                ...style,
                display: "block",

                background: "rgba(176, 149, 52, 0.3)", // Semi-transparent background
                borderRadius: "50%",
                width: "50px", // Change this to the size you want
                height: "50px", // Change this to the size you want
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="/arrow_left.png"
            className={className}
            style={{
                ...style,
                display: "block",
                zIndex: "100",
                background: "rgba(176, 149, 52, 0.3)", // Semi-transparent background
                borderRadius: "50%",
                width: "50px", // Change this to the size you want
                height: "50px", // Change this to the size you want
            }}
            onClick={onClick}
        />
    );
}
