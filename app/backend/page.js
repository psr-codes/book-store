"use client";

import FixedFields from "@/components/backend/FixedFields";
import UpdateImages from "@/components/backend/UpdateImages";
import { db, storage } from "@/db/firebase";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const List = () => {
   const [product, setProduct] = useState({
     imageUrls: [],
     name: "",
     price: "",
     strikePrice: "",
     availability: false,
     shortDescription: "",
     description: "",
     category: "",
   });
   const [tempFields, setTempFields] = useState({});
   const [images, setImages] = useState([]);
   const [isButtonDisabled, setIsButtonDisabled] = useState(false);

   const getRandomId = () => Math.floor(1000 + Math.random() * 9000);

   const showFieldEmptyToast = (fieldName) => {
     toast.error(`Please fill in the ${fieldName} field.`);
   };

   const showSuccessToast = () => {
     toast.success("Product uploaded successfully!");
   };

   const showErrorToast = (errorMessage) => {
     toast.error(`Error: ${errorMessage}`);
   };

   const handleFileSelect = (event) => {
     const files = Array.from(event.target.files);
     const imageFiles = files.filter((file) => {
       const extension = file.name.split(".").pop().toLowerCase();
       return ["jpg", "jpeg", "png", "gif", "bmp"].includes(extension);
     });
     setImages((prevImages) => [...prevImages, ...imageFiles]);
   };

   const handleSubmit = async () => {
     setIsButtonDisabled(true);
     const result = await uploadProduct(
       product,
       images,
       {
         userName: "username",
         id: "userId",
         countryCurrency: "USD",
         phoneNumber: "123456789",
         email: "email@example.com",
       },
       tempFields,
       db,
       storage,
       showFieldEmptyToast,
       showSuccessToast,
       showErrorToast,
       getRandomId
     );
     if (!result.success) {
       console.error(result.message);
     }
     setIsButtonDisabled(false);
   };

  return (
    <div className="w-ful">
      {
        <div className="text-center mt-4">
          <BarLoader color="#36D7B7" />
          Uploading...
        </div>
      }
      <UpdateImages images={images} setImages={setImages} />
      <div>
        <h1 className="w-full font-bold text-black text-start my-4 text-2xl capitalize">
          Add new images
        </h1>
        <input
          type="file"
          multiple
          onChange={handleFileSelect}
          className="w-full md:w-auto"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 justify-start">
        <FixedFields product={product} setProduct={setProduct} />
      </div>

      <ToastContainer />
      <div>
        <button
          type="button"
          onClick={handleSubmit}
          className={`bg-blue-500 w-full text-white p-2 rounded-md mt-4 focus:outline-none hover:bg-blue-600 ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? "Uploading..." : "Upload Product"}
        </button>
      </div>
    </div>
  );
};

export default List;
