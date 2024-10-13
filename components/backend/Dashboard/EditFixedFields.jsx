import { db } from "@/db/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const EditFixedFields = () => {
  
  const areFieldsEmpty = () => {
    return (
      !name?.trim() ||
      !price?.trim() ||
      !strikePrice?.trim() ||
      !shortDescription?.trim() ||
      !description?.trim()
    );
  };

  const handleUpdateFields = async () => {
    try {
      const productRef = doc(db, userData.userName + userData.id, prodId);
      await updateDoc(productRef, {
        name: name,
        price: price,
        strikePrice: strikePrice,
        availability: availability,
        shortDescription: shortDescription,
        description: description,
        category: selectedCategory,
        categoryFields: tempFields,
      });
      toast.success("Product update success!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err.message);
      toast.error("Product update failed!");
    }
  };

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  };

  const handleFieldChange = (category, value) => {
    setTempFields((prevTempFields) => ({
      ...prevTempFields,
      [category]: value,
    }));
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          value={name}
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price:
        </label>
        <input
          type="number"
          value={price}
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Strike Price:
        </label>
        <input
          type="number"
          value={strikePrice}
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => setStrikePrice(e.target.value)}
        />
      </div>

      <div className="relative w-full text-left mb-6">
        <select
          value={selectedCategory}
          onChange={handleSelect}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select a category
          </option>
          {AllCategories &&
            AllCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="flex items-center text-gray-700 text-sm font-bold mb-2">
          <input
            type="checkbox"
            checked={availability}
            className="form-checkbox mr-2 h-4 w-4 text-blue-500"
            onChange={(e) => setAvailability(e.target.checked)}
          />
          Availability
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Short Description:
        </label>
        <textarea
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="w-full mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Dynamic Fields</h2>
        {categoryFields?.map((category) => (
          <div key={category} className="mb-4">
            <label
              htmlFor={category}
              className="block text-gray-600 font-semibold mb-2"
            >
              {category}
            </label>
            <input
              type="text"
              id={category}
              value={tempFields[category] || ""}
              onChange={(e) => handleFieldChange(category, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleUpdateFields}
        disabled={areFieldsEmpty()}
        className={`bg-blue-500 w-full text-white p-2 rounded-md mt-4 focus:outline-none hover:bg-blue-600 ${
          areFieldsEmpty() && "opacity-50 cursor-not-allowed"
        }`}
      >
        Update Fields
      </button>
      <ToastContainer />
    </div>
  );
};

export default EditFixedFields;
