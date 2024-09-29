import React, { useState } from "react";

const categories = [
    { name: "HINDU STATUES", image: "/path/to/image1.jpg" },
    { name: "HINDU BOOKS", image: "/path/to/image2.jpg" },
    { name: "HINDI BOOKS", image: "/path/to/image3.jpg" },
    { name: "REGIONAL LANGUAGES", image: "/path/to/image4.jpg" },
    { name: "HOME DECOR", image: "/path/to/image5.jpg" },
    { name: "BRASS STATUES", image: "/path/to/image6.jpg" },
    { name: "SMALL STATUES", image: "/path/to/image7.jpg" },
    { name: "SHAWLS & SCARVES", image: "/path/to/image8.jpg" },
    { name: "BOOKS ON AYURVEDA", image: "/path/to/image9.jpg" },
    { name: "TANJORE PAINTINGS", image: "/path/to/image10.jpg" },
    { name: "SANSKRIT BOOKS", image: "/path/to/image11.jpg" },
    { name: "HISTORY BOOKS", image: "/path/to/image12.jpg" },
    { name: "HINDU STATUES", image: "/path/to/image1.jpg" },
    { name: "HINDU BOOKS", image: "/path/to/image2.jpg" },
    { name: "HINDI BOOKS", image: "/path/to/image3.jpg" },
    { name: "REGIONAL LANGUAGES", image: "/path/to/image4.jpg" },
    { name: "HOME DECOR", image: "/path/to/image5.jpg" },
    { name: "BRASS STATUES", image: "/path/to/image6.jpg" },
    { name: "SMALL STATUES", image: "/path/to/image7.jpg" },
    { name: "SHAWLS & SCARVES", image: "/path/to/image8.jpg" },
    { name: "BOOKS ON AYURVEDA", image: "/path/to/image9.jpg" },
    { name: "TANJORE PAINTINGS", image: "/path/to/image10.jpg" },
    { name: "SANSKRIT BOOKS", image: "/path/to/image11.jpg" },
    { name: "HISTORY BOOKS", image: "/path/to/image12.jpg" },
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
        <div className="text-center py-8 md:px-40 my-10">
            <h2 className="text-4xl font-semibold text-gray-700 mb-8">
                Shop by Subjects
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.slice(0, visibleCount).map((category, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-500 flex items-center justify-center mb-4">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h4 className="text-sm font-medium">{category.name}</h4>
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
