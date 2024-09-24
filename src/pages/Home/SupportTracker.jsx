import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import CustomDropdown from "../../ui/dropdown/dropdown-vuexy";
import { ReportsItems } from "../../service/data";
import { LuTicket } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { CustomCard } from "../../ui/CustomCard";

export const SupportTracker = () => {
  const value = 85; // Adjust value as needed
  const label = "Completed Task";
  const color = "#5d596c"; // Adjust color as needed
  return (
    <CustomCard className="p-6">
      <div className="flex justify-between items-center ">
        <div>
          <h5 className=" text-[22px] text-gray-500 leading-7 font-semibold">
            Support Tracker
          </h5>
          <small className="text-gray-400 text-sm">Last 7 Days</small>
        </div>
        <CustomDropdown
          items={ReportsItems}
          triggerText={
            <BiDotsVerticalRounded className="text-[24px] cursor-pointer" />
          }
          className=" text-gray-500"
          classTag={
            "absolute mt-2 top-[-17px] right-[0px] w-[16vh] border bg-white shadow-lg  border-gray-200 rounded-md"
          }
        />
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <div className="my-[24px]">
            <h1 className="text-gray-500 text-[38px] leading-[48px] font-semibold">
              164
            </h1>
            <p className="text-[18px] text-gray-500">New Tickets</p>
          </div>
          <div className="flex items-center mb-[20px] mt-2">
            <span className="block text-[18px] text-[#7367f0] bg-[#eae8fd] rounded-md p-[6px]">
              <LuTicket />
            </span>
            <div className="ml-3">
              <h6 className="text-gray-500  text-[16px]">Earnings</h6>
              <small className="text-gray-400 text-sm">142</small>
            </div>
          </div>
          <div className="flex items-center mb-[20px] mt-2">
            <span className="block text-[18px] text-[#00cfe8] bg-[#d9f8fc] rounded-md p-[6px]">
              <FaRegCircleCheck />
            </span>
            <div className="ml-3">
              <h6 className="text-gray-500  text-[16px]">Open Tickets</h6>
              <small className="text-gray-400 text-sm">28</small>
            </div>
          </div>
          <div className="flex items-center mb-[20px] mt-2">
            <span className="block text-[18px] text-[#ff9f43] bg-[#fff1e3] rounded-md p-[6px]">
              <GoClock />
            </span>
            <div className="ml-3">
              <h6 className="text-gray-500  text-[16px]">Response Time</h6>
              <small className="text-gray-400 text-sm">1 Day</small>
            </div>
          </div>
        </div>
        <div className="col-span-2">ddddddddddd</div>
      </div>
    </CustomCard>
  );
};
