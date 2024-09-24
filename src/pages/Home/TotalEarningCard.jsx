import React from "react";
import CustomDropdown from "../../ui/dropdown/dropdown-vuexy";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ReportsItems } from "../../service/data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { TbBrandPaypal, TbCurrencyDollar } from "react-icons/tb";
import { CustomCard } from "../../ui/CustomCard";

export const TotalEarningCard = () => {
  const status = "active";
  return (
    <CustomCard className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-lg text-gray-500 font-semibold">Total Earning</h5>
        </div>
        <CustomDropdown
          items={ReportsItems}
          triggerText={
            <BiDotsVerticalRounded className="text-2xl cursor-pointer" />
          }
          className="text-gray-500"
          classTag="absolute mt-2 top-[-17px] right-0 w-40 border bg-white shadow-lg border-gray-200 rounded-md"
        />
      </div>
      <div className="flex items-center">
        <h1 className="mb-0 mr-4 text-[40px] text-gray-500 font-medium">87%</h1>
        <div
          className={`flex gap-1 items-center ${
            status === "active" ? "text-green-400" : "text-red-400"
          }`}
        >
          <span className="mt-1 mr-2">
            {status === "active" ? <FaChevronUp /> : <FaChevronDown />}
          </span>
          <p className="font-medium">25.8%</p>
        </div>
      </div>
      <ul>
        <li className="flex mt-4 justify-between items-center">
          <div className="flex items-center">
            <span className="block text-[22px] text-[#7367f0] bg-[#eae8fd] rounded-md p-[8px]">
              <TbCurrencyDollar />
            </span>
            <div className="ml-5">
              <h4 className="text-gray-500 font-medium">Total Sales</h4>
              <small className="text-gray-400 text-sm">Refund</small>
            </div>
          </div>
          <p className="font-medium text-green-400">+$98</p>
        </li>
        <li className="flex mt-4 justify-between items-center">
          <div className="flex items-center">
            <span className="block text-[22px] text-[#a8aaae] bg-[#f2f2f3] rounded-md p-[8px]">
              <TbBrandPaypal />
            </span>
            <div className="ml-5">
              <h4 className="text-gray-500 font-medium">Total Sales</h4>
              <small className="text-gray-400 text-sm">Refund</small>
            </div>
          </div>
          <p className="font-medium text-green-400">+$98</p>
        </li>
      </ul>
    </CustomCard>
  );
};
