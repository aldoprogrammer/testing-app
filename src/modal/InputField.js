import { LuArrowUpFromLine } from "react-icons/lu";
import React, { useState } from 'react';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';


export default function InputField() {
  const [enableVariants, setEnableVariants] = useState(false);
  const toggleVariants = () => {
    setEnableVariants(!enableVariants);
  };

  return (
    <div className="w-4/5 h-auto 
    flex flex-col mx-auto
    mt-4">
      <div className="flex flex-col md:flex-row w-full gap-2">
        {/* Product Name */}
        <label className="mb-2 text-white">
          Your Product Name
          <input
            type="text"
            className="mt-1 border border-gray-300 p-2 rounded-md w-4/5 bg-[#1A1A1A] outline-none"
            placeholder="Product Name"
          />
        </label>

        {/* Menu code */}
        <label className="mb-2 text-white">
          Menu code
          <input
            type="text"
            className="mt-1 border border-gray-300 p-2 rounded-md w-full bg-[#1A1A1A] outline-none"
            placeholder="Menu code"
          />
        </label>
      </div>

      {/* Category */}
      <div className="flex flex-col md:flex-row w-full gap-2 mt-4">
        <label className="mb-2 text-white w-full">
          Category
          <select
            className="mt-1 border border-gray-300 p-2 rounded-md w-full bg-[#1A1A1A] outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Cocktail">Cocktail</option>
            <option value="Shooters">Shooters</option>
            <option value="PremiumSpirits">Premium Spirits</option>
            <option value="NonAlcoholic">Non-Alcoholic Beverages</option>
          </select>
        </label>
      </div>

      {/* Product Description */}
      <div className="flex flex-col md:flex-row w-full gap-2 mt-4">
        <label className="mb-2 text-white w-full">
          Tell me more about your product
          <span className="text-red-500">*</span>
          <textarea
            className="mt-1 border border-gray-300 p-2 rounded-md w-full bg-[#1A1A1A] outline-none resize-none"
            placeholder="Product description"
          ></textarea>
        </label>
      </div>

   {/* Price */}
   <div className="flex flex-col md:flex-row w-full gap-2 mt-4">
        {/* Product Name */}
        <label className="mb-2 text-white w-full">
          Price
          <span className="text-red-500">*</span>
          <div className="mt-1 relative flex items-center">
            <span className="absolute left-0 pl-2 text-white font-bold">NT$</span>
            <input
              type="text"
              className="border 
              border-gray-300 pl-12  pr-2 
              py-2 rounded-md w-full 
              bg-[#1A1A1A] outline-none"
              placeholder="Price"
            />
          </div>
        </label>

        {/* Discounted Price */}
        <label className="mb-2 text-white w-full">
          Discount price (optional)
          <div className="mt-1 relative flex items-center">
            <span className="absolute left-0 pl-2 text-white font-bold">NT$</span>
            <input
              type="text"
              className="border border-gray-300 
              pl-12 pr-2 py-2 rounded-md w-full 
              bg-[#1A1A1A] outline-none"
              placeholder="Discounted price"
            />
          </div>
        </label>
      </div>

   {/* Image Upload */}
   <div className="flex flex-col md:flex-row w-full gap-2 mt-4">
        <label className="mb-2 text-white w-full">
          Image
          <span className="text-red-500">*</span>
          <div className="relative flex 
          items-center mt-1
          border border-gray-300 p-2 
          rounded-md w-full bg-[#1A1A1A] 
          outline-none">
              
            <label htmlFor="image-upload" className="cursor-pointer flex-1">
              Select File
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="border border-gray-300 p-2 rounded-md w-full bg-[#1A1A1A] outline-none hidden"
            />
           
            <LuArrowUpFromLine size={20} color="#AB5CFA" className="ml-2" />
          </div>
        </label>
      </div>
  {/* Enable Variants */}
  <div className="flex flex-row 
  items-center w-full mt-4
  justify-between">
        <label className="text-white mr-2">Enable Variants</label>
        <div
          className="cursor-pointer"
          onClick={toggleVariants}
        >
          <div className="text-white font-bold">
            {enableVariants ? <MdToggleOn size={39} /> : <MdToggleOff size={39} />}
          </div>
        </div>
      </div>
    </div>
  );
}