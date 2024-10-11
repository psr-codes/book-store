"use client";
import React, { useEffect, useState } from "react";

const FixedFields = ({ product, setProduct }) => {
  const [AllCategories, setAllCategories] = useState([
    "Buddhism",
    "Jainism",
    "Psychology",
    "Literature",
    "Bhagavad Gita",
    "Purana",
    "Mathematics",
    "Vedic Maths",
    "Vedanta",
    "Spirituality",
    "Alternative Medicine",
    "Art & Culture",
    "Art and Architecture",
    "History",
    "Ayurveda",
    "Philosophy",
    "Tantra",
    "Astrology",
    "Religious",
    "Sanskrit",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setProduct((prevProduct) => ({
      ...prevProduct,
      category: selectedValue,
    }));
  };

  const handleChange = (field, value) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
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
          value={product.name}
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price:
        </label>
        <input
          type="number"
          value={product.price}
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => handleChange("price", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Strike Price:
        </label>
        <input
          type="number"
          value={product.strikePrice}
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => handleChange("strikePrice", e.target.value)}
        />
      </div>

      <div className="relative w-full text-left mb-6">
        <select
          value={product.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select a category
          </option>
          {AllCategories.map((category, index) => (
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
            checked={product.availability}
            className="form-checkbox mr-2 h-4 w-4 text-blue-500"
            onChange={(e) => handleChange("availability", e.target.checked)}
          />
          Availability
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Short Description:
        </label>
        <textarea
          value={product.shortDescription}
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => handleChange("shortDescription", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea
          value={product.description}
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default FixedFields;
