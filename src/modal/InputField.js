import { LuArrowUpFromLine } from "react-icons/lu";
import React, { useState, useEffect } from 'react';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';


export default function InputField() {
 


  const initialCategories = [
    'Cocktail',
    'Shooters',
    'Premium Spirits',
    'Non-Alcoholic Beverages',
  ];

  const [enableVariants, setEnableVariants] = useState(false);
  const toggleVariants = () => {
    setEnableVariants(!enableVariants);
  };

  const savedCategories = JSON.parse(localStorage.getItem('categories'));
  const [categories, setCategories] = useState(savedCategories || initialCategories);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [discPrice, setDiscPrice] = useState('');
  const [img, setImg] = useState('');

  const saveToLocalStorage = () => {
    localStorage.setItem('productName', name);
    localStorage.setItem('menuCode', code);
    localStorage.setItem('productDescription', desc);
    localStorage.setItem('price', price);
    localStorage.setItem('discountedPrice', discPrice);
    localStorage.setItem('img', img);
    localStorage.setItem('selectedCategory', selectedCategory);
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
            className="mt-1 border border-gray-300 p-2 rounded-md w-full bg-[#1A1A1A] outline-none"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        {/* Menu code */}
        <label className="mb-2 text-white">
          Menu code
          <input
            type="text"
            className="mt-1 border border-gray-300 p-2 rounded-md w-full bg-[#1A1A1A] outline-none"
            placeholder="Menu code"
            onChange={(e) => setCode(e.target.value)}
            value={code}
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
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
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
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
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
              onChange={(e) => setPrice(e.target.value)}
              value={price}
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
              onChange={(e) => setDiscPrice(e.target.value)}
              value={discPrice}
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
              onChange={(e) => setImg(e.target.value)}
              value={img}
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

        {/* Add content for your pop-up */}
        <button className="mt-4 mx-auto bg-gradient-to-r 
        from-purple-600 to-pink-500 text-white
         p-2 rounded w-full hover:to-purple-600 hover:from-pink-500
         transition ease-out duration-500"
         onClick={() => {
          saveToLocalStorage();}}>
        Add Product
        </button>
    </div>
  );
}