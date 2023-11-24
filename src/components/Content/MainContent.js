import ImoprtBtn from "../../modal/ImportBtn";
import Search from "../../modal/Search";
import { TbPencil } from "react-icons/tb";
import BoxProducts from "../BoxProducts";
import Footer from "../Footer";


export default function MainContent () {
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
            <div className="flex flex-wrap
            bg-[#313131] rounded-sm mt-8
            py-[16px] px-[32px] items-center
            text-white gap-4 md:mx-0
            mx-auto">
                <span
                   className="font-medium
                   text-[14px]"     
                >
                Category</span>
                <span
                     className="font-medium
                     text-[14px] rounded-[12px]
                     border border-[#EEEEEE]
                     py-[8px] px-[16px]" 
                >
                    Cocktail
                </span>
                <span
                     className="font-medium
                     text-[14px] rounded-[12px]
                     border border-[#EEEEEE]
                     py-[8px] px-[16px]" 
                >
                    Shooters
                </span>
                <span
                     className="font-medium
                     text-[14px] rounded-[12px]
                     border border-[#EEEEEE]
                     py-[8px] px-[16px]" 
                >
                    Premium Spirits
                </span>
                <span
                     className="font-medium
                     text-[14px] rounded-[12px]
                     border border-[#EEEEEE]
                     py-[8px] px-[16px]" 
                >
                    Cocktail
                </span>
                <span
                     className="font-medium
                     text-[14px] rounded-[12px]
                     border border-[#EEEEEE]
                     py-[8px] px-[16px]" 
                >
                    Non-Alcoholic Beverages
                </span>
                <TbPencil 
                    size={20}
                    className="cursor-pointer"
                />

            </div>   
            <div className="mt-8
            flex flex-wrap ">
            <BoxProducts />
            </div>
          
        </div>
    )
}