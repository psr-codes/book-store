import React from "react";
import { MapPin } from "lucide-react";

const productData = {
    title: "Ten-Armed Goddess Durga Framed Tanjore Painting | 24 Karat Gold Work",
    price: 29000,
    discountPrice: 19000,
    availibility: "In Stock",
    shortDescription:
        "This is a beautiful Tanjore painting of the ten-armed goddess Durga. The painting is made using 24 karat gold foil and is framed in a wooden frame.",
    description:
        "This is a beautiful Tanjore painting of the ten-armed goddess Durga. The painting is made using 24 karat gold foil and is framed in a wooden frame. The painting is made by skilled artisans in Tamil Nadu. The painting is a perfect addition to your home decor and can also be gifted to your loved ones.",
    productDetails: {
        dimensions: "12 x 12 inches",
        weight: "1 kg",
        "Primary Material": "Wood, 24 Karat Gold",
        color: "Multi-Color",
        "Art Form": "Tanjore Painting",
        "Frame Material": "Wood",
        "Frame Color": "Brown",
        shape: "Square",
        finish: "Glossy",
        "Package Content": "1 Tanjore Painting",
    },
};
const ProductDetails = () => {
    return (
        <div className="bg-gray-100 ">
            <div className="  mx-auto px-4 py-8">
                <div className="flex flex-wrap -mx-4">
                    {/* Product Images */}
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <img
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Product"
                            className="w-full h-auto rounded-lg shadow-md mb-4"
                            id="mainImage"
                        />
                        <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                            <img
                                src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Thumbnail 1"
                                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                onclick="changeImage(this.src)"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Thumbnail 2"
                                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                onclick="changeImage(this.src)"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Thumbnail 3"
                                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                onclick="changeImage(this.src)"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Thumbnail 4"
                                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                onclick="changeImage(this.src)"
                            />
                        </div>
                    </div>
                    {/* Product Details */}
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-3xl font-bold mb-2 tracking-wide text-gray-700">
                            {productData.title}
                        </h2>
                        <p className="text-gray-600 text-[20px] mb-4">
                            {productData.availibility}
                        </p>
                        <div className="mb-4 text-2xl ">
                            <span className="text-green-700">MRP: </span>
                            <span className="text-3xl font-bold mr-2">
                                {productData.price}
                            </span>
                            <span className=" line-through text-red-500">
                                {productData.discountPrice}
                            </span>
                        </div>

                        <p className="text-gray-700 mb-6 text-[15px]">
                            {productData.shortDescription}
                        </p>

                        <div className="mb-6 flex justify-left items-end gap-5">
                            <div>
                                {" "}
                                <label
                                    htmlFor="quantity"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Quantity:
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min={1}
                                    defaultValue={1}
                                    className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <button className="bg-indigo-600 flex gap-2 items-center text-white px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 py-1 focus:ring-indigo-500 focus:ring-offset-2 text-[17px]">
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
