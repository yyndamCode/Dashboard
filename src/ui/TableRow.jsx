import { Progress } from "antd";
import React from "react";
import CustomDropdown from "./dropdown/dropdown-vuexy";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ReportsItems } from "../service/data";

export const TableRow = ({ project }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            src={project.img}
            className="w-9 h-9 rounded-full"
            alt={`${project.name} `}
          />
          <div className="ml-4">
            <h4 className="text-gray-800 font-medium">{project.name}</h4>
            <small className="text-gray-400 text-sm">{project.date}</small>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{project.leader}</td>
      <td className="px-6 py-4 whitespace-nowrap">1</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <Progress
            percent={project.progress}
            success={{
              percent: project.progress,
              strokeColor: "rgba(115, 103, 240, 0.7)",
            }}
            strokeColor="#f1f0f2"
            trailColor="#f1f0f2"
            showInfo={false}
            strokeWidth={7}
            style={{ paddingRight: "" }}
          />
          <p className="ml-4 text-gray-600 text-sm">{project.progress}%</p>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <CustomDropdown
          items={ReportsItems}
          triggerText={
            <BiDotsVerticalRounded className="text-[24px] cursor-pointer" />
          }
          className="text-gray-500"
          classTag={
            "absolute mt-2 top-[-17px] right-[0px] w-[16vh] border bg-white shadow-lg border-gray-200 rounded-md"
          }
        />
      </td>
    </tr>
  );
};
