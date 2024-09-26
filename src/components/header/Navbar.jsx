import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { useRouter } from "next/router";
// import useCartStore from "@/store/checkoutState";
import { navbar } from "../../../data/nav";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const router = useRouter();

  //   const cartItems = useCartStore((state) => state.cartItems);

  return (
    <nav
      className={`sticky top-0 bg-white dark::bg-gray-900 ${
        router.asPath === "/checkout" && "hidden"
      } ${
        router.asPath === "/Admin" && "hidden"
      } w-full top-0 start-0 border-b border-gray-200 dark::border-gray-600 z-50`}
    >
      <div className="flex flex-wrap items-center justify-between mx-4 p-4">
        <Link
          href="/"
          className="flex flex-col items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo-eng.png"
            className="h-[45px] w-auto "
            width={999}
            height={999}
            alt=""
          />
          <span className="self-center text-green-500 font-semibold whitespace-nowrap dark::text-white">
            Typical Indian Trips
          </span>
        </Link>
        {/* Mobile */}
        <Mobile mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        {/* Desktop */}
        <Desktop mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      </div>
    </nav>
  );
};

export default Navbar;

const CollapsibleNavLink = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative">
      <button
        className="flex items-center justify-between py-2 px-4 w-full bg-gray-100 -md hover:bg-gray-300 transition-colors"
        onClick={toggleSubmenu}
      >
        <span>{title}</span>

        <ChevronDown
          className={`w-4 h-4 fill-current transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <ul
        className={`nav-submenu pl-6 pt-2 space-y-1 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {children}
      </ul>
    </li>
  );
};

const NavSubmenuItem = ({ url, children, ...rest }) => (
  <li>
    <a
      href={url}
      className="block py-1 px-2  hover:bg-gray-200 transition-colors"
      {...rest}
    >
      {children}
    </a>
  </li>
);

const Mobile = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium -lg text-sm px-4 py-2 text-center dark::bg-blue-600 dark::hover:bg-blue-700 dark::focus:ring-blue-800"
      >
        Book Now
      </button>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 -lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark::text-gray-400 dark::hover:bg-gray-700 dark::focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onClick={() => {
          setMobileMenu(!mobileMenu);
        }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {mobileMenu && (
        <section
          className="absolute top-0 right-0   min-w-[100%] h-full p-2 border-[1px]   border-gray-200 bg-red-500 "
          id="mobileMenuContent"
        >
          <button
            onClick={() => {
              setMobileMenu(false);
            }}
            className="p-2 mt-5 ml-5"
          >
            <X className="hover:scale-110 hover:text-red-700 font-bold" />
          </button>
          <div className="p-2">
            <ul className="  left-0 mt-2 py-2    top-4 -md  z-999  w-full  ">
              <li className="mb-1 bg-gray-100">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100  "
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="mb-1 bg-gray-100">
                <Link
                  href="/HotspotsOfGoa"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  Hotspots of Goa
                </Link>
              </li>
              <li className="mb-1 bg-gray-100">
                <div className="space-y-2">
                  <CollapsibleNavLink title="Rent">
                    <NavSubmenuItem url="/Rent#car">Car</NavSubmenuItem>
                    <NavSubmenuItem url="/Rent#bus">Bus</NavSubmenuItem>
                    <NavSubmenuItem url="/Rent#taxi">Taxi</NavSubmenuItem>
                    <NavSubmenuItem url="/Rent#tempo">Tempo</NavSubmenuItem>
                  </CollapsibleNavLink>
                </div>
              </li>
              <li className="mb-1 bg-gray-100">
                <div className="space-y-2">
                  <CollapsibleNavLink title="Booking">
                    <NavSubmenuItem url="/Booking#hotel">Hotel</NavSubmenuItem>
                    <NavSubmenuItem url="/Booking#villa">Villa</NavSubmenuItem>
                    <NavSubmenuItem url="/Booking#yacht">Yacht</NavSubmenuItem>
                  </CollapsibleNavLink>
                </div>
              </li>
              <li className="mb-1 bg-gray-100">
                <Link
                  href="/Sightseeing"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  Sightseeing
                </Link>
              </li>
              <li className="mb-1 bg-gray-100">
                <Link
                  href="/Contact"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-1 bg-gray-100">
                <Link
                  href="/Gallery"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

const Desktop = () => {
  const router = useRouter();
  const [showSubmenuRent, setShowSubmenuRent] = useState(false);
  const [showSubmenuBooking, setShowSubmenuBooking] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState({});

  console.log(router);

  const handleMouseEnter = (category) => {
    setShowSubmenu((prevState) => ({
      ...prevState,
      [category]: true,
    }));
  };

  const handleMouseLeave = (category) => {
    setShowSubmenu((prevState) => ({
      ...prevState,
      [category]: false,
    }));
  };

  return (
    <div>
      <ul
        className="flex items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <li className="relative hover:bg-gray-100 py-4">
          <Link
            href="/"
            className={`block  px-3    ${
              router.asPath === "/" ? "text-green-500" : "text-gray-900"
            } `}
            aria-current="page"
          >
            Home
          </Link>
        </li>

        {Object.keys(navbar).map((menu) => (
          <li
            key={menu}
            className="relative hover:bg-gray-100 py-4"
            onMouseEnter={() => handleMouseEnter(menu)}
            onMouseLeave={() => handleMouseLeave(menu)}
          >
            <Link
              href={`/${menu}`}
              className={`flex px-3 ${
                router.asPath.includes(encodeURIComponent(menu))
                  ? "text-green-500"
                  : "text-gray-900"
              }`}
            >
              {menu}
              <svg
                className="w-4 h4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>
            </Link>
            {showSubmenu[menu] && (
              <ul
                className={`w-max absolute left-0 py-2 top-14 shadow-xl z-20 border-[1px] bg-white border-gray-200 grid ${
                  menu === "Chardham Yatra" ? "grid-cols-1" : "grid-cols-2"
                }`}
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={() => handleMouseLeave(menu)}
              >
                {navbar[menu].map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <Link
                      href={`/Search?Category=${menu}&Sub-Category=${item.Category}`}
                    >
                      {item.Category}
                    </Link>
                    {item.Subcategories && (
                      <ul className="px-4 py-2 text-gray-800">
                        {item.Subcategories.map((subcategory, subIndex) => (
                          <li className="hover:bg-blue-100" key={subIndex}>
                            <Link
                              href={`/Search?Category=${menu}&Sub-Category=${subcategory.Name}`}
                            >
                              {subcategory.Name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const BestTimeToVisit = () => {
  return (
    <div className=" grid grid-cols-2 justify-between whitespace-nowrap">
      <div className=" p-4">
        <h2 className="text-xl font-bold mb-4">By Seasons</h2>
        <ul className="mb-4">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">◇</span> Winter
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">◇</span> Summer
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">◇</span> Monsoon
          </li>
        </ul>
        <a href="#" className="text-blue-500 hover:underline">
          View All »
        </a>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">By Month</h2>
        <ul className="mb-4">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">◇</span> January
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">◇</span> February
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">◇</span> March
          </li>
        </ul>
        <a href="#" className="text-blue-500 hover:underline">
          View All »
        </a>
      </div>
    </div>
  );
};
