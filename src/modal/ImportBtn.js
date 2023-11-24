import React, { useRef } from 'react';
import { LuArrowUpFromLine } from "react-icons/lu";

export default function ImportBtn() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle file change here
    const selectedFile = e.target.files[0];
    console.log('Selected File:', selectedFile);

    // You can implement further logic for handling the selected file
  };

  return (
    <div>
      <button
        className="flex space-x-2 items-center px-3 py-2 bg-slate-800 hover:bg-green-800 rounded-md ease-out transition duration-300 drop-shadow-md"
        onClick={handleButtonClick}
      >
        <LuArrowUpFromLine
          className="text-white"
          style={{ fontSize: '20px' }} // Adjust the size if needed
        />
        <span className="text-white font-bold">Import</span>
      </button>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
}
