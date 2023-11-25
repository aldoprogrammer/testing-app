import { useState } from 'react';
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoIosClose } from 'react-icons/io';
import InputField from '../modal/InputField';
import Drink from '../assets/drink.png';

export default function BoxProducts() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleBoxClick = () => {
    setPopupVisible(true);
  };

  return (
    <div className='flex flex-wrap md:gap-4'>
      <div className='h-auto md:w-[228px] w-full
      bg-[#313131] p-[16px] flex flex-col mb-4
      md:mb-5
      rounded-md'>
        <label
          className='text-base
          text-white my-2'
        >15.000 NT</label>
        <img 
          src={Drink} 
          className='w-full h-[145px]
          rounded-md'></img>
         <h4
          className='text-base font-bold
          mt-1'
          style={{
            background: 'linear-gradient(to right, #AB5CFA, #F06595)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}
        >
          Pack of Beverages (6Pcs of Heineken)
        </h4>
        <p className='text-[#9F9E9F] font-normal
        text-[14px] mt-2 mb-2'>
        Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol. 
        </p>
        <span
          className='font-bold text-[14px]
          text-white'
        >6pcs</span>
      </div>
      <div className="bg-[#313131] md:w-[228px] w-full h-[206px] items-center p-[16px] gap-[12px] border-dashed border-gray-500 md:mx-0 mx-auto border-2 justify-center text-white flex flex-col cursor-pointer" style={{ borderSpacing: "8px" }} onClick={handleBoxClick}>
        <HiOutlinePlusSm size={20} />
        <span className="font-medium text-[16px]">Add New Product</span>
      </div>

      {isPopupVisible && (
        <PopUp onClose={() => setPopupVisible(false)} />
      )}
    </div>
  );
}

function PopUp({ onClose }) {
  return (
    <div className="absolute top-10 xl:right-80
    right-1 flex md:right-[80px] lg:right-56
    items-center justify-center mb-10 
    ">
      <div className="md:w-[600px] w-4/5 h-auto p-4 bg-[#222222] flex flex-col relative
      pb-10  mb-10 ">
        <IoIosClose
          size={24}
          className='text-white absolute top-4 right-4 cursor-pointer'
          onClick={onClose}
        />
        <h3 className="font-bold text-[18px] text-center
        mt-6 text-white">Add Menu</h3>
        <InputField/>
        
      

      </div>
    </div>
  );
}
