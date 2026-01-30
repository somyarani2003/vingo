import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

function Nav() {
  return (
   <div className="w-full h-20 flex items-center justify-between
   md:justify-center gap-7.5 px-5 fixed top-0 z-9999 bg-[#fff9f6]
   overflow-visible ">
    <h1 className="text-3xl font-bold mb-2 text-[#ff4d2d] ">Vingo</h1>
    <div className="md:w-[60%] lg:w-[40%] h-17.5 bg-white shadow-xl
    rounded-lg items-center gap-5 flex ">
        <div className="flex items-center w-[30%] overflow-hidden
        gap-2.5 px-2.5 border-r-2 border-gray-400 ">
             <FaLocationDot size={25} className="text-[#ff4d2d]" />
             <div className="w-20 truncate text-gray-500 ">Jhansi</div>

        </div>
        <div className="w-[80%] flex items-center gap-2.5">
            <FaSearch size={25} className="text-[#ff4d2d]" />
            <input type="text" placeholder="search delicious food..." className="px-2.5 text-gray-700
            outline-0 w-full " />

        </div>

    </div>
    <div className="relative cursor-pointer">
    <LuShoppingCart size={25} className="text-[#ff4d2d]"/>
    <span className="absolute -right-2.25 -top-3 text-[#ff4d2d] ">0</span>
    </div>

   </div>
  );
}

export default Nav;
