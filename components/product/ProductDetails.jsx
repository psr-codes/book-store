"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const productData = {
    title: "Bharatiya Darshan (Indian Philosophy)",
    image: [
        "/book-images/indian-philosophy/img0.webp",
        "/book-images/indian-philosophy/img2.jpg",
        "/book-images/indian-philosophy/img4.webp",
        "/book-images/indian-philosophy/img5.jpg",
        "/book-images/indian-philosophy/img7.webp",
    ],
    price: 1500,
    discountPrice: 1000,
    shortDescription:
        "Indian Philosophy is a comprehensive book that covers the various philosophies of India. The book is written in simple language and is easy to understand. The book is a must-have for all philosophy students and practitioners.",
    description:
        "This book is a comprehensive guide to the various philosophies of India. The book covers the various philosophies of India, including Hinduism, Buddhism, Jainism, and Sikhism. The book is written in simple language and is easy to understand. The book is a must-have for all philosophy students and practitioners.",
    productDetails: {
        itemCode: "HBA647",
        author: "Dr Govinda Parik",
        publisher: "Dev Publishers And Distributors",
        language: "English",
        edition: "2025",
        isbn: "9789359445892",
        pages: "69",
        cover: "Hardcover",
        dimensions: "9 x 6 inches",
        weight: "2.80 kg",
    },
};

const ProductDetails = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === productData.image.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? productData.image.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-gray-100 ">
            <div className="  mx-auto px-4 py-8">
                <div className="grid grid-cols-3  ">
                    {/* Product Images */}

                    <div className="col-span-3 md:col-span-2">
                        <div className="grid grid-cols-5 gap-4">
                            {/* Thumbnails on the left */}
                            <div className="col-span-1 justify-start items-center flex flex-col gap-4">
                                {productData.image.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`w-20 h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300 ${
                                            index === currentIndex
                                                ? "opacity-100"
                                                : ""
                                        }`}
                                        onClick={() => setCurrentIndex(index)}
                                        width={80}
                                        height={80}
                                    />
                                ))}
                            </div>

                            {/* Main Image with Carousel Arrows */}
                            <div className="col-span-4 flex justify-center items-center relative">
                                <img
                                    src={productData.image[currentIndex]}
                                    alt="Product"
                                    className="w-auto h-[500px] rounded-lg shadow-md mb-4"
                                />

                                {/* Left Arrow */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                                >
                                    <ChevronLeft size={24} />
                                </button>

                                {/* Right Arrow */}
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Details */}
                    <div className="col-span-3 md:col-span-1   w-full   px-4">
                        <h2 className="text-3xl font-bold mb-2 tracking-wide text-gray-700">
                            {productData.title}
                        </h2>
                        <p className="text-gray-600 text-[16px] mb-2  ">
                            <span className="text-gray-800 font-semibold">
                                By{" "}
                            </span>
                            {productData.productDetails.author}
                        </p>
                        <div className="mb-4 text-2xl items-center flex">
                            {/* <span className="text-green-700">$: </span> */}
                            <span className="text-3xl font-bold mr-2">
                                ${productData.price}
                            </span>
                            <span className=" line-through text-sm   text-red-500">
                                ${productData.discountPrice}
                            </span>
                        </div>

                        <p className="text-gray-700 mb-6 text-[15px]">
                            {productData.shortDescription}
                        </p>

                        <div className="mb-2 flex justify-left items-end   gap-5">
                            <div>
                                <CounterInput />
                            </div>
                            <button className="bg-indigo-600 flex gap-2 items-center text-white px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 py-[0.4rem] focus:ring-indigo-500 focus:ring-offset-2 text-[17px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                                Add to Cart
                            </button>
                        </div>

                        <div className="py-5">
                            <button className="flex justify-start items-center">
                                {" "}
                                <MapPin className="text-red-500   " />
                                <p className="text-[20px] underline decoration-dotted">
                                    Select Delivery Location
                                </p>
                            </button>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Product Details:
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 w-fit">
                                {Object.keys(productData.productDetails).map(
                                    (key) => (
                                        <li
                                            key={key}
                                            className="text-sm capitalize grid grid-cols-2 mb-2  "
                                        >
                                            <span className="font-semibold   max-w-fit">
                                                {key}:
                                            </span>
                                            <span className=" ">
                                                {
                                                    productData.productDetails[
                                                        key
                                                    ]
                                                }
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

const CounterInput = () => {
    const [count, setCount] = useState(1);

    const decrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0)); // Prevent going below 0
    };

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div className="custom-number-input h-10 w-32">
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                    type="button"
                    onClick={decrement}
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                    type="number"
                    className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700"
                    name="custom-input-number"
                    value={count}
                    readOnly
                />
                <button
                    type="button"
                    onClick={increment}
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                >
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>

            <style jsx>{`
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            `}</style>
        </div>
    );
};
