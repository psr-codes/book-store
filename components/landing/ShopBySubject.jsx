import React, { useState } from "react";

const categories = [
    { name: "HINDU BOOKS", image: "/images/shop-by-subjects/hindu-book.webp" },
    { name: "HINDI BOOKS", image: "/images/shop-by-subjects/hindi-books.webp" },
    { name: "SANSKRIT BOOKS", image: "/images/shop-by-subjects/sanskrit.webp" },

    { name: "yoga BOOKS", image: "/images/shop-by-subjects/Yoga-books.webp" },
    {
        name: "HISTORY BOOKS",
        image: "/images/shop-by-subjects/History-book.webp",
    },
    {
        name: "AYURVEDA BOOKS",
        image: "/images/shop-by-subjects/ayurveda-books.webp",
    },
    {
        name: "Tantra BOOKS",
        image: "/images/shop-by-subjects/Tantra-book.webp",
    },
    { name: "Thangka", image: "/images/shop-by-subjects/Thangka.webp" },
    {
        name: "HINDU STATUES",
        image: "/images/shop-by-subjects/hindu-statues.webp",
    },
    {
        name: "BRASS STATUES",
        image: "/images/shop-by-subjects/brass-statue.webp",
    },
    {
        name: "Small STATUES",
        image: "/images/shop-by-subjects/Small-statue.webp",
    },
    {
        name: "Stone STATUES",
        image: "/images/shop-by-subjects/Stone-statue.webp",
    },
    { name: "HOME DECOR", image: "/images/shop-by-subjects/home-decor.webp" },
    {
        name: "SHAWLS AND SCARVES",
        image: "/images/shop-by-subjects/stoles-and-shawls.webp",
    },
    {
        name: "TANJORE PAINTINGS",
        image: "/images/shop-by-subjects/tanjore-paintings.webp",
    },
    {
        name: "BRASS RITUAL",
        image: "/images/shop-by-subjects/brass-ritual.webp",
    },
    { name: "ASTROLOGY", image: "/images/shop-by-subjects/Astrology.webp" },
    { name: "CLOTHING", image: "/images/shop-by-subjects/Kurta-pajama.webp" },
    {
        name: "LANGUAGES & Literature",
        image: "/images/shop-by-subjects/Languages-Literature.webp",
    },
    { name: "Arts", image: "/images/shop-by-subjects/Performingarts.webp" },
    {
        name: "Puja & Temples",
        image: "/images/shop-by-subjects/Puja-temples.webp",
    },
    {
        name: "Regional Languages",
        image: "/images/shop-by-subjects/Regional-languages.webp",
    },
];

const ShopBySubjects = () => {
    // State to control how many categories are shown
    const [visibleCount, setVisibleCount] = useState(12);

    // Function to show all categories when "More" is clicked

    // If we want to toggle between "More" and "Less", we can use this:
    // const handleToggle = () => {
    //     setVisibleCount(visibleCount === 12 ? categories.length : 12);
    // };

    return (
        <div className="text-center py-8 md:px-[12rem] my-10">
            <h2 className="text-4xl font-semibold text-gray-700 mb-8">
                Shop by Subjects
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.slice(0, visibleCount).map((category, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full overflow-hidden   flex items-center justify-center mb-4">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h4 className="text-sm font-medium uppercase">
                            {category.name}
                        </h4>
                    </div>
                ))}
            </div>
            {visibleCount < categories.length ? (
                <button
                    onClick={() => setVisibleCount(categories.length)}
                    className="mt-8 px-6 py-2 bg-black text-white text-sm  rounded-3xl hover:bg-gray-800"
                >
                    + More
                </button>
            ) : (
                <button
                    onClick={() => setVisibleCount(12)}
                    className="mt-8 px-6 py-2 bg-black text-white  text-sm  rounded-3xl hover:bg-gray-800"
                >
                    + Less
                </button>
            )}
        </div>
    );
};

export default ShopBySubjects;
