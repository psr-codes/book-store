"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
const Page = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    console.log("query is", query);
    return <div>query: {query}</div>;
};

export default Page;
