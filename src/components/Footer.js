export default function Footer() {
    const footerMenus = [
      {
        title: 'Nightclub Profile',
      },
      {
        title: 'Featured',
      },
      {
        title: 'Beverages',
      },
      {
        title: 'Table Information',
      },
      {
        title: 'Operational Hour',
      },
      {
        title: 'NEXT',
      },
    ];
  
    return (
      <div className="w-screen 
      h-auto bg-slate-800 
       ">
        <div className=" border-t-2
       border-[#EF9533] mt-16
        w-6/12 md:mt-0"/>
        <div className="flex 
        space-x-4
        justify-between overflow-x-auto">
          {footerMenus.map((menu, index) => (
            <button
              key={index}
              className={`${
                ['Nightclub Profile', 'Featured', 'Beverages'].includes(
                  menu.title
                )
                  ? 'text-[#EF9533]'
                  : 'text-white'
              } ${
                menu.title === 'NEXT'
                ? 'bg-[#AB5CFA] p-[12px] md:w-[1/5]'
                : ''
              } hover:text-gray-300 
              transition duration-300 
              focus:outline-none md:w-1/5
              text-center w-1/5 font-medium
              md:text-[14px] text-[10px]`}
            >
              {menu.title}
            </button>
          ))}
        </div>
      </div>
    );
  }
  