"use client";
import ShopBySubjects from "./ShopBySubject";
import Categories from "./Categories";
import ShopWithUs from "./ShopWithUs";
import Tabs from "@/components/landing/Tabs";
import Testimonials from "./Testimonials";

import React from "react";

const Home = () => {
    return (
        <section className="relative w-full ">
            <ShopBySubjects />

            <Categories />
            <Tabs />
            <ShopWithUs />
            <Testimonials />
        </section>
    );
};

export default Home;
