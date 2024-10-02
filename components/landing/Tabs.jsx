import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { tabData } from "@/data/tabsData";
const CuratedItems = () => {
    const [activeTab, setActiveTab] = useState("newArrivals");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow className="text-black" />,
        prevArrow: <CustomPrevArrow className="rounded-full" />,
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
            <h2 className="text-4xl font-semibold text-gray-700 mb-8 w-full text-center">
                Discover Curated Items
            </h2>
            {/* Tab Navigation */}
            <div className="flex justify-around mb-6 border-b">
                <button
                    onClick={() => setActiveTab("newArrivals")}
                    className={`py-2 px-4 focus:outline-none ${
                        activeTab === "newArrivals"
                            ? "border-b-4 border-orange-500 font-semibold"
                            : ""
                    }`}
                >
                    New Arrivals
                </button>
                <button
                    onClick={() => setActiveTab("recentlySold")}
                    className={`py-2 px-4 focus:outline-none ${
                        activeTab === "recentlySold"
                            ? "border-b-4 border-orange-500 font-semibold"
                            : ""
                    }`}
                >
                    Recently Sold
                </button>
                <button
                    onClick={() => setActiveTab("bestSellers")}
                    className={`py-2 px-4 focus:outline-none ${
                        activeTab === "bestSellers"
                            ? "border-b-4 border-orange-500 font-semibold"
                            : ""
                    }`}
                >
                    Best Sellers
                </button>
                <button
                    onClick={() => setActiveTab("trending")}
                    className={`py-2 px-4 focus:outline-none ${
                        activeTab === "trending"
                            ? "border-b-4 border-orange-500 font-semibold"
                            : ""
                    }`}
                >
                    Trending
                </button>
                <button
                    onClick={() => setActiveTab("editorsPicks")}
                    className={`py-2 px-4 focus:outline-none ${
                        activeTab === "editorsPicks"
                            ? "border-b-4 border-orange-500 font-semibold"
                            : ""
                    }`}
                >
                    Editor's Picks
                </button>
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

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
};
