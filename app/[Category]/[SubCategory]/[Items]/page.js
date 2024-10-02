"use client";
import { useParams } from "next/navigation";

export default function ItemPage() {
  const params = useParams();
  const category = decodeURIComponent(params.Category);
  const subcategory = decodeURIComponent(params.SubCategory);
  const item = decodeURIComponent(params.Items); // Decode all parameters

  return (
    <div>
      <h1>
        Item: {item} in {subcategory} under {category}
      </h1>
      <p>Details about the item...</p>
    </div>
  );
}
