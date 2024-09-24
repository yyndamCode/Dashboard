import React from "react";
import CustomDropdown from "../../ui/dropdown/dropdown-vuexy";
import { ReportsItems } from "../../service/data";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { getLimitedSalesData } from "../../utilities/helps";
import { CustomCard } from "../../ui/CustomCard";
export const MonthlyCampaign = ({ Campaign_Data, title, subTitle }) => {
  const limitedCampaignData = getLimitedSalesData(Campaign_Data);

  return (
    <CustomCard className="p-[24px]">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-lg text-gray-500 font-semibold">{title}</h5>
          <small className="text-gray-400 text-sm">{subTitle}</small>
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
      <ul>
        {limitedCampaignData.map((item, i) => (
          <li key={i} className="flex mt-6 justify-between items-center ">
            <div className="flex items-center ">
              <span
                className={`block text-[22px]  rounded-md p-[8px] text-[${item.iconColor}] bg-[${item.iconBg}]`}
              >
                {item.icon}
              </span>
              <h4 className="text-gray-500 font-medium ml-4">{item.title}</h4>
            </div>
            <div className="flex items-center">
              <h4 className="text-gray-500 font-medium ">{item.count}</h4>
              <p className="text-green-400 font-medium ml-4">
                {item.percentage}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </CustomCard>
  );
};
