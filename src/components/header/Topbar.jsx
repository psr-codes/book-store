import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      {/* Logo */}
      <div className="flex bg-violet-500">
        {/* <Image
          width={25}
          height={25}
          src="/logo.png"
          alt="Exotic India Logo"
          className="h-[25px] w-[25px]"
        /> */}
        <div className="flex flex-col">
          <span className="ml-1 text-sm text-orange-500">
            AUTHENTIC.CURATED.fsdfsd
          </span>
          <span className="ml-2 text-xl font-bold text-gray-800">
            exotfdfdic indiafsdfsdfsdfsdf
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-full w-1/2">
        <button className="px-4 py-2 text-gray-600">ALL</button>
        <input
          type="text"
          placeholder="Search our 400,000+ beautiful handpicked products"
          className="flex-grow px-4 py-2 focus:outline-none"
        />
        <button className="px-4 py-2 text-gray-600">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Icons */}
      <div className="flex space-x-6 text-gray-600">
        <div className="flex items-center space-x-1">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 12h14M5 16h14"
            />
          </svg>
          <span>Wishlist</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
            />
          </svg>
          <span>My Orders</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h18v18H3z"
            />
          </svg>
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
