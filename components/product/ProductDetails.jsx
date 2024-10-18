"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { fetchProductData } from "@/lib";
import { fetchOneProduct } from "@/api/fetchOneProduct";
import globalStore from "@/store/globalStore";
import { useAuth } from "@/hooks/useAuth";

const excluding_keys = [
    "id",
    "name",
    "author",
    "price",
    "strikePrice",
    "description",
    "imageUrls",
];

import { handleFirebaseCartUpdate } from "@/api/cart/handleFirebaseCartUpdate";

const ProductDetails = ({ id, category }) => {
    const { user, loading } = useAuth();
    useEffect(() => {
        if (user) {
            console.log("user", user);
        }
    }, [user]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const [orderCount, setOrderCount] = useState(1);

    const [productData, setProductData] = useState(null);

    const { cartItems, addToCart, removeFromCart, isInCart } = globalStore();

    const router = useRouter();

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === productData.imageUrls.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? productData.imageUrls.length - 1 : prevIndex - 1
        );
    };

    // const productData = fetchProductData(id);
    useEffect(() => {
        console.log("cart items changed", cartItems);
    }, [cartItems]);
    useEffect(() => {
        const f = async () => {
            const productData = await fetchOneProduct(id, category);
            console.log("productData", productData);
            setProductData(productData);
        };
        f();
    }, [id]);

    // toast.show("Please login to add items to cart");

    // const handleAddToCart = () => {
    //     if (productData && isInCart(productData.id)) {
    //         removeFromCart({ id: productData.id });
    //     } else {
    //         // remove previous item with same id
    //         removeFromCart({ id: productData.id });
    //         addToCart({
    //             id: productData.id,
    //             category: productData.product.category,
    //             name: productData.product.name,
    //             price: productData.product.price,
    //             discountPrice: productData.product.strikePrice,
    //             image: productData.imageUrls[0],
    //             quantity: orderCount,
    //         });
    //     }
    // };

    const handleAddToCart = async () => {
        if (!user || !user.email) {
            toast.show("Please login to add items to cart");
            return;
        }
        if (!productData) return;

        const isItemInCart = isInCart(productData.id);

        // Update local cart
        if (isItemInCart) {
            removeFromCart({ id: productData.id });
        } else {
            addToCart({
                id: productData.id,
                category: productData.product.category,
                name: productData.product.name,
                price: productData.product.price,
                discountPrice: productData.product.strikePrice,
                image: productData.imageUrls[0],
                quantity: orderCount,
            });
        }
        const email = user.email;
        const res = await handleFirebaseCartUpdate(
            email,
            productData,
            orderCount
        );
        console.log("res", res);

        if (res.success) {
            toast.success(res.message);
        } else {
            toast.error(res.message);
        }
    };

    if (!id || !productData) return null;

    return (
        <div className="bg-gray-100 ">
            <div className="  mx-auto px-4 py-8">
                <div className="grid grid-cols-3 ">
                    {/* Product Images */}

                    <div className="col-span-3 md:col-span-2  ">
                        <div className="grid grid-cols-5 gap-4 md:grid-cols-5 md:gap-4">
                            {/* Thumbnails on the left for larger screens and at the bottom for smaller screens */}
                            <div className="col-span-5 order-2 md:col-span-1 md:order-none justify-start items-center flex flex-row md:flex-col gap-4   p-2">
                                {productData.imageUrls.map((image, index) => (
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
                            <div className="col-span-5 md:col-span-4 flex justify-center items-center relative order-1 md:order-none">
                                <img
                                    src={productData.imageUrls[currentIndex]}
                                    alt="Product"
                                    className="w-auto h-[500px] rounded-lg  mb-4"
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
                    <div className="col-span-3 md:col-span-1   w-full  p-2">
                        <h2 className="text-3xl font-bold mb-2 tracking-wide text-gray-700">
                            {productData.product.name}
                        </h2>
                        <p className="text-gray-600 text-[16px] mb-2  ">
                            <span className="text-gray-800 font-semibold">
                                By{" "}
                            </span>
                            {productData.product.Author}
                        </p>
                        <div className="mb-4 text-2xl items-center flex">
                            {/* <span className="text-green-700">$: </span> */}
                            <span className="text-3xl font-bold mr-2">
                                ${productData.product.price}
                            </span>
                            <span className=" line-through text-sm   text-red-500">
                                ${productData.product.strikePrice}
                            </span>
                        </div>

                        <p className="text-gray-700 mb-6 text-[15px]">
                            {productData.product.shortDescription}
                        </p>

                        <div className="mb-2 flex justify-left items-end   gap-5">
                            <div>
                                <CounterInput
                                    orderCount={orderCount}
                                    setOrderCount={setOrderCount}
                                />
                            </div>
                            <button
                                className={`bg-indigo-600 flex gap-2 items-center text-white px-4 rounded-md text-[17px] py-[0.4rem] ${
                                    productData && isInCart(productData.id)
                                        ? "bg-red-500 hover:bg-red-600"
                                        : "bg-indigo-600 hover:bg-indigo-700"
                                }`}
                                onClick={handleAddToCart}
                            >
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
                                {productData &&
                                cartItems &&
                                isInCart(productData.id)
                                    ? "Remove from Cart"
                                    : "Add to Cart"}
                            </button>
                        </div>
                        {cartItems.length > 0 && (
                            <div className="mb-2 flex justify-left items-end   gap-5 my-5">
                                {" "}
                                <button
                                    className={` flex gap-2 items-center text-white   rounded-md text-[17px] py-[0.4rem] w-fit px-10 bg-orange-500 hover:bg-orange-600`}
                                    onClick={() => {
                                        router.push("/Cart");
                                    }}
                                >
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
                                    Checkout / Go to Cart
                                </button>
                            </div>
                        )}

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
                                {Object.keys(productData.product).map((key) => {
                                    if (
                                        excluding_keys.includes(key) ||
                                        !productData.product[key]
                                    )
                                        return null;

                                    return (
                                        <li
                                            key={key}
                                            className="text-sm capitalize grid grid-cols-2 mb-2"
                                        >
                                            <span className="font-semibold max-w-fit">
                                                {key}:
                                            </span>
                                            <span>
                                                {productData.product[key]}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full  my-10 px-5 md:px-20">
                    {productData.product.description}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

const CounterInput = ({ orderCount, setOrderCount }) => {
    const decrement = () => {
        setOrderCount((prevCount) => Math.max(prevCount - 1, 1)); // Prevent going below 1
    };

    const increment = () => {
        setOrderCount((prevCount) => prevCount + 1);
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
                    value={orderCount}
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
