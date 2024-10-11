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
    ItemCode: "",
    Author: "",
    Publisher: "",
    Language: "",
    Edition: "",
    ISBN: "",
    Pages: "",
    Cover: "",
    OtherDetails: "",
    Weight: "",
    shippingDetails: "",
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
    <div className="bg-white p-6 grid grid-cols-2 gap-4">
      {/* {
        <div className="text-center mt-4">
          <BarLoader color="#36D7B7" />
          Uploading...
        </div>
      } */}
      <div className="col-span-2">
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
      </div>

      <FixedFields product={product} setProduct={setProduct} />

      <ToastContainer />
      <div className="col-span-2">
        <button
          type="button"
          onClick={handleSubmit}
          className={` bg-blue-500 w-full text-white p-2 mt-4 focus:outline-none hover:bg-blue-600 ${
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
