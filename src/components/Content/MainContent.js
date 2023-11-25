import ImoprtBtn from "../../modal/ImportBtn";
import Search from "../../modal/Search";
import { TbPencil } from "react-icons/tb";
import BoxProducts from "../BoxProducts";
import Footer from "../Footer";
import React, { useState, useEffect } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import EditCategories from '../crud/EditCategories';



export default function MainContent () {
    const initialCategories = [
        'Cocktail',
        'Shooters',
        'Premium Spirits',
        'Non-Alcoholic Beverages',
      ];
    
      const savedCategories = JSON.parse(localStorage.getItem('categories'));
      const [categories, setCategories] = useState(savedCategories || initialCategories);
    
      const [isEditing, setEditing] = useState(false);
    
      useEffect(() => {
        // Save categories to localStorage whenever it changes
        localStorage.setItem('categories', JSON.stringify(categories));
      }, [categories]);
    
      const handleEditClick = () => {
        setEditing(true);
      };
    
      const handleSaveCategories = (newCategories) => {
        setCategories(newCategories);
        setEditing(false);
      };
    
      const handleCancelEdit = () => {
        setEditing(false);
      };
    
      

    return (
        <div className="md:w-3/5
        w-10/12 h-auto 
        mx-auto">
            <div className="flex
            flex-row justify-between
            items-center">
                <Search 
                    bgColor="bg-[#333333]"
                    textColor="text-white"
                    placeholderColor="text-gray-400"
                    placeholder="Search product"
                    fontSize="text-[14px]"
                    iconColor="text-[#AA5AFA]"
                    widthInput="md:w-[255px] w-[150px]"
                />
                <ImoprtBtn />
            </div> 
            <div>
      {isEditing ? (
        <EditCategories
          categories={categories}
          onSave={handleSaveCategories}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div className="flex flex-wrap bg-[#313131] rounded-md mt-8 py-[16px] px-[22px] items-center text-white gap-4 md:mx-0 mx-auto">
          <span className="font-medium text-[12px]">Category</span>
          {categories.map((category, index) => (
            <span
              key={index}
              className="font-medium text-[12px] rounded-[12px] border border-[#EEEEEE] py-[8px] px-[16px] cursor-pointer"
            >
              {category}
            </span>
          ))}
           <div className="relative inline-block group">
      <HiOutlinePencil
        size={20}
        className="cursor-pointer text-white hover:text-[#F2ECEC] transition-colors"
        onClick={handleEditClick}
      />
      <div className="opacity-0 bg-gray-800 text-white text-base rounded-md py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 transition-opacity duration-300 group-hover:opacity-100">
        Click to Edit the Categories
      </div>
    </div>
          
        </div>
      )}
    </div>
            <div className="mt-8
            flex flex-wrap ">
            <BoxProducts />
            </div>
          
        </div>
    )
}