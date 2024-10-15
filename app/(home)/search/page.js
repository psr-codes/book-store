"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
const page = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  console.log("query is", query);
  return <div>query: {query}</div>;
};

export default page;
