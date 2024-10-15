"use client";
// app/product/[id]/page.js
import { useParams, useSearchParams } from "next/navigation";
import ProductDetails from "@/components/product/ProductDetails";

const ProductPage = () => {
    // Retrieve the dynamic 'id' from the URL
    const { id } = useParams();

    // Retrieve the 'category' query parameter from the URL
    const searchParams = useSearchParams();
    const category = searchParams.get("collection");

    const uid = decodeURIComponent(id);
    return (
        <div>
            <ProductDetails id={uid} category={category} />
        </div>
    );
};

export default ProductPage;
