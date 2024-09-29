import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, Heart, Logs, ShoppingBag, Search } from "lucide-react";
const Topbar = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow">
            {/* Logo */}
            <div className="flex  justify-between items-center  ">
                <Image
                    src="/logo.png"
                    className="h-[65px] w-auto "
                    width={999}
                    height={999}
                    alt=""
                />
                <div className="flex flex-col justify-center items-center">
                    <span className="ml-1  text-orange-500  text-4xl tracking-widest  ">
                        Exotic India
                    </span>
                    <span className="ml-2 text-sm  text-gray-800">
                        {" "}
                        AUTHENTIC.CURATED.HERITAGE
                    </span>
                </div>
            </div>

            {/* Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-full w-1/2">
                <button className="pl-4 pr-2 py-2 text-gray-600">ALL</button>
                <ChevronDown className="text-gray-700" />

                <input
                    type="text"
                    placeholder="Search our 400,000+ beautiful handpicked products"
                    className="flex-grow px-4 py-2 focus:outline-none tracking-wider text-gray-700"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                {/* Search Icon */}
                <div className="pr-4">
                    <Search className="text-gray-700" />
                </div>
            </div>

            {/* Icons */}
            <div className="flex space-x-6 text-gray-900">
                <div className="flex items-center space-x-1">
                    <Heart className="text-gray-700" />
                    <span>Wishlist</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Logs className="text-gray-700" />
                    <span>My Orders</span>
                </div>
                <div className="flex items-center space-x-1">
                    <ShoppingBag className="text-gray-700" />
                    <span>Cart</span>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
