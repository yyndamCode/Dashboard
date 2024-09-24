import React from "react";
import CustomDropdown from "../../ui/dropdown/dropdown-vuexy";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ReportsItems } from "../../service/data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { getLimitedSalesData } from "../../utilities/helps";
import { CustomCard } from "../../ui/CustomCard";

export const SalesCountriesCard = ({ sales_Data }) => {
  const limitedSalesData = getLimitedSalesData(sales_Data);

  return (
    <CustomCard className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-lg text-gray-500 font-semibold">
            Sales by Countries
          </h5>
          <small className="text-gray-400 text-sm">
            Monthly Sales Overview
          </small>
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
        {limitedSalesData.map((country, i) => (
          <li key={i} className="flex mt-4 justify-between items-center">
            <div className="flex items-center">
              <img
                src={country.flag}
                className="w-9 h-9 rounded-full"
                alt={`${country.country} flag`}
              />
              <div className="ml-5">
                <h4 className="text-gray-500 font-medium">{country.amount}</h4>
                <small className="text-gray-400 text-sm">
                  {country.country}
                </small>
              </div>
            </div>
            <div
              className={`flex gap-1 items-center ${
                country.status === "active" ? "text-green-400" : "text-red-400"
              }`}
            >
              <span className="mt-1 mr-2">
                {country.status === "active" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
              <p className="font-medium">{country.percentage}</p>
            </div>
          </li>
        ))}
      </ul>
    </CustomCard>
  );
};
