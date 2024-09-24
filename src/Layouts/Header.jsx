import { IoMdSearch } from "react-icons/io";
import CustomDropdown from "../ui/dropdown/dropdown-vuexy";
import { detailedMenuItems, simpleMenuItems } from "../service/data";
import { MdOutlineWbSunny, MdTranslate } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="relative w-full mt-4">
      <div className="container">
        <div className="border flex justify-between items-center border-gray-200 rounded-md px-6 py-4">
          <button className="flex items-center">
            <IoMdSearch className="text-[24px] text-[gray]" />
            <span className=" text-[20px] text-[gray] ml-3">
              Search (Ctrl+/)
            </span>
          </button>
          <div className="flex">
            <CustomDropdown
              items={detailedMenuItems}
              triggerText={
                <MdTranslate className="text-[24px] cursor-pointer" />
              }
              className="mr-8"
              classTag={
                "absolute mt-2 top-[-7px] right-[-10px] w-[16vh] border bg-white shadow-lg  border-gray-200 rounded-md"
              }
            />

            <CustomDropdown
              items={simpleMenuItems}
              triggerText={
                <MdOutlineWbSunny className="text-[24px] cursor-pointer" />
              }
              className="mr-8"
              classTag={
                "absolute mt-2 top-[-4px] right-[-10px] w-[16vh] border bg-white shadow-lg  border-gray-200 rounded-md"
              }
            />
            <CustomDropdown
              items={simpleMenuItems}
              triggerText={
                <LuLayoutDashboard className="text-[24px] cursor-pointer" />
              }
              className="mr-8"
              classTag={
                "absolute mt-2 top-[-4px] right-[-10px] w-[16vh] border bg-white shadow-lg  border-gray-200 rounded-md"
              }
            />
            <CustomDropdown
              items={simpleMenuItems}
              triggerText={<FaRegBell className="text-[24px] cursor-pointer" />}
              className="mr-8"
              classTag={
                "absolute mt-2 top-[-4px] right-[-10px] w-[16vh] border bg-white shadow-lg  border-gray-200 rounded-md"
              }
            />
            <CustomDropdown
              items={simpleMenuItems}
              triggerText={
                <img
                  src="./img/1.png"
                  className="w-[30px] rounded-[50%]"
                  alt=""
                />
              }
              className="mr-8"
              classTag={
                "absolute mt-2 top-[-4px] right-[-10px] w-[16vh] border bg-white shadow-lg  border-gray-200 rounded-md"
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};
