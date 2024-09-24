import React from "react";
import { CustomCard } from "../../ui/CustomCard";
import { ProjectsTable } from "../../ui/ProjectsTable";

export const Projects = () => {
  return (
    <CustomCard className="">
      <div className="flex justify-between items-center p-6">
        <h5 className="text-lg text-gray-500 font-semibold">Project</h5>
        <label className="flex items-center">
          <small className="text-gray-400 text-sm mr-3">Search:</small>
          <input
            type="text"
            className="border p-[4px_10px] text-base w-[100%] rounded-md border-gray-300"
          />
        </label>
      </div>
      <ProjectsTable />
    </CustomCard>
  );
};
