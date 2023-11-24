import { HiOutlinePlusSm } from "react-icons/hi";


export default function BoxProducts () {
    return (
        <div className="bg-[#313131]
        md:w-[228px] w-10/12
        h-[206px] items-center
        p-[16px] gap-[12px] border-2
        border-green-500 md:mx-0
        mx-auto
        justify-center text-white
        flex flex-col cursor-pointer">
            <HiOutlinePlusSm 
                size={20}
            />
            <span
                className="font-medium
                text-[16px]"
            >Add New Product</span>
        </div>
    )
}