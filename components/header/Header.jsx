"use client";
import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import TopbarStrip from "./TopbarStrip";
import { useEffect, useState } from "react";
const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <div>
            <TopbarStrip />
            <div className="px-20">
                <Topbar />
                {isLoaded && <Navbar />}
            </div>
        </div>
    );
};

export default Header;
