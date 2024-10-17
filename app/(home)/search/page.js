"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const SearchContent = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    console.log("query is", query);
    return <div>query: {query}</div>;
};

const Page = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <SearchContent />
    </Suspense>
);

export default Page;
