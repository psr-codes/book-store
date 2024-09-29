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
            <Topbar />
            {isLoaded && <Navbar />}
        </div>
    );
};

export default Header;
