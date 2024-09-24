import React from "react";
import { PiLinkSimpleLight } from "react-icons/pi";
import { CustomCard } from "../../ui/CustomCard";

export const SalesOverview = ({ title, icon, percentage, value, secondaryValue }) => {
  return (
    <CustomCard className={"w-[calc(50%)] p-6"}>
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-[16px]">{title}</p>
        <h4 className="text-green-400 text-[20px]">{percentage}</h4>
      </div>
      <h2 className="text-[26px] font-medium text-gray-600 leading-[32px]">
        {value}
      </h2>
      <div className="flex justify-between mt-[24px] ">
        <div>
          <div className="flex ">
            <span className="block px-2  py-1 mr-2 text-[18px] bg-[#eae8fd] text-[#00cfe8] rounded-md">
              {icon}
            </span>
            <p className="text-gray-400 text-[18px] font-normal">Order</p>
          </div>
          <h5 className="mb-0 pt-3 text-[22px] leading-7 font-semibold">
            {secondaryValue}
          </h5>
          <small className="text-gray-400 text-sm">6,440</small>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <div className="inline-block h-[30px] min-h-[1em] w-[1px] mb-2 bg-gray-300 opacity-100 dark:opacity-50"></div>
          <span className="bg-gray-300 block rounded-[50%] w-[25px] text-center h-[25px]">
            vs
          </span>
          <div className="inline-block h-[30px] min-h-[1em] w-[1px] mt-2 bg-gray-300 opacity-100 dark:opacity-50"></div>
        </div>
        <div>
          <div className="flex ">
            <p className="text-gray-400 text-[18px] font-normal">Visits</p>
            <span className="block px-2  py-1 ml-2 text-[18px] bg-[#d9f8fc] text-[#00cfe8] rounded-md">
              <PiLinkSimpleLight />
            </span>
          </div>
          <h5 className="mb-0 pt-3 text-[22px] leading-7 font-semibold">
            25.7%
          </h5>
          <small className="text-gray-400 text-sm">6,440</small>
        </div>
      </div>
      <div className="mt-[20px]"></div>
    </CustomCard>
  );
};
