import { useState } from 'react';
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoIosClose } from 'react-icons/io';
import InputField from '../modal/InputField';

export default function BoxProducts() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleBoxClick = () => {
    setPopupVisible(true);
  };

  return (
    <>
      <div className="bg-[#313131] md:w-[228px] w-10/12 h-[206px] items-center p-[16px] gap-[12px] border-dashed border-gray-500 md:mx-0 mx-auto border-2 justify-center text-white flex flex-col cursor-pointer" style={{ borderSpacing: "8px" }} onClick={handleBoxClick}>
        <HiOutlinePlusSm size={20} />
        <span className="font-medium text-[16px]">Add New Product</span>
      </div>

      {isPopupVisible && (
        <PopUp onClose={() => setPopupVisible(false)} />
      )}
    </>
  );
}

function PopUp({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="md:w-[600px] w-4/5 h-auto p-4 bg-[#222222] flex flex-col relative">
        <IoIosClose
          size={24}
          className='text-white absolute top-4 right-4 cursor-pointer'
          onClick={onClose}
        />
        <h3 className="font-bold text-[18px] text-center
        mt-6 text-white">Add Menu</h3>
        <InputField/>
        
        {/* Add content for your pop-up */}
        <button className="mt-4 mx-auto bg-gradient-to-r 
        from-purple-600 to-pink-500 text-white
         p-2 rounded md:w-4/5 hover:to-purple-600 hover:from-pink-500
         transition ease-out duration-500">
        Add Product
        </button>

      </div>
    </div>
  );
}
