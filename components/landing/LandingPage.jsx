"use client";
import ShopBySubjects from "./ShopBySubject";
import Categories from "./Categories";
import ShopWithUs from "./ShopWithUs";
import React from "react";

const Home = () => {
    return (
        <section className="relative w-full ">
            <ShopBySubjects />

            <Categories />
            <ShopWithUs />
        </section>
    );
};

export default Home;
