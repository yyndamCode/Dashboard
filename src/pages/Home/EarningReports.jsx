import React from "react";
import CustomDropdown from "../../ui/dropdown/dropdown-vuexy";
import { ReportsItems } from "../../service/data";
import { BiDotsVerticalRounded } from "react-icons/bi";
import BarChart from "../../ui/BarCharts";
import { TbChartPie2 } from "react-icons/tb";
import { TbCurrencyDollar } from "react-icons/tb";
import { TbBrandPaypal } from "react-icons/tb";
import { Progress } from "antd";
import { CustomCard } from "../../ui/CustomCard";
export const EarningReports = () => {
  return (
    <CustomCard className="p-6">
      <div className="flex justify-between items-center">
        <h5 className=" text-[22px] text-gray-500 leading-7 font-semibold">
          Earning Reports
        </h5>
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
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col justify-between">
          <small className="text-gray-400 text-sm">Revenue Generated</small>
          <div>
            <div className="flex items-center my-3 justify-between">
              <h1 className="text-gray-500 text-[38px] font-semibold">$468</h1>
              <span className="relative  ml-2 bg-[#dff7e9] px-3  rounded-md text-green-400">
                +4.2%{" "}
              </span>
            </div>
            <small className="text-gray-400 text-[14px] leading-[12px]">
              You informed of this week compared to last week
            </small>
          </div>
        </div>
        <div className="col-span-2">
          <BarChart />
        </div>
      </div>
      <div className="w-full mt-4 p-3 border rounded">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" ">
            <div className="flex items-center">
              <span className="block text-[18px] text-[#7367f0] bg-[#eae8fd] rounded-md p-[6px]">
                <TbCurrencyDollar />
              </span>
              <h6 className="text-gray-500 ml-3 text-[16px]">Earnings</h6>
            </div>
            <h4 className="my-2 pt-1 text-gray-500 text-[22px] font-medium">
              $545.69
            </h4>
            <Progress
              percent={100}
              success={{
                percent: 50,
                strokeColor: "rgba(115, 103, 240, 0.7)",
              }}
              strokeColor="#f1f0f2"
              trailColor="#f1f0f2"
              showInfo={false}
              strokeWidth={6}
              style={{ paddingRight: "25px" }}
            />
          </div>
          <div className=" ">
            <div className="flex items-center">
              <span className="block text-[18px] text-[#00cfe8] bg-[#d9f8fc] rounded-md p-[6px]">
                <TbChartPie2 />
              </span>
              <h6 className="text-gray-500 ml-3 text-[16px]">Profit</h6>
            </div>
            <h4 className="my-2 pt-1 text-gray-500 text-[22px] font-medium">
              $545.69
            </h4>
            <Progress
              percent={100}
              success={{
                percent: 50,
                strokeColor: "rgb(0 ,207 ,232)",
              }}
              strokeColor="#f1f0f2"
              trailColor="#f1f0f2"
              showInfo={false}
              strokeWidth={6}
              style={{ paddingRight: "25px" }}
            />
          </div>
          <div className=" ">
            <div className="flex items-center">
              <span className="block text-[18px] text-[#ea5455] bg-[#fce5e6] rounded-md p-[6px]">
                <TbBrandPaypal />
              </span>
              <h6 className="text-gray-500 ml-3 text-[16px]">Expense</h6>
            </div>
            <h4 className="my-2 pt- text-gray-500 text-[22px] font-medium">
              $545.69
            </h4>
            <Progress
              percent={100}
              success={{
                percent: 50,
                strokeColor: "rgb(234 84 85 / 98%)",
              }}
              strokeColor="#f1f0f2"
              trailColor="#f1f0f2"
              showInfo={false}
              strokeWidth={6}
              style={{ paddingRight: "25px" }}
            />
          </div>
        </div>
      </div>
    </CustomCard>
  );
};
