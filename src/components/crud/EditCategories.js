import React, { useState } from 'react';

const EditCategories = ({ categories, onSave, onCancel }) => {
  const [editedCategories, setEditedCategories] = useState(categories);

  const handleCategoryChange = (index, value) => {
    const newCategories = [...editedCategories];
    newCategories[index] = value;
    setEditedCategories(newCategories);
  };

  const handleSave = () => {
    onSave(editedCategories);
  };

  return (
    <div>
      <h3 className="text-white font-bold text-[18px] mb-4">Edit Categories</h3>
      {editedCategories.map((category, index) => (
        <input
          key={index}
          type="text"
          value={category}
          onChange={(e) => handleCategoryChange(index, e.target.value)}
          className="mb-2 p-2 rounded-md w-full bg-[#1A1A1A] outline-none text-white"
        />
      ))}
      <div className="flex justify-end">
        <button
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-2 rounded hover:to-purple-600 hover:from-pink-500 transition ease-out duration-500"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="ml-2 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition ease-out duration-500"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditCategories;
