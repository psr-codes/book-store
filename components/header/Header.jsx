"use client";
import React from "react";
import Topbar from "./Topbar";
import Navbar2 from "./Navbar2";
import TopbarStrip from "./TopbarStrip";
import { useEffect, useState } from "react";
const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <div>
            {/* <TopbarStrip /> */}
            <div className=" md:px-20">
                <Topbar />
                {isLoaded && <Navbar2 />}
            </div>
        </div>
    );
};

export default Header;
