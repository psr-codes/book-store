import React from "react";
import "./Categories.css";

const categories = [
    { name: "STATUES", image: "/images/categories/sculptures-002.webp" },
    {
        name: "HOME & LIVING",
        image: "/images/categories/homeandliving-001.jpg",
    },
    { name: "BOOKS", image: "/images/categories/book-001.jpg" },
    {
        name: "CLOTHING & MORE",
        image: "/images/categories/textiles-001.webp",
    },
    { name: "PAINTINGS", image: "/images/categories/paintings-001.webp" },
    { name: "JEWELRY", image: "/images/categories/jewelry-001.jpg" },
];

const Categories = () => {
    return (
        <div className="relative w-full  my-10">
            <div className=" w-[100vw]  custom-shape-divider-top-1727592207 bg-[#F9E9DA]">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    />
                </svg>
            </div>

            <div className="text-center pt-[50px] py-[50px]   md:px-[12rem]  bg-[#F9E9DA] ">
                <h2 className="text-4xl font-semibold text-gray-700 my-16">
                    Explore Our Categories
                </h2>
                <div className="grid grid-cols-2    sm:grid-cols-3 lg:grid-cols-6 ">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-[10rem] h-[10rem] rounded-full overflow-hidden border-[7px] border-orange-500 flex items-center justify-center mb-4">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-sm font-medium">
                                {category.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35.28 2.17"
                preserveAspectRatio="none"
                className="  z-3 pointer-events-none bottom-0 left-0 right-0 w-full"
                style={{ height: "83px" }}
            >
                <path
                    d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
                    fill="#F9E9DA"
                />
            </svg>
        </div>
    );
};

export default Categories;
