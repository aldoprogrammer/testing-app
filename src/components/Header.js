import { IoMdArrowRoundBack } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";


function Header(){
    return (
        <div className="w-full flex flex-row
        h-[130px] bg-gradient-to-b from-purple-500 to-slate-800
        md:p-10 p-4 justify-between">
            <div className="md:w-10/12
        w-full flex flex-row
        justify-between">
            <div className="flex flex-row
            gap-1 cursor-pointer 
            items-center md:ml-[110px] lg:ml-[201px]
            ">
            <IoMdArrowRoundBack
                size={18}
                className="text-white"
            />
                <p
                    className="text-[18px] font-semibold
                    text-[#FFFFFF]"
                >Back</p>
            </div>
            <div className="flex flex-row
            md:ml-[201px] gap-1
            items-center">
                <BsBoxSeam
                    size={19}
                    className="text-white"
                />
                <h6
                    className="font-medium text-[24px]
                    	text-white"
                >Product list</h6>
            </div>
            </div>
        </div>
    )
}

export default Header