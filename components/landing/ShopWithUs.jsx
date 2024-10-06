import React from "react";
import { Truck, BadgeIndianRupee, BadgePercent } from "lucide-react";
const ShopWithUs = () => {
    return (
        <section className="w-full bg-[#F9E9DA] my-10">
            <div className="  inset-0 z-10 pointer-events-none transform rotate-y-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35.28 2.17"
                    preserveAspectRatio="none"
                    className="w-full h-40 md:h-52"
                >
                    <path
                        d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
                        fill="#fff"
                    />
                </svg>
            </div>
            <div className="  py-5 bg-[#F9E9DA]">
                <h2 className="text-4xl text-center font-semibold text-gray-800 mb-8 ">
                    Why Shop with Us?
                </h2>
                <div className="flex flex-wrap justify-center gap-8 px-4">
                    <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md text-center">
                        <div className="mb-4   flex justify-center mx-auto">
                            <Truck className="text-red-400  w-[50px] h-[50px]" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Free Shipping Everywhere in India
                        </h3>
                        <p className="mt-2 text-[15px] text-gray-600">
                            Enjoy free delivery to all destinations across India
                            within 2 days of shipment.
                        </p>
                    </div>
                    <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md text-center">
                        <div className="mb-4   flex justify-center mx-auto">
                            <BadgePercent className="text-red-400  w-[50px] h-[50px]" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Exclusive Offers and Deals
                        </h3>
                        <p className="mt-2 text-[15px] text-gray-600">
                            Enjoy discounts up to 70% on more than 30,000 select
                            merchandise. Shop now!
                        </p>
                    </div>
                    <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md text-center">
                        <div className="mb-4   flex justify-center mx-auto">
                            <BadgeIndianRupee className="text-red-400  w-[50px] h-[50px]" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            The Best Price in the Market
                        </h3>
                        <p className="mt-2 text-[15px] text-gray-600">
                            Unmatched savings on a wide range of products. Shop
                            smart, shop with us!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopWithUs;
