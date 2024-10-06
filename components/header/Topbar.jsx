import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, Heart, Logs, ShoppingBag, Search } from "lucide-react";
const Topbar = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <header className="flex items-center justify-between p-2 bg-white  ">
            {/* Logo */}
            <div className="flex  justify-between items-center   ">
                <Image
                    src="/logo.png"
                    className="h-[65px] w-auto  "
                    width={999}
                    height={999}
                    alt=""
                />
                <div className="flex flex-col   justify-center items-center">
                    <span className="ml-1   text-orange-500  text-4xl tracking-wide font-semibold mx-2 ">
                        Adi Prabha
                    </span>
                    <span className=" w-fit  text-xs tracking-wider  text-orange-400   flex justify-start gap-1 mr-1">
                        <span>AUTHENTIC</span>
                        <span>CURATED</span>
                        <span>HERITAGE</span>
                    </span>
                </div>
            </div>

            {/* Search Bar */}
            <div className="flex items-center  rounded-full w-1/2 border-gray-500 border-[1px]">
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
