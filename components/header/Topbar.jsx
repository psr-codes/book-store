"use client";
import { auth } from "@/db/firebase";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn, LogOut, Logs, ShoppingBag, Search } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { adminEmail } from "@/data/siteData";

const Topbar = () => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [searchValue, setSearchValue] = useState("");

    if (loading) {
        return <p>Loading...</p>; // Simple loading message or spinner
    }

    return (
        <header className="flex items-center justify-between py-2 md:p-2    ">
            {/* Logo */}
            <Link
                href="/"
                className="flex   justify-start md:justify-between items-center   "
            >
                <Image
                    src="/logo-png.png"
                    className=" h-[40px] md:h-[65px] w-auto  "
                    width={999}
                    height={999}
                    alt=""
                />
                <div className="flex flex-col   justify-center items-start md:items-center">
                    <span className="md:ml-1   text-orange-500  md:text-4xl tracking-wide font-semibold mx-2 ">
                        Adi Prabha
                    </span>
                    <span className=" w-fit  text-[0.5rem] md:text-xs tracking-wider  text-orange-400   flex justify-start gap-1 mr-1">
                        <span>TREE</span>
                        <span>OF</span>
                        <span>ENLIGHTENMENT</span>
                    </span>
                </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex items-center  rounded-full w-1/2 border-gray-500 border-[1px]">
                {/* <button className="pl-4 pr-2 py-2 text-gray-600">ALL</button> */}
                {/* <ChevronDown className="text-gray-700" /> */}

                <input
                    type="text"
                    placeholder="Search our 400,000+ beautiful handpicked products"
                    className="flex-grow ml-5   px-4 py-2 focus:outline-none tracking-wider text-gray-700"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                {/* Search Icon */}
                <button
                    className="pr-4"
                    onClick={() => {
                        router.push(`/search?query=${searchValue}`);
                    }}
                >
                    <Search className="text-gray-700" />
                </button>
            </div>

            {/* Icons */}
            <div className=" ">
                {/* <div className="flex flex-col md:flex-row items-center justify-center space-x-1">
          <Heart className="text-gray-700" />
          <span className="text-[14px] md:text-[16px]">Wishlist</span>
        </div> */}
                {user ? (
                    user.email === adminEmail ? (
                        <div className="flex px-2  md:justify-center space-x-3 md:space-x-6 text-gray-900">
                            <Link
                                href="/backend"
                                className="flex flex-col md:flex-row items-center justify-center space-x-1"
                            >
                                <span className="text-[16px] md:text-[16px] font-semibold flex">
                                    {" "}
                                    <LogIn className=" " />
                                    <span> Admin Panel</span>
                                </span>
                            </Link>
                            <p className="flex text-red-500 hover:text-red-700 flex-col md:flex-row items-center justify-center space-x-1 cursor-pointer">
                                <span
                                    onClick={() => auth.signOut()}
                                    className="flex font-semibold"
                                >
                                    {" "}
                                    <LogOut />
                                    <span>Logout</span>
                                </span>
                            </p>
                        </div>
                    ) : (
                        <div className="flex px-2  md:justify-center space-x-3 md:space-x-6 text-gray-900">
                            {" "}
                            <Link
                                href="/my-orders"
                                className="flex flex-col md:flex-row items-center justify-center space-x-1"
                            >
                                <Logs className="text-gray-700" />
                                <span className="text-[14px] md:text-[16px]">
                                    My Orders
                                </span>
                            </Link>
                            <Link
                                href="/Cart"
                                className="flex flex-col md:flex-row items-center justify-center space-x-1"
                            >
                                <ShoppingBag className="text-gray-700" />
                                <span className="text-[14px] md:text-[16px]">
                                    Cart
                                </span>
                            </Link>
                            <p className="flex text-red-500 hover:text-red-700 flex-col md:flex-row items-center justify-center space-x-1 cursor-pointer">
                                <span
                                    onClick={() => auth.signOut()}
                                    className="flex font-semibold"
                                >
                                    {" "}
                                    <LogOut />
                                    <span>Logout</span>
                                </span>
                            </p>
                        </div>
                    )
                ) : (
                    <div className="w-full text-orange-500 hover:text-orange-600 ">
                        <Link
                            href="/login"
                            className="flex flex-col md:flex-row items-center justify-center space-x-1"
                        >
                            <span className="text-[16px] md:text-[16px] font-semibold flex">
                                {" "}
                                <LogIn className=" " />
                                <span> Login</span>
                            </span>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Topbar;
