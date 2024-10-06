// app/[category]/[subcategory]/[item]/page.js
'use client'
import { useParams, useRouter } from "next/navigation";


export default function SubcategoryPage() {
  const params = useParams();
  const category = decodeURIComponent(params.Category); // Decode category
  const subcategory = decodeURIComponent(params.SubCategory); // Decode subcategory

  console.log({ category, subcategory });

  return (
    <div>
      <h1>
        Subcategory: {subcategory} in {category}
      </h1>
      {/* Your content here */}
    </div>
  );
}
